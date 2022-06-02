"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODES = exports.CodedError = void 0;
var codes_1 = __importDefault(require("./codes"));
exports.CODES = codes_1.default;
var CodedError = /** @class */ (function (_super) {
    __extends(CodedError, _super);
    function CodedError(code, statusCode, message) {
        if (statusCode === void 0) { statusCode = 500; }
        if (message === void 0) { message = ''; }
        var _this = _super.call(this, code) || this;
        _this.code = '';
        _this.isCodedError = true;
        _this.code = code;
        _this.statusCode = statusCode;
        _this.message = message;
        return _this;
    }
    return CodedError;
}(Error));
exports.CodedError = CodedError;
exports.default = CodedError;
