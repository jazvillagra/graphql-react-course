const express = require('express');

const app = express();
const expressGraphQL = require('express-graphql').graphqlHTTP;

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening');
});