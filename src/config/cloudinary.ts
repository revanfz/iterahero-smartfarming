import { UploadApiResponse, v2 } from "cloudinary";
import { Readable } from "stream";

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (image: Readable, nama: string): Promise<UploadApiResponse | undefined> => {
 return new Promise((resolve, reject) => {
    const stream = v2.uploader.upload_stream({
        folder: "iterahero2023",
        public_id: `gh-${nama}`,
        resource_type: "auto"
    }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
    })
    image.pipe(stream);
 })
};

export const deleteImage = async (publicId: string) => {
  return v2.uploader
    .destroy(publicId)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
