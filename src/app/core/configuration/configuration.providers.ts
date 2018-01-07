import { ConfigurationService } from './configuration.service';
import { IConfigurationService } from './iconfiguration.service';

export const ConfigurationProviders = {
    IConfigurationService: {
        provide: IConfigurationService,
        useClass: ConfigurationService
    }
};
