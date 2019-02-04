import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center">
            <h1>Welcome to {{ title }}!</h1>
        </div>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'herotest';

    constructor() {}

    ngOnInit() {}
}
