const request  = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello world", (done)=>{
        request(app).get("/").expect("Hello world", done);
    })
});

describe("GET /add/1/2", ()=>{
    it("Sum: 3" , (done)=>{
        request(app).get("/add/1/2").expect("Sum: 3" , done);
    })
});