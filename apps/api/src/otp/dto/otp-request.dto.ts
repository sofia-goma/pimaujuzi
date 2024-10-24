import { IsEmail } from 'class-validator';

export class OtpRequestDto {
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;
}
