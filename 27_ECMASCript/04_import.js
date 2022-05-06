/**
 * IMPORT
 */

import { one, two } from "./03_export.js";

console.log(one, two);

// Rename import
import { one as num1, two as num2 } from "./03_export.js";

// One import - all exports
import * as numbers from "./03_export.js";

console.log(numbers.Person.name);
