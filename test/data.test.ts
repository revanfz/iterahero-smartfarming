import { Server } from "@hapi/hapi";
import chai, { expect } from "chai";
import { afterEach, beforeEach, describe, it } from "mocha";
import { init } from "../src/server";
import { bearer } from "./auth";

describe("Data test", async () => {
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

  it("get resep", async () => {
    const res = await server.inject({
      method: "GET",
      url: "/api/v1/resep",
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
    expect(res.statusCode).to.equal(200);
    expect(res.result).to.deep.equal({
      status: "success",
      data: [],
    });
  });

  it("get jadwal", async () => {
    const res = await server.inject({
      method: "GET",
      url: "/api/v1/penjadwalan",
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
    expect(res.statusCode).to.equal(200);
    expect(res.result).to.deep.equal({
      status: "success",
      data: [],
    });
  });
});
