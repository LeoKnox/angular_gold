import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ninja Gold';
  gold: number;
  log;
  ngOnInit(){
    this.gold = 0;
    this.log = [];
  }

  farm(){
    let random: number = Math.floor(Math.random() * 3 + 2);
    this.gold += random;
    this.log.push(`You have earned ${random} golds`);
    return this.gold;
  }

  cave(){
    let random: number = Math.floor(Math.random() * 5 + 5);
    this.gold += random;
    this.log.push(`You have earned ${random} golds`);
    return this.gold;
  }

  house(){
    let random: number = Math.floor(Math.random() * 8 + 7);
    this.gold += random;
    this.log.push(`You have earned ${random} golds`);
    return this.gold;
  }

  casino(){
    let random: number = Math.floor(Math.random() * 200 - 100);
    this.gold += random;
    if (random >0){
      this.log.push(`You have earned ${random} golds`);
    }
    else {
      this.log.push(`You have lost ${random} golds`);
    }
    return this.gold;
  }
}
