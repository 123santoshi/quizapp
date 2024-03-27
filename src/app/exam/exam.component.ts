import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { ResultComponent } from '../result/result.component';



@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  questions: any[] = [];
  curindex: number = 0;
  curquestion: any;
  isquizstarted: boolean = true;
  isquizfinished: boolean = false;
  timer: number = 0;
  interval: any;
  totalquestions: number = 0;
  //submiteddetails:any[]=[];
  correctAnswered: number = 0;
  Examresult:string="fail";
  newlogin:any[]=[];

  constructor(private http: HttpClient, private router: Router,private ts:DashboardService ) {  
    this.getData();
    //this.submiteddetails=this.ts.details;
  }


  onSelectOption(option: string) {
    if (option === this.curquestion.correctAnswer) {
      this.correctAnswered++;
    }
  }

  /*finishQuiz() {
    if(this.correctAnswered>=2){
      this.Examresult="pass"
    }
    this.ts.details.push({"id":this.ts.index++ , "username":this.ts.email,"correctanscount":this.correctAnswered,"result":this.Examresult})
    console.log(this.ts.details);
    this.router.navigate(['/result']);
  }*/

  // to start the timer on the question
  startTimer() {
    this.timer = 30;
    this.interval = setInterval(() => {
      this.timer--;

      if (this.timer <0) {
        clearInterval(this.interval);
        this.DisplayNextQuestion(this.curindex);
      }
    }, 1000);
  }

  // to display next question when the user clicks on "next button"
  DisplayNextQuestion(index: number) {
    this.curindex++;
    if (this.curindex < this.questions.length) {
      this.curquestion = this.questions[this.curindex];
      this.startTimer();
    }
  }

  // to get the data from the JSON file
  getData() {
    this.http.get<any[]>('../assets/questions.json').subscribe(
      (data) => {
        this.questions = data;
        this.totalquestions = this.questions.length;
        this.curquestion = this.questions[this.curindex];
        this.startTimer();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  finishQuiz() {
    if (this.correctAnswered >= 2) {
      this.Examresult = "pass";
    }
  
    const userDetails = {
      id: this.ts.index++,
      username: this.ts.email,
      correctanscount: this.correctAnswered,
      result: this.Examresult
    };
  
    this.ts.details.push(userDetails);
    console.log(this.ts.details);
  
    // Store details in local storage
    const localStorageKey = 'examResults';
    let storedResults = JSON.parse(localStorage.getItem(localStorageKey) || '[]') as any[];
    storedResults.push(userDetails);
    localStorage.setItem(localStorageKey, JSON.stringify(storedResults));
  
    this.router.navigate(['/result']);
  }
  
  

}
