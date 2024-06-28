const express = require('express');
const path = require('path')

// importing routers
const getHomeRouter = require('./routes/APIRoutes_home');
const getKeywordRouter = require('./routes/APIRoutes_keyword');

// constant variables
const serverPort: string | number = process.env.PORT || 3000;
const app = express();

// serving static files
app.use(express.static(path.join(__dirname, '../dist')))

console.log(__dirname)
// get the main page
app.get('/', getKeywordRouter)

app.get('/', getHomeRouter);

app.listen(serverPort, () => {
    console.log(`Listening on port ${serverPort}`);
});
