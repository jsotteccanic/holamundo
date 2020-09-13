import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaController } from './persona/persona.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonaController],
  providers: [AppService],
})
export class AppModule {}
