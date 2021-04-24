import mongo from "mongoose";
import vars from './vars'

(async () => {
  try {
    const db = await mongo.connect(vars.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
  });
  console.log('database:', db.connection.name);
  } catch (error) {
    console.error(error);
  }

})();
