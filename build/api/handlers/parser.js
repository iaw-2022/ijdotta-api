"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePatientCreateProfileRequest = exports.parsePatientRequest = exports.parseDoctorRequest = exports.parseAppointmentSearchRequest = exports.parseAppointmentRequestOnlyParams = exports.parseAppointmentRequestWithBody = void 0;
var errors_1 = __importDefault(require("~/errors"));
var config_1 = __importDefault(require("~/config"));
var getAuthEmail = function (req) {
    var _a;
    return String((_a = req.auth) === null || _a === void 0 ? void 0 : _a.payload[config_1.default.AUTH0.EMAIL_NAMESPACE]);
};
var parseDoctorRequest = function (req) {
    try {
        return {
            id: BigInt(req.params.id),
        };
    }
    catch (error) {
        throw new errors_1.default('API_INVALID_PARAMS', 400, error.message);
    }
};
exports.parseDoctorRequest = parseDoctorRequest;
var parsePatientRequest = function (req) {
    try {
        return {
            patient_id: BigInt(req.params.id),
            email: getAuthEmail(req),
        };
    }
    catch (error) {
        throw new errors_1.default('API_INVALID_PARAMS', 400, error.message);
    }
};
exports.parsePatientRequest = parsePatientRequest;
var parsePatientCreateProfileRequest = function (req) {
    try {
        return {
            id: BigInt(req.body.id),
            name: req.body.name,
            email: req.body.email,
            lastname: req.body.lastname,
            health_insurance_company: req.body.health_insurance_company,
            health_insurance_id: req.body.health_insurance_id,
        };
    }
    catch (error) {
        throw new errors_1.default('API_INVALID_PARAMS', 400, error.message);
    }
};
exports.parsePatientCreateProfileRequest = parsePatientCreateProfileRequest;
var parseAppointmentSearchRequest = function (req) {
    try {
        // Cast query to string or null
        var query_1 = req.query;
        var _a = Object.assign(query_1, Object.keys(query_1).forEach(function (key) {
            query_1[key] = query_1[key] === 'null' ? undefined : String(query_1[key]);
        })), patient_id = _a.patient_id, doctor_id = _a.doctor_id, from = _a.from, to = _a.to, free = _a.free;
        return {
            patient_id: patient_id ? BigInt(patient_id) : undefined,
            doctor_id: doctor_id ? BigInt(doctor_id) : undefined,
            from: from ? new Date(from) : undefined,
            to: to ? new Date(to) : undefined,
            free: free === 'true',
        };
    }
    catch (error) {
        throw new errors_1.default('API_INVALID_PARAMS', 400, error.message);
    }
};
exports.parseAppointmentSearchRequest = parseAppointmentSearchRequest;
var parseAppointmentRequestWithBody = function (req) {
    try {
        var appointment = req.body;
        appointment.appointment_id = BigInt(req.params.id);
        appointment.email = getAuthEmail(req);
        return appointment;
    }
    catch (error) {
        throw new errors_1.default('API_INVALID_PARAMS', 400, error.message);
    }
};
exports.parseAppointmentRequestWithBody = parseAppointmentRequestWithBody;
var parseAppointmentRequestOnlyParams = function (req) {
    try {
        return {
            patient_id: BigInt(req.params.id),
            appointment_id: BigInt(req.params.appointment_id),
            email: getAuthEmail(req),
        };
    }
    catch (error) {
        throw new errors_1.default('API_INVALID_PARAMS', 400, error.message);
    }
};
exports.parseAppointmentRequestOnlyParams = parseAppointmentRequestOnlyParams;
