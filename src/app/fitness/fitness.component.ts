// Import angular components
import { Component, OnInit, Input } from '@angular/core';

// Display user iterfaces
interface User {
  title: string;
  warmup: string;
  exercise: string;
  interval: string;
  cooldown: string;
  imageUrl: string;
}

// Define the component data 
@Component({
  selector: 'app-users',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})

// Export service class and implement oninit
export class FitnessComponent implements OnInit {
  @Input() value: User;

  // Create a constructor for the listed items
  constructor() { 
    this.value = { title: "", warmup: "", exercise: "", interval: "", cooldown: "",imageUrl: ""}; 
  }
  ngOnInit() { }
}
