import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatsGateway } from './chats/chats.gateway';



@Module({
  controllers: [AppController],
  providers: [AppService, ChatsGateway],
  imports: [UserModule],
})
export class AppModule {}
