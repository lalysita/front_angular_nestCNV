import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";


@Component ({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm=new FormGroup({
    email:new FormControl("admin@mail.com"),
    password:new FormControl("admin1234")
  })

  funIngresar(){
    alert("Ingresando...")
  }
}