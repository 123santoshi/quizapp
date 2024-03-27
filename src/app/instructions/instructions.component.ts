import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { ExamComponent } from '../exam/exam.component';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'] 
})
export class InstructionsComponent {
  constructor(private router: Router) { }

  NavigateToHome() {
    this.router.navigate(['/login']);
  }
  NavigateToExam(){
    this.router.navigate(['/exam'])
  }
}
