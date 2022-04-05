import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters_model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  template: `
    <div class="container pt-3">
      <div class="row justify-content-center case">
        <div class="h1 text-center">Hogwarts Houses</div>
        <div class="col-md-3">
          <div id="gryf" (click)="onGryf(gry)">
            <img class="scudetto" src="/assets/img/gryf.png" width="100%" alt="" #gry />
          </div>
          <div id="gryfText" *ngIf="grifo == true">
            <p class="grifondoro text-center">
              <button (click)="listGryf()" class="btn text-danger">
                <i class="bi bi-person"></i>
              </button>
              Gryffindor
              <button (click)="chiudiGryf()" class="btn text-danger">
                <i class="bi bi-x-circle"></i>
              </button>
            </p>
            <div *ngIf="listaGrifo == false">
              Gryffindors are known for being courageous, daring, brave,
              fiercely loyal, intelligent, and kind. Gryffindors are incredibly
              selfless and frequently go out of their way to make sacrifices for
              others. They are known for facing their ultimate fears in order to
              do what is right.
            </div>
            <div class="listina" *ngIf="listaGrifo == true">
              <div *ngFor="let grifi of charGrifo; let i = index">
                {{ grifi.name }}
              </div>
            </div>
          </div>
        </div>


        <div class="col-md-3">
          <div id="slyth" (click)="onSlyth(sly)">
            <img class="scudetto" src="/assets/img/slyth.png" width="100%" alt="" #sly />
          </div>
          <div id="slythText" *ngIf="serpe == true">
            <p class="serpeverde text-center">
              <button (click)="listSlyth()" class="btn text-danger">
                <i class="bi bi-person"></i>
              </button>
              Slytherin
              <button (click)="chiudiSlyth()" class="btn text-danger">
                <i class="bi bi-x-circle"></i>
              </button>
            </p>
            <div *ngIf="listaSerpe == false">
              Slytherin. Slytherin values ambition, cunning, leadership, and
              resourcefulness; the Sorting Hat said in Harry Potter and the
              Philosopher's Stone that Slytherins will do anything to get their
              way. The house mascot of Slytherin is the serpent, and the house
              colours are green and silver.
            </div>
            <div class="listina" *ngIf="listaSerpe == true">
              <div *ngFor="let serpi of charSerpe; let i = index">
                {{ serpi.name }}
              </div>
            </div>
          </div>
        </div>


        <div class="col-md-3">
          <div id="raven" (click)="onRaven(rav)">
            <img class="scudetto" src="/assets/img/raen.png" width="100%" alt="" #rav />
          </div>
          <div id="ravenText" *ngIf="corvo == true">
            <p class="corvonero text-center">
              <button (click)="listRav()" class="btn text-danger">
                <i class="bi bi-person"></i>
              </button>
              Ravenclaw
              <button (click)="chiudiRav()" class="btn text-danger">
                <i class="bi bi-x-circle"></i>
              </button>
            </p>
            <div *ngIf="listaCorvo == false">
              Ravenclaws are typically intelligent, but they are not always
              academically inclined. They are creative and witty. They value
              learning, but this is not learning for the sake of it. They learn
              about what they are interested in. Many people say that Ravenclaws
              are stuck up, boringly studious or cold. In most cases this could
              not be farther from the truth.
              </div>
            <div class="listina" *ngIf="listaCorvo == true">
              <div *ngFor="let corvi of charCorvo; let i = index">
                {{ corvi.name }}
              </div>
            </div>
          </div>
        </div>



        <div class="col-md-3">
          <div id="huffle" (click)="onHuffle(huf)">
            <img class="scudetto" src="/assets/img/huffle.png" width="100%" alt="" #huf />
          </div>
          <div id="huffleText" *ngIf="tasso == true">
            <p class="tassorosso text-center">
              <button (click)="listHuff()" class="btn text-danger">
                <i class="bi bi-person"></i>
              </button>
              Hufflepuff
              <button (click)="chiudiHuff()" class="btn text-danger">
                <i class="bi bi-x-circle"></i>
              </button>
            </p>
            <div *ngIf="listaTasso == false">
              Hufflepuff’s good traits are that they are humble, inclusive,
              loyal, selfless, and kind. Hufflepuff house’s bad traits are they
              are too trusting, lack self-confidence, fear conflict, think
              others are like them and they are pushovers. Hufflepuffs are
              caring, kind, and patient, sometimes to a fault. They are hard
              workers and have a solid moral compass that drives them to do the
              right thing.
            </div>
            <div class="listina" *ngIf="listaTasso == true">
              <div *ngFor="let tassi of charTasso; let i = index">
                {{ tassi.name }}
              </div>
            </div>
          </div>
        </div>
    </div>
  `,
  styles: [
    `
      .case {
        margin-top: 5%;
      }

      .case .h1 {
        font-family: harry;
        font-size: 6rem;
        color: #474d73;
        text-shadow: 2px 2px 6px #edc664;
      }

      #gryf {
        display: hidden;
      }

      #gryfText,
      #slythText,
      #ravenText,
      #huffleText {
        text-align: justify;
        padding: 3%;
        margin-top: 2%;
        background-color: #edc66473;
        height: 300px;
        box-shadow: 2px 2px 5px #444;
      }

      .scudetto:hover, button:hover {
        cursor: url(/assets/img/wand-link.png), auto;
      }

      .listina {
        text-align: center;
        overflow: auto;
        height: 220px;
      }

      .listina div {
        font-weight: bold;
        padding: 3px;
      }
    `,
  ],
})
export class HousesPage implements OnInit {
  grifo = false;
  serpe = false;
  corvo = false;
  tasso = false;

  listaGrifo = false;
  listaSerpe = false;
  listaCorvo = false;
  listaTasso = false;

  charGrifo!: Characters[];
  charSerpe!: Characters[];
  charCorvo!: Characters[];
  charTasso!: Characters[];

  constructor(private charService: CharactersService) {}

  ngOnInit(): void {
    this.charService.getGrifo().subscribe((c) => {
      this.charGrifo = c as any;
    });
    this.charService.getSerpe().subscribe((c) => {
      this.charSerpe = c as any;
    });
    this.charService.getCorvo().subscribe((c) => {
      this.charCorvo = c as any;
    });
    this.charService.getTasso().subscribe((c) => {
      this.charTasso = c as any;
    });
  }

  //cambio immagini
  onGryf(image: any) {
    image.src = '/assets/img/gryffindorGif.gif';
    this.grifo = true;
  }

  onSlyth(image: any) {
    image.src = '/assets/img/slytherinGif.gif';
    this.serpe = true;
  }

  onRaven(image: any) {
    image.src = '/assets/img/ravenclawGif.gif';
    this.corvo = true;
  }

  onHuffle(image: any) {
    image.src = '/assets/img/hufflepuffGif.gif';
    this.tasso = true;
  }

  //chiusura descrizioni
  chiudiGryf() {
    this.grifo = false;
  }
  chiudiRav() {
    this.corvo = false;
  }
  chiudiSlyth() {
    this.serpe = false;
  }
  chiudiHuff() {
    this.tasso = false;
  }

  //personaggi
  listGryf() {
    this.listaGrifo = true;
  }
  listSlyth() {
    this.listaSerpe = true;
  }
  listRav() {
    this.listaCorvo = true;
  }
  listHuff() {
    this.listaTasso = true;
  }
}
