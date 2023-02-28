import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe} from "@nestjs/common";
import { ViewerPipe } from "./viewer.pipe";
import { ViewerForm } from "./viewerform.dto";
import { ViewerService } from "./viewerservice.service";


@Controller("/viewer")
export class ViewerController
{ 
  constructor(private viewerService: ViewerService){}

    @Get("/index")
    getViewer(): any { 
        return this.viewerService.getIndex();
    }

    @Post("/buynow/")
    buynow(
        @Body("price") price:number,
    ):any {
        return this.viewerService.buynow(price);
    }

    @Get("/findvideo/")
    findvideo(@Param("id", ParseIntPipe) id:number,): any {
      return this.viewerService.findvideo(id);
    }

    @Delete("/deletecomment/")
    deleteComment(@Query() qry:any): any {
        return this.viewerService.deleteComment(qry);
    }

    @Put("/blockvideo/")
    blockvideo(
        @Body("id") id:number
    ): any {
        return this.viewerService.blockVideo(id);
    }

    @Post("/addpersonallist/")
    @UsePipes(new ValidationPipe)
    addpersonallist(@Body() mydto:ViewerForm):any {
                
        return this.viewerService.addpersonallist(mydto);
    }

    @Get("/catagories/")
    catagories(@Query() qry:any): any {
        return this.viewerService.catagories(qry);
    }

    @Get("/notification")
    checkNotification(): any { 
        return this.viewerService.checkNotification();
    }

    @Post("/showupdate/")
        showupdate(): any { 
            return this.viewerService.showupdate();
    }
    
}