// Import angular file
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Create an Service Class
export class AppService {

  appList = [
    { 
      _id: 1,
      title: "Running Workout Plan", 
      warmup: "Warm-up: 10 mins of stretches, high knees, and leg swing", 
      exercise: "Workout Exercise: 10km average-paced run on the trail",
      interval: "Interval Training: 4 x 400 meters, 5 mins in-between rest ",
      cooldown: "Cool-down: 5 mins jogging and 10 mins workout stretches",
      imageUrl: "assets/img/photo1.jpg",
    },
    { 
      _id: 2,
      title: "Cycling Workout Plan", 
      warmup: "Warm-up: 5 minutes pre-workout and knee stretches ", 
      exercise: "Workout Exercise: 2-hrs average pace cycling on trail",
      interval: "Interval Training: 6 X 3 mins of fast-paced uphill ride",
      cooldown: "Cool Down: 5 mins paced cycling and 2 mins stretching",
      imageUrl: "assets/img/photo2.jpg" 
    },
    { 
      _id: 3,
      title: "Swimming Workout Plan", 
      warmup: "Warm-up: 4 x 100 meters easy paced swim freestyle ", 
      exercise: "Workout Exercise: 8 x 50 meters500 meters freestyle",
      interval: "Interval Training: 8 x 50 meters with in-between rests",
      cooldown: "Cool Down: 2 laps freestyle, and stretches in the pool ",
      imageUrl: "assets/img/photo3.jpg" 
    }
  ]; 
  constructor() { }

  // Return listed resources
  listProduct() {
    return this.appList;
  }
  // Read listed resources 
  getProduct(id: number) {
    return this.appList.find(el => el._id == id);
  }
}