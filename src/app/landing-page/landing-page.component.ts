import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as p5 from 'p5';
import { FlowField } from '../background/flow-field-animation';
import { AnimationService } from '../animation-service/animation.service';

const MOBLIE_BREAK_POINT: number = 600;

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit, OnInit {
    constructor(private animationService: AnimationService) {}

    public ngOnInit() {}

    public onClick(): void {
        this.animationService.scrollToMainPage();
    }

    public ngAfterViewInit() {
        const gsap = this.animationService.getGsap();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#lading-page',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        gsap.utils.toArray('.parallax').forEach((layer) => {
            const depth = layer.dataset.depth;
            const movement = -(layer.offsetHeight * depth);
            tl.to(layer, { y: movement, ease: 'none' }, 0);
        });

        if (window.innerWidth > MOBLIE_BREAK_POINT) {
            const sketch = (s) => {
                const animation = new FlowField(s, () => s.color(0, 20), 255, s.windowWidth, s.windowHeight);
                s.setup = () => {
                    const c = s.createCanvas(s.windowWidth, s.windowHeight).parent('background-canvas');
                };

                s.draw = () => {
                    animation.draw();
                };
            };
            let canvas = new p5(sketch);
        }
    }
}
