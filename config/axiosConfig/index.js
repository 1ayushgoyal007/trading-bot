const axios = require('axios');

axios.default.defaults.baseURL = process.env.COINDCX_BASE_URL;

module.exports= axios.default ;