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
        name: "Soft"
      },
      {
        name: "Crispy"
      }
    ]
  },
  {
    id: "2",
    choices: [
      {
        name: "Skin"
      },
      {
        name: "No Skin"
      }
    ]
  },
  {
    id: "3",
    choices: [
      {
        name: "Thick"
      },
      {
        name: "Thin"
      }
    ]
  },
  {
    id: "4",
    choices: [
      {
        name: "Seasoned"
      },
      {
        name: "Not Seasoned"
      }
    ]
  },
  {
    id: "5",
    choices: [
      {
        name: "Artistic"
      },
      {
        name: "Simple"
      }
    ]
  }
];

  description(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
