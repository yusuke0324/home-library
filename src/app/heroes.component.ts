import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  // templateUrl: './app.component.html',
  styleUrls: [ './heroes.component.css' ],
  templateUrl: './heroes.component.html',
  providers: [HeroService]

})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heros';
  selectedHero: Hero;
  heroes : Hero[];
  // books;

  // constructor(private http: Http) {
    // http.get('http://localhost:3000/books.json')
        // .subscribe(res => this.books = res.json());
  // }

  constructor(private heroService: HeroService, private router: Router) { 
    // this.heroes = this.heroServoce.getHeroes();
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void{
    this.getHeroes();
  }
  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}




