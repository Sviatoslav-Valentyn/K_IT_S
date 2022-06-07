const request = require('supertest');
const app = require('../index.js');

describe("GET /user", () => {
    test("It should get me all users", async () => {
      const response = await request(app).get("/user");
      expect(response.statusCode).toBe(200);
    });
});

describe("GET /user/byId/:id", () => {
    it('should get user by id', async () => {
      
      const res = await request(app)
      .get('/user/byId/')/*enter id after '/' */
      expect(res.status).toBe(200);
    })
});

describe("POST /user/registration", () => {
    test("It should create one user", async () => {
      const response = await request(app).post("/user/registration").send({
          Name:'Maks',
          Password:'qwerty123',
          Email:'likeapropro@gmail.com',
          PhoneNumber:'0934567824'
      });
      expect(response.statusCode).toBe(200);
    });
});

describe("POST /user/login", () => {
    test("It should login to user accouunt", async () => {
      const response = await request(app).post("/user/login").send({
          Password:'qwerty123',
          Email:'likeapro@gmail.com'
      });
      expect(response.statusCode).toBe(200);
    });
});

describe("PUT /user/:id", () => {
    it('should update data in db', async () => {
      
    const res = await request(app)
    .put('/user/byId/')/*enter id after '/' */
    .send({ Name:'Arsen' });
  
    expect(res.status).toBe(200);
    })
});
  
describe("DELETE /user/:id", () => {
    it('should delete data in db', async () => {
        
    const res = await request(app)
    .delete('/user/byId/')/*enter id after '/' */
    
    expect(res.status).toBe(200);
    })
});