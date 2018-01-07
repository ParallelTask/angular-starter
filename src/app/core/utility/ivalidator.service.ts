export abstract class IValidatorService {
    abstract isAbsoluteURI(url: string): boolean;
    abstract isNavigationKeyPressed($event: KeyboardEvent): boolean;
    abstract isNullOrUndefined(value: any): boolean;
    abstract isEmpty(value: any): boolean;
    abstract isNotANumber(value: any): boolean;
    abstract isEmail(email: string): boolean;
    abstract isMultipleEmail(str: string, seperator: string): boolean;
} 
