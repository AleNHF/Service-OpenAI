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
exports.UpdateProfileDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateProfileDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_url: { required: true, type: () => String }, name: { required: true, type: () => String }, lastname: { required: true, type: () => String }, username: { required: true, type: () => String }, birthDate: { required: true, type: () => Date }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, nationality: { required: true, type: () => String }, gender: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "photo_url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateProfileDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "nationality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "gender", void 0);
exports.UpdateProfileDto = UpdateProfileDto;
//# sourceMappingURL=update-profile.dto.js.map