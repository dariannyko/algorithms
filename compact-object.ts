// TODO refactor

type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
  // Scenario obj is array
  if (Array.isArray(obj)) {
    return obj
      .filter((val) => Boolean(val))
      .map((curr) => {
        if (typeof curr === "object") {
          return compactObject(curr);
        } else {
          return curr;
        }
      });
  } else {
    const compactObj = {} as any;
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && Boolean(obj[key])) {
        // Only truthy keys
if (typeof obj[key] === "object")
          compactObj[key] = compactObject(obj[key]);
          else {
            compactObj[key] = obj[key]; 
          }      }
    }
    return compactObj;
  }
}
