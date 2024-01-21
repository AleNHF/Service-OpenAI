import { IsNotEmpty, IsString } from "class-validator";

export class GetAiModelAnswerCode {
    @IsString()
    @IsNotEmpty()
    xml_diagram:string

    @IsString()
    @IsNotEmpty()
    target_language:string
}