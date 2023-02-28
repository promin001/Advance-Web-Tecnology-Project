"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerController = void 0;
const common_1 = require("@nestjs/common");
const viewerform_dto_1 = require("./viewerform.dto");
const viewerservice_service_1 = require("./viewerservice.service");
let ViewerController = class ViewerController {
    constructor(viewerService) {
        this.viewerService = viewerService;
    }
    getViewer() {
        return this.viewerService.getIndex();
    }
    buynow(price) {
        return this.viewerService.buynow(price);
    }
    findvideo(id) {
        return this.viewerService.findvideo(id);
    }
    deleteComment(qry) {
        return this.viewerService.deleteComment(qry);
    }
    blockvideo(id) {
        return this.viewerService.blockVideo(id);
    }
    addpersonallist(mydto) {
        return this.viewerService.addpersonallist(mydto);
    }
    catagories(qry) {
        return this.viewerService.catagories(qry);
    }
    checkNotification() {
        return this.viewerService.checkNotification();
    }
    showupdate() {
        return this.viewerService.showupdate();
    }
};
__decorate([
    (0, common_1.Get)("/index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "getViewer", null);
__decorate([
    (0, common_1.Post)("/buynow/"),
    __param(0, (0, common_1.Body)("price")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "buynow", null);
__decorate([
    (0, common_1.Get)("/findvideo/"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "findvideo", null);
__decorate([
    (0, common_1.Delete)("/deletecomment/"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "deleteComment", null);
__decorate([
    (0, common_1.Put)("/blockvideo/"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "blockvideo", null);
__decorate([
    (0, common_1.Post)("/addpersonallist/"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viewerform_dto_1.ViewerForm]),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "addpersonallist", null);
__decorate([
    (0, common_1.Get)("/catagories/"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "catagories", null);
__decorate([
    (0, common_1.Get)("/notification"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "checkNotification", null);
__decorate([
    (0, common_1.Post)("/showupdate/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ViewerController.prototype, "showupdate", null);
ViewerController = __decorate([
    (0, common_1.Controller)("/viewer"),
    __metadata("design:paramtypes", [viewerservice_service_1.ViewerService])
], ViewerController);
exports.ViewerController = ViewerController;
//# sourceMappingURL=viewer.controller.js.map