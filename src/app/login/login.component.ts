import { ToastrMessages } from './../toastrMessages';
import { LoginRegisterService } from './../loginRegister.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from '../Shared.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	constructor(
		private toastr: ToastrService,
		private loginRegisterService: LoginRegisterService,
		private router: Router,
		private sharedService: SharedService
	) {}

	ngOnInit() {}

	loginForm = new FormGroup({
		emailId: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
	});

	loginUser() {
		if (!this.loginForm.valid) {
			let emailErrors = this.loginForm.controls.emailId.errors;
			let passwordErrors = this.loginForm.controls.password.errors;
			//console.log(this.loginForm.controls.password.errors);
			if (emailErrors !== null) {
				if (emailErrors.required !== undefined) {
					this.toastr.warning(ToastrMessages.emailRequired);
				} else if (emailErrors.email !== undefined) {
					this.toastr.warning(ToastrMessages.nonValidEmail);
				}
			}
			if (passwordErrors !== null) {
				if (passwordErrors.required !== undefined) {
					this.toastr.warning(ToastrMessages.passwordRequired);
				}
			}
		} else {
			console.log(this.loginForm.value);
			this.loginRegisterService
				.login(JSON.stringify(this.loginForm.value))
				.subscribe(
					(data) => {
						console.log(data);
						this.router.navigate(['/dashboard']);
						this.toastr.success(ToastrMessages.loginSuccess);
						this.sharedService.isLoggedIn = true;
					},
					(error) => {
						console.error(error);
						this.handleLoginErrors(error);
					}
				);
		}
	}

	handleLoginErrors(error: any) {
		if (error.error.emailError !== undefined) {
			this.toastr.warning(ToastrMessages.emailNotFound);
		} else if (error.error.passwordError !== undefined) {
			this.toastr.warning(ToastrMessages.passwordIncorrect);
		}
	}
}
