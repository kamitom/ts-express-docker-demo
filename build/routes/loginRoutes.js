"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faker_1 = __importDefault(require("faker"));
const routerForTest = express_1.Router();
exports.routerForTest = routerForTest;
const fName = faker_1.default.name.findName();
const fAddressZipCode = faker_1.default.address.zipCode();
routerForTest.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email">
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password">
      </div>
      <button>Submit</button>
    </form>
  `);
});
routerForTest.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email == 'tom@test.me' && password == 1234) {
        req.session = { loggedIn2: true };
        res.redirect('/');
    }
    else {
        res.status(400).send('Invalid email or password');
    }
});
routerForTest.get('/', (req, res) => {
    if (req.session && req.session.loggedIn2) {
        res.send(`
      <div>
        <div>${fName} are logged in</div>
        <a href='/logout'>logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>${fName} are not logged in</div>
        <a href='/login'>login</a>
      </div>
    `);
    }
});
routerForTest.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
