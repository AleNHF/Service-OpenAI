import { GetAiModelAnswer } from './model/get-ai-model-answe';
import { GetAiModelAnswerCode } from './model/get-ai-model-answer-code';
export declare class ChatGptAiService {
    private readonly openAiApi;
    private selectedModelId;
    constructor();
    setModelId(modelId: string): void;
    listModels(): Promise<import("openai").ListModelsResponse>;
    getModelAnswer(Answer: GetAiModelAnswer): Promise<any>;
    getModelAnswerCode(Answer: GetAiModelAnswerCode): Promise<any>;
}
