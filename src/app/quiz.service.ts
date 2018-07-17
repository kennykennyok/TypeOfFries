import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  value = 0;

questions = [
  {
    id: "1",
    selectedAnswer:0,
    choices: [
      {
        name: "Soft",
        value: 1
      },
      {
        name: "Crispy",
        value: 2
      }
    ]
  },
  {
    id: "2",
    selectedAnswer:0,
    choices: [
      {
        name: "Skin",
        value:1
      },
      {
        name: "No Skin",
        value:2
      }
    ]
  },
  {
    id: "3",
    selectedAnswer:0,
    choices: [
      {
        name: "Thick",
        value:1
      },
      {
        name: "Thin",
        value:2
      }
    ]
  },
  {
    id: "4",
    selectedAnswer:0,
    choices: [
      {
        name: "Seasoned",
        value:1
      },
      {
        name: "Not Seasoned",
        value:2
      }
    ]
  },
  {
    id: "5",
    selectedAnswer:0,
    choices: [
      {
        name: "Artistic",
        value:1
      },
      {
        name: "Simple",
        value:2
      }
    ]
  },
  {
    id: "6",
    selectedAnswer:0,
    choices: [
      {
        name: "Spicy",
        value:1
      },
      {
        name: "Not Spicy",
        value:2
      }
    ]
  }
];

calculateResult () {
  let value = 0;
  for (let i = 0; i < this.questions[i]; i++) {
    value += this.questions[i].selectedAnswer;
  }


// Code that will calculate the result ((EXAMPLE))
  if(this.totalResult > 0 && this.totalResult <= 8) {
    this.theTruth = "typeoffry";
  } else if (this.totalResult > 50 && this.totalResult <= 100) {
    this.theTruth = "anotherfry";
  } else {
    this.theTruth = "soggyfry";
  }


};


  description(arg0: any): any {
    throw new Error("Method not implemented.");
  };

  constructor() { }
};

