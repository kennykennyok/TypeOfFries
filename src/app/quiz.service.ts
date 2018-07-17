import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

questions = [
  {
    id: "1",
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
    choices: [
      {
        name: "Spicy"
      },
      {
        name: "Not Spicy"
      }
    ]
  }
];

  description(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
