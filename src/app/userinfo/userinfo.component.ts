import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Shared.service';
import { UserinfoService } from '../userinfo.service';

@Component({
	selector: 'app-userinfo',
	templateUrl: './userinfo.component.html',
	styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {
	userName: string = '';
	userEmail: string = '';
	userBirthday: string = '';
	contactNo: string = '';
	organization: string = '';

	constructor(
		private userInfoService: UserinfoService,
		private sharedService: SharedService
	) {}

	ngOnInit() {
		this.userInfoService.getUserId().subscribe((data) => {
			if (data.hasOwnProperty('user')) {
				let id = this.getId(data)
				this.userInfoService
					.getUserInfo({ id: id })
					.subscribe(
						(userInfo) => {
							this.updateUserInfoInUI(userInfo);
						},
						(err) => console.error(err)
					);
			}
		});
	}

	updateUserInfoInUI(data: any) {
		this.userName = data.UserName;
		this.userEmail = data.UserEmail;
		this.contactNo = data.ContactNo;
		this.userBirthday = data.UserBirthday.toString();
		this.organization = data.Organization;
	}

	getId(data: any){
		return data.user;
	}
}
