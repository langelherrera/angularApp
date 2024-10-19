import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [

    {
        path:'',
        component: SearchComponent
    },{
        path:'customer',
        component: CustomerComponent
    }
];
