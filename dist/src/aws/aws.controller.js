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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const aws_service_1 = require("./aws.service");
const platform_express_1 = require("@nestjs/platform-express");
let AwsController = class AwsController {
    constructor(awsService) {
        this.awsService = awsService;
    }
    register(photo) {
        return this.awsService.uploadProfilePhotoToS3(photo.buffer);
    }
    async verifyContent(image, res) {
        try {
            const result = await this.awsService.getLabelFromRekognition(image);
            return res.send({ result });
        }
        catch (error) {
            console.error(error);
            return res.status(500).send({ error: error.message });
        }
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AwsController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('verify-content'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AwsController.prototype, "verifyContent", null);
AwsController = __decorate([
    (0, common_1.Controller)('aws'),
    __metadata("design:paramtypes", [aws_service_1.AwsService])
], AwsController);
exports.AwsController = AwsController;
//# sourceMappingURL=aws.controller.js.map