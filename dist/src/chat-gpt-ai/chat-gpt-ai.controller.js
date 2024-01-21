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
exports.ChatGptAiController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const chat_gpt_ai_service_1 = require("./chat-gpt-ai.service");
const get_ai_model_answe_1 = require("./model/get-ai-model-answe");
const get_ai_model_answer_code_1 = require("./model/get-ai-model-answer-code");
let ChatGptAiController = class ChatGptAiController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    getModelAnswer(data) {
        return this.chatService.getModelAnswer(data);
    }
    listModels() {
        return this.chatService.listModels();
    }
    getModelAnswerCode(data) {
        return this.chatService.getModelAnswerCode(data);
    }
};
__decorate([
    (0, common_1.Post)("/message"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_ai_model_answe_1.GetAiModelAnswer]),
    __metadata("design:returntype", void 0)
], ChatGptAiController.prototype, "getModelAnswer", null);
__decorate([
    (0, common_1.Get)("/model"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatGptAiController.prototype, "listModels", null);
__decorate([
    (0, common_1.Post)("/generate-code"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_ai_model_answer_code_1.GetAiModelAnswerCode]),
    __metadata("design:returntype", void 0)
], ChatGptAiController.prototype, "getModelAnswerCode", null);
ChatGptAiController = __decorate([
    (0, common_1.Controller)('chat-gpt-ai'),
    __metadata("design:paramtypes", [chat_gpt_ai_service_1.ChatGptAiService])
], ChatGptAiController);
exports.ChatGptAiController = ChatGptAiController;
//# sourceMappingURL=chat-gpt-ai.controller.js.map