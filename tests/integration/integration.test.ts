import {app, request, expect} from './config/helpers';

describe('Tests Integration', () => {
    describe('Get /api/users/all', () => {
        it('return json all users', done => {
            request(app)
                .get('api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });

    describe('Get /api/users/:id', () => {
        it('return json user', done => {
            request(app)
                .get(`api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });

    describe('POST /api/users/new', () => {
        it('new user', done => {
            const user =  {
                nome: 'Teste'
            };
            request(app)
                .post('api/users/new')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });

    describe('PUT /api/users/:id/edit', () => {
        it('update user', done => {
            const user =  {
                nome: 'TesteUpdate'
            };
            request(app)
                .put(`api/users/${1}/edit`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('delete user', done => {
            request(app)
                .delete(`api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                })
        });
    });

});
