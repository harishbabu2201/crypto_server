module.exports = {
  apps : [{
    name   : "server",
    script : "./dist/server.js",
    env: {
      production:{
        NODE_ENV: "production",
        PORT:5001
      },
      development: {
        NODE_ENV: "development",
        PORT:5000
     }
     
   },
 
  }]
}
