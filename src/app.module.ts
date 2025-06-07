import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthModule } from './authentication/jwt/jwt.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [JwtAuthModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
