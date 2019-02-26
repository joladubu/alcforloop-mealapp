import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('GET /', () => {
  it('should return all meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
});

describe('GET /:id', () => {
  it('should return specific meal', (done) => {
    chai.request(app)
      .get('/api/v1/meals/2')
      .end((err, res) => {
        const { data } = res.body;
        data.name.should.equal('Jollof Rice');
        data.size.should.equal('Large');
        data.price.should.equal('550');
        done();
      });
  });
});

describe('POST /', () => {
  it('should add a new meal', (done) => {
    const newPost = {
      id: 5, name: 'Yam and Egg', size: 'small', price: '400',
    };
    chai.request(app)
      .post('/api/v1/meals')
      .send(newPost)
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        newPost.id.should.equal(data.id);
        newPost.name.should.equal(data.name);
        newPost.size.should.equal(data.size);
        newPost.price.should.equal(data.price);
        done();
      });
  });
});

describe('PUT /:id', () => {
  it('should Update an existing meal', (done) => {
    const newUpdate = {
      id: 1, name: 'Bread and Beans', size: 'small', price: '700',
    };
    chai.request(app)
      .put('/api/v1/meals/1')
      .send(newUpdate)
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        newUpdate.id.should.equal(data.id);
        newUpdate.name.should.equal(data.name);
        newUpdate.size.should.equal(data.size);
        newUpdate.price.should.equal(data.price);
        done();
      });
  });
});
