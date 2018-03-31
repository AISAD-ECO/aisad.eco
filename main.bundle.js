webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    font-family: 'arial';\r\n    font-size: 16px;\r\n    color: gray;\r\n\r\n\r\n}\r\nfieldset{\r\n\r\n    width: 600px;\r\n\r\n}\r\n\r\n#troca-tamanho{\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n\r\n#conteiner-map{\r\nfont-family: times;\r\nfont-size: 45pt;\r\n\r\n}\r\n\r\n@media screen and (max-width: 300) {\r\n  .div-posicao {\r\n       width: 5%;\r\n       left: 0px;\r\n   }\r\n}\r\n\r\n.div-posicao{\r\n\r\nposition: relative;\r\ntop: 25%;\r\nleft: 25%;\r\nwidth: 60%;\r\ntext-align: justify;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <a class=\"navbar-brand\" routerLink=\"projeto\">Atlas Ambiental</a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n              <ul class=\"navbar-nav\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"metodologia\">Metodologia</a>\r\n                  </li>\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                      aria-expanded=\"false\">\r\n                       Mapas Tematicos\r\n                    </a>\r\n\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n                      <li><a class=\"dropdown-item\" routerLink=\"regioes/1\">Demografia</a></li>\r\n                      <li><a class=\"dropdown-item\" routerLink=\"regioes/2\">Administrativos</a></li>\r\n                      <li><a class=\"dropdown-item\" routerLink=\"regioes/3\">Violência</a></li>\r\n                      <li><a class=\"dropdown-item\" routerLink=\"regioes/4\">Mortalidade</a></li>\r\n                      <li><a class=\"dropdown-item\" routerLink=\"regioes/5\">Saude Ambiental</a></li>\r\n\r\n                    </div>\r\n                  </li>\r\n\r\n                <li class=\"nav-item dropdown\">\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">\r\n                    Textos de Apoio\r\n                  </a>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n\r\n                    <li><a href=\"#\" class=\"dropdown-item\"  routerLink=\"material/1\">Textos de Apoio</a></li>\r\n                    <li><a href=\"#\" class=\"dropdown-item\"  routerLink=\"material/2\">Numeros Temáticos</a></li>\r\n                    <li><a href=\"#\" class=\"dropdown-item\"  routerLink=\"material/3\">Notas Infromativas</a></li>\r\n\r\n\r\n                  </div>\r\n                </li>\r\n\r\n          <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"equipe\" href=\"#\">Equipe</a> </li>\r\n\r\n\r\n\r\n\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_apoio_material_apoio_module__ = __webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_apoio_material_apoio_service__ = __webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metodologia_metodologia_component__ = __webpack_require__("../../../../../src/app/components/metodologia/metodologia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projeto_projeto_component__ = __webpack_require__("../../../../../src/app/components/projeto/projeto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__equipe_equipe_component__ = __webpack_require__("../../../../../src/app/components/equipe/equipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__regioes_regioes_component__ = __webpack_require__("../../../../../src/app/components/regioes/regioes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_apoio_material_apoio_component__ = __webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import dos componentes das rotas principais






