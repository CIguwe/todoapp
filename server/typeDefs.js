import path from "path";
import pkg from "graphql-tools";
const { mergeTypeDefs, loadFilesSync } = pkg;

const __dirname = path.resolve();
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname + "/server/types")),
  {
    extensions: ["graphql"],
  },
);

export default typeDefs;
