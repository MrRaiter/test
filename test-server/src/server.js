const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type nutritionInfo {
    calories: Int,
    fat: Int,
    carb: Int,
    protein: Int,
  }

  input nutritionInfoInput {
    calories: Int,
    fat: Int,
    carb: Int,
    protein: Int,
  }

  type dessert {
    Dessert: String
    nutritionInfo: nutritionInfo
  }

  input dessertInput {
    Dessert: String
    nutritionInfo: nutritionInfoInput
  }

  type Query {
    desserts: [dessert]
    resetDesserts: [dessert]
  }

  type Mutation {
    addDessert(dessert: dessertInput): [dessert]
    deleteDesserts(desserts: [dessertInput]): [dessert]
  }
`;

const initDesserts = [{
  Dessert: 'Oreo',
  nutritionInfo: {
    calories: 437,
    fat: 18,
    carb: 63,
    protein: 4,
  },
},
{
  Dessert: 'Nougat',
  nutritionInfo: {
    calories: 360,
    fat: 19,
    carb: 9,
    protein: 37,
  },
}]

let desserts = [...initDesserts];

const resolvers = {
  Query: {
    desserts: () => desserts,
    resetDesserts: () => {
      desserts = [...initDesserts];
      return desserts;
    },
  },
  Mutation: {
    addDessert: (parent, { dessert }) => {
      desserts.push(dessert);
      return desserts;
    },
    deleteDesserts: (parent, { desserts: dessertsToDelete }) => {
      desserts = desserts.filter((dessert) => !dessertsToDelete.find((dtd) => dtd.Dessert === dessert.Dessert));
      return desserts;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000).then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
