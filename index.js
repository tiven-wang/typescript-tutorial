var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
define(["require", "exports", "./src/AllValidators", "./src/ZipCodeValidator", "./src/JQuery", "./src/JQuery", "jquery", "jquery"], function (require, exports, AllValidators_1, validator, JQuery_1, jq, jQuery1, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    validator = __importStar(validator);
    JQuery_1 = __importDefault(JQuery_1);
    jquery_1 = __importDefault(jquery_1);
    var zipValidator = new validator.ZipCodeValidator();
    var myValidator = new AllValidators_1.ZipCodeValidator();
    var s = "123456";
    console.log(myValidator.isAcceptable(s));
    console.log(myValidator.isAcceptable(s) === (s.length === 5 && AllValidators_1.numberRegexp.test(s)));
    JQuery_1.default("button.continue").html("Next Step...");
    jq("button.continue");
    jquery_1.default("");
    jQuery1("");
});
