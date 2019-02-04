import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HerolistComponent } from './containers/herolist/herolist.component';

const routes: Route[] = [
    {
        path: '',
        component: HerolistComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FormsModule],
    declarations: [HerolistComponent],
})
export class HerolistModule {}
