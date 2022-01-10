const request = require('supertest');
const app = require('./app');
describe('Todos', () => {
    it('GET /post --> array todos', async () => {
        return request(app)
            .get('/posts')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        title: expect.any(String),
                        completed: expect.any(Boolean),
                    })
                ]))
            })
    });
    it('POST /post --> created todo', () => {
        return request(app).post('/posts').send({
            title: "testing",
            completed: false,
        }).expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.objectContaining({
                    title: "testing",
                    completed: false,
                    _id: expect.any(String),
                })
                )
            })
    });
    it('POST /post --> send just title', () => {
        return request(app).post('/posts').send({title:44}).expect(200);
    });
});
