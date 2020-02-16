"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var faker_1 = __importDefault(require("faker"));
var router = express_1.Router();
exports.router = router;
var fName = faker_1.default.name.findName();
var fAddressZipCode = faker_1.default.address.zipCode();
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\">\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\">\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    // if (req) res.send('success!');
    var _a = req.body, email = _a.email, password = _a.password;
    if (email == 'tom@test.me' && password == 1234) {
        res.send("\n    <h1>email: " + email + ", pass: " + password + "</h1>\n    <hr>\n    <p>" + fName + "</p>\n    <hr>\n    <p>zipCode: " + fAddressZipCode + "</p>\n    ");
    }
    else {
        res.status(404).send('Sorry, cant find that');
    }
});
