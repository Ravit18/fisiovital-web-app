import{t}from"./chunk-_f8Hb3f-.js";import{An as fe,Br as zp,C as EI,Ct as Pe,D as FI,Er as xD,Fn as gt,Fr as yp,Ft as Ra$1,Gn as kP,H as Hp,I as Gp,Ir as z,It as SD,Jt as VI,K as Ir,Kn as kl,Kt as UE,L as Gt,Mr as yI,Mt as Qp,N as GE,Nt as RI,Pn as gp,Pt as RP,R as HI,Rt as SP,S as ED,Sr as vp,Tn as dm,Tr as wp,Tt as Pp,U as ID,Un as kD,Vn as jI,Wn as kI,Wt as Tp,Y as K,Z as KI,Zt as Vp,_ as Ci,a as A,ar as pi,b as D,bn as bp,br as vD,ct as Mp,dr as rg,er as ng,et as LI,f as Bi,fn as _,ft as ND,g as CI,h as CD,ir as pI,it as MD,jn as gI,jt as Qh,kn as ei,kr as xm,l as Ap,lr as qh,mr as su,mt as Ne,or as pr,pr as sl,qn as kp,rr as og,s as Ah,st as Mc,tn as Wy,tt as LP,u as BE,vt as Oc,wt as Po,x as DD,xn as cD,xr as vI,y as Cp,yn as au,yr as uv,yt as Op,zn as ie}from"./chunk-BYCzGZpm.js";import{c as kn,l as lr,s as ar}from"./chunk-B0O1E7mk.js";import{a as T,c as l,d as g,g as le,m as V,n as wt,p as Nt,r as J,s as x,t as Mt,u as Ye,y as u}from"./main-FP2UPBT4.js";import{C as kt,E as os,I as yt,N as wt$1,O as p,i as Ee,n as Bs,t as Ae,u as Wi}from"./chunk-DJmgAEYy.js";import{c as _i,f as ci,o as Y,r as I,v as vi}from"./chunk-BTSdXcBf.js";import{n as Mt$1,t as Bt}from"./chunk-C7OwS9vm.js";import{a as ee,c as oe,i as dt,l as re,n as Jt,o as ie$1,r as ct,s as ne,t as E}from"./chunk-C8j-f6CU.js";import{t as s}from"./chunk-Cide2edk.js";import{t as bt$1}from"./chunk-BuNF-UdP.js";import{t as z$1}from"./chunk-CeiCNMN8.js";import{n as j,t as L}from"./chunk-DHdGtqTQ.js";import{t as y}from"./chunk-CDHJbAPn.js";import{r as g$1}from"./chunk-UndAvsgl.js";import{o as d}from"./chunk-CBLSWBKU.js";import{t as a}from"./chunk-dl0cAUBu.js";import"./chunk-D_HgXIJ-.js";import{t as Y$1}from"./chunk-CdtHnNCJ.js";var va=new A(`MAT_CARD_CONFIG`);var ea=(()=>{class a{appearance;constructor(){let t=D(va,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){return BE({type:a,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(n,c){n&2&&Hp(`mat-mdc-card-outlined`,c.appearance===`outlined`)(`mdc-card--outlined`,c.appearance===`outlined`)(`mat-mdc-card-filled`,c.appearance===`filled`)(`mdc-card--filled`,c.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,c){n&1&&(kI(),LI(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})})()}return a})();var aa=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=GE({type:a,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return a})();var na=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=UE({type:a});static ɵinj=kl({imports:[J]})}return a})();var ka=new A(`MatTabContent`);var wa=(()=>{class a{template=D(pr);static ɵfac=function(e){return new(e||a)};static ɵdir=GE({type:a,selectors:[[``,`matTabContent`,``]],features:[vD([{provide:ka,useExisting:a}])]})}return a})();var Ta=new A(`MatTabLabel`);var da=new A(`MAT_TAB`);var Ma=(()=>{class a extends _i{_closestTab=D(da,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=xm(a)))(n||a)}})();static ɵdir=GE({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[vD([{provide:Ta,useExisting:a}]),gp]})}return a})();var sa=new A(`MAT_TAB_GROUP`);var Yt=(()=>{class a{_viewContainerRef=D(Ci);_closestTabGroup=D(sa,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new K;position=null;origin=null;isActive=!1;constructor(){D(x).load(os)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new I(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,c){n&1&&LI(0)}return BE({type:a,selectors:[[`mat-tab`]],contentQueries:function(c,v,C){if(c&1&&Op(C,Ma,5)(C,wa,7,pr),c&2){let N;FI(N=jI())&&(v.templateLabel=N.first),FI(N=jI())&&(v._explicitContent=N.first)}},viewQuery:function(c,v){if(c&1&&kp(pr,7),c&2){let C;FI(C=jI())&&(v._implicitContent=C.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(c,v){c&2&&bp(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,kP],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[vD([{provide:da,useExisting:a}]),dm],ngContentSelectors:t,decls:1,vars:0,template:function(c,v){c&1&&(kI(),vp(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var qt=`mdc-tab-indicator--active`;var ia=`mdc-tab-indicator--no-transition`;var Kt=class{_items;_currentItem;constructor(d){this._items=d}hide(){this._items.forEach(d=>d.deactivateInkBar()),this._currentItem=void 0}alignToElement(d){let t=this._items.find(n=>n.elementRef.nativeElement===d),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Sa=(()=>{class a{_elementRef=D(Ir);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(qt);return}let n=e.getBoundingClientRect(),c=t.width/n.width,v=t.left-n.left;e.classList.add(ia),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${v}px) scaleX(${c})`),e.getBoundingClientRect(),e.classList.remove(ia),e.classList.add(qt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(qt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=GE({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,kP]}})}return a})();var la=(()=>{class a extends Sa{elementRef=D(Ir);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=xm(a)))(n||a)}})();static ɵdir=GE({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(bp(`aria-disabled`,!!n.disabled),Hp(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,kP]},features:[gp]})}return a})();var ra={passive:!0};var Ia=650;var Da=100;function Zt(a){let d=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(d)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(d)?d:``}var Na=(()=>{class a{_elementRef=D(Ir);_changeDetectorRef=D(RP);_viewportRuler=D(Y);_dir=D(T,{optional:!0});_ngZone=D(Ne);_platform=D(p);_sharedResizeObserver=D(z$1);_injector=D(ie);_renderer=D(Ra$1);_animationsDisabled=wt$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new K;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new K;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Pe;indexFocused=new Pe;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),ra),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),ra))}ngAfterContentInit(){let t=this._dir?this._dir.change:Ah(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Qh(32),og(this._destroyed)),n=this._viewportRuler.change(150).pipe(og(this._destroyed)),c=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ee(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Wy(c,{injector:this._injector}),qh(t,n,e,this._items.changes,this._itemsResized()).pipe(og(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),c()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(v=>{this.indexFocused.emit(v),this._setTabFocus(v)})}_itemsResized(){return typeof ResizeObserver!=`function`?gt:this._items.changes.pipe(rg(this._items),sl(t=>new _(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(c=>e.next(c));return t.forEach(c=>n.observe(c.elementRef.nativeElement)),()=>{n.disconnect()}}))),ng(1),Gt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!yt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:c,offsetWidth:v}=e.elementRef.nativeElement,C,N;this._getLayoutDirection()==`ltr`?(C=c,N=C+v):(N=this._tabListInner.nativeElement.offsetWidth-c,C=N-v);let P=this.scrollDistance,_=this.scrollDistance+n;C<P?this.scrollDistance-=P-C:N>_&&(this.scrollDistance+=Math.min(N-_,C-P))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Bi(Ia,Da).pipe(og(qh(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:c}=this._scrollHeader(t);(c===0||c>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=GE({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,kP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,LP]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Pa=(()=>{class a extends Na{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Kt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=xm(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],c=[`nextPaginator`],v=[`previousPaginator`];return BE({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(P,_,u){if(P&1&&Op(u,la,4),P&2){let f;FI(f=jI())&&(_._items=f)}},viewQuery:function(P,_){if(P&1&&kp(t,7)(e,7)(n,7)(c,5)(v,5),P&2){let u;FI(u=jI())&&(_._tabListContainer=u.first),FI(u=jI())&&(_._tabList=u.first),FI(u=jI())&&(_._tabListInner=u.first),FI(u=jI())&&(_._nextPaginator=u.first),FI(u=jI())&&(_._previousPaginator=u.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(P,_){P&2&&Hp(`mat-mdc-tab-header-pagination-controls-enabled`,_._showPaginationControls)(`mat-mdc-tab-header-rtl`,_._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,kP]},features:[gp],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(P,_){P&1&&(kI(),pi(0,`div`,5,0),Ap(`click`,function(){return _._handlePaginatorClick(`before`)})(`mousedown`,function(f){return _._handlePaginatorPress(`before`,f)})(`touchend`,function(){return _._stopInterval()}),Cp(2,`div`,6),Mc(),pi(3,`div`,7,1),Ap(`keydown`,function(f){return _._handleKeydown(f)}),pi(5,`div`,8,2),Ap(`cdkObserveContent`,function(){return _._onContentChanges()}),pi(7,`div`,9,3),LI(9),Mc()()(),pi(10,`div`,10,4),Ap(`mousedown`,function(f){return _._handlePaginatorPress(`after`,f)})(`click`,function(){return _._handlePaginatorClick(`after`)})(`touchend`,function(){return _._stopInterval()}),Cp(12,`div`,6),Mc()),P&2&&(Hp(`mat-mdc-tab-header-pagination-disabled`,_._disableScrollBefore),Tp(`matRippleDisabled`,_._disableScrollBefore||_.disableRipple),uv(3),Hp(`_mat-animation-noopable`,_._animationsDisabled),uv(2),bp(`aria-label`,_.ariaLabel||null)(`aria-labelledby`,_.ariaLabelledby||null),uv(5),Hp(`mat-mdc-tab-header-pagination-disabled`,_._disableScrollAfter),Tp(`matRippleDisabled`,_._disableScrollAfter||_.disableRipple))},dependencies:[Bs,Wi],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Ba=new A(`MAT_TABS_CONFIG`);var oa=(()=>{class a extends vi{_host=D(Ut);_ngZone=D(Ne);_centeringSub=z.EMPTY;_leavingSub=z.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(rg(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=xm(a)))(n||a)}})();static ɵdir=GE({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[gp]})}return a})();var Ut=(()=>{class a{_elementRef=D(Ir);_dir=D(T,{optional:!0});_ngZone=D(Ne);_injector=D(ie);_renderer=D(Ra$1);_diAnimationsDisabled=wt$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=z.EMPTY;_position;_previousPosition;_onCentering=new Pe;_beforeCentering=new Pe;_afterLeavingCenter=new Pe;_onCentered=new Pe(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=D(RP);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Wy(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Wy(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,c){}return BE({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(c,v){if(c&1&&kp(oa,5)(t,5),c&2){let C;FI(C=jI())&&(v._portalHost=C.first),FI(C=jI())&&(v._contentElement=C.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(c,v){c&2&&bp(`inert`,v._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(c,v){c&1&&(pi(0,`div`,1,0),yp(2,e,0,0,`ng-template`,2),Mc()),c&2&&Hp(`mat-tab-body-content-left`,v._position===`left`)(`mat-tab-body-content-right`,v._position===`right`)(`mat-tab-body-content-can-animate`,v._position===`center`||v._previousPosition===`center`)},dependencies:[oa,ci],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var ca=(()=>{class a{_elementRef=D(Ir);_changeDetectorRef=D(RP);_ngZone=D(Ne);_tabsSubscription=z.EMPTY;_tabLabelSubscription=z.EMPTY;_tabBodySubscription=z.EMPTY;_diAnimationsDisabled=wt$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ei;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Zt(t.body),this._headerAnimationDuration=Zt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Zt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Pe;focusChange=new Pe;animationDone=new Pe;selectedTabChange=new Pe(!0);_groupId;_isServer=!D(p).isBrowser;constructor(){let t=D(Ba,{optional:!0});this._groupId=D(Ae).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,c)=>n.isActive=c===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let c=0;c<e.length;c++)if(e[c].isActive){this._indexToSelect=this._selectedIndex=c,this._lastFocusedTabIndex=null,n=e[c];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(rg(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Xt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=qh(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function c(u,f){}function v(u,f){if(u&1&&yp(0,c,0,0,`ng-template`,12),u&2){let m=RI().$implicit;Tp(`cdkPortalOutlet`,m.templateLabel)}}function C(u,f){if(u&1&&cD(0),u&2){let m=RI().$implicit;Gp(m.textLabel)}}function N(u,f){if(u&1){let m=CI();pi(0,`div`,7,2),Ap(`click`,function(){let y=su(m),B=y.$implicit,Ot=y.$index,ga=RI(),_a=HI(1);return au(ga._handleClick(B,_a,Ot))})(`cdkFocusChange`,function(y){let B=su(m).$index,Ot=RI();return au(Ot._tabFocusChanged(y,B))}),Cp(2,`span`,8)(3,`div`,9),pi(4,`span`,10)(5,`span`,11),pI(6,v,1,1,null,12)(7,C,1,1),Mc()()()}if(u&2){let m=f.$implicit,x=f.$index,y=HI(1),B=RI();KI(m.labelClass),Hp(`mdc-tab--active`,B.selectedIndex===x),Tp(`id`,B._getTabLabelId(m,x))(`disabled`,m.disabled)(`fitInkBarToContent`,B.fitInkBarToContent),bp(`tabIndex`,B._getTabIndex(x))(`aria-posinset`,x+1)(`aria-setsize`,B._tabs.length)(`aria-controls`,B._getTabContentId(x))(`aria-selected`,B.selectedIndex===x)(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,!m.ariaLabel&&m.ariaLabelledby?m.ariaLabelledby:null),uv(3),Tp(`matRippleTrigger`,y)(`matRippleDisabled`,m.disabled||B.disableRipple),uv(3),gI(m.templateLabel?6:7)}}function P(u,f){u&1&&LI(0)}function _(u,f){if(u&1){let m=CI();pi(0,`mat-tab-body`,13),Ap(`_onCentered`,function(){su(m);let y=RI();return au(y._removeTabBodyWrapperHeight())})(`_onCentering`,function(y){su(m);let B=RI();return au(B._setTabBodyWrapperHeight(y))})(`_beforeCentering`,function(y){su(m);let B=RI();return au(B._bodyCentered(y))}),Mc()}if(u&2){let m=f.$implicit,x=f.$index,y=RI();KI(m.bodyClass),Tp(`id`,y._getTabContentId(x))(`content`,m.content)(`position`,m.position)(`animationDuration`,y._bodyAnimationDuration)(`preserveContent`,y.preserveContent),bp(`tabindex`,y.contentTabIndex!=null&&y.selectedIndex===x?y.contentTabIndex:null)(`aria-labelledby`,y._getTabLabelId(m,x))(`aria-hidden`,y.selectedIndex!==x)}}return BE({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(f,m,x){if(f&1&&Op(x,Yt,5),f&2){let y;FI(y=jI())&&(m._allTabs=y)}},viewQuery:function(f,m){if(f&1&&kp(t,5)(e,5)(Ut,5),f&2){let x;FI(x=jI())&&(m._tabBodyWrapper=x.first),FI(x=jI())&&(m._tabHeader=x.first),FI(x=jI())&&(m._tabBodies=x)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(f,m){f&2&&(bp(`mat-align-tabs`,m.alignTabs),KI(`mat-`+(m.color||`primary`)),Vp(`--%NS%mat-tab-body-animation-duration`,m._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,m._headerAnimationDuration),Hp(`mat-mdc-tab-group-dynamic-height`,m.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,m.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,m.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,kP],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,kP],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,kP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,LP],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,LP],disablePagination:[2,`disablePagination`,`disablePagination`,kP],disableRipple:[2,`disableRipple`,`disableRipple`,kP],preserveContent:[2,`preserveContent`,`preserveContent`,kP],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[vD([{provide:sa,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(f,m){f&1&&(kI(),pi(0,`mat-tab-header`,3,0),Ap(`indexFocused`,function(y){return m._focusChanged(y)})(`selectFocusedIndex`,function(y){return m.selectedIndex=y}),vI(2,N,8,17,`div`,4,yI),Mc(),pI(4,P,1,0),pi(5,`div`,5,1),vI(7,_,1,10,`mat-tab-body`,6,yI),Mc()),f&2&&(Tp(`selectedIndex`,m.selectedIndex||0)(`disableRipple`,m.disableRipple)(`disablePagination`,m.disablePagination),wp(`aria-label`,m.ariaLabel)(`aria-labelledby`,m.ariaLabelledby),uv(2),EI(m._tabs),uv(2),gI(m._isServer?4:-1),uv(),Hp(`_mat-animation-noopable`,m._bodyAnimationsDisabled()),uv(2),EI(m._tabs))},dependencies:[Pa,la,kt,Bs,vi,Ut],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Xt=class{index;tab};var ma=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=UE({type:a});static ɵinj=kl({imports:[J]})}return a})();var at=class a{http=D(kn);baseUrl=`${t.apiBaseUrl}/sessions`;reschedule(d,t){return this.http.patch(`${this.baseUrl}/${d}/reschedule`,{newSlotId:t})}cancel(d){return this.http.patch(`${this.baseUrl}/${d}/cancel`,{})}static ɵfac=function(t){return new(t||a)};static ɵprov=fe({token:a,factory:a.ɵfac,providedIn:`root`})};function Ra(a,d){a&1&&(pi(0,`p`,1),cD(1),CD(2,`translate`),Mc()),a&2&&(uv(),Gp(ND(2,1,`treatment.reschedule.lateWarning`)))}function Oa(a,d){if(a&1&&(pi(0,`p`,1),cD(1),Mc()),a&2){let t=RI();uv(),Gp(t.errorMessage())}}var Rt=class a{api=D(at);dialogRef=D(E);slotPicker=SP(Y$1);language=D(l);appointment=D(dt);late=g$1(this.appointment.startTime);saving=Po(!1);errorMessage=Po(null);choose(d){this.saving.set(!0),this.errorMessage.set(null),this.api.reschedule(this.appointment.sessionId,d.id).subscribe({next:t=>this.dialogRef.close(t),error:t=>{this.saving.set(!1),this.errorMessage.set(s(t)),this.slotPicker()?.reload()}})}static ɵfac=function(t){return new(t||a)};static ɵcmp=BE({type:a,selectors:[[`app-reschedule-dialog`]],viewQuery:function(t,e){t&1&&Pp(e.slotPicker,Y$1,5),t&2&&VI()},decls:19,vars:26,consts:[[`mat-dialog-title`,``],[`role`,`alert`,1,`warning`],[3,`picked`,`physiotherapistId`,`busy`],[`align`,`end`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``,1,`reschedule-dialog__back`]],template:function(t,e){t&1&&(pi(0,`h2`,0),cD(1),CD(2,`translate`),Mc(),pi(3,`mat-dialog-content`)(4,`p`),cD(5),CD(6,`translate`),pi(7,`strong`),cD(8),CD(9,`date`),CD(10,`date`),Mc(),cD(11),Mc(),pI(12,Ra,3,3,`p`,1),pI(13,Oa,2,1,`p`,1),pi(14,`app-slot-picker`,2),Ap(`picked`,function(c){return e.choose(c)}),Mc()(),pi(15,`mat-dialog-actions`,3)(16,`button`,4),cD(17),CD(18,`translate`),Mc()()),t&2&&(uv(),Gp(ND(2,10,`treatment.reschedule.title`)),uv(4),Oc(` `,ND(6,12,`treatment.reschedule.current`),` `),uv(3),zp(` `,SD(9,14,e.appointment.startTime,`fullDate`,void 0,e.language.current()),` · `,SD(10,19,e.appointment.startTime,`shortTime`,void 0,e.language.current()),` `),uv(3),Oc(` (`,e.appointment.physiotherapistName,`) `),uv(),gI(e.late?12:-1),uv(),gI(e.errorMessage()?13:-1),uv(),Tp(`physiotherapistId`,e.appointment.physiotherapistId)(`busy`,e.saving()),uv(3),Oc(` `,ND(18,24,`common.back`),` `))},dependencies:[Bt,Mt$1,oe,Jt,ee,ne,ie$1,Y$1,lr,Ye],styles:[`.reschedule-dialog__back[_ngcontent-%COMP%]{color:var(--%NS%fv-color-primary)!important}.warning[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var Fa=()=>({view:`history`});var za=a=>({count:a});var pa=a=>({name:a});var Va=a=>({items:a,empty:`appointments.emptyUpcoming`,actions:!0});var Ha=a=>({items:a,empty:`appointments.emptyHistory`});var ua=(a,d)=>({number:a,total:d});var ha=(a,d)=>d.sessionId;function ja(a,d){if(a&1&&(pi(0,`span`,13),cD(1),Mc()),a&2){let t=RI(2);uv(),Gp(t.notifications.unreadCount())}}function $a(a,d){if(a&1){let t=CI();pi(0,`button`,21),Ap(`click`,function(){su(t);let n=RI(2);return au(n.signOut())}),cD(1),CD(2,`translate`),Mc()}a&2&&(uv(),Oc(` `,ND(2,1,`layout.signOut`),` `))}function Wa(a,d){a&1&&(pi(0,`h1`,22),cD(1),CD(2,`translate`),pi(3,`span`),cD(4),CD(5,`translate`),Mc()(),pi(6,`p`),cD(7),CD(8,`translate`),Mc()),a&2&&(uv(),Oc(` `,ND(2,3,`appointments.historyTitlePrefix`),` `),uv(3),Gp(ND(5,5,`appointments.historyTitleAccent`)),uv(3),Gp(ND(8,7,`appointments.historySubtitle`)))}function Qa(a,d){a&1&&(pi(0,`h1`,22),cD(1),CD(2,`translate`),Mc(),pi(3,`p`),cD(4),CD(5,`translate`),Mc()),a&2&&(uv(),Gp(ND(2,2,`appointments.title`)),uv(3),Gp(ND(5,4,`appointments.subtitle`)))}function Ga(a,d){a&1&&(Cp(0,`mat-progress-bar`,20),CD(1,`translate`)),a&2&&bp(`aria-label`,ND(1,1,`common.loading`))}function qa(a,d){if(a&1){let t=CI();pi(0,`section`,23)(1,`p`,25),cD(2),CD(3,`translate`),Mc(),pi(4,`h2`),cD(5),CD(6,`translate`),Mc(),pi(7,`p`),cD(8),CD(9,`translate`),Mc(),pi(10,`button`,26),Ap(`click`,function(){su(t);let n=RI(3);return au(n.load())}),cD(11),CD(12,`translate`),Mc()()}if(a&2){let t=RI(3);uv(2),Gp(ND(3,4,`appointments.historyErrorBadge`)),uv(3),Gp(ND(6,6,`appointments.historyErrorTitle`)),uv(3),Gp(t.errorMessage()??ND(9,8,`errors.load`)),uv(3),Gp(ND(12,10,`common.retry`))}}function Za(a,d){if(a&1){let t=CI();pi(0,`div`,24)(1,`mat-icon`,12),cD(2,`cloud_off`),Mc(),pi(3,`p`),cD(4),CD(5,`translate`),Mc(),pi(6,`button`,26),Ap(`click`,function(){su(t);let n=RI(3);return au(n.load())}),cD(7),CD(8,`translate`),Mc()()}if(a&2){let t=RI(3);uv(4),Gp(t.errorMessage()??ND(5,2,`errors.load`)),uv(3),Gp(ND(8,4,`common.retry`))}}function Ka(a,d){if(a&1&&pI(0,qa,13,12,`section`,23)(1,Za,9,6,`div`,24),a&2){let t=RI(2);gI(t.historyView()?0:1)}}function Ua(a,d){if(a&1&&(pi(0,`tr`)(1,`td`)(2,`time`),cD(3),CD(4,`date`),Mc()(),pi(5,`td`),cD(6),Mc(),pi(7,`td`),cD(8),CD(9,`translate`),Mc(),pi(10,`td`)(11,`span`,32),cD(12),CD(13,`translate`),Mc()()()),a&2){let t=d.$implicit,e=RI(4);uv(2),bp(`datetime`,t.startTime),uv(),Oc(` `,SD(4,9,t.startTime,`dd/MM/yyyy · HH:mm`,void 0,e.language.current()),` `),uv(3),Gp(t.physiotherapistName),uv(2),Qp(``,t.sessionNumber,` `,ND(9,14,`appointments.historyOf`),` `,t.totalSessions),uv(3),KI(`history-status history-status--`+t.status.toLowerCase()),uv(),Oc(` `,ND(13,16,`sessionStatus.`+t.status),` `)}}function Xa(a,d){if(a&1){let t=CI();pi(0,`button`,33),Ap(`click`,function(){su(t);let n=RI(4);return au(n.load(!0))}),cD(1),CD(2,`translate`),Mc()}a&2&&(uv(),Oc(` `,ND(2,1,`common.loadMore`),` `))}function Ya(a,d){if(a&1&&(pi(0,`div`,28)(1,`table`,29)(2,`thead`)(3,`tr`)(4,`th`,30),cD(5),CD(6,`translate`),Mc(),pi(7,`th`,30),cD(8),CD(9,`translate`),Mc(),pi(10,`th`,30),cD(11),CD(12,`translate`),Mc(),pi(13,`th`,30),cD(14),CD(15,`translate`),Mc()()(),pi(16,`tbody`),vI(17,Ua,14,18,`tr`,null,ha),Mc()()(),pI(19,Xa,3,3,`button`,31)),a&2){let t=RI(3);uv(5),Gp(ND(6,5,`appointments.historyDate`)),uv(3),Gp(ND(9,7,`appointments.historySpecialist`)),uv(3),Gp(ND(12,9,`appointments.historySession`)),uv(3),Gp(ND(15,11,`appointments.historyStatus`)),uv(3),EI(t.history()),uv(2),gI(t.hasMore()?19:-1)}}function Ja(a,d){if(a&1){let t=CI();pi(0,`button`,33),Ap(`click`,function(){su(t);let n=RI(4);return au(n.load(!0))}),cD(1),CD(2,`translate`),Mc()}a&2&&(uv(),Oc(` `,ND(2,1,`common.loadMore`),` `))}function tn(a,d){if(a&1&&(pi(0,`section`,27)(1,`p`,25),cD(2),CD(3,`translate`),Mc(),pi(4,`h2`),cD(5),CD(6,`translate`),Mc(),pi(7,`a`,34),cD(8),CD(9,`translate`),Mc(),pI(10,Ja,3,3,`button`,31),Mc()),a&2){let t=RI(3);uv(2),Gp(ND(3,4,`appointments.historyEmptyBadge`)),uv(3),Gp(ND(6,6,`appointments.historyEmptyTitle`)),uv(3),Gp(ND(9,8,`appointments.historyFindSpecialist`)),uv(2),gI(t.hasMore()?10:-1)}}function en(a,d){if(a&1&&pI(0,Ya,20,13)(1,tn,11,10,`section`,27),a&2){let t=RI(2);gI(t.history().length>0?0:1)}}function an(a,d){if(a&1&&(pi(0,`mat-card`,35)(1,`mat-card-content`,39)(2,`div`,40)(3,`span`,41),cD(4),CD(5,`date`),Mc(),pi(6,`span`,42),cD(7),CD(8,`date`),Mc(),pi(9,`span`,43),cD(10),CD(11,`date`),Mc()(),pi(12,`div`,44)(13,`h2`,45),cD(14),CD(15,`translate`),Mc(),pi(16,`p`,46),cD(17),CD(18,`date`),CD(19,`date`),Mc(),pi(20,`p`),cD(21),CD(22,`translate`),CD(23,`translate`),Mc(),pi(24,`p`,47),cD(25),CD(26,`translate`),Mc()()()()),a&2){let t=d,e=RI(3);uv(4),Gp(SD(5,10,t.startTime,`EEE`,void 0,e.language.current())),uv(3),Gp(MD(8,15,t.startTime,`d`)),uv(3),Gp(SD(11,18,t.startTime,`MMM`,void 0,e.language.current())),uv(4),Gp(ND(15,23,`appointments.next`)),uv(3),zp(` `,SD(18,25,t.startTime,`fullDate`,void 0,e.language.current()),` · `,SD(19,30,t.startTime,`shortTime`,void 0,e.language.current()),` `),uv(4),zp(` `,MD(22,35,`appointments.with`,ID(43,pa,t.physiotherapistName)),` · `,ND(23,38,`specialties.`+t.specialty),` `),uv(4),zp(` `,t.diagnosis,` · `,MD(26,40,`appointments.session`,DD(45,ua,t.sessionNumber,t.totalSessions)),` `)}}function nn(a,d){if(a&1){let t=CI();pi(0,`button`,33),Ap(`click`,function(){su(t);let n=RI(3);return au(n.load(!0))}),cD(1),CD(2,`translate`),Mc()}a&2&&(uv(),Oc(` `,ND(2,1,`common.loadMore`),` `))}function rn(a,d){if(a&1&&(pI(0,an,27,48,`mat-card`,35),pi(1,`mat-tab-group`,36)(2,`mat-tab`,37),CD(3,`translate`),Mp(4,38),Mc(),pi(5,`mat-tab`,37),CD(6,`translate`),Mp(7,38),Mc()(),pI(8,nn,3,3,`button`,31)),a&2){let t,e=RI(2),n=HI(2);gI((t=e.next())?0:-1,t),uv(2),Tp(`label`,ND(3,8,`appointments.upcoming`)+` (`+e.upcoming().length+`)`),uv(2),Tp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,ID(12,Va,e.upcoming())),uv(),Tp(`label`,ND(6,10,`appointments.history`)+` (`+e.history().length+`)`),uv(2),Tp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,ID(14,Ha,e.history())),uv(),gI(e.hasMore()?8:-1)}}function on(a,d){if(a&1){let t=CI();pi(0,`section`,1)(1,`header`,2)(2,`a`,3),CD(3,`translate`),Cp(4,`img`,4),pi(5,`span`),cD(6,`FisioVital`),Mc()(),pi(7,`nav`,5),CD(8,`translate`),pi(9,`a`,6),cD(10),CD(11,`translate`),Mc(),pi(12,`a`,7),cD(13),CD(14,`translate`),Mc(),pi(15,`a`,8),cD(16),CD(17,`translate`),Mc(),pi(18,`a`,9),cD(19),CD(20,`translate`),Mc()(),pi(21,`div`,10)(22,`a`,11),CD(23,`translate`),pi(24,`mat-icon`,12),cD(25,`notifications`),Mc(),pI(26,ja,2,1,`span`,13),Mc(),pi(27,`div`,14)(28,`button`,15),CD(29,`translate`),Ap(`click`,function(){su(t);let n=RI();return au(n.profileMenuOpen.update(c=>!c))}),cD(30),Mc(),pI(31,$a,3,3,`button`,16),Mc()()(),pi(32,`section`,17)(33,`header`,18)(34,`p`,19),Cp(35,`span`,12),cD(36),CD(37,`translate`),Mc(),pI(38,Wa,9,9)(39,Qa,6,6),Mc(),pI(40,Ga,2,3,`mat-progress-bar`,20)(41,Ka,2,1)(42,en,2,1)(43,rn,9,16),Mc()()}if(a&2){let t=d,e=RI();uv(2),bp(`aria-label`,ND(3,24,`layout.goHome`)),uv(5),bp(`aria-label`,ND(8,26,`home.navigation`)),uv(3),Gp(ND(11,28,`home.navPanel`)),uv(3),Gp(ND(14,30,`home.navSpecialists`)),uv(2),Hp(`dashboard-nav__link--active`,!e.historyView()),bp(`aria-current`,e.historyView()?null:`page`),uv(),Oc(` `,ND(17,32,`home.navSessions`),` `),uv(2),Hp(`dashboard-nav__link--active`,e.historyView()),Tp(`queryParams`,ED(44,Fa)),bp(`aria-current`,e.historyView()?`page`:null),uv(),Oc(` `,ND(20,34,`home.navHistory`),` `),uv(3),bp(`aria-label`,MD(23,36,`home.notificationsCount`,ID(45,za,e.notifications.unreadCount()))),uv(4),gI(e.notifications.unreadCount()>0?26:-1),uv(2),bp(`aria-label`,MD(29,39,`home.profileMenu`,ID(47,pa,t.fullName)))(`aria-expanded`,e.profileMenuOpen()),uv(2),Oc(` `,e.initials(t.fullName),` `),uv(),gI(e.profileMenuOpen()?31:-1),uv(),Hp(`page--history`,e.historyView()),uv(4),Oc(` `,ND(37,42,e.historyView()?`appointments.historyEyebrow`:`appointments.eyebrow`),` `),uv(2),gI(e.historyView()?38:39),uv(2),gI(e.loading()?40:e.loadFailed()?41:e.historyView()?42:43)}}function dn(a,d){if(a&1&&(pi(0,`div`,48)(1,`mat-icon`,12),cD(2,`event_available`),Mc(),pi(3,`p`),cD(4),CD(5,`translate`),Mc()()),a&2){let t=RI().empty;uv(4),Gp(ND(5,1,t))}}function sn(a,d){if(a&1){let t=CI();pi(0,`div`,58)(1,`button`,26),Ap(`click`,function(){su(t);let n=RI().$implicit,c=RI(3);return au(c.reschedule(n))}),cD(2),CD(3,`translate`),Mc(),pi(4,`button`,59),Ap(`click`,function(){su(t);let n=RI().$implicit,c=RI(3);return au(c.cancel(n))}),cD(5),CD(6,`translate`),Mc()()}a&2&&(uv(2),Oc(` `,ND(3,2,`treatment.reschedule.action`),` `),uv(3),Oc(` `,ND(6,4,`treatment.cancel.action`),` `))}function ln(a,d){if(a&1&&(pi(0,`li`,51)(1,`div`,52)(2,`span`,53),cD(3),CD(4,`date`),Mc(),pi(5,`span`,54),cD(6),CD(7,`date`),Mc()(),pi(8,`div`,55)(9,`p`,56),cD(10),CD(11,`date`),pi(12,`time`),cD(13),CD(14,`date`),CD(15,`date`),Mc()(),pi(16,`p`),cD(17),CD(18,`translate`),Mc(),pi(19,`p`,47),cD(20),CD(21,`translate`),Mc()(),Cp(22,`app-session-status-chip`,57),pI(23,sn,7,6,`div`,58),Mc()),a&2){let t=d.$implicit,e=RI(2).actions,n=RI();Hp(`item--cancelled`,t.status===`CANCELLED`||t.status===`LATE_CANCELLED`),uv(3),Gp(MD(4,14,t.startTime,`d`)),uv(3),Gp(SD(7,17,t.startTime,`MMM`,void 0,n.language.current())),uv(4),Oc(` `,SD(11,22,t.startTime,`EEEE`,void 0,n.language.current()),`, `),uv(2),bp(`datetime`,t.startTime),uv(),zp(` `,SD(14,27,t.startTime,`shortTime`,void 0,n.language.current()),` – `,SD(15,32,t.endTime,`shortTime`,void 0,n.language.current()),` `),uv(4),zp(` `,t.physiotherapistName,` · `,ND(18,37,`specialties.`+t.specialty),` `),uv(3),zp(` `,t.diagnosis,` · `,MD(21,39,`appointments.session`,DD(42,ua,t.sessionNumber,t.totalSessions)),` `),uv(2),Tp(`status`,t.status),uv(),gI(e?23:-1)}}function cn(a,d){if(a&1&&(pi(0,`ul`,49),vI(1,ln,24,45,`li`,50,ha),Mc()),a&2){let t=RI().items;uv(),EI(t)}}function mn(a,d){if(a&1&&pI(0,dn,6,3,`div`,48)(1,cn,3,0,`ul`,49),a&2){let t=d.items;gI(t.length===0?0:1)}}var bt=a=>new Date(a.startTime).getTime();var ba=class a$1{api=D(a);sessionsApi=D(at);dialog=D(ct);feedback=D(bt$1);router=D(le);route=D(V);auth=D(u);notifications=D(d);language=D(l);profileMenuOpen=Po(!1);historyView=Po(!1);pageSize=20;page=0;hasMore=Po(!1);loading=Po(!0);loadFailed=Po(!1);errorMessage=Po(null);appointments=Po([]);upcoming=kD(()=>this.appointments().filter(d=>d.status===`RESERVED`&&bt(d)>Date.now()).sort((d,t)=>bt(d)-bt(t)));history=kD(()=>this.appointments().filter(d=>!this.upcoming().includes(d)).sort((d,t)=>bt(t)-bt(d)));next=kD(()=>this.upcoming()[0]??null);initials(d){return d.trim().split(/\s+/).slice(0,2).map(t=>t[0]?.toLocaleUpperCase()??``).join(``)}constructor(){this.route.queryParamMap.pipe(g()).subscribe(d=>{this.historyView.set(d.get(`view`)===`history`)}),this.load()}load(d=!1){this.page=d?this.page+1:0,this.loading.set(!d),this.loadFailed.set(!1),this.api.getMine(this.page,this.pageSize).subscribe({next:t=>{this.appointments.set(d?[...this.appointments(),...t.appointments]:t.appointments),this.hasMore.set(this.page+1<(t.totalPages??0)),this.loading.set(!1)},error:t=>{this.errorMessage.set(s(t)),this.loadFailed.set(!0),this.loading.set(!1)}})}reschedule(d){this.dialog.open(Rt,{data:d,width:`640px`}).afterClosed().subscribe(t=>{t&&(this.feedback.success(t.lateChange?`treatment.reschedule.doneLate`:`treatment.reschedule.done`),this.load())})}cancel(d){this.dialog.open(re,{data:{title:`treatment.cancel.title`,message:`treatment.cancel.message`,confirm:`treatment.cancel.confirm`,warning:g$1(d.startTime)?`treatment.cancel.lateWarning`:void 0}}).afterClosed().pipe(Gt(Boolean),sl(()=>this.sessionsApi.cancel(d.sessionId))).subscribe({next:t=>{this.feedback.success(t.status===`LATE_CANCELLED`?`treatment.cancel.doneLate`:`treatment.cancel.done`),this.load()},error:t=>this.feedback.error(t)})}signOut(){this.auth.signOut(),this.notifications.clear(),this.router.navigate([`/sign-in`])}static ɵfac=function(t){return new(t||a$1)};static ɵcmp=BE({type:a$1,selectors:[[`app-my-appointments`]],decls:3,vars:1,consts:[[`list`,``],[1,`appointments-page`],[1,`dashboard-header`],[`routerLink`,`/patient/home`,1,`dashboard-brand`],[`src`,`/images/fisiovital-logo.png`,`alt`,``],[1,`dashboard-nav`],[`routerLink`,`/patient/home`,1,`dashboard-nav__link`],[`routerLink`,`/patient/physiotherapists`,1,`dashboard-nav__link`],[`routerLink`,`/patient/appointments`,1,`dashboard-nav__link`],[`routerLink`,`/patient/appointments`,1,`dashboard-nav__link`,3,`queryParams`],[1,`dashboard-actions`],[`routerLink`,`/patient/notifications`,1,`notification-indicator`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`notification-indicator__count`],[1,`profile`],[`type`,`button`,1,`profile__avatar`,3,`click`],[`type`,`button`,1,`profile__sign-out`],[`aria-labelledby`,`appointments-title`,1,`page`],[1,`page__header`],[1,`eyebrow`],[`mode`,`indeterminate`],[`type`,`button`,1,`profile__sign-out`,3,`click`],[`id`,`appointments-title`],[`role`,`alert`,1,`history-state`,`history-state--error`],[`role`,`alert`,1,`state`],[1,`history-state__badge`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[1,`history-state`,`history-state--empty`],[1,`history-table-wrap`],[1,`history-table`],[`scope`,`col`],[`mat-stroked-button`,``,`type`,`button`,1,`load-more`],[1,`history-status`],[`mat-stroked-button`,``,`type`,`button`,1,`load-more`,3,`click`],[`mat-flat-button`,``,`routerLink`,`/patient/physiotherapists`],[`appearance`,`outlined`,`aria-labelledby`,`next-title`,1,`next`],[`mat-stretch-tabs`,`false`,`animationDuration`,`150ms`],[3,`label`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`next__content`],[`aria-hidden`,`true`,1,`next__date`],[1,`next__weekday`],[1,`next__day`],[1,`next__month`],[1,`next__info`],[`id`,`next-title`],[1,`next__when`],[1,`muted`],[1,`state`],[1,`list`],[1,`item`,3,`item--cancelled`],[1,`item`],[1,`item__date`],[1,`item__day`],[1,`item__month`],[1,`item__info`],[1,`item__title`],[3,`status`],[1,`item__actions`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(t,e){if(t&1&&(pI(0,on,44,49,`section`,1),yp(1,mn,2,1,`ng-template`,null,0,xD)),t&2){let n;gI((n=e.auth.currentUser())?0:-1,n)}},dependencies:[ar,Bt,Mt$1,na,ea,aa,Mt,wt,j,L,ma,Yt,ca,Nt,y,lr,Ye],styles:[`.page[_ngcontent-%COMP%]{max-width:880px;margin:0 auto;padding:32px 16px 48px}.page__header[_ngcontent-%COMP%]{margin-bottom:24px}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 4px;font:var(--%NS%mat-sys-headline-medium)}.page__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface-variant)}.muted[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant)}.state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:40px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin:16px 0 0;padding:0;list-style:none}.item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 16px;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface)}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0}.item--cancelled[_ngcontent-%COMP%]   .item__info[_ngcontent-%COMP%]{opacity:.7}.item__date[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:48px;color:var(--%NS%mat-sys-primary)}.item__day[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small)}.item__month[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-medium);text-transform:uppercase}.item__info[_ngcontent-%COMP%]{flex:1;min-width:0}.item__title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small)}.item__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.load-more[_ngcontent-%COMP%]{display:block;margin:16px auto 0}.plan-form[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:420px;margin-bottom:24px}.form--inline[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;align-items:baseline;gap:12px;max-width:none}@media(max-width:599px){.item[_ngcontent-%COMP%]{flex-wrap:wrap}}.appointments-page[_ngcontent-%COMP%]{--%NS%mat-sys-primary: var(--%NS%fv-color-primary);--%NS%mat-sys-on-primary: var(--%NS%fv-color-surface);--%NS%mat-sys-primary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-primary-container: var(--%NS%fv-color-text);--%NS%mat-sys-tertiary-container: var(--%NS%fv-color-primary-soft);--%NS%mat-sys-on-tertiary-container: var(--%NS%fv-color-text);width:min(100%,1200px);box-sizing:border-box;margin:0 auto;padding:12px 24px 56px;min-height:100%;background:var(--%NS%fv-color-background)}.page[_ngcontent-%COMP%]{width:100%;max-width:none;box-sizing:border-box;margin:0;padding:36px 0 64px}.page__header[_ngcontent-%COMP%]{margin-bottom:22px}.page__header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{margin-bottom:16px;color:#5d8e48}.page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--%NS%fv-color-forest);font-size:clamp(34px,5vw,42px);font-weight:700;letter-spacing:-.5px;line-height:1.2}.page__header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{margin:8px 0 0;color:var(--%NS%fv-color-text-muted)}.eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;margin:0 0 12px;color:#5d8e48;font-size:11px;font-weight:700;letter-spacing:1.5px}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--%NS%fv-color-accent)}.next[_ngcontent-%COMP%]{margin-bottom:24px;border:1px solid #dce9d5;border-radius:20px;background:var(--%NS%fv-color-primary-soft);color:var(--%NS%fv-color-text)}.next__content[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;padding:20px!important}.next__date[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:72px;padding:10px 8px;border-radius:16px;background:var(--%NS%fv-color-surface);color:var(--%NS%fv-color-primary);box-shadow:0 4px 12px #23352a0d}.next__weekday[_ngcontent-%COMP%], .next__month[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-large);text-transform:uppercase}.next__day[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-display-small)}.next__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px;font:var(--%NS%mat-sys-title-medium)}.next__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 0}.next__when[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-large)}.next__when[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.item__title[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}@media(max-width:760px){.appointments-page[_ngcontent-%COMP%]{padding:28px 16px 40px}.page[_ngcontent-%COMP%]{padding-top:28px}}`]})};export{ba as MyAppointments};