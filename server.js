const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();

// Allow cors
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema, // this is our unique endpoint
  graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}..`)
})

