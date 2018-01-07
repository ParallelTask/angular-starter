import { Component } from '@angular/core';

@Component({
    selector: 'pt-hacker-server-error',
    template: `
        <h2 class='alert'>Server Error Occured</h2>
    `,
    styles: [`
        .alert {
            margin: 10px 5px;
            font-family: Calibri;
            color: red;
        }
    `]
})
export class ServerErrorComponent {} 