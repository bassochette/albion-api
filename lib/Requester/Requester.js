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
exports.Requester = void 0;
const node_fetch_1 = require("node-fetch");
const querystring = require("query-string");
class Requester {
    constructor(apiURL = 'https://gameinfo.albiononline.com/api/gameinfo') {
        this.apiURL = apiURL;
    }
    get(path, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = query ? `?${querystring.stringify(query)}` : '';
            const url = `${this.apiURL}${path}${qs}`;
            const json = yield this.request(url, 'GET');
            return json;
        });
    }
    request(url, method) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield node_fetch_1.default(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return yield response.json();
        });
    }
}
exports.Requester = Requester;
