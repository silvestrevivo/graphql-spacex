'use strict'

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema } = require('graphql');

// RootQuery
const RootQuery = new GraphQLObjectType({
  //..
})

module.exports = new GraphQLSchema({
  // query: RootQuery
})

