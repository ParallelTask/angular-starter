import { Component } from '@angular/core';

@Component({
    selector: 'pt-hacker-notfound',
    template: `
        <h2 class='alert'>Page Not Found</h2>
    `,
    styles: [`
        .alert {
            margin: 10px 5px;
            font-family: Calibri;
            color: red;
        }
    `]
})
export class NotFoundComponent {} 