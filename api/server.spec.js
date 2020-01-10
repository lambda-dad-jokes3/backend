const server = require("./server");
const request = require("supertest");
const db = require("../database/dbConfig");

describe("authRouter.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("POST to /user/register", () => {
  it("responds with 201", async done => {
    await request(server)
      .post("/user/register")
      .send({ username: "test1", password: "test1" })
      .expect(201);

    done();
  });

  it("responds with json", async done => {
    await request(server)
      .post("/user/register")
      .send({ username: "test1", password: "test1" })
      .expect("Content-Type", /json/i);

    done();
  });
});
