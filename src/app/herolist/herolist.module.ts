import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HerolistComponent } from './containers/herolist/herolist.component';

const routes: Route[] = [
    {
        path: '',
        component: HerolistComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [HerolistComponent],
})
export class HerolistModule {}
