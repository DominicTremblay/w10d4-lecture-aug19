let express = require('express');
let router = express.Router();

module.exports = knex => {
  router.get('/', function(req, res, next) {
    knex
      .select('*')
      .from('users')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
};
