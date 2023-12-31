import { Server } from "@hapi/hapi";
import chai, { expect } from "chai";
import { afterEach, beforeEach, describe, it } from "mocha";
import { init } from "../src/server";
import { bearer } from "./auth";

describe("Home", async () => {
  let server: Server;

  beforeEach((done) => {
    init().then((s) => {
      server = s;
      done();
    });
  });

  afterEach((done) => {
    server.stop().then(() => done());
  });

  it("GET Home", async () => {
    const res = await server.inject({
      method: "GET",
      url: "/",
    });
    expect(res.statusCode).to.equal(200);
    expect(res.result).to.deep.equal({
      status: "success",
      message: "Welcome to iterahero2023 API",
    });
  });

  it("login responds", async () => {
    const res = await server.inject({
      method: "GET",
      url: "/api/v1/login",
    });
    expect(res.statusCode).to.equal(200);
    expect(res.result).to.deep.equal({
      status: "success",
      message: "Api login",
    });
  });
});
