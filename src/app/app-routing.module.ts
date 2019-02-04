import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BasketComponent } from './components/basket/basket.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      data: [{title: 'Bootiful pizza delivered fresh to your door'}]
    },
    {
      path: 'login',
      component: LoginComponent,
      data: [{title: 'Login'}]
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: [{title: 'Register'}]
    },
    {
      path: 'implicit/callback',
      component: OktaCallbackComponent
    },
    {
      path: 'pizzas',
      component: ProductListComponent,
      data: [{type: 'pizzas', title: 'Pizzas'}]
    },
    {
      path: 'sides',
      component: ProductListComponent,
      data: [{type: 'sides', title: 'Sides'}]
    },
    {
      path: 'desserts',
      component: ProductListComponent,
      data: [{type: 'desserts', title: 'Desserts'}]
    },
    {
      path: 'drinks',
      component: ProductListComponent,
      data: [{type: 'drinks', title: 'Drinks'}]
    },
    {
      path: 'basket',
      component: BasketComponent,
      data: [{title: 'Basket'}]
    },
    {
      path: 'about',
      component: AboutComponent,
      data: [{title: 'About'}]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
