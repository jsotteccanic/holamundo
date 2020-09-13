import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('persona')
export class PersonaController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  saludo(
    @Query() { nombre = 'Sin nombre', apellido = 'Sin apellido' },
  ): string {
    return `Hola ${nombre} ${apellido}. ¿Como estas?`;
  }
}
