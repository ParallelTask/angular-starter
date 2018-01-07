export abstract class IDateService {
    abstract getMmDdYyyy(value: string): string;
    abstract getMmmDdYYYY(value: string): string;
} 