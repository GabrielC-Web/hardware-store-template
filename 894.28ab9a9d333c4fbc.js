"use strict";(self.webpackChunkhardware_store_template=self.webpackChunkhardware_store_template||[]).push([[894],{1608:(h,d,a)=>{a.r(d),a.d(d,{MainModule:()=>X});var s=a(6814),p=a(1303),e=a(5879),l=a(2651),g=a(617),_=a(6223);function T(t,r){if(1&t&&(e.TgZ(0,"div",6)(1,"select",7)(2,"option",8),e._uU(3),e.qZA(),e.TgZ(4,"option",9),e._uU(5,"Saab"),e.qZA(),e.TgZ(6,"option",10),e._uU(7,"Mercedes"),e.qZA(),e.TgZ(8,"option",11),e._uU(9,"Audi"),e.qZA()(),e.TgZ(10,"mat-icon",12),e._uU(11,"chevron_right"),e.qZA()()),2&t){const n=r.$implicit;e.xp6(3),e.Oqu(n)}}function C(t,r){if(1&t&&(e.TgZ(0,"button",13),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.config.buttonText)}}function Z(t,r){if(1&t&&(e.TgZ(0,"button",14)(1,"mat-icon"),e._uU(2,"search"),e.qZA()()),2&t){const n=e.oxw();e.Q6J("ngClass",n.config.buttonBgClass)}}let w=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["cmp-cmm-products-filter"]],inputs:{config:"config"},decls:7,vars:6,consts:[[1,"d-flex","flex-column","flex-lg-row","justify-content-start","justify-content-lg-between","align-items-center","align-items-xl-center","gap-2","w-100","p-4","cmm-bg-project-primary",3,"ngClass"],[1,"m-0","cmm-txt-thin-bold",3,"ngClass"],[1,"gap-2","d-flex","flex-column","flex-lg-row","align-items-center","justify-content-between","my-2"],["class","d-flex align-items-center bg-white justify-content-between border p-4 filter_input",4,"ngFor","ngForOf"],["class","filter_button px-3 text-white cmm-txt-thin-bold",4,"ngIf"],["class","filter_button_icon px-3 text-white cmm-txt-thin-bold","style","max-width: 70px;",3,"ngClass",4,"ngIf"],[1,"d-flex","align-items-center","bg-white","justify-content-between","border","p-4","filter_input"],[1,"input_select","input_default","fs-12"],[1,"w-100",3,"value"],["value","saab",1,"w-100"],["value","mercedes",1,"w-100"],["value","audi",1,"w-100"],[1,"header_icon","text-black","fs-30","text-secondary","cursor-pointer"],[1,"filter_button","px-3","text-white","cmm-txt-thin-bold"],[1,"filter_button_icon","px-3","text-white","cmm-txt-thin-bold",2,"max-width","70px",3,"ngClass"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,T,12,1,"div",3),e.qZA(),e.YNc(5,C,2,1,"button",4),e.YNc(6,Z,3,1,"button",5),e.qZA()),2&i&&(e.Q6J("ngClass",o.config.bgClass),e.xp6(1),e.Q6J("ngClass",o.config.textClass?o.config.textClass:""),e.xp6(1),e.Oqu(o.config.text),e.xp6(2),e.Q6J("ngForOf",o.config.filters),e.xp6(1),e.Q6J("ngIf",!o.config.buttonIcon),e.xp6(1),e.Q6J("ngIf",o.config.buttonIcon))},dependencies:[g.Hw,s.mk,s.sg,s.O5,_.YN,_.Kr],styles:[".input_default[_ngcontent-%COMP%]::placeholder{color:#000!important}.filter_button[_ngcontent-%COMP%], .filter_button_icon[_ngcontent-%COMP%]{background-color:var(--v-dynamic-primary);border:none;height:50px;border-radius:30px;min-width:70px;display:flex;align-items:center;justify-content:center}.filter_input[_ngcontent-%COMP%]{width:30%;max-width:100%;max-height:30px;border-radius:50px}.input_select[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}@media (max-width: 767px){.filters_grid[_ngcontent-%COMP%]{width:100%}.filter_button[_ngcontent-%COMP%]{min-width:200px}}@media (max-width: 992px){.filter_input[_ngcontent-%COMP%], .input_select[_ngcontent-%COMP%]{width:100%}}"]})}return t})();function M(t,r){1&t&&(e.TgZ(0,"mat-icon"),e._uU(1,"chevron_right"),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"span",6),e._uU(1," / "),e.qZA())}function A(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"a",3),e.NdJ("click",function(){const c=e.CHM(n).$implicit,u=e.oxw();return e.KtG(u.navigate(c.route))}),e.YNc(1,M,2,0,"mat-icon",4),e.YNc(2,b,2,0,"span",5),e._uU(3),e.qZA()}if(2&t){const n=r.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf","chevron"==i.separatorMode),e.xp6(1),e.Q6J("ngIf","slash"==i.separatorMode),e.xp6(1),e.hij(" ",n.name,"")}}let O=(()=>{class t{constructor(n){this.router=n,this.paths=[],this.separatorMode="slash",this.navigationRoutes=[]}ngOnInit(){this.getPaths(),this.listenRouteChanges()}listenRouteChanges(){this.router.events.subscribe(n=>{this.getPaths()})}getPaths(){this.navigationRoutes=[];let n=location.pathname.split("/");n.shift(),this.paths=n;for(let i=0;i<this.paths.length;i++){const o=this.paths[i];let c;c=n[i-1]?n[i-1]+="/"+o:o,this.navigationRoutes.push({name:o,route:c})}}navigate(n){this.router.navigate([n])}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(p.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["cmp-cmm-breadcrumb"]],inputs:{separatorMode:"separatorMode"},decls:4,vars:1,consts:[[1,"w-100","bg-white","p-3","d-flex"],[1,"text-black","fs-20","cmm-txt-thin-bold","cursor-pointer",3,"click"],["class","text-black fs-20 cmm-txt-thin-bold cursor-pointer d-flex align-items-center",3,"click",4,"ngFor","ngForOf"],[1,"text-black","fs-20","cmm-txt-thin-bold","cursor-pointer","d-flex","align-items-center",3,"click"],[4,"ngIf"],["class","mx-2",4,"ngIf"],[1,"mx-2"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"a",1),e.NdJ("click",function(){return o.navigate("/home")}),e._uU(2,"Inicio"),e.qZA(),e.YNc(3,A,4,3,"a",2),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngForOf",o.navigationRoutes))},dependencies:[g.Hw,s.sg,s.O5],styles:["a[_ngcontent-%COMP%]{text-decoration:none}"]})}return t})();var m=a(5854),P=a(2296),R=a(2338);function y(t,r){if(1&t&&(e.TgZ(0,"div",2)(1,"a",3),e._uU(2),e.qZA()()),2&t){const n=r.$implicit;e.xp6(2),e.Oqu(n)}}let S=(()=>{class t{constructor(){this.data=[]}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["cmp-main-dropdown-menu"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"d-flex","flex-column","p-3",2,"max-width","200px"],["class","d-flex flex-column justify-content-center align-items-start p-1 px-2 dropdown_item cursor-pointer","routerLink","/products",4,"ngFor","ngForOf"],["routerLink","/products",1,"d-flex","flex-column","justify-content-center","align-items-start","p-1","px-2","dropdown_item","cursor-pointer"],[1,"text-black","cmm-txt-thin-bold","cursor-pointer","text-start"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.YNc(1,y,3,1,"div",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngForOf",o.data))},dependencies:[s.sg,p.rH],styles:["a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#fff!important}.dropdown_item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:var(--v-dynamic-primary)!important;text-decoration:underline}"]})}return t})();function U(t,r){if(1&t&&(e.TgZ(0,"div",15)(1,"a",16),e._uU(2),e.qZA(),e._UZ(3,"cmp-main-dropdown-menu",17),e.qZA()),2&t){const n=r.$implicit;e.xp6(2),e.Oqu(n.header),e.xp6(1),e.Q6J("data",n.items)}}let N=(()=>{class t{constructor(){this.openSidenav=new e.vpe,this.sidenavOpen=!1,this.icons=m.ci,this.logos=m.UN,this.menuLinks=[{header:"Todos",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Promociones",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Mantenimiento",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Exterior",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Motor",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Tren Motriz",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"El\xe9ctricas",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Refrigeraci\xf3n",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{header:"Interior",items:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]}]}toggleSidenav(){this.sidenavOpen=!this.sidenavOpen,this.openSidenav.emit(this.sidenavOpen)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["cmp-main-header"]],inputs:{sidenavOpen:"sidenavOpen"},outputs:{openSidenav:"openSidenav"},decls:24,vars:4,consts:[[1,"w-100","p-0","row","g-0","flex-column","align-items-center","h-fit"],[1,"bg-black","col-12","d-flex","justify-content-evenly","align-items-center"],["width","150px","height","100px",1,"cursor-pointer",3,"src","routerLink"],["label","Buscar",1,"d-sm-flex","d-none","flex-grow-1","mx-3",2,"max-width","400px",3,"subscriptSizing"],[1,"d-none","d-xl-flex","align-items-center","justify-content-center"],[1,"d-flex","flex-column"],[1,"text-white"],[1,"text-white","fs-14"],[1,"text-white","fs-30","w-30","cursor-pointer",2,"height","30px !important"],[1,"d-none","d-xl-flex"],[1,"header_icon","text-white","fs-30","cursor-pointer"],["routerLink","products/overview",1,"header_icon","text-white","fs-30","cursor-pointer"],["mat-icon-button","","aria-label","Example icon-button with a menu",1,"d-flex","d-xl-none","text-white",3,"click"],[1,"col-12","d-none","d-xl-flex","justify-content-center","cmm-bg-project-primary"],["class","dropdown h-100 p-3  cmm-bg-project-primary","routerLink","/products",4,"ngFor","ngForOf"],["routerLink","/products",1,"dropdown","h-100","p-3","cmm-bg-project-primary"],[1,"cmm-txt-thin-bold","text-white","cursor-pointer"],[1,"dropdown_menu","shadowBorder",3,"data"]],template:function(i,o){1&i&&(e.TgZ(0,"header",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"cmm-cmp-i-text",3)(4,"mat-icon"),e._uU(5,"search"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"span",6),e._uU(9,"Mi cuenta"),e.qZA(),e.TgZ(10,"span",7),e._uU(11,"Hola. Ingresar"),e.qZA()(),e.TgZ(12,"mat-icon",8),e._uU(13,"arrow_drop_down"),e.qZA()(),e.TgZ(14,"span",9)(15,"mat-icon",10),e._uU(16,"person_outline"),e.qZA(),e.TgZ(17,"mat-icon",11),e._uU(18,"shopping_cart_outline"),e.qZA()(),e.TgZ(19,"button",12),e.NdJ("click",function(){return o.toggleSidenav()}),e.TgZ(20,"mat-icon"),e._uU(21,"menu"),e.qZA()()(),e.TgZ(22,"div",13),e.YNc(23,U,4,2,"div",14),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("src",o.logos.carServ,e.LSH)("routerLink","home"),e.xp6(1),e.Q6J("subscriptSizing","dynamic"),e.xp6(20),e.Q6J("ngForOf",o.menuLinks))},dependencies:[s.sg,P.RK,g.Hw,R._,p.rH,S],styles:[".header_icon[_ngcontent-%COMP%]{width:40px;height:40px}a[_ngcontent-%COMP%]{text-decoration:none}.dropdown[_ngcontent-%COMP%]{position:relative}.dropdown[_ngcontent-%COMP%]:hover{background-color:#490708!important}.dropdown_menu[_ngcontent-%COMP%]{display:none;position:absolute;left:0;background-color:#fff;min-width:160px;box-shadow:0 8px 16px #0003;z-index:10;top:100%}.dropdown[_ngcontent-%COMP%]:hover   .dropdown_menu[_ngcontent-%COMP%]{display:block}"]})}return t})();var I=a(901);let q=(()=>{class t{constructor(){this.facebookIcon=m.ci.facebook,this.twitterIcon=m.ci.twitter,this.instagramIcon=m.ci.instagram,this.whatsappIcon=I.ry}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["cmp-main-footer"]],decls:40,vars:1,consts:[[2,"background-color","#585858"],[1,"row","mx-auto","g-0","p-5","text-white",2,"max-width","1000px"],[1,"col-sm-6","col-md-3","mb-3","d-flex","flex-column","align-items-center","justify-content-center"],[1,"cmm-txt-thin-bold"],[1,"col-12","d-flex","justify-content-end"],["width","50","height","50","alt","",1,"cursor-pointer","small-scale",3,"src"]],template:function(i,o){1&i&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4,"NOSOTROS"),e.qZA(),e.TgZ(5,"span"),e._uU(6,"Lorem Ipsum"),e.qZA(),e.TgZ(7,"span"),e._uU(8,"Lorem Ipsum"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Lorem Ipsum"),e.qZA()(),e.TgZ(11,"div",2)(12,"h4",3),e._uU(13,"AYUDA"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Lorem Ipsum"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Lorem Ipsum"),e.qZA(),e.TgZ(18,"span"),e._uU(19,"Lorem Ipsum"),e.qZA()(),e.TgZ(20,"div",2)(21,"h4",3),e._uU(22,"POL\xcdTICA"),e.qZA(),e.TgZ(23,"span"),e._uU(24,"Lorem Ipsum"),e.qZA(),e.TgZ(25,"span"),e._uU(26,"Lorem Ipsum"),e.qZA(),e.TgZ(27,"span"),e._uU(28,"Lorem Ipsum"),e.qZA()(),e.TgZ(29,"div",2)(30,"h4",3),e._uU(31,"ALIADOS"),e.qZA(),e.TgZ(32,"span"),e._uU(33,"Lorem Ipsum"),e.qZA(),e.TgZ(34,"span"),e._uU(35,"Lorem Ipsum"),e.qZA(),e.TgZ(36,"span"),e._uU(37,"Lorem Ipsum"),e.qZA()(),e.TgZ(38,"div",4),e._UZ(39,"img",5),e.qZA()()()),2&i&&(e.xp6(39),e.Q6J("src",o.whatsappIcon,e.LSH))},styles:["span[_ngcontent-%COMP%]{text-wrap:nowrap;word-break:keep-all}"]})}return t})();var L=a(3058),f=a(5287);function k(t,r){1&t&&(e.TgZ(0,"mat-icon",41),e._uU(1,"expand_more"),e.qZA())}function D(t,r){if(1&t&&(e.TgZ(0,"span",42),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.Oqu(n.name)}}function E(t,r){if(1&t&&(e.TgZ(0,"mat-expansion-panel",35)(1,"mat-expansion-panel-header",36)(2,"mat-panel-title",37)(3,"h6",38),e._uU(4),e.qZA(),e.YNc(5,k,2,0,"mat-icon",39),e.qZA()(),e.TgZ(6,"div",17),e.YNc(7,D,2,1,"span",40),e.qZA()()),2&t){const n=e.oxw().$implicit;e.xp6(4),e.Oqu(n.name),e.xp6(1),e.Q6J("ngIf",null==n.children?null:n.children.length),e.xp6(2),e.Q6J("ngForOf",n.children)}}function J(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"span",43),e.NdJ("click",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.closeSidenav.emit())}),e.TgZ(1,"a",44),e._uU(2),e.qZA()()}if(2&t){const n=e.oxw().$implicit;e.xp6(2),e.Oqu(n.name)}}function F(t,r){if(1&t&&(e.TgZ(0,"div",32),e.YNc(1,E,8,3,"mat-expansion-panel",33),e.YNc(2,J,3,1,"span",34),e.qZA()),2&t){const n=r.$implicit;e.xp6(1),e.Q6J("ngIf",null==n.children?null:n.children.length),e.xp6(1),e.Q6J("ngIf",!(null!=n.children&&n.children.length))}}const x=function(t){return{active:t}};function B(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",45),e.NdJ("click",function(){const c=e.CHM(n).index,u=e.oxw();return e.KtG(u.selectTemplate(c))}),e.qZA()}if(2&t){const n=r.index;e.Q6J("ngClass",e.VKq(2,x,0==n)),e.uIk("data-bs-slide-to",n)}}function j(t,r){if(1&t&&(e.TgZ(0,"div",46)(1,"div",47),e._UZ(2,"img",48),e.qZA()()),2&t){const n=r.$implicit;e.Q6J("ngClass",e.VKq(2,x,0==r.index)),e.xp6(2),e.Q6J("src",n.image,e.LSH)}}let Q=(()=>{class t{constructor(){this.closeSidenav=new e.vpe,this.icons=m.ci,this.categorieTypes=L.O.productsModule.sidenav.categorieTypes,this.carouselData=[{image:m.RB.sparePart1,originalPrice:"Ref $76",discountPrice:"Ref $66"},{image:m.RB.sparePart2,originalPrice:"Ref $76",discountPrice:"Ref $66"},{image:m.RB.sparePart3,originalPrice:"Ref $76",discountPrice:"Ref $66"}]}ngOnInit(){this.currentProduct=this.carouselData[0],document.getElementById("carousel")?.addEventListener("slid.bs.carousel",i=>{this.currentProduct=this.carouselData[i.to]})}nextElement(){const n=this.carouselData.length-1,i=++this.productSelected;this.selectTemplate(i>n?0:i)}prevElement(){const i=this.productSelected-1;this.selectTemplate(i<0?this.carouselData.length-1:i)}selectTemplate(n){this.productSelected=n}getCurrentProduct(n){console.log(n)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["cmp-main-sidenav-menu"]],outputs:{closeSidenav:"closeSidenav"},decls:62,vars:6,consts:[[1,"w-100","p-4"],[1,"border","d-flex","flex-column","align-items-center","p-3"],[1,"d-flex","align-items-center","justify-content-center","mb-4"],[1,"d-flex","flex-column"],[1,"text-black"],[1,"text-black","fs-14"],[1,"text-black","fs-30","w-30","cursor-pointer",2,"height","30px !important"],[1,"d-flex","flex-column","align-items-center","justify-content-center"],[1,"cursor-pointer","fs-40",2,"width","40px !important","height","40px !important"],[1,"cursor-pointer","fs-40",2,"width","40px !important","height","40px !important",3,"routerLink"],[1,"border"],[1,"p-2","w-100"],[1,"text-center","cmm-txt-thin-bold"],["class","border-bottom border-top py-2 px-3 w-100",4,"ngFor","ngForOf"],[1,"border","mt-5"],[1,"border","p-2","w-100"],[1,"p-3"],[1,"d-flex","flex-column","cursor-pointer","ms-2"],[1,"my-1"],["id","carousel","data-bs-touch","false","data-bs-pause","true",1,"container","carousel","carousel-dark","slide","d-flex","align-items-center"],[1,"carousel-indicators"],["type","button","data-bs-target","#carousel","aria-label","Slide 1",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"carousel-inner","h-100","pb-5"],["class","carousel-item h-100","data-bs-interval","5000",3,"ngClass",4,"ngFor","ngForOf"],["type","button","data-bs-target","#carousel","data-bs-slide","prev",1,"carousel-control-prev",3,"click"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carousel","data-bs-slide","next",1,"carousel-control-next",3,"click"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"d-flex","flex-column","justify-content-center","align-items-center","mb-4"],[1,"text-center"],[2,"text-decoration","line-through"],[1,"border-bottom","border-top","py-2","px-3","w-100"],["hideToggle","","class","w-100 h-100",4,"ngIf"],["class","px-4 d-flex align-items-center w-100 cursor-pointer","routerLink","/products",3,"click",4,"ngIf"],["hideToggle","",1,"w-100","h-100"],[1,"w-100","h-100"],[1,"d-flex","justify-content-between"],[1,"text-start","cmm-txt-thin-bold","cursor-pointer"],["class","cursor-pointer",4,"ngIf"],["class","my-1","routerLink","/products",4,"ngFor","ngForOf"],[1,"cursor-pointer"],["routerLink","/products",1,"my-1"],["routerLink","/products",1,"px-4","d-flex","align-items-center","w-100","cursor-pointer",3,"click"],["routerLink","/products",1,"text-black","text-decoration-none","cmm-txt-thin-bold"],["type","button","data-bs-target","#carousel","aria-label","Slide 1",3,"ngClass","click"],["data-bs-interval","5000",1,"carousel-item","h-100",3,"ngClass"],[1,"col-12","col-md-10","col-lg-8","h-100","p-0","mx-auto","d-flex","align-items-center"],["alt","imagen de la plantilla",1,"d-block","mx-auto","rounded",2,"max-height","85%","height","164px","max-width","80%",3,"src"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),e._uU(5,"Mi cuenta"),e.qZA(),e.TgZ(6,"span",5),e._uU(7,"Hola. Ingresar"),e.qZA()(),e.TgZ(8,"mat-icon",6),e._uU(9,"arrow_drop_down"),e.qZA()(),e.TgZ(10,"span",7)(11,"mat-icon",8),e._uU(12,"favorite_outline"),e.qZA(),e.TgZ(13,"mat-icon",9),e._uU(14,"shopping_cart"),e.qZA()()(),e.TgZ(15,"div",10)(16,"div",11)(17,"h5",12),e._uU(18,"CATEGOR\xcdAS"),e.qZA()(),e.YNc(19,F,3,2,"div",13),e.qZA(),e.TgZ(20,"div",14)(21,"div",15)(22,"h5",12),e._uU(23,"CATEGOR\xcdAS"),e.qZA()(),e.TgZ(24,"div",16)(25,"div",17)(26,"span",18),e._uU(27,"Ref $100 - $76"),e.qZA()(),e.TgZ(28,"div",17)(29,"span",18),e._uU(30,"Ref $100 - $76"),e.qZA()(),e.TgZ(31,"div",17)(32,"span",18),e._uU(33,"Ref $100 - $76"),e.qZA()(),e.TgZ(34,"div",17)(35,"span",18),e._uU(36,"Ref $100 - $76"),e.qZA()()()(),e.TgZ(37,"div",14)(38,"div",15)(39,"h5",12),e._uU(40,"DESTACADOS"),e.qZA()(),e.TgZ(41,"div",16)(42,"div",19)(43,"div",20),e.YNc(44,B,1,4,"button",21),e.qZA(),e.TgZ(45,"div",22),e.YNc(46,j,3,4,"div",23),e.qZA(),e.TgZ(47,"button",24),e.NdJ("click",function(){return o.prevElement()}),e._UZ(48,"span",25),e.TgZ(49,"span",26),e._uU(50,"Previous"),e.qZA()(),e.TgZ(51,"button",27),e.NdJ("click",function(){return o.nextElement()}),e._UZ(52,"span",28),e.TgZ(53,"span",26),e._uU(54,"Next"),e.qZA()()()(),e.TgZ(55,"div",29)(56,"h5",30),e._uU(57," descripci\xf3n del producto "),e.qZA(),e.TgZ(58,"span",31),e._uU(59),e.qZA(),e.TgZ(60,"span"),e._uU(61),e.qZA()()()()),2&i&&(e.xp6(13),e.Q6J("routerLink","products/overview"),e.xp6(6),e.Q6J("ngForOf",o.categorieTypes),e.xp6(25),e.Q6J("ngForOf",o.carouselData),e.xp6(2),e.Q6J("ngForOf",o.carouselData),e.xp6(13),e.Oqu(o.currentProduct.originalPrice),e.xp6(2),e.Oqu(o.currentProduct.discountPrice))},dependencies:[s.mk,s.sg,s.O5,g.Hw,f.ib,f.yz,f.yK,p.rH]})}return t})();function H(t,r){if(1&t&&e._UZ(0,"cmp-cmm-products-filter",10),2&t){const n=e.oxw();e.Q6J("config",n.filtersConfig)}}function $(t,r){1&t&&e._UZ(0,"cmp-cmm-breadcrumb",11)}const V=function(t){return{"z-index":t}},Y=function(t,r){return{"z-index":t,"margin-top":r}},v=function(t){return{"margin-top":t}},z=[{path:"",component:(()=>{class t{onResize(n){this.smallMode=window.innerWidth<=1200,this.checkProductsViewMode()}onScroll(n){}constructor(n){this.router=n,this.sidenavOpen=!1,this.currentRoute="",this.smallMode=!1,this.headerAppSpace=0,this.showTopAnnouce=!1,this.productsViewMode=!1,this.inProductsView=!1,this.filtersConfig={text:"BUSCA TU VEH\xcdCULO",buttonText:"Ir",bgClass:"gray_bg",filters:["MARCA","MODELO","A\xd1O","VERSI\xd3N"]}}ngOnInit(){this.smallMode=window.innerWidth<=1200,this.currentRoute=location.href,this.listenRouteChanges(),this.showTopAnnouce&&(this.headerAppSpace=60)}listenRouteChanges(){this.router.events.subscribe(n=>{this.currentRoute=location.href,this.sidenavOpen=!1,this.checkProductsViewMode()})}checkProductsViewMode(){this.productsViewMode="/products"==location.pathname&&window.innerWidth>992,this.inProductsView="/products"==location.pathname}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(p.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["pag-main-layout"]],hostBindings:function(i,o){1&i&&e.NdJ("resize",function(){return o.onResize()},!1,e.Jf7)("scroll",function(){return o.onScroll()},!1,e.Jf7)},decls:13,vars:19,consts:[[1,"container-fluid","g-0","overflow-x-hidden","d-flex","flex-column","justify-content-between",2,"overflow-y","scroll","min-height","100vh"],[1,"row","w-100","g-0","justify-content-center","align-items-start"],[1,"cmm-bg-project-tertiary","position-fixed",2,"width","100%","height","60px",3,"ngStyle"],["id","header",1,"w-100","position-fixed","header_container",3,"ngStyle","sidenavOpen","openSidenav"],[1,"mx-auto","w-100","main_container",3,"ngStyle"],["class","vw-100",3,"config",4,"ngIf"],[1,"w-100","position-relative"],[1,"sidenav","border-0",3,"mode","opened","fixedInViewport","ngStyle","closed"],[1,"w-100",3,"closeSidenav"],["separatorMode","chevron",4,"ngIf"],[1,"vw-100",3,"config"],["separatorMode","chevron"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"main",1),e._UZ(2,"div",2),e.TgZ(3,"cmp-main-header",3),e.NdJ("openSidenav",function(u){return o.sidenavOpen=u}),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,H,1,1,"cmp-cmm-products-filter",5),e.TgZ(6,"mat-sidenav-container",6)(7,"mat-sidenav",7),e.NdJ("closed",function(){return o.sidenavOpen=!1}),e.TgZ(8,"cmp-main-sidenav-menu",8),e.NdJ("closeSidenav",function(){return o.sidenavOpen=!1}),e.qZA()(),e.TgZ(9,"mat-sidenav-content"),e.YNc(10,$,1,0,"cmp-cmm-breadcrumb",9),e._UZ(11,"router-outlet"),e.qZA()()()(),e._UZ(12,"cmp-main-footer"),e.qZA()),2&i&&(e.xp6(2),e.Q6J("ngStyle",e.VKq(10,V,o.sidenavOpen?"2":"200")),e.xp6(1),e.Q6J("ngStyle",e.WLB(12,Y,o.sidenavOpen?"2":"200",o.headerAppSpace+"px"))("sidenavOpen",o.sidenavOpen),e.xp6(1),e.Q6J("ngStyle",e.VKq(15,v,o.smallMode?100+o.headerAppSpace+"px":156+o.headerAppSpace+"px")),e.xp6(1),e.Q6J("ngIf",o.inProductsView),e.xp6(2),e.Q6J("mode",o.productsViewMode?"side":"over")("opened",o.productsViewMode?o.productsViewMode:o.sidenavOpen)("fixedInViewport",!o.productsViewMode)("ngStyle",e.VKq(17,v,o.productsViewMode?"":100+o.headerAppSpace+"px")),e.xp6(3),e.Q6J("ngIf",!o.currentRoute.includes("home")))},dependencies:[s.O5,s.PC,l.JX,l.TM,l.Rh,w,O,p.lC,N,q,Q],styles:[".fixed_header[_ngcontent-%COMP%]{position:fixed!important;max-height:-moz-fit-content!important;max-height:fit-content!important;z-index:1000;transition:all ease}.main_container[_ngcontent-%COMP%]{max-width:1500px}.sidenav[_ngcontent-%COMP%]{width:100%;max-width:300px}@media (max-width: 567px){.sidenav[_ngcontent-%COMP%]{max-width:100%}}"]})}return t})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>Promise.all([a.e(592),a.e(969)]).then(a.bind(a,969)).then(t=>t.HomeModule)},{path:"products",loadChildren:()=>Promise.all([a.e(592),a.e(521)]).then(a.bind(a,6521)).then(t=>t.ProductsModule)}]}];let G=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(z),p.Bz]})}return t})();var K=a(4766);let X=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[s.ez,K.n,G]})}return t})()},3058:(h,d,a)=>{a.d(d,{O:()=>p});var s=a(5854);const p={mainLogo:s.UN.carServ,navBar:{buttons:{favourites:{image:s.ci.heart,text:"Favoritos"},kart:{image:s.ci.kart,text:"Carrito de compras"}},menus:{buttons:[{text:"Todos",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Promociones",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Mantenimiento",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Exterior",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Motor",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Tren Motriz",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"El\xe9ctricas",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Refrigeraci\xf3n",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]},{text:"Interior",route:"",matMenus:["Componentes","Direcci\xf3n","Suspensi\xf3n","Transmisi\xf3n","Aceite"]}]}},productsModule:{products:{count:30,items:[{img:s.RB.sparePart1,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart2,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart3,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart4,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart5,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart6,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart7,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart8,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart9,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart2,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart1,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"},{img:s.RB.sparePart5,productName:"GENERAL MOTORS",brandName:"Refrigerante Dex Cool Importado",originalPrice:"Ref.23.00",discountPrice:"Ref.22.00"}]},sidenav:{categorieTypes:[{name:"Todos"},{name:"Promociones"},{name:"Mantenimiento"},{name:"Exterior"},{name:"Motor"},{name:"Tren Motriz",children:[{name:"Componentes"},{name:"Direcci\xf3n"},{name:"Suspensi\xf3n"},{name:"Transmisi\xf3n"},{name:"Aceite"}]},{name:"El\xe9ctricas"},{name:"Refrigeraci\xf3n"},{name:"Interior"}]}}}},5854:(h,d,a)=>{a.d(d,{RB:()=>l,UN:()=>e,ci:()=>p});const p={heart:"assets/images/icons/hearth.svg",person:"assets/images/icons/person.svg",van:"assets/images/icons/van.svg",kart:"assets/images/icons/kart.svg",twitter:"assets/images/icons/icons8-twitter.svg",facebook:"assets/images/icons/icons8-facebook.svg",instagram:"assets/images/icons/icons8-instagram.svg",whatsapp:"assets/images/icons/nd_whatsapp_icon.svg"},e={carServ:"assets/images/logos/car_serv.svg"},l={sparePart1:"assets/images/products/spare_part1.jpg",sparePart2:"assets/images/products/spare_part2.jpg",sparePart3:"assets/images/products/spare_part3.jpg",sparePart4:"assets/images/products/spare_part4.jpg",sparePart5:"assets/images/products/spare_part5.jpg",sparePart6:"assets/images/products/spare_part6.jpg",sparePart7:"assets/images/products/spare_part7.jpg",sparePart8:"assets/images/products/spare_part8.jpg",sparePart9:"assets/images/products/spare_part9.png",sparePart10:"assets/images/products/spare_part10.png"}}}]);