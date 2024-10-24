import { IsEmail, IsString, Length } from 'class-validator';

export class OtpVerificationDto {
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString()
  @Length(6, 6, { message: 'OTP must be 6 characters long' })
  code: string;
}
