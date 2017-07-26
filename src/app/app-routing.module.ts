import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageViewComponent } from './image-view/image-view.component';

const routes: Routes = [

    {
        path: '',
        component: MainComponent,

        children: [
            {
                component: DashboardComponent,
                path: '',
            },
        ],
    },
    {
        path: '',
        component: ImageViewComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent,
    DashboardComponent,
    ImageViewComponent,
];
