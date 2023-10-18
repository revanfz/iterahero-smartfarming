import { prisma } from "../config/prisma";
import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { uploadImage } from "../config/cloudinary";
import { Readable } from "stream";

interface InputGreenhouse {
    name: string,
    location: string,
    thumbnail: Readable,
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const id = parseInt(request.query.id);
        let data;
        if (!Number.isNaN(id)) {
            data = await prisma.greenhouse.findUnique({
                where: {
                    id
                }
            })
        } else {
            data = await prisma.greenhouse.findMany({
                where: {
                    user: {
                        every: {
                            id: id_user
                        }
                    }
                }
            })
        }
        
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
        await prisma.$disconnect();
    }
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const { name, thumbnail, location } = request.payload as InputGreenhouse;
        console.log(thumbnail)

        const isExist = await prisma.greenhouse.findUnique({
            where: {
                name
            }
        });

        if (isExist) {
            return Boom.forbidden(`Greenhouse ${name} sudah ada.`)
        }
        const upload = await uploadImage(thumbnail, name);

        if (!upload) {
            throw Error("Terjadi kesalahan saat mengupload")
        }

        await prisma.greenhouse.create({
            data: {
                name,
                thumbnail: upload.secure_url,
                user: {
                    connect: {
                        id: id_user
                    }
                },
                location
            }
        })

        return h.response({
            status: "ok",
            message: `Greenhouse ${name} berhasil ditambahkan.`
        }).code(200)
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return Boom.internal(e, { kocak: "wwkwk" });
        }
    } finally {
        await prisma.$disconnect();
    }
}

export const sensorByGreenhouseHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id = parseInt(request.params.id);
        const data = await prisma.sensor.findMany({
            where: {
                greenhouseId: id
            }
        })

        if (!data) {
            return Boom.notFound("Tidak ada sensor di greenhouse terpilih");
        }

        return h.response({
            status: "success",
            data
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return Boom.internal(e.message)
        }
    }
    finally {
        await prisma.$disconnect();
    }
}

export const actuatorByGreenhouseHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id = parseInt(request.params.id);
        const data = await prisma.aktuator.findMany({
            where: {
                greenhouseId: id
            },
            select: {
                tandon: {
                    select: {
                        aktuator: true
                    }
                }
            }
        })
        return h.response({
            status: "success",
            data
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return Boom.internal(e.message)
        }
    }
    finally {
        await prisma.$disconnect()
    }
}

export const ghByIdHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id = parseInt(request.query.id);
        const data = await prisma.greenhouse.findUnique({
            where: {
                id
            }
        })

        if (!data) {
            return Boom.notFound("Tidak ada gh tersebut.")
        }

        return h.response({
            status: 'success',
            data
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e)
            return Boom.internal(e.message)
        }
    }
    finally {
        prisma.$disconnect()
    }
}