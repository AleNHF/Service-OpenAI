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
exports.AwsService = void 0;
const client_rekognition_1 = require("@aws-sdk/client-rekognition");
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
    }
    async uploadProfilePhotoToS3(profilePhotoBuffer, faceId = 'default') {
        const s3Bucket = this.configService.get('AWS_BUCKET');
        const s3Client = new client_s3_1.S3Client({
            region: this.configService.get('AWS_DEFAULT_REGION'),
            credentials: {
                accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
            },
        });
        const s3Object = await s3Client.send(new client_s3_1.PutObjectCommand({
            Bucket: s3Bucket,
            Key: `user_avatar_${faceId}.jpeg`,
            Body: profilePhotoBuffer,
            ContentType: 'image/jpg',
        }));
        const s3ObjectUrl = `https://${s3Bucket}.s3.amazonaws.com/user_avatar_${faceId}.jpeg`;
        return {
            profilePhotoUrl: s3ObjectUrl,
        };
    }
    async uploadImageToS3(photoBuffer, name = 'default') {
        const s3Bucket = this.configService.get('AWS_BUCKET');
        const s3Client = new client_s3_1.S3Client({
            region: this.configService.get('AWS_DEFAULT_REGION'),
            credentials: {
                accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
            },
        });
        const s3Object = await s3Client.send(new client_s3_1.PutObjectCommand({
            Bucket: s3Bucket,
            Key: `${name}.jpeg`,
            Body: photoBuffer,
            ContentType: 'image/jpeg',
        }));
        const s3ObjectUrl = `https://${s3Bucket}.s3.amazonaws.com/${name}.jpeg`;
        return {
            photoUrl: s3ObjectUrl,
        };
    }
    async getLabelFromRekognition(photoBuffer) {
        if (!photoBuffer) {
            throw new Error('Image is missing.');
        }
        const rekognitionClient = new client_rekognition_1.RekognitionClient({
            region: this.configService.get('AWS_DEFAULT_REGION'),
            credentials: {
                accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
            },
        });
        const command = new client_rekognition_1.DetectModerationLabelsCommand({
            Image: {
                Bytes: photoBuffer.buffer,
            },
        });
        try {
            const response = await rekognitionClient.send(command);
            const resultLabels = response.ModerationLabels[0].Name;
            return resultLabels;
        }
        catch (error) {
            console.error(error);
            throw new Error('Error detecting moderation labels.');
        }
    }
};
AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map