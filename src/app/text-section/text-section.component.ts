import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'text-section',
    templateUrl: './text-section.component.html',
    styleUrls: ['./text-section.component.scss'],
})
export class TextSectionComponent implements OnInit {
    @Input() title!: string;
    @Input() text!: string;
    @Input() reverse!: boolean;

    public textSafeHTML!: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {}

    public ngOnInit(): void {
        this.textSafeHTML = this.sanitizer.bypassSecurityTrustHtml(this.text);
    }

    public get flexDirection(): CSSStyleDeclaration {
        return {
            flexDirection: this.reverse ? 'row-reverse' : 'row',
        } as CSSStyleDeclaration;
    }
}
