import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../loginRegister.service';
import { SharedService } from '../Shared.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	constructor(
		public sharedService: SharedService,
		private loginRegisterService: LoginRegisterService
	) {}
	isHidden: boolean = false;
	ngOnInit() {
		this.loginRegisterService.user().subscribe(
			(data) => {
				this.sharedService.isLoggedIn = true;
				this.isHidden = true;
			},
			(error) => {
				this.sharedService.isLoggedIn = false;
				this.isHidden = false;
			}
		);
	}
}
