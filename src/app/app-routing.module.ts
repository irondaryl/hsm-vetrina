import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './pages/home/home.component';
import { EcosystemComponent } from './pages/ecosystem/ecosystem.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { RiskAiComponent } from './pages/risk-ai/risk-ai.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ecosystem', component: EcosystemComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'risk-ai', component: RiskAiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
