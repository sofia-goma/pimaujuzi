import { Module } from '@nestjs/common';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';
import { DatabaseService } from 'src/database/database.service';
import { EmailModule } from 'src/email/email.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [EmailModule],
  controllers: [OtpController],
  providers: [UsersService, DatabaseService, OtpService],
})
export class OtpModule {}
