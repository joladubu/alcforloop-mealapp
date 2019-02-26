import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

chai.should();

describe('GET /', () => {
  it('should get all available menu', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        res.should.be.an('object');
        data.should.be.an('Array');
        done();
      });
  });
});

describe('POST /', () => {
  it('should add to an existing menu', (done) => {
    const newMenu = {
      day: 'Tuesday',
      category: 'Lunch',
      meals: [
        {
          id: 1,
          name: 'Pizza',
          size: 'Large',
          price: '600',
        },
        {
          id: 2,
          name: 'Poundo Yam',
          size: 'Medium',
          price: '700',
        },
        {
          id: 3,
          name: 'Small Chops',
          size: 'Large',
          price: '350',
        },
      ],
    };
    chai.request(app)
      .post('/api/v1/menu')
      .send(newMenu)
      .end((err, res) => {
        const { data } = res.body;
        res.should.have.status(200);
        data.should.be.an('object');
        newMenu.meals.should.be.an('Array');
        newMenu.day.should.equal(data.day);
        newMenu.category.should.equal(data.category);
        done();
      });
  });
});
