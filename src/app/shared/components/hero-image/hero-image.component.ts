import { Component, Input, OnInit } from '@angular/core';

export const Layouts = {
    portrait: 'portrait',
    standard: 'standard',
    landscape: 'landscape',
};

export const Sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
};

@Component({
    selector: 'app-hero-image',
    template: `
        <ng-container *ngIf="path">
            <img
                [src]="path + '/' + layout + '_' + size + '.' + extension"
                [ngClass]="{ loaded: loaded }"
                (load)="loaded = true"
            />
        </ng-container>
    `,
    styles: [
        `
            img {
                opacity: 0;
                transition: opacity 400ms ease-in-out;
            }
            img.loaded {
                opacity: 1;
            }
        `,
    ],
})
export class HeroImageComponent implements OnInit {
    @Input() path;
    @Input() extension = 'jpg';
    @Input() size = Sizes.small;
    @Input() layout = Layouts.standard;

    loaded = false;

    constructor() {}

    ngOnInit() {}
}
