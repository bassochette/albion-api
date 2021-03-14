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
exports.Events = void 0;
const Requester_1 = require("../Requester/Requester");
class Events extends Requester_1.Requester {
    fetchRecent(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/events', query);
        });
    }
    fetchTop(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/events/killfame', query);
        });
    }
}
exports.Events = Events;
