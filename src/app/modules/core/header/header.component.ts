import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pt-hacker-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    name: string;

    /**
     * Angular component lifecycle method
     */
    ngOnInit(): void {
        this.name = 'Hacker User';
    }

    /**
     * @returns first letter
     */
    firstLetter(): string {
        return 'H';
    }
}
