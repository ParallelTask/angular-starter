export abstract class IUriService {
    abstract redirect(url: string): void;
    abstract redirectToNotFound(): void;
} 