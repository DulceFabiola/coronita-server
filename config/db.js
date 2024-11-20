const { MongoClient, ServerApiVersion } = require("mongodb");
const URI = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const connectDB = async () => {
  //Conectarnos a la DB
  try {
    await client.connect();
    //confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
    //cierre de la base de datos
    process.exit(1);
  }
};
connectDB().catch(console.dir);

module.exports = connectDB;
