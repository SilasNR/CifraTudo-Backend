import { Module } from '@nestjs/common';
import { AppController } from './cifra/cifra.controller';
import { AppService } from './cifra/cifra.service';
import { CifraModule } from './cifra/cifra.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cifra } from './cifra/entities/cifra.entity';
import { CifraModule } from './cifra/cifra.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cifra]),
    CifraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
