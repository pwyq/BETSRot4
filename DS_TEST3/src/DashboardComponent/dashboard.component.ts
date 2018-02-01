import { Component, OnInit } from '@angular/core';
import { Hero } from '../app/hero';
import { HeroService } from '../app/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: '../DashboardComponent/dashboard.component.html',  // points to a new template file
    styleUrls: ['../DashboardComponent/dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];    // Defines a heroes array property

    // Inject the  `HeroService` in the constructor and hold it in a private `heroService` field.
    constructor(private heroService: HeroService) { }

    // Call the service to get heroes inside the Angular ngOnInit() lifecycle hook.
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}