import { Component, HostListener } from '@angular/core';
import { MenuI } from 'src/types/menu';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    menu: MenuI[] = [
        { id: 1, name: 'quienes somos', href: '#about-us' },
        { id: 2, name: 'influencers exclusivos', href: '#exclusive' },
        { id: 3, name: 'influencers colaboradores', href: '#collaborators' },
        { id: 4, name: 'casos de exito', href: '#hits' },
        { id: 5, name: 'servicios', href: '#service' },
        { id: 6, name: 'patners', href: '#patners' },
        { id: 7, name: 'contacto', href: '#contact' },
    ];

    isHeaderScrolled = false;

    constructor() {}

    @HostListener('window:scroll', ['$event'])
    scrollCheck() {
        if (window.pageYOffset > 50) {
            this.isHeaderScrolled = true;
        } else {
            this.isHeaderScrolled = false;
        }
    }
}
