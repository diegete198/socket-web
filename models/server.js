
const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

  constructor() {
    this.app    = express()
    this.PORT   = process.env.PORT
    this.Server = require('http').createServer(this.app);
    this.io     = require('socket.io')(this.Server);


    this.paths = {}
    
    //Midlewares
    this.middleware();

    //Rutas de aplicacion
    this.routes();

    //Socket configuracion
    this.sockets();
  }


  async conectarDB() {
    await dbconnection();
  }

   middleware() {
    //CORS
    this.app.use(cors())

    //Directorio publico
    this.app.use(express.static('public'))

}

routes() {
  // this.app.use(this.paths.auth, require('../routes/auth'))
}

sockets() {

  this.io.on('connection', socketController
);
}

listen() {
  this.Server.listen(this.PORT, () => {
  console.log (`Servidor corriendo en puerto`, this.PORT)
})
}

}

module.exports = Server;