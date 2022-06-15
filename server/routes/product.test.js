const request = require('supertest');
const app = require('../index.js');

describe("GET /product/byId/:id", () => {
  it('should get data by id', async () => {
    
    const res = await request(app)
    .get('/product/byId/2')/*enter id after '/' */
    expect(res.status).toBe(200);
  })
});

describe("GET /product/byType/:type", () => {
  it('should get data by type', async () => {
    
    const res = await request(app)
    .get("/product/byType/women's coat")/*enter type after '/' */
    expect(res.status).toBe(200);
  })
});

describe("POST /product", () => {
    test("It should post one product", async () => {
      const response = await request(app).post("/product").send({
          Type:"women's shirt",
          Category:"Women's clothing",
          Title:'shirt',
          Price:'123456',
          Colour:'Green',
          Size:'Full',
          Descryption:'nice t-shirt',
          Composition:'100% tests'
      });
      expect(response.statusCode).toBe(200);
    });
});

describe("PUT /product/:id", () => {
  it('should update data in db', async () => {
    
    const res = await request(app)
    .put('/product/byId/340')/*enter id after '/' */
    .send({ Title: 'Joe', Price: 2345 });

    expect(res.status).toBe(200);
  })
});

describe("DELETE /product/:id", () => {
    it('should delete data in db', async () => {
      
      const res = await request(app)
      .delete('/product/byId/350')/*enter id after '/' */
  
      expect(res.status).toBe(464);
    })
});