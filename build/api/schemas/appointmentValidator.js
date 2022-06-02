"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ajv_1 = __importDefault(require("ajv"));
var ajv = new ajv_1.default();
var schema = {
    type: "object",
    properties: {
        appointment_id: { type: "bigint" },
        patient_id: { type: "bigint" },
    },
    required: ["appointment_id", "patient_id"],
    additionalProperties: false,
};
var validator = ajv.compile(schema);
