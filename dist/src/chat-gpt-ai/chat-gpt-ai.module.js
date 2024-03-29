"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGptAiModule = void 0;
const common_1 = require("@nestjs/common");
const chat_gpt_ai_controller_1 = require("./chat-gpt-ai.controller");
const chat_gpt_ai_service_1 = require("./chat-gpt-ai.service");
let ChatGptAiModule = class ChatGptAiModule {
};
ChatGptAiModule = __decorate([
    (0, common_1.Module)({
        controllers: [chat_gpt_ai_controller_1.ChatGptAiController],
        providers: [chat_gpt_ai_service_1.ChatGptAiService],
        exports: [chat_gpt_ai_service_1.ChatGptAiService]
    })
], ChatGptAiModule);
exports.ChatGptAiModule = ChatGptAiModule;
//# sourceMappingURL=chat-gpt-ai.module.js.map