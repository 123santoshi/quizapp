import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstructionsComponent } from '../instructions/instructions.component';
import { DashboardService } from '../dashboard.service';
import { FormsModule } from '@angular/forms';
FormsModule
DashboardService
InstructionsComponent


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  
  username_email:string=""
  constructor(private router: Router,private ts:DashboardService) { 
    this.ts.email=this.username_email;
  }

  NavigateToInstructions() {
    // Navigate to the instructions page when the login button is clicked
    this.ts.email=this.username_email;
    this.router.navigate(['/instructions']);
  }

 

}
