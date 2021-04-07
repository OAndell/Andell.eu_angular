import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationService } from '../animation-service/animation.service';
import { DataService } from '../data-service/data.service';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, AfterViewInit {

    public mainText!: string; 

    constructor(private animationService: AnimationService, private dataService: DataService) {}

    public ngOnInit() {
        this.mainText = this.dataService.getMainText();
    }

    public ngAfterViewInit() {
        /*const gsap = this.animationService.getGsap();
        gsap.to('.main-text', 0, { x: 100 });
        gsap.to('.word-cloud', 0, { y: -100 });
        gsap.to('.profile-card', 0, { x: -100 });

        const mainPageTrigger = {
            trigger: '.main-page-wrapper',
            start: 'top center ',
        };

        gsap.to('.main-text', 0.8, { opacity: 1, x: 0, delay: 0.5, scrollTrigger: mainPageTrigger });
        gsap.to('.word-cloud', 0.8, { opacity: 1, y: 0, delay: 0.5, scrollTrigger: mainPageTrigger });
        gsap.to('.profile-card', 0.8, { opacity: 1, x: 0, delay: 0.5, scrollTrigger: mainPageTrigger });

        /*gsap.to('#light', 0.5, {opacity: 1, y: 0, delay: 1, ease: Back.easeOut.config(1.7)});
        gsap.to('p', 1, {opacity: 1, y: 20, delay: 1.4});
        gsap.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});*/
    }
}
