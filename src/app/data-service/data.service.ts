import { Injectable } from '@angular/core';
import { ProfileData, SkillItem } from './data.model';

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
        return `
<p>I am a professional software developer & engineer currently delivering frontend solutions 
for Vizlib in Stockholm, Sweden.  Even though my professional focus at the moment 
is React and Angular, I have a passion for the entire tech stack,
 from the UI to the database. Check out some of my projects!
</p>
<p>
I feel like I have only just dipped my toes in the water when it comes to this industry, and I am already loving the international setting, the challenges, and the amazing people it offers.  I can't wait to see what technologies, opportunities, and interesting problems lies in the future! 
</p>
<p>
Feel free to connect through LinkedIn or send me an Email!
</p>
Oscar Andell
     `;
    }
    public getAboutText(): string {
        return `Created this website, mostly because I thought I created a cool background effect and wanted to use it for something. It went through a few itterations and is still under development. It could still use some polish, but perfection is usually the enemy of actually releasing something!        `;
    }

    public getShowCaseText(): string {
        return `<h3>Riksdagskollen </h3>
        <div style="display: flex; flex-direction: row; justify-content: space-around; flex-flow: wrap;">
            <p style="flex: 1;">
                One project I would like to highlight is <a href="https://play.google.com/store/apps/details?id=se.oandell.riksdagen&hl=sv&gl=US"><strong>Riksdagskollen!</strong></a>
                (Unfortunately only available in Swedish). 
                It is a project I started in university to learn more about Android and mobile development.
                 Over the years it grew into quite a successful app (Currently 4.6 on Playstore), 
                 which I and together with a friend continue to maintain and develop.
                 <br><br>
                The app provides an accessible way to follow the elected representatives and view the work that goes on in the Swedish parliament. 
                Riksdagskollen parses the public API from the Swedish parliament and offers features such as viewing, reading and listening to debates, viewing decisions and voting history, customized push notifications and more. 
                Riksdagskollen also integrates the Twitter API to show elected officials and parties tweet timelines. Currently we are working on implementing our own backendservice to provide more data such as polling numbers. 
            </p>
            <img class="text-image" src="https://raw.githubusercontent.com/OAndell/Riksdagskollen/master/screenshots/menu.png">    
        </div>
        
            `;
    }
}
