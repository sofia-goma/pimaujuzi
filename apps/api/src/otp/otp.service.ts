import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

interface CreateOtpInput {
  userId: string;
  expiresAt: Date;
  code: string;
}

@Injectable()
export class OtpService {
  constructor(private readonly prisma: DatabaseService) {}

  async createOtp(input: CreateOtpInput) {
    const { userId, expiresAt, code } = input;
    try {
      const newOtp = await this.prisma.otp.create({
        data: {
          userId,
          expiresAt,
          code,
        },
        include: {
          user: true,
        },
      });
      return newOtp;
    } catch (error: any) {
      throw new Error(`Error creating OTP: ${error.message}`);
    }
  }

  async verifyOtp(userId: string, code: string) {
    try {
      const otp = await this.prisma.otp.findUnique({
        where: {
          userId,
          code,
        },
      });
      if (!otp) {
        throw new Error('Invalid OTP');
      }

      if (otp.expiresAt < new Date()) {
        throw new Error('OTP expired');
      }

      return otp;
    } catch (error: any) {
      throw new Error(`Error fetching OTP: ${error.message}`);
    }
  }

  async findOtp(userId: string) {
    try {
      const otp = await this.prisma.otp.findUnique({
        where: {
          userId,
        },
      });

      if (!otp) {
        throw new Error('Invalid OTP');
      }

      return otp;
    } catch (error: any) {
      throw new Error(`Error fetching OTP: ${error.message}`);
    }
  }

  async deleteExpiredOtps() {
    try {
      const result = await this.prisma.otp.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });

      return result;
    } catch (error: any) {
      throw new Error(`Error deleting expired OTPs: ${error.message}`);
    }
  }
}
