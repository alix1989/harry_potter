import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  tassorosso = 0;
  serpeverde = 0;
  corvonero = 0;
  grifondoro = 0;

 selectedValue!:any;
  selectedValue2!:any;
  selectedValue3!:any;
  selectedValue4!:any;
  selectedValue5!:any;
  answers1 = [
    //Four boxes are placed before you. Which would you try and open?
    // 1-tassorosso, 2-serpeverde, 3-corvonero, 4- grifondoro
    {id: "a", answer: "The small tortoiseshell box"},
    {id: "b", answer: "The gleaming jet black box with a silver lock and key"},
    {id: "c", answer: "The ornate golden casket"},
    {id: "d", answer: "The small pewter box"}
  ]
  answers2 = [
    //You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:
    {id: "c", answer: "Attempt to confuse the troll into letting all three of you pass without fighting?"},
    {id: "a", answer: "Suggest drawing lots to decide which of you will fight?"},
    {id: "d", answer: "Volunteer to fight?"},
    {id: "b", answer: "Suggest that all three of you should fight (without telling the troll)?"}
  ]
  answers3 = [
    //Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:
    {id: "d", answer: "A crackling log fire"},
    {id: "c", answer: "Fresh parchment"},
    {id: "a", answer: "Home"},
    {id: "b", answer: "The sea"}
  ]
  answers4 = [
    // You enter an enchanted garden. What would you be most curious to examine first?
    {id: "a", answer: "The fat red toadstools"},
    {id: "d", answer: "The statue of an old wizard"},
    {id: "b", answer: "The bubbling pool"},
    {id: "c", answer: "The silver leafed tree"}
  ]
  answers5 = [
    // Four goblets are placed before you. Which would you choose to drink?
    {id: "b", answer: "The mysterious black liquid"},
    {id: "c", answer: "The foaming, frothing, silvery liquid "},
    {id: "a", answer: "The smooth, thick, richly purple drink"},
    {id: "d", answer: "The golden liquid"}
  ]

  array = [,,,,]
  sortingHat = false;
  // array=[this.selectedValue, this.selectedValue2, this.selectedValue3, this.selectedValue4];
  constructor() { }

  ngOnInit(): void {
  }

  getA1() {
    console.log(this.selectedValue + " " + this.selectedValue2 + " " + this.selectedValue3 + " " + this.selectedValue4 + " " + this.selectedValue5)
    this.array=[this.selectedValue, this.selectedValue2, this.selectedValue3, this.selectedValue4, this.selectedValue5];
    console.log(this.array);
    this.array.forEach(element => {
      if (element === 'a') {
        this.tassorosso++
      } else if (element === 'b') {
        this.serpeverde++
      } else if (element === 'c') {
        this.corvonero++
      } else if (element === 'd') {
        this.grifondoro++
      } else {
        return;
      }
    })
    console.log("----------------------------")
    console.log("tassorosso: " + this.tassorosso + " serpeverde: " + this.serpeverde + " corvonero: " + this.corvonero + " grifondoro: " + this.grifondoro)
    let huffle = document.getElementById('huffle');
    let slyth = document.getElementById('slyth');
    let raven = document.getElementById('raven');
    let gryf = document.getElementById('gryf');
    if(this.tassorosso >= this.serpeverde && this.tassorosso > this.corvonero && this.tassorosso > this.grifondoro) {
      huffle?.classList.remove('hide');
      slyth?.classList.add('hide');
      raven?.classList.add('hide');
      gryf?.classList.add('hide');
    } else if(this.serpeverde > this.tassorosso && this.serpeverde >= this.corvonero && this.serpeverde >= this.grifondoro){
      slyth?.classList.remove('hide');
      huffle?.classList.add('hide');
      raven?.classList.add('hide');
      gryf?.classList.add('hide');
    } else if(this.corvonero >= this.tassorosso && this.corvonero > this.serpeverde && this.corvonero > this.grifondoro){
      raven?.classList.remove('hide');
      huffle?.classList.add('hide');
      slyth?.classList.add('hide');
      gryf?.classList.add('hide');
    } else if(this.grifondoro >= this.tassorosso && this.grifondoro >= this.corvonero && this.grifondoro > this.serpeverde){
      gryf?.classList.remove('hide');
      huffle?.classList.add('hide');
      slyth?.classList.add('hide');
      raven?.classList.add('hide');
    } else {
      return;
    }

    this.selectedValue = "";
    this.selectedValue2 = "";
    this.selectedValue3 = "";
    this.selectedValue4 = "";
    this.selectedValue5 = "";

    this.tassorosso = 0;
    this.serpeverde = 0;
    this.corvonero = 0;
    this.grifondoro = 0;

    this.array = [,,,,];
  }

  sortingClick() {
    this.sortingHat = true;
  }
  }
