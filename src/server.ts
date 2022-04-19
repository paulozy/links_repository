import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import "./database";
import "./shared/container";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3001, () => console.log("Server is running"));
