const graphql = require("graphql");
const mongoose = require("mongoose");

const Student = mongoose.model("Student");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

// Student Type
const StudentType = new GraphQLObjectType({
  name: "Student",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    message: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    students: {
      type: new GraphQLList(StudentType),
      resolve() {
        return Student.find();
      }
    }
  }
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addStudent: {
      type: StudentType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        message: { type: GraphQLString }
      },
      resolve(parent, args) {
        const student = new Student(args);
        return student.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
