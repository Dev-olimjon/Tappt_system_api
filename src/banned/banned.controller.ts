import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/guards/admin-auth.decorater';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { BannedService } from './banned.service';
import { BannedDto } from './dto/banned.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
@Controller('banned')
export class BannedController {

  constructor(private bannedService: BannedService)  {}

      @Roles('ADMIN')
      @UseGuards(AdminGuard)
      @Get()
        GetAll() {
          return this.bannedService.GetAllBanned()
        }

        @Roles('ADMIN')
        @UseGuards(AdminGuard)
        @Post()  
          AddBanned(@Body() BannedUser: BannedDto) {
            return this.bannedService.BannUsers(BannedUser.userId, BannedUser.describtion)
          }

          @Roles('ADMIN')
          @UseGuards(AdminGuard)  
          @Get('/:id')
            GetOne(@Param('id') id: string) {
              return this.bannedService.GetOne(id)
            }

            @Roles('ADMIN')
            @UseGuards(AdminGuard)
            @Delete('/user/:id')
              DeleteUserById(@Param('id') id: string) {
                return this.bannedService.DeleteByUserId(id)
              }

              @UseGuards(AuthGuard)
              @Get('user/:id') 
                GetByUserId(@Param('id') id: string) {
                  return this.bannedService.GetByUserId(id)
                }

                @Roles('ADMIN')
                @UseGuards(AdminGuard)
                @Delete('/:id')
                  DeleteBanned(@Param('id') id: string) {
                    return this.bannedService.DeleteBann(id)
                  }

                  @Roles('ADMIN')
                  @UseGuards(AdminGuard)
                  @Put('/:id')
                    EditDescribtion(@Param('id') id: string, @Body('describtion') describe: string) {
                      return this.bannedService.UpdateDescribtion(id, describe)
                   }
}