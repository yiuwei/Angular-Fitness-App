// Import angular components
import { Component, OnInit } from '@angular/core';
import { AppService } from './class.service';

// Define component info
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

// Export app component class
export class AppComponent implements OnInit {
  constructor(private AppService: AppService) {}
  
  // Define variables
  appList: any[] = []; 
  name = 'Fitness App';
  title = 'angular-project'
  height: number = 0;
  weight: number = 0;
  bmi: number = 0;
  result: string = '';  

  // Calculate the BMI
  calculateBMI(): void {
    if (this.height > 0 && this.weight > 0) {
      this.bmi = this.weight / ((this.height / 100) ** 2); 
      this.getResult();
    }
  }
  getResult(): void {
    if (this.bmi !== null) {
      if (this.bmi < 18.5) {
        this.result = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.result = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.result = 'Overweight';
      } else {
        this.result = 'Obesity';
      }
    }
  }
  // Display the listed Apps
  ngOnInit() {
    this.appList = this.AppService.listProduct(); 
  }
}