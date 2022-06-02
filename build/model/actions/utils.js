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
var prisma_1 = __importDefault(require("../prisma"));
var errors_1 = require("~/errors");
var handleError_1 = __importDefault(require("../handleError"));
var ModelUtils = /** @class */ (function () {
    function ModelUtils() {
    }
    ModelUtils.prototype.checkPatientExists = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var patient, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma_1.default.patients.findUnique({ where: { id: id } })];
                    case 1:
                        patient = _a.sent();
                        if (patient == null) {
                            throw new errors_1.CodedError('PATIENT_NOT_FOUND', 404, "Patient with id ".concat(id, " not found."));
                        }
                        return [2 /*return*/, patient];
                    case 2:
                        error_1 = _a.sent();
                        (0, handleError_1.default)(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModelUtils.prototype.checkPatientDoesntExist = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var patient, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma_1.default.patients.findUnique({ where: { id: id } })];
                    case 1:
                        patient = _a.sent();
                        if (patient !== null) {
                            throw new errors_1.CodedError('PATIENT_ALREADY_EXISTS', 400, "Patient with id ".concat(id, " already exists."));
                        }
                        return [2 /*return*/, true];
                    case 2:
                        error_2 = _a.sent();
                        (0, handleError_1.default)(error_2);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModelUtils.prototype.checkAppointmentExists = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var appointment, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma_1.default.appointments.findUnique({ where: { id: id } })];
                    case 1:
                        appointment = _a.sent();
                        if (appointment == null) {
                            throw new errors_1.CodedError('APPOINTMENT_NOT_FOUND', 404, "Appointment with id ".concat(id, " not found."));
                        }
                        return [2 /*return*/, true];
                    case 2:
                        error_3 = _a.sent();
                        (0, handleError_1.default)(error_3);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModelUtils.prototype.checkAppointmentIsFree = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var appointment, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma_1.default.appointments.findUnique({ where: { id: id } })];
                    case 1:
                        appointment = _a.sent();
                        if (appointment == null) {
                            throw new errors_1.CodedError('APPOINTMENT_NOT_FOUND', 404, "Appointment with id ".concat(id, " not found."));
                        }
                        if (appointment.patient_id != null) {
                            throw new errors_1.CodedError('APPOINTMENT_NOT_FREE', 405, "Appointment with id ".concat(id, " is not free."));
                        }
                        return [2 /*return*/, true];
                    case 2:
                        error_4 = _a.sent();
                        (0, handleError_1.default)(error_4);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModelUtils.prototype.checkAppointmentBelongsToPatient = function (id, patient_id) {
        return __awaiter(this, void 0, void 0, function () {
            var appointment, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prisma_1.default.appointments.findUnique({ where: { id: id } })];
                    case 1:
                        appointment = _a.sent();
                        if (appointment == null) {
                            throw new errors_1.CodedError('APPOINTMENT_NOT_FOUND', 404, "Appointment with id ".concat(id, " not found."));
                        }
                        if (appointment.patient_id != patient_id) {
                            throw new errors_1.CodedError('CANNOT_CANCEL_APPOINTMENT', 403, "Appointment with id ".concat(id, " does not belong to patient with id ").concat(patient_id));
                        }
                        return [2 /*return*/, true];
                    case 2:
                        error_5 = _a.sent();
                        (0, handleError_1.default)(error_5);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ModelUtils;
}());
exports.default = new ModelUtils();
