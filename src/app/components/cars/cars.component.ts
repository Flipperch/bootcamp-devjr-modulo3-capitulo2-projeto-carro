import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car: Car = {} as Car;
  isUpdate: boolean = false;
  idCount: number = 4;

  cars: Car[] = [
    { id: 1, name: 'Corolla', manufacturer: 'Toyota', price: 15000, year: 2020 },
    { id: 2, name: 'Civic', manufacturer: 'Honda', price: 25000, year: 2019 },
    { id: 3, name: 'Mustang', manufacturer: 'Ford', price: 55000, year: 2021 }
  ];

  saveCar(){

    if (!this.isUpdate) {
      this.car.id = this.idCount++;
      this.cars.push(this.car);
    }
    
    this.car = {} as Car;
    this.isUpdate = false;

  }

  editCar(selectedCar: Car){

    this.car = selectedCar;
    this.isUpdate = true; 

  }

  removeCar(removeCar: Car){

    this.cars = this.cars.filter(c => c.id !== removeCar.id);

  }

}
