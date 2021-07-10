import { Injectable } from '@angular/core';
import { ProfileData, SkillItem } from './data.model';
import mainTemplate from './content/main.html';
import showCaseTemplate from './content/show-case.html';
import aboutTemplate from './content/about.html';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    public getSkillList(): SkillItem[] {
        return [
            {
                name: 'Android',
                level: 6,
            },
            {
                name: 'CSS',
                level: 5,
            },
            {
                name: 'TypeScript',
                level: 9,
            },
            {
                name: 'JavaScript',
                level: 8,
            },
            {
                name: 'Full-Stack',
                level: 4,
            },
            {
                name: 'Animation',
                level: 2,
            },
            {
                name: 'Angular',
                level: 9,
            },
            {
                name: 'HTML',
                level: 6,
            },
            {
                name: 'React',
                level: 4,
            },
            {
                name: 'Java',
                level: 7,
            },
            {
                name: 'Testing',
                level: 4,
            },
            {
                name: 'CI/CD',
                level: 3,
            },
            {
                name: 'RxJS',
                level: 7,
            },
            {
                name: 'ngrx',
                level: 5,
            },
            {
                name: 'SQL',
                level: 2,
            },
            {
                name: 'Azure',
                level: 4,
            },
            {
                name: 'Frontend',
                level: 8,
            },
            {
                name: 'AngularJS',
                level: 3,
            },
            {
                name: 'Node.js',
                level: 5,
            },
            {
                name: 'Kotlin',
                level: 3,
            },
            {
                name: 'SCSS/SASS',
                level: 5,
            },
        ];
    }

    public getProfileData(): ProfileData {
        return {
            location: 'Stockholm',
            employer: 'Vizlib',
            linkedIn: {
                text: 'LinkedIn',
                url: 'https://www.linkedin.com/in/oscar-andell-156ba0138/?locale=en_US',
            },
            github: {
                text: 'github/oandell',
                url: 'https://github.com/OAndell',
            },
            reusume: {
                text: 'cv.pdf',
                url: 'https://drive.google.com/file/d/1mSyWhLg_nIY8-Y4mIKmlz15DazuTFeyR/view',
            },
            email: 'Oscar@andell.eu',
        };
    }

    public getMainText(): string {
        return mainTemplate;
    }
    public getAboutText(): string {
        return aboutTemplate;
    }

    public getShowCaseText(): string {
        return showCaseTemplate;
    }
}
