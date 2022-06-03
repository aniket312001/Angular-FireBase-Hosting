import { firebaseConfig } from './firebaseConfig';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice';

  ngOnInit(): void {
      firebase.initializeApp(firebaseConfig)
  }

}
