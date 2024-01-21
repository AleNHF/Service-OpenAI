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
exports.ChatGptAiService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
const DEFAULT_MODEL_ID = "gpt-3.5-turbo-instruct";
const DEFAULT_TEMPERATURE = 0.9;
const DEFAULT_ORIGINAL_LANGUAGE = "Español";
const DEFAULT_LANGUAGE = "Inglés";
const DEFAULT_MAX_TOKEN = 2048;
let ChatGptAiService = class ChatGptAiService {
    constructor() {
        const configuration = new openai_1.Configuration({
            organization: process.env.ORGANIZATION_ID,
            apiKey: process.env.OPENAI_API_KEY,
        });
        this.openAiApi = new openai_1.OpenAIApi(configuration);
    }
    setModelId(modelId) {
        if (modelId.includes(":")) {
            modelId = modelId.replace(":", "-");
        }
        this.selectedModelId = modelId;
    }
    async listModels() {
        const models = await this.openAiApi.listModels();
        return models.data;
    }
    async getModelAnswer(Answer) {
        try {
            const params = {
                prompt: `Traduce el siguiente texto en ${Answer.origin_language} al idioma ${Answer.target_language}: "${Answer.question}"`,
                model: DEFAULT_MODEL_ID,
                temperature: DEFAULT_TEMPERATURE,
                max_tokens: DEFAULT_MAX_TOKEN
            };
            const response = await this.openAiApi.createCompletion(params);
            const { data } = response;
            if (data.choices.length) {
                return data.choices;
            }
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async getModelAnswerCode(Answer) {
        try {
            console.log('Request language', Answer.target_language);
            const params = {
                prompt: `Genera un codigo ${Answer.target_language} orientado a objetos a partir del siguiente diagrama en XML: ${Answer.xml_diagram}`,
                model: DEFAULT_MODEL_ID,
                temperature: DEFAULT_TEMPERATURE,
                max_tokens: DEFAULT_MAX_TOKEN
            };
            const response = await this.openAiApi.createCompletion(params);
            const { data } = response;
            if (data.choices.length) {
                return data.choices;
            }
            console.log('Response', response.data);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
};
ChatGptAiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ChatGptAiService);
exports.ChatGptAiService = ChatGptAiService;
//# sourceMappingURL=chat-gpt-ai.service.js.map