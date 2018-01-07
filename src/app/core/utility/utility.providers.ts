import { IConvertService } from './iconvert.service';
import { ConvertService } from './convert.service';
import { IDateService } from './idate.service';
import { DateService } from './date.service';
import { IUriService } from './iuri.service';
import { UriService } from './uri.service';
import { IValidatorService } from './ivalidator.service';
import { ValidatorService } from './validator.service';

export const UtilityProviders = {
    IConvertService: {
        provide: IConvertService,
        useClass: ConvertService
    },
    IDateService: {
        provide: IDateService,
        useClass: DateService
    },
    IUriService: {
        provide: IUriService,
        useClass: UriService
    },
    IValidatorService: {
        provide: IValidatorService,
        useClass: ValidatorService
    }
};
