import { Injectable } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ExamComponent } from './exam/exam.component';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  index=1;
  email:string=""
  details=[
    {
      id:1,
      username:"santu@gmail.com",
      correctanscount:0,
      result: "fail"
    }
  ]

  constructor() { }
  
}
