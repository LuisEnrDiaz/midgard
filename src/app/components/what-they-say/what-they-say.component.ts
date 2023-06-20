import { Component, Input, OnInit } from '@angular/core';
import { IWhatTheySayItems } from './I-what-they-say.metadata';
import { CARROUSEL_DATA_ITEMS } from './what-they-say.content';

@Component({
    selector: 'app-what-they-say',
    templateUrl: './what-they-say.component.html',
})
export class WhatTheySayComponent implements OnInit {
    @Input() items: IWhatTheySayItems[] = [];

    public currentPosition = 0;

    constructor() {}

    ngOnInit(): void {
        this.items.map((i, index) => {
            i.id = index;
            i.marginLeft = 0;
        });
    }

    setCurrentPosition(position: number) {
        this.currentPosition = position;

        this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
    }

    setNext() {
        let finalPercentage = 0;
        let nextPosition = this.currentPosition + 1;

        if (nextPosition <= this.items.length - 1) {
            finalPercentage = -100 * nextPosition;
        } else {
            nextPosition = 0;
        }

        this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;

        this.currentPosition = nextPosition;
    }

    setBack() {
        let finalPercentage = 0;
        let backPosition = this.currentPosition - 1;

        if (backPosition >= 0) {
            finalPercentage = -100 * backPosition;
        } else {
            backPosition = this.items.length - 1;
            finalPercentage = -100 * backPosition;
        }
        this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
        this.currentPosition = backPosition;
    }
}
