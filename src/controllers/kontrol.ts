import { Request, ResponseToolkit } from "@hapi/hapi";
import prisma from "../config/prisma";
import Boom from "@hapi/boom";
import { publishData } from "../config/mqtt";
import AktuatorLog from "../models/AktuatorLog";

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id } = request.query;
    const { id_user } = request.auth.credentials as { id_user: number };
    const data = await prisma.aktuator.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        tandon: {
          select: {
            nama: true,
            location: true
          }
        },
        greenhouse: {
          select: {
            name: true,
            location: true
          }
        }
      }
    });

    if (data?.microcontrollerId) {
      const target = await prisma.microcontroller.findUnique({
        where: {
          id: data?.microcontrollerId,
        }
      });

      if (!data) {
        return Boom.notFound("Tidak ada aktuator dengan id tersebut");
      }

      if (!target) {
        return Boom.badRequest("Aktuator belum terhubung ke microcontroller");
      }

      return publishData(
        "iterahero2023/kontrol",
        JSON.stringify({
          pin: data.GPIO,
          state: !data.isActive,
          microcontroller: target?.name,
        }),
        target.id
      )
        .then(async () => {
          await prisma.aktuator.updateMany({
            where: {
              GPIO: data.GPIO,
              microcontrollerId: data.microcontrollerId,
            },
            data: {
              isActive: !data.isActive,
            },
          });
          await AktuatorLog.create({
            id_aktuator: data.id,
            message: `${data.name} ${data.isActive ? 'dimatikan' : 'menyala'}`,
            status: !data.isActive
          })
          return h
            .response({
              status: "success",
              message: `${data.name} berhasil ${
                data.isActive ? "dimatikan" : "dinyalakan"
              }`,
            })
            .code(200);
        })
        .catch(async (error) => {
          console.error("Error in publish data: ", error);
          const loc = data.tandonId ? data.tandon?.nama + ", " + data.tandon?.location : data.greenhouse?.name + ", " + data.greenhouse?.location;
          await prisma.notification.create({
            data: {
              userId: id_user,
              header: "Aktuator " + data.name + " gagal dikontrol",
              message: "Aktuator " + data.name + " gagal dikontrol, karena microcontroller " + target.name + " tidak terhubung ke internet.",
              loc: loc
            }
          })
          return Boom.serverUnavailable(
            "Mikrokontroller tidak terhubung ke internet"
          );
        });
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.badImplementation(e.message);
    }
  }
};
