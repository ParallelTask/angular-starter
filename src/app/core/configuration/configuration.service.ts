import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { IConfigurationService } from './iconfiguration.service';

@Injectable()
export class ConfigurationService implements IConfigurationService {

    /**
     * Gets API origin
     * @returns API base url
     */
    apiOrigin(): string {
        return Configuration.api;
    }
} 
