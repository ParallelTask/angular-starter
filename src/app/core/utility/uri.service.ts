import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUriService } from './iuri.service';

@Injectable()
export class UriService implements IUriService {

    /**
     * Initializes new instance of HelperService
     * @param router Router Instance
     */
    constructor(private router: Router) { }

    /**
     * Redirects to specified URL
     * @param url url to redirect
     */
    redirect(url: string): void {
        window.location.href = url;
    }

    /**
     * Redirects to Notfound URL
     */
    redirectToNotFound(): void {
        this.router.navigate(['/page-not-found'], { skipLocationChange: true }); 
    }
} 