var appRouters = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__projeto_projeto_component__["a" /* ProjetoComponent */] },
    { path: 'projeto', component: __WEBPACK_IMPORTED_MODULE_7__projeto_projeto_component__["a" /* ProjetoComponent */] },
    { path: 'equipe', component: __WEBPACK_IMPORTED_MODULE_8__equipe_equipe_component__["a" /* EquipeComponent */] },
    { path: 'metodologia', component: __WEBPACK_IMPORTED_MODULE_6__metodologia_metodologia_component__["a" /* MetodologiaComponent */] },
    { path: 'material/', component: __WEBPACK_IMPORTED_MODULE_10__material_apoio_material_apoio_component__["a" /* MaterialApoioComponent */] },
    { path: 'material/:id', component: __WEBPACK_IMPORTED_MODULE_10__material_apoio_material_apoio_component__["a" /* MaterialApoioComponent */] },
    { path: 'regioes/:id', component: __WEBPACK_IMPORTED_MODULE_9__regioes_regioes_component__["a" /* RegioesComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__equipe_equipe_component__["a" /* EquipeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__projeto_projeto_component__["a" /* ProjetoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__metodologia_metodologia_component__["a" /* MetodologiaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__regioes_regioes_component__["a" /* RegioesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__regioes_regioes_component__["b" /* SafePipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRouters),
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__material_apoio_material_apoio_module__["a" /* MaterialAopioModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__material_apoio_material_apoio_service__["a" /* MaterialApoioService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/equipe/equipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    font-weight:bold;\r\n}\r\ni{\r\n    font-size:20px;\r\n    font-weight:bold;\r\n}\r\n\r\n@media screen and (max-width: 300) {\r\n  .div-posicao {\r\n       width: 5%;\r\n       left: 0px;\r\n   }\r\n}\r\n\r\n.div-posicao{\r\n\r\nposition: relative;\r\ntop: 50px;\r\nleft: 25%;\r\nwidth: 60%;\r\ntext-align: justify;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/equipe/equipe.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"div-posicao\">\r\n     <p>\r\n      <i >Sobre os(as) autores(as):</i>\r\n      ​</p>\r\n\r\n      <p>\r\n      <a>Daniel Canavese:</a> Sanitarista, Mestre em Saúde Coletiva (IESC-UFRJ) e Doutor em Ciências da Saúde (USP).\r\n      Atua na graduação e pós-graduação em Saúde Coletiva da Universidade Federal do Rio Grande do Sul (UFRGS).\r\n      </p>\r\n\r\n      <p>\r\n      <a>Maurício Polidoro:</a> Geógrafo, mestre em Planejamento Urbano (UFSCAR) e Doutor em Geografia (UFPR).\r\n      Professor do ensino básico, técnico e tecnológico do Instituto Federal de Educação, Ciência e Tecnologia\r\n      do Rio Grande do Sul (IFRS - Campus Restinga, Porto Alegre).\r\n      </p>\r\n\r\n      <p>\r\n      <a>Gabriela Pôrto Marques:</a> Bióloga e formação técnica em Meio Ambiente, pelo Instituto Federal de Educação,\r\n      Ciência e Tecnologia do Rio Grande do Sul (IFRS - Campus Porto Alegre). Atualmente realiza o Mestrado em\r\n      Desenvolvimento Rural no Programa de pós-graduação em Desenvolvimento Rural (PGDR) da Universidade Federal\r\n      do Rio Grande do Sul (UFRGS).\r\n\r\n      </p>\r\n      <p>\r\n        <a>Daione Caroline Balduzzi Pavan:</a> Licenciada em Filosofia (UFRGS) e estudante do Curso de Análise e Desenvolvimento de \r\n        Sistemas (IFRS- Restinga). Atualmente realiza atividades na área de Desenvolvimento Full Stack com Angular\r\n        em sua quarta versão e desenvovlve sistemas de Banco de Dados com os SGDB's MySQL e SQL Server.  \r\n        </p>\r\n  \r\n\r\n      <br>\r\n      <br>\r\n\r\n        <i> + informações:</i>\r\n        <br>\r\n      ​\r\n        <a link href=\"http://www.sad.eco.br/\" style=\"color:grey;\">http://www.sad.eco.br/</a>\r\n      ​\r\n      </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/equipe/equipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EquipeComponent = (function () {
    function EquipeComponent() {
    }
    EquipeComponent.prototype.ngOnInit = function () {
    };
    return EquipeComponent;
}());
EquipeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-equipe',
        template: __webpack_require__("../../../../../src/app/components/equipe/equipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/equipe/equipe.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EquipeComponent);

//# sourceMappingURL=equipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/material-apoio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/material-apoio.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  material-apoio works! \n</p>\n\n<div *ngFor=\"let a of this.curso.ob.router;let i = index\">\n  {{a.nome}} {{a.link}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/material-apoio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialApoioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_apoio_service__ = __webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialApoioComponent = (function () {
    function MaterialApoioComponent(_materialApoioService, _ActivatedRoute) {
        this._materialApoioService = _materialApoioService;
        this._ActivatedRoute = _ActivatedRoute;
    }
    MaterialApoioComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ESCREVENDO BESTEIRA ');
        console.log(this._ActivatedRoute);
        this._ActivatedRoute.params.subscribe(function (data) {
            console.log('Router value => ', data);
            var routerId = Number(data.id);
            _this._get(routerId);
            // tslint:disable-next-line:no-debugger
        });
    };
    MaterialApoioComponent.prototype._get = function (routerId) {
        this.curso = this._materialApoioService.getCurso(routerId);
        console.log("vamos ver se sai o cursos que eu preciso ==> " + routerId);
    };
    return MaterialApoioComponent;
}());
MaterialApoioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-material-apoio',
        template: __webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__material_apoio_service__["a" /* MaterialApoioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__material_apoio_service__["a" /* MaterialApoioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], MaterialApoioComponent);

var _a, _b;
//# sourceMappingURL=material-apoio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/material-apoio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAopioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_apoio_component__ = __webpack_require__("../../../../../src/app/components/material-apoio/material-apoio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialAopioModule = (function () {
    function MaterialAopioModule() {
    }
    return MaterialAopioModule;
}());
MaterialAopioModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__material_apoio_component__["a" /* MaterialApoioComponent */]],
        exports: [],
        providers: [],
    })
], MaterialAopioModule);

//# sourceMappingURL=material-apoio.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/material-apoio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialApoioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router01__ = __webpack_require__("../../../../../src/app/components/material-apoio/router01.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router02__ = __webpack_require__("../../../../../src/app/components/material-apoio/router02.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router03__ = __webpack_require__("../../../../../src/app/components/material-apoio/router03.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialApoioService = (function () {
    function MaterialApoioService() {
        this.cursos = [];
        this.cursos =
            [
                { id: 1, ob: { id: 1, router: __WEBPACK_IMPORTED_MODULE_1__router01__["a" /* router01 */] } },
                { id: 2, ob: { id: 2, router: __WEBPACK_IMPORTED_MODULE_2__router02__["a" /* router02 */] } },
                { id: 3, ob: { id: 3, router: __WEBPACK_IMPORTED_MODULE_3__router03__["a" /* router03 */] } }
            ];
    }
    MaterialApoioService.prototype.getCursos = function () { return this.cursos; };
    MaterialApoioService.prototype.getCurso = function (id) { return this.cursos.find(function (curso) { return id === curso.id; }); };
    return MaterialApoioService;
}());
MaterialApoioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MaterialApoioService);

//# sourceMappingURL=material-apoio.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/router01.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router01; });
// tslint:disable-next-line:eofline
// tslint:disable-next-line:eofline
var router01 = [{ nome: "2dsd", link: "link01" },
    { nome: "1dsd", link: "link01" },
    { nome: "1dsd", link: "link02" },
    { nome: "1dsd", link: "link03" }
];
//# sourceMappingURL=router01.js.map

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/router02.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router02; });
// tslint:disable-next-line:eofline
// tslint:disable-next-line:eofline
var router02 = [
    { nome: "2dsd", link: "link02" },
    { nome: "2dsd", link: "link02" },
    { nome: "2dsd", link: "link01" },
    { nome: "2dsd", link: "link01" }
];
//# sourceMappingURL=router02.js.map

/***/ }),

/***/ "../../../../../src/app/components/material-apoio/router03.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router03; });
// tslint:disable-next-line:eofline
// tslint:disable-next-line:eofline
var router03 = [
    { nome: "3dsd", link: "link02" },
    { nome: "3dsd", link: "link02" },
    { nome: "3dsd", link: "link01" },
    { nome: "3dsd", link: "link01" }
];
//# sourceMappingURL=router03.js.map

/***/ }),

