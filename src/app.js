import express, { urlencoded } from "express";
import cors from "cors";
import { CORS_ORIGIN } from "./secret/secret.js";
import cookieParser from "cookie-parser";

const app = express();

// Setting up middlewares
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  urlencoded({
    limit: "16kb",
    extended: true,
  })
);

app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.route.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
