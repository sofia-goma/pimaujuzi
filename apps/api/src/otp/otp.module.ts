import { Module } from '@nestjs/common';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [OtpController],
  providers: [OtpService, DatabaseService],
})
export class OtpModule {}
