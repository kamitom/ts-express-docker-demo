"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faker_1 = __importDefault(require("faker"));
const router = express_1.Router();
exports.router = router;
const fName = faker_1.default.name.findName();
const fAddressZipCode = faker_1.default.address.zipCode();
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    // if (req) res.send('success!');
    const { email, password } = req.body;
    if (email == 'tom@test.me' && password == 1234) {
        res.send(`
    <h1>email: ${email}, pass: ${password}</h1>
    <hr>
    <p>${fName}</p>
    <hr>
    <p>zipCode: ${fAddressZipCode}</p>
    `);
    }
    else {
        res.status(404).send('Sorry, cant find that');
    }
});
