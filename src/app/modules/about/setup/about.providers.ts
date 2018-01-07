import { AboutService } from '../about.service';
import { IAboutService } from '../iabout.service';

export const AboutProviders = {
    IAboutService: {
        provide: IAboutService,
        useClass: AboutService
    }
};
