import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
// import { EmpInfoComponent } from './emp-info/emp-info.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { InfoComponent } from './Components/info/info.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DemopipePipe } from './demopipe.pipe';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'about', component: InfoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    // EmpInfoComponent,
    CoursesComponent,
    InfoComponent,
    NavbarComponent,
    NewcompComponent,
    LoginComponent,
    PipesComponent,
    DemopipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
