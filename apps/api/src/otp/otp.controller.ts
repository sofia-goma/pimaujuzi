import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OtpService } from './otp.service';
import { EmailService } from 'src/email/email.service';
import { UsersService } from 'src/users/users.service';
import { OtpRequestDto } from './dto/otp-request.dto';
import { OtpVerificationDto } from './dto/otp-verification.dto';
import { addMinutes } from 'date-fns';
import { generateOtp } from 'src/utils/generate-otp';

@Controller('otp')
export class OtpController {
  constructor(
    private readonly otpService: OtpService,
    private readonly mailService: EmailService,
    private readonly userService: UsersService,
  ) {}

  @Post('request')
  async handleOtpRequest(@Body() otpRequestDto: OtpRequestDto) {
    const { email } = otpRequestDto;
    const expiresAt = addMinutes(new Date(), 10);

    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException('Unknown User', HttpStatus.NOT_FOUND);
    }

    try {
      const otp = await this.otpService.createOtp({
        userId: user.id,
        code: generateOtp(),
        expiresAt,
      });

      await this.mailService.sendOtpEmail(
        user.email,
        otp.code,
        user.nickname || '',
        otp.expiresAt,
      );

      return {
        message: 'Otp request sent successfully',
      };
    } catch (error) {
      throw new HttpException(
        'Failed to send otp request email',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('verify')
  async handleOtpVerification(@Body() otpVerificationDto: OtpVerificationDto) {
    const { email, code } = otpVerificationDto;

    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException('Unknown User', HttpStatus.NOT_FOUND);
    }

    const isOtpValid = await this.otpService.verifyOtp(user.id, code);
    if (!isOtpValid) {
      throw new HttpException('Invalid OTP', HttpStatus.UNAUTHORIZED);
    }

    return {
      message: 'OTP verified successfully',
    };
  }
}
