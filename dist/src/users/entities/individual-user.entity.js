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
exports.IndividualUser = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let IndividualUser = class IndividualUser extends user_entity_1.User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, lastname: { required: true, type: () => String }, username: { required: true, type: () => String }, birthDate: { required: true, type: () => Date }, gender: { required: true, type: () => String }, nationality: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, activationToken: { required: true, type: () => String }, active: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], IndividualUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], IndividualUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IndividualUser.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IndividualUser.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'birth_date', nullable: false }),
    __metadata("design:type", Date)
], IndividualUser.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IndividualUser.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], IndividualUser.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], IndividualUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], IndividualUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'activation_token' }),
    __metadata("design:type", String)
], IndividualUser.prototype, "activationToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], IndividualUser.prototype, "active", void 0);
IndividualUser = __decorate([
    (0, typeorm_1.Entity)('individualUsers')
], IndividualUser);
exports.IndividualUser = IndividualUser;
//# sourceMappingURL=individual-user.entity.js.map