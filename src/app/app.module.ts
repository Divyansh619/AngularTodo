import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { DatachangeComponent } from './Components/datachange/datachange.component';
import { HomeComponent } from './Screen/home/home.component';
import { AboutUsComponent } from './Screen/home/about-us/about-us.component';
import { SignUpComponent } from './Screen/sign-up/sign-up.component';
import { LoginComponent } from './Screen/login/login.component';
import { ListComponent } from './Screen/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { PercentageComponent } from './Components/percentage/percentage.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DatachangeComponent,
    HomeComponent,
    AboutUsComponent,
    SignUpComponent,
    LoginComponent,
    ListComponent,
    PercentageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
