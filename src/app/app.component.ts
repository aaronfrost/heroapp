import { Component, OnInit } from '@angular/core';
import { HeroApiService } from './shared/services/hero-api.service';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center">
            <h1>Welcome to {{ title }}!</h1>
        </div>
        <div class="table">
            <div class="hero" *ngFor="let hero of (heroes$ | async)">
                <div>{{ hero.name }}</div>
                <img [src]="hero.thumbnail.path + '/portrait_medium.' + hero.thumbnail.extension" />
            </div>
        </div>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'herotest';
    heroes$ = this.heroApi.heroes$;

    constructor(private heroApi: HeroApiService) {}

    ngOnInit() {}
}
