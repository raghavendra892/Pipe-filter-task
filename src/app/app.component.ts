import { Component } from '@angular/core';
import { Ifiles } from './shared/models/data';
import { cricketers } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus vero aut aspernatur, quam assumenda quisquam sit facere ea consequatur minima optio quod eum earum.';
   searchByValue !: string;
  d : Date = new Date(2022, 1)

  course = {
    courseName : "Mean Stack",
    NoOfStudents :123456,
    rating : 3.5895,
    price : 199.99
  }

  filesArray : Array<Ifiles> = [
    {
      name : "Form 16",
      size : 22666988,
      type : "pdf"
    },
    {
      name : "Saliary Slip",
      size : 22666988,
      type : "pdf"
    },
    {
      name : "TDC",
      size : 22666988,
      type : "pdf"
    }
  ]

  playersArray = cricketers;

}
