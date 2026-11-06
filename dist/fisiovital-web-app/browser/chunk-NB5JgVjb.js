import{Br as zp,Bt as Sp,C as EI,Ct as Pe,D as FI,E as Eu,Gn as kP,H as Hp,I as Gp,It as SD,K as Ir,Kn as kl,Kt as UE,Nn as go,Nt as RI,Pt as RP,R as HI,S as ED,Tn as dm,U as ID,Un as kD,Vn as jI,Wn as kI,Wt as Tp,Yt as Vh,Z as KI,_n as ah,a as A,ar as pi,b as D,bn as bp,br as vD,et as LI,ft as ND,g as CI,h as CD,ir as pI,it as MD,jn as gI,l as Ap,mr as su,qn as kp,st as Mc,tt as LP,u as BE,vt as Oc,wn as de,wt as Po,x as DD,xn as cD,xr as vI,y as Cp,yn as au,yr as uv}from"./chunk-BYCzGZpm.js";import{l as lr}from"./chunk-B0O1E7mk.js";import{c as l,d as g,g as le,m as V,n as wt$1,p as Nt,r as J,s as x,t as Mt,u as Ye,y as u}from"./main-D7WMGM5B.js";import{D as ot$1,E as os,N as wt$2,n as Bs,t as Ae}from"./chunk-cC_SGNoy.js";import{n as Mt$1,r as mt$1,t as Bt}from"./chunk-DKLrxu4A.js";import{t as s}from"./chunk-Cide2edk.js";import{l as S,w as v}from"./chunk-DZV5AcpS.js";import{n as j,t as L}from"./chunk-BEZk7Exe.js";import{t as y}from"./chunk-DKVJgSlB.js";import{t as p}from"./chunk-ypi2dYuy.js";import{a as s$1,i,n as a,o as u$1}from"./chunk-UndAvsgl.js";import{o as d}from"./chunk-DUgJ_fZH.js";var We=(()=>{class t{labelPosition=`after`;static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){return BE({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(c,_){c&2&&Hp(`mdc-form-field--align-end`,_.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(c,_){c&1&&(kI(),LI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return t})();var Ze=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var X=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var U=(()=>{class t{_elementRef=D(Ir);_focusMonitor=D(ot$1);_changeDetectorRef=D(RP);defaults=D(Ze);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new X(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=wt$2();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Pe;toggleChange=new Pe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(x).load(os);let e=D(new ah(`tabindex`),{optional:!0}),a=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=a.color||`accent`,this.id=this._uniqueId=D(Ae).getId(`mat-mdc-slide-toggle-`),this.hideIcon=a.hideIcon??!1,this.disabledInteractive=a.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new X(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){let e=[`switch`],a=[`*`];function c(_,N){_&1&&(pi(0,`span`,11),Eu(),pi(1,`svg`,13),Cp(2,`path`,14),Mc(),pi(3,`svg`,15),Cp(4,`path`,16),Mc()())}return BE({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(N,s){if(N&1&&kp(e,5),N&2){let z;FI(z=jI())&&(s._switchElement=z.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(N,s){N&2&&(Sp(`id`,s.id),bp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),KI(s.color?`mat-`+s.color:``),Hp(`mat-mdc-slide-toggle-focused`,s._focused)(`mat-mdc-slide-toggle-checked`,s.checked)(`mat-slide-toggle-full-width`,s.fullWidth)(`_mat-animation-noopable`,s._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,kP],color:`color`,disabled:[2,`disabled`,`disabled`,kP],fullWidth:[2,`fullWidth`,`fullWidth`,kP],disableRipple:[2,`disableRipple`,`disableRipple`,kP],tabIndex:[2,`tabIndex`,`tabIndex`,_=>_==null?0:LP(_)],checked:[2,`checked`,`checked`,kP],hideIcon:[2,`hideIcon`,`hideIcon`,kP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,kP]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[vD([{provide:S,useExisting:go(()=>t),multi:!0},{provide:v,useExisting:t,multi:!0}]),dm],ngContentSelectors:a,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(N,s){if(N&1&&(kI(),pi(0,`div`,1)(1,`button`,2,0),Ap(`click`,function(){return s._handleClick()}),Cp(3,`div`,3)(4,`span`,4),pi(5,`span`,5)(6,`span`,6)(7,`span`,7),Cp(8,`span`,8),Mc(),pi(9,`span`,9),Cp(10,`span`,10),Mc(),pI(11,c,5,0,`span`,11),Mc()()(),pi(12,`label`,12),Ap(`click`,function(Ke){return Ke.stopPropagation()}),LI(13),Mc()()),N&2){let z=HI(2);Tp(`labelPosition`,s.labelPosition),uv(),Hp(`mdc-switch--selected`,s.checked)(`mdc-switch--unselected`,!s.checked)(`mdc-switch--checked`,s.checked)(`mdc-switch--disabled`,s.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,s.disabledInteractive),Tp(`tabIndex`,s.disabled&&!s.disabledInteractive?-1:s.tabIndex)(`disabled`,s.disabled&&!s.disabledInteractive),bp(`id`,s.buttonId)(`name`,s.name)(`aria-label`,s.ariaLabel)(`aria-labelledby`,s._getAriaLabelledBy())(`aria-describedby`,s.ariaDescribedby)(`aria-required`,s.required||null)(`aria-checked`,s.checked)(`aria-disabled`,s.disabled&&s.disabledInteractive?`true`:null),uv(9),Tp(`matRippleTrigger`,z)(`matRippleDisabled`,s.disableRipple||s.disabled)(`matRippleCentered`,!0),uv(),gI(s.hideIcon?-1:11),uv(),Tp(`for`,s.buttonId),bp(`id`,s._labelId)}},dependencies:[Bs,We],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return t})();var He=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=UE({type:t});static ɵinj=kl({imports:[U,J]})}return t})();var Je=t=>({count:t});var Ue=t=>({name:t});var K=(t,n)=>({booked:t,free:n});var et=()=>[`/physiotherapist/availability`];var tt=t=>({date:t});var at=(t,n)=>({number:t,total:n});var nt=t=>({patient:t});function it(t,n){return this.isoDate(n)}var dt=(t,n)=>n.slotId;function lt(t,n){if(t&1&&(pi(0,`span`,12),cD(1),Mc()),t&2){let e=RI(2);uv(),Gp(e.notifications.unreadCount())}}function ot(t,n){if(t&1){let e=CI();pi(0,`button`,31),Ap(`click`,function(){su(e);let c=RI(2);return au(c.signOut())}),cD(1),CD(2,`translate`),Mc()}t&2&&(uv(),Oc(` `,ND(2,1,`layout.signOut`),` `))}function rt(t,n){t&1&&(Cp(0,`mat-progress-bar`,28),CD(1,`translate`)),t&2&&bp(`aria-label`,ND(1,1,`common.loading`))}function st(t,n){if(t&1){let e=CI();pi(0,`div`,29)(1,`mat-icon`,11),cD(2,`cloud_off`),Mc(),pi(3,`p`),cD(4),CD(5,`translate`),Mc(),pi(6,`button`,32),Ap(`click`,function(){su(e);let c=RI(2);return au(c.load())}),cD(7),CD(8,`translate`),Mc()()}if(t&2){let e=RI(2);uv(4),Gp(e.errorMessage()??ND(5,2,`errors.load`)),uv(3),Gp(ND(8,4,`common.retry`))}}function ct(t,n){if(t&1&&(pi(0,`a`,35)(1,`header`,36)(2,`span`,37),cD(3),CD(4,`date`),Mc(),pi(5,`span`,38),cD(6),CD(7,`date`),Mc(),pi(8,`span`,39),cD(9),CD(10,`translate`),Mc()(),pi(11,`span`,40),cD(12),CD(13,`translate`),Mc(),pi(14,`span`,41),cD(15),CD(16,`translate`),Mc()()),t&2){let e=RI().$implicit,a=RI(3);Hp(`week-day--today`,a.isoDate(e)===a.today),Tp(`routerLink`,ED(26,et))(`queryParams`,ID(27,tt,a.isoDate(e))),uv(3),Gp(SD(4,9,e,`EEE`,void 0,a.language.current())),uv(3),Gp(SD(7,14,e,`d`,void 0,a.language.current())),uv(3),Oc(` `,MD(10,19,`agenda.daySummary`,DD(29,K,a.dayBooked(e),a.dayFree(e))),` `),uv(3),Gp(ND(13,22,`agenda.empty`)),uv(3),Gp(ND(16,24,`agenda.addAvailability`))}}function mt(t,n){if(t&1&&(pi(0,`p`,40),cD(1),CD(2,`translate`),Mc()),t&2){let e=RI(2).$implicit,a=RI(3);uv(),Oc(` `,ND(2,1,a.dayIsEmpty(e)?`agenda.empty`:`agenda.emptyBooked`),` `)}}function gt(t,n){if(t&1&&Cp(0,`app-session-status-chip`,50),t&2){let e=RI(2).$implicit;Tp(`status`,e.sessionStatus)}}function ht(t,n){if(t&1&&(pi(0,`strong`,48),cD(1),Mc(),pi(2,`span`,49),cD(3),CD(4,`translate`),Mc(),pI(5,gt,1,1,`app-session-status-chip`,50),pi(6,`a`,51),CD(7,`translate`),cD(8),CD(9,`translate`),Mc()),t&2){let e=RI().$implicit;uv(),Gp(e.patientName),uv(2),Oc(` `,MD(4,6,`appointments.session`,DD(14,at,e.sessionNumber,e.totalSessions)),` `),uv(2),gI(e.sessionStatus?5:-1),uv(),Tp(`queryParams`,ID(17,nt,e.patientName)),bp(`aria-label`,MD(7,9,`appointments.record.open`,ID(19,Ue,e.patientName))),uv(2),Oc(` `,ND(9,12,`appointments.record.viewHistory`),` `)}}function pt(t,n){t&1&&(pi(0,`span`,47),cD(1),CD(2,`translate`),Mc()),t&2&&(uv(),Gp(ND(2,1,`agenda.freeCancelled`)))}function ut(t,n){t&1&&(pi(0,`span`,47),cD(1),CD(2,`translate`),Mc()),t&2&&(uv(),Gp(ND(2,1,`agenda.free`)))}function _t(t,n){if(t&1&&(pi(0,`li`,45)(1,`time`,46),cD(2),CD(3,`date`),CD(4,`date`),Mc(),pI(5,ht,10,21)(6,pt,3,3,`span`,47)(7,ut,3,3,`span`,47),Mc()),t&2){let e=n.$implicit,a=RI(6);Hp(`week-slot--free`,e.status===`FREE`)(`week-slot--cancelled`,e.status===`FREE_CANCELLED`),uv(),bp(`datetime`,e.startTime),uv(),zp(` `,SD(3,8,e.startTime,`shortTime`,void 0,a.language.current()),` – `,SD(4,13,e.endTime,`shortTime`,void 0,a.language.current()),` `),uv(3),gI(e.status===`BOOKED`?5:e.status===`FREE_CANCELLED`?6:7)}}function bt(t,n){if(t&1&&(pi(0,`ul`,43),vI(1,_t,8,18,`li`,44,dt),Mc()),t&2){let e=RI(2).$implicit,a=RI(3);uv(),EI(a.dayItems(e))}}function ft(t,n){if(t&1&&(pi(0,`section`,42),CD(1,`date`),pi(2,`header`,36)(3,`span`,37),cD(4),CD(5,`date`),Mc(),pi(6,`span`,38),cD(7),CD(8,`date`),Mc(),pi(9,`span`,39),cD(10),CD(11,`translate`),Mc()(),pI(12,mt,3,3,`p`,40)(13,bt,3,0,`ul`,43),Mc()),t&2){let e=RI().$implicit,a=RI(3);Hp(`week-day--today`,a.isoDate(e)===a.today),bp(`aria-label`,SD(1,7,e,`fullDate`,void 0,a.language.current())),uv(4),Gp(SD(5,12,e,`EEE`,void 0,a.language.current())),uv(3),Gp(SD(8,17,e,`d`,void 0,a.language.current())),uv(3),Oc(` `,MD(11,22,`agenda.daySummary`,DD(25,K,a.dayBooked(e),a.dayFree(e))),` `),uv(2),gI(a.dayItems(e).length===0?12:13)}}function vt(t,n){if(t&1&&pI(0,ct,17,32,`a`,33)(1,ft,14,28,`section`,34),t&2){let e=n.$implicit,a=RI(3);gI(a.canAddAvailability(e)?0:1)}}function wt(t,n){if(t&1&&(pi(0,`div`,30),vI(1,vt,2,1,null,null,it,!0),Mc()),t&2){let e=RI(2);uv(),EI(e.week())}}function yt(t,n){if(t&1){let e=CI();pi(0,`section`,0)(1,`header`,1)(2,`a`,2),CD(3,`translate`),Cp(4,`img`,3),pi(5,`span`),cD(6,`FisioVital`),Mc()(),pi(7,`nav`,4),CD(8,`translate`),pi(9,`a`,5),cD(10),CD(11,`translate`),Mc(),pi(12,`a`,6),cD(13),CD(14,`translate`),Mc(),pi(15,`a`,7),cD(16),CD(17,`translate`),Mc(),pi(18,`a`,8),cD(19),CD(20,`translate`),Mc()(),pi(21,`div`,9)(22,`a`,10),CD(23,`translate`),pi(24,`mat-icon`,11),cD(25,`notifications`),Mc(),pI(26,lt,2,1,`span`,12),Mc(),pi(27,`div`,13)(28,`button`,14),CD(29,`translate`),Ap(`click`,function(){su(e);let c=RI();return au(c.profileMenuOpen.update(_=>!_))}),cD(30),Mc(),pI(31,ot,3,3,`button`,15),Mc()()(),pi(32,`div`,16)(33,`header`,17)(34,`p`,18),Cp(35,`span`,11),cD(36),CD(37,`translate`),Mc(),pi(38,`h1`,19),cD(39),CD(40,`translate`),Mc(),pi(41,`p`),cD(42),CD(43,`translate`),Mc()(),pi(44,`section`,20),CD(45,`translate`),pi(46,`header`,21)(47,`div`,22)(48,`button`,23),CD(49,`translate`),Ap(`click`,function(){su(e);let c=RI();return au(c.moveWeek(-1))}),pi(50,`mat-icon`,11),cD(51,`chevron_left`),Mc()(),pi(52,`span`,24),cD(53),CD(54,`date`),CD(55,`date`),Mc(),pi(56,`button`,23),CD(57,`translate`),Ap(`click`,function(){su(e);let c=RI();return au(c.moveWeek(1))}),pi(58,`mat-icon`,11),cD(59,`chevron_right`),Mc()()(),pi(60,`div`,25)(61,`span`),cD(62),CD(63,`translate`),Mc(),pi(64,`mat-slide-toggle`,26),Ap(`change`,function(c){su(e);let _=RI();return au(_.showFree.set(c.checked))}),cD(65),CD(66,`translate`),Mc(),pi(67,`button`,27),Ap(`click`,function(){su(e);let c=RI();return au(c.goToday())}),cD(68),CD(69,`translate`),Mc()()(),pI(70,rt,2,3,`mat-progress-bar`,28)(71,st,9,6,`div`,29)(72,wt,3,0,`div`,30),Mc()()()}if(t&2){let e=n,a=RI();uv(2),bp(`aria-label`,ND(3,25,`layout.goHome`)),uv(5),bp(`aria-label`,ND(8,27,`home.navigation`)),uv(3),Gp(ND(11,29,`home.physio.panelNav`)),uv(3),Oc(` `,ND(14,31,`home.physio.agendaNav`),` `),uv(3),Oc(` `,ND(17,33,`home.physio.availabilityNav`),` `),uv(3),Gp(ND(20,35,`home.physio.historyNav`)),uv(3),bp(`aria-label`,MD(23,37,`home.notificationsCount`,ID(72,Je,a.notifications.unreadCount()))),uv(4),gI(a.notifications.unreadCount()>0?26:-1),uv(2),bp(`aria-label`,MD(29,40,`home.profileMenu`,ID(74,Ue,e.fullName)))(`aria-expanded`,a.profileMenuOpen()),uv(2),Oc(` `,a.initials(e.fullName),` `),uv(),gI(a.profileMenuOpen()?31:-1),uv(5),Oc(``,ND(37,43,`agenda.eyebrow`),` `),uv(3),Gp(ND(40,45,`agenda.title`)),uv(3),Gp(ND(43,47,`agenda.subtitle`)),uv(2),bp(`aria-label`,ND(45,49,`agenda.weekNavigation`)),uv(4),bp(`aria-label`,ND(49,51,`agenda.previousWeek`)),uv(5),zp(` `,SD(54,53,a.week()[0],`d MMM`,void 0,a.language.current()),` – `,SD(55,58,a.week()[6],`d MMM y`,void 0,a.language.current()),` `),uv(3),bp(`aria-label`,ND(57,63,`agenda.nextWeek`)),uv(6),Gp(MD(63,65,`agenda.weekSummary`,DD(76,K,a.booked().length,a.freeCount()))),uv(2),Tp(`checked`,a.showFree()),uv(),Oc(` `,ND(66,68,`agenda.showFree`),` `),uv(3),Oc(` `,ND(69,70,`agenda.today`),` `),uv(2),gI(a.loading()?70:a.loadFailed()?71:72)}}var Ge=class t{api=D(p);destroyRef=D(de);router=D(le);route=D(V);auth=D(u);notifications=D(d);language=D(l);today=a(i());selected=Po(this.initialSelectedDay());showFree=Po(!0);loading=Po(!0);loadFailed=Po(!1);errorMessage=Po(null);profileMenuOpen=Po(!1);weekItems=Po({});request;week=kD(()=>{let n=this.selected(),e=s$1(n,-((n.getDay()+6)%7));return Array.from({length:7},(a,c)=>s$1(e,c))});allItems=kD(()=>this.week().flatMap(n=>this.weekItems()[this.isoDate(n)]??[]));booked=kD(()=>this.allItems().filter(n=>n.status===`BOOKED`));freeCount=kD(()=>this.allItems().length-this.booked().length);constructor(){this.load()}initialSelectedDay(){let n=this.route.snapshot.queryParamMap.get(`date`);return n&&a(u$1(n))===n?u$1(n):i()}isoDate(n){return a(n)}moveWeek(n){this.selected.update(e=>s$1(e,7*n)),this.load()}goToday(){this.selected.set(i()),this.load()}dayItems(n){let e=this.weekItems()[this.isoDate(n)]??[];return this.showFree()?e:e.filter(a=>a.status===`BOOKED`)}dayIsEmpty(n){return(this.weekItems()[this.isoDate(n)]??[]).length===0}canAddAvailability(n){return this.dayIsEmpty(n)&&this.isoDate(n)>=this.today}dayBooked(n){return(this.weekItems()[this.isoDate(n)]??[]).filter(e=>e.status===`BOOKED`).length}dayFree(n){return(this.weekItems()[this.isoDate(n)]??[]).filter(e=>e.status!==`BOOKED`).length}initials(n){return n.trim().split(/\s+/).slice(0,2).map(e=>e[0]?.toLocaleUpperCase()??``).join(``)}signOut(){this.auth.signOut(),this.notifications.clear(),this.router.navigate([`/sign-in`])}load(){this.request?.unsubscribe(),this.loading.set(!0),this.loadFailed.set(!1),this.errorMessage.set(null);let n=this.week().map(e=>this.isoDate(e));this.request=Vh(n.map(e=>this.api.getForDate(e))).pipe(g(this.destroyRef)).subscribe({next:e=>{this.weekItems.set(Object.fromEntries(e.map((a,c)=>[n[c],a.items]))),this.loading.set(!1)},error:e=>{this.weekItems.set({}),this.errorMessage.set(s(e)),this.loadFailed.set(!0),this.loading.set(!1)}})}static ɵfac=function(e){return new(e||t)};static ɵcmp=BE({type:t,selectors:[[`app-agenda`]],decls:1,vars:1,consts:[[`aria-labelledby`,`agenda-title`,1,`agenda-page`],[1,`dashboard-header`],[`routerLink`,`/physiotherapist/home`,1,`dashboard-brand`],[`src`,`/images/fisiovital-logo.png`,`alt`,``],[1,`dashboard-nav`],[`routerLink`,`/physiotherapist/home`,1,`dashboard-nav__link`],[`routerLink`,`/physiotherapist/agenda`,`aria-current`,`page`,1,`dashboard-nav__link`,`dashboard-nav__link--active`],[`routerLink`,`/physiotherapist/availability`,1,`dashboard-nav__link`],[`routerLink`,`/physiotherapist/patients`,1,`dashboard-nav__link`],[1,`dashboard-actions`],[`routerLink`,`/physiotherapist/notifications`,1,`notification-indicator`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`notification-indicator__count`],[1,`profile`],[`type`,`button`,1,`profile__avatar`,3,`click`],[`type`,`button`,1,`profile__sign-out`],[1,`agenda-content`],[1,`page__header`],[1,`agenda-eyebrow`,`physio-eyebrow`],[`id`,`agenda-title`],[1,`week`],[1,`week__controls`],[1,`week__navigation`],[`mat-icon-button`,``,`type`,`button`,3,`click`],[`aria-live`,`polite`,1,`week__range`],[1,`week__summary`],[3,`change`,`checked`],[`mat-stroked-button`,``,`type`,`button`,1,`week__today`,3,`click`],[`mode`,`indeterminate`],[`role`,`alert`,1,`state`],[1,`week-board`],[`type`,`button`,1,`profile__sign-out`,3,`click`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`week-day`,`week-day--empty`,3,`week-day--today`,`routerLink`,`queryParams`],[1,`week-day`,3,`week-day--today`],[1,`week-day`,`week-day--empty`,3,`routerLink`,`queryParams`],[1,`week-day__header`],[1,`week-day__weekday`],[1,`week-day__number`],[1,`week-day__counts`],[1,`week-day__empty`],[1,`week-day__publish`],[1,`week-day`],[1,`week-day__list`],[1,`week-slot`,3,`week-slot--free`,`week-slot--cancelled`],[1,`week-slot`],[1,`week-slot__time`],[1,`week-slot__label`],[1,`week-slot__patient`],[1,`week-slot__session`],[3,`status`],[`routerLink`,`/physiotherapist/patients`,1,`record-link`,3,`queryParams`]],template:function(e,a){if(e&1&&pI(0,yt,73,79,`section`,0),e&2){let c;gI((c=a.auth.currentUser())?0:-1,c)}},dependencies:[Bt,Mt$1,mt$1,Mt,wt$1,j,L,He,U,Nt,y,lr,Ye],styles:[`[_nghost-%COMP%]{display:block;min-height:100%;background:var(--%NS%fv-color-background)}.agenda-page[_ngcontent-%COMP%]{--%NS%mat-sys-primary: var(--%NS%fv-color-primary);--%NS%mat-sys-on-primary: var(--%NS%fv-color-surface);--%NS%mat-sys-primary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-primary-container: var(--%NS%fv-color-text);position:relative;width:min(100%,1140px);min-height:100vh;box-sizing:border-box;margin:0 auto;padding:12px 24px 56px;background:var(--%NS%fv-color-background)}.agenda-page[_ngcontent-%COMP%]:before{position:absolute;z-index:0;top:40px;right:0;width:380px;height:380px;border-radius:50%;background:var(--%NS%fv-color-primary-softer);content:"";pointer-events:none}.dashboard-header[_ngcontent-%COMP%], .agenda-content[_ngcontent-%COMP%]{position:relative;z-index:1}.agenda-content[_ngcontent-%COMP%]{margin:38px auto 0;padding:0}.page__header[_ngcontent-%COMP%]{margin-bottom:22px}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--%NS%fv-color-forest);font-size:clamp(34px,5vw,42px);font-weight:700;line-height:1.2;letter-spacing:-.5px}.page__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.agenda-eyebrow){margin:8px 0 0;color:var(--%NS%fv-color-text-muted)}.state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:40px}.week[_ngcontent-%COMP%]{display:grid;gap:18px}.week__controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}.week__navigation[_ngcontent-%COMP%], .week__summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.week__range[_ngcontent-%COMP%]{min-width:190px;text-align:center;font:var(--%NS%mat-sys-title-medium)}.week__summary[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-medium)}.week-board[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));align-items:stretch;gap:10px;overflow-x:auto;padding:2px 2px 12px}.week-day[_ngcontent-%COMP%]{min-width:0;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:16px;background:var(--%NS%mat-sys-surface)}.week-day--empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:inherit;text-decoration:none;transition:border-color .15s ease,background-color .15s ease}.week-day--%NS%empty[_ngcontent-%COMP%]:hover{border-color:var(--%NS%fv-color-primary);background:var(--%NS%fv-color-primary-soft)}.week-day--%NS%empty[_ngcontent-%COMP%]:focus-visible{outline:3px solid var(--%NS%fv-color-primary);outline-offset:3px}.week-day__header[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;gap:2px;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);border-radius:16px 16px 0 0;padding:10px 6px}.week-day__weekday[_ngcontent-%COMP%]{text-transform:uppercase}.week-day__number[_ngcontent-%COMP%]{color:var(--%NS%fv-color-text);font:var(--%NS%mat-sys-title-large)}.week-day__list[_ngcontent-%COMP%]{display:grid;gap:7px;margin:0;padding:8px;list-style:none}.week-slot[_ngcontent-%COMP%]{display:grid;gap:4px;border-left:3px solid var(--%NS%fv-color-accent);border-radius:8px;padding:8px;background:#f0f6ed;color:var(--%NS%fv-color-text);font-size:12px}.week-slot--free[_ngcontent-%COMP%]{border:1px dashed #9fbd91;background:#fbfdf9}.week-slot--cancelled[_ngcontent-%COMP%]{border-left-color:#c99e4a;background:#fffaf0}.week-slot__time[_ngcontent-%COMP%]{color:var(--%NS%fv-color-primary);font-weight:700}.week-slot__patient[_ngcontent-%COMP%]{overflow-wrap:anywhere}.week-day__empty[_ngcontent-%COMP%]{margin:12px 8px;text-align:center}.week-day__publish[_ngcontent-%COMP%]{margin:auto 8px 12px;color:var(--%NS%fv-color-primary);font-size:12px;font-weight:700;text-align:center}@media(max-width:760px){.agenda-page[_ngcontent-%COMP%]{padding:12px 16px 40px}.week__controls[_ngcontent-%COMP%], .week__summary[_ngcontent-%COMP%]{align-items:flex-start}.week__controls[_ngcontent-%COMP%]{flex-direction:column}.week__summary[_ngcontent-%COMP%]{flex-wrap:wrap}.week-board[_ngcontent-%COMP%]{grid-template-columns:repeat(7,minmax(160px,1fr))}}.record-link[_ngcontent-%COMP%]{justify-self:start;color:var(--%NS%fv-color-primary-dark);font-size:12px;font-weight:600;text-decoration:underline;text-underline-offset:3px}.record-link[_ngcontent-%COMP%]:hover{color:var(--%NS%fv-color-primary)}.record-link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%fv-color-primary-focus);outline-offset:2px;border-radius:4px}`]})};export{Ge as AgendaPage};