"use strict";(self.webpackChunkhardware_store_template=self.webpackChunkhardware_store_template||[]).push([[521],{6521:(it,p,s)=>{s.r(p),s.d(p,{ProductsModule:()=>ot});var a=s(6814),u=s(1303),w=s(3058),t=s(5879),_=s(6223),d=s(617);function v(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",4),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.stepBack())}),t._uU(1,"chevron_left"),t.qZA()}}function y(e,r){if(1&e&&(t.TgZ(0,"div",5)(1,"span",6),t._uU(2),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" ",n," ")}}let C=(()=>{class e{constructor(){this.posts=[],this.slice=[1,2,3,4,5],this.currentPage=1,this.totalPages=10}stepForward(){this.slice.push(this.slice[this.slice.length-1]+1),this.slice.shift()}stepBack(){this.slice.unshift(this.slice[0]-1),this.slice.pop()}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-paginator"]],inputs:{posts:"posts"},decls:7,vars:4,consts:[[1,"row","justify-content-end","align-items-center","flex-row"],[1,"m-0",2,"width","fit-content"],["class","p-0 cursor-pointer",3,"click",4,"ngIf"],["class","p-2 d-flex justify-content-center align-items-center mx-1 rounded","style","background: #DFDDDE;width: 30px;height: 30px;",4,"ngFor","ngForOf"],[1,"p-0","cursor-pointer",3,"click"],[1,"p-2","d-flex","justify-content-center","align-items-center","mx-1","rounded",2,"background","#DFDDDE","width","30px","height","30px"],[1,"m-0"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2),t.qZA(),t.YNc(3,v,2,0,"mat-icon",2),t.YNc(4,y,3,1,"div",3),t.TgZ(5,"mat-icon",4),t.NdJ("click",function(){return o.stepForward()}),t._uU(6,"chevron_right"),t.qZA()()),2&i&&(t.xp6(2),t.AsE(" ",o.currentPage," DE ",o.totalPages," P\xc1GINAS "),t.xp6(1),t.Q6J("ngIf",o.slice[0]>1),t.xp6(1),t.Q6J("ngForOf",o.slice))},dependencies:[d.Hw,a.sg,a.O5]})}return e})();const Z=function(e){return{width:e}};function P(e,r){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"div",11)(4,"strong",12),t._uU(5),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.TgZ(8,"span",13),t._uU(9),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()()()),2&e){const n=r.$implicit,i=t.oxw();t.Q6J("routerLink","Detalle"),t.xp6(2),t.Q6J("ngStyle",t.VKq(7,Z,i.imageSize.width))("src",n.img,t.LSH),t.xp6(3),t.Oqu(n.productName),t.xp6(2),t.Oqu(n.brandName),t.xp6(2),t.Oqu(n.originalPrice),t.xp6(2),t.Oqu(n.discountPrice)}}function T(e,r){1&e&&t._UZ(0,"cmp-cmm-paginator",14)}let q=(()=>{class e{constructor(){this.products=w.O.productsModule.products.items,this.showPaginator=!0,this.imageSize={width:"100%",height:"100%"}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-layout"]],inputs:{showPaginator:"showPaginator",imageSize:"imageSize"},decls:14,vars:2,consts:[[1,"row","w-100","mx-auto","justify-content-center","h-100","bg-white","overflow-hidden"],[1,"d-flex","flex-column","flex-md-row","justify-content-evenly","my-5","px-3","w-100"],[1,"cmm-txt-thin-bold"],["name","","id","",1,"px-3"],["value",""],[1,"mx-3"],["class","col-sm-6 col-md-4 col-xl-3 mb-4","style","max-width: 300px;",3,"routerLink",4,"ngFor","ngForOf"],["class","my-5",4,"ngIf"],[1,"col-sm-6","col-md-4","col-xl-3","mb-4",2,"max-width","300px",3,"routerLink"],[1,"w-100","cursor-pointer","d-flex","justify-content-center"],["alt","",2,"aspect-ratio","9/12",3,"ngStyle","src"],[1,"d-flex","flex-column","text-center","mt-4"],[2,"font-weight","700"],[2,"text-decoration","line-through"],[1,"my-5"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"Tren Motriz"),t.qZA(),t.TgZ(4,"select",3)(5,"option",4),t._uU(6,"30 PRODUCTOS POR P\xc1GINA"),t.qZA()(),t.TgZ(7,"h3",5),t._uU(8,"Ordenar por:"),t.qZA(),t.TgZ(9,"select",3)(10,"option",4),t._uU(11,"\xcdTEMS DESTACADOS"),t.qZA()()(),t.YNc(12,P,12,9,"div",6),t.YNc(13,T,1,0,"cmp-cmm-paginator",7),t.qZA()),2&i&&(t.xp6(12),t.Q6J("ngForOf",o.products),t.xp6(1),t.Q6J("ngIf",o.showPaginator))},dependencies:[a.sg,a.O5,a.PC,_.YN,_.Kr,C,u.rH]})}return e})();var c=s(5854),A=s(5619),b=s(9886),O=s(9862);let U=(()=>{class e{constructor(n){this.http=n,this.previousScrollY=0,this.isScrollingDown=new A.X(!1),this.keepOrder=(i,o)=>0,this.gatewayUrl=b.N.CC_GATEWAY_URL,window.addEventListener("scroll",()=>{this.detectScrollingDown()})}CmmGetCurrenciesList(){return this.http.get(this.gatewayUrl+"/v1/list/currencies")}CmmGetCountriesList(){return this.http.get(this.gatewayUrl+"/v1/list/countries")}CmmGetGendersList(){return this.http.get(this.gatewayUrl+"/v1/list/gender")}CmmGetBanksList(n){return this.http.get(this.gatewayUrl+"/v1/list/bank",{params:{idCurrency:n}})}detectScrollingDown(){return window.scrollY>this.previousScrollY?(this.previousScrollY=window.scrollY,this.isScrollingDown.next(!0),this.isScrollingDown.asObservable()):(this.previousScrollY=window.scrollY,this.isScrollingDown.next(!1),this.isScrollingDown.asObservable())}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(O.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var k=s(2296),g=s(6385),h=s(5216);function S(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",8),t.NdJ("mousedown",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.scrollUp())})("mouseup",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.stopScrolling())}),t.TgZ(1,"mat-icon",9),t._uU(2,"keyboard_arrow_up"),t.qZA()()}}const D=function(e,r){return[e,r]};function F(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const m=t.CHM(n).index,l=t.oxw();return t.KtG(l.currentImageIndex=m)})("mouseover",function(){const m=t.CHM(n).index,l=t.oxw();return t.KtG(l.currentImageIndex=m)}),t._UZ(1,"img",11),t.qZA()}if(2&e){const n=r.$implicit,i=r.index,o=t.oxw();t.Q6J("ngClass",t.WLB(3,D,o.currentImageIndex==i&&o.images.length>1?"choosen_border":"",o.displayShadow?"shadowBorder":"")),t.xp6(1),t.Q6J("src",n,t.LSH)("alt",n)}}function I(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",12),t.NdJ("mousedown",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.scrollDown())})("mouseup",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.stopScrolling())}),t.TgZ(1,"mat-icon",9),t._uU(2,"keyboard_arrow_down"),t.qZA()()}}let M=(()=>{class e{onResize(n){this.calculateScrollPortion()}constructor(){this.images=[],this.currentImageIndex=0,this.itemSize=0,this.displayShadow=!0}ngOnInit(){this.calculateScrollPortion()}calculateScrollPortion(){let n=document.querySelector(".other_images_column")?.clientHeight,i=document.querySelector(".other_images_column")?.clientWidth,o=document.querySelector(".other_images_column")?.children.length;window.innerWidth>767?0!=o&&(this.itemSize=n/o):0!=o&&(this.itemSize=i/o)}scrollUp(){clearInterval(this.scrollDownInterval),this.scrollUpInterval=setInterval(()=>{document.querySelector(".other_images_column")?.scrollBy({top:-50,left:0,behavior:"smooth"})},150)}scrollDown(){clearInterval(this.scrollUpInterval),this.scrollDownInterval=setInterval(()=>{document.querySelector(".other_images_column")?.scrollBy({top:100,left:0,behavior:"smooth"})},150)}stopScrolling(){clearInterval(this.scrollDownInterval),clearInterval(this.scrollUpInterval)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-product-detail-grid"]],hostBindings:function(i,o){1&i&&t.NdJ("resize",function(l){return o.onResize(l)},!1,t.Jf7)},inputs:{images:"images",displayShadow:"displayShadow"},decls:8,vars:6,consts:[[1,"d-flex","flex-column-reverse","justify-content-between","flex-md-row","w-100","h-100","image_grid","gap-3","p-2","position-relative"],[1,"other_images_column","d-flex","flex-row","flex-md-column","px-1"],["class","arrow_up_container d-none d-md-flex justify-content-center align-items-center cursor-pointer",3,"mousedown","mouseup",4,"ngIf"],["class","other_images_container bg-white cursor-pointer d-flex align-items-center justify-content-center my-1",3,"ngClass","click","mouseover",4,"ngFor","ngForOf"],["class","arrow_down_container d-none d-md-flex justify-content-center align-items-center cursor-pointer",3,"mousedown","mouseup",4,"ngIf"],[1,"main_image_column","bg-white","d-flex","justify-content-center","align-items-center","flex-grow-1",3,"ngClass"],[1,"main_image_container","cursor-pointer","d-flex","justify-content-center","align-items-center"],[1,"main_image",3,"src","alt"],[1,"arrow_up_container","d-none","d-md-flex","justify-content-center","align-items-center","cursor-pointer",3,"mousedown","mouseup"],[1,"fs-30","text-white"],[1,"other_images_container","bg-white","cursor-pointer","d-flex","align-items-center","justify-content-center","my-1",3,"ngClass","click","mouseover"],[1,"other_image",3,"src","alt"],[1,"arrow_down_container","d-none","d-md-flex","justify-content-center","align-items-center","cursor-pointer",3,"mousedown","mouseup"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,S,3,0,"div",2),t.YNc(3,F,2,6,"div",3),t.YNc(4,I,3,0,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6),t._UZ(7,"img",7),t.qZA()()()),2&i&&(t.xp6(2),t.Q6J("ngIf",o.images.length>1),t.xp6(1),t.Q6J("ngForOf",o.images),t.xp6(1),t.Q6J("ngIf",o.images.length>1),t.xp6(1),t.Q6J("ngClass",o.displayShadow?"shadowBorder":""),t.xp6(2),t.Q6J("src",o.images[o.currentImageIndex],t.LSH)("alt",o.images[o.currentImageIndex]))},dependencies:[d.Hw,a.mk,a.sg,a.O5],styles:[".image_grid[_ngcontent-%COMP%]{height:100%;max-height:500px;width:100%;overflow:hidden}.other_images_column[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;max-width:30%}.main_image_column[_ngcontent-%COMP%]{max-width:65%}.other_images_container[_ngcontent-%COMP%]{width:200px;height:200px;max-width:100%;aspect-ratio:1}.other_images_container[_ngcontent-%COMP%]:hover{border:1px solid black;border-style:inset}.other_image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.main_image_container[_ngcontent-%COMP%]{width:100%;max-height:100%;aspect-ratio:16/9}.main_image[_ngcontent-%COMP%]{max-width:100%}.choosen_border[_ngcontent-%COMP%]{border:1px solid black;border-style:inset}.arrow_up_container[_ngcontent-%COMP%]{position:absolute;top:.5rem;background-color:#0000001a;width:200px;max-width:calc(30% - .875rem)}.arrow_up_container[_ngcontent-%COMP%]:hover, .arrow_down_container[_ngcontent-%COMP%]:hover{background-color:#0000004d}.arrow_down_container[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;width:200px;max-width:calc(30% - .875rem);background-color:#0000001a}@media (max-width: 767px){.other_images_container[_ngcontent-%COMP%]{width:150px;height:150px}.other_images_column[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto;overflow-y:hidden}.main_image_column[_ngcontent-%COMP%]{max-width:100%}.main_image_container[_ngcontent-%COMP%]{width:100%;height:100%;max-height:50vw;aspect-ratio:1}.image_grid[_ngcontent-%COMP%]{max-height:none}}"]})}return e})(),R=(()=>{class e{constructor(){this.quantity=0,this.currenQuantity=new t.vpe}addProductUnit(){this.quantity+=1,this.currenQuantity.emit(this.quantity)}removeProductUnit(){this.quantity-=1,this.quantity<1&&(this.quantity=1),this.currenQuantity.emit(this.quantity)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-produt-detail-quantity"]],inputs:{quantity:"quantity"},outputs:{currenQuantity:"currenQuantity"},decls:12,vars:1,consts:[[1,"d-flex","mt-4","flex-column"],[1,"mb-3"],[1,"border","d-flex","align-items-center",2,"width","fit-content"],[1,"border","p-2","cursor-pointer",3,"click"],[1,"px-5"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"CANTIDAD:"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.NdJ("click",function(){return o.removeProductUnit()}),t.TgZ(5,"mat-icon"),t._uU(6,"expand_more"),t.qZA()(),t.TgZ(7,"span",4),t._uU(8),t.qZA(),t.TgZ(9,"div",3),t.NdJ("click",function(){return o.addProductUnit()}),t.TgZ(10,"mat-icon"),t._uU(11,"expand_less"),t.qZA()()()()),2&i&&(t.xp6(8),t.Oqu(o.quantity))},dependencies:[d.Hw]})}return e})();function B(e,r){if(1&e&&(t.TgZ(0,"div",18)(1,"span",19),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij("",n.key,":"),t.xp6(2),t.Oqu(n.value)}}function J(e,r){1&e&&(t.TgZ(0,"mat-icon",24),t._uU(1,"favorite_outline"),t.qZA())}function N(e,r){1&e&&(t.TgZ(0,"mat-icon",24),t._uU(1,"favorite"),t.qZA())}function G(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"cmp-cmm-new-button",20),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.toggleFavorite=!o.toggleFavorite)}),t.TgZ(1,"div",21),t.YNc(2,J,2,0,"mat-icon",22),t.YNc(3,N,2,0,"mat-icon",22),t.TgZ(4,"span",23),t._uU(5),t.qZA()()()}if(2&e){const n=t.oxw();t.Q6J("outlined",!0),t.xp6(2),t.Q6J("ngIf",!n.toggleFavorite),t.xp6(1),t.Q6J("ngIf",n.toggleFavorite),t.xp6(2),t.hij("",n.toggleFavorite?"ELIMINAR DE ":"AGREGAR A "," FAVORITOS ")}}function E(e,r){1&e&&(t.TgZ(0,"mat-icon",27),t._uU(1,"favorite_outline"),t.qZA())}function j(e,r){1&e&&(t.TgZ(0,"mat-icon",27),t._uU(1,"favorite"),t.qZA())}function Q(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.toggleFavorite=!o.toggleFavorite)}),t.YNc(1,E,2,0,"mat-icon",26),t.YNc(2,j,2,0,"mat-icon",26),t.qZA()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.toggleFavorite),t.xp6(1),t.Q6J("ngIf",n.toggleFavorite)}}function L(e,r){1&e&&t._UZ(0,"mat-divider",28)}function H(e,r){if(1&e&&(t.TgZ(0,"div",31)(1,"span",32),t._uU(2),t.qZA(),t.TgZ(3,"span",33),t._uU(4),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.AsE("",n.key," ",n.value?":":"",""),t.xp6(2),t.Oqu(n.value)}}function Y(e,r){if(1&e&&(t.TgZ(0,"div",29)(1,"h3",5),t._uU(2,"DESCRIPCI\xd3N"),t.qZA(),t.YNc(3,H,5,3,"div",30),t.ALo(4,"keyvalue"),t.qZA()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.xi3(4,1,n.product.description,n.utilsService.keepOrder))}}let K=(()=>{class e{constructor(n){this.utilsService=n,this.currency="REF.",this.displayShadow=!0,this.toggleFavorite=!1,this.buttonFavoriteMode="text"}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(U))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-product-detail-v1"]],inputs:{product:"product",currency:"currency",displayShadow:"displayShadow",buttonFavoriteMode:"buttonFavoriteMode"},decls:27,vars:17,consts:[[1,"row","w-100","g-0","justify-content-evenly","align-items-center","mt-5"],[1,"col-12","d-flex","justify-content-center"],[1,"row","w-100","g-0","justify-content-center","h-100","align-items-center"],[1,"col-lg-7","d-flex","h-100",3,"images","displayShadow"],[1,"col-lg-5","px-3"],[1,"cmm-txt-thin-bold","mb-3"],[1,"d-flex","w-100","gap-1","mb-3"],[1,"fs-24","cmm-txt-thin-bold"],["class","w-100 d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"W-100",3,"quantity","currenQuantity"],[1,"row","w-100","my-5","g-0","align-items-center"],[1,"pe-xl-1","mb-xl-0",3,"ngClass"],[1,"cmm-txt-thin-bold","fs-10"],[1,"ps-xl-1","d-flex","justify-content-center","align-items-center",3,"ngClass"],["class","w-100",3,"outlined","click",4,"ngIf"],["mat-icon-button","","class","d-flex justify-content-center align-items-center","style","height: 65px;width: 65px;",3,"click",4,"ngIf"],["class","my-3",4,"ngIf"],["class","col-12 d-flex flex-column",4,"ngIf"],[1,"w-100","d-flex","justify-content-between"],[1,"fs-16","cmm-txt-thin-bold"],[1,"w-100",3,"outlined","click"],[1,"d-flex","align-items-center","justify-content-between","w-100"],["class","fs-20 cmm-txt-project-primary cursor-pointer","style","width: 20px !important;height: 20px !important;",4,"ngIf"],[1,"cmm-txt-thin-bold","fs-10","ms-1"],[1,"fs-20","cmm-txt-project-primary","cursor-pointer",2,"width","20px !important","height","20px !important"],["mat-icon-button","",1,"d-flex","justify-content-center","align-items-center",2,"height","65px","width","65px",3,"click"],["class","fs-40 cmm-txt-project-primary cursor-pointer","style","width: 40px !important;height: 40px !important;",4,"ngIf"],[1,"fs-40","cmm-txt-project-primary","cursor-pointer",2,"width","40px !important","height","40px !important"],[1,"my-3"],[1,"col-12","d-flex","flex-column"],["class","mb-3 d-flex flex-column flex-sm-row gap-2",4,"ngFor","ngForOf"],[1,"mb-3","d-flex","flex-column","flex-sm-row","gap-2"],[1,"cmm-txt-thin-bold","text-sm-nowrap"],[1,""]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2),t._UZ(3,"cmp-cmm-product-detail-grid",3),t.TgZ(4,"div",4)(5,"h3",5),t._uU(6),t.qZA(),t.TgZ(7,"h3",5),t._uU(8),t.qZA(),t.TgZ(9,"div",6)(10,"span",7),t._uU(11),t.qZA(),t.TgZ(12,"span",7),t._uU(13),t.qZA()(),t.YNc(14,B,5,2,"div",8),t.ALo(15,"keyvalue"),t.TgZ(16,"cmp-cmm-produt-detail-quantity",9),t.NdJ("currenQuantity",function(l){return o.product.quantity=l}),t.qZA(),t.TgZ(17,"div",10)(18,"div",11)(19,"cmp-cmm-new-button")(20,"span",12),t._uU(21,"AGREGAR AL CARRITO"),t.qZA()()(),t.TgZ(22,"div",13),t.YNc(23,G,6,4,"cmp-cmm-new-button",14),t.YNc(24,Q,3,2,"button",15),t.qZA()()()()(),t.YNc(25,L,1,0,"mat-divider",16),t.YNc(26,Y,5,4,"div",17),t.qZA()),2&i&&(t.xp6(3),t.Q6J("images",o.product.images)("displayShadow",o.displayShadow),t.xp6(3),t.Oqu(o.product.brand),t.xp6(2),t.Oqu(o.product.name),t.xp6(3),t.Oqu(o.currency),t.xp6(2),t.Oqu(o.product.price),t.xp6(1),t.Q6J("ngForOf",t.xi3(15,14,o.product.details,o.utilsService.keepOrder)),t.xp6(2),t.Q6J("quantity",o.product.quantity),t.xp6(2),t.Q6J("ngClass","text"==o.buttonFavoriteMode?"col-xl-6 mb-3":"col-sm-6 mb-3 mb-sm-0"),t.xp6(4),t.Q6J("ngClass","text"==o.buttonFavoriteMode?"col-xl-6":"col-sm-6"),t.xp6(1),t.Q6J("ngIf","text"==o.buttonFavoriteMode),t.xp6(1),t.Q6J("ngIf","icon"==o.buttonFavoriteMode),t.xp6(1),t.Q6J("ngIf",o.product.description),t.xp6(1),t.Q6J("ngIf",o.product.description))},dependencies:[k.RK,g.d,d.Hw,a.mk,a.sg,a.O5,h.O,M,R,a.Nd]})}return e})(),V=(()=>{class e{onResize(n){this.displayShadow=window.innerWidth<=767}constructor(){this.product={images:[c.RB.sparePart6,c.RB.sparePart7,c.RB.sparePart8,c.RB.sparePart5,c.RB.sparePart4,c.RB.sparePart3,c.RB.sparePart2,c.RB.sparePart1,c.RB.sparePart10,c.RB.sparePart5],mainImage:c.RB.sparePart6,name:"KIT CORREA DE TIEMPO",brand:"GENERAL MOTORS",price:"175.00",details:{SKU:"KROGGM93746917","No. de Parte":"93746917","Compra M\xe1xima":"1 unidad"},quantity:1,description:{"Repuesto original de General Motors":"",Dimensiones:"Dimensiones 9x30x9cm3","Modelos de aplicaci\xf3n":["2005-2014 | CHEVROLET | AVEO | 3 PUERTAS","2005-2014 | CHEVROLET | AVEO | 3 PUERTAS LT","2005-2014 | CHEVROLET | AVEO | 4 PUERTAS","2005-2014 | CHEVROLET | AVEO | 4 PUERTAS LT","2005-2014 | CHEVROLET | AVEO | 5 PUERTAS"]}},this.displayShadow=!1}ngOnInit(){this.displayShadow=window.innerWidth<=767,console.log(this.displayShadow)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-products-detail"]],hostBindings:function(i,o){1&i&&t.NdJ("resize",function(l){return o.onResize(l)},!1,t.Jf7)},inputs:{product:"product"},decls:2,vars:2,consts:[[1,"row","mx-auto","w-100","bg-white","justify-content-evenly","align-items-center","px-4","mt-5"],[3,"product","displayShadow"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-cmm-product-detail-v1",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("product",o.product)("displayShadow",o.displayShadow))},dependencies:[K]})}return e})(),z=(()=>{class e{constructor(){this.productsList=[{image:c.RB.sparePart1,name:"Correa de tiempo",brandName:"General motors",sku:"krogm93746917",quantity:1,price:175,currency:"us$"},{image:c.RB.sparePart1,name:"Correa de tiempo",brandName:"General motors",sku:"krogm93746917",quantity:1,price:175,currency:"us$"},{image:c.RB.sparePart1,name:"Correa de tiempo",brandName:"General motors",sku:"krogm93746917",quantity:1,price:175,currency:"us$"}],this.prebill={basePrice:175,delivery:175,totalPrice:175,discount:"_ US$",currency:"US$"}}ngOnInit(){console.log(this.prebill)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-detail-layout"]],decls:2,vars:0,consts:[[1,"row","w-100","bg-white","g-0","justify-content-center"],[1,"col-12"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-products-detail",1),t.qZA())},dependencies:[V]})}return e})();function $(e,r){if(1&e&&(t.TgZ(0,"div",29)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span",8),t._uU(4),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.key+":"),t.xp6(2),t.Oqu(n.value)}}function X(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19),t._UZ(3,"img",20),t.TgZ(4,"div",21)(5,"h4",22),t._uU(6),t.qZA(),t.TgZ(7,"span",23),t._uU(8),t.qZA(),t.YNc(9,$,5,2,"div",24),t.ALo(10,"keyvalue"),t.TgZ(11,"span",23),t._uU(12),t.qZA()()(),t.TgZ(13,"div",25)(14,"div",26)(15,"mat-icon",27),t.NdJ("click",function(){const m=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.removeProductUnit(m))}),t._uU(16,"remove"),t.qZA(),t.TgZ(17,"span",8),t._uU(18),t.qZA(),t.TgZ(19,"mat-icon",27),t.NdJ("click",function(){const m=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.addProductUnit(m))}),t._uU(20,"add"),t.qZA()(),t.TgZ(21,"div",12),t._uU(22),t.qZA(),t.TgZ(23,"mat-icon",28),t.NdJ("click",function(){const m=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.removeFromKart(m))}),t._uU(24,"delete"),t.qZA()()()()}if(2&e){const n=r.$implicit;t.xp6(3),t.Q6J("src",n.mainImage,t.LSH),t.xp6(3),t.Oqu(n.name),t.xp6(2),t.Oqu("by "+n.brand),t.xp6(1),t.Q6J("ngForOf",t.lcZ(10,7,n.aditionalInfo)),t.xp6(3),t.Oqu("sku: "+n.sku),t.xp6(6),t.Oqu(n.quantity),t.xp6(4),t.hij(" ",n.price+" "+n.currency," ")}}const f=function(e){return{customBorderRadius:e}};let W=(()=>{class e{constructor(n){this.router=n,this.products=[],this.preBill=[],this.config={}}addProductUnit(n){n.quantity+=1}removeProductUnit(n){n.quantity-=1,n.quantity<1&&(n.quantity=1)}removeFromKart(n){this.products.splice(this.products.indexOf(n),1)}navigateBack(){this.router.navigate(["/Productos"])}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-products-kart"]],inputs:{products:"products",preBill:"preBill",config:"config"},decls:47,vars:12,consts:[[1,"row","g-0","flex-column","kartBorder"],[1,"col-12","mb-5","p-3",2,"background-color","#F7F7F7"],[1,"cmm-txt-uppercase","text-center","m-0"],[1,"col-12","position-relative"],[1,"row","w-100","g-0"],[1,"col-12","d-none","d-md-flex","justify-content-between","mb-3"],[1,"w-100","d-flex","flex-column","flex-md-row","justify-content-between","align-items-center","px-4"],[1,"kart_item_product"],[1,"cmm-txt-thin-bold"],[1,"kart_item_controls","d-flex","justify-content-between"],["class","col-12 mb-3",4,"ngFor","ngForOf"],[1,"rounded","border","p-4","col-12"],[1,"cmm-txt-thin-bold","cmm-txt-uppercase"],[1,"d-flex","justify-content-between"],[1,"row","g-0","justify-content-end","mt-5",2,"gap","2rem"],[1,"w-fit",3,"outlined","config","click"],[1,"w-fit",3,"config"],[1,"col-12","mb-3"],[1,"border","rounded","w-100","d-flex","flex-column","flex-md-row","justify-content-between","align-items-center","px-4","py-3","kart_item"],[1,"d-flex","justify-content-start","kart_item_product","gap-3"],[2,"max-width","100px","max-height","80px",3,"src"],[1,"d-flex","flex-column","cmm-txt-uppercase","justify-content-center"],[1,"cmm-txt-thin-bold","fs-16"],[1,"fs-12"],["class","fs-12 d-flex gap-1",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","justify-content-between","gap-4","mt-3","mt-md-0","kart_item_controls"],[1,"border","px-3","py-2","rounded","d-flex","justify-content-between","fs-12",2,"min-width","120px"],[1,"fs-16","cursor-pointer",2,"width","16px !important","height","16px !important",3,"click"],[1,"cursor-pointer",3,"click"],[1,"fs-12","d-flex","gap-1"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"agregado al carrito"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"h4",8),t._uU(10,"Producto"),t.qZA()(),t.TgZ(11,"div",9)(12,"h4",8),t._uU(13,"Cantidad"),t.qZA(),t.TgZ(14,"h4",8),t._uU(15,"Precio"),t.qZA(),t._UZ(16,"div"),t.qZA()()(),t.YNc(17,X,25,9,"div",10),t.qZA()(),t.TgZ(18,"div",11)(19,"h4",12),t._uU(20,"total de la orden"),t.qZA(),t._UZ(21,"mat-divider"),t.TgZ(22,"div",13)(23,"span"),t._uU(24,"Precio"),t.qZA(),t.TgZ(25,"span"),t._uU(26),t.qZA()(),t.TgZ(27,"div",13)(28,"span"),t._uU(29,"Delivery"),t.qZA(),t.TgZ(30,"span"),t._uU(31),t.qZA()(),t.TgZ(32,"div",13)(33,"span"),t._uU(34,"C\xf3digo de DSCTO"),t.qZA(),t.TgZ(35,"span"),t._uU(36),t.qZA()(),t.TgZ(37,"div",13)(38,"span"),t._uU(39,"Total"),t.qZA(),t.TgZ(40,"span"),t._uU(41),t.qZA()()(),t.TgZ(42,"div",14)(43,"cmp-cmm-new-button",15),t.NdJ("click",function(){return o.navigateBack()}),t._uU(44," REGRESAR "),t.qZA(),t.TgZ(45,"cmp-cmm-new-button",16),t._uU(46," PAGAR "),t.qZA()()()),2&i&&(t.xp6(17),t.Q6J("ngForOf",o.products),t.xp6(9),t.Oqu(o.preBill.basePrice+" "+o.preBill.currency),t.xp6(5),t.Oqu(o.preBill.delivery+" "+o.preBill.currency),t.xp6(5),t.Oqu(o.preBill.discount),t.xp6(5),t.Oqu(o.preBill.totalPrice+" "+o.preBill.currency),t.xp6(2),t.Q6J("outlined",!0)("config",t.VKq(8,f,o.config.customButtonsBorderRadius)),t.xp6(2),t.Q6J("config",t.VKq(10,f,o.config.customButtonsBorderRadius)))},dependencies:[g.d,d.Hw,a.sg,h.O,a.Nd],styles:[".kartBorder[_ngcontent-%COMP%]{padding-bottom:150px!important}.kart_item[_ngcontent-%COMP%]{height:150px}.kart_item_product[_ngcontent-%COMP%]{width:25%}.kart_item_controls[_ngcontent-%COMP%]{width:60%}@media (max-width: 992px){.kart_item[_ngcontent-%COMP%]{height:200px}.kart_item_product[_ngcontent-%COMP%]{width:40%}}@media (max-width: 767px){.kart_item[_ngcontent-%COMP%]{height:230px}}@media (max-width: 767px){.kart_item_product[_ngcontent-%COMP%], .kart_item_controls[_ngcontent-%COMP%]{width:100%}}"]})}return e})();const tt=[{path:"",component:q},{path:"detail",component:z},{path:"overview",component:(()=>{class e{constructor(){this.productsList=[{image:c.RB.sparePart1,name:"Correa de tiempo",brandName:"General motors",sku:"krogm93746917",quantity:1,price:175,currency:"us$"},{image:c.RB.sparePart1,name:"Correa de tiempo",brandName:"General motors",sku:"krogm93746917",quantity:1,price:175,currency:"us$"},{image:c.RB.sparePart1,name:"Correa de tiempo",brandName:"General motors",sku:"krogm93746917",quantity:1,price:175,currency:"us$"}],this.prebill={basePrice:175,delivery:175,totalPrice:175,discount:"_ US$",currency:"US$"}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-overview-layout"]],decls:2,vars:2,consts:[[1,"row","m-5"],[1,"col-12",3,"products","preBill"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-cmm-products-kart",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("products",o.productsList)("preBill",o.prebill))},dependencies:[W]})}return e})()}];let et=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(tt),u.Bz]})}return e})();var x=s(4766);let nt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.ez,x.n]})}return e})(),ot=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.ez,x.n,nt,et]})}return e})()}}]);