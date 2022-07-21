"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validFile = void 0;
const validFields_1 = require("../middleware/validFields");
const axios = require('axios');
function validFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.file) {
            if (req.file.mimetype == "text/csv") {
                const file = req.file.buffer.toString().split('\n');
                if (file[0] != '') {
                    var users = [];
                    for (let row in file) {
                        if (file[row] != '') {
                            const user = file[row].replace(';', ',').split(',');
                            if (user.length > 2 || !(0, validFields_1.validName)(user[0]) || !(0, validFields_1.validEmail)(user[1])) {
                                return res.status(400).json({ message: "File with bad formatting" });
                            }
                            users.push(user);
                        }
                    }
                    uploadUsers(users, res);
                }
                else
                    return res.status(400).json({ message: "Empty File" });
            }
            else
                return res.status(400).json({ message: "Only CSV Files" });
        }
        else
            return res.status(400).json({ message: "Bad Request" });
    });
}
exports.validFile = validFile;
function uploadUsers(users, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT GPTW'
        };
        for (let row in users) {
            let data = {
                name: users[row][0],
                email: users[row][1]
            };
            yield axios.post("http://mock:3000/api/v1/users", data, { headers: headers })
                .then(() => res.status(200).send())
                .catch(() => res.status(500).send());
        }
    });
}
