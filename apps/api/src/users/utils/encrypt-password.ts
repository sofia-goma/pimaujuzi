import * as bcrypt from 'bcrypt';
import { appConfig } from 'src/config/app.config';

export async function encryptPassword(password: string): Promise<string> {
  if (!password) return;
  try {
    const salt = appConfig.SALT;
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (error) {
    console.log(error.message);
  }
}