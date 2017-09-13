import { Injectable } from '@angular/core';
import { Question } from '../models/question';


@Injectable()
export class DataService {

  questions:Question[];

  constructor() {
    this.questions = [
      {
        hide:true,
        text:"what is your name",
        answer:"My name is Sachin Saini"
      },
      {
        hide:true,
        text:"what is your age",
        answer:"My age is 20"
      },
      {
        hide:true,
        text:"what is your hometown",
        answer:"My hometown is Panchkula"
      }
    ];

   }

   getQuestions(){
     return this.questions;
   }
}
