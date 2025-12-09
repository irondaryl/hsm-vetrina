import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslatePipe } from './pipes/translate.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EcosystemComponent } from './pages/ecosystem/ecosystem.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { RiskAiComponent } from './pages/risk-ai/risk-ai.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EcosystemComponent,
    PlatformComponent,
    RiskAiComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    TranslatePipe,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
FormsModule,
SocialLoginModule,
HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'XXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com' // <-- metti il client id OAuth2
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
