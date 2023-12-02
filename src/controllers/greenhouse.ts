import { prisma } from "../config/prisma";
import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { deleteImage, renameFile, uploadImage } from "../config/cloudinary";
import { Readable } from "stream";

interface InputGreenhouse {
  name: string;
  location: string;
  image: Readable;
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  const id = parseInt(request.query.id);
  let data;
  let total = 0;
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };

    if (!Number.isNaN(id)) {
      data = await prisma.greenhouse.findUnique({
        where: {
          id,
        },
      });
    } else {
      total = await prisma.greenhouse.count({
        where: {
          user: {
            every: {
              id: id_user,
            },
          },
        },
      });
      data = await prisma.greenhouse.findMany({
        where: {
          user: {
            every: {
              id: id_user,
            },
          },
        },
        take: isNaN(size) ? 100 : size,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });
    }

    if (!data) {
      //  || Array.isArray(data) && data.length < 1) {
      return Boom.notFound("Tidak ada greenhouse.");
    }

    const res = {
      status: "success",
      data,
      cursor: -1,
      totalPage: 1,
    };

    if (Array.isArray(data)) {
      res.cursor = data[data.length - 1]?.id;
      res.totalPage = size ? Math.ceil(total / size) : Math.ceil(total / 100);
    }

    return h.response(res).code(200);
  } catch (e) {
    await prisma.$disconnect();
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };
    const { name, image, location } = request.payload as InputGreenhouse;

    const isExist = await prisma.greenhouse.findUnique({
      where: {
        name,
      },
    });

    if (isExist) {
      return Boom.forbidden(`Greenhouse ${name} sudah ada.`);
    }
    const upload = await uploadImage(image, 'gh', name);

    if (!upload) {
      throw Error("Terjadi kesalahan saat mengupload");
    }

    await prisma.greenhouse.create({
      data: {
        name,
        image: upload.secure_url,
        user: {
          connect: {
            id: id_user,
          },
        },
        location,
      },
    });

    return h
      .response({
        status: "ok",
        message: `Greenhouse ${name} berhasil ditambahkan.`,
      })
      .code(200);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id);
    let img_url;
    const { name, image, location } = request.payload as InputGreenhouse;

    if (!isNaN(id)) {
      const target = await prisma.greenhouse.findUnique({
        where: {
          id,
        },
      });

      if (!target) {
        return Boom.notFound("Tidak ada gh tersebut");
      }

      if (name !== target.name) {
        await renameFile('gh-' + target.name, name);
      }

      if (image) {
        deleteImage(`gh-${target.name}`);
        img_url = await uploadImage(image, 'gh', name);
      }
      await prisma.greenhouse.update({
        where: {
          id: target.id,
        },
        data: {
          name,
          image: img_url?.secure_url ?? target.image,
          location,
        },
      });

      return h.response({
        status: "success",
        message: `Greenhouse ${target.name} berhasil diperbarui`,
      });
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id);
    if (!isNaN(id)) {
      const target = await prisma.greenhouse.findUnique({
        where: {
          id,
        },
      });
      if (!target) {
        return Boom.notFound("Tidak ada gh tersebut");
      }

      await prisma.greenhouse.delete({
        where: {
          id: target.id,
        },
      });

      await deleteImage(`gh-${target.name}`);

      return h.response({
        status: "success",
        message: `Greenhouse ${target.name} berhasil dihapus`,
      });
    } else {
      throw "Invalid id";
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const sensorByGreenhouseHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  const id = parseInt(request.params.id);
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  try {
    const total = await prisma.sensor.count({
      where: {
        greenhouseId: id,
      },
    });
    const data = await prisma.sensor.findMany({
      where: {
        greenhouseId: id,
      },
      include: {
        category: {
          select: {
            logo: true,
            name: true,
            color: true,
            satuan: true
          },
        },
      },
      cursor: cursor ? { id: cursor } : undefined,
      take: size ? size : 100,
      skip: cursor ? 1 : 0,
    });

    // if (data.length < 1) {
    //   return Boom.notFound("Tidak ada sensor di greenhouse terpilih");
    // }

    return h
      .response({
        status: "success",
        data,
        cursor: data[data.length - 1]?.id,
        totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
        totalData: await prisma.sensor.count({
          where: {
            greenhouseId: id
          }
        })
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const actuatorByGreenhouseHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  try {
    const id = parseInt(request.params.id);
    const total = await prisma.aktuator.count({
      where: {
        greenhouseId: id,
      },
    });
    const data = await prisma.aktuator.findMany({
      where: {
        greenhouseId: id,
      },
      include: {
        category: {
          select: {
            logo: true,
            name: true,
            color: true,
            satuan: true
          },
        },
      },
      take: size ? size : 100,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
    });

    // if (data.length < 1) {
    //   return Boom.notFound("Tidak ada sensor di greenhouse terpilih");
    // }

    return h
      .response({
        status: "success",
        data,
        cursor: data[data.length - 1]?.id,
        totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
        totalData: await prisma.aktuator.count({
          where: {
            greenhouseId: id
          }
        })
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const ghByIdHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id);
    const data = await prisma.greenhouse.findUnique({
      where: {
        id,
      },
    });

    if (!data) {
      return Boom.notFound("Tidak ada gh tersebut.");
    }

    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (e) {
    prisma.$disconnect();
    if (e instanceof Error) {
      console.error(e);
      return Boom.internal(e.message);
    }
  }
};
