"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbionKillboard = void 0;
const Events_1 = require("./Events/Events");
class AlbionKillboard {
    constructor(events = new Events_1.Events()) {
        this.events = events;
    }
}
exports.AlbionKillboard = AlbionKillboard;
