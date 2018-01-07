import { Injectable } from '@angular/core';
import { IValidatorService } from './ivalidator.service';

@Injectable()
export class ValidatorService implements IValidatorService {

    /**
     * Checks URI is absolute
     * @param url url value
     * @returns url === absoluteUrl ? true : false
     */
    isAbsoluteURI(url: string): boolean {
        return (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) ? true : false;
    }

    /**
     * Is NavigationKey pressed
     * @param $event Event Object
     * @returns Given Key === NavigationKey ? true : false
     */
    isNavigationKeyPressed($event: KeyboardEvent): boolean {
        if ($event.keyCode === 39 || $event.keyCode === 37 ||
            $event.keyCode === 9 || $event.keyCode === 13) {
            return true;
        }

        return false;
    }

    /**
     * Is value null or undefined
     * @param value input value
     * @returns input === undefined || null ? true : false
     */
    isNullOrUndefined(value: any): boolean {
        return (value === undefined || value === null || typeof value === 'undefined') ? true : false;
    }

    /**
     * Is value null or undefined or empty
     * @param value input value
     * @returns input == null || undefined || '' ? true : false;
     */
    isEmpty(value: any): boolean {
        return (this.isNullOrUndefined(value) || value === '') ? true : false;
    }

    /**
     * Is value not a Number
     * @param value input value
     * @returns input === isNan() ? true  : false
     */
    isNotANumber(value: any): boolean {
        return isNaN(value);
    }

    /**
     * Is email valid
     * @param email email string
     * @returns string === email ? true : false
     */
    isEmail(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    /**
     * Is multiple email valid
     * @param str email string
     * @param seperator seperator between emails
     * @returns value === mutiple email ? true : false
     */
    isMultipleEmail(str: string, seperator: string): boolean {

        const emails = str.split(seperator);

        for (const email of emails) {
            if ((email.length !== 0) && this.isEmail(email) === false) {
                return false;
            }
        }

        return true;
    }
} 
