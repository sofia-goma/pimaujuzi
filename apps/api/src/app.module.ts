import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { OtpModule } from './otp/otp.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'web', 'dist'),
      exclude: ['api/*'],
    }),
    UsersModule,
    DatabaseModule,
    EmailModule,
    AuthModule,
    OtpModule,
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
