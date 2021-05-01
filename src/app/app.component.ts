import { Component, SimpleChanges } from '@angular/core';
import { LoginRegisterService } from './loginRegister.service';
import { SharedService } from './Shared.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'MeanApp-Passport';
	constructor(private loginRegisterService: LoginRegisterService, public sharedService: SharedService) {}
	ngOnInit() {
		this.loginRegisterService.user()
		.subscribe(
			data => {
				this.sharedService.isLoggedIn = true;
			},
			error => {
				this.sharedService.isLoggedIn = false;
			}
		);
	}
}
