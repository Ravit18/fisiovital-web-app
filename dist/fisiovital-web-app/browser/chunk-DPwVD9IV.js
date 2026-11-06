import{t}from"./chunk-_f8Hb3f-.js";import{$ as Kp,Ar as wI,Bn as ie,C as Fo,Ct as QE,D as GE,Dn as eF,Dr as ul,G as Jh,Gn as ka$1,Hn as jp,Ht as VI,In as hi,It as UI,J as K,Jn as lu,Kn as lg,Kt as Wp,L as Hp,M as HD,Mn as fe,Mt as TD,N as HI,Nr as xI,Nt as TI,Or as uu,Pr as xc,Qn as nD,Rn as hr,Rt as Ui,S as Fl,Sr as ti,Tr as ug,Un as kD,Vr as z,Vt as Up,W as JP,Wt as WI,Y as KE,Zn as mv,_n as bI,a as AD,b as FI,bn as cg,bt as Pm,cn as _,ct as ND,d as CD,dr as qI,dt as Np,et as LD,fn as _i,gn as b,h as Dr,i as A,in as ZP,j as Gt,jr as wp,jt as Sp,kn as eg,kr as vI,kt as Rp,ln as _D,lr as pD,lt as Ne,m as Dp,mn as _p,n as $I,nn as Yp,nt as Lh,ot as Mp,pt as OD,q as Jp,rn as Yy,rt as Lp,tt as Lc,v as Ep,vr as tF,vt as PD,w as Fp,yt as Pe,z as II,zn as ht,zr as ym}from"./chunk-C4MWuRVd.js";import{c as kn,l as lr,s as ar}from"./chunk-BJi3LJJd.js";import{a as T,c as l,d as g,g as le,m as V,n as wt,p as Nt,r as J,s as x,t as Mt,u as Ye,y as u}from"./main-KWUFZZXB.js";import{C as kt,E as os,I as yt,N as wt$1,O as p,i as Ee,n as Bs,t as Ae,u as Wi}from"./chunk-BmdfQN1U.js";import{t as d}from"./chunk-D0_uzj6f.js";import{n as Mt$1,t as Bt}from"./chunk-BhtkP-Ar.js";import"./chunk-BpGY85ac.js";import{i as l$1}from"./chunk-B29am0KO.js";import{t as z$1}from"./chunk-U2ssz01R.js";import{n as j,t as L}from"./chunk-CYu1-yS6.js";import{t as s}from"./chunk-Cide2edk.js";import{c as _i$1,f as ci,o as Y,r as I,v as vi}from"./chunk-KZ-NG1LQ.js";import{a as je,c as ze,i as Ve,n as Be,o as tt,r as Re,s as w,t as $t}from"./chunk-BpJ9EPZp.js";import{t as P}from"./chunk-4hgHnpAX.js";import{t as bt$1}from"./chunk-ClwZxKq2.js";import{t as te}from"./chunk-C8sf3yL-.js";import{t as a}from"./chunk-D4f1RrJK.js";import{t as y}from"./chunk-p51HwC8J.js";var va=new A(`MAT_CARD_CONFIG`);var ea=(()=>{class a{appearance;constructor(){let t=b(va,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){return GE({type:a,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(n,c){n&2&&Wp(`mat-mdc-card-outlined`,c.appearance===`outlined`)(`mdc-card--outlined`,c.appearance===`outlined`)(`mat-mdc-card-filled`,c.appearance===`filled`)(`mdc-card--filled`,c.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,c){n&1&&(VI(),HI(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return a})();var aa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=KE({type:a,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return a})();var na=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=QE({type:a});static ɵinj=Fl({imports:[J]})}return a})();var ka=new A(`MatTabContent`);var wa=(()=>{class a{template=b(hr);static ɵfac=function(e){return new(e||a)};static ɵdir=KE({type:a,selectors:[[``,`matTabContent`,``]],features:[TD([{provide:ka,useExisting:a}])]})}return a})();var Ta=new A(`MatTabLabel`);var da=new A(`MAT_TAB`);var Ma=(()=>{class a extends _i$1{_closestTab=b(da,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=Pm(a)))(n||a)}})();static ɵdir=KE({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[TD([{provide:Ta,useExisting:a}]),Ep]})}return a})();var sa=new A(`MAT_TAB_GROUP`);var Yt=(()=>{class a{_viewContainerRef=b(_i);_closestTabGroup=b(sa,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new K;position=null;origin=null;isActive=!1;constructor(){b(x).load(os)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new I(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,c){n&1&&HI(0)}return GE({type:a,selectors:[[`mat-tab`]],contentQueries:function(c,v,C){if(c&1&&Fp(C,Ma,5)(C,wa,7,hr),c&2){let N;$I(N=UI())&&(v.templateLabel=N.first),$I(N=UI())&&(v._explicitContent=N.first)}},viewQuery:function(c,v){if(c&1&&jp(hr,7),c&2){let C;$I(C=UI())&&(v._implicitContent=C.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(c,v){c&2&&Np(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,eF],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[TD([{provide:da,useExisting:a}]),ym],ngContentSelectors:t,decls:1,vars:0,template:function(c,v){c&1&&(VI(),wp(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var qt=`mdc-tab-indicator--active`;var ia=`mdc-tab-indicator--no-transition`;var Kt=class{_items;_currentItem;constructor(d){this._items=d}hide(){this._items.forEach(d=>d.deactivateInkBar()),this._currentItem=void 0}alignToElement(d){let t=this._items.find(n=>n.elementRef.nativeElement===d),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Sa=(()=>{class a{_elementRef=b(Dr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(qt);return}let n=e.getBoundingClientRect(),c=t.width/n.width,v=t.left-n.left;e.classList.add(ia),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${v}px) scaleX(${c})`),e.getBoundingClientRect(),e.classList.remove(ia),e.classList.add(qt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(qt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=KE({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,eF]}})}return a})();var la=(()=>{class a extends Sa{elementRef=b(Dr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=Pm(a)))(n||a)}})();static ɵdir=KE({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(Np(`aria-disabled`,!!n.disabled),Wp(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,eF]},features:[Ep]})}return a})();var ra={passive:!0};var Ia=650;var Da=100;function Zt(a){let d=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(d)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(d)?d:``}var Na=(()=>{class a{_elementRef=b(Dr);_changeDetectorRef=b(JP);_viewportRuler=b(Y);_dir=b(T,{optional:!0});_ngZone=b(Ne);_platform=b(p);_sharedResizeObserver=b(z$1);_injector=b(ie);_renderer=b(ka$1);_animationsDisabled=wt$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new K;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new K;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Pe;indexFocused=new Pe;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ra),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ra))}ngAfterContentInit(){let t=this._dir?this._dir.change:Lh(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(eg(32),ug(this._destroyed)),n=this._viewportRuler.change(150).pipe(ug(this._destroyed)),c=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ee(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Yy(c,{injector:this._injector}),Jh(t,n,e,this._items.changes,this._itemsResized()).pipe(ug(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),c()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(v=>{this.indexFocused.emit(v),this._setTabFocus(v)})}_itemsResized(){return typeof ResizeObserver!=`function`?ht:this._items.changes.pipe(lg(this._items),ul(t=>new _(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(c=>e.next(c));return t.forEach(c=>n.observe(c.elementRef.nativeElement)),()=>{n.disconnect()}}))),cg(1),Gt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!yt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:c,offsetWidth:v}=e.elementRef.nativeElement,C,N;this._getLayoutDirection()==`ltr`?(C=c,N=C+v):(N=this._tabListInner.nativeElement.offsetWidth-c,C=N-v);let P=this.scrollDistance,_=this.scrollDistance+n;C<P?this.scrollDistance-=P-C:N>_&&(this.scrollDistance+=Math.min(N-_,C-P))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ui(Ia,Da).pipe(ug(Jh(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:c}=this._scrollHeader(t);(c===0||c>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=KE({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,eF],selectedIndex:[2,`selectedIndex`,`selectedIndex`,tF]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Pa=(()=>{class a extends Na{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Kt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Pm(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],c=[`nextPaginator`],v=[`previousPaginator`];return GE({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(P,_,u){if(P&1&&Fp(u,la,4),P&2){let f;$I(f=UI())&&(_._items=f)}},viewQuery:function(P,_){if(P&1&&jp(t,7)(e,7)(n,7)(c,5)(v,5),P&2){let u;$I(u=UI())&&(_._tabListContainer=u.first),$I(u=UI())&&(_._tabList=u.first),$I(u=UI())&&(_._tabListInner=u.first),$I(u=UI())&&(_._nextPaginator=u.first),$I(u=UI())&&(_._previousPaginator=u.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(P,_){P&2&&Wp(`mat-mdc-tab-header-pagination-controls-enabled`,_._showPaginationControls)(`mat-mdc-tab-header-rtl`,_._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,eF]},features:[Ep],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(P,_){P&1&&(VI(),hi(0,`div`,5,0),Lp(`click`,function(){return _._handlePaginatorClick(`before`)})(`mousedown`,function(f){return _._handlePaginatorPress(`before`,f)})(`touchend`,function(){return _._stopInterval()}),Sp(2,`div`,6),xc(),hi(3,`div`,7,1),Lp(`keydown`,function(f){return _._handleKeydown(f)}),hi(5,`div`,8,2),Lp(`cdkObserveContent`,function(){return _._onContentChanges()}),hi(7,`div`,9,3),HI(9),xc()()(),hi(10,`div`,10,4),Lp(`mousedown`,function(f){return _._handlePaginatorPress(`after`,f)})(`click`,function(){return _._handlePaginatorClick(`after`)})(`touchend`,function(){return _._stopInterval()}),Sp(12,`div`,6),xc()),P&2&&(Wp(`mat-mdc-tab-header-pagination-disabled`,_._disableScrollBefore),Mp(`matRippleDisabled`,_._disableScrollBefore||_.disableRipple),mv(3),Wp(`_mat-animation-noopable`,_._animationsDisabled),mv(2),Np(`aria-label`,_.ariaLabel||null)(`aria-labelledby`,_.ariaLabelledby||null),mv(5),Wp(`mat-mdc-tab-header-pagination-disabled`,_._disableScrollAfter),Mp(`matRippleDisabled`,_._disableScrollAfter||_.disableRipple))},dependencies:[Bs,Wi],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Ba=new A(`MAT_TABS_CONFIG`);var oa=(()=>{class a extends vi{_host=b(Ut);_ngZone=b(Ne);_centeringSub=z.EMPTY;_leavingSub=z.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(lg(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Pm(a)))(n||a)}})();static ɵdir=KE({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Ep]})}return a})();var Ut=(()=>{class a{_elementRef=b(Dr);_dir=b(T,{optional:!0});_ngZone=b(Ne);_injector=b(ie);_renderer=b(ka$1);_diAnimationsDisabled=wt$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=z.EMPTY;_position;_previousPosition;_onCentering=new Pe;_beforeCentering=new Pe;_afterLeavingCenter=new Pe;_onCentered=new Pe(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=b(JP);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Yy(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Yy(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,c){}return GE({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(c,v){if(c&1&&jp(oa,5)(t,5),c&2){let C;$I(C=UI())&&(v._portalHost=C.first),$I(C=UI())&&(v._contentElement=C.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(c,v){c&2&&Np(`inert`,v._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(c,v){c&1&&(hi(0,`div`,1,0),Dp(2,e,0,0,`ng-template`,2),xc()),c&2&&Wp(`mat-tab-body-content-left`,v._position===`left`)(`mat-tab-body-content-right`,v._position===`right`)(`mat-tab-body-content-can-animate`,v._position===`center`||v._previousPosition===`center`)},dependencies:[oa,ci],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return a})();var ca=(()=>{class a{_elementRef=b(Dr);_changeDetectorRef=b(JP);_ngZone=b(Ne);_tabsSubscription=z.EMPTY;_tabLabelSubscription=z.EMPTY;_tabBodySubscription=z.EMPTY;_diAnimationsDisabled=wt$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ti;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Zt(t.body),this._headerAnimationDuration=Zt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Zt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Pe;focusChange=new Pe;animationDone=new Pe;selectedTabChange=new Pe(!0);_groupId;_isServer=!b(p).isBrowser;constructor(){let t=b(Ba,{optional:!0});this._groupId=b(Ae).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,c)=>n.isActive=c===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let c=0;c<e.length;c++)if(e[c].isActive){this._indexToSelect=this._selectedIndex=c,this._lastFocusedTabIndex=null,n=e[c];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(lg(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Xt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Jh(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function c(u,f){}function v(u,f){if(u&1&&Dp(0,c,0,0,`ng-template`,12),u&2){let m=FI().$implicit;Mp(`cdkPortalOutlet`,m.templateLabel)}}function C(u,f){if(u&1&&pD(0),u&2){let m=FI().$implicit;Yp(m.textLabel)}}function N(u,f){if(u&1){let m=xI();hi(0,`div`,7,2),Lp(`click`,function(){let y=lu(m),B=y.$implicit,Ot=y.$index,ga=FI(),_a=qI(1);return uu(ga._handleClick(B,_a,Ot))})(`cdkFocusChange`,function(y){let B=lu(m).$index,Ot=FI();return uu(Ot._tabFocusChanged(y,B))}),Sp(2,`span`,8)(3,`div`,9),hi(4,`span`,10)(5,`span`,11),vI(6,v,1,1,null,12)(7,C,1,1),xc()()()}if(u&2){let m=f.$implicit,x=f.$index,y=qI(1),B=FI();nD(m.labelClass),Wp(`mdc-tab--active`,B.selectedIndex===x),Mp(`id`,B._getTabLabelId(m,x))(`disabled`,m.disabled)(`fitInkBarToContent`,B.fitInkBarToContent),Np(`tabIndex`,B._getTabIndex(x))(`aria-posinset`,x+1)(`aria-setsize`,B._tabs.length)(`aria-controls`,B._getTabContentId(x))(`aria-selected`,B.selectedIndex===x)(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,!m.ariaLabel&&m.ariaLabelledby?m.ariaLabelledby:null),mv(3),Mp(`matRippleTrigger`,y)(`matRippleDisabled`,m.disabled||B.disableRipple),mv(3),II(m.templateLabel?6:7)}}function P(u,f){u&1&&HI(0)}function _(u,f){if(u&1){let m=xI();hi(0,`mat-tab-body`,13),Lp(`_onCentered`,function(){lu(m);let y=FI();return uu(y._removeTabBodyWrapperHeight())})(`_onCentering`,function(y){lu(m);let B=FI();return uu(B._setTabBodyWrapperHeight(y))})(`_beforeCentering`,function(y){lu(m);let B=FI();return uu(B._bodyCentered(y))}),xc()}if(u&2){let m=f.$implicit,x=f.$index,y=FI();nD(m.bodyClass),Mp(`id`,y._getTabContentId(x))(`content`,m.content)(`position`,m.position)(`animationDuration`,y._bodyAnimationDuration)(`preserveContent`,y.preserveContent),Np(`tabindex`,y.contentTabIndex!=null&&y.selectedIndex===x?y.contentTabIndex:null)(`aria-labelledby`,y._getTabLabelId(m,x))(`aria-hidden`,y.selectedIndex!==x)}}return GE({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(f,m,x){if(f&1&&Fp(x,Yt,5),f&2){let y;$I(y=UI())&&(m._allTabs=y)}},viewQuery:function(f,m){if(f&1&&jp(t,5)(e,5)(Ut,5),f&2){let x;$I(x=UI())&&(m._tabBodyWrapper=x.first),$I(x=UI())&&(m._tabHeader=x.first),$I(x=UI())&&(m._tabBodies=x)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(f,m){f&2&&(Np(`mat-align-tabs`,m.alignTabs),nD(`mat-`+(m.color||`primary`)),Up(`--%NS%mat-tab-body-animation-duration`,m._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,m._headerAnimationDuration),Wp(`mat-mdc-tab-group-dynamic-height`,m.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,m.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,m.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,eF],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,eF],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,eF],selectedIndex:[2,`selectedIndex`,`selectedIndex`,tF],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,tF],disablePagination:[2,`disablePagination`,`disablePagination`,eF],disableRipple:[2,`disableRipple`,`disableRipple`,eF],preserveContent:[2,`preserveContent`,`preserveContent`,eF],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[TD([{provide:sa,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(f,m){f&1&&(VI(),hi(0,`mat-tab-header`,3,0),Lp(`indexFocused`,function(y){return m._focusChanged(y)})(`selectFocusedIndex`,function(y){return m.selectedIndex=y}),bI(2,N,8,17,`div`,4,wI),xc(),vI(4,P,1,0),hi(5,`div`,5,1),bI(7,_,1,10,`mat-tab-body`,6,wI),xc()),f&2&&(Mp(`selectedIndex`,m.selectedIndex||0)(`disableRipple`,m.disableRipple)(`disablePagination`,m.disablePagination),_p(`aria-label`,m.ariaLabel)(`aria-labelledby`,m.ariaLabelledby),mv(2),TI(m._tabs),mv(2),II(m._isServer?4:-1),mv(),Wp(`_mat-animation-noopable`,m._bodyAnimationsDisabled()),mv(2),TI(m._tabs))},dependencies:[Pa,la,kt,Bs,vi,Ut],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Xt=class{index;tab};var ma=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=QE({type:a});static ɵinj=Fl({imports:[J]})}return a})();var at=class a{http=b(kn);baseUrl=`${t.apiBaseUrl}/sessions`;reschedule(d,t){return this.http.patch(`${this.baseUrl}/${d}/reschedule`,{newSlotId:t})}cancel(d){return this.http.patch(`${this.baseUrl}/${d}/cancel`,{})}static ɵfac=function(t){return new(t||a)};static ɵprov=fe({token:a,factory:a.ɵfac,providedIn:`root`})};function Ra(a,d){a&1&&(hi(0,`p`,1),pD(1),AD(2,`translate`),xc()),a&2&&(mv(),Yp(OD(2,1,`treatment.reschedule.lateWarning`)))}function Oa(a,d){if(a&1&&(hi(0,`p`,1),pD(1),xc()),a&2){let t=FI();mv(),Yp(t.errorMessage())}}var Rt=class a{api=b(at);dialogRef=b(w);slotPicker=ZP(te);language=b(l);appointment=b($t);late=l$1(this.appointment.startTime);saving=Fo(!1);errorMessage=Fo(null);choose(d){this.saving.set(!0),this.errorMessage.set(null),this.api.reschedule(this.appointment.sessionId,d.id).subscribe({next:t=>this.dialogRef.close(t),error:t=>{this.saving.set(!1),this.errorMessage.set(s(t)),this.slotPicker()?.reload()}})}static ɵfac=function(t){return new(t||a)};static ɵcmp=GE({type:a,selectors:[[`app-reschedule-dialog`]],viewQuery:function(t,e){t&1&&Hp(e.slotPicker,te,5),t&2&&WI()},decls:19,vars:26,consts:[[`mat-dialog-title`,``],[`role`,`alert`,1,`warning`],[3,`picked`,`physiotherapistId`,`busy`],[`align`,`end`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``,1,`reschedule-dialog__back`]],template:function(t,e){t&1&&(hi(0,`h2`,0),pD(1),AD(2,`translate`),xc(),hi(3,`mat-dialog-content`)(4,`p`),pD(5),AD(6,`translate`),hi(7,`strong`),pD(8),AD(9,`date`),AD(10,`date`),xc(),pD(11),xc(),vI(12,Ra,3,3,`p`,1),vI(13,Oa,2,1,`p`,1),hi(14,`app-slot-picker`,2),Lp(`picked`,function(c){return e.choose(c)}),xc()(),hi(15,`mat-dialog-actions`,3)(16,`button`,4),pD(17),AD(18,`translate`),xc()()),t&2&&(mv(),Yp(OD(2,10,`treatment.reschedule.title`)),mv(4),Lc(` `,OD(6,12,`treatment.reschedule.current`),` `),mv(3),Kp(` `,LD(9,14,e.appointment.startTime,`fullDate`,void 0,e.language.current()),` · `,LD(10,19,e.appointment.startTime,`shortTime`,void 0,e.language.current()),` `),mv(3),Lc(` (`,e.appointment.physiotherapistName,`) `),mv(),II(e.late?12:-1),mv(),II(e.errorMessage()?13:-1),mv(),Mp(`physiotherapistId`,e.appointment.physiotherapistId)(`busy`,e.saving()),mv(3),Lc(` `,OD(18,24,`common.back`),` `))},dependencies:[Bt,Mt$1,Ve,Re,Be,ze,je,te,lr,Ye],styles:[`.reschedule-dialog__back[_ngcontent-%COMP%]{color:var(--%NS%fv-color-primary)!important}.warning[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var Fa=()=>({view:`history`});var za=a=>({count:a});var pa=a=>({name:a});var Va=a=>({items:a,empty:`appointments.emptyUpcoming`,actions:!0});var Ha=a=>({items:a,empty:`appointments.emptyHistory`});var ua=(a,d)=>({number:a,total:d});var ha=(a,d)=>d.sessionId;function ja(a,d){if(a&1&&(hi(0,`span`,13),pD(1),xc()),a&2){let t=FI(2);mv(),Yp(t.notifications.unreadCount())}}function $a(a,d){if(a&1){let t=xI();hi(0,`button`,21),Lp(`click`,function(){lu(t);let n=FI(2);return uu(n.signOut())}),pD(1),AD(2,`translate`),xc()}a&2&&(mv(),Lc(` `,OD(2,1,`layout.signOut`),` `))}function Wa(a,d){a&1&&(hi(0,`h1`,22),pD(1),AD(2,`translate`),hi(3,`span`),pD(4),AD(5,`translate`),xc()(),hi(6,`p`),pD(7),AD(8,`translate`),xc()),a&2&&(mv(),Lc(` `,OD(2,3,`appointments.historyTitlePrefix`),` `),mv(3),Yp(OD(5,5,`appointments.historyTitleAccent`)),mv(3),Yp(OD(8,7,`appointments.historySubtitle`)))}function Qa(a,d){a&1&&(hi(0,`h1`,22),pD(1),AD(2,`translate`),xc(),hi(3,`p`),pD(4),AD(5,`translate`),xc()),a&2&&(mv(),Yp(OD(2,2,`appointments.title`)),mv(3),Yp(OD(5,4,`appointments.subtitle`)))}function Ga(a,d){a&1&&(Sp(0,`mat-progress-bar`,20),AD(1,`translate`)),a&2&&Np(`aria-label`,OD(1,1,`common.loading`))}function qa(a,d){if(a&1){let t=xI();hi(0,`section`,23)(1,`p`,25),pD(2),AD(3,`translate`),xc(),hi(4,`h2`),pD(5),AD(6,`translate`),xc(),hi(7,`p`),pD(8),AD(9,`translate`),xc(),hi(10,`button`,26),Lp(`click`,function(){lu(t);let n=FI(3);return uu(n.load())}),pD(11),AD(12,`translate`),xc()()}if(a&2){let t=FI(3);mv(2),Yp(OD(3,4,`appointments.historyErrorBadge`)),mv(3),Yp(OD(6,6,`appointments.historyErrorTitle`)),mv(3),Yp(t.errorMessage()??OD(9,8,`errors.load`)),mv(3),Yp(OD(12,10,`common.retry`))}}function Za(a,d){if(a&1){let t=xI();hi(0,`div`,24)(1,`mat-icon`,12),pD(2,`cloud_off`),xc(),hi(3,`p`),pD(4),AD(5,`translate`),xc(),hi(6,`button`,26),Lp(`click`,function(){lu(t);let n=FI(3);return uu(n.load())}),pD(7),AD(8,`translate`),xc()()}if(a&2){let t=FI(3);mv(4),Yp(t.errorMessage()??OD(5,2,`errors.load`)),mv(3),Yp(OD(8,4,`common.retry`))}}function Ka(a,d){if(a&1&&vI(0,qa,13,12,`section`,23)(1,Za,9,6,`div`,24),a&2){let t=FI(2);II(t.historyView()?0:1)}}function Ua(a,d){if(a&1&&(hi(0,`tr`)(1,`td`)(2,`time`),pD(3),AD(4,`date`),xc()(),hi(5,`td`),pD(6),xc(),hi(7,`td`),pD(8),AD(9,`translate`),xc(),hi(10,`td`)(11,`span`,32),pD(12),AD(13,`translate`),xc()()()),a&2){let t=d.$implicit,e=FI(4);mv(2),Np(`datetime`,t.startTime),mv(),Lc(` `,LD(4,9,t.startTime,`dd/MM/yyyy · HH:mm`,void 0,e.language.current()),` `),mv(3),Yp(t.physiotherapistName),mv(2),Jp(``,t.sessionNumber,` `,OD(9,14,`appointments.historyOf`),` `,t.totalSessions),mv(3),nD(`history-status history-status--`+t.status.toLowerCase()),mv(),Lc(` `,OD(13,16,`sessionStatus.`+t.status),` `)}}function Xa(a,d){if(a&1){let t=xI();hi(0,`button`,33),Lp(`click`,function(){lu(t);let n=FI(4);return uu(n.load(!0))}),pD(1),AD(2,`translate`),xc()}a&2&&(mv(),Lc(` `,OD(2,1,`common.loadMore`),` `))}function Ya(a,d){if(a&1&&(hi(0,`div`,28)(1,`table`,29)(2,`thead`)(3,`tr`)(4,`th`,30),pD(5),AD(6,`translate`),xc(),hi(7,`th`,30),pD(8),AD(9,`translate`),xc(),hi(10,`th`,30),pD(11),AD(12,`translate`),xc(),hi(13,`th`,30),pD(14),AD(15,`translate`),xc()()(),hi(16,`tbody`),bI(17,Ua,14,18,`tr`,null,ha),xc()()(),vI(19,Xa,3,3,`button`,31)),a&2){let t=FI(3);mv(5),Yp(OD(6,5,`appointments.historyDate`)),mv(3),Yp(OD(9,7,`appointments.historySpecialist`)),mv(3),Yp(OD(12,9,`appointments.historySession`)),mv(3),Yp(OD(15,11,`appointments.historyStatus`)),mv(3),TI(t.history()),mv(2),II(t.hasMore()?19:-1)}}function Ja(a,d){if(a&1){let t=xI();hi(0,`button`,33),Lp(`click`,function(){lu(t);let n=FI(4);return uu(n.load(!0))}),pD(1),AD(2,`translate`),xc()}a&2&&(mv(),Lc(` `,OD(2,1,`common.loadMore`),` `))}function tn(a,d){if(a&1&&(hi(0,`section`,27)(1,`p`,25),pD(2),AD(3,`translate`),xc(),hi(4,`h2`),pD(5),AD(6,`translate`),xc(),hi(7,`a`,34),pD(8),AD(9,`translate`),xc(),vI(10,Ja,3,3,`button`,31),xc()),a&2){let t=FI(3);mv(2),Yp(OD(3,4,`appointments.historyEmptyBadge`)),mv(3),Yp(OD(6,6,`appointments.historyEmptyTitle`)),mv(3),Yp(OD(9,8,`appointments.historyFindSpecialist`)),mv(2),II(t.hasMore()?10:-1)}}function en(a,d){if(a&1&&vI(0,Ya,20,13)(1,tn,11,10,`section`,27),a&2){let t=FI(2);II(t.history().length>0?0:1)}}function an(a,d){if(a&1&&(hi(0,`mat-card`,35)(1,`mat-card-content`,39)(2,`div`,40)(3,`span`,41),pD(4),AD(5,`date`),xc(),hi(6,`span`,42),pD(7),AD(8,`date`),xc(),hi(9,`span`,43),pD(10),AD(11,`date`),xc()(),hi(12,`div`,44)(13,`h2`,45),pD(14),AD(15,`translate`),xc(),hi(16,`p`,46),pD(17),AD(18,`date`),AD(19,`date`),xc(),hi(20,`p`),pD(21),AD(22,`translate`),AD(23,`translate`),xc(),hi(24,`p`,47),pD(25),AD(26,`translate`),xc()()()()),a&2){let t=d,e=FI(3);mv(4),Yp(LD(5,10,t.startTime,`EEE`,void 0,e.language.current())),mv(3),Yp(kD(8,15,t.startTime,`d`)),mv(3),Yp(LD(11,18,t.startTime,`MMM`,void 0,e.language.current())),mv(4),Yp(OD(15,23,`appointments.next`)),mv(3),Kp(` `,LD(18,25,t.startTime,`fullDate`,void 0,e.language.current()),` · `,LD(19,30,t.startTime,`shortTime`,void 0,e.language.current()),` `),mv(4),Kp(` `,kD(22,35,`appointments.with`,_D(43,pa,t.physiotherapistName)),` · `,OD(23,38,`specialties.`+t.specialty),` `),mv(4),Kp(` `,t.diagnosis,` · `,kD(26,40,`appointments.session`,ND(45,ua,t.sessionNumber,t.totalSessions)),` `)}}function nn(a,d){if(a&1){let t=xI();hi(0,`button`,33),Lp(`click`,function(){lu(t);let n=FI(3);return uu(n.load(!0))}),pD(1),AD(2,`translate`),xc()}a&2&&(mv(),Lc(` `,OD(2,1,`common.loadMore`),` `))}function rn(a,d){if(a&1&&(vI(0,an,27,48,`mat-card`,35),hi(1,`mat-tab-group`,36)(2,`mat-tab`,37),AD(3,`translate`),Rp(4,38),xc(),hi(5,`mat-tab`,37),AD(6,`translate`),Rp(7,38),xc()(),vI(8,nn,3,3,`button`,31)),a&2){let t,e=FI(2),n=qI(2);II((t=e.next())?0:-1,t),mv(2),Mp(`label`,OD(3,8,`appointments.upcoming`)+` (`+e.upcoming().length+`)`),mv(2),Mp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,_D(12,Va,e.upcoming())),mv(),Mp(`label`,OD(6,10,`appointments.history`)+` (`+e.history().length+`)`),mv(2),Mp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,_D(14,Ha,e.history())),mv(),II(e.hasMore()?8:-1)}}function on(a,d){if(a&1){let t=xI();hi(0,`section`,1)(1,`header`,2)(2,`a`,3),AD(3,`translate`),Sp(4,`img`,4),hi(5,`span`),pD(6,`FisioVital`),xc()(),hi(7,`nav`,5),AD(8,`translate`),hi(9,`a`,6),pD(10),AD(11,`translate`),xc(),hi(12,`a`,7),pD(13),AD(14,`translate`),xc(),hi(15,`a`,8),pD(16),AD(17,`translate`),xc(),hi(18,`a`,9),pD(19),AD(20,`translate`),xc()(),hi(21,`div`,10)(22,`a`,11),AD(23,`translate`),hi(24,`mat-icon`,12),pD(25,`notifications`),xc(),vI(26,ja,2,1,`span`,13),xc(),hi(27,`div`,14)(28,`button`,15),AD(29,`translate`),Lp(`click`,function(){lu(t);let n=FI();return uu(n.profileMenuOpen.update(c=>!c))}),pD(30),xc(),vI(31,$a,3,3,`button`,16),xc()()(),hi(32,`section`,17)(33,`header`,18)(34,`p`,19),Sp(35,`span`,12),pD(36),AD(37,`translate`),xc(),vI(38,Wa,9,9)(39,Qa,6,6),xc(),vI(40,Ga,2,3,`mat-progress-bar`,20)(41,Ka,2,1)(42,en,2,1)(43,rn,9,16),xc()()}if(a&2){let t=d,e=FI();mv(2),Np(`aria-label`,OD(3,24,`layout.goHome`)),mv(5),Np(`aria-label`,OD(8,26,`home.navigation`)),mv(3),Yp(OD(11,28,`home.navPanel`)),mv(3),Yp(OD(14,30,`home.navSpecialists`)),mv(2),Wp(`dashboard-nav__link--active`,!e.historyView()),Np(`aria-current`,e.historyView()?null:`page`),mv(),Lc(` `,OD(17,32,`home.navSessions`),` `),mv(2),Wp(`dashboard-nav__link--active`,e.historyView()),Mp(`queryParams`,CD(44,Fa)),Np(`aria-current`,e.historyView()?`page`:null),mv(),Lc(` `,OD(20,34,`home.navHistory`),` `),mv(3),Np(`aria-label`,kD(23,36,`home.notificationsCount`,_D(45,za,e.notifications.unreadCount()))),mv(4),II(e.notifications.unreadCount()>0?26:-1),mv(2),Np(`aria-label`,kD(29,39,`home.profileMenu`,_D(47,pa,t.fullName)))(`aria-expanded`,e.profileMenuOpen()),mv(2),Lc(` `,e.initials(t.fullName),` `),mv(),II(e.profileMenuOpen()?31:-1),mv(),Wp(`page--history`,e.historyView()),mv(4),Lc(` `,OD(37,42,e.historyView()?`appointments.historyEyebrow`:`appointments.eyebrow`),` `),mv(2),II(e.historyView()?38:39),mv(2),II(e.loading()?40:e.loadFailed()?41:e.historyView()?42:43)}}function dn(a,d){if(a&1&&(hi(0,`div`,48)(1,`mat-icon`,12),pD(2,`event_available`),xc(),hi(3,`p`),pD(4),AD(5,`translate`),xc()()),a&2){let t=FI().empty;mv(4),Yp(OD(5,1,t))}}function sn(a,d){if(a&1){let t=xI();hi(0,`div`,58)(1,`button`,26),Lp(`click`,function(){lu(t);let n=FI().$implicit,c=FI(3);return uu(c.reschedule(n))}),pD(2),AD(3,`translate`),xc(),hi(4,`button`,59),Lp(`click`,function(){lu(t);let n=FI().$implicit,c=FI(3);return uu(c.cancel(n))}),pD(5),AD(6,`translate`),xc()()}a&2&&(mv(2),Lc(` `,OD(3,2,`treatment.reschedule.action`),` `),mv(3),Lc(` `,OD(6,4,`treatment.cancel.action`),` `))}function ln(a,d){if(a&1&&(hi(0,`li`,51)(1,`div`,52)(2,`span`,53),pD(3),AD(4,`date`),xc(),hi(5,`span`,54),pD(6),AD(7,`date`),xc()(),hi(8,`div`,55)(9,`p`,56),pD(10),AD(11,`date`),hi(12,`time`),pD(13),AD(14,`date`),AD(15,`date`),xc()(),hi(16,`p`),pD(17),AD(18,`translate`),xc(),hi(19,`p`,47),pD(20),AD(21,`translate`),xc()(),Sp(22,`app-session-status-chip`,57),vI(23,sn,7,6,`div`,58),xc()),a&2){let t=d.$implicit,e=FI(2).actions,n=FI();Wp(`item--cancelled`,t.status===`CANCELLED`||t.status===`LATE_CANCELLED`),mv(3),Yp(kD(4,14,t.startTime,`d`)),mv(3),Yp(LD(7,17,t.startTime,`MMM`,void 0,n.language.current())),mv(4),Lc(` `,LD(11,22,t.startTime,`EEEE`,void 0,n.language.current()),`, `),mv(2),Np(`datetime`,t.startTime),mv(),Kp(` `,LD(14,27,t.startTime,`shortTime`,void 0,n.language.current()),` – `,LD(15,32,t.endTime,`shortTime`,void 0,n.language.current()),` `),mv(4),Kp(` `,t.physiotherapistName,` · `,OD(18,37,`specialties.`+t.specialty),` `),mv(3),Kp(` `,t.diagnosis,` · `,kD(21,39,`appointments.session`,ND(42,ua,t.sessionNumber,t.totalSessions)),` `),mv(2),Mp(`status`,t.status),mv(),II(e?23:-1)}}function cn(a,d){if(a&1&&(hi(0,`ul`,49),bI(1,ln,24,45,`li`,50,ha),xc()),a&2){let t=FI().items;mv(),TI(t)}}function mn(a,d){if(a&1&&vI(0,dn,6,3,`div`,48)(1,cn,3,0,`ul`,49),a&2){let t=d.items;II(t.length===0?0:1)}}var bt=a=>new Date(a.startTime).getTime();var ba=class a$1{api=b(a);sessionsApi=b(at);dialog=b(tt);feedback=b(bt$1);router=b(le);route=b(V);auth=b(u);notifications=b(d);language=b(l);profileMenuOpen=Fo(!1);historyView=Fo(!1);pageSize=20;page=0;hasMore=Fo(!1);loading=Fo(!0);loadFailed=Fo(!1);errorMessage=Fo(null);appointments=Fo([]);upcoming=HD(()=>this.appointments().filter(d=>d.status===`RESERVED`&&bt(d)>Date.now()).sort((d,t)=>bt(d)-bt(t)));history=HD(()=>this.appointments().filter(d=>!this.upcoming().includes(d)).sort((d,t)=>bt(t)-bt(d)));next=HD(()=>this.upcoming()[0]??null);initials(d){return d.trim().split(/\s+/).slice(0,2).map(t=>t[0]?.toLocaleUpperCase()??``).join(``)}constructor(){this.route.queryParamMap.pipe(g()).subscribe(d=>{this.historyView.set(d.get(`view`)===`history`)}),this.load()}load(d=!1){this.page=d?this.page+1:0,this.loading.set(!d),this.loadFailed.set(!1),this.api.getMine(this.page,this.pageSize).subscribe({next:t=>{this.appointments.set(d?[...this.appointments(),...t.appointments]:t.appointments),this.hasMore.set(this.page+1<(t.totalPages??0)),this.loading.set(!1)},error:t=>{this.errorMessage.set(s(t)),this.loadFailed.set(!0),this.loading.set(!1)}})}reschedule(d){this.dialog.open(Rt,{data:d,width:`640px`}).afterClosed().subscribe(t=>{t&&(this.feedback.success(t.lateChange?`treatment.reschedule.doneLate`:`treatment.reschedule.done`),this.load())})}cancel(d){this.dialog.open(P,{data:{title:`treatment.cancel.title`,message:`treatment.cancel.message`,confirm:`treatment.cancel.confirm`,warning:l$1(d.startTime)?`treatment.cancel.lateWarning`:void 0}}).afterClosed().pipe(Gt(Boolean),ul(()=>this.sessionsApi.cancel(d.sessionId))).subscribe({next:t=>{this.feedback.success(t.status===`LATE_CANCELLED`?`treatment.cancel.doneLate`:`treatment.cancel.done`),this.load()},error:t=>this.feedback.error(t)})}signOut(){this.auth.signOut(),this.notifications.clear(),this.router.navigate([`/sign-in`])}static ɵfac=function(t){return new(t||a$1)};static ɵcmp=GE({type:a$1,selectors:[[`app-my-appointments`]],decls:3,vars:1,consts:[[`list`,``],[1,`appointments-page`],[1,`dashboard-header`],[`routerLink`,`/patient/home`,1,`dashboard-brand`],[`src`,`/images/fisiovital-logo.png`,`alt`,``],[1,`dashboard-nav`],[`routerLink`,`/patient/home`,1,`dashboard-nav__link`],[`routerLink`,`/patient/physiotherapists`,1,`dashboard-nav__link`],[`routerLink`,`/patient/appointments`,1,`dashboard-nav__link`],[`routerLink`,`/patient/appointments`,1,`dashboard-nav__link`,3,`queryParams`],[1,`dashboard-actions`],[`routerLink`,`/patient/notifications`,1,`notification-indicator`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`notification-indicator__count`],[1,`profile`],[`type`,`button`,1,`profile__avatar`,3,`click`],[`type`,`button`,1,`profile__sign-out`],[`aria-labelledby`,`appointments-title`,1,`page`],[1,`page__header`],[1,`eyebrow`],[`mode`,`indeterminate`],[`type`,`button`,1,`profile__sign-out`,3,`click`],[`id`,`appointments-title`],[`role`,`alert`,1,`history-state`,`history-state--error`],[`role`,`alert`,1,`state`],[1,`history-state__badge`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`history-state`,`history-state--empty`],[1,`history-table-wrap`],[1,`history-table`],[`scope`,`col`],[`mat-stroked-button`,``,`type`,`button`,1,`load-more`],[1,`history-status`],[`mat-stroked-button`,``,`type`,`button`,1,`load-more`,3,`click`],[`mat-flat-button`,``,`routerLink`,`/patient/physiotherapists`],[`appearance`,`outlined`,`aria-labelledby`,`next-title`,1,`next`],[`mat-stretch-tabs`,`false`,`animationDuration`,`150ms`],[3,`label`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`next__content`],[`aria-hidden`,`true`,1,`next__date`],[1,`next__weekday`],[1,`next__day`],[1,`next__month`],[1,`next__info`],[`id`,`next-title`],[1,`next__when`],[1,`muted`],[1,`state`],[1,`list`],[1,`item`,3,`item--cancelled`],[1,`item`],[1,`item__date`],[1,`item__day`],[1,`item__month`],[1,`item__info`],[1,`item__title`],[3,`status`],[1,`item__actions`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(t,e){if(t&1&&(vI(0,on,44,49,`section`,1),Dp(1,mn,2,1,`ng-template`,null,0,PD)),t&2){let n;II((n=e.auth.currentUser())?0:-1,n)}},dependencies:[ar,Bt,Mt$1,na,ea,aa,Mt,wt,j,L,ma,Yt,ca,Nt,y,lr,Ye],styles:[`.page[_ngcontent-%COMP%]{max-width:880px;margin:0 auto;padding:32px 16px 48px}.page__header[_ngcontent-%COMP%]{margin-bottom:24px}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 4px;font:var(--%NS%mat-sys-headline-medium)}.page__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface-variant)}.muted[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:40px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin:16px 0 0;padding:0;list-style:none}.item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 16px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface)}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0}.item--cancelled[_ngcontent-%COMP%]   .item__info[_ngcontent-%COMP%]{opacity:.7}.item__date[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:48px;color:var(--%NS%mat-sys-primary)}.item__day[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small)}.item__month[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-medium);text-transform:uppercase}.item__info[_ngcontent-%COMP%]{flex:1;min-width:0}.item__title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small)}.item__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.load-more[_ngcontent-%COMP%]{display:block;margin:16px auto 0}.plan-form[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:420px;margin-bottom:24px}.form--inline[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;align-items:baseline;gap:12px;max-width:none}@media(max-width:599px){.item[_ngcontent-%COMP%]{flex-wrap:wrap}}.appointments-page[_ngcontent-%COMP%]{--%NS%mat-sys-primary: var(--%NS%fv-color-primary);--%NS%mat-sys-on-primary: var(--%NS%fv-color-surface);--%NS%mat-sys-primary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-primary-container: var(--%NS%fv-color-text);--%NS%mat-sys-tertiary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-tertiary-container: var(--%NS%fv-color-text);width:min(100%,1200px);box-sizing:border-box;margin:0 auto;padding:12px 24px 56px;min-height:100%;background:var(--%NS%fv-color-background)}.page[_ngcontent-%COMP%]{width:100%;max-width:none;box-sizing:border-box;margin:0;padding:36px 0 64px}.page__header[_ngcontent-%COMP%]{margin-bottom:22px}.page__header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{margin-bottom:16px;color:#5d8e48}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--%NS%fv-color-forest);font-size:clamp(34px,5vw,42px);font-weight:700;letter-spacing:-.5px;line-height:1.2}.page__header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{margin:8px 0 0;color:var(--%NS%fv-color-text-muted)}.eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;margin:0 0 12px;color:#5d8e48;font-size:11px;font-weight:700;letter-spacing:1.5px}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--%NS%fv-color-accent)}.next[_ngcontent-%COMP%]{margin-bottom:24px;border:1px solid #dce9d5;border-radius:20px;background:var(--%NS%fv-color-primary-soft);color:var(--%NS%fv-color-text)}.next__content[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;padding:20px!important}.next__date[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:72px;padding:10px 8px;border-radius:16px;background:var(--%NS%fv-color-surface);color:var(--%NS%fv-color-primary);box-shadow:0 4px 12px #23352a0d}.next__weekday[_ngcontent-%COMP%], .next__month[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-large);text-transform:uppercase}.next__day[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-display-small)}.next__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px;font:var(--%NS%mat-sys-title-medium)}.next__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0}.next__when[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-large)}.next__when[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.item__title[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}@media(max-width:760px){.appointments-page[_ngcontent-%COMP%]{padding:28px 16px 40px}.page[_ngcontent-%COMP%]{padding-top:28px}}`]})};export{ba as MyAppointments};