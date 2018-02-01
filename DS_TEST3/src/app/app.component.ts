import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <!--behaves like a superurl-button-->
            <!--routerLinkActive - Lets you add a CSS class to an element when the link's route becomes active.-->
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/testpage" routerLinkActive="active">Test Page</a>
            <a routerLink="/login" routerLinkActive="active">Log Out</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
}