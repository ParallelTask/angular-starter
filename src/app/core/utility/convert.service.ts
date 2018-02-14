import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IConvertService } from './iconvert.service';

@Injectable()
export class ConvertService {

    /**
     * Converts to decimal
     * @param value input value
     * @returns decimal number
     */
    convertToDecimal(value: string): number {
        return parseFloat(value);
    }

    /**
     * Converts to int
     * @param value input value
     * @returns integer
     */
    convertToInt(value: any): number {
        return parseInt(value);
    }

    /**
     * Parse JSON
     * @param value input value
     * @returns json
     */
    convertToJSON(value: string): any {
        return JSON.parse(value);
    }

    /**
     * Returns Javascript Date object
     * @param value input value
     * @returns javascript date object
     */
    convertToDate(value: string): Date {
        const date = moment(value);

        return date.isValid() ? date.toDate() : null;
    }
} 