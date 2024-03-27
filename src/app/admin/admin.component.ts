import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  userdetails: any[] = [];  // Declare the userdetails array

  ngOnInit() {
    // Retrieve data from local storage
    const localStorageKey = 'examResults';
    const storedResults = JSON.parse(localStorage.getItem(localStorageKey) || '[]') as any[];

    // Assign the retrieved data to the userdetails array
    this.userdetails = storedResults;

  }
  

  



}
