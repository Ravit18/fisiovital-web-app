import{$ as MD,Br as xp,C as Fl,Dt as SD,H as JP,I as Hp,It as WI,Kn as mo,Kt as YE,L as II,Lr as wu,Mr as uu,Nt as VI,Pn as hi,Pr as wI,St as RI,Tr as tF,Vn as kp,W as Jp,Wn as lu,Wr as zI,Wt as Xp,Y as LD,Z as Lc,_ as Em,_n as de,a as A,b as FD,ct as OD,dr as qI,et as Mp,fr as qh,g as Dr,gt as Pp,ht as Pe,j as Gp,jn as gD,kt as Sp,l as BI,ln as b,lr as ph,n as $I,nn as _D,nt as ND,p as CI,pt as PD,rn as _I,t as $D,tr as oD,v as Ev,w as Fo,xn as eF,yt as QE,zr as xc}from"./chunk-BpGjZHY7.js";import{b as ze,l as ca,p as me,v as tr}from"./chunk-C17RfB6r.js";import{c as l,d as g,n as wt$1,p as u,r as J,s as x,t as Mt,u as Ye}from"./main-LGDNCCCG.js";import{D as os,O as ot$1,P as wt$2,n as Bs,t as Ae}from"./chunk-BHeBAMJo.js";import{l as S,w as v}from"./chunk-CBAD9uyF.js";import{s as d}from"./chunk-BY0jCGBL.js";import{n as Mt$1,r as mt$1,t as Bt}from"./chunk-Gw7f6ZHY.js";import{n as j,r as s,t as L}from"./chunk-CnSHGhxL.js";import{t as p}from"./chunk-ZJR-l5xG.js";import{t as y}from"./chunk-RPO8e9oa.js";import{o as p$1,r as g$1,s as y$1,t as D}from"./chunk-B29am0KO.js";var We=(()=>{class t{labelPosition=`after`;static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){return QE({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(c,_){c&2&&Gp(`mdc-form-field--align-end`,_.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(c,_){c&1&&(BI(),$I(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return t})();var Ze=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var X=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var U=(()=>{class t{_elementRef=b(Dr);_focusMonitor=b(ot$1);_changeDetectorRef=b(JP);defaults=b(Ze);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new X(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=wt$2();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Pe;toggleChange=new Pe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){b(x).load(os);let e=b(new ph(`tabindex`),{optional:!0}),a=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=a.color||`accent`,this.id=this._uniqueId=b(Ae).getId(`mat-mdc-slide-toggle-`),this.hideIcon=a.hideIcon??!1,this.disabledInteractive=a.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new X(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){let e=[`switch`],a=[`*`];function c(_,N){_&1&&(hi(0,`span`,11),wu(),hi(1,`svg`,13),xp(2,`path`,14),xc(),hi(3,`svg`,15),xp(4,`path`,16),xc()())}return QE({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(N,s){if(N&1&&Hp(e,5),N&2){let z;WI(z=qI())&&(s._switchElement=z.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(N,s){N&2&&(kp(`id`,s.id),Mp(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),oD(s.color?`mat-`+s.color:``),Gp(`mat-mdc-slide-toggle-focused`,s._focused)(`mat-mdc-slide-toggle-checked`,s.checked)(`mat-slide-toggle-full-width`,s.fullWidth)(`_mat-animation-noopable`,s._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,eF],color:`color`,disabled:[2,`disabled`,`disabled`,eF],fullWidth:[2,`fullWidth`,`fullWidth`,eF],disableRipple:[2,`disableRipple`,`disableRipple`,eF],tabIndex:[2,`tabIndex`,`tabIndex`,_=>_==null?0:tF(_)],checked:[2,`checked`,`checked`,eF],hideIcon:[2,`hideIcon`,`hideIcon`,eF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,eF]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[_D([{provide:S,useExisting:mo(()=>t),multi:!0},{provide:v,useExisting:t,multi:!0}]),Em],ngContentSelectors:a,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(N,s){if(N&1&&(BI(),hi(0,`div`,1)(1,`button`,2,0),Pp(`click`,function(){return s._handleClick()}),xp(3,`div`,3)(4,`span`,4),hi(5,`span`,5)(6,`span`,6)(7,`span`,7),xp(8,`span`,8),xc(),hi(9,`span`,9),xp(10,`span`,10),xc(),II(11,c,5,0,`span`,11),xc()()(),hi(12,`label`,12),Pp(`click`,function(Ke){return Ke.stopPropagation()}),$I(13),xc()()),N&2){let z=zI(2);Sp(`labelPosition`,s.labelPosition),Ev(),Gp(`mdc-switch--selected`,s.checked)(`mdc-switch--unselected`,!s.checked)(`mdc-switch--checked`,s.checked)(`mdc-switch--disabled`,s.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,s.disabledInteractive),Sp(`tabIndex`,s.disabled&&!s.disabledInteractive?-1:s.tabIndex)(`disabled`,s.disabled&&!s.disabledInteractive),Mp(`id`,s.buttonId)(`name`,s.name)(`aria-label`,s.ariaLabel)(`aria-labelledby`,s._getAriaLabelledBy())(`aria-describedby`,s.ariaDescribedby)(`aria-required`,s.required||null)(`aria-checked`,s.checked)(`aria-disabled`,s.disabled&&s.disabledInteractive?`true`:null),Ev(9),Sp(`matRippleTrigger`,z)(`matRippleDisabled`,s.disableRipple||s.disabled)(`matRippleCentered`,!0),Ev(),wI(s.hideIcon?-1:11),Ev(),Sp(`for`,s.buttonId),Mp(`id`,s._labelId)}},dependencies:[Bs,We],styles:[`.mdc-switch {
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
`],encapsulation:2})})()}return t})();var He=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=YE({type:t});static ɵinj=Fl({imports:[U,J]})}return t})();var Je=t=>({count:t});var Ue=t=>({name:t});var K=(t,n)=>({booked:t,free:n});var et=()=>[`/physiotherapist/availability`];var tt=t=>({date:t});var at=(t,n)=>({number:t,total:n});var nt=t=>({patient:t});function it(t,n){return this.isoDate(n)}var dt=(t,n)=>n.slotId;function lt(t,n){if(t&1&&(hi(0,`span`,12),gD(1),xc()),t&2){let e=VI(2);Ev(),Jp(e.notifications.unreadCount())}}function ot(t,n){if(t&1){let e=RI();hi(0,`button`,31),Pp(`click`,function(){lu(e);let c=VI(2);return uu(c.signOut())}),gD(1),OD(2,`translate`),xc()}t&2&&(Ev(),Lc(` `,LD(2,1,`layout.signOut`),` `))}function rt(t,n){t&1&&(xp(0,`mat-progress-bar`,28),OD(1,`translate`)),t&2&&Mp(`aria-label`,LD(1,1,`common.loading`))}function st(t,n){if(t&1){let e=RI();hi(0,`div`,29)(1,`mat-icon`,11),gD(2,`cloud_off`),xc(),hi(3,`p`),gD(4),OD(5,`translate`),xc(),hi(6,`button`,32),Pp(`click`,function(){lu(e);let c=VI(2);return uu(c.load())}),gD(7),OD(8,`translate`),xc()()}if(t&2){let e=VI(2);Ev(4),Jp(e.errorMessage()??LD(5,2,`errors.load`)),Ev(3),Jp(LD(8,4,`common.retry`))}}function ct(t,n){if(t&1&&(hi(0,`a`,35)(1,`header`,36)(2,`span`,37),gD(3),OD(4,`date`),xc(),hi(5,`span`,38),gD(6),OD(7,`date`),xc(),hi(8,`span`,39),gD(9),OD(10,`translate`),xc()(),hi(11,`span`,40),gD(12),OD(13,`translate`),xc(),hi(14,`span`,41),gD(15),OD(16,`translate`),xc()()),t&2){let e=VI().$implicit,a=VI(3);Gp(`week-day--today`,a.isoDate(e)===a.today),Sp(`routerLink`,ND(26,et))(`queryParams`,MD(27,tt,a.isoDate(e))),Ev(3),Jp(FD(4,9,e,`EEE`,void 0,a.language.current())),Ev(3),Jp(FD(7,14,e,`d`,void 0,a.language.current())),Ev(3),Lc(` `,PD(10,19,`agenda.daySummary`,SD(29,K,a.dayBooked(e),a.dayFree(e))),` `),Ev(3),Jp(LD(13,22,`agenda.empty`)),Ev(3),Jp(LD(16,24,`agenda.addAvailability`))}}function mt(t,n){if(t&1&&(hi(0,`p`,40),gD(1),OD(2,`translate`),xc()),t&2){let e=VI(2).$implicit,a=VI(3);Ev(),Lc(` `,LD(2,1,a.dayIsEmpty(e)?`agenda.empty`:`agenda.emptyBooked`),` `)}}function gt(t,n){if(t&1&&xp(0,`app-session-status-chip`,50),t&2){let e=VI(2).$implicit;Sp(`status`,e.sessionStatus)}}function ht(t,n){if(t&1&&(hi(0,`strong`,48),gD(1),xc(),hi(2,`span`,49),gD(3),OD(4,`translate`),xc(),II(5,gt,1,1,`app-session-status-chip`,50),hi(6,`a`,51),OD(7,`translate`),gD(8),OD(9,`translate`),xc()),t&2){let e=VI().$implicit;Ev(),Jp(e.patientName),Ev(2),Lc(` `,PD(4,6,`appointments.session`,SD(14,at,e.sessionNumber,e.totalSessions)),` `),Ev(2),wI(e.sessionStatus?5:-1),Ev(),Sp(`queryParams`,MD(17,nt,e.patientName)),Mp(`aria-label`,PD(7,9,`appointments.record.open`,MD(19,Ue,e.patientName))),Ev(2),Lc(` `,LD(9,12,`appointments.record.viewHistory`),` `)}}function pt(t,n){t&1&&(hi(0,`span`,47),gD(1),OD(2,`translate`),xc()),t&2&&(Ev(),Jp(LD(2,1,`agenda.freeCancelled`)))}function ut(t,n){t&1&&(hi(0,`span`,47),gD(1),OD(2,`translate`),xc()),t&2&&(Ev(),Jp(LD(2,1,`agenda.free`)))}function _t(t,n){if(t&1&&(hi(0,`li`,45)(1,`time`,46),gD(2),OD(3,`date`),OD(4,`date`),xc(),II(5,ht,10,21)(6,pt,3,3,`span`,47)(7,ut,3,3,`span`,47),xc()),t&2){let e=n.$implicit,a=VI(6);Gp(`week-slot--free`,e.status===`FREE`)(`week-slot--cancelled`,e.status===`FREE_CANCELLED`),Ev(),Mp(`datetime`,e.startTime),Ev(),Xp(` `,FD(3,8,e.startTime,`shortTime`,void 0,a.language.current()),` – `,FD(4,13,e.endTime,`shortTime`,void 0,a.language.current()),` `),Ev(3),wI(e.status===`BOOKED`?5:e.status===`FREE_CANCELLED`?6:7)}}function bt(t,n){if(t&1&&(hi(0,`ul`,43),CI(1,_t,8,18,`li`,44,dt),xc()),t&2){let e=VI(2).$implicit,a=VI(3);Ev(),_I(a.dayItems(e))}}function ft(t,n){if(t&1&&(hi(0,`section`,42),OD(1,`date`),hi(2,`header`,36)(3,`span`,37),gD(4),OD(5,`date`),xc(),hi(6,`span`,38),gD(7),OD(8,`date`),xc(),hi(9,`span`,39),gD(10),OD(11,`translate`),xc()(),II(12,mt,3,3,`p`,40)(13,bt,3,0,`ul`,43),xc()),t&2){let e=VI().$implicit,a=VI(3);Gp(`week-day--today`,a.isoDate(e)===a.today),Mp(`aria-label`,FD(1,7,e,`fullDate`,void 0,a.language.current())),Ev(4),Jp(FD(5,12,e,`EEE`,void 0,a.language.current())),Ev(3),Jp(FD(8,17,e,`d`,void 0,a.language.current())),Ev(3),Lc(` `,PD(11,22,`agenda.daySummary`,SD(25,K,a.dayBooked(e),a.dayFree(e))),` `),Ev(2),wI(a.dayItems(e).length===0?12:13)}}function vt(t,n){if(t&1&&II(0,ct,17,32,`a`,33)(1,ft,14,28,`section`,34),t&2){let e=n.$implicit,a=VI(3);wI(a.canAddAvailability(e)?0:1)}}function wt(t,n){if(t&1&&(hi(0,`div`,30),CI(1,vt,2,1,null,null,it,!0),xc()),t&2){let e=VI(2);Ev(),_I(e.week())}}function yt(t,n){if(t&1){let e=RI();hi(0,`section`,0)(1,`header`,1)(2,`a`,2),OD(3,`translate`),xp(4,`img`,3),hi(5,`span`),gD(6,`FisioVital`),xc()(),hi(7,`nav`,4),OD(8,`translate`),hi(9,`a`,5),gD(10),OD(11,`translate`),xc(),hi(12,`a`,6),gD(13),OD(14,`translate`),xc(),hi(15,`a`,7),gD(16),OD(17,`translate`),xc(),hi(18,`a`,8),gD(19),OD(20,`translate`),xc()(),hi(21,`div`,9)(22,`a`,10),OD(23,`translate`),hi(24,`mat-icon`,11),gD(25,`notifications`),xc(),II(26,lt,2,1,`span`,12),xc(),hi(27,`div`,13)(28,`button`,14),OD(29,`translate`),Pp(`click`,function(){lu(e);let c=VI();return uu(c.profileMenuOpen.update(_=>!_))}),gD(30),xc(),II(31,ot,3,3,`button`,15),xc()()(),hi(32,`div`,16)(33,`header`,17)(34,`p`,18),xp(35,`span`,11),gD(36),OD(37,`translate`),xc(),hi(38,`h1`,19),gD(39),OD(40,`translate`),xc(),hi(41,`p`),gD(42),OD(43,`translate`),xc()(),hi(44,`section`,20),OD(45,`translate`),hi(46,`header`,21)(47,`div`,22)(48,`button`,23),OD(49,`translate`),Pp(`click`,function(){lu(e);let c=VI();return uu(c.moveWeek(-1))}),hi(50,`mat-icon`,11),gD(51,`chevron_left`),xc()(),hi(52,`span`,24),gD(53),OD(54,`date`),OD(55,`date`),xc(),hi(56,`button`,23),OD(57,`translate`),Pp(`click`,function(){lu(e);let c=VI();return uu(c.moveWeek(1))}),hi(58,`mat-icon`,11),gD(59,`chevron_right`),xc()()(),hi(60,`div`,25)(61,`span`),gD(62),OD(63,`translate`),xc(),hi(64,`mat-slide-toggle`,26),Pp(`change`,function(c){lu(e);let _=VI();return uu(_.showFree.set(c.checked))}),gD(65),OD(66,`translate`),xc(),hi(67,`button`,27),Pp(`click`,function(){lu(e);let c=VI();return uu(c.goToday())}),gD(68),OD(69,`translate`),xc()()(),II(70,rt,2,3,`mat-progress-bar`,28)(71,st,9,6,`div`,29)(72,wt,3,0,`div`,30),xc()()()}if(t&2){let e=n,a=VI();Ev(2),Mp(`aria-label`,LD(3,25,`layout.goHome`)),Ev(5),Mp(`aria-label`,LD(8,27,`home.navigation`)),Ev(3),Jp(LD(11,29,`home.physio.panelNav`)),Ev(3),Lc(` `,LD(14,31,`home.physio.agendaNav`),` `),Ev(3),Lc(` `,LD(17,33,`home.physio.availabilityNav`),` `),Ev(3),Jp(LD(20,35,`home.physio.historyNav`)),Ev(3),Mp(`aria-label`,PD(23,37,`home.notificationsCount`,MD(72,Je,a.notifications.unreadCount()))),Ev(4),wI(a.notifications.unreadCount()>0?26:-1),Ev(2),Mp(`aria-label`,PD(29,40,`home.profileMenu`,MD(74,Ue,e.fullName)))(`aria-expanded`,a.profileMenuOpen()),Ev(2),Lc(` `,a.initials(e.fullName),` `),Ev(),wI(a.profileMenuOpen()?31:-1),Ev(5),Lc(``,LD(37,43,`agenda.eyebrow`),` `),Ev(3),Jp(LD(40,45,`agenda.title`)),Ev(3),Jp(LD(43,47,`agenda.subtitle`)),Ev(2),Mp(`aria-label`,LD(45,49,`agenda.weekNavigation`)),Ev(4),Mp(`aria-label`,LD(49,51,`agenda.previousWeek`)),Ev(5),Xp(` `,FD(54,53,a.week()[0],`d MMM`,void 0,a.language.current()),` – `,FD(55,58,a.week()[6],`d MMM y`,void 0,a.language.current()),` `),Ev(3),Mp(`aria-label`,LD(57,63,`agenda.nextWeek`)),Ev(6),Jp(PD(63,65,`agenda.weekSummary`,SD(76,K,a.booked().length,a.freeCount()))),Ev(2),Sp(`checked`,a.showFree()),Ev(),Lc(` `,LD(66,68,`agenda.showFree`),` `),Ev(3),Lc(` `,LD(69,70,`agenda.today`),` `),Ev(2),wI(a.loading()?70:a.loadFailed()?71:72)}}var Ge=class t{api=b(p);destroyRef=b(de);router=b(ze);route=b(me);auth=b(u);notifications=b(d);language=b(l);today=D(g$1());selected=Fo(this.initialSelectedDay());showFree=Fo(!0);loading=Fo(!0);loadFailed=Fo(!1);errorMessage=Fo(null);profileMenuOpen=Fo(!1);weekItems=Fo({});request;week=$D(()=>{let n=this.selected(),e=p$1(n,-((n.getDay()+6)%7));return Array.from({length:7},(a,c)=>p$1(e,c))});allItems=$D(()=>this.week().flatMap(n=>this.weekItems()[this.isoDate(n)]??[]));booked=$D(()=>this.allItems().filter(n=>n.status===`BOOKED`));freeCount=$D(()=>this.allItems().length-this.booked().length);constructor(){this.load()}initialSelectedDay(){let n=this.route.snapshot.queryParamMap.get(`date`);return n&&D(y$1(n))===n?y$1(n):g$1()}isoDate(n){return D(n)}moveWeek(n){this.selected.update(e=>p$1(e,7*n)),this.load()}goToday(){this.selected.set(g$1()),this.load()}dayItems(n){let e=this.weekItems()[this.isoDate(n)]??[];return this.showFree()?e:e.filter(a=>a.status===`BOOKED`)}dayIsEmpty(n){return(this.weekItems()[this.isoDate(n)]??[]).length===0}canAddAvailability(n){return this.dayIsEmpty(n)&&this.isoDate(n)>=this.today}dayBooked(n){return(this.weekItems()[this.isoDate(n)]??[]).filter(e=>e.status===`BOOKED`).length}dayFree(n){return(this.weekItems()[this.isoDate(n)]??[]).filter(e=>e.status!==`BOOKED`).length}initials(n){return n.trim().split(/\s+/).slice(0,2).map(e=>e[0]?.toLocaleUpperCase()??``).join(``)}signOut(){this.auth.signOut(),this.notifications.clear(),this.router.navigate([`/sign-in`])}load(){this.request?.unsubscribe(),this.loading.set(!0),this.loadFailed.set(!1),this.errorMessage.set(null);let n=this.week().map(e=>this.isoDate(e));this.request=qh(n.map(e=>this.api.getForDate(e))).pipe(g(this.destroyRef)).subscribe({next:e=>{this.weekItems.set(Object.fromEntries(e.map((a,c)=>[n[c],a.items]))),this.loading.set(!1)},error:e=>{this.weekItems.set({}),this.errorMessage.set(s(e)),this.loadFailed.set(!0),this.loading.set(!1)}})}static ɵfac=function(e){return new(e||t)};static ɵcmp=QE({type:t,selectors:[[`app-agenda`]],decls:1,vars:1,consts:[[`aria-labelledby`,`agenda-title`,1,`agenda-page`],[1,`dashboard-header`],[`routerLink`,`/physiotherapist/home`,1,`dashboard-brand`],[`src`,`/images/fisiovital-logo.png`,`alt`,``],[1,`dashboard-nav`],[`routerLink`,`/physiotherapist/home`,1,`dashboard-nav__link`],[`routerLink`,`/physiotherapist/agenda`,`aria-current`,`page`,1,`dashboard-nav__link`,`dashboard-nav__link--active`],[`routerLink`,`/physiotherapist/availability`,1,`dashboard-nav__link`],[`routerLink`,`/physiotherapist/patients`,1,`dashboard-nav__link`],[1,`dashboard-actions`],[`routerLink`,`/physiotherapist/notifications`,1,`notification-indicator`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`notification-indicator__count`],[1,`profile`],[`type`,`button`,1,`profile__avatar`,3,`click`],[`type`,`button`,1,`profile__sign-out`],[1,`agenda-content`],[1,`page__header`],[1,`agenda-eyebrow`,`physio-eyebrow`],[`id`,`agenda-title`],[1,`week`],[1,`week__controls`],[1,`week__navigation`],[`mat-icon-button`,``,`type`,`button`,3,`click`],[`aria-live`,`polite`,1,`week__range`],[1,`week__summary`],[3,`change`,`checked`],[`mat-stroked-button`,``,`type`,`button`,1,`week__today`,3,`click`],[`mode`,`indeterminate`],[`role`,`alert`,1,`state`],[1,`week-board`],[`type`,`button`,1,`profile__sign-out`,3,`click`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`week-day`,`week-day--empty`,3,`week-day--today`,`routerLink`,`queryParams`],[1,`week-day`,3,`week-day--today`],[1,`week-day`,`week-day--empty`,3,`routerLink`,`queryParams`],[1,`week-day__header`],[1,`week-day__weekday`],[1,`week-day__number`],[1,`week-day__counts`],[1,`week-day__empty`],[1,`week-day__publish`],[1,`week-day`],[1,`week-day__list`],[1,`week-slot`,3,`week-slot--free`,`week-slot--cancelled`],[1,`week-slot`],[1,`week-slot__time`],[1,`week-slot__label`],[1,`week-slot__patient`],[1,`week-slot__session`],[3,`status`],[`routerLink`,`/physiotherapist/patients`,1,`record-link`,3,`queryParams`]],template:function(e,a){if(e&1&&II(0,yt,73,79,`section`,0),e&2){let c;wI((c=a.auth.currentUser())?0:-1,c)}},dependencies:[Bt,Mt$1,mt$1,Mt,wt$1,j,L,He,U,tr,y,ca,Ye],styles:[`[_nghost-%COMP%]{display:block;min-height:100%;background:var(--%NS%fv-color-background)}.agenda-page[_ngcontent-%COMP%]{--%NS%mat-sys-primary: var(--%NS%fv-color-primary);--%NS%mat-sys-on-primary: var(--%NS%fv-color-surface);--%NS%mat-sys-primary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-primary-container: var(--%NS%fv-color-text);position:relative;width:min(100%,1140px);min-height:100vh;box-sizing:border-box;margin:0 auto;padding:12px 24px 56px;background:var(--%NS%fv-color-background)}.agenda-page[_ngcontent-%COMP%]:before{position:absolute;z-index:0;top:40px;right:0;width:380px;height:380px;border-radius:50%;background:var(--%NS%fv-color-primary-softer);content:"";pointer-events:none}.dashboard-header[_ngcontent-%COMP%], .agenda-content[_ngcontent-%COMP%]{position:relative;z-index:1}.agenda-content[_ngcontent-%COMP%]{margin:38px auto 0;padding:0}.page__header[_ngcontent-%COMP%]{margin-bottom:22px}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--%NS%fv-color-forest);font-size:clamp(34px,5vw,42px);font-weight:700;line-height:1.2;letter-spacing:-.5px}.page__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.agenda-eyebrow){margin:8px 0 0;color:var(--%NS%fv-color-text-muted)}.state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:40px}.week[_ngcontent-%COMP%]{display:grid;gap:18px}.week__controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}.week__navigation[_ngcontent-%COMP%], .week__summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.week__range[_ngcontent-%COMP%]{min-width:190px;text-align:center;font:var(--%NS%mat-sys-title-medium)}.week__summary[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-medium)}.week-board[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));align-items:stretch;gap:10px;overflow-x:auto;padding:2px 2px 12px}.week-day[_ngcontent-%COMP%]{min-width:0;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:16px;background:var(--%NS%mat-sys-surface)}.week-day--empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:inherit;text-decoration:none;transition:border-color .15s ease,background-color .15s ease}.week-day--%NS%empty[_ngcontent-%COMP%]:hover{border-color:var(--%NS%fv-color-primary);background:var(--%NS%fv-color-primary-soft)}.week-day--%NS%empty[_ngcontent-%COMP%]:focus-visible{outline:3px solid var(--%NS%fv-color-primary);outline-offset:3px}.week-day__header[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;gap:2px;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);border-radius:16px 16px 0 0;padding:10px 6px}.week-day__weekday[_ngcontent-%COMP%]{text-transform:uppercase}.week-day__number[_ngcontent-%COMP%]{color:var(--%NS%fv-color-text);font:var(--%NS%mat-sys-title-large)}.week-day__list[_ngcontent-%COMP%]{display:grid;gap:7px;margin:0;padding:8px;list-style:none}.week-slot[_ngcontent-%COMP%]{display:grid;gap:4px;border-left:3px solid var(--%NS%fv-color-accent);border-radius:8px;padding:8px;background:#f0f6ed;color:var(--%NS%fv-color-text);font-size:12px}.week-slot--free[_ngcontent-%COMP%]{border:1px dashed #9fbd91;background:#fbfdf9}.week-slot--cancelled[_ngcontent-%COMP%]{border-left-color:#c99e4a;background:#fffaf0}.week-slot__time[_ngcontent-%COMP%]{color:var(--%NS%fv-color-primary);font-weight:700}.week-slot__patient[_ngcontent-%COMP%]{overflow-wrap:anywhere}.week-day__empty[_ngcontent-%COMP%]{margin:12px 8px;text-align:center}.week-day__publish[_ngcontent-%COMP%]{margin:auto 8px 12px;color:var(--%NS%fv-color-primary);font-size:12px;font-weight:700;text-align:center}@media(max-width:760px){.agenda-page[_ngcontent-%COMP%]{padding:12px 16px 40px}.week__controls[_ngcontent-%COMP%], .week__summary[_ngcontent-%COMP%]{align-items:flex-start}.week__controls[_ngcontent-%COMP%]{flex-direction:column}.week__summary[_ngcontent-%COMP%]{flex-wrap:wrap}.week-board[_ngcontent-%COMP%]{grid-template-columns:repeat(7,minmax(160px,1fr))}}.record-link[_ngcontent-%COMP%]{justify-self:start;color:var(--%NS%fv-color-primary-dark);font-size:12px;font-weight:600;text-decoration:underline;text-underline-offset:3px}.record-link[_ngcontent-%COMP%]:hover{color:var(--%NS%fv-color-primary)}.record-link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%fv-color-primary-focus);outline-offset:2px;border-radius:4px}`]})};export{Ge as AgendaPage};