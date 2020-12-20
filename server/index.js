import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import pkg from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const { ApolloServer } = pkg;
export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: "/graphql" });

try {
  app.listen(3000, () => {
    console.log("listening on port 3000");
    return mongoose.connect("mongodb://localhost:27017/todoappdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
} catch (e) {
  console.error(e);
}
