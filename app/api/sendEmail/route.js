// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  if (req.method === 'POST') {
    var axios = require('axios');
    var data = JSON.stringify(req.body);

    var config = {
      method: 'post',
      url: `${process.env.url}/wp-json/routes/contact-form`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        res.status(200).json({ data: response.data })

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}