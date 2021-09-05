import { Model } from 'mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './car.dto';
export declare class CarService {
    private readonly carModel;
    constructor(carModel: Model<ICar>);
    getCars(): Promise<CarDto[]>;
    postCar(nawCar: CarDto): Promise<any>;
    getCarById(id: number): Promise<CarDto>;
    deleteCarById(id: number): Promise<CarDto>;
    putCarById(id: number, propertyName: string, propertyValue: string): Promise<CarDto>;
}
