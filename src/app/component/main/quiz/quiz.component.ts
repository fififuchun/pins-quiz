import { pokemons } from './../../../pokemons';
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  data: any;
  pokemons = pokemons;

  number1 = Math.floor(Math.random() * 151);
  number2 = Math.floor(Math.random() * 151);
  number3 = Math.floor(Math.random() * 151);
  number4 = Math.floor(Math.random() * 151);

  randomNum = Math.floor(Math.random() * 4);
  numbers = [this.number1, this.number2, this.number3, this.number4];

  contiNum = 0;

  constructor(private dataService: DataService) {
    this.data = this.dataService.import();
    // console.log(this.data);
    // console.log(pokemons[Math.floor(Math.random() * 151) - 1].name);
    // let number1 = Math.floor(Math.random() * 151);
    // let number2 = Math.floor(Math.random() * 151);
    // let number3 = Math.floor(Math.random() * 151);
    // let number4 = Math.floor(Math.random() * 151);

    // let randomNum = Math.floor(Math.random() * 4);
    // let numbers = [number1, number2, number3, number4];
  }

  public PushNumber1() {
    if (this.randomNum == 0) {
      this.contiNum++;
    } else {
      this.contiNum = 0;
    }

    this.number1 = Math.floor(Math.random() * 151);
    this.number2 = Math.floor(Math.random() * 151);
    this.number3 = Math.floor(Math.random() * 151);
    this.number4 = Math.floor(Math.random() * 151);
    this.randomNum = Math.floor(Math.random() * 4);
    this.numbers = [this.number1, this.number2, this.number3, this.number4];
  }

  public PushNumber2() {
    if (this.randomNum == 1) {
      this.contiNum++;
    } else {
      this.contiNum = 0;
    }

    this.number1 = Math.floor(Math.random() * 151);
    this.number2 = Math.floor(Math.random() * 151);
    this.number3 = Math.floor(Math.random() * 151);
    this.number4 = Math.floor(Math.random() * 151);
    this.randomNum = Math.floor(Math.random() * 4);
    this.numbers = [this.number1, this.number2, this.number3, this.number4];
  }

  public PushNumber3() {
    if (this.randomNum == 2) {
      this.contiNum++;
    } else {
      this.contiNum = 0;
    }

    this.number1 = Math.floor(Math.random() * 151);
    this.number2 = Math.floor(Math.random() * 151);
    this.number3 = Math.floor(Math.random() * 151);
    this.number4 = Math.floor(Math.random() * 151);
    this.randomNum = Math.floor(Math.random() * 4);
    this.numbers = [this.number1, this.number2, this.number3, this.number4];
  }

  public PushNumber4() {
    if (this.randomNum == 3) {
      this.contiNum++;
    } else {
      this.contiNum = 0;
    }

    this.number1 = Math.floor(Math.random() * 151);
    this.number2 = Math.floor(Math.random() * 151);
    this.number3 = Math.floor(Math.random() * 151);
    this.number4 = Math.floor(Math.random() * 151);
    this.randomNum = Math.floor(Math.random() * 4);
    this.numbers = [this.number1, this.number2, this.number3, this.number4];
  }
}
