'use strict'
const config = require('../config')

function getCity(req, res) {
  let ciudadPK = req.params.city
  config.pool.getConnection()
  .then(conn => {
  conn.query("SELECT * FROM dgrv_cities WHERE id  = '"+ciudadPK+"'")
    .then(rows => {
        res.status(200).send({cities: rows})
    })
    .catch(err => {
      conn.release();
    })
  });
}

function getCityByName(req, res) {
  let ciudadNombre = req.params.city
  config.pool.getConnection()
  .then(conn => {
  conn.query("SELECT * FROM dgrv_cities WHERE name  LIKE '%"+ciudadNombre+"%'")
    .then(rows => {
        res.status(200).send({cities: rows})
    })
    .catch(err => {
      conn.release();
    })
  });
}

function getCities(req, res) {
  config.pool.getConnection()
  .then(conn => {
  conn.query("SELECT * FROM dgrv_cities")
    .then(rows => {
        res.status(200).send({cities: rows})
    })
    .catch(err => {
      conn.release();
    })
  });
}


function saveCity(req, res) {
  config.pool.getConnection()
  .then(conn => {
    conn.query("SELECT 1 as val")
      .then(rows => {
        res.status(200).send({data: req.body});
        return conn.query("INSERT INTO dgrv_cities (name, country) value ('"+ req.body.name +"','"+ req.body.country +"')", [1, "mariadb"]);
      })
      .then(res => {
        conn.release();
      })
      .catch(err => {
        conn.release(); 
      })

  }).catch(err => {
    //not connected
  });
}

function deleteCity(req, res) {
  let id = req.params.city
  config.pool.getConnection()
  .then(conn => {
  conn.query("SELECT * FROM dgrv_cities WHERE id  = '"+id+"'")
    .then(rows => {
      res.status(200).send({city: rows});
      return conn.query("DELETE FROM dgrv_cities WHERE id = '"+id+"'", [1, "mariadb"]);
    })
    .then(res => {
      conn.release();
    })
    .catch(err => {
      conn.release();
    })

}).catch(err => {
  //not connected
});
}


module.exports = {
  getCity,
  getCities,
  saveCity,
  deleteCity,
  getCityByName
}
