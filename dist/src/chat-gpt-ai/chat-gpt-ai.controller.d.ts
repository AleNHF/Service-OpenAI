import { ChatGptAiService } from './chat-gpt-ai.service';
import { GetAiModelAnswer } from './model/get-ai-model-answe';
import { GetAiModelAnswerCode } from './model/get-ai-model-answer-code';
export declare class ChatGptAiController {
    private chatService;
    constructor(chatService: ChatGptAiService);
    getModelAnswer(data: GetAiModelAnswer): Promise<any>;
    listModels(): Promise<import("openai").ListModelsResponse>;
    getModelAnswerCode(data: GetAiModelAnswerCode): Promise<any>;
}
