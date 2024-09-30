import * as bcrypt from 'bcrypt';
import { appConfig } from 'src/config/app.config';
import { Logger } from '@nestjs/common';

export async function encryptPassword(password: string): Promise<string> {
  if (!password) return;
  try {
    const salt = parseInt(appConfig.SALT);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (error) {
    Logger.debug(error.message);
  }
}