/***/ "../../../../../src/app/components/metodologia/metodologia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 300) {\r\n  .div-posicao {\r\n       width: 5%;\r\n       left: 0px;\r\n   }\r\n}\r\n\r\n.div-posicao{\r\n\r\nposition: relative;\r\ntop: 50px;\r\nleft: 25%;\r\nwidth: 60%;\r\ntext-align: justify;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/metodologia/metodologia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div-posicao\">\r\n\r\n\r\n\r\n\r\n      <p>\r\n      A concepção desse projeto e dos elementos que o compõem, deu-se partindo de um levantamento prévio de\r\n      dados secundários em multifontes (dados anteriormente coletados e que estão disponíveis para consulta em\r\n      bases de acesso público) e da reunião dos mesmos a fim de gerar os mapas temáticos. Além disso um\r\n      material complementar, tais como os mapas descritivos e textos analíticos de apoio às reflexões acerca\r\n      da relação entre as temáticas saúde, ambiente e desenvolvimento que aqui se apresentam.\r\n      </p>\r\n      <p>\r\n      Por meio do levantamentos desses dados secundários, disponibilizados pelo Instituto Brasileiro de\r\n      Geografia e Estatística (IBGE), Ministério da Saúde, Ministério do Planejamento, Orçamento e Gestão,\r\n      Fundação de Economia e Estatística do Rio Grande do Sul (FEE), Atlas Brasil de Desenvolvimento Humano\r\n      e o Sistema Nacional de Informações sobre Saneamento (SNIS), entre outros, foram elaboradas planilhas\r\n      de banco de dados, em cujos mesmos foram organizados, sistematizados e padronizados a fim de servirem\r\n      de base para a elaboração dos mapas.\r\n      </p>\r\n      <p>\r\n      Os dados foram levantados em escala temporal e são relacionados aos aspectos de saúde, sócio­demográficos,\r\n      ecnômicos, habitacionais e ambientais do Rio Grande do Sul e seus municípios. Ainda, alguns dados serviram\r\n      de fonte para a construção de indicadores e índices através de cálculos e modelos, tais como o Índice de\r\n      Carência Habitacional (ICH) e o Índice de Desenvolvimento Humano Municipal (IDHM)  que refletem,\r\n      respectivamente, a oferta de serviços elementares de saneamento básico e as dimensões do desenvolvimento\r\n      humano em uma determinada localidade e em certas esferas.\r\n      </p>\r\n      <p>\r\n      Os mapas estáticos foram confeccionados no software ArcGIS 9.3 após a elaboração do banco de dados que\r\n      reuniu, de forma padronizada, as variáveis selecionadas a partir das fontes supramencionadas.\r\n      </p>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/metodologia/metodologia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetodologiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetodologiaComponent = (function () {
    function MetodologiaComponent() {
    }
    MetodologiaComponent.prototype.ngOnInit = function () {
    };
    return MetodologiaComponent;
}());
MetodologiaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-metodologia',
        template: __webpack_require__("../../../../../src/app/components/metodologia/metodologia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/metodologia/metodologia.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MetodologiaComponent);

//# sourceMappingURL=metodologia.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/projeto/projeto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 300) {\r\n  .div-posicao {\r\n       width: 5%;\r\n       left: 0px;\r\n   }\r\n}\r\n\r\n.div-posicao{\r\n\r\nposition: relative;\r\ntop: 50px;\r\nleft: 25%;\r\nwidth: 60%;\r\ntext-align: justify;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projeto/projeto.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"div-posicao\">\r\n\r\n\r\n        <p>\r\n        O presente trabalho foi financiado pela Universidade Federal do Rio Grande do Sul (UFRGS) por\r\n         meio do edital número 23/2016 da Secretaria de Educação à Distância (SEAD). Contou com uma parceria\r\n         com pesquisadores(as) da UFRGS e do Instituto Federal do Rio Grande do Sul (IFRS) participantes do\r\n          grupo do CNPq denominado Saúde, Ambiente e Desenvolvimento (grupo SAD).\r\n        </p>\r\n        <p>\r\n        O Atlas consiste em um objeto de aprendizagem com vistas a interação com os temas saúde,\r\n         ambiente e desenvolvimento, transversais e afetos ao contexto do ensino-pesquisa-extensão.\r\n         O material aqui selecionado permite que sejam consultadas informações pertinentes a tríade\r\n         saúde-ambiente-desenvolvimento do estado do Rio Grande do Sul, no formato de mapas temáticos.\r\n         Ainda, a plataforma também conta com textos analíticos de apoio.\r\n        ​</p>\r\n        <p>\r\n        Os pressupostos desse recurso digital de suporte ao ensino são a interdisciplinaridade,\r\n        com vistas à apropriação por diferentes interesses; a multiplicidade temática e a interatividade\r\n        dialógica, permitindo que os saberes possam ser ampliados e rearranjados. No processo\r\n        ensino-aprendizagem é possível vislumbrar tal ferramenta como apoio, possibilitando exemplos ou\r\n        caracterizações; como disparadora de debates e reflexões ou como suporte para ações de pesquisa e\r\n        extensão, por exemplo.\r\n        </p>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/projeto/projeto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjetoComponent = (function () {
    function ProjetoComponent() {
    }
    ProjetoComponent.prototype.ngOnInit = function () {
    };
    return ProjetoComponent;
}());
ProjetoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projeto',
        template: __webpack_require__("../../../../../src/app/components/projeto/projeto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/projeto/projeto.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjetoComponent);

//# sourceMappingURL=projeto.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/css/demografia.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\nDensidade Demográfica do Rio Grande do Sul, 2010 (hab/km2)\r\n*/\r\n.leg1{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 1px solid;\r\n    border-color: grey;\r\n    background-color:#ffffff;\r\n\r\n}\r\n\r\n.leg2{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffe599;\r\n\r\n}\r\n\r\n.leg3{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffd966;\r\n}\r\n\r\n\r\n.leg4{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#f1C232; \r\n}\r\n\r\n.leg5{\r\n    margin: 10px;   \r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #7f6000; \r\n}\r\n\r\n/*\r\nTaxa de População Raça/Cor - Branca\r\n*/\r\n.leg6{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #d9ead3;\r\n}\r\n\r\n\r\n.leg7{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #93c47d;\r\n}\r\n\r\n\r\n.leg8{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #38761d;\r\n}\r\n\r\n\r\n.leg9{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#274e13;\r\n}\r\n\r\n/*\r\nTaxa de População Raça/Cor - preta\r\nTaxa de População Raça/Cor - Parda\r\nTaxa de População Raça/Cor - Indigena\r\nTaxa de População Raça/Cor - Amarela\r\n*/\r\n\r\n.leg10{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#cccccc;\r\n}\r\n\r\n\r\n\r\n.leg11{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffd966;\r\n}\r\n\r\n\r\n\r\n.leg12{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #bf9000;\r\n}\r\n\r\n\r\n\r\n.leg13{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:yellow;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/regioes/css/legenda.css.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".legenda{\r\n    position: relative;\r\n    top: 200px;\r\n   \r\n}\r\n.branco{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:white;\r\n\r\n}\r\n\r\n\r\n.conteudo{\r\n    position: absolute;\r\n    top:-1px;\r\n    left: 45px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/regioes/css/mortalidade.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\nObitos Infantis Rio Grande do Sul\r\nObitos Infantis Branca\r\n\r\n*/\r\n\r\n.leg14{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff9900;\r\n}\r\n\r\n.leg15{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #fff000;\r\n}\r\n\r\n.leg16{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #00ffff;\r\n}\r\n\r\n.leg17{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #0000ff;\r\n}\r\n\r\n.leg18{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #9900ff;\r\n}\r\n\r\n.leg19{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff00ff;\r\n}\r\n\r\n.leg20{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff0000;\r\n}\r\n\r\n/*\r\nObitos Infantis Indigenas\r\n\r\n*/\r\n.leg21{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #fce5cd;\r\n}\r\n\r\n.leg22{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#f9cb9c;\r\n}\r\n\r\n.leg23{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #783f04;\r\n}\r\n/*\r\nObitos infantis Preta\r\nObitos infantis Parda\r\n*/\r\n.leg24{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #fce5cd;\r\n    \r\n}\r\n.leg25{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #f9cb9c;\r\n    \r\n}\r\n.leg26{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #f6b26b;\r\n    \r\n}\r\n.leg27{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #e69138;\r\n}\r\n.leg28{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#b45f06;\r\n}\r\n.leg29{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #783f04;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/regioes/css/saudeAmbiental.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".leg65{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ff0000;\r\n}\r\n\r\n.leg66{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ff9900;\r\n}\r\n.leg67{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffff00;\r\n}\r\n\r\n.leg68{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#00ff00;\r\n}\r\n\r\n.leg69{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff00ff;\r\n}\r\n.leg70{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #9900ff;\r\n}\r\n.leg71{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #660000;\r\n}\r\n.leg72{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #783f04;\r\n}\r\n.leg73{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #274e13;\r\n}\r\n.leg74{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #20124d;\r\n}\r\n.leg75{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #e06666;\r\n}\r\n.leg76{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #f6b26b;\r\n}\r\n.leg77{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffd966;\r\n}\r\n.leg78{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #b6d7a8;\r\n}\r\n.leg79{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #8e7cc3;\r\n}\r\n.leg80{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #c27ba0;\r\n}\r\n.leg81{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #4c1130;\r\n}\r\n.leg82{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #6aa84f;\r\n}\r\n.leg83{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #bf9000;\r\n}\r\n.leg84{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #a64d79;\r\n}\r\n.leg85{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #0c343d;\r\n}\r\n.leg86{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #999999;\r\n}\r\n.leg87{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #00ff00;\r\n}\r\n.leg88{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #8e7cc3;\r\n}\r\n.leg89{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ea9999;\r\n}\r\n\r\n.leg90{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #b45f06;\r\n}\r\n\r\n.leg91{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff00ff;\r\n}\r\n\r\n.leg92{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffff00;\r\n}\r\n\r\n.leg93{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ff9900;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/regioes/css/violencia.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n\r\nViolência Psicológica e Moral\r\nQuantidade de Casos de Violência Feminina\r\n\r\n*/\r\n.leg30{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #f4cccc;\r\n}\r\n\r\n.leg31{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #cccccc;\r\n}\r\n\r\n.leg32{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff9900;\r\n}\r\n\r\n.leg33{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ffff00;\r\n}\r\n\r\n.leg34{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#9900ff;\r\n}\r\n\r\n.leg35{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff00ff;\r\n}\r\n\r\n.leg36{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #e06666;\r\n}\r\n\r\n.leg37{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#f6b26b;\r\n}\r\n\r\n.leg38{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ffd966;\r\n}\r\n\r\n.leg39{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#00ff00;\r\n}\r\n.leg40{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#274e13;\r\n}\r\n\r\n/*\r\nCasos de Trabalho Infantil\r\nCasos de Tortura\r\n leg: ['leg10 ','leg11','leg12','branco','branco'],\r\n\r\n*/\r\n\r\n/*\r\nViolencia sexual \r\nTaxa de Casos de Violência Econômica\r\nQuantidade de Casos de Violência Física Masculina\r\n\r\n*/\r\n\r\n.leg41{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #cccccc;\r\n}\r\n\r\n.leg42{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #f6b26b;\r\n}\r\n.leg43{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#bf9000;\r\n}\r\n.leg44{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #9900ff;\r\n}\r\n.leg45{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #a64d79;\r\n}\r\n.leg46{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ff00ff;\r\n}\r\n.leg47{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ea9999;\r\n}\r\n/*\r\nViolência Negligência Abandono \r\nLesão Auto-Provocada\r\n\r\n*/\r\n.leg49{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #cccccc;\r\n}\r\n.leg50{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #ff9900;\r\n}\r\n.leg51{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#ffff00;\r\n}\r\n.leg52{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#00ff00;\r\n}\r\n.leg53{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#9900ff;\r\n}\r\n\r\n.leg54{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#c27ba0;\r\n}\r\n.leg55{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#674ea7;\r\n}\r\n.leg56{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#6aa84f;\r\n}\r\n.leg57{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#f1c232;\r\n}\r\n.leg58{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#e69138;\r\n}\r\n.leg59{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#cc0000;\r\n}\r\n.leg60{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#660000;\r\n}\r\n.leg61{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#783f04;\r\n}\r\n.leg62{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#7f6000;\r\n}\r\n/*\r\ntráfico de seres humanos \r\n*/\r\n.leg63{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#e0ffd4;\r\n}\r\n\r\n.leg64{\r\n    margin: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color:#267114;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/regioes/regioes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-conteudo{\r\n  position: fixed;\r\n  top: 30%;\r\n  left: 40%;\r\n  width: 50%;\r\n  text-align: justify;\r\n}\r\n.menu-lateral{\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 5%;\r\n  width: 100%;\r\n  text-align: justify;\r\n}\r\n\r\n.titulo{\r\n  position: absolute;\r\n}\r\n.box-texto{\r\n  position: relative;\r\n  top: 70px;\r\n}\r\n\r\n.map-frame {\r\n  position: absolute;\r\n  top: 0; \r\n  left: 100%;\r\n  width: 700px;\r\n  height: 500px;\r\n  max-width: 700px;\r\n  max-height: 500px;\r\n\r\n}\r\n.box-titulo{\r\n  position: relative;\r\n  top: 70px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/regioes/regioes.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"menu-lateral\" *ngIf=\"regiao\">\r\n  <div class=\"container-options\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"col-3\">\r\n          <br>\r\n          <br>\r\n          \r\n        <div class=\"list-group\" style=\"font-size: 12px;\">\r\n          \r\n          <a *ngFor=\"let map of regiao.maps; let i = index\" routerLink=\"['mapas'], id\" class=\"list-group-item \" (click)=\"showMap(map.link, map.titulo, map.Ltitulo, map.leg)\">\r\n          \r\n            {{ map.nome }}\r\n          </a>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"showConteudo\" class=\"box-conteudo\">\r\n\r\n          <div class=\"titulo\">\r\n            <h3>{{ regiao.regiao }}</h3>\r\n          </div>\r\n\r\n          <div class=\"box-texto\">\r\n            <p>\r\n              {{ regiao.desc }}\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"!showConteudo\" class=\"box-conteudo map-frame\">\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <h5> {{ titulo }} </h5>\r\n          \r\n\r\n          <iframe  width=\"700\" height=\"500\" scrolling=\"no\" frameborder=\"no\" [src]=\" this.mapUrl | safe\"></iframe>\r\n\r\n\r\n          <div class=\"legenda\">\r\n        \r\n\r\n          <div style=\"position:relative; top: -550px; left: 700px;\" *ngFor=\"let cor of this.leg; let i = index\">\r\n              <div class=\"{{this.leg[i]}}\">\r\n\r\n              </div>\r\n          </div>\r\n            <h5  style=\"position:relative; top: -1540px; left: 750px; height: 30px;\">Legenda </h5>\r\n            <div style=\"position:relative; top: -1490px; left: 750px; height: 30px;\" *ngFor=\"let titulo of this.Ltitulo; let i = index\">\r\n        \r\n              {{this.Ltitulo[i]}}\r\n\r\n\r\n            </div>\r\n        </div>\r\n          \r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/regioes/regioes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegioesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regioes_service__ = __webpack_require__("../../../../../src/app/components/regioes/regioes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/*tslint:disable*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var mapUrl = null;
var RegioesComponent = (function () {
    function RegioesComponent(_RegioesService, _activatedRoute) {
        this._RegioesService = _RegioesService;
        this._activatedRoute = _activatedRoute;
        this.cursos = ["da", "di", "de"];
        this.showConteudo = true;
        this.regiao = null;
        this.mapUrl = null;
        this.titulo = null;
        this.Ltitulo = null;
        this.leg = null;
    }
    RegioesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._activatedRoute);
        this._activatedRoute.params.subscribe(function (data) {
            console.log('Router value => ', data);
            var routerId = Number(data.id);
            _this._get(routerId);
        });
    };
    RegioesComponent.prototype.showMap = function (link, titulo, ltitulo, leg) {
        this.showConteudo = false;
        this.titulo = titulo;
        this.mapUrl = link;
        this.Ltitulo = ltitulo;
        this.leg = leg;
    };
    RegioesComponent.prototype._get = function (routerId) {
        this.regiao = this._RegioesService.getRegiao(routerId);
        if (this.regiao)
            this.showConteudo = true;
        console.log(this.regiao);
    };
    return RegioesComponent;
}());
RegioesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-regioes',
        template: __webpack_require__("../../../../../src/app/components/regioes/regioes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/regioes/regioes.component.css"), __webpack_require__("../../../../../src/app/components/regioes/css/legenda.css.css"), __webpack_require__("../../../../../src/app/components/regioes/css/demografia.css"), __webpack_require__("../../../../../src/app/components/regioes/css/saudeAmbiental.css"), __webpack_require__("../../../../../src/app/components/regioes/css/violencia.css"), __webpack_require__("../../../../../src/app/components/regioes/css/demografia.css"), __webpack_require__("../../../../../src/app/components/regioes/css/saudeAmbiental.css"), __webpack_require__("../../../../../src/app/components/regioes/css/mortalidade.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__regioes_service__["a" /* RegioesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__regioes_service__["a" /* RegioesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__regioes_service__["a" /* RegioesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], RegioesComponent);



var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], SafePipe);

