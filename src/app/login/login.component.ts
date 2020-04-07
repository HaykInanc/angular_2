import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private service:LoginService) { }

  ngOnInit() {
  }

  submit(event){
    event.preventDefault();
    this.service.login(this.username, this.password);
  }

}
