import{t}from"./chunk-_f8Hb3f-.js";import{$ as MD,Ar as ug,At as TI,B as Ip,Bn as ka$1,Br as xp,C as Fl,Cn as eg,Dt as SD,Fn as hr,G as K,Gt as Xy,H as JP,I as Hp,In as ht,Ir as wp,It as WI,Kt as YE,L as II,Ln as ie,M as Gt,Mr as uu,Nt as VI,O as GI,On as fe,Or as ti,Pn as hi,Pr as wI,Pt as Vp,Qt as ZP,Rn as jD,S as Fh,St as RI,Tr as tF,Ur as z,W as Jp,Wn as lu,Wr as zI,Wt as Xp,Y as LD,Z as Lc,Zn as ng,_ as Em,a as A,b as FD,ct as OD,dr as qI,et as Mp,g as Dr,gt as Pp,ht as Pe,i as $p,j as Gp,jn as gD,jr as ul,jt as Ui,kn as fg,kt as Sp,l as BI,ln as b,mn as bp,mr as qp,n as $I,nn as _D,nt as ND,ot as Np,p as CI,pt as PD,rn as _I,rt as Ne,sn as _i,t as $D,tn as _,tr as oD,ut as Op,v as Ev,w as Fo,wn as eh,xn as eF,yn as dg,yt as QE,zn as jm,zr as xc,zt as XE}from"./chunk-BpGjZHY7.js";import{_ as sa$1,b as ze,l as ca$1,p as me,v as tr,x as zo}from"./chunk-C17RfB6r.js";import{a as T,c as l,d as g,n as wt,p as u,r as J,s as x,t as Mt,u as Ye}from"./main-LGDNCCCG.js";import{t as z$1}from"./chunk-Bu7UP-9Z.js";import{D as os,L as yt,P as wt$1,i as Ee,k as p,n as Bs,t as Ae,u as Wi,w as kt}from"./chunk-BHeBAMJo.js";import{S as pe,f as T$1,g as _i$1,l as I,s as d,w as vi}from"./chunk-BY0jCGBL.js";import{a as je,c as ze$1,i as Ve,n as Be,o as tt,r as Re,s as w,t as $t}from"./chunk-CCSpn4qQ.js";import{n as Mt$1,t as Bt}from"./chunk-Gw7f6ZHY.js";import{t as P}from"./chunk-BD3zvsqW.js";import{n as j,r as s,t as L}from"./chunk-CnSHGhxL.js";import{t as bt$1}from"./chunk-Cm0ffrNn.js";import{t as y}from"./chunk-RPO8e9oa.js";import{i as l$1}from"./chunk-B29am0KO.js";import"./chunk-C6dbWfXv.js";import{t as te}from"./chunk-DKSsWPIW.js";import{t as a}from"./chunk-bWQNKBpE.js";var va=new A(`MAT_CARD_CONFIG`);var ea=(()=>{class a{appearance;constructor(){let t=b(va,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){return QE({type:a,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(n,c){n&2&&Gp(`mat-mdc-card-outlined`,c.appearance===`outlined`)(`mdc-card--outlined`,c.appearance===`outlined`)(`mat-mdc-card-filled`,c.appearance===`filled`)(`mdc-card--filled`,c.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,c){n&1&&(BI(),$I(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})})()}return a})();var aa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=XE({type:a,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return a})();var na=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=YE({type:a});static ɵinj=Fl({imports:[J]})}return a})();var ka=new A(`MatTabContent`);var wa=(()=>{class a{template=b(hr);static ɵfac=function(e){return new(e||a)};static ɵdir=XE({type:a,selectors:[[``,`matTabContent`,``]],features:[_D([{provide:ka,useExisting:a}])]})}return a})();var Ta=new A(`MatTabLabel`);var da=new A(`MAT_TAB`);var Ma=(()=>{class a extends _i$1{_closestTab=b(da,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=jm(a)))(n||a)}})();static ɵdir=XE({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[_D([{provide:Ta,useExisting:a}]),Ip]})}return a})();var sa=new A(`MAT_TAB_GROUP`);var Yt=(()=>{class a{_viewContainerRef=b(_i);_closestTabGroup=b(sa,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new K;position=null;origin=null;isActive=!1;constructor(){b(x).load(os)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new T$1(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,c){n&1&&$I(0)}return QE({type:a,selectors:[[`mat-tab`]],contentQueries:function(c,v,C){if(c&1&&Vp(C,Ma,5)(C,wa,7,hr),c&2){let N;WI(N=qI())&&(v.templateLabel=N.first),WI(N=qI())&&(v._explicitContent=N.first)}},viewQuery:function(c,v){if(c&1&&Hp(hr,7),c&2){let C;WI(C=qI())&&(v._implicitContent=C.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(c,v){c&2&&Mp(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,eF],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[_D([{provide:da,useExisting:a}]),Em],ngContentSelectors:t,decls:1,vars:0,template:function(c,v){c&1&&(BI(),bp(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var qt=`mdc-tab-indicator--active`;var ia=`mdc-tab-indicator--no-transition`;var Kt=class{_items;_currentItem;constructor(d){this._items=d}hide(){this._items.forEach(d=>d.deactivateInkBar()),this._currentItem=void 0}alignToElement(d){let t=this._items.find(n=>n.elementRef.nativeElement===d),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Sa=(()=>{class a{_elementRef=b(Dr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(qt);return}let n=e.getBoundingClientRect(),c=t.width/n.width,v=t.left-n.left;e.classList.add(ia),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${v}px) scaleX(${c})`),e.getBoundingClientRect(),e.classList.remove(ia),e.classList.add(qt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(qt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=XE({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,eF]}})}return a})();var la=(()=>{class a extends Sa{elementRef=b(Dr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=jm(a)))(n||a)}})();static ɵdir=XE({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(Mp(`aria-disabled`,!!n.disabled),Gp(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,eF]},features:[Ip]})}return a})();var ra={passive:!0};var Ia=650;var Da=100;function Zt(a){let d=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(d)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(d)?d:``}var Na=(()=>{class a{_elementRef=b(Dr);_changeDetectorRef=b(JP);_viewportRuler=b(I);_dir=b(T,{optional:!0});_ngZone=b(Ne);_platform=b(p);_sharedResizeObserver=b(z$1);_injector=b(ie);_renderer=b(ka$1);_animationsDisabled=wt$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new K;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new K;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Pe;indexFocused=new Pe;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ra),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ra))}ngAfterContentInit(){let t=this._dir?this._dir.change:Fh(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ng(32),fg(this._destroyed)),n=this._viewportRuler.change(150).pipe(fg(this._destroyed)),c=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ee(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Xy(c,{injector:this._injector}),eg(t,n,e,this._items.changes,this._itemsResized()).pipe(fg(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),c()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(v=>{this.indexFocused.emit(v),this._setTabFocus(v)})}_itemsResized(){return typeof ResizeObserver!=`function`?ht:this._items.changes.pipe(dg(this._items),ul(t=>new _(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(c=>e.next(c));return t.forEach(c=>n.observe(c.elementRef.nativeElement)),()=>{n.disconnect()}}))),ug(1),Gt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!yt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:c,offsetWidth:v}=e.elementRef.nativeElement,C,N;this._getLayoutDirection()==`ltr`?(C=c,N=C+v):(N=this._tabListInner.nativeElement.offsetWidth-c,C=N-v);let P=this.scrollDistance,_=this.scrollDistance+n;C<P?this.scrollDistance-=P-C:N>_&&(this.scrollDistance+=Math.min(N-_,C-P))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ui(Ia,Da).pipe(fg(eg(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:c}=this._scrollHeader(t);(c===0||c>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=XE({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,eF],selectedIndex:[2,`selectedIndex`,`selectedIndex`,tF]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Pa=(()=>{class a extends Na{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Kt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=jm(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],c=[`nextPaginator`],v=[`previousPaginator`];return QE({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(P,_,u){if(P&1&&Vp(u,la,4),P&2){let f;WI(f=qI())&&(_._items=f)}},viewQuery:function(P,_){if(P&1&&Hp(t,7)(e,7)(n,7)(c,5)(v,5),P&2){let u;WI(u=qI())&&(_._tabListContainer=u.first),WI(u=qI())&&(_._tabList=u.first),WI(u=qI())&&(_._tabListInner=u.first),WI(u=qI())&&(_._nextPaginator=u.first),WI(u=qI())&&(_._previousPaginator=u.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(P,_){P&2&&Gp(`mat-mdc-tab-header-pagination-controls-enabled`,_._showPaginationControls)(`mat-mdc-tab-header-rtl`,_._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,eF]},features:[Ip],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(P,_){P&1&&(BI(),hi(0,`div`,5,0),Pp(`click`,function(){return _._handlePaginatorClick(`before`)})(`mousedown`,function(f){return _._handlePaginatorPress(`before`,f)})(`touchend`,function(){return _._stopInterval()}),xp(2,`div`,6),xc(),hi(3,`div`,7,1),Pp(`keydown`,function(f){return _._handleKeydown(f)}),hi(5,`div`,8,2),Pp(`cdkObserveContent`,function(){return _._onContentChanges()}),hi(7,`div`,9,3),$I(9),xc()()(),hi(10,`div`,10,4),Pp(`mousedown`,function(f){return _._handlePaginatorPress(`after`,f)})(`click`,function(){return _._handlePaginatorClick(`after`)})(`touchend`,function(){return _._stopInterval()}),xp(12,`div`,6),xc()),P&2&&(Gp(`mat-mdc-tab-header-pagination-disabled`,_._disableScrollBefore),Sp(`matRippleDisabled`,_._disableScrollBefore||_.disableRipple),Ev(3),Gp(`_mat-animation-noopable`,_._animationsDisabled),Ev(2),Mp(`aria-label`,_.ariaLabel||null)(`aria-labelledby`,_.ariaLabelledby||null),Ev(5),Gp(`mat-mdc-tab-header-pagination-disabled`,_._disableScrollAfter),Sp(`matRippleDisabled`,_._disableScrollAfter||_.disableRipple))},dependencies:[Bs,Wi],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Ba=new A(`MAT_TABS_CONFIG`);var oa=(()=>{class a extends vi{_host=b(Ut);_ngZone=b(Ne);_centeringSub=z.EMPTY;_leavingSub=z.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(dg(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=jm(a)))(n||a)}})();static ɵdir=XE({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Ip]})}return a})();var Ut=(()=>{class a{_elementRef=b(Dr);_dir=b(T,{optional:!0});_ngZone=b(Ne);_injector=b(ie);_renderer=b(ka$1);_diAnimationsDisabled=wt$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=z.EMPTY;_position;_previousPosition;_onCentering=new Pe;_beforeCentering=new Pe;_afterLeavingCenter=new Pe;_onCentered=new Pe(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=b(JP);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Xy(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Xy(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,c){}return QE({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(c,v){if(c&1&&Hp(oa,5)(t,5),c&2){let C;WI(C=qI())&&(v._portalHost=C.first),WI(C=qI())&&(v._contentElement=C.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(c,v){c&2&&Mp(`inert`,v._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(c,v){c&1&&(hi(0,`div`,1,0),wp(2,e,0,0,`ng-template`,2),xc()),c&2&&Gp(`mat-tab-body-content-left`,v._position===`left`)(`mat-tab-body-content-right`,v._position===`right`)(`mat-tab-body-content-can-animate`,v._position===`center`||v._previousPosition===`center`)},dependencies:[oa,pe],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var ca=(()=>{class a{_elementRef=b(Dr);_changeDetectorRef=b(JP);_ngZone=b(Ne);_tabsSubscription=z.EMPTY;_tabLabelSubscription=z.EMPTY;_tabBodySubscription=z.EMPTY;_diAnimationsDisabled=wt$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ti;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Zt(t.body),this._headerAnimationDuration=Zt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Zt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Pe;focusChange=new Pe;animationDone=new Pe;selectedTabChange=new Pe(!0);_groupId;_isServer=!b(p).isBrowser;constructor(){let t=b(Ba,{optional:!0});this._groupId=b(Ae).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,c)=>n.isActive=c===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let c=0;c<e.length;c++)if(e[c].isActive){this._indexToSelect=this._selectedIndex=c,this._lastFocusedTabIndex=null,n=e[c];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(dg(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Xt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=eg(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function c(u,f){}function v(u,f){if(u&1&&wp(0,c,0,0,`ng-template`,12),u&2){let m=VI().$implicit;Sp(`cdkPortalOutlet`,m.templateLabel)}}function C(u,f){if(u&1&&gD(0),u&2){let m=VI().$implicit;Jp(m.textLabel)}}function N(u,f){if(u&1){let m=RI();hi(0,`div`,7,2),Pp(`click`,function(){let y=lu(m),B=y.$implicit,Ot=y.$index,ga=VI(),_a=zI(1);return uu(ga._handleClick(B,_a,Ot))})(`cdkFocusChange`,function(y){let B=lu(m).$index,Ot=VI();return uu(Ot._tabFocusChanged(y,B))}),xp(2,`span`,8)(3,`div`,9),hi(4,`span`,10)(5,`span`,11),II(6,v,1,1,null,12)(7,C,1,1),xc()()()}if(u&2){let m=f.$implicit,x=f.$index,y=zI(1),B=VI();oD(m.labelClass),Gp(`mdc-tab--active`,B.selectedIndex===x),Sp(`id`,B._getTabLabelId(m,x))(`disabled`,m.disabled)(`fitInkBarToContent`,B.fitInkBarToContent),Mp(`tabIndex`,B._getTabIndex(x))(`aria-posinset`,x+1)(`aria-setsize`,B._tabs.length)(`aria-controls`,B._getTabContentId(x))(`aria-selected`,B.selectedIndex===x)(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,!m.ariaLabel&&m.ariaLabelledby?m.ariaLabelledby:null),Ev(3),Sp(`matRippleTrigger`,y)(`matRippleDisabled`,m.disabled||B.disableRipple),Ev(3),wI(m.templateLabel?6:7)}}function P(u,f){u&1&&$I(0)}function _(u,f){if(u&1){let m=RI();hi(0,`mat-tab-body`,13),Pp(`_onCentered`,function(){lu(m);let y=VI();return uu(y._removeTabBodyWrapperHeight())})(`_onCentering`,function(y){lu(m);let B=VI();return uu(B._setTabBodyWrapperHeight(y))})(`_beforeCentering`,function(y){lu(m);let B=VI();return uu(B._bodyCentered(y))}),xc()}if(u&2){let m=f.$implicit,x=f.$index,y=VI();oD(m.bodyClass),Sp(`id`,y._getTabContentId(x))(`content`,m.content)(`position`,m.position)(`animationDuration`,y._bodyAnimationDuration)(`preserveContent`,y.preserveContent),Mp(`tabindex`,y.contentTabIndex!=null&&y.selectedIndex===x?y.contentTabIndex:null)(`aria-labelledby`,y._getTabLabelId(m,x))(`aria-hidden`,y.selectedIndex!==x)}}return QE({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(f,m,x){if(f&1&&Vp(x,Yt,5),f&2){let y;WI(y=qI())&&(m._allTabs=y)}},viewQuery:function(f,m){if(f&1&&Hp(t,5)(e,5)(Ut,5),f&2){let x;WI(x=qI())&&(m._tabBodyWrapper=x.first),WI(x=qI())&&(m._tabHeader=x.first),WI(x=qI())&&(m._tabBodies=x)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(f,m){f&2&&(Mp(`mat-align-tabs`,m.alignTabs),oD(`mat-`+(m.color||`primary`)),qp(`--%NS%mat-tab-body-animation-duration`,m._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,m._headerAnimationDuration),Gp(`mat-mdc-tab-group-dynamic-height`,m.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,m.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,m.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,eF],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,eF],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,eF],selectedIndex:[2,`selectedIndex`,`selectedIndex`,tF],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,tF],disablePagination:[2,`disablePagination`,`disablePagination`,eF],disableRipple:[2,`disableRipple`,`disableRipple`,eF],preserveContent:[2,`preserveContent`,`preserveContent`,eF],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[_D([{provide:sa,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(f,m){f&1&&(BI(),hi(0,`mat-tab-header`,3,0),Pp(`indexFocused`,function(y){return m._focusChanged(y)})(`selectFocusedIndex`,function(y){return m.selectedIndex=y}),CI(2,N,8,17,`div`,4,TI),xc(),II(4,P,1,0),hi(5,`div`,5,1),CI(7,_,1,10,`mat-tab-body`,6,TI),xc()),f&2&&(Sp(`selectedIndex`,m.selectedIndex||0)(`disableRipple`,m.disableRipple)(`disablePagination`,m.disablePagination),Np(`aria-label`,m.ariaLabel)(`aria-labelledby`,m.ariaLabelledby),Ev(2),_I(m._tabs),Ev(2),wI(m._isServer?4:-1),Ev(),Gp(`_mat-animation-noopable`,m._bodyAnimationsDisabled()),Ev(2),_I(m._tabs))},dependencies:[Pa,la,kt,Bs,vi,Ut],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Xt=class{index;tab};var ma=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=YE({type:a});static ɵinj=Fl({imports:[J]})}return a})();var at=class a{http=b(zo);baseUrl=`${t.apiBaseUrl}/sessions`;reschedule(d,t){return this.http.patch(`${this.baseUrl}/${d}/reschedule`,{newSlotId:t})}cancel(d){return this.http.patch(`${this.baseUrl}/${d}/cancel`,{})}static ɵfac=function(t){return new(t||a)};static ɵprov=fe({token:a,factory:a.ɵfac,providedIn:`root`})};function Ra(a,d){a&1&&(hi(0,`p`,1),gD(1),OD(2,`translate`),xc()),a&2&&(Ev(),Jp(LD(2,1,`treatment.reschedule.lateWarning`)))}function Oa(a,d){if(a&1&&(hi(0,`p`,1),gD(1),xc()),a&2){let t=VI();Ev(),Jp(t.errorMessage())}}var Rt=class a{api=b(at);dialogRef=b(w);slotPicker=ZP(te);language=b(l);appointment=b($t);late=l$1(this.appointment.startTime);saving=Fo(!1);errorMessage=Fo(null);choose(d){this.saving.set(!0),this.errorMessage.set(null),this.api.reschedule(this.appointment.sessionId,d.id).subscribe({next:t=>this.dialogRef.close(t),error:t=>{this.saving.set(!1),this.errorMessage.set(s(t)),this.slotPicker()?.reload()}})}static ɵfac=function(t){return new(t||a)};static ɵcmp=QE({type:a,selectors:[[`app-reschedule-dialog`]],viewQuery:function(t,e){t&1&&$p(e.slotPicker,te,5),t&2&&GI()},decls:19,vars:26,consts:[[`mat-dialog-title`,``],[`role`,`alert`,1,`warning`],[3,`picked`,`physiotherapistId`,`busy`],[`align`,`end`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``,1,`reschedule-dialog__back`]],template:function(t,e){t&1&&(hi(0,`h2`,0),gD(1),OD(2,`translate`),xc(),hi(3,`mat-dialog-content`)(4,`p`),gD(5),OD(6,`translate`),hi(7,`strong`),gD(8),OD(9,`date`),OD(10,`date`),xc(),gD(11),xc(),II(12,Ra,3,3,`p`,1),II(13,Oa,2,1,`p`,1),hi(14,`app-slot-picker`,2),Pp(`picked`,function(c){return e.choose(c)}),xc()(),hi(15,`mat-dialog-actions`,3)(16,`button`,4),gD(17),OD(18,`translate`),xc()()),t&2&&(Ev(),Jp(LD(2,10,`treatment.reschedule.title`)),Ev(4),Lc(` `,LD(6,12,`treatment.reschedule.current`),` `),Ev(3),Xp(` `,FD(9,14,e.appointment.startTime,`fullDate`,void 0,e.language.current()),` · `,FD(10,19,e.appointment.startTime,`shortTime`,void 0,e.language.current()),` `),Ev(3),Lc(` (`,e.appointment.physiotherapistName,`) `),Ev(),wI(e.late?12:-1),Ev(),wI(e.errorMessage()?13:-1),Ev(),Sp(`physiotherapistId`,e.appointment.physiotherapistId)(`busy`,e.saving()),Ev(3),Lc(` `,LD(18,24,`common.back`),` `))},dependencies:[Bt,Mt$1,Ve,Re,Be,ze$1,je,te,ca$1,Ye],styles:[`.reschedule-dialog__back[_ngcontent-%COMP%]{color:var(--%NS%fv-color-primary)!important}.warning[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var Fa=()=>({view:`history`});var za=a=>({count:a});var pa=a=>({name:a});var Va=a=>({items:a,empty:`appointments.emptyUpcoming`,actions:!0});var Ha=a=>({items:a,empty:`appointments.emptyHistory`});var ua=(a,d)=>({number:a,total:d});var ha=(a,d)=>d.sessionId;function ja(a,d){if(a&1&&(hi(0,`span`,13),gD(1),xc()),a&2){let t=VI(2);Ev(),Jp(t.notifications.unreadCount())}}function $a(a,d){if(a&1){let t=RI();hi(0,`button`,21),Pp(`click`,function(){lu(t);let n=VI(2);return uu(n.signOut())}),gD(1),OD(2,`translate`),xc()}a&2&&(Ev(),Lc(` `,LD(2,1,`layout.signOut`),` `))}function Wa(a,d){a&1&&(hi(0,`h1`,22),gD(1),OD(2,`translate`),hi(3,`span`),gD(4),OD(5,`translate`),xc()(),hi(6,`p`),gD(7),OD(8,`translate`),xc()),a&2&&(Ev(),Lc(` `,LD(2,3,`appointments.historyTitlePrefix`),` `),Ev(3),Jp(LD(5,5,`appointments.historyTitleAccent`)),Ev(3),Jp(LD(8,7,`appointments.historySubtitle`)))}function Qa(a,d){a&1&&(hi(0,`h1`,22),gD(1),OD(2,`translate`),xc(),hi(3,`p`),gD(4),OD(5,`translate`),xc()),a&2&&(Ev(),Jp(LD(2,2,`appointments.title`)),Ev(3),Jp(LD(5,4,`appointments.subtitle`)))}function Ga(a,d){a&1&&(xp(0,`mat-progress-bar`,20),OD(1,`translate`)),a&2&&Mp(`aria-label`,LD(1,1,`common.loading`))}function qa(a,d){if(a&1){let t=RI();hi(0,`section`,23)(1,`p`,25),gD(2),OD(3,`translate`),xc(),hi(4,`h2`),gD(5),OD(6,`translate`),xc(),hi(7,`p`),gD(8),OD(9,`translate`),xc(),hi(10,`button`,26),Pp(`click`,function(){lu(t);let n=VI(3);return uu(n.load())}),gD(11),OD(12,`translate`),xc()()}if(a&2){let t=VI(3);Ev(2),Jp(LD(3,4,`appointments.historyErrorBadge`)),Ev(3),Jp(LD(6,6,`appointments.historyErrorTitle`)),Ev(3),Jp(t.errorMessage()??LD(9,8,`errors.load`)),Ev(3),Jp(LD(12,10,`common.retry`))}}function Za(a,d){if(a&1){let t=RI();hi(0,`div`,24)(1,`mat-icon`,12),gD(2,`cloud_off`),xc(),hi(3,`p`),gD(4),OD(5,`translate`),xc(),hi(6,`button`,26),Pp(`click`,function(){lu(t);let n=VI(3);return uu(n.load())}),gD(7),OD(8,`translate`),xc()()}if(a&2){let t=VI(3);Ev(4),Jp(t.errorMessage()??LD(5,2,`errors.load`)),Ev(3),Jp(LD(8,4,`common.retry`))}}function Ka(a,d){if(a&1&&II(0,qa,13,12,`section`,23)(1,Za,9,6,`div`,24),a&2){let t=VI(2);wI(t.historyView()?0:1)}}function Ua(a,d){if(a&1&&(hi(0,`tr`)(1,`td`)(2,`time`),gD(3),OD(4,`date`),xc()(),hi(5,`td`),gD(6),xc(),hi(7,`td`),gD(8),OD(9,`translate`),xc(),hi(10,`td`)(11,`span`,32),gD(12),OD(13,`translate`),xc()()()),a&2){let t=d.$implicit,e=VI(4);Ev(2),Mp(`datetime`,t.startTime),Ev(),Lc(` `,FD(4,9,t.startTime,`dd/MM/yyyy · HH:mm`,void 0,e.language.current()),` `),Ev(3),Jp(t.physiotherapistName),Ev(2),eh(``,t.sessionNumber,` `,LD(9,14,`appointments.historyOf`),` `,t.totalSessions),Ev(3),oD(`history-status history-status--`+t.status.toLowerCase()),Ev(),Lc(` `,LD(13,16,`sessionStatus.`+t.status),` `)}}function Xa(a,d){if(a&1){let t=RI();hi(0,`button`,33),Pp(`click`,function(){lu(t);let n=VI(4);return uu(n.load(!0))}),gD(1),OD(2,`translate`),xc()}a&2&&(Ev(),Lc(` `,LD(2,1,`common.loadMore`),` `))}function Ya(a,d){if(a&1&&(hi(0,`div`,28)(1,`table`,29)(2,`thead`)(3,`tr`)(4,`th`,30),gD(5),OD(6,`translate`),xc(),hi(7,`th`,30),gD(8),OD(9,`translate`),xc(),hi(10,`th`,30),gD(11),OD(12,`translate`),xc(),hi(13,`th`,30),gD(14),OD(15,`translate`),xc()()(),hi(16,`tbody`),CI(17,Ua,14,18,`tr`,null,ha),xc()()(),II(19,Xa,3,3,`button`,31)),a&2){let t=VI(3);Ev(5),Jp(LD(6,5,`appointments.historyDate`)),Ev(3),Jp(LD(9,7,`appointments.historySpecialist`)),Ev(3),Jp(LD(12,9,`appointments.historySession`)),Ev(3),Jp(LD(15,11,`appointments.historyStatus`)),Ev(3),_I(t.history()),Ev(2),wI(t.hasMore()?19:-1)}}function Ja(a,d){if(a&1){let t=RI();hi(0,`button`,33),Pp(`click`,function(){lu(t);let n=VI(4);return uu(n.load(!0))}),gD(1),OD(2,`translate`),xc()}a&2&&(Ev(),Lc(` `,LD(2,1,`common.loadMore`),` `))}function tn(a,d){if(a&1&&(hi(0,`section`,27)(1,`p`,25),gD(2),OD(3,`translate`),xc(),hi(4,`h2`),gD(5),OD(6,`translate`),xc(),hi(7,`a`,34),gD(8),OD(9,`translate`),xc(),II(10,Ja,3,3,`button`,31),xc()),a&2){let t=VI(3);Ev(2),Jp(LD(3,4,`appointments.historyEmptyBadge`)),Ev(3),Jp(LD(6,6,`appointments.historyEmptyTitle`)),Ev(3),Jp(LD(9,8,`appointments.historyFindSpecialist`)),Ev(2),wI(t.hasMore()?10:-1)}}function en(a,d){if(a&1&&II(0,Ya,20,13)(1,tn,11,10,`section`,27),a&2){let t=VI(2);wI(t.history().length>0?0:1)}}function an(a,d){if(a&1&&(hi(0,`mat-card`,35)(1,`mat-card-content`,39)(2,`div`,40)(3,`span`,41),gD(4),OD(5,`date`),xc(),hi(6,`span`,42),gD(7),OD(8,`date`),xc(),hi(9,`span`,43),gD(10),OD(11,`date`),xc()(),hi(12,`div`,44)(13,`h2`,45),gD(14),OD(15,`translate`),xc(),hi(16,`p`,46),gD(17),OD(18,`date`),OD(19,`date`),xc(),hi(20,`p`),gD(21),OD(22,`translate`),OD(23,`translate`),xc(),hi(24,`p`,47),gD(25),OD(26,`translate`),xc()()()()),a&2){let t=d,e=VI(3);Ev(4),Jp(FD(5,10,t.startTime,`EEE`,void 0,e.language.current())),Ev(3),Jp(PD(8,15,t.startTime,`d`)),Ev(3),Jp(FD(11,18,t.startTime,`MMM`,void 0,e.language.current())),Ev(4),Jp(LD(15,23,`appointments.next`)),Ev(3),Xp(` `,FD(18,25,t.startTime,`fullDate`,void 0,e.language.current()),` · `,FD(19,30,t.startTime,`shortTime`,void 0,e.language.current()),` `),Ev(4),Xp(` `,PD(22,35,`appointments.with`,MD(43,pa,t.physiotherapistName)),` · `,LD(23,38,`specialties.`+t.specialty),` `),Ev(4),Xp(` `,t.diagnosis,` · `,PD(26,40,`appointments.session`,SD(45,ua,t.sessionNumber,t.totalSessions)),` `)}}function nn(a,d){if(a&1){let t=RI();hi(0,`button`,33),Pp(`click`,function(){lu(t);let n=VI(3);return uu(n.load(!0))}),gD(1),OD(2,`translate`),xc()}a&2&&(Ev(),Lc(` `,LD(2,1,`common.loadMore`),` `))}function rn(a,d){if(a&1&&(II(0,an,27,48,`mat-card`,35),hi(1,`mat-tab-group`,36)(2,`mat-tab`,37),OD(3,`translate`),Op(4,38),xc(),hi(5,`mat-tab`,37),OD(6,`translate`),Op(7,38),xc()(),II(8,nn,3,3,`button`,31)),a&2){let t,e=VI(2),n=zI(2);wI((t=e.next())?0:-1,t),Ev(2),Sp(`label`,LD(3,8,`appointments.upcoming`)+` (`+e.upcoming().length+`)`),Ev(2),Sp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,MD(12,Va,e.upcoming())),Ev(),Sp(`label`,LD(6,10,`appointments.history`)+` (`+e.history().length+`)`),Ev(2),Sp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,MD(14,Ha,e.history())),Ev(),wI(e.hasMore()?8:-1)}}function on(a,d){if(a&1){let t=RI();hi(0,`section`,1)(1,`header`,2)(2,`a`,3),OD(3,`translate`),xp(4,`img`,4),hi(5,`span`),gD(6,`FisioVital`),xc()(),hi(7,`nav`,5),OD(8,`translate`),hi(9,`a`,6),gD(10),OD(11,`translate`),xc(),hi(12,`a`,7),gD(13),OD(14,`translate`),xc(),hi(15,`a`,8),gD(16),OD(17,`translate`),xc(),hi(18,`a`,9),gD(19),OD(20,`translate`),xc()(),hi(21,`div`,10)(22,`a`,11),OD(23,`translate`),hi(24,`mat-icon`,12),gD(25,`notifications`),xc(),II(26,ja,2,1,`span`,13),xc(),hi(27,`div`,14)(28,`button`,15),OD(29,`translate`),Pp(`click`,function(){lu(t);let n=VI();return uu(n.profileMenuOpen.update(c=>!c))}),gD(30),xc(),II(31,$a,3,3,`button`,16),xc()()(),hi(32,`section`,17)(33,`header`,18)(34,`p`,19),xp(35,`span`,12),gD(36),OD(37,`translate`),xc(),II(38,Wa,9,9)(39,Qa,6,6),xc(),II(40,Ga,2,3,`mat-progress-bar`,20)(41,Ka,2,1)(42,en,2,1)(43,rn,9,16),xc()()}if(a&2){let t=d,e=VI();Ev(2),Mp(`aria-label`,LD(3,24,`layout.goHome`)),Ev(5),Mp(`aria-label`,LD(8,26,`home.navigation`)),Ev(3),Jp(LD(11,28,`home.navPanel`)),Ev(3),Jp(LD(14,30,`home.navSpecialists`)),Ev(2),Gp(`dashboard-nav__link--active`,!e.historyView()),Mp(`aria-current`,e.historyView()?null:`page`),Ev(),Lc(` `,LD(17,32,`home.navSessions`),` `),Ev(2),Gp(`dashboard-nav__link--active`,e.historyView()),Sp(`queryParams`,ND(44,Fa)),Mp(`aria-current`,e.historyView()?`page`:null),Ev(),Lc(` `,LD(20,34,`home.navHistory`),` `),Ev(3),Mp(`aria-label`,PD(23,36,`home.notificationsCount`,MD(45,za,e.notifications.unreadCount()))),Ev(4),wI(e.notifications.unreadCount()>0?26:-1),Ev(2),Mp(`aria-label`,PD(29,39,`home.profileMenu`,MD(47,pa,t.fullName)))(`aria-expanded`,e.profileMenuOpen()),Ev(2),Lc(` `,e.initials(t.fullName),` `),Ev(),wI(e.profileMenuOpen()?31:-1),Ev(),Gp(`page--history`,e.historyView()),Ev(4),Lc(` `,LD(37,42,e.historyView()?`appointments.historyEyebrow`:`appointments.eyebrow`),` `),Ev(2),wI(e.historyView()?38:39),Ev(2),wI(e.loading()?40:e.loadFailed()?41:e.historyView()?42:43)}}function dn(a,d){if(a&1&&(hi(0,`div`,48)(1,`mat-icon`,12),gD(2,`event_available`),xc(),hi(3,`p`),gD(4),OD(5,`translate`),xc()()),a&2){let t=VI().empty;Ev(4),Jp(LD(5,1,t))}}function sn(a,d){if(a&1){let t=RI();hi(0,`div`,58)(1,`button`,26),Pp(`click`,function(){lu(t);let n=VI().$implicit,c=VI(3);return uu(c.reschedule(n))}),gD(2),OD(3,`translate`),xc(),hi(4,`button`,59),Pp(`click`,function(){lu(t);let n=VI().$implicit,c=VI(3);return uu(c.cancel(n))}),gD(5),OD(6,`translate`),xc()()}a&2&&(Ev(2),Lc(` `,LD(3,2,`treatment.reschedule.action`),` `),Ev(3),Lc(` `,LD(6,4,`treatment.cancel.action`),` `))}function ln(a,d){if(a&1&&(hi(0,`li`,51)(1,`div`,52)(2,`span`,53),gD(3),OD(4,`date`),xc(),hi(5,`span`,54),gD(6),OD(7,`date`),xc()(),hi(8,`div`,55)(9,`p`,56),gD(10),OD(11,`date`),hi(12,`time`),gD(13),OD(14,`date`),OD(15,`date`),xc()(),hi(16,`p`),gD(17),OD(18,`translate`),xc(),hi(19,`p`,47),gD(20),OD(21,`translate`),xc()(),xp(22,`app-session-status-chip`,57),II(23,sn,7,6,`div`,58),xc()),a&2){let t=d.$implicit,e=VI(2).actions,n=VI();Gp(`item--cancelled`,t.status===`CANCELLED`||t.status===`LATE_CANCELLED`),Ev(3),Jp(PD(4,14,t.startTime,`d`)),Ev(3),Jp(FD(7,17,t.startTime,`MMM`,void 0,n.language.current())),Ev(4),Lc(` `,FD(11,22,t.startTime,`EEEE`,void 0,n.language.current()),`, `),Ev(2),Mp(`datetime`,t.startTime),Ev(),Xp(` `,FD(14,27,t.startTime,`shortTime`,void 0,n.language.current()),` – `,FD(15,32,t.endTime,`shortTime`,void 0,n.language.current()),` `),Ev(4),Xp(` `,t.physiotherapistName,` · `,LD(18,37,`specialties.`+t.specialty),` `),Ev(3),Xp(` `,t.diagnosis,` · `,PD(21,39,`appointments.session`,SD(42,ua,t.sessionNumber,t.totalSessions)),` `),Ev(2),Sp(`status`,t.status),Ev(),wI(e?23:-1)}}function cn(a,d){if(a&1&&(hi(0,`ul`,49),CI(1,ln,24,45,`li`,50,ha),xc()),a&2){let t=VI().items;Ev(),_I(t)}}function mn(a,d){if(a&1&&II(0,dn,6,3,`div`,48)(1,cn,3,0,`ul`,49),a&2){let t=d.items;wI(t.length===0?0:1)}}var bt=a=>new Date(a.startTime).getTime();var ba=class a$1{api=b(a);sessionsApi=b(at);dialog=b(tt);feedback=b(bt$1);router=b(ze);route=b(me);auth=b(u);notifications=b(d);language=b(l);profileMenuOpen=Fo(!1);historyView=Fo(!1);pageSize=20;page=0;hasMore=Fo(!1);loading=Fo(!0);loadFailed=Fo(!1);errorMessage=Fo(null);appointments=Fo([]);upcoming=$D(()=>this.appointments().filter(d=>d.status===`RESERVED`&&bt(d)>Date.now()).sort((d,t)=>bt(d)-bt(t)));history=$D(()=>this.appointments().filter(d=>!this.upcoming().includes(d)).sort((d,t)=>bt(t)-bt(d)));next=$D(()=>this.upcoming()[0]??null);initials(d){return d.trim().split(/\s+/).slice(0,2).map(t=>t[0]?.toLocaleUpperCase()??``).join(``)}constructor(){this.route.queryParamMap.pipe(g()).subscribe(d=>{this.historyView.set(d.get(`view`)===`history`)}),this.load()}load(d=!1){this.page=d?this.page+1:0,this.loading.set(!d),this.loadFailed.set(!1),this.api.getMine(this.page,this.pageSize).subscribe({next:t=>{this.appointments.set(d?[...this.appointments(),...t.appointments]:t.appointments),this.hasMore.set(this.page+1<(t.totalPages??0)),this.loading.set(!1)},error:t=>{this.errorMessage.set(s(t)),this.loadFailed.set(!0),this.loading.set(!1)}})}reschedule(d){this.dialog.open(Rt,{data:d,width:`640px`}).afterClosed().subscribe(t=>{t&&(this.feedback.success(t.lateChange?`treatment.reschedule.doneLate`:`treatment.reschedule.done`),this.load())})}cancel(d){this.dialog.open(P,{data:{title:`treatment.cancel.title`,message:`treatment.cancel.message`,confirm:`treatment.cancel.confirm`,warning:l$1(d.startTime)?`treatment.cancel.lateWarning`:void 0}}).afterClosed().pipe(Gt(Boolean),ul(()=>this.sessionsApi.cancel(d.sessionId))).subscribe({next:t=>{this.feedback.success(t.status===`LATE_CANCELLED`?`treatment.cancel.doneLate`:`treatment.cancel.done`),this.load()},error:t=>this.feedback.error(t)})}signOut(){this.auth.signOut(),this.notifications.clear(),this.router.navigate([`/sign-in`])}static ɵfac=function(t){return new(t||a$1)};static ɵcmp=QE({type:a$1,selectors:[[`app-my-appointments`]],decls:3,vars:1,consts:[[`list`,``],[1,`appointments-page`],[1,`dashboard-header`],[`routerLink`,`/patient/home`,1,`dashboard-brand`],[`src`,`/images/fisiovital-logo.png`,`alt`,``],[1,`dashboard-nav`],[`routerLink`,`/patient/home`,1,`dashboard-nav__link`],[`routerLink`,`/patient/physiotherapists`,1,`dashboard-nav__link`],[`routerLink`,`/patient/appointments`,1,`dashboard-nav__link`],[`routerLink`,`/patient/appointments`,1,`dashboard-nav__link`,3,`queryParams`],[1,`dashboard-actions`],[`routerLink`,`/patient/notifications`,1,`notification-indicator`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`notification-indicator__count`],[1,`profile`],[`type`,`button`,1,`profile__avatar`,3,`click`],[`type`,`button`,1,`profile__sign-out`],[`aria-labelledby`,`appointments-title`,1,`page`],[1,`page__header`],[1,`eyebrow`],[`mode`,`indeterminate`],[`type`,`button`,1,`profile__sign-out`,3,`click`],[`id`,`appointments-title`],[`role`,`alert`,1,`history-state`,`history-state--error`],[`role`,`alert`,1,`state`],[1,`history-state__badge`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`history-state`,`history-state--empty`],[1,`history-table-wrap`],[1,`history-table`],[`scope`,`col`],[`mat-stroked-button`,``,`type`,`button`,1,`load-more`],[1,`history-status`],[`mat-stroked-button`,``,`type`,`button`,1,`load-more`,3,`click`],[`mat-flat-button`,``,`routerLink`,`/patient/physiotherapists`],[`appearance`,`outlined`,`aria-labelledby`,`next-title`,1,`next`],[`mat-stretch-tabs`,`false`,`animationDuration`,`150ms`],[3,`label`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`next__content`],[`aria-hidden`,`true`,1,`next__date`],[1,`next__weekday`],[1,`next__day`],[1,`next__month`],[1,`next__info`],[`id`,`next-title`],[1,`next__when`],[1,`muted`],[1,`state`],[1,`list`],[1,`item`,3,`item--cancelled`],[1,`item`],[1,`item__date`],[1,`item__day`],[1,`item__month`],[1,`item__info`],[1,`item__title`],[3,`status`],[1,`item__actions`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(t,e){if(t&1&&(II(0,on,44,49,`section`,1),wp(1,mn,2,1,`ng-template`,null,0,jD)),t&2){let n;wI((n=e.auth.currentUser())?0:-1,n)}},dependencies:[sa$1,Bt,Mt$1,na,ea,aa,Mt,wt,j,L,ma,Yt,ca,tr,y,ca$1,Ye],styles:[`.page[_ngcontent-%COMP%]{max-width:880px;margin:0 auto;padding:32px 16px 48px}.page__header[_ngcontent-%COMP%]{margin-bottom:24px}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 4px;font:var(--%NS%mat-sys-headline-medium)}.page__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface-variant)}.muted[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:40px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin:16px 0 0;padding:0;list-style:none}.item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 16px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface)}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0}.item--cancelled[_ngcontent-%COMP%]   .item__info[_ngcontent-%COMP%]{opacity:.7}.item__date[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:48px;color:var(--%NS%mat-sys-primary)}.item__day[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small)}.item__month[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-medium);text-transform:uppercase}.item__info[_ngcontent-%COMP%]{flex:1;min-width:0}.item__title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small)}.item__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.load-more[_ngcontent-%COMP%]{display:block;margin:16px auto 0}.plan-form[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:420px;margin-bottom:24px}.form--inline[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;align-items:baseline;gap:12px;max-width:none}@media(max-width:599px){.item[_ngcontent-%COMP%]{flex-wrap:wrap}}.appointments-page[_ngcontent-%COMP%]{--%NS%mat-sys-primary: var(--%NS%fv-color-primary);--%NS%mat-sys-on-primary: var(--%NS%fv-color-surface);--%NS%mat-sys-primary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-primary-container: var(--%NS%fv-color-text);--%NS%mat-sys-tertiary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-tertiary-container: var(--%NS%fv-color-text);width:min(100%,1200px);box-sizing:border-box;margin:0 auto;padding:12px 24px 56px;min-height:100%;background:var(--%NS%fv-color-background)}.page[_ngcontent-%COMP%]{width:100%;max-width:none;box-sizing:border-box;margin:0;padding:36px 0 64px}.page__header[_ngcontent-%COMP%]{margin-bottom:22px}.page__header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{margin-bottom:16px;color:#5d8e48}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--%NS%fv-color-forest);font-size:clamp(34px,5vw,42px);font-weight:700;letter-spacing:-.5px;line-height:1.2}.page__header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{margin:8px 0 0;color:var(--%NS%fv-color-text-muted)}.eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;margin:0 0 12px;color:#5d8e48;font-size:11px;font-weight:700;letter-spacing:1.5px}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--%NS%fv-color-accent)}.next[_ngcontent-%COMP%]{margin-bottom:24px;border:1px solid #dce9d5;border-radius:20px;background:var(--%NS%fv-color-primary-soft);color:var(--%NS%fv-color-text)}.next__content[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;padding:20px!important}.next__date[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:72px;padding:10px 8px;border-radius:16px;background:var(--%NS%fv-color-surface);color:var(--%NS%fv-color-primary);box-shadow:0 4px 12px #23352a0d}.next__weekday[_ngcontent-%COMP%], .next__month[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-large);text-transform:uppercase}.next__day[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-display-small)}.next__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px;font:var(--%NS%mat-sys-title-medium)}.next__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0}.next__when[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-large)}.next__when[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.item__title[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}@media(max-width:760px){.appointments-page[_ngcontent-%COMP%]{padding:28px 16px 40px}.page[_ngcontent-%COMP%]{padding-top:28px}}`]})};export{ba as MyAppointments};