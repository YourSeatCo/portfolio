import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCzo_egIraZU2FdQ0P1uWTGoZKyRBcHg1A",
    authDomain: "chadprototype.firebaseapp.com",
    projectId: "chadprototype",
    storageBucket: "chadprototype.appspot.com",
    messagingSenderId: "632738783531",
    appId: "1:632738783531:web:44819c3fd4072503d4656e"
}
}