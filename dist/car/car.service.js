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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const carProjection = {
    __v: false,
    _id: false,
};
let CarService = class CarService {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async getCars() {
        const cars = await this.carModel.find({}, carProjection).exec();
        if (!cars || !cars[0]) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return cars;
    }
    async postCar(nawCar) {
        const car = await this.carModel(nawCar);
        return car.save();
    }
    async getCarById(id) {
        const car = await this.carModel.findOne({ id }, carProjection).exec();
        if (!car) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return car;
    }
    async deleteCarById(id) {
        const car = await this.carModel.deleteOne({ id }).exec();
        if (car.deleteCount === 0) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return car;
    }
    async putCarById(id, propertyName, propertyValue) {
        const car = await this.carModel
            .findOneAndUpdate({ id }, {
            [propertyName]: propertyValue,
        })
            .exec();
        if (!car) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return car;
    }
};
CarService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Car')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map