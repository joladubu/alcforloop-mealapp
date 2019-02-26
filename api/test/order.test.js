import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

chai.should();

describe('GET /', () => {
  it('should get all the menu', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        res.should.be.an('object');
        data.should.be.an('Array');
        data.length.should.equal(5);
        done();
      });
  });
});

describe('POST /', () => {
  it('should add to the existing menu', (done) => {
    const newMenu = {
      orderId: 15, customerName: 'Agboola Olaide', mealName: 'Chicken Pizza', quantity: '2', price: '3000', status: 'Completed',
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(newMenu)
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        newMenu.orderId.should.equal(data.orderId);
        newMenu.customerName.should.equal(data.customerName);
        newMenu.mealName.should.equal(data.mealName);
        newMenu.price.should.equal(data.price);
        newMenu.quantity.should.equal(data.quantity);
        newMenu.status.should.equal(data.status);
        done();
      });
  });
});

describe('PUT /:id', () => {
  it('should update an existing order', (done) => {
    const updateOrder = {
      orderId: 10, customerName: 'Oyawale Deborah', mealName: 'Chicken Wings', quantity: '1', price: '500', status: 'Completed',
    };
    chai.request(app)
      .put('/api/v1/orders/15')
      .send(updateOrder)
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        updateOrder.orderId.should.equal(data.orderId);
        updateOrder.customerName.should.equal(data.customerName);
        updateOrder.mealName.should.equal(data.mealName);
        updateOrder.price.should.equal(data.price);
        updateOrder.quantity.should.equal(data.quantity);
        updateOrder.status.should.equal(data.status);
        done();
      });
  });
});
