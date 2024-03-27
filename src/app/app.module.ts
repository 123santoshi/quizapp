import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import { AdminComponent } from './admin/admin.component';
import { ResultComponent } from './result/result.component';
DashboardService
ResultComponent


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    InstructionsComponent,
    ExamComponent,
    AdminComponent,
    ResultComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DashboardService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
