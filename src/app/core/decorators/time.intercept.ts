import { AppConfiguration } from '../../app.configuration';

export function TimeIntercept(className: string, methodName: string): any {

    // tslint:disable-next-line:only-arrow-functions
    return function (target: any, key: string, descriptor: PropertyDescriptor): any {

        return {
            value: function (...args: any[]): any {

                if (AppConfiguration.enableTimeInterceptor === false) {
                    // tslint:disable-next-line:no-invalid-this
                    return descriptor.value.apply(this, args);
                }

                descriptor.value = descriptor.value;
                console.log(`execution started class : ${className} and method : ${methodName}`);
                // tslint:disable-next-line:no-invalid-this
                let result = descriptor.value.apply(this, args);
                console.log(`execution ended class : ${className} and method : ${methodName}`);

                return result;
            }
        };
    };
}