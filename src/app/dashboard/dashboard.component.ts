import { ToastrMessages } from './../toastrMessages';
import { LoginRegisterService } from './../loginRegister.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../Shared.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
	username: string = '';
	constructor(
		private router: Router,
		private loginRegisterService: LoginRegisterService,
		private toastr: ToastrService,
		private sharedService: SharedService
	) {
		this.loginRegisterService.user().subscribe(
			(data) => {
				console.log(data.valueOf());
				this.addName(data);
			},
			(err) => {
				console.log(err);
				this.toastr.error(ToastrMessages.unauthorized);
				this.router.navigate(['/login']);
			}
		);
	}

	addName(data: any) {
		this.username = data.name;
	}

	ngOnInit() {}

	logout() {
		this.loginRegisterService.logout().subscribe(
			(data) => {
				console.log(data);
				this.toastr.success(ToastrMessages.logoutSuccess);
				this.router.navigate(['/']);
				this.sharedService.isLoggedIn = false;
			},
			(err) => console.error(err)
		);
	}
}
