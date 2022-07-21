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
exports.UserRepository = void 0;
const db_config_1 = require("./db.config");
class UserRepository {
    constructor() {
        this.insert = (name, email) => __awaiter(this, void 0, void 0, function* () {
            return yield db_config_1.pool.query("INSERT INTO users(name, email) VALUES($1, $2)", [name, email]);
        });
        this.del = (id) => __awaiter(this, void 0, void 0, function* () {
            return (yield db_config_1.pool.query("DELETE FROM users WHERE id = $1", [id])).rows;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return (yield db_config_1.pool.query("SELECT * FROM users")).rows;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return (yield db_config_1.pool.query("SELECT * FROM users WHERE id = $1", [id])).rows;
        });
        this.update = (id, name, email) => __awaiter(this, void 0, void 0, function* () {
            return (yield db_config_1.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id])).rows;
        });
    }
}
exports.UserRepository = UserRepository;
