import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  luce = false;
  constructor() { }

  ngOnInit(): void {
  }

  luceOn() {
    this.luce = true;
  }

  luceOff() {
    this.luce = false;
  }
}
