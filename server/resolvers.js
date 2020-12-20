import path from "path";
import pkg from "graphql-tools";
const { mergeResolvers, loadFilesSync } = pkg;

const __dirname = path.resolve();

const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers")),
  { extensions: ["js"] },
);

export default resolvers;
