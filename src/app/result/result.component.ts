import { Component } from '@angular/core';
import { Router } from '@angular/router';Router
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  constructor(private router:Router){}
  NavigateToHomePage(){
    this.router.navigate(['/login'])
  }
}
