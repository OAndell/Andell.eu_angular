import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';
import { DataService } from './data-service/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title = 'andell-eu';
    public stickyHeader: boolean = false;

    public aboutText!: string;
    public showCaseText!: string;

    @ViewChild('header')
    public headerElement!: ElementRef;

    @ViewChild('dummyHeader')
    public dummyHeaderElement!: ElementRef;

    constructor(private dataService: DataService) {}

    public ngOnInit() {
        this.aboutText = this.dataService.getAboutText();
        this.showCaseText = this.dataService.getShowCaseText();
    }
}
