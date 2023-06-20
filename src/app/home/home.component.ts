import { Component } from '@angular/core';
import { CARROUSEL_DATA_ITEMS } from '../components/what-they-say/what-they-say.content';
import { IWhatTheySayItems } from '../components/what-they-say/I-what-they-say.metadata';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public carouselData: IWhatTheySayItems[] = CARROUSEL_DATA_ITEMS;
}
