const request = require('supertest');
const app = require('../index.js');

describe("GET /promocode/", () => {
    it('should get promocode', async () => {
      
      const res = await request(app)
      .get('/promocode/')
      expect(res.status).toBe(200);
    })
});

describe("POST /promocode/", () => {
    test("It should create promocode", async () => {
      const response = await request(app).post("/promocode/").send({
          Promocode:'test'
      });
      expect(response.statusCode).toBe(200);
    });
});

describe("POST /promocode/enter", () => {
    test("It should enter promocode", async () => {
      const response = await request(app).post("/promocode/enter").send({
          Promocode:'GOODPROMO'
      });
      expect(response.statusCode).toBe(200);
    });
});