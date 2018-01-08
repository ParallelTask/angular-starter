import { ConfigurationDev } from './configuration.dev';
import { ConfigurationRelease } from './configuration.release';
import { AppConfiguration } from '../../app.configuration';

export const Configuration = (() => {
    return AppConfiguration.environment === 'dev' ? ConfigurationDev : ConfigurationRelease;
})();