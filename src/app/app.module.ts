import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileCardComponent } from './main-page/profile-card/profile-card.component';
import { WordCloudComponent } from './main-page/word-cloud/word-cloud.component';
import { TextSectionComponent } from './text-section/text-section.component';

@NgModule({
    declarations: [AppComponent, LandingPageComponent, MainPageComponent, ProfileCardComponent, WordCloudComponent, TextSectionComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
