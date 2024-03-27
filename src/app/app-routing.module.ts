// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ExamComponent } from './exam/exam.component';
import { HttpClient } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ResultComponent } from './result/result.component';
AdminComponent
ResultComponent



const routes: Routes = [
  { path: '', component:  LoginpageComponent},
  { path: 'login', component:LoginpageComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'exam', component: ExamComponent},
  {path:'result', component:ResultComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
