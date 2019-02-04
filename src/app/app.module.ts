import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatIconModule, MatListModule, MatToolbarModule, MatProgressSpinnerModule, MatSidenavModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OktaAuthModule, OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BasketComponent } from './components/basket/basket.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const config = {
  issuer: 'https://dev-174706.oktapreview.com/oauth2/default',
  redirectUri: environment.redirectUri,
  clientId: '0oaj5mshskhrqo2dj0h7'
};

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    AboutComponent,
    BasketComponent,
    NavBarComponent,
    PageTitleComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
