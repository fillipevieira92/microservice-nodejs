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
exports.validName = exports.validEmail = void 0;
function validEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    });
}
exports.validEmail = validEmail;
function validName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const re = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
        return re.test(name);
    });
}
exports.validName = validName;
