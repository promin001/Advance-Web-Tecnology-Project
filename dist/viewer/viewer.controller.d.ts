import { ViewerForm } from "./viewerform.dto";
import { ViewerService } from "./viewerservice.service";
export declare class ViewerController {
    private viewerService;
    constructor(viewerService: ViewerService);
    getViewer(): any;
    buynow(price: number): any;
    findvideo(id: number): any;
    deleteComment(qry: any): any;
    blockvideo(id: number): any;
    addpersonallist(mydto: ViewerForm): any;
    catagories(qry: any): any;
    checkNotification(): any;
    showupdate(): any;
}
