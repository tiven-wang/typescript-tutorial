import { ZipCodeValidator, numberRegexp, ParseIntBasedZipCodeValidator } from "./src/AllValidators";
import * as validator from "./src/ZipCodeValidator";
import j from "./src/JQuery";

import jq = require("./src/JQuery");

import jQuery1 = require("jquery");
import jQuery2 from "jquery";

let zipValidator = new validator.ZipCodeValidator();

let myValidator = new ZipCodeValidator();
let s = "123456";

console.log(myValidator.isAcceptable(s));
console.log(myValidator.isAcceptable(s) === (s.length === 5 && numberRegexp.test(s)));

j("button.continue").html( "Next Step..." );

jq("button.continue");

jQuery2("");
jQuery1("");
