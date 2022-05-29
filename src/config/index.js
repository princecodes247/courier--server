const env = process.env.NODE_ENV

const environments = {
     development: require("./env/dev.env.json"),
     production: {
          APP_NAME: "courier  server",
          MONGODB_URI: process.env.MONGODB_URI + "courier",
          JWT_SECRET: "XXXX-XXXX-XXXX",
          BCRYPT_SALT: 10,
          role: {
            ADMIN: ["admin"],
            USER: ["user", "admin"]
          },
         
          url: {
            CLIENT_URL: process.env.CLIENT_URL,
            BASE_URL: process.env.BASE_URL,
          },
          mailer: {
            HOST: "",
            USER: "",
            PASSWORD: "",
            PORT: "",
            SECURE: "",
            DOMAIN: ""
          }
        }
           
}


// export config for the current environment
module.exports = environments[env] || environments["production"] 