import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center">
            <h2>Welcome to {{ title }}!</h2>
            <h3>{{ subtitle }}</h3>
        </div>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'HeroApp';
    subtitle = 'by HeroDevs';

    constructor() {}

    ngOnInit() {}
}
