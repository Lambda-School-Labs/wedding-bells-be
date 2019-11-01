const request = require("supertest");
const server = require("../api/server")

/* ---------------------- User Endpoints ---------------*/
describe('/api/users CRUD', function() {
    it('should create a user', function(done) {
        request(server)
            .post('/api/users')
            .send({
                spouse_one_name: "lonnielamar",
                spouse_two_name: "LolaStevens",
                email: "testemail129333443@gmail.com",
                password: "password123ddswwdwssdsds"
            })
            .set('Accept', 'application/json')
            .expect(201, done);
    });

    it('should return 500 if missing spouse names,email,password fields of user', function (done) {
        request(server)
            .post('/api/users')
            .send({ spouse_one_name: '', spouse_two_name: null, email: '', password: '' })
            .expect(500, done);
    });

    it('should update a user in api/users', function(done) {
        request(server)
            .put('/api/users/1')
            .send({
                spouse_one_name: "Robert",
                spouse_two_name: "Jane",
                email: "robertandjane@gmail.com",
                password: "partytime123",
            })
            .expect(200, done)
            // .end(function (err, res) {
            //     expect(typeof res).toBe('object');
            //     if (err) return done(err);
            //     done();
            // });
    });

    it('should delete a user', function(done) {
        request(server)
            .del('/api/users/5')
            .expect(200, done)   
    });
 
    it('should respond with 404 when no user is found to delete', function (done) {
        request(server)
            .del('/api/users/50')
            .expect(404, done);
    })

})







/* ---------------------- Authentication ---------------*/