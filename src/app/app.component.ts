import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title = 'andell-eu';
    public stickyHeader: boolean = false;

    @ViewChild('header')
    public headerElement!: ElementRef;

    @ViewChild('dummyHeader')
    public dummyHeaderElement!: ElementRef;

    public ngOnInit() {}
}
