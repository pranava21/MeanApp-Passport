import { UserinfoComponent } from './userinfo/userinfo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'userinfo', component: UserinfoComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
