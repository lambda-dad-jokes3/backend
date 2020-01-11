const server = require("./server");
const request = require("supertest");
const db = require("../database/dbConfig");

describe("authRouter.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("POST to /user/register", () => {
  // it("responds with 201", async done => {
  //   await request(server)
  //     .post("/user/register")
  //     .send({ username: "test", password: "test" })
  //     .expect(201);

  //   done();
  // });

  it("responds with json", async done => {
    await request(server)
      .post("/user/register")
      .send({ username: "test1", password: "test1" })
      .expect("Content-Type", /json/i);

    done();
  });
});

describe("POST to /user/login", () => {
  it("responds with 200", async done => {
    await request(server)
      .post("/user/login")
      .send({ username: "test1", password: "test1" })
      .expect(200);

    done();
  });

  it("responds with 200", async done => {
    await request(server)
      .post("/user/login")
      .send({ username: "test1", password: "test1" })
      .expect("Content-Type", /json/i);

    done();
  });
});

describe("get request to /user", () => {
  it("responds with 200", async done => {
    await request(server)
      .get("/user")
      .expect(200);

    done();
  });

  it("responds with getting all the users", async done => {
    await request(server)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    done();
  });

  it("responds with invaild id", async done => {
    await request(server)
      .get("/user/0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect({ message: "Invalid id" });

    done();
  });
});
