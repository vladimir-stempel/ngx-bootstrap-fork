import { normalizeObjectUnits } from '../units/aliases';
import { configFromArray } from './from-array';
import { isObject, isString } from '../utils/type-checks';
export function configFromObject(config) {
    if (config._d) {
        return config;
    }
    const input = config._i;
    if (isObject(input)) {
        const i = normalizeObjectUnits(input);
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            // todo: obsolete -> remove it
            .map(obj => isString(obj) ? parseInt(obj, 10) : obj);
    }
    return configFromArray(config);
}
//# sourceMappingURL=from-object.js.map