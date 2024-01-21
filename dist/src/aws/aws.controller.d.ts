/// <reference types="multer" />
import { AwsService } from './aws.service';
export declare class AwsController {
    private readonly awsService;
    constructor(awsService: AwsService);
    register(photo: Express.Multer.File): Promise<{
        profilePhotoUrl: string;
    }>;
    verifyContent(image: any, res: any): Promise<any>;
}
