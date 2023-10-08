import { prisma } from "../config/prisma";
import Identifier from "../models/Identifier";
import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { uploadImage } from "../config/cloudinary";
import { Readable } from "stream";

interface InputGreenhouse {
    nama: string,
    thumbnail: Readable,
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const data = await prisma.greenhouse.findMany({
            where: {
                user: {
                    every: {
                        id: id_user
                    }
                }
            }
        })
        if (!data) {
            return Boom.notFound("Tidak ada greenhouse.")
        }

        return h.response({
            status: "success",
            data
        }).code(200);
    }
    catch(e) {
        if (e instanceof Error) {
            console.log(e)
            return Boom.internal(e.message);
        }
    }
    finally {
        prisma.$disconnect();
    }
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const { nama, thumbnail } = request.payload as InputGreenhouse;
        console.log(thumbnail)

        const isExist = await prisma.greenhouse.findUnique({
            where: {
                nama
            }
        });

        if (isExist) {
            return Boom.forbidden(`Greenhouse ${nama} sudah ada.`)
        }
        const upload = await uploadImage(thumbnail, nama);

        if (!upload) {
            throw Error("Terjadi kesalahan saat mengupload")
        }

        await prisma.greenhouse.create({
            data: {
                nama,
                thumbnail: upload.secure_url,
                user: {
                    connect: {
                        id: id_user
                    }
                }
            }
        })

        return h.response({
            status: "ok",
            message: `Greenhouse ${nama} berhasil ditambahkan.`
        }).code(200)
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return Boom.internal(e, { kocak: "wwkwk" });
        }
    } finally {
        prisma.$disconnect();
    }
}