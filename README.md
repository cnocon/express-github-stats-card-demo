# Demo App for `express-github-stats-card`: Express.js on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b49342c-852c-44b3-9261-1d0f5affecd0/deploy-status)](https://app.netlify.com/sites/express-github-stats-card-demo/deploys)

[Live Demo URL](https://express-github-stats-card-demo.netlify.app/)

---

Express

[serverless-http](https://github.com/dougmoscrop/serverless-http). See
[express/server.js](express/server.js) for details, or check it out at
[https://netlify-express.netlify.com/](https://netlify-express.netlify.com/)!$$

[index.html](index.html) simply loads html from the Express.js app using
`<object>`, and the app is hosted at `/.netlify/functions/server`. Examples of
how to access the Express.js endpoints:

```sh
curl https://netlify-express.netlify.com/.netlify/functions/server
curl https://netlify-express.netlify.com/.netlify/functions/server/another
curl --header "Content-Type: application/json" --request POST --data '{"json":"POST"}' https://netlify-express.netlify.com/.netlify/functions/server
```
