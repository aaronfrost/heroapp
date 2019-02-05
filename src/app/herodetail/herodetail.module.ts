import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HerodetailComponent } from './containers/herodetail/herodetail.component';

const routes: Route[] = [
    {
        path: ':heroId',
        component: HerodetailComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [HerodetailComponent],
})
export class HerodetailModule {}
