import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Reservations')
@Controller('reservations')
export class ReservationsController {
  @Get()
  getReservations() {
    return 'todo';
  }

  @ApiOperation({
    summary: "Permet de récuper les informations d'une reservation",
  })
  @Get('/:id')
  getReservation() {
    return 'todo';
  }

  @Post()
  createReservation() {
    return 'todo';
  }

  @Patch()
  updateReservation() {
    return 'todo';
  }

  @Delete()
  deleteReservation() {
    return 'todo';
  }
}
