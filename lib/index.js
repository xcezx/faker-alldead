module.exports = function(faker) {
    var Faker = faker || require('faker');

    var Alldead = require('./Alldead');
    Faker.alldead = new Alldead(Faker);

    return Faker;
};
