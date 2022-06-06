const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT} in ${process.env.NODE_ENV} mode`)
});
