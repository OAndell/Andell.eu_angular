import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileCardComponent } from './main-page/profile-card/profile-card.component';
import { WordCloudComponent } from './main-page/word-cloud/word-cloud.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
    declarations: [AppComponent, LandingPageComponent, MainPageComponent, ProfileCardComponent, WordCloudComponent, AboutPageComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
