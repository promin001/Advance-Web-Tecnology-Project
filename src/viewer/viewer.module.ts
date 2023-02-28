import { Module } from "@nestjs/common";
import { ViewerController } from "./viewer.controller"
import { ViewerService } from "./viewerservice.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./viewerentity.entity"

@Module({

    controllers: [ViewerController],
    providers: [ViewerService],

})

export class ViewerModule {}