import { ConfigurationDev } from './configuration.dev';
import { ConfigurationRelease } from './configuration.release';
import { environment } from '../environment/environment';

export const Configuration = (() => {
    return environment === 'dev' ? ConfigurationDev : ConfigurationRelease;
})();