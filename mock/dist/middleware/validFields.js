"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validName = exports.validEmail = void 0;
function validEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email) ? true : false;
}
exports.validEmail = validEmail;
function validName(name) {
    const re = /^[a-z A-Záàâãéèêíóôõúç]+$/i;
    return re.test(name) ? true : false;
}
exports.validName = validName;
