import { la as ɵɵdefineInjector } from "./_resource-chunk-BKvdw1q2.js";
import { Ai as setClassMetadata, Ga as ɵɵdefineNgModule, Nn as NgModule } from "./core-B5N1Yo0h.js";
import { t as BidiModule } from "./bidi-mDqGXvve.js";
import { n as MatRipple } from "./_ripple-chunk-I9jT3akz.js";
//#region node_modules/@angular/material/fesm2022/_ripple-module-chunk.mjs
var MatRippleModule = class MatRippleModule {
	static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatRippleModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: MatRippleModule,
		imports: [MatRipple],
		exports: [MatRipple, BidiModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [BidiModule] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
		type: NgModule,
		args: [{
			imports: [MatRipple],
			exports: [MatRipple, BidiModule]
		}]
	}], null, null);
})();
//#endregion
export { MatRippleModule as t };