var _a, _b, _c;
//# sourceMappingURL=regioes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/regioes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegioesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_tipos_mapas_descricao__ = __webpack_require__("../../../../../src/app/components/regioes/ts/tipos-mapas/descricao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ts_tipos_mapas_saudeAmbiental__ = __webpack_require__("../../../../../src/app/components/regioes/ts/tipos-mapas/saudeAmbiental.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_tipos_mapas_administrativos__ = __webpack_require__("../../../../../src/app/components/regioes/ts/tipos-mapas/administrativos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_tipos_mapas_demografia__ = __webpack_require__("../../../../../src/app/components/regioes/ts/tipos-mapas/demografia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ts_tipos_mapas_mortalidade__ = __webpack_require__("../../../../../src/app/components/regioes/ts/tipos-mapas/mortalidade.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ts_tipos_mapas_violencia__ = __webpack_require__("../../../../../src/app/components/regioes/ts/tipos-mapas/violencia.ts");
/* tslint:disable */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegioesService = (function () {
    function RegioesService() {
        this.tipoMapa = [__WEBPACK_IMPORTED_MODULE_5__ts_tipos_mapas_mortalidade__["a" /* _MapasMortalidade */], __WEBPACK_IMPORTED_MODULE_4__ts_tipos_mapas_demografia__["a" /* _MapasDemografia */], __WEBPACK_IMPORTED_MODULE_3__ts_tipos_mapas_administrativos__["a" /* _MapasAdministrativos */], __WEBPACK_IMPORTED_MODULE_2__ts_tipos_mapas_saudeAmbiental__["a" /* _MapasSaudeAmbiental */], __WEBPACK_IMPORTED_MODULE_6__ts_tipos_mapas_violencia__["a" /* _MapasViolencia */]];
        this.descricao = __WEBPACK_IMPORTED_MODULE_1__ts_tipos_mapas_descricao__["a" /* _Descricao */];
        this._regioes = [
            { id: 1,
                regiao: 'Demografia',
                desc: this.descricao[0],
                maps: this.tipoMapa[1],
            },
            { id: 2,
                regiao: 'Administrativos',
                desc: this.descricao[1],
                maps: this.tipoMapa[2],
            },
            { id: 3,
                regiao: 'Violência',
                desc: this.descricao[2],
                maps: this.tipoMapa[4],
            },
            { id: 4,
                regiao: 'Mortalidade',
                desc: this.descricao[3],
                maps: this.tipoMapa[0],
            },
            { id: 5,
                regiao: 'Saúde Ambiental',
                desc: this.descricao[4],
                maps: this.tipoMapa[3],
            }
        ];
    }
    RegioesService.prototype.getRegioes = function () { return this._regioes; };
    RegioesService.prototype.getRegiao = function (regiaoId) {
        return this._regioes.find(function (regiao) { return regiaoId === regiao.id; });
    };
    return RegioesService;
}());
RegioesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RegioesService);

