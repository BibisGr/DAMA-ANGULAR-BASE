import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links: {name: string, url:string}[]=[
    {name: 'Home', url:'/home'},
    {name: 'Personajes', url:'/personajes'},
    {name: 'Personaje', url:'/personaje'},
    {name: 'About Us', url:'/about'},
  ]

}
