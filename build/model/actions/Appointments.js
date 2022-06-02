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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = __importDefault(require("~/model/prisma"));
var utils_1 = __importDefault(require("./utils"));
var handleError_1 = __importDefault(require("../handleError"));
var AppointmentActions = /** @class */ (function () {
    function AppointmentActions() {
    }
    AppointmentActions.prototype.findAll = function (appointment) {
        return __awaiter(this, void 0, void 0, function () {
            var where, doctor_id, patient_id, from, to, free, appointments, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        where = {};
                        doctor_id = appointment.doctor_id, patient_id = appointment.patient_id, from = appointment.from, to = appointment.to, free = appointment.free;
                        if (doctor_id)
                            where.doctor_id = doctor_id;
                        if (patient_id)
                            where.patient_id = patient_id;
                        else if (free)
                            where.patient_id = null;
                        else
                            where.NOT = { patient_id: null };
                        if (from || to) {
                            where.date = {};
                            if (from)
                                where.date.gte = from;
                            if (to)
                                where.date.lte = to;
                        }
                        return [4 /*yield*/, prisma_1.default.appointments.findMany({
                                select: {
                                    id: true,
                                    doctor_id: true,
                                    date: true,
                                    initial_time: true,
                                    end_time: true,
                                },
                                where: where,
                            })];
                    case 1:
                        appointments = _a.sent();
                        return [2 /*return*/, appointments];
                    case 2:
                        error_1 = _a.sent();
                        (0, handleError_1.default)(error_1);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppointmentActions.prototype.bookAppointment = function (appointment) {
        return __awaiter(this, void 0, void 0, function () {
            var appointment_model, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, utils_1.default.checkPatientExists(appointment.patient_id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, utils_1.default.checkAppointmentIsFree(appointment.appointment_id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, prisma_1.default.appointments.update({
                                select: {
                                    id: true,
                                    doctor_id: true,
                                    patient_id: true,
                                    date: true,
                                    initial_time: true,
                                    end_time: true,
                                },
                                where: { id: appointment.appointment_id },
                                data: { patient_id: appointment.patient_id },
                            })];
                    case 3:
                        appointment_model = _a.sent();
                        return [2 /*return*/, appointment_model];
                    case 4:
                        error_2 = _a.sent();
                        (0, handleError_1.default)(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppointmentActions.prototype.cancelAppointment = function (appointment) {
        return __awaiter(this, void 0, void 0, function () {
            var appointment_model, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, utils_1.default.checkPatientExists(appointment.patient_id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, utils_1.default.checkAppointmentBelongsToPatient(appointment.appointment_id, appointment.patient_id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, prisma_1.default.appointments.update({
                                select: {
                                    id: true,
                                    doctor_id: true,
                                    patient_id: true,
                                    date: true,
                                    initial_time: true,
                                    end_time: true,
                                },
                                where: { id: appointment.appointment_id },
                                data: { patient_id: null },
                            })];
                    case 3:
                        appointment_model = _a.sent();
                        return [2 /*return*/, appointment_model];
                    case 4:
                        error_3 = _a.sent();
                        (0, handleError_1.default)(error_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AppointmentActions;
}());
exports.default = new AppointmentActions();
