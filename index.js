'use strict'
const app = require('./app')
const config = require('./config')

  config.pool.getConnection()
  .then(conn => {
      app.listen(config.port,  () =>  {
        console.log(`API Rest running on port ${config.port}! Great!`)
      })
  }).catch(err => {
    //not connected
  });
