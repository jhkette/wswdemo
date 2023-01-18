const axios = require("axios");

const CAL_API = "AIzaSyBs4W8WmNLu8Kx3H7b9bjYUn5qPYcRwo-k";
const CAL_ID = "joseph.ketterer@gmail.com"
const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?${BASEPARAMS}`;

exports.handler = function (event, context, callback) {
  const finalURL = `${BASEURL}&key=${CAL_API}`;
  console.log(finalURL)

  // send repsonse
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(body),
    });
  };

  const getdata = () => {
    axios
      .get(finalURL)
      .then((res) => send(res.data))
      .catch((err) => send(err));
  };

  if (event.httpMethod == "GET") {
    getdata();
  }
};
