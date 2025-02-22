type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let hasBeenCalled = false;
    let result;
    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args)
            hasBeenCalled = true;
            return result
        }
        return undefined;
    };

}