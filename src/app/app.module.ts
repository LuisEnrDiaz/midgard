import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ExclusiveComponent } from './components/exclusive/exclusive.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { HitsComponent } from './components/hits/hits.component';
import { WhatTheySayComponent } from './components/what-they-say/what-they-say.component';
import { ServiceComponent } from './components/service/service.component';
import { IndieComponent } from './components/indie/indie.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutUsComponent,
        ExclusiveComponent,
        CollaboratorsComponent,
        HitsComponent,
        WhatTheySayComponent,
        ServiceComponent,
        IndieComponent,
        PartnersComponent,
        ContactComponent,
        FooterComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgsRevealModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
