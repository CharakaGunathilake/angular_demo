import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductRegistrationComponent } from './pages/product-registration/product-registration.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"register",
        component:ProductRegistrationComponent
    }
];
