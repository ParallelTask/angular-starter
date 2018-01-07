export abstract class IConvertService {
    abstract convertToDecimal(value: string): number;
    abstract convertToInt(value: any): number;
    abstract convertToJSON(value: string): any;
    abstract convertToDate(value: string): Date;
}