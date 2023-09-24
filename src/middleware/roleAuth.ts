import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";

const publicRoute = [
    "/",
    "/login",
    "/logout",
    "/register"
]

const adminRoute = [
    "/monitoring",
    "/controlling",
]

export const userAuthorization = (request: Request, h: ResponseToolkit) => {
    const target = request.route.path;
    if (!publicRoute.includes(target)) {
        const user = request.auth.credentials;
        if (adminRoute.includes(target) && user.role !== "admin") {
            return Boom.unauthorized("Hanya bisa diakses admin")
        }
    }
    return h.continue;
}