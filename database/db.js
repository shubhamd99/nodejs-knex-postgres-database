const knex =  require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5433',
        user: 'postgres',
        password: 'test',
        database: 'shubham'
    }
});

module.exports = knex;