import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  value = 0;

  theTruth = "";

  totalResult = 0;

  img = "";
  fryDescription = "";

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


  for (let i = 0; i < this.questions.length; i++) {
    value += +this.questions[i].selectedAnswer;

    this.totalResult = value;
  }


console.log(this.questions[0].selectedAnswer);
  if(this.questions[0].selectedAnswer == 1) {
    if (this.totalResult > 0 && this.totalResult <= 8) {
      this.theTruth = "You're a Chili Cheese Fry!";
      this.img = "http://www.imfoodie.net/wp-content/uploads/2018/02/cheese-fries.jpg";
      this.fryDescription="So sloppy but hey no shame!";
    } else {
      this.theTruth = "You're a Steak Fry!";
      this.img = "http://www.foodbizmelbourne.com.au/wp-content/uploads/2017/01/mccains-steak-fries-510x400.jpg";
      this.fryDescription="It's like a french fry, but a bigger french fry.";
    }
  } else {
    if (this.totalResult > 0 && this.totalResult <=  9) {
      this.theTruth = "You're a Waffle Fry!";
      this.img = "https://piezonis.com/wp-content/uploads/2017/12/xpiezonis_waffle_fries-768x768.jpg.pagespeed.ic.zTOK_5NKZB.jpg";
      this.fryDescription="WAFFLE FRIES! Treat yo self!";
    } else {
      this.theTruth = "You're a Curly Fry!";
      this.img = "https://1for1pizza.com/wp-content/uploads/2016/08/Apps-Curly-Fries.png";
      this.fryDescription="The eloquent and ever tasteful curly fry. Yes. Get you some.";
    }
  }

  console.log(this.totalResult);

};

resetValues () {
  for (let i = 0; i < this.questions.length; i++) {
    this.questions[i].selectedAnswer = 0;
}
};


  description(arg0: any): any {
    throw new Error("Method not implemented.");
  };

  constructor() { }
};

