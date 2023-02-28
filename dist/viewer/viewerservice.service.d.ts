import { Repository } from 'typeorm';
import { User } from "./viewerentity.entity";
export declare class ViewerService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getIndex(): string;
    findvideo(id: any): any;
    blockVideo(id: any): any;
    addpersonallist(mydto: any): any;
    deleteComment(qry: any): any;
    buynow(price: any): any;
    checkNotification(): any;
    catagories(qry: any): any;
    showupdate(): any;
}