//# sourceMappingURL=regioes.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/ts/tipos-mapas/administrativos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MapasAdministrativos; });
/* tslint:disable */
/* tslint:disable */ var _MapasAdministrativos = [
    {
        titulo: 'Regiões de Saúde',
        nome: 'Regiões de Saúde',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.67934390062796&lng=-52.59588756250001&t=1&z=6&l=col26&y=10&tmplt=11&hml=KML',
        Ltitulo: [
            'Verdes Campos',
            'Entre Rios',
            'Fronteira Oeste',
            'Belas Praias',
            'Bons Ventos',
            'V.Paranhana/C. Serra',
            'Vale dos Sinos',
            'Vale Cai/Metropolitana',
            ' Carbonifera/Costa Doce',
            'Capital/Vale Gravatai',
            ' Sete Povos Missões',
            'Portal das Missões',
            'Diversidade',
            'Fronteira Noroeste',
            'Caminho das Águas',
            'Alto Uruguai Gaúcho',
            'Planalto',
            'Araucarias',
            'Botucarí',
            'Sul',
            'Pampa',
            'Caxias e Hortênsias',
            'Campos de Cima da Serra',
            'Vinhedos e Basalto',
            'Uva Vale',
            'Jacuí Centro',
            'Vinte e Oito',
            'Vales e Montanhas',
            'Vale da Luz',
            ''
        ],
        leg: [
            'leg65',
            'leg66',
            'leg67',
            'leg68',
            'leg69',
            'leg70',
            'leg71',
            'leg72',
            'leg73',
            'leg74',
            'leg75',
            'leg76',
            'leg77',
            'leg78',
            'leg79',
            'leg80',
            'leg81',
            'leg82',
            'leg83',
            'leg84',
            'leg85',
            'leg86',
            'leg87',
            'leg88',
            'leg89',
            'leg90',
            'leg91',
            'leg92',
            'leg93',
            'branco'
        ],
    },
];
//# sourceMappingURL=administrativos.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/ts/tipos-mapas/demografia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MapasDemografia; });
/* tslint:disable */
/* tslint:disable */ var _MapasDemografia = [
    {
        titulo: 'Densidade Demográfica do Rio Grande do Sul, 2010 (hab/km2).',
        nome: 'Densidade Demográfica do Rio Grande do Sul, 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col69+from+1IvIn4sTOdstDETt4cW3AQAE0SM1xpje7iRDh9snR&viz=MAP&h=false&lat=-30.457045950899513&lng=-50.41510142968751&t=1&z=6&l=col69&y=2&tmplt=2&hml=KML',
        Ltitulo: ['0,0 - 2,2', '2,2 - 140,2', '140,3 - 533,1', '533,2 - 1166,4', '1166,5 - 2.918,9', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg1 ',
            'leg2',
            'leg3',
            'leg4',
            'leg5',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Branca',
        nome: 'Taxa Pop. Branca 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.38599268750699&lng=-53.90326060937501&t=1&z=6&l=col75&y=2&tmplt=2&hml=KML',
        Ltitulo: ['45,5 - 68,5', '68,6 - 81,9,', '82 - 99,1', '99,2 - 100', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg6',
            'leg7',
            'leg8',
            'leg9',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Preta',
        nome: 'Taxa Pop. Preta 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.499653060795847&lng=-53.628602406250025&t=1&z=6&l=col75&y=3&tmplt=3&hml=KML',
        Ltitulo: ['0 - 5,067', '5,068 - 10,132', '10,133 - 15,2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Parda',
        nome: 'Taxa Pop. Parda 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.528047437821645&lng=-53.936219593750025&t=1&z=6&l=col75&y=4&tmplt=5&hml=KML',
        Ltitulo: ['0,288 - 11,186', '11,187 - 22,085', '22,086 - 22,985', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Negra',
        nome: 'Taxa Pop. Negra 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.20575984359871&lng=-54.946961781250025&t=1&z=6&l=col75&y=8&tmplt=9&hml=KML',
        Ltitulo: ['0 - 12,69', '12,70 - 25,381', '25,382 - 38,071', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Indígena',
        nome: 'Taxa Pop. Indígena 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.300660527325608&lng=-54.661317250000025&t=1&z=6&l=col75&y=6&tmplt=7&hml=KML',
        Ltitulo: ['0 - 14,662 ', '14,663 - 29,322', '29,323 - 43,985', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Amarela',
        nome: 'Taxa Pop. Amarela 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.272199949858095&lng=-54.683289906250025&t=1&z=6&l=col75&y=7&tmplt=8&hml=KML',
        Ltitulo: ['0 - 1,757', '1,758 - 3,514', '3,515 - 5,271', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    }
];
//# sourceMappingURL=demografia.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/ts/tipos-mapas/descricao.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Descricao; });
var _Descricao = [
    'Descricao 0',
    'Descricao 1',
    'Descricao 2',
    'Descricao 3',
    'Descricao 4'
    // tslint:disable-next-line:eofline
];
//# sourceMappingURL=descricao.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/ts/tipos-mapas/mortalidade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MapasMortalidade; });
/* tslint:disable */
/* tslint:disable */ var _MapasMortalidade = [
    {
        titulo: 'Óbitos Infantis - RS',
        nome: 'Óbitos Infantis - RS ',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.215739615799063&lng=-54.93597545312501&t=1&z=6&l=col26&y=2&tmplt=3&hml=KML',
        Ltitulo: ['0,0 -  27.429', ' 27.430 - 54.857', '54.858 - 82.287', '82.288 -  109.714', ' 109.715 - 137.143', '137.144 - 192.0', '192.1 - 193.0'],
        leg: [
            'leg14 ',
            'leg15',
            'leg16',
            'leg17',
            'leg18',
            'leg19',
            'leg20',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ],
    },
    {
        titulo: 'Óbitos Infantis - Indígena',
        nome: 'Óbitos Infantis - Indígena',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.901462995701408&lng=-53.211121937500025&t=1&z=6&l=col26&y=3&tmplt=4&hml=KML',
        Ltitulo: ['0 - 0,9', '1 - 1,9', '2 - 3', '', ''],
        leg: [
            'leg21 ',
            'leg22',
            'leg23',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Óbitos Infantis - Pop. Preta',
        nome: 'Taxa de Óbitos Infantis - Pop. Preta',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.663082158777538&lng=-52.892518421875025&t=1&z=6&l=col26&y=5&tmplt=6&hml=KML',
        Ltitulo: ['0,0 - 4,4', '4,5 - 8,8', '8,9 - 13,2', '13,3 - 17,6', '17,7- 21,0'],
        leg: ['leg24 ',
            'leg25',
            'leg26',
            'leg27',
            'leg28',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Óbitos Infantis - Pop. Branca',
        nome: 'Óbitos Infantis - Pop. Branca',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=8&tmplt=9&hml=KML',
        Ltitulo: ['0,0 - 20.857', '20.858 - 41.714', '41.715 - 62.571', '62.572 - 83.429', '83.430 - 104.286', '104.287 - 125.143', '125.144 - 146.0'],
        leg: [
            'leg14 ',
            'leg15',
            'leg16',
            'leg17',
            'leg18',
            'leg19',
            'leg20',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ]
    },
    {
        titulo: 'Óbitos Infantis Pop. Parda',
        nome: 'Taxa de Óbitos Infantis Pop. Parda',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.9776248272372&lng=-52.37616100000001&t=1&z=6&l=col26&y=6&tmplt=7&hml=KML',
        Ltitulo: ['0,0 - 3,9', '4,0 - 8,0', '8,1 - 12,0', '12,1 - 16,0'],
        leg: [
            'leg24 ',
            'leg25',
            'leg26',
            'leg27',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Óbitos Infantis - Infantis Ignorados',
        nome: 'Óbitos Infantis - Infantis Ignorados',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=7&tmplt=8&hml=KML',
        Ltitulo: ['0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', ''],
        leg: [
            'leg24 ',
            'leg26',
            'leg28',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Doenças Feco-Oral - Óbitos por Residência',
        nome: 'Doenças Feco-Oral - Óbitos por Residência',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.50911877459428&lng=-55.781922718750025&t=1&z=6&l=col26&y=11&tmplt=12&hml=KML',
        Ltitulo: ['0,0 - 6,143', '6.144 - 12.286', '12.287 - 18.429', '18.430 -   24.571', '  24.572 - 30.714', '30.715 - 36.857', '36.858 - 43.0'],
        leg: [
            'leg14 ',
            'leg15',
            'leg16',
            'leg17',
            'leg18',
            'leg19',
            'leg20',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ],
    },
];
//# sourceMappingURL=mortalidade.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/ts/tipos-mapas/saudeAmbiental.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MapasSaudeAmbiental; });
/* tslint:disable */
/* tslint:disable */ var _MapasSaudeAmbiental = [
    {
        titulo: 'Biomas do Rio Grande do Sul',
        nome: 'Biomas',
        link: 'https://fusiontables.google.com/embedviz?q=select+col13+from+19qswfScrqONnn5_27CYEMRzLBiZFDSRp0MOjQJ1h&viz=MAP&h=false&lat=-30.165250892256093&lng=-54.455476148294&t=1&z=6&l=col13&y=2&tmplt=3&hml=KML',
        Ltitulo: ['0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', '', '0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', '', '0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', '', '0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', '', '0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', '', '0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0', '', ''],
        leg: [
            'leg1',
            'leg2',
            'leg3',
            'leg4',
            'leg5',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ],
    },
];
//# sourceMappingURL=saudeAmbiental.js.map

/***/ }),

/***/ "../../../../../src/app/components/regioes/ts/tipos-mapas/violencia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MapasViolencia; });
/* tslint:disable */
/* tslint:disable */ var _MapasViolencia = [
    {
        titulo: 'Violência Psicológica e Moral',
        nome: 'Violência Psicológica e Moral',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.5185835669924&lng=-52.376161000000025&t=1&z=6&l=col22&y=2&tmplt=2&hml=KML',
        Ltitulo: ['0,0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80', '81 - 90', '91 - 100'],
        leg: [
            'leg31 ',
            'leg32',
            'leg33',
            'leg34',
            'leg35',
            'leg36',
            'leg37',
            'leg38',
            'leg39',
            'leg40',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ],
    },
    {
        titulo: 'Quantidade de Casos de Violência Feminina',
        nome: 'Quantidade de Casos de Violência Feminina',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.603725207787026&lng=-52.529969593750025&t=1&z=6&l=col22&y=3&tmplt=3&hml=KML',
        Ltitulo: ['0,0 - 129,8', '129,9 - 259,6', '259,7 - 389,4', '389,5 - 519,2', '519,1 - 649', '649,1 - 778,8', '778,9 - 908,6', '908,7 - 1.038,4', '1.038,5 - 1.168,2', '1.168,3 - 1.298,0'],
        leg: [
            'leg31 ',
            'leg32',
            'leg33',
            'leg34',
            'leg35',
            'leg36',
            'leg37',
            'leg38',
            'leg39',
            'leg40',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ],
    },
    {
        titulo: 'Taxa de Casos de Tortura',
        nome: 'Taxa de Quantidade dos Casos de Tortura',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col22&y=5&tmplt=5&hml=KML',
        Ltitulo: ['0 - 2', '2,1 - 4', '4,1 - 6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de Casos de Trabalho Infantil',
        nome: 'Taxa de Quantidade de Casos de Trabalho Infantil',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.764344208014546&lng=-54.71624889062501&t=1&z=6&l=col22&y=6&tmplt=6&hml=KML',
        Ltitulo: ['0 - 1,667', '1,667 - 3,334', '3,335 - 5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10 ',
            'leg11',
            'leg12',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de Casos de Violência Sexual',
        nome: 'Taxa de Quantidade de Violência Sexual',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.234239673962357&lng=-53.760438343750025&t=1&z=6&l=col22&y=7&tmplt=7&hml=KML',
        Ltitulo: ['0 - 9,143', '9,144 - 18,286', '18,287 - 27,429', '27,430 - 36,571', '36,572 - 45,714', '45,715 - 54,857', '54,857 - 64,0'],
        leg: [
            'leg41 ',
            'leg42',
            'leg43',
            'leg44',
            'leg45',
            'leg46',
            'leg47',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Taxa de Casos de Violência Econômica',
        nome: 'Taxa de Quantidade de Violência Econômica',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-28.9733917786964&lng=-52.222352406250025&t=1&z=6&l=col22&y=9&tmplt=9&hml=KML',
        Ltitulo: ['0 - 9,143', '9,144 - 18,286', '18,287 - 27,429', '27,430 - 36,571', '36,572 - 45,714', '45,715 - 54,857', '54,857 - 64,0'],
        leg: [
            'leg41 ',
            'leg42',
            'leg43',
            'leg44',
            'leg45',
            'leg46',
            'leg47',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Casos de Negligencia e Abandono',
        nome: 'Casos de Negligencia e Abandono',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.63208914530543&lng=-55.628114125000025&t=1&z=6&l=col22&y=11&tmplt=11&hml=KML',
        Ltitulo: ['0 - 37.714', '37.715 - 75.429', '75.430 - 113.143', '113.144 - 150.857', '150.858 - 188.571', '188.572 - 226.286', '226.287 - 264.0', '264.1 - 301.714', '301.715- 339.429', '339.430 - 377.143', '377.143 - 414.857', '414.858 - 452.571', '452.572 - 490.286', '490.287 - 528.0'],
        leg: [
            'leg49 ',
            'leg50',
            'leg51',
            'leg52',
            'leg53',
            'leg54',
            'leg55',
            'leg56 ',
            'leg57',
            'leg58',
            'leg59',
            'leg60',
            'leg61',
            'leg62',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    },
    {
        titulo: 'Casos de Lesão Autoprovocada',
        nome: 'Casos de Lesão Autoprovocada',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.442839438052953&lng=-54.37567271875001&t=1&z=6&l=col22&y=12&tmplt=12&hml=KML',
        Ltitulo: ['0 - 37.714', '37.715 - 75.429', '75.430 - 113.143', '113.144 - 150.857', '150.858 - 188.571', '188.572 - 226.286', '226.287 - 264.0', '264.1 - 301.714', '301.715- 339.429', '339.430 - 377.143', '377.143 - 414.857', '414.858 - 452.571', '452.572 - 490.286', '490.287 - 528.0'],
        leg: [
            'leg49 ',
            'leg50',
            'leg51',
            'leg52',
            'leg53',
            'leg54',
            'leg55',
            'leg56 ',
            'leg57',
            'leg58',
            'leg59',
            'leg60',
            'leg61',
            'leg62',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
        ],
    },
    {
        titulo: 'Casos de Tráfico de Seres Humanos',
        nome: 'Casos de Tráfico de Seres Humanos',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.428630854717973&lng=-54.84808482812501&t=1&z=6&l=col22&y=13&tmplt=13&hml=KML',
        Ltitulo: ['0', '1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg63 ',
            'leg64',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco',
            'branco'
        ],
    }
];
//# sourceMappingURL=violencia.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_app_module__ = __webpack_require__("../../../../../src/app/components/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_components_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map