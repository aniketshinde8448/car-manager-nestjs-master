import { CarService } from './car.service';
import { CarDto } from './car.dto';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    getCars(): Promise<CarDto[]>;
    postCar(car: CarDto): Promise<any>;
    getCarById(id: number): Promise<CarDto>;
    deleteCarById(id: number): Promise<CarDto>;
    putCarById(id: number, query: any): Promise<CarDto>;
}
