import { SharedService } from './Shared.service';
import { LoginRegisterService } from './loginRegister.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserinfoService } from './userinfo.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		UserinfoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
	],
	providers: [LoginRegisterService, SharedService, UserinfoService],
	bootstrap: [AppComponent],
})
export class AppModule {}
