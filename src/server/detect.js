const axios = require('axios').default

const {
  API_KEY
} = process.env;


const detect = async (req, res) => {
  const { body: { url } } = req;
  const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`
  const response = await axios.post(apiUrl);
  const result = response.data;
  res.send(result);
}

module.exports = {
  detect,
}