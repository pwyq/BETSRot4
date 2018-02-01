import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api.
// This used for demos only.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from '../DashboardComponent/dashboard.component.js';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';

import { LoginComponent }       from './login.component';

import { AppRoutingModule }     from './app-routing.module';
import { TestpageComponent }    from './testpage.component';
import { HeroSearchComponent }  from './hero-search.component';

/* Short-note
    1. Recommend registering app-wide services in the root `AppModule` providers
    2. Until you have a web server that can handle requests for hero data, the HTTP client will
       fetch & save data from a mock service, the in-memory web API.
*/

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        // The `forRoot()` Configuration method takes an `InMemoryDataService` class that primes the in-memory dataase.
        AppRoutingModule
    ],
    declarations: [
        LoginComponent,
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        TestpageComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
