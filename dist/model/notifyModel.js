"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const notifyModel = new mongoose_1.Schema({
    notice: {
        type: {}
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("notify", notifyModel);
