require('dotenv').config();

const allowedOrigin = process.env.CLIENT_URL;

const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin || 
      origin === allowedOrigin || 
      origin.startsWith(new URL(allowedOrigin).origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,

};

module.exports = corsOptions;
