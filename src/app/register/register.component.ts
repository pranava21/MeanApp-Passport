import { LoginRegisterService } from './../loginRegister.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrMessages } from '../toastrMessages';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	constructor(private toastr: ToastrService, private loginRegisterService: LoginRegisterService, private router: Router) {}

	ngOnInit() {}

	registerForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		emailId: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
		password2: new FormControl('', [Validators.required])
	});

	registerUser(){
		if(!this.registerForm.valid){
			let nameError = this.registerForm.controls.name.errors;
			let emailErrors = this.registerForm.controls.emailId.errors;
			let passwordError = this.registerForm.controls.password.errors;

			if(nameError!== null && nameError.required !== undefined){
				this.toastr.warning(ToastrMessages.nameRequired)
			}
			if(emailErrors!== null){
				if(emailErrors.required !== undefined){
					this.toastr.warning(ToastrMessages.emailRequired);
				}
				else if(emailErrors.email !== undefined){
					this.toastr.warning(ToastrMessages.nonValidEmail)
				}
			}
			if(passwordError !== null){
				if(passwordError.required !== undefined){
					this.toastr.warning(ToastrMessages.passwordRequired);
				}
			}
		}
		if(this.registerForm.controls.password.value !== this.registerForm.controls.password2.value){
			this.toastr.warning(ToastrMessages.passwordNoMatch);
		}
		else if(this.registerForm.valid){
			this.loginRegisterService.register(JSON.stringify(this.registerForm.value))
				.subscribe(data => {
					console.log(data);
					if(data.hasOwnProperty("userExists")){
						this.toastr.error(ToastrMessages.userExistsMsg);
					}
					else{
						this.toastr.success(ToastrMessages.registerSuccess);
						this.router.navigate(['/login']);
					}
				},
				err => {
					console.log(err);
				})
		}
	}
}
