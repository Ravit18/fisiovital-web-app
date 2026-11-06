import{An as fe,D as FI,Fr as yp,H as Hp,K as Ir,N as GE,Nt as RI,Pn as gp,Pt as RP,T as Er,Vn as jI,Y as K,a as A,ar as pi,b as D,bn as bp,g as CI,ir as pI,jn as gI,l as Ap,mr as su,mt as Ne,nr,or as pr,qn as kp,rr as og,s as Ah,sr as q,st as Mc,tn as Wy,u as BE,vt as Oc,xn as cD,y as Cp,yn as au,yr as uv,zn as ie}from"./chunk-BYCzGZpm.js";import{l as H}from"./main-FP2UPBT4.js";import{N as wt,O as p$1,a as Is,d as Xt,h as be,t as Ae}from"./chunk-DJmgAEYy.js";import{d as bt$1,h as le,i as Mt,m as j,p as et,r as I,v as vi}from"./chunk-BTSdXcBf.js";import{n as Mt$1}from"./chunk-C7OwS9vm.js";import{t as s}from"./chunk-Cide2edk.js";var _t=Math.pow(2,31)-1;var f=class{_overlayRef;instance;containerInstance;_afterDismissed=new K;_afterOpened=new K;_onAction=new K;_durationTimeoutId;_dismissedByAction=!1;constructor(c,t){this._overlayRef=t,this.containerInstance=c,c._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(c){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(c,_t))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var pt=new A(`MatSnackBarData`);var p=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var vt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=GE({type:i,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return i})();var gt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=GE({type:i,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return i})();var yt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=GE({type:i,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return i})();var xt=(()=>{class i{snackBarRef=D(f);data=D(pt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){function t(n,e){if(n&1){let a=CI();pi(0,`div`,1)(1,`button`,2),Ap(`click`,function(){su(a);let s=RI();return au(s.action())}),cD(2),Mc()()}if(n&2){let a=RI();uv(2),Oc(` `,a.data.action,` `)}}return BE({type:i,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(e,a){e&1&&(pi(0,`div`,0),cD(1),Mc(),pI(2,t,3,1,`div`,1)),e&2&&(uv(),Oc(` `,a.data.message,`
`),uv(),gI(a.hasAction?2:-1))},dependencies:[Mt$1,vt,gt,yt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return i})();var R=`_mat-snack-bar-enter`;var T=`_mat-snack-bar-exit`;var St=(()=>{class i extends et{_ngZone=D(Ne);_elementRef=D(Ir);_changeDetectorRef=D(RP);_platform=D(p$1);_animationsDisabled=wt();snackBarConfig=D(p);_document=D(nr);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=D(ie);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new K;_onExit=new K;_onEnter=new K;_animationState=`void`;_live;_label;_role;_liveElementId=D(Ae).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===T?this._completeExit():t===R&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Wy(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(R)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(R)},200)))}exit(){return this._destroyed?Ah(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Wy(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(T)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(T),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(r=>t.classList.add(r)):t.classList.add(n)),this._exposeToModals();let e=this._label.nativeElement,a=`mdc-snackbar__label`;e.classList.toggle(a,!e.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let e=0;e<n.length;e++){let a=n[e],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(t)===-1&&a.setAttribute(`aria-owns`,r+` `+t):a.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let e=n.replace(this._liveElementId,``).trim();e.length>0?t.setAttribute(`aria-owns`,e):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),e=t.querySelector(`[aria-live]`);if(n&&e){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(a=document.activeElement),n.removeAttribute(`aria-hidden`),e.appendChild(n),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let t=[`label`];function n(e,a){}return BE({type:i,selectors:[[`mat-snack-bar-container`]],viewQuery:function(a,r){if(a&1&&kp(vi,7)(t,7),a&2){let s;FI(s=jI())&&(r._portalOutlet=s.first),FI(s=jI())&&(r._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(a,r){a&1&&Ap(`animationend`,function(l){return r.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return r.onAnimationEnd(l.animationName)}),a&2&&Hp(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[gp],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(a,r){a&1&&(pi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),yp(4,n,0,0,`ng-template`,4),Mc(),Cp(5,`div`),Mc()()),a&2&&(uv(5),bp(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[vi],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var At=new A(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new p});var ut=(()=>{class i{_live=D(Xt);_injector=D(ie);_breakpointObserver=D(be);_parentSnackBar=D(i,{optional:!0,skipSelf:!0});_defaultConfig=D(At);_animationsDisabled=wt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=xt;snackBarContainerComponent=St;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,e){let a=q(q({},this._defaultConfig),e);return a.data={message:t,action:n},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let e=n&&n.viewContainerRef&&n.viewContainerRef.injector,a=ie.create({parent:e||this._injector,providers:[{provide:p,useValue:n}]}),r=new bt$1(this.snackBarContainerComponent,n.viewContainerRef,a),s=t.attach(r);return s.instance.snackBarConfig=n,s.instance}_attach(t,n){let e=q(q(q({},new p),this._defaultConfig),n),a=this._createOverlay(e),r=this._attachSnackBarContainer(a,e),s=new f(r,a);if(t instanceof pr){let l=new I(t,null,{$implicit:e.data,snackBarRef:s});s.instance=r.attachTemplatePortal(l)}else{let l=this._createInjector(e,s),ht=new bt$1(t,void 0,l);s.instance=r.attachComponentPortal(ht).instance}return this._breakpointObserver.observe(Is.HandsetPortrait).pipe(og(a.detachments())).subscribe(l=>{a.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),e.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(e.announcementMessage,e.politeness)}),this._animateSnackBar(s,e),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new j;n.direction=t.direction;let e=le(this._injector),a=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!a||t.horizontalPosition===`end`&&a,s=!r&&t.horizontalPosition!==`center`;return r?e.left(`0`):s?e.right(`0`):e.centerHorizontally(),t.verticalPosition===`top`?e.top(`0`):e.bottom(`0`),n.positionStrategy=e,n.disableAnimations=this._animationsDisabled,Mt(this._injector,n)}_createInjector(t,n){let e=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ie.create({parent:e||this._injector,providers:[{provide:f,useValue:n},{provide:pt,useValue:t.data}]})}static ɵfac=function(n){return new(n||i)};static ɵprov=Er({token:i,factory:i.ɵfac})}return i})();var bt=class i{snackBar=D(ut);translate=D(H);success(c,t){this.show(this.translate.instant(c,t))}error(c){this.show(s(c)??this.translate.instant(`errors.network`),6e3,`error`)}show(c,t=4e3,n=`success`){this.snackBar.open(c,this.translate.instant(`common.close`),{duration:t,panelClass:[`fisiovital-snackbar`,`fisiovital-snackbar--${n}`]})}static ɵfac=function(t){return new(t||i)};static ɵprov=fe({token:i,factory:i.ɵfac,providedIn:`root`})};export{bt as t};