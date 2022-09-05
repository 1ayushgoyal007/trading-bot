const axios = require('../config');
const crypto = require('crypto');
const { coinDcxEndpoints } = require('../constants/endPoints');

const getUserInfo = async (req, res) => {

    try {

        const payload = { timestamp: Math.floor( Date.now() ) };
        const signaturePayload = new Buffer(JSON.stringify(payload)).toString();
        const signature = crypto.createHmac('sha256', process.env.COINDCX_API_SECRET).update(signaturePayload).digest('hex')
        const headers = {
            'X-AUTH-APIKEY': process.env.COINDCX_API_KEY,
            'X-AUTH-SIGNATURE': signature
        }
        const response = await axios.post( coinDcxEndpoints.getUserInfo , payload, { headers:headers });
        res.status( 200 ).json( response?.data );

    } catch (error) {
        res.status(  error?.response?.data?.code ).json({ ...error?.response?.data }) 
    }

}

const getBalance= (req , res) => {
    res.send('here')
}

module.exports = { getUserInfo, getBalance };