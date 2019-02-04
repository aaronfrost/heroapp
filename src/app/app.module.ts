import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const routes: Route[] = [
    {
        path: '',
        loadChildren: './herolist/herolist.module#HerolistModule',
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SharedModule, HttpClientModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
