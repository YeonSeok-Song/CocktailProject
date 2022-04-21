import cors from "cors";
import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "./swagger.js";
const specs = swaggerJsDoc(swaggerOptions);

import { errorMiddleware } from "./middlewares/errorMiddleware";
import { registerRouter } from "./routers/registerRouter";
import { loginRouter } from "./routers/loginRouter";

import passport from "passport";
import session from "express-session";
import googleOAuth from "./utils/googleOAuth";
const app = express();

app.use(cors());

//swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
passport.use(googleOAuth);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.use(registerRouter);
app.use(loginRouter);
app.use(errorMiddleware);

export { app };
