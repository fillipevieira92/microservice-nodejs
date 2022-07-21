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
exports.deleteUser = exports.updateUser = exports.setUser = exports.getUserById = exports.getUsers = void 0;
const db_repository_1 = require("../config/db.repository");
const repository = new db_repository_1.UserRepository();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield repository.getAll();
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(500).json({ message: "Internal Error" });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield repository.getById(id);
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(500).json({ message: "Internal Error" });
    }
});
exports.getUserById = getUserById;
const setUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        yield repository.insert(name, email);
        return res.status(200).json({ message: "User created successfully", user: { name: name, email: email } });
    }
    catch (e) {
        return res.status(500).json({ message: "Internal Error" });
    }
});
exports.setUser = setUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const response = yield repository.update(id, name, email);
        if (response) {
            return res.status(200).json({ message: `User id:${id} updated successfully`, user: { name: name, email: email } });
        }
        return res.status(404).json({ message: "Not Found" });
    }
    catch (e) {
        return res.status(500).json({ message: "Internal Error" });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield repository.del(id);
        if (response) {
            return res.status(200).json({ message: `User id:${id} deleted successfully.` });
        }
        return res.status(404).json({ message: "Not Found" });
    }
    catch (e) {
        return res.status(500).json({ message: "Internal Error" });
    }
});
exports.deleteUser = deleteUser;
