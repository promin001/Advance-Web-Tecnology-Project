"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerForm = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ViewerForm {
}
__decorate([
    (0, class_validator_1.MinLength)(3, {
        message: 'Password must me more than 3 characters',
    }),
    (0, class_validator_1.MaxLength)(8, {
        message: 'Password must be less than 8 characters'
    }),
    (0, class_validator_1.IsAlphanumeric)(),
    __metadata("design:type", String)
], ViewerForm.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ViewerForm.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: "name cannot be empty"
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()),
    __metadata("design:type", String)
], ViewerForm.prototype, "name", void 0);
exports.ViewerForm = ViewerForm;
//# sourceMappingURL=viewerform.dto.js.map