import { Component, OnInit } from '@angular/core';
import { Characters } from '../models/characters_model';
import { CharactersService } from '../services/characters.service';

@Component({
  template: `
<!--
    <div class="row lista justify-content-end">
      <div
        class="carta col-md-3 m-4 text-center"
        *ngFor="let char of characters; let i = index"
      >
            <div class="contenitore-immagine">
              <img class="immagine" src="{{ char.image }}" />
            </div>
            <h5 class="card-title h2 nome">{{ char.name }}</h5>
            <p class="testo-carta">
              {{ char.species }}, {{ char.gender }} {{ char.dateOfBirth }}
            </p>
            <p *ngIf="char.house == 'Gryffindor'" class="grifondoro">
              {{ char.house }}
            </p>
            <p *ngIf="char.house == 'Slytherin'" class="serpeverde">
              {{ char.house }}
            </p>
            <p *ngIf="char.house == 'Ravenclaw'" class="corvonero">
              {{ char.house }}
            </p>
            <p *ngIf="char.house == 'Hufflepuff'" class="tassorosso">
              {{ char.house }}
            </p>
          </div> -->
          <div class="mb-3 text-center">
          <input
            id="searchbar"
            [(ngModel)]="search"
            type="text"
            name="search"
            placeholder="Search by Character Name (Case Sensitive. Ex: Harry Potter, not harry potter)"
            class="mt-5"
          />
        </div>
          <div class="row lista justify-content-center">
<div class="card-container col-md-4" *ngFor="let char of getFilteredCharacters(); let i = index">
  <div class="card">
    <div class="front">
      <h2 class="sub-title">{{char.name}}</h2>


<h1 *ngIf="char.house == 'Gryffindor'" class="grifondoro title">
              {{ char.house }}
</h1>
            <h1 *ngIf="char.house == 'Slytherin'" class="serpeverde title">
              {{ char.house }}
</h1>
            <h1 *ngIf="char.house == 'Ravenclaw'" class="corvonero title">
              {{ char.house }}
            </h1>
            <h1 *ngIf="char.house == 'Hufflepuff'" class="tassorosso title">
              {{ char.house }}
            </h1>

     <div class="image"><img src="{{char.image}}" alt="" /></div>
    </div>
    <div class="back">
      <h3 class="name">{{char.name}}</h3>
      <ul>
    <li><b>specie</b>: {{char.species}}</li>
    <li><b>date of birth</b>: {{char.dateOfBirth}}</li>
    <li><b>eyes colour</b>: {{char.eyeColour}}</li>
    <li><b>hair colour</b>: {{char.hairColour}}</li>
    <hr>
    <li><b>actor</b>: {{char.actor}}</li>
</ul><hr>
    <ul *ngIf="char.wizard == true">
    <li><b>wand</b>: {{char.wand.wood}}, {{char.wand.core}}, {{char.wand.length}}.</li>
    <li><b>patronus</b>: {{char.patronus}}</li>
</ul>

    </div>
  </div></div>

  `,
  styles: [
    `
#searchbar {
  width: 30%;
  text-align: center;
}

.card-container {
  perspective: 1000;
  margin: 0 auto 50px;
  width: 400px;
  text-align: center;
}

.front, .back {
  backface-visibility: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 30px;
  box-sizing: border-box;
  transition-delay: 0.15s;
  transition: 0;
}

.front {
	transform: rotateY(0deg);
}

.back {
	transform: rotateY(180deg);
  opacity: 0;
  padding-top: 60px;
  backface-visibility: visible;
  background: #474d73;
  color: white;
}

.card {
  text-align: center;
  position: relative;
  width: 400px;
  height: 450px;
  background: #edc66473;
  border-radius: 5px;
  box-shadow: 3 4px 10px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  transition: 0.5s;
	transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
    .front {
      opacity: 0;
    }
    .back {
      opacity: 1;
    }
  }
}

.sub-title {
  color: black;
  animation: slide-in 0.75s;
  animation: slide-in 0.75s cubic-bezier(0.625, 0.075, 0.110, 1.165);
  animation-timing-function: cubic-bezier(0.625, 0.075, 0.110, 1.165);
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 0 5px 0;
}

.title {
  color: black;
  animation: slide-in-slow 0.75s;
  animation: slide-in-slow 0.75s cubic-bezier(0.625, 0.075, 0.110, 1.165);
  animation-timing-function: cubic-bezier(0.625, 0.075, 0.110, 1.165);
  font-size: 40px;
  font-weight: 600;
  font-family: harry;
  margin: 0;
}

.name {
  color: #edc664;
  font-size: 27px;
  font-weight: 600;
  margin: 0 0 15px;
}

p {
  color: rgba(white, 0.85);
  font-size: 19px;
  line-height: 1.5;
  margin: 0 0 35px;
}


.image {
  position: relative;
  margin: auto;
  margin-top: 10%;
  width: 230px;
  height: 230px;
  text-align: center;
  animation: slide-in-right 1.25s;
  animation: slide-in-right 1.25s cubic-bezier(0.625, 0.075, 0.110, 1.165);
  animation-timing-function: cubic-bezier(0.625, 0.075, 0.110, 1.165);
  overflow: hidden;
  border: 5px solid #474d73;
  border-radius: 100%;
}

.image img {
  width: 100%;
}

ul {
  list-style-type: none;
}
/* animation */


@keyframes slide-in {
  0% {
    transform: translate3d(-300px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-in-slow {
  0% {
    transform: translate3d(-300px, 0, 0);
  }
  20% {
    transform: translate3d(-300px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-in-right {
  0% {
    transform: translate3d(350px, 0, 0);
  }
  30% {
    transform: translate3d(350px, 0, 0);
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}


    `
  ],
})
export class CharactersPage implements OnInit {
  characters!: Characters[];
  filteredCharacters!: Characters[];
  search = '';

  constructor(private charService: CharactersService) {}

  ngOnInit(): void {
    this.charService.getAll().subscribe((c) => {
      this.characters = c as any;
    });
  }

  getFilteredCharacters(): Characters[] {
    if (!this.search) {
      return this.characters;
    }
    const filteredArray = this.characters.filter((c) =>
      c.name.includes(this.search)
    );
    return filteredArray;
  }

  onSearch() {
    this.filteredCharacters = this.characters.filter((c) => {
      c.name.includes(this.search);
    });
  }
}
