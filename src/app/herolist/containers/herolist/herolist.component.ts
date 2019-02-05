import { Component, OnInit } from '@angular/core';
import { HeroApiService, LIMITS } from '../../../shared/services/hero-api.service';

@Component({
    template: `
        <div class="list-header">
            <div>
                Total - <span>{{ total$ | async }}</span>
            </div>
            <div *ngIf="(page$ | async) !== undefined">
                Page - <span>{{ (page$ | async) + 1 }} of {{ totalPages$ | async }}</span
                >&nbsp;&nbsp;&nbsp;<span
                    ><button (click)="shiftPage(-1)" [disabled]="(page$ | async) < 1">Prev</button
                    ><button (click)="shiftPage(1)" [disabled]="isLastPage$ | async">
                        Next
                    </button></span
                >
            </div>
            <div>
                Show {{ limit$ | async }} results
                <span>
                    <button *ngFor="let l of limits" (click)="setLimit(l)">{{ l }}</button>
                </span>
            </div>
            <div>Search: <input [ngModel]="search" (ngModelChange)="doSearch($event)" /></div>
        </div>
        <div class="list">
            <a class="hero" *ngFor="let hero of (heroes$ | async)" routerLink="/hero/{{ hero.id }}">
                <div class="name" [title]="hero.name">{{ hero.name }}</div>
                <app-hero-image
                    [path]="hero.thumbnail.path"
                    size="medium"
                    layout="portrait"
                ></app-hero-image>
            </a>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
            .list-header {
                display: flex;
                flex-direction: column;
                margin: 10px 20px 20px 20px;
            }
            .list {
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
    total$ = this.heroApi.total$;
    page$ = this.heroApi.page$;
    limit$ = this.heroApi.limit$;
    totalPages$ = this.heroApi.totalPages$;
    isLastPage$ = this.heroApi.isLastPage$;

    limits = LIMITS;
    search = '';

    constructor(private heroApi: HeroApiService) {}

    ngOnInit() {}

    shiftPage(num) {
        this.heroApi.shiftPage(num);
    }

    setLimit(num) {
        this.heroApi.setLimit(num);
    }

    doSearch(text) {
        this.heroApi.setStartsWith(text);
    }
}
