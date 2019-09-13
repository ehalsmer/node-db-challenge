// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/database.db3',
    //   typeCast: function(field, next) {
    //     if (field.typeof == 'integer' && field.length == 1) {
    //         return (field == 1); // 1 = true, 0 = false
    //     }
    //     return next();
    // }
    },
    migrations: {
      directory: './data/migrations'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  }

};
