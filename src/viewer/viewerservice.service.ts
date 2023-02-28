import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from 'typeorm'
import { User } from "./viewerentity.entity"
import { Transform } from "class-transformer"


@Injectable()
export class ViewerService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){} 

    getIndex():string { 
        return "Viewer Index"; 

    }
    findvideo(id):any {   
        return "the id is "+id;
    }

    blockVideo(id):any {
        return "the Video "+ id + " is blocked";
    }

    addpersonallist(mydto):any {
        const adminacc = new User()
        adminacc.name = mydto.name;
        adminacc.email = mydto.email;
        adminacc.password = mydto.password;
        return this.usersRepository.save(adminacc);
        //return "User with id " + mydto.id + ", name " + mydto.name + " & email " + mydto.email + " added"
    }

    deleteComment(qry):any {
        return "This Comment " +qry.id + " deleted"
    }

    buynow(price):any {
        return "monthly subscription price is " + price + "BDT"
    }

    checkNotification(): any {
        return "Get New Video Notifications)"
    }

    catagories(qry): any {
        return "This Catagories " + qry.id + " are Added!"
    }

    showupdate(): any {
        return "Get New Shows Updates)"
    }

}