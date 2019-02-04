import { Component, OnInit } from '@angular/core';
import { HeroApiService } from '../../../shared/services/hero-api.service';

@Component({
    template: `
        <div class="hero" *ngFor="let hero of (heroes$ | async)">
            <div class="name" [title]="hero.name">{{ hero.name }}</div>
            <app-hero-image
                [path]="hero.thumbnail.path"
                size="medium"
                layout="portrait"
            ></app-hero-image>
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
            .name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 140px;
                text-align: center;
            }
        `,
    ],
})
export class HerolistComponent implements OnInit {
    heroes$ = this.heroApi.heroes$;

    constructor(private heroApi: HeroApiService) {}

    ngOnInit() {}
}
