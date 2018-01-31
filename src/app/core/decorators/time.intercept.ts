function TimeIntercept(target: any, key: string, descriptor: PropertyDescriptor): any {
    return {
        value: function (...args: any[]): any {
            descriptor.value = descriptor.value;
            console.log(`execution started class : ${target.constructor.name} and method : ${key}`);
            // tslint:disable-next-line:no-invalid-this
            let result = descriptor.value.apply(this, args);
            console.log(`execution ended class : ${target.constructor.name} and method : ${key}`);

            return result;
        }
    };
}