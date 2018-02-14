import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IDateService } from './idate.service';

@Injectable()
export class DateService implements IDateService {

    /**
     * Date format: 1/21/2017
     * @param value date
     * @returns formatted date 01/21/2017
     */
    getMmDdYyyy(value: string): string {
        const date = moment(value);

        return date.isValid() ? date.format('MM/DD/YYYY') : null;
    }

    /**
     * Date format: Jan-21-2017
     * @param value date string
     * @returns Jan-21-2017
     */
    getMmmDdYYYY(value: string): string {
        const date = moment(value);

        return date.isValid() ? date.format('MMM-DD-YYYY') : null;
    }
} 