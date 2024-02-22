import connectDb from "./db/config.js";
import { app } from "./app.js";
import { PORT } from "./secret/secret.js";

connectDb()
  .then(() => {
    app.listen(PORT || 5000, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });
