import { Component, OnInit } from '@angular/core';
import { HeroApiService } from '../../../shared/services/hero-api.service';

@Component({
    template: `
        <div class="hero" *ngFor="let hero of (heroes$ | async)">
            <div>{{ hero.name }}</div>
            <img [src]="hero.thumbnail.path + '/portrait_medium.' + hero.thumbnail.extension" />
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-wrap: wrap;
            }

            .hero {
                width: 140px;
                height: 190px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `,
    ],
})
export class HerolistComponent implements OnInit {
    heroes$ = this.heroApi.heroes$;

    constructor(private heroApi: HeroApiService) {}

    ngOnInit() {}
}
