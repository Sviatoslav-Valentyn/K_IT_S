const request = require('supertest');
const app = require('../index.js');

describe("GET /product", () => {
    test("It should get me all products", async () => {
      const response = await request(app).get("/product");
      expect(response.body.length).toBe(3);
      expect(response.statusCode).toBe(200);
    });
});

describe("GET /product/byId/:id", () => {
  it('should get data by id', async () => {
    
    const res = await request(app)
    .get('/product/byId/')/*enter id after '/' */
    expect(res.status).toBe(200);
  })
});

describe("GET /product/byType/:type", () => {
  it('should get data by type', async () => {
    
    const res = await request(app)
    .get('/product/byType/')/*enter type after '/' */
    expect(res.status).toBe(200);
  })
});

describe("POST /product", () => {
    test("It should post one product", async () => {
      const response = await request(app).post("/product").send({
          Type:'womens shirt',
          Category:'Womens clothing',
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
    .put('/product/byId/')/*enter id after '/' */
    .send({ Title: 'Joe', Price: 2345 });

    expect(res.status).toBe(200);
  })
});

describe("DELETE /product/:id", () => {
    it('should delete data in db', async () => {
      
      const res = await request(app)
      .delete('/product/byId/')/*enter id after '/' */
  
      expect(res.status).toBe(200);
    })
});