import { Injectable } from '@angular/core';
import { Question } from '../models/question';


@Injectable()
export class DataService {

  questions:Question[];

  constructor() {
    // this.questions = [
    //   {
    //     hide:true,
    //     text:"what is your name",
    //     answer:"My name is Sachin Saini"
    //   },
    //   {
    //     hide:true,
    //     text:"what is your age",
    //     answer:"My age is 20"
    //   },
    //   {
    //     hide:true,
    //     text:"what is your hometown",
    //     answer:"My hometown is Panchkula"
    //   }
    // ];

   }

   getQuestions(){
     if(localStorage.getItem('questions') === null){
       this.questions = [];

     }
     else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
     }
     return this.questions;
   }

   addQuestion(question:Question){
    this.questions.unshift(question);
    let questions;
    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
    else{
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
   }
   removeQuestion(question:Question){
     for(let i=0;i<this.questions.length;i++)
      {
        if(this.questions[i]==question)
          {
            this.questions.splice(i,1);
            localStorage.setItem('questions', JSON.stringify(this.questions));  
          }
      }
   }
}
