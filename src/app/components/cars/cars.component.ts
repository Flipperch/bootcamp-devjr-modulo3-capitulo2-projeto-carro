import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  cars: Car[] = [
    { id: 1, name: 'Corolla', manufacturer: 'Toyota', price: 15000, year: 2020 },
    { id: 2, name: 'Civic', manufacturer: 'Honda', price: 25000, year: 2019 },
    { id: 3, name: 'Mustang', manufacturer: 'Ford', price: 55000, year: 2021 }
  ];

  saveCar(){

  }

  editCar(selectedCar: Car){
    console.log('Edit Car', selectedCar);
  }

  removeCar(car: Car){
    console.log('Remove Car', car);
  }


}
