"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 8321;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.listen(port, () => {
    console.log(`server start at http://localhost:${port}/login`);
});
