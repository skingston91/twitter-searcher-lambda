const fetch = require('node-fetch');

exports.handler = async (event) => {
    const {q, count= 10} = event
    if(q) {
        console.log("Received search term: " + q);

        try {
            const response = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${q}&count=${count}'`,{
                headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANTMMwEAAAAALkgzd3eXE95jcu3G2GXwLu%2FWGbU%3DiDwNE6K9fcUjH6zNcmRZeUsPmb0KfGutb38SCIbbNxJHOMH4t0",
                }
            })
            const data = await response.json()
            return {
                    statusCode: 200,
                    body: JSON.stringify(data),
                };
        } catch (err) {
              console.log("Error: " + err.message);
              const response = {
                    statusCode: 500,
                    body: JSON.stringify(err.message),
                };
                return response;
        }
    }
    else {
        const response = {
            statusCode: 500,
            body: JSON.stringify('No Search Term recieved'),
        };
        return response;
    }
};

