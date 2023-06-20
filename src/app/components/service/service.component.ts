import { Component } from '@angular/core';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
})
export class ServiceComponent {
    viewInfoClient: boolean = false;
    viewInfoObject: boolean = false;
    viewInfoStrategy: boolean = false;
    viewInfoProfile: boolean = false;
    viewInfoPlaning: boolean = false;
    viewInfoSupport: boolean = false;

    constructor() {}

    openClient() {
        this.viewInfoClient = !this.viewInfoClient;
        this.viewInfoObject = false;
        this.viewInfoStrategy = false;
        this.viewInfoProfile = false;
        this.viewInfoPlaning = false;
        this.viewInfoSupport = false;
    }

    openObject() {
        this.viewInfoObject = !this.viewInfoObject;
        this.viewInfoClient = false;
        this.viewInfoStrategy = false;
        this.viewInfoProfile = false;
        this.viewInfoPlaning = false;
        this.viewInfoSupport = false;
    }

    openStrategy() {
        this.viewInfoStrategy = !this.viewInfoStrategy;
        this.viewInfoClient = false;
        this.viewInfoObject = false;
        this.viewInfoProfile = false;
        this.viewInfoPlaning = false;
        this.viewInfoSupport = false;
    }

    openProfile() {
        this.viewInfoProfile = !this.viewInfoProfile;
        this.viewInfoClient = false;
        this.viewInfoObject = false;
        this.viewInfoStrategy = false;
        this.viewInfoPlaning = false;
        this.viewInfoSupport = false;
    }

    openPlaning() {
        this.viewInfoPlaning = !this.viewInfoPlaning;
        this.viewInfoClient = false;
        this.viewInfoObject = false;
        this.viewInfoStrategy = false;
        this.viewInfoProfile = false;
        this.viewInfoSupport = false;
    }

    openSupport() {
        this.viewInfoSupport = !this.viewInfoSupport;
        this.viewInfoClient = false;
        this.viewInfoObject = false;
        this.viewInfoStrategy = false;
        this.viewInfoPlaning = false;
        this.viewInfoProfile = false;
    }
}
