import { Component } from '@angular/core';

@Component({
    selector: 'pt-hacker-unauthorized',
    template: `
        <h2 class='alert'>Unauthorized Operation</h2>
    `,
    styles: [`
        .alert {
            margin: 10px 5px;
            font-family: Calibri;
            color: red;
        }
    `]
})
export class UnauthorizedComponent {} 