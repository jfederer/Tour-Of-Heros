import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule  }   from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  	imports: [
	  	BrowserModule,
	  	FormsModule,
		HttpModule,
  		routing,
		InMemoryWebApiModule.forRoot(InMemoryDataService)],
  	providers: [
		HeroService],
  	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent],
  bootstrap: [
	  AppComponent]
})

export class AppModule {}
