import fetch from 'node-fetch';

const { CAL_API, CAL_ID } = process.env;
const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?${BASEPARAMS}`

const HEADERS = {
  
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET',
}

export const handler = async function () {
  const finalURL = `${BASEURL}&key=${CAL_API}`
  try {
  
      return fetch(finalURL)
        .then((response) => response.json())
        .then((data) => ({
          statusCode: 200,
          body: JSON.stringify(data.items),
          HEADERS
        }))
    
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: e.toString()
    }
  }
}

