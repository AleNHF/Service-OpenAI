/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
export declare class AwsService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadProfilePhotoToS3(profilePhotoBuffer: Buffer, faceId?: string): Promise<{
        profilePhotoUrl: string;
    }>;
    uploadImageToS3(photoBuffer: Buffer, name?: string): Promise<{
        photoUrl: string;
    }>;
    getLabelFromRekognition(photoBuffer: any): Promise<string>;
}
