(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid p-0\">\n    <div class=\"row header\">\n      <div class=\"col-lg-12 col-sm-12 title\">\n        THE GROCERY STORE\n      </div>  \n    </div>  \n    <!-- <p class=\"tag-line\"> Exclusive Variety <br> Reasonable Price </p>  -->\n    <div class=\"row\">    \n      <div class=\"link\">\n\n        <a class = \"nav-bar \" routerLink=\"/home\">HOME</a>     \n        <a class = \"nav-bar \" routerLink=\"/login\">LOGIN</a>     \n        <a class = \"nav-bar \"  href=\"#\" >MENU</a>  \n      </div>\n    </div>  \n</div>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cart-status/buy-cart-status.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cart-status/buy-cart-status.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"btn btn-warning custom-btn font-weight-bold \" [routerLink]=\"'/' + this.identity + '/buy-cart-details'\">\n    {{totalPrice | currency: 'INR'}}\n    &nbsp;<span class=\"badge badge-light mt-1\">{{totalQuantity}}</span>\n    &nbsp;<i class=\"fas fa-cart-arrow-down text-white\"></i>\n</a>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cart/buy-cart.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cart/buy-cart.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-add-item></app-add-item>\n<br><br><br>\n<table class=\"table table-bordered\">\n    <thead class=\"bg-dark text-light\">\n        <tr>\n            <th width=\"20%\"> Item Image </th>\n            <th width=\"50%\"> Item Details </th>\n            <th width=\"30%\"> </th>\n        </tr>\n    </thead>\n    <tbody >\n        <tr *ngFor = \"let cartItem of cartItems\">\n            <td>\n                <img src=\"{{cartItem.image_url}}\" class=\"img-responsive\" width=\"150\" height=\"200\">\n            </td>\n            <td>\n                <p>{{cartItem.name}}</p>\n                <p>{{cartItem.unit_price  | currency : 'INR'}}</p>\n            </td>\n            <td>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>quantity : {{cartItem.total_quantity}}</p>\n                    </div>\n                    <div class=\"col-md-12 mt-2\">\n                        <p>total : {{cartItem.total_quantity*cartItem.unit_price | currency : 'INR'}} </p>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <p>total quantity : {{totalQuantity}}</p>\n                <p>shipping free</p>\n                <p>total price : {{totalPrice | currency : 'INR'}}</p>\n\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <button (click) = \"saveBuyCart()\" class=\"btn btn-primary\">purchase the cart</button>\n            </td>\n        </tr>\n    \n    </tbody>   \n\n\n</table>\n<br><br><br>\n<app-delete-item></app-delete-item>\n\n<!-- **************************************************************************** -->\n\n<!-- <app-add-item></app-add-item>\n<br><br><br>\n<table class=\"table table-bordered\">\n    <thead class=\"bg-dark text-light\">\n        <tr>\n            <th width=\"20%\"> Item Image </th>\n            <th width=\"50%\"> Item Details </th>\n            <th width=\"30%\"> </th>\n        </tr>\n    </thead>\n    <tbody >\n        <tr *ngFor = \"let cartItem of cartItems\">\n            <td>\n                <img src=\"{{cartItem.imageUrl}}\" class=\"img-responsive\" width=\"150\" height=\"200\">\n            </td>\n            <td>\n                <p>{{cartItem.name}}</p>\n                <p>{{cartItem.unitPrice  | currency : 'INR'}}</p>\n            </td>\n            <td>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>quantity : {{cartItem.totalQuantity}}</p>\n                    </div>\n                    <div class=\"col-md-12 mt-2\">\n                        <p>total : {{cartItem.totalQuantity*cartItem.unitPrice | currency : 'INR'}} </p>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <p>total quantity : {{totalQuantity}}</p>\n                <p>shipping free</p>\n                <p>total price : {{totalPrice | currency : 'INR'}}</p>\n\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <button (click) = \"saveBuyCart()\" class=\"btn btn-primary\">purchase the cart</button>\n            </td>\n        </tr>\n    \n    </tbody>   \n\n\n</table>\n<br><br><br>\n<app-delete-item></app-delete-item> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-status/cart-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-status/cart-status.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"btn btn-warning custom-btn font-weight-bold\" [routerLink]=\"'/' + this.identity + '/cart-details'\">\n    {{totalPrice | currency: 'INR'}}\n    &nbsp;<span class=\"badge badge-light mt-1\">{{totalQuantity}}</span>\n    &nbsp;<i class=\"fas fa-cart-arrow-down text-white\"></i>\n</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-add-item></app-add-item>\n<br><br><br>\n\n<table class=\"table table-bordered\">\n    <thead class=\"bg-dark text-light\">\n        <tr>\n            <th width=\"20%\"> Item Image </th>\n            <th width=\"50%\"> Item Details </th>\n            <th width=\"30%\"> </th>\n        </tr>\n    </thead>\n    <tbody >\n        <tr *ngFor = \"let cartItem of cartItems\">\n            <td>\n                <img src=\"{{cartItem.image_url}}\" class=\"img-responsive\" width=\"150\" height=\"200\">\n            </td>\n            <td>\n                <p>{{cartItem.name}}</p>\n                <p>{{cartItem.description}}</p>\n                <p>{{cartItem.unit_price  | currency : 'INR'}}</p>\n            </td>\n            <td>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>quantity : {{cartItem.total_quantity}}</p>\n                    </div>\n                    <div class=\"col-md-12 mt-2\">\n                        <p>total : {{cartItem.total_quantity*cartItem.unit_price | currency : 'INR'}} </p>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <p>total quantity : {{totalQuantity}}</p>\n                <p>shipping free</p>\n                <p>total price : {{totalPrice | currency : 'INR'}}</p>\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <button (click) = \"saveCart()\" class=\"btn btn-primary\">save the cart</button>\n                <button (click) = \"getCart()\" class=\"btn btn-primary btn-green\">retrieve the cart</button>\n\n            </td>\n        </tr>\n    \n    </tbody>   \n\n</table>\n\n<br><br><br>\n<app-delete-item></app-delete-item>\n\n<!-- *******************************************************************************   -->\n\n<!-- <app-add-item></app-add-item>\n<br><br><br>\n\n<table class=\"table table-bordered\">\n    <thead class=\"bg-dark text-light\">\n        <tr>\n            <th width=\"20%\"> Item Image </th>\n            <th width=\"50%\"> Item Details </th>\n            <th width=\"30%\"> </th>\n        </tr>\n    </thead>\n    <tbody >\n        <tr *ngFor = \"let cartItem of cartItems\">\n            <td>\n                <img src=\"{{cartItem.imageUrl}}\" class=\"img-responsive\" width=\"150\" height=\"200\">\n            </td>\n            <td>\n                <p>{{cartItem.name}}</p>\n                <p>{{cartItem.description}}</p>\n                <p>{{cartItem.unitPrice  | currency : 'INR'}}</p>\n            </td>\n            <td>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>quantity : {{cartItem.totalQuantity}}</p>\n                    </div>\n                    <div class=\"col-md-12 mt-2\">\n                        <p>total : {{cartItem.totalQuantity*cartItem.unitPrice | currency : 'INR'}} </p>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <p>total quantity : {{totalQuantity}}</p>\n                <p>shipping free</p>\n                <p>total price : {{totalPrice | currency : 'INR'}}</p>\n            </td>\n        </tr>\n    </tbody>\n    <tbody>\n        <tr>\n            <td colspan=\"2\"></td>\n            <td class=\"font-weight-bold\">\n                <button (click) = \"saveCart()\" class=\"btn btn-primary\">save the cart</button>\n                <button (click) = \"getCart()\" class=\"btn btn-primary btn-green\">retrieve the cart</button>\n\n            </td>\n        </tr>\n    \n    </tbody>   \n\n</table>\n\n<br><br><br>\n<app-delete-item></app-delete-item> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-item/delete-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-item/delete-item.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluvid p-0 footer\">\n    \n    <div class=\"about-us\">\n        <p>Contact Number : +91 7790870740 </p>\n        <p>Rameshwar Lal Agarwal</p>\n        <p>Manoj Kumar Agarwal</p>\n        <p>Mohit Agarwal</p>\n    </div>\n    <div class=\"floater\">\n        <p>Copyright &#169; 2020 Bikaner, Rajasthan, India ; All rights reserved</p>\n    </div>\n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/final/final.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/final/final.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-add-item></app-add-item>\n<div class=\"container-fluid p-0\">\n\t<div class=\"col-lg-6 col-sm-12\">\n\t\t<div class=\"first\">\n\t\t\t<p>Congratulations !!!</p>\n\t\t\t</div>\n\t\t\t<p class=\"second\">your order is success fully placed !!!</p>\n\n\t\t\t<div class=\"invoice\">\n\t\t\t\t<h1>INVOICE</h1><br>\n\t\t\t\t<div class=\"personal-details\">\n\n\t\t\n\t\t\t\t\t<p>Name :  {{customerDetails.name}}</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>Address :  {{customerDetails.address}}</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>Contact :  {{customerDetails.contact}}</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>City :  {{customerDetails.city}}</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>State :  {{customerDetails.state}}</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>Country :  {{customerDetails.country}}</p>\n\t\t\t\t\t<br>\n\n\t\t\t\t</div>\n\n\t\t\t\t<table cellspacing=\"25px\">\n\t\t\t\t<tr>\t\t\t\n\t\t\t\t\t<th>variety</th>\n\t\t\t\t\t<th>quantity</th>\n\t\t\t\t\t<th>price</th>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr cellspacing=\"25px\" *ngFor=\"let item of cartItems\">\n\t\t\t\t\t<td>{{item.name}}</td>\n\t\t\t\t\t<td>{{item.total_quantity}}</td>\n\t\t\t\t\t<td>{{item.total_price}}</td>\n\t\t\t\t</tr>\n\n\t\t\t\t<!-- <tr cellspacing=\"25px\" *ngFor=\"let item of cartItems\">\n\t\t\t\t\t<td>{{item.name}}</td>\n\t\t\t\t\t<td>{{item.totalQuantity}}</td>\n\t\t\t\t\t<td>{{item.totalPrice}}</td>\n\t\t\t\t</tr> -->\n\n\n\t\t\t\t<br>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Total</td>\n\t\t\t\t\t<td>{{totalQuantity}}</td>\n\t\t\t\t\t<td>{{totalPrice}}</td>  \n\t\t\t\t</tr>\n\t\t\t\t</table>\n\n\t\t\t\t<h3>Thank  You !</h3> \n\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"card\">\n\t\t\t<h4>Hover Me</h4>\n\t\t</div>\n\t\t<div class=\"scratch-card\">\n\t\t\t<p>CONGRATULATIONS !</p> \n\t\t\t<p>YOU WON A CASH BACK </p>\n\t\t\t<h4>&#8377; {{cashBack}}</h4>\n\t\t\t<button class=\"btn btn-primary\" (click) = \"add()\">ADD</button>\n\t\t</div>\n\t</div>\n<app-delete-item></app-delete-item>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"header\"> Murli Bhujia Bhandar \n    <p class=\"tag-line\"> Exclusive Variety <br> Reasonable Price </p>\n  </div>\n  <div class=\"link\">\n    <a class = \"nav-bar \" href=\"#\">HOME</a>\n    <a class = \"nav-bar \" href=\"#\">LOGIN</a>\n    <a class = \"nav-bar \" href=\"#\">MENU</a>\n  </div> -->\n\n  <app-add-item></app-add-item>\n\n\n<div class=\"container\" >\n\n    <form class=\"form-horizontal\" role=\"form\" (ngSubmit)=\"onSubmit()\">\n                <p>ITEM DETAILS</p>\n                <div class=\"form-group\">\n                    <label for=\"name\" class=\"col-sm-3 control-label\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"name\" placeholder=\"\" [(ngModel)]=\"item.name\" name=\"name\" class=\"form-control\" autofocus>\n                    </div>\n                </div>\n\n                <br>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">CREATE AN ACCOUNT</button>\n            </form> <!-- /form -->\n        </div> <!-- ./container -->\n\n<app-delete-item></app-delete-item>        \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"header\"> Murli Bhujia Bhandar \n    <p class=\"tag-line\"> Exclusive Variety <br> Reasonable Price </p>\n  </div>\n  <div class=\"link\">\n    <a class = \"nav-bar \" href=\"#\">HOME</a>\n    <a class = \"nav-bar \" href=\"#\">LOGIN</a>\n    <a class = \"nav-bar \" href=\"#\">MENU</a>\n  </div> -->\n\n  <app-add-item></app-add-item>\n\n\n<div class=\"container\" >\n\n    <form class=\"form-horizontal\" role=\"form\" (ngSubmit)=\"onSubmit()\">\n                <p>ITEM DETAILS</p>\n                <div class=\"form-group\">\n                    <label for=\"id\" class=\"col-sm-3 control-label\">Identity</label>\n                    <div class=\"col-sm-9\"> \n                        <input type=\"Number\" id=\"id\" placeholder=\"\" [(ngModel)]=\"item.id\" name=\"id\" class=\"form-control\" autofocus> \n                    </div> \n                </div>\n                <div class=\"form-group\">\n                    <label for=\"name\" class=\"col-sm-3 control-label\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"name\" placeholder=\"\" [(ngModel)]=\"item.name\" name=\"name\" class=\"form-control\" autofocus>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"description\" class=\"col-sm-3 control-label\">Description</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"description\" placeholder=\"\" [(ngModel)]= \"item.description\" name=\"description\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"unit_price\" class=\"col-sm-3 control-label\">Price</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"number\" id=\"unit_price\" placeholder=\"\" [(ngModel)]=\"item.unit_price\" name=\"unit_price\" class=\"form-control\">\n                    </div>\n                </div>\n                <br>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">CREATE AN ACCOUNT</button>\n            </form> <!-- /form -->\n        </div> <!-- ./container -->\n\n<app-delete-item></app-delete-item>        \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n\n    <div class=\"home\">\n        <div id=\"home-cover\" class=\"bg-parallax animated fadeIn\">\n            <div id=\"home-content-box\">\n                <div id=\"home-content-box-inner\" class=\"text-center \" >\n\n                    <!-- <div id=\"home-heading\" class=\"animated zoomIn\">\n                        <h3>MURLI BHUJIA BHANDAR <br> THE SPICY ITEM STORE</h3>\n                    </div> -->\n            \n \t\t\t\t\t<div class=\"glowing\">\n\n\n\t\t\t\t\t\t<span>T</span>\n\t\t\t\t\t\t<span>H</span>\n\t\t\t\t\t\t<span>E</span>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<span>G</span>\n\t\t\t\t\t\t<span>R</span>\n\t\t\t\t\t\t<span>O</span>\n\t\t\t\t\t\t<span>C</span>\n\t\t\t\t\t\t<span>E</span>\n\t\t\t\t\t\t<span>R</span>\n                        <span>Y</span>\n\t\t\t\t\t\t<br>\n\n\t\t\t\t\t\t<span>S</span>\n\t\t\t\t\t\t<span>T</span>\n\t\t\t\t\t\t<span>O</span>\n\t\t\t\t\t\t<span>R</span>\n\t\t\t\t\t\t<span>E</span>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n    \n\t\t\t\t</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-12 left\">\n            <div class=\"box\">\n                <div>\n                    <span class=\"\"></span>\n                    <span class=\"\"></span>\n                    <span class=\"\"></span>\n                    <span class=\"\"></span>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-12 middle\">\n            <p> Discount Offer </p>\n            <p> 21% OFF </p>\n        </div>\n        <div class=\"col-lg-4 col-sm-12 right\">\n            <div class=\"box\">\n                <div>\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n\n    <div class=\"container\">\n        <div class=\"content-box\">\n            <div class=\"content-title animated fadeInDown\"  data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n                <h3> ITEMS & SERVICES </h3>\n                <div class=\"content-title-underline\"></div>\n            </div>\n            <br><br><br>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"service-item\">\n                        <div class=\"service-item-icon\" style=\"float:left\">\n                            <i class=\"fa fa-paint-brush fa-3x\"></i>\n                        </div>\n    \n                        <div class=\"service-item-list\">\n                            <h3>SERVICE 1</h3>\n                        </div>\n    \n                        <div class=\"service-item-description\">\n                            <!-- <p>OUR COMPANY SELLS XYZ ONE OF THEM IS MOST POPULAR ITEM OF WORLD & THAT IS XYZ.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n                        </div>\n                    </div>\n    \n                </div>\n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"service-item\">\n                        <div class=\"service-item-icon\">\n                            <i class=\"fa fa-laptop fa-3x\"></i>\n                        </div>\n    \n                        <div class=\"service-item-list\">\n                            <h3>SERVICE 2</h3>\n                        </div>\n    \n                        <div class=\"service-item-description\">\n                            <!-- <p>ONE MORE POPULAR XYZ ITEM OF WORLD ABC IS ALSO OUR PRODUCT.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"service-item\">\n                        <div class=\"service-item-icon\">\n                            <i class=\"fa fa-tablet fa-3x\"></i>\n                        </div>\n    \n                        <div class=\"service-item-list\">\n                            <h3>SERVICE 3</h3>\n                        </div>\n    \n                        <div class=\"service-item-description\">\n                            <!-- <p>THERE ARE MORE DIFFERENT ITEM LIKE PQR & DIFFERENT KIND OF XYZ ITEM ARE ALSO SOLD BY US.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"service-item\">\n                        <div class=\"service-item-icon\">\n                            <i class=\"fa fa-paint-brush fa-3x\"></i>\n                        </div>\n    \n                        <div class=\"service-item-list\">\n                            <h3>EXTERNAL ORDERS</h3>\n                        </div>\n    \n                        <div class=\"service-item-description\">\n                            <!-- <p>OUR INTER CITY DELIVERY IS ALSO AVAILABLE IN GLOBAL MARKET OF WORLD ONLY.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"service-item\">\n                        <div class=\"service-item-icon\">\n                            <i class=\"fa fa-pencil-square-o fa-3x\"></i>\n                        </div>\n    \n                        <div class=\"service-item-list\">\n                            <h3>HOME DELIVERY</h3>\n                        </div>\n    \n                        <div class=\"service-item-description\">\n                            <!-- <p>OUR HOME DELIVERY SERVICE OF XYZ ITEM IS AVAILABLE IN LOCAL MARKET IN WORLD.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"service-item\">\n                        <div class=\"service-item-icon\">\n                            <i class=\"fa fa-paint-brush fa-3x\"></i>\n                        </div>\n    \n                        <div class=\"service-item-list\">\n                            <h3>EXTERNAL ORDERS</h3>\n                        </div>\n    \n                        <div class=\"service-item-description\">\n                            <!-- <p>OUR INTER CITY DELIVERY IS ALSO AVAILABLE IN GLOBAL MARKET OF WORLD ONLY.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n    \n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-sm-6\">\n            <div id=\"about-content-box\">\n                <div id=\"about-content-box-outer\">\n                    <div id=\"about-content-box-inner\">\n                        <div class=\"content-title animated fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n                            <h3> ABOUT THE GROCERY STORE </h3>\n                            <div class=\"content-title-underline\"></div>\n                        </div>\n                        <br>\n                        <div id=\"about-desc\" class=\"wow animated fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n                            <!-- <p>It is a store of famous xyz items of abc world of a very good brand in a very reasonable price and exculsive variety. We ensure you cleanliness in production process and storage with a delicious taste in item and product.</p> -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n\n                        </div>\n\n                        <div id=\"about-btn\" class=\"wow animated fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n                            <a class=\"btn btn-lg btn-general btn-blue\" href=\"#work\" role=\"button\"> OUR WORk </a>\n                        </div>\n            \n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n\n        <div class=\"col-lg-6 col-sm-6\" >\n            <div id=\"about-bg-diagonal\" class=\"bg-parallax\">\n            </div>\n        </div>    \n    </div>\n    \n    \n    <br><br><br>\n    \n    <div class=\"content-title animated fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n        <h3> OUR WORK </h3>\n        <div class=\"content-title-underline\"></div>\n    </div>\n    \n    <br>\n    <!-- <div class=\"row no-gutters wow animated fadeInUp\"  data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/1.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/2.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/9.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/4.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/5.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/6.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/7.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"img-wrapper\">\n                    <a href=\"IMAGE/8.jpg\" title=\"work description\">\n                        <img src=\"\" class=\"img-responsive\" alt=\"work\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <br><br><br>\n\n    <div class=\"container\">\n        <div class=\"content-box\">\n            <div class=\"content-title animated fadeInDown\"  data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n                <h3> OUR TEAM </h3>\n                <div class=\"content-title-underline\"></div>\n            </div>\n\n            <br><br>\n        </div>\n        \n        <div class=\"row wow animated fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n                <div id=\"team-members\" class=\"owl-carousel owl-theme\">\n                    <div class=\"team-member\">\n                        <img src=\"../../assets/IMAGE/team/team-1.jpg\" class=\"img-responsive\" alt=\"team-member\">\n                        <div class=\"team-member-info text-center\">\n                            <h4 class=\"team-member-name\">Late Shri Kishan Lal Agarwal</h4>\n                            <h4 class=\"team-member-designation\">FORMER CEO</h4>\n                            <ul class=\"social-list\">\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"team-member\">\n                        <img src=\"../../assets/IMAGE/team/team-2.jpg\" class=\"img-responsive\" alt=\"team-member\">\n                        <div class=\"team-member-info text-center\">\n                            <h4 class=\"team-member-name\">Rameshwar Lal Agarwal</h4>\n                            <h4 class=\"team-member-designation\">ADMINISTRATIVE CEO</h4>\n                            <ul class=\"social-list\">\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    \n                    <div class=\"team-member\">\n                        <img src=\"../../assets/IMAGE/team/team-3.jpg\" class=\"img-responsive\" alt=\"team-member\">\n                        <div class=\"team-member-info text-center\">\n                            <h4 class=\"team-member-name\">Manoj Kumar Agarwal</h4>\n                            <h4 class=\"team-member-designation\">MANAGING CEO</h4>\n                            <ul class=\"social-list\">\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"team-member\">\n                        <img src=\"../../assets/IMAGE/team/team-4.jpg\" class=\"img-responsive\" alt=\"team-member\">\n                        <div class=\"team-member-info text-center\">\n                            <h4 class=\"team-member-name\">Mohit Agarwal</h4>\n                            <h4 class=\"team-member-designation\">APPLICATION DEVELOPER</h4>\n                            <ul class=\"social-list\">\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"team-member\">\n                        <img src=\"../../assets/IMAGE/team/team-5.jpg\" class=\"img-responsive\" alt=\"team-member\">\n                        <div class=\"team-member-info text-center\">\n                            <h4 class=\"team-member-name\">Jatin Agarwal</h4>\n                            <h4 class=\"team-member-designation\">IGNORE HIM HE IS NOTHING</h4>\n                            <ul class=\"social-list\">\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n                    <div class=\"team-member\">\n                        <img src=\"../../assets/IMAGE/team/team-1.jpg\" class=\"img-responsive\" alt=\"team-member\">\n                        <div class=\"team-member-info text-center\">\n                            <h4 class=\"team-member-name\"></h4>\n                            <h4 class=\"team-member-designation\">CEO</h4>\n                            <ul class=\"social-list\">\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-facebook\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"#\" class=\"social-icon icon-gray\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <br><br><br>\n\n\n    <div class=\"container-fluid p-0 content-box\" id=\"testimonial\">\n        <div class=\"content-box\">\n            <div class=\"content-title content-title-white animated fadeInDown\"  data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n                <h3> OFFLINE CUSTOMER REVIEWS </h3>\n                <div class=\"content-title-underline\"></div>\n            </div>\n        </div>    \n        <div class=\"row wow animated bounceInDown\" data-wow-duration=\"1s\" data-wow-delay=\".5s\">\n            <div class=\"col-md-12\">\n                <div id=\"customer-testimonial\" class=\"text-center owl-carousel owl-theme \">\n                    <div class=\"testimonial\">\n                        <img src=\"../../assets/IMAGE/client/client-1.jpg\" alt=\"testimonial\" class=\"img-responsive img-circle\">\n                        <blockquote>\n                        <!-- <p> The plain xyz item is very delicious in taste. they are the best selling product of world and here we can get them in very reasonable rate with a great delicious taste. they are available in different kind of varities like abc variety and many more. </p> -->\n                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n\n                        </blockquote>\n                        <div class=\"testimonial-author\">\n                            <p>\n                                <strong> HARI RAM AGARWAL </strong> <br>\n                                <span> 7790870740 </span>\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"testimonial\">\n                        <img src=\"../../assets/IMAGE/client/client-2.jpg\" alt=\"testimonial\" class=\"img-responsive img-circle\">\n                        <blockquote>\n                            <!-- I  don't know much about the xyz item but i am a regular customer of abc item here. I buy them from here and sell them in different cities in world. Actually the cost gives me a lot of margin. I wanna give message to all retailer if you want a lot of profit in abc and xyz item bussiness and wanna give your customer a very delicious taste then buy from this whole sell market. -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n\n                        </blockquote>\n                        <div class=\"testimonial-author\">\n                            <p>\n                                <strong> NARAYAN DAS AGARWAL </strong><br>\n                                <span> 9414222991 </span>\n                            </p>\n                        </div>\n                    </div>\n\n\n                    <div class=\"testimonial\">\n                        <img src=\"../../assets/IMAGE/client/client-3.jpg\" alt=\"testimonial\" class=\"img-responsive img-circle\">\n                        <blockquote>\n                            <!-- They sell a great variety of xyz product with very resonable price. It also tastes very delicious. I would like to recommend all the customer and retailers to purchase xyz only from them as it is delicious and  it gives a lot of profit margin. -->\n                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam magnam, facilis nemo enim ipsa nulla voluptatibus consequatur, ut recusandae placeat. Quasi enim deserunt possimus quos placeat qui eius! Repellat? </p>\n\n                        </blockquote>\n                        <div class=\"testimonial-author\">\n                            <p>\n                                <strong> SHANTI LAL AGARWAL </strong><br>\n                                <span> 9460790420 </span>\n                            </p>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>    \n        </div>\n\n    </div>\n\n    <br><br><br>\n    <div class=\"application\">\n\n\n        <h3>It is a dynamic web application & a static web homepage </h3>\n        <h4>You can either purchase item directly by the application or you can call us directly on the given phone number for booking orders</h4>\n\n        <br>\n    \n    </div>    \n        \n    <div class=\"container\">\n        <div class=\"row offline\">\n\n                <div class=\"col-lg-6 col-sm-12\">\n                    <div class=\"offline-video\">\n                    </div>\t\n                </div>    \n                \n                <div class=\"col-lg-6 col-sm-12\">\n                    <div class=\"offline-content\"> \n                        <br>\n                        <p> 1) if you wanna purchase item (offline mode) </p>\n                        <ul>\n                            <li> check the items and item-categories on the static web page </li>\n                            <li>get an idea of price of each item and ingredients in each item </li>\n                            <li> think what you wanna buy and in how much quantity </li>\n                            <li> call us on 9414222991 and book order for the items </li>\n                            <li> you will get home delivery of items & invoice or bill and give cash on delivery </li>\n                        </ul>\n\n                        <p>you will not get any cashback in offline mode of purchase</p>\n            \n                    </div> \n                </div>\n        \n        \n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-sm-12\">\n                <div class=\"online-video\"> </div>\n                <br><br><br>\n                <ul>\n                    <li><p class=\"online-content\">you will get a cashback of 11% - 21% in online mode (terms & conditions apply)</p></li> \n                    <li><p class=\"online-content\">features like add to cart , net banking , debit card , credit card not available initially . it will be available very soon. </p></li>\n                    <li><p class=\"online-content\">your feedbacks and queries will be entertained on phone number 9414222991</p></li>\n                </ul>\n\n            </div>\n            <br>\n            <div class=\"col-lg-6 col-sm-12\">\n                <div class=\"online-content\">\n                    <br>\n                    <p> 2) if you wanna purchase item (online mode) </p>\n                    <ul>\n                        <li>if you are a new user click on create an account and give your basic details (it will take 1 minute only)</li>\n                        <li>then go to login option or if you are a existing user then directly go to login option </li>\n                        <li>enter or fill your login credentials like identity and password then click login </li>\n                        <li>you will get a list of items and features like search item by name or item category </li>\n                        <li>you can also check description and ingredients of element by clicking on item image or item name </li> \n                        <li>if you wanna purchase an item then push it in buy-cart number of times equal quantity </li>\n                        <li>then click the buy-cart status in the navigation bar and check the items and quatities </li>\n                        <li>click purchase and check invoice , in payment mode click cash on delivery option </li>\n                        <li>finally click proceed and get you final invoice with a cashback </li>\n                        <li>you will get home delivery of item and invoice , give cash on delivery </li>\n                    </ul>\n    \n    \n                </div>\n    \n        \n            </div>\n\n\n        </div>\n    </div>\n\n    <br><br><br>\n    <div class=\"container-fluid p-0\">\n        <div class=\"row\" style=\"background-color: black; height: 50px;\">\n            <div class=\"col-lg-4 col-sm-12 nav-bar\">\n                <div class=\"search-bar\">\n                    <input type=\"text\" #searchInput (keyup.enter)=\"searchBooks(searchInput.value)\" placeholder=\"\">\n                </div>\n            </div>\n            \n            <div class=\"col-lg-2 col-sm-12 nav-bar ml-auto\">\n                <a class = \"nav-link\" [routerLink]=\"'/home/category/1'\">CATEGORY_1</a>\n            </div>\n            <div class=\"col-lg-2 col-sm-12 nav-bar ml-auto\">    \n                <a class = \"nav-link\" [routerLink]=\"'/home/category/2'\">CATEGORY_2</a>\n            </div>    \n            <div class=\"col-lg-2 col-sm-12 nav-bar \">    \n                <a class = \"nav-link\" [routerLink]=\"'/home/category/3'\">CATEGORY_3</a>    \n            </div>    \n            <div class=\"col-lg-2 col-sm-12 nav-bar \">    \n                <a class = \"nav-link\" [routerLink]=\"'/home/category/4'\">CATEGORY_4</a>    \n            </div>\n        </div>\n    </div>\n    <br><br><br><br><br><br>    <br><br><br><br><br><br>\n\n    <div class=\"container-fluid p-0 card\">\n        <div class=\"items\" *ngFor=\"let item of items\">\n            <div class=\"rows\">\n                <div class=\"col-lg-3 col-sm-12 card h-150\" style=\"float:left\">\n                    <div class=\"image\">\n                        <img class=\"card-img-top img-responsive\" [src]=\"item.image_url\" height=\"150px\" width=\"75px\">\n                    </div>\n                </div>\n\n                <div class=\"col-lg-9 col-sm-12 card card-body\" style=\"float:right\">\n                    <h4 class=\"card-title\"> VARIETY : {{item.name}}  </h4 > \n                    <!-- <button class=\"nav-link nav-card\" style=\"float:left\" href=\"#\">INGREDIENT</button>  -->\n                    <h4> PRICE : {{item.unit_price | currency: 'INR'}} </h4><br>\n                    <p class=\"card-text item-description\"> {{item.description}} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum provident voluptates nihil tempora. Aperiam, nostrum quam beatae obcaecati suscipit ad expedita quia iusto impedit aliquid ipsa, ex adipisci minima illum!  </p>\n                </div>\n            </div>    \n        </div>\t\n    </div>\n\n\n    <div class=\"container button\">\n        <div class=\"row\">\n            \n            <div class=\"col-lg-6 col-sm-12\">\n                <button [routerLink]=\"'/login'\" class=\"btn login\" style=\"width: 350px;\">login</button>\n            </div>\n            \n            <div class=\"col-lg-6 col-sm-12\">\n                <button [routerLink]=\"'/signup'\" class=\"btn create-an-account\" style=\"width: 350px;\">create a new account</button>\n            </div>\n        </div> \n    </div>\n\n    <br><br><br>\n    <div class=\"container-fluid p-0 footer\">\n        <div class=\"about-us\">\n            <p>Contact Number : +91 7790870740 , +91 9414222991 </p>\n            <p>Rameshwar Lal Agarwal</p>\n            <p>Manoj Kumar Agarwal</p>\n            <p>Mohit Agarwal</p>\n        </div>\n        <div class=\"floater\">\n            <p>Copyright &copy; 2020 Bikaner, Rajasthan, India ; All rights reserved</p>\n        </div>\n    </div> \n\n\n\n</div>    \n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-add-item></app-add-item>\n<br>\n<div class=\"conatiner\"> \n   <div class=\"head-dark\"></div>\n   <div class=\"head-light\"></div>\n\n   <div class=\"col-lg-6 sol-sm-12\">\n       <div class=\"invoice\">\n               <h1>INVOICE</h1>\n           \n               <br>\n       <div class=\"personal-details\">\n\n           \n           <p>Name :  {{customerDetails.name}}</p>\n           <br>\n           <p>Address :  {{customerDetails.address}}</p>\n           <br>\n           <p>Contact :  {{customerDetails.contact}}</p>\n           <br>\n           <p>City :  {{customerDetails.city}}</p>\n           <br>\n           <p>State :  {{customerDetails.state}}</p>\n           <br>\n           <p>Country :  {{customerDetails.country}}</p>\n           <br>\n\n       </div>\n\n       <table cellspacing=\"25px\">\n       <thead cellspacing=\"25px\">\t\t\t\n           <th cellspacing=\"25px\">variety</th>\n           <th cellspacing=\"25px\">quantity</th>\n           <th cellspacing=\"25px\">price</th>\n       </thead>\n\n       <tr cellspacing=\"25px\" *ngFor=\"let item of cartItems\">\n               <td>{{item.name}}</td>\n               <td>{{item.total_quantity}}</td>\n               <td>{{item.total_price}}</td>\n       </tr>\n\n       <!-- <tr cellspacing=\"25px\" *ngFor=\"let item of cartItems\">\n               <td>{{item.name}}</td>\n               <td>{{item.totalQuantity}}</td>\n               <td>{{item.totalPrice}}</td>\n       </tr> -->\n\n\n       <br>\n       <tfoot>\n           <td>Total</td>\n           <td>{{totalQuantity}}</td>\n           <td>{{totalPrice}}</td>  \n       </tfoot>\n\n\n\n       </table>\n\n       <h3>Thank  You !</h3> \n       </div>\n   </div>\t\n</div>\n\n<app-payment></app-payment>\n\n<app-delete-item></app-delete-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-category/item-category.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-category/item-category.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-group\">\n    <!-- <a [routerLink]=\"'/' + this.identity + '/category/' + category.id\" *ngFor=\"let category of itemCategories\" class=\"list-group-item\" \n      routerLinkActive=\"bg-primary text-white font-weight-bold\">{{ category.category_name }}</a> -->\n    <a [routerLink]=\"'/' + this.identity + '/category/' + category._id\" *ngFor=\"let category of itemCategories\" class=\"list-group-item\" \n      routerLinkActive=\"bg-primary text-white font-weight-bold\">{{ category.category_name }}</a>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"head-dark\"></div>\n<div class=\"head-light\"></div>\n\n<br><br><br><br><br>\n\n\n\n<div class=\"row\">\n    \n    <div class=\"col-lg-3\">\n        <app-item-category></app-item-category>\n    </div>\n    <div class=\"col-lg-9\">\n\n        <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n                <div class=\"thumbnail\">\n                    <img src=\"{{item.image_url}}\" width=\"250\" height=\"350\" alt=\"item\" />\n                </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n                <h3>{{item.name}}</h3>\n                <hr/>\n            \n                <p>{{item.description}}</p>\n                <hr/>\n            \n                <h4>Price: <strong>{{item.unit_price | currency: 'INR'}}</strong></h4>\n                <hr/>\n                        \n                <a routerLink=\"/items\" class=\"btn btn-success\">\n                    <i class=\"fas fa-arrow-left\"></i> Back\n                </a>\n            \n                <a routerLink=\"#\" class=\"btn btn-primary ml-1\">\n                    <i class=\"fas fa-cart-arrow-down\"></i> Add to cart\n                </a>\n\n\n                \n            </div>\n\n\n        </div>\n\n    </div>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"header\"> Murli Bhujia Bhandar \n    <p class=\"tag-line\"> Exclusive Variety <br> Reasonable Price </p>\n  </div>\n  <div class=\"link\">\n    <a class = \"nav-bar \" href=\"#\">HOME</a>\n    <a class = \"nav-bar \" href=\"#\">LOGIN</a>\n    <a class = \"nav-bar \" href=\"#\">MENU</a>\n  </div>\n   -->\n   <app-add-item></app-add-item>\n\n   \n<div class=\"container\">\n    <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group login-form\">\n                <div class=\"row form-group\">\n                    <!-- <label for=\"name\">Identity : </label>  -->\n                    IDENTITY :   <input type=\"text\" class=\" input-form\" id = \"identity\" required [(ngModel)] = \"customer.identity\" name=\"identity\" placeholder=\"\" size = \"30px\" required>\n                </div>\n                <div class=\"row form-group\">\n                    <!-- <label for=\"name\">Password : </label>  -->\n                    PASSWORD :    <input type=\"password\" class=\" input-form\" id = \"password\" required [(ngModel)] = \"customer.password\" name=\"password\" placeholder=\"\" size = \"30px\" required>\n                </div>\n        </div>\n        <div class=\"row button\">\n            <div class=\"col-lg-6 col-sm-12\">\n                <button type=\"submit\" class=\"btn login\">login</button>\n            </div>\n            <div class=\"col-lg-6 col-sm-12\">\n                <button (click) = \"createAccount()\" class=\"btn create-an-account\" >create a new account</button>\n            </div>\n        </div>\n</form>\n</div>\n\n<!-- <section id=\"footer\">\n    <div class=\"footer\">\n        <div class=\"about-us\">\n            <p>Contact Number : +91 7790870740 , +91 9414222991 </p>\n            <p>Rameshwar Lal Agarwal</p>\n            <p>Manoj Kumar Agarwal</p>\n            <p>Mohit Agarwal</p>\n        </div>\n        <div class=\"floater\">\n            <p>Copyright &copy 2020 Bikaner, Rajasthan, India ; All rights reserved</p>\n        </div>\n    </div>\n<section>\t\n -->\n\n<app-delete-item></app-delete-item> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"page-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 text-center\">\n                <span class=\"display-1 d-block\">404</span>\n                <div class=\"mb-4 lead\">The page you are looking for was not found.</div>\n                <a routerLink=\"/home\" class=\"btn btn-link\">Back to Home</a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n<div class=\"container-fluid p-0\">\n    <div class=\"card-blue-header\"></div>\n    <div class=\"card-sky-header\"></div>\n    <div class=\"header\">Mode of Payment\n        <div class=\"input\">\n            <form class=\"option\">\n                <fieldset><input type=\"radio\" onclick=\"radio()\" name=\"yes|no\" id=\"radio\"> PAYTM  </fieldset> \n                <fieldset><input type=\"radio\" name=\"yes|no\"> PHONEPE </fieldset>\n                <fieldset><input type=\"radio\" name=\"yes|no\">  GOOGLE PAY </fieldset>\n                <fieldset><input type=\"radio\" name=\"yes|no\">  CASH ON DELIVERY</fieldset>\n\n            </form>\n        </div>\n    </div>\n\n\n    <!-- <div class=\"col-lg-3\">\n        <div class=\"debit-card\" id=\"p\">\n            <img src=\"\" height=\"50px\" width=\"150px\">\n        <div class=\"bank-name\">SBI</div>\n        <div class=\"card-blue\"></div>\n        <div class=\"card-sky\"></div>\n\n        <form>\n            <input class=\"name\" type=\"text\" name=\"holder\" placeholder=\"Card holder's name\">\n            <input class=\"card-number\" type=\"text\" name=\"cardnumber\" placeholder=\"Enter the card number\">\n            <input class=\"expiry\" type=\"text\" name=\"expiry\" placeholder=\"Valid\">\n            <input class=\"cvv-number\" type=\"text\" name=\"cvv\" placeholder=\"CVV\">\t\n        </form>\n\n        </div>\n    </div> -->\n    \n    <br><br><br>\n    <div class=\"row\">    \n        <div class=\"col-lg-12 col-sm-12\"> \n            <button type=\"submit\" (click) = \"proceed()\" class=\"footer\" >Proceed</button>\n        </div>\n    </div>    \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-nav ml-0\">\n    <input type=\"text\" #searchInput (keyup.enter)=\"searchBooks(searchInput.value)\" class=\"form-control\"\n        placeholder=\"Search items\">\n    <button type=\"submit\" (click)=\"searchBooks(searchInput.value)\" class=\"btn btn-primary ml-0\">Search</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-add-item></app-add-item> -->\n\n<div class=\"wrapper\">\n\n    <div class=\"content\">\n  \n      \n      \n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n          <div class=\"container\">\n            <a class=\"navbar-brand\" routerLink=\"/books\">{{this.user.identity}}</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n              <app-search></app-search> \n              \n              <!-- <div class=\"ml-auto\"> \n                <app-cart-status></app-cart-status>\n              </div>  -->\n\n              <div class=\"ml-auto\"> \n                <app-buy-cart-status></app-buy-cart-status>\n              </div> \n  \n    \n              <ul class=\"navbar-nav ml-auto\">\n                <!-- <li class=\"nav-item active\">\n                  <a class=\"nav-link\">home\n                    <span class=\"sr-only\">(current)</span> \n                  </a>\n                </li> -->\n                <li class=\"nav-item  mx-auto\">\n                  <a class=\"nav-link\" href=\"#\">delete an item</a>\n                </li>\n                <li class=\"nav-item mx-auto\">\n                  <a class=\"nav-link\" href=\"#\">update an item</a>\n                </li>\n                <li class=\"nav-item mx-auto\">\n                  <a class=\"nav-link \" routerLink = \"add\">add an item</a>\n                </li> \n              </ul> \n            </div>\n          </div>\n        </nav>\n        \n    \n  <div class=\"container\">\n  \n  <div class=\"row\">\n      <div class=\"col-lg-3\"><br>\n        <br><br><br>\n        <div class=\"list-group\">\n            <!-- <a routerLink=\"/category/1\" class=\"list-group-item\" routerLinkActive=\"bg-primary text-white font-weight-bold\">Web Development</a> -->\n            <!-- <a routerLink=\"/category/2\" class=\"list-group-item\" routerLinkActive=\"bg-primary text-white font-weight-bold\">Programming</a> -->\n            <!-- <a routerLink=\"/category/3\" class=\"list-group-item\" routerLinkActive=\"bg-primary text-white font-weight-bold\">Databases</a>  -->\n            <app-item-category></app-item-category>\n        </div>\n      </div>\n    \n    \n    \n        <div class=\"col-lg-9\"><br><br><br><br>\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let item of items\">\n              <div class=\"card h-100\">\n                <a routerLink = \"/{{this.user.identity}}/items/{{item.id}}\">\n                  <img class=\"card-img-top img-responsive\" [src]=\"item.image_url\" height=\"200\" width=\"200\">\n                </a>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">\n                    <a routerLink=\"/items/{{item.id}}\">{{item.name}}</a>\n                  </h4>\n                  <h5>{{item.unit_price | currency: 'INR'}}</h5>\n                  <p class=\"card-text text-truncate\">{{item.description}}</p>\n                  \n                </div>\n                <div class=\"card-footer\">\n                  <button class=\"btn btn-primary btn-green float-left\" (click)=\"addToBuyCart(item)\">buy cart</button>\n                  <button class=\"btn btn-primary float-right\" (click)=\"addToCart(item)\">add to cart</button>\n                </div>\n              </div>\n            </div>\n          <div *ngIf=\"items?.length == 0\" class = \"col-md-6 alert alert-warning md-3\">\n            no books found\n          </div>\n          </div>\n        </div>\n    \n    </div>\n    <!-- /.row -->\n    \n  </div> \n  \n  </div>\n  \n  </div>    \n      <!-- Footer -->\n      <!-- <footer class=\"py-5 footer\">\n        <div class=\"container\">\n          <p class=\"m-0 text-center text-dark\">Copyright &copy; Your Website 2019</p>\n        </div> -->\n        <!-- /.container -->\n      <!-- </footer>   -->\n    \n      <section id=\"footer\">\n        <div class=\"footer\">\n            <div class=\"about-us\">\n                <p>Contact Number : +91 7790870740 , +91 9414222991 </p>\n                <p>Rameshwar Lal Agarwal</p>\n                <p>Manoj Kumar Agarwal</p>\n                <p>Mohit Agarwal</p>\n            </div>\n            <div class=\"floater\">\n                <p>Copyright &copy 2020 Bikaner, Rajasthan, India ; All rights reserved</p>\n            </div>\n        </div>\n    <section>\t\n    \n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"header\"> Murli Bhujia Bhandar \n    <p class=\"tag-line\"> Exclusive Variety <br> Reasonable Price </p>\n  </div>\n  <div class=\"link\">\n    <a class = \"nav-bar \" href=\"#\">HOME</a>\n    <a class = \"nav-bar \" href=\"#\">LOGIN</a>\n    <a class = \"nav-bar \" href=\"#\">MENU</a>\n  </div> -->\n\n  <app-add-item></app-add-item>\n\n\n<div class=\"container\" >\n\n    <form class=\"form-horizontal\" role=\"form\" (ngSubmit)=\"onSubmit()\">\n                <p>INFORMATION</p>\n                <div class=\"form-group\">\n                    <label for=\"name\" class=\"col-sm-3 control-label\">Name</label>\n\n                    <div class=\"col-sm-9\"> \n                        <input type=\"text\" id=\"name\" placeholder=\"\" [(ngModel)]=\"customer.name\" name=\"name\" class=\"form-control\" autofocus> \n                    </div> \n                </div>\n                <div class=\"form-group\">\n                    <label for=\"identity\" class=\"col-sm-3 control-label\">Identity</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"identity\" placeholder=\"\" [(ngModel)]=\"customer.identity\" name=\"identity\" class=\"form-control\" autofocus>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"col-sm-3 control-label\">Password </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"password\" id=\"password\" placeholder=\"\" [(ngModel)]= \"customer.password\" name=\"password\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"contact\" class=\"col-sm-3 control-label\">Contact</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"password\" id=\"contact\" placeholder=\"\" [(ngModel)]= \"customer.contact\" name=\"contact\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"address\" class=\"col-sm-3 control-label\">Address</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"address\" placeholder=\"\" [(ngModel)]=\"customer.address\" name=\"address\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"city\" class=\"col-sm-3 control-label\">City</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"city\" placeholder=\"\" [(ngModel)]=\"customer.city\" class=\"form-control\" name = \"city\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"state\" class=\"col-sm-3 control-label\">State </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"state\" placeholder=\"\" [(ngModel)]=\"customer.state\" name=\"state\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"country\" class=\"col-sm-3 control-label\">Country </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"height\" placeholder=\"\" [(ngModel)]=\"customer.country\" name=\"country\" class=\"form-control\">\n                    </div>\n                </div>\n                <br>\n                <button type=\"submit\" class=\"btn btn-primary btn-block mx-auto\">CREATE AN ACCOUNT</button>\n            </form> <!-- /form -->\n        </div> <!-- ./container -->\n\n<app-delete-item></app-delete-item>        \n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header\r\n{\r\n\theight: 100px;\r\n\twidth: 104vw;\r\n   font-size: 100vw;\r\n   background-color: yellow;\r\n   color: purple;\r\n}\r\n\r\n.container\r\n{\r\n\tleft: 50px;\r\n}\r\n\r\n.title\r\n{\r\n\tfont-size: 4.5vw;\r\n\ttext-align: center;\r\n}\r\n\r\n.tag-line\r\n{\r\n\tfont-style: italic;\r\n\tfont-size: 25px;\r\n\tpadding-right: 20px;\r\n\tpadding-top: 75px;\r\n}\r\n\r\n.link\r\n{\r\n   height: 60px;\r\n   font-size: 20px;\r\n   color: red;\r\n   word-spacing: 50px; \r\n   background-color: lime;\r\n   padding-top: 10px;\r\n   width: 104vw;\r\n\r\n}\r\n\r\n.nav-bar \r\n{\r\n\t\r\n\ttext-decoration: none;\r\n\tmargin-left: 25px;\r\n\tmargin-top: 10px;\r\n\tpadding: 10px;\r\n\tborder-color: white ;\r\n\tborder-style: solid;\r\n\tborder-radius: 10px;\r\n\ttransition: color 1s 0.25s , background-color 1s 0.25s;\r\n\r\n}\r\n\r\n.nav-bar:hover\r\n{\r\n\tcolor: red;\r\n\tbackground-color: skyblue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxhQUFhO0NBQ2IsWUFBWTtHQUNWLGdCQUFnQjtHQUNoQix3QkFBd0I7R0FDeEIsYUFBYTtBQUNoQjs7QUFFQTs7Q0FFQyxVQUFVO0FBQ1g7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBQ0E7O0dBRUcsWUFBWTtHQUNaLGVBQWU7R0FDZixVQUFVO0dBQ1Ysa0JBQWtCO0dBQ2xCLHNCQUFzQjtHQUN0QixpQkFBaUI7R0FDakIsWUFBWTs7QUFFZjs7QUFDQTs7O0NBR0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHNEQUFzRDs7QUFFdkQ7O0FBQ0E7O0NBRUMsVUFBVTtDQUNWLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyXHJcbntcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdHdpZHRoOiAxMDR2dztcclxuICAgZm9udC1zaXplOiAxMDB2dztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICBjb2xvcjogcHVycGxlO1xyXG59XHJcblxyXG4uY29udGFpbmVyXHJcbntcclxuXHRsZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udGl0bGVcclxue1xyXG5cdGZvbnQtc2l6ZTogNC41dnc7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFnLWxpbmVcclxue1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG4ubGlua1xyXG57XHJcbiAgIGhlaWdodDogNjBweDtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBjb2xvcjogcmVkO1xyXG4gICB3b3JkLXNwYWNpbmc6IDUwcHg7IFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xyXG4gICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgd2lkdGg6IDEwNHZ3O1xyXG5cclxufVxyXG4ubmF2LWJhciBcclxue1xyXG5cdFxyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogMjVweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiB3aGl0ZSA7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRyYW5zaXRpb246IGNvbG9yIDFzIDAuMjVzICwgYmFja2dyb3VuZC1jb2xvciAxcyAwLjI1cztcclxuXHJcbn1cclxuLm5hdi1iYXI6aG92ZXJcclxue1xyXG5cdGNvbG9yOiByZWQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddItemComponent = class AddItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")).default]
    })
], AddItemComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm2015/ngx-wow.js");



let AppComponent = class AppComponent {
    constructor(wow_Service) {
        this.wow_Service = wow_Service;
        this.title = 'APP';
        this.wow_Service.init();
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-item/delete-item.component */ "./src/app/delete-item/delete-item.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _buy_cart_buy_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buy-cart/buy-cart.component */ "./src/app/buy-cart/buy-cart.component.ts");
/* harmony import */ var _buy_cart_status_buy_cart_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./buy-cart-status/buy-cart-status.component */ "./src/app/buy-cart-status/buy-cart-status.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart-status/cart-status.component */ "./src/app/cart-status/cart-status.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _item_category_item_category_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./item-category/item-category.component */ "./src/app/item-category/item-category.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./final/final.component */ "./src/app/final/final.component.ts");



























const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'home/category/:id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'home/search/:keyword', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'add-item', component: _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"] },
    { path: 'delete-item', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: ':identity/items', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_25__["ShopComponent"] },
    { path: ':identity/payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_23__["PaymentComponent"] },
    { path: ':identity/category/:id', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_25__["ShopComponent"] },
    { path: ':identity/search/:keyword', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_25__["ShopComponent"] },
    { path: ':identity/buy-cart-details', component: _buy_cart_buy_cart_component__WEBPACK_IMPORTED_MODULE_15__["BuyCartComponent"] },
    { path: ':identity/cart-details', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"] },
    { path: ':identity/invoice', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceComponent"] },
    { path: ':identity/final', component: _final_final_component__WEBPACK_IMPORTED_MODULE_26__["FinalComponent"] },
    { path: 'items/:id', component: _item_item_component__WEBPACK_IMPORTED_MODULE_20__["ItemComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_8__["AddItemComponent"],
            _delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_9__["DeleteItemComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
            _buy_cart_buy_cart_component__WEBPACK_IMPORTED_MODULE_15__["BuyCartComponent"],
            _buy_cart_status_buy_cart_status_component__WEBPACK_IMPORTED_MODULE_16__["BuyCartStatusComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"],
            _cart_status_cart_status_component__WEBPACK_IMPORTED_MODULE_18__["CartStatusComponent"],
            _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceComponent"],
            _item_item_component__WEBPACK_IMPORTED_MODULE_20__["ItemComponent"],
            _item_category_item_category_component__WEBPACK_IMPORTED_MODULE_21__["ItemCategoryComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"],
            _payment_payment_component__WEBPACK_IMPORTED_MODULE_23__["PaymentComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_25__["ShopComponent"],
            _final_final_component__WEBPACK_IMPORTED_MODULE_26__["FinalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            // NgwWowModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/buy-cart-status/buy-cart-status.component.css":
/*!***************************************************************!*\
  !*** ./src/app/buy-cart-status/buy-cart-status.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eS1jYXJ0LXN0YXR1cy9idXktY2FydC1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/buy-cart-status/buy-cart-status.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/buy-cart-status/buy-cart-status.component.ts ***!
  \**************************************************************/
/*! exports provided: BuyCartStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCartStatusComponent", function() { return BuyCartStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/buy-cart.service */ "./src/app/services/buy-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BuyCartStatusComponent = class BuyCartStatusComponent {
    constructor(_buycartService, _activatedRoute) {
        this._buycartService = _buycartService;
        this._activatedRoute = _activatedRoute;
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        this.updateBuyCartStatus();
        this.identity = this._activatedRoute.snapshot.paramMap.get("identity");
    }
    updateBuyCartStatus() {
        //subscribe to the events
        this._buycartService.totalPrice.subscribe(data => this.totalPrice = data);
        this._buycartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    }
};
BuyCartStatusComponent.ctorParameters = () => [
    { type: _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_2__["BuyCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BuyCartStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-cart-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buy-cart-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cart-status/buy-cart-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buy-cart-status.component.css */ "./src/app/buy-cart-status/buy-cart-status.component.css")).default]
    })
], BuyCartStatusComponent);



/***/ }),

/***/ "./src/app/buy-cart/buy-cart.component.css":
/*!*************************************************!*\
  !*** ./src/app/buy-cart/buy-cart.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eS1jYXJ0L2J1eS1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/buy-cart/buy-cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/buy-cart/buy-cart.component.ts ***!
  \************************************************/
/*! exports provided: BuyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCartComponent", function() { return BuyCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/buy-cart.service */ "./src/app/services/buy-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");






let BuyCartComponent = class BuyCartComponent {
    constructor(_buycartService, router, _activatedRoute, _customerService) {
        this._buycartService = _buycartService;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this._customerService = _customerService;
        this.cartItems = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        this.identity = this._activatedRoute.snapshot.paramMap.get("identity");
        this._customerService.retrieveCustomerDetails(this.identity).subscribe(data => { this.user = data[0]; console.log(data[0]); this._customerService.customerData(data); });
        // this._customerService.retrieveCustomerDetails(this.identity).subscribe(data => { this.user = data; console.log(data);  this._customerService.customerData(data);})
        this.cartDetails();
    }
    cartDetails() {
        this.cartItems = this._buycartService.cartItems;
        this._buycartService.totalPrice.subscribe(data => this.totalPrice = data);
        this._buycartService.totalQuantity.subscribe(data => this.totalQuantity = data);
        this._buycartService.calculateTotalPrice();
    }
    saveBuyCart() {
        // this.mailService();
        for (var i = 0; i < this.cartItems.length; i++) {
            this.cartItems[i].customer_identity = this.identity;
            this.cartItems[i].counter = 0;
        }
        this._buycartService.purchaseBuyCart(this.cartItems).subscribe(data => {
            console.log(data);
            this.url = '/' + this.identity + '/invoice';
            this.router.navigate([this.url]);
        }, error => console.log(error));
    }
};
BuyCartComponent.ctorParameters = () => [
    { type: _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_2__["BuyCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
];
BuyCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buy-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cart/buy-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buy-cart.component.css */ "./src/app/buy-cart/buy-cart.component.css")).default]
    })
], BuyCartComponent);



/***/ }),

/***/ "./src/app/cart-status/cart-status.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cart-status/cart-status.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtc3RhdHVzL2NhcnQtc3RhdHVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/cart-status/cart-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cart-status/cart-status.component.ts ***!
  \******************************************************/
/*! exports provided: CartStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStatusComponent", function() { return CartStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CartStatusComponent = class CartStatusComponent {
    constructor(_cartService, _activatedRoute) {
        this._cartService = _cartService;
        this._activatedRoute = _activatedRoute;
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        this.updateCartStatus();
        this.identity = this._activatedRoute.snapshot.paramMap.get("identity");
    }
    updateCartStatus() {
        //subscribe to the events
        this._cartService.totalPrice.subscribe(data => this.totalPrice = data);
        this._cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    }
};
CartStatusComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CartStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-status/cart-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-status.component.css */ "./src/app/cart-status/cart-status.component.css")).default]
    })
], CartStatusComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _entity_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/customer */ "./src/app/entity/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CartComponent = class CartComponent {
    constructor(_cartService, _customerService, _activatedRoute) {
        this._cartService = _cartService;
        this._customerService = _customerService;
        this._activatedRoute = _activatedRoute;
        this.cartItems = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
        this.user = new _entity_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
    }
    ngOnInit() {
        this.cartDetails();
        this.user.identity = this._activatedRoute.snapshot.paramMap.get("identity");
    }
    cartDetails() {
        this.cartItems = this._cartService.cartItems;
        this._cartService.totalPrice.subscribe(data => this.totalPrice = data);
        this._cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
        this._cartService.calculateTotalPrice();
    }
    saveCart() {
        this._cartService.saveCart(this.cartItems).subscribe(data => console.log(data), error => console.log(error));
    }
    getCart() {
        this._cartService.retrieveCart(this.user.identity).subscribe(data => { console.log(data); this.cartItems = data; }, error => console.log(error));
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/delete-item/delete-item.component.css":
/*!*******************************************************!*\
  !*** ./src/app/delete-item/delete-item.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.footer\r\n{\r\n    height: 300px;\r\n    background-color: black;\r\n    \r\n    padding-bottom: 5px;\r\n    border-radius: 5px;\r\n        \r\n}\r\n\r\n.footer p\r\n{\r\n    color: white;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.about-us\r\n{\r\n    margin-top: 25px;\r\n}\r\n\r\n.floater\r\n{\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlLWl0ZW0vZGVsZXRlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHVCQUF1Qjs7SUFFdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1pdGVtL2RlbGV0ZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3RlclxyXG57XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbi5mb290ZXIgcFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uYWJvdXQtdXNcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmZsb2F0ZXJcclxue1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/delete-item/delete-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/delete-item/delete-item.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemComponent", function() { return DeleteItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeleteItemComponent = class DeleteItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeleteItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-item/delete-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-item.component.css */ "./src/app/delete-item/delete-item.component.css")).default]
    })
], DeleteItemComponent);



/***/ }),

/***/ "./src/app/entity/buy-cart.ts":
/*!************************************!*\
  !*** ./src/app/entity/buy-cart.ts ***!
  \************************************/
/*! exports provided: BuyCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCart", function() { return BuyCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BuyCart {
}
// export class BuyCart {
//     id: Number
//     customerIdentity: String
//     name: String
//     description: String
//     imageUrl: String
//     unitPrice: number
//     totalQuantity: number
//     totalPrice: number
//     counter: number
// }


/***/ }),

/***/ "./src/app/entity/cart.ts":
/*!********************************!*\
  !*** ./src/app/entity/cart.ts ***!
  \********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cart {
}
// export class Cart {
//     id: Number
//     customerIdentity: String
//     name: String
//     description: String
//     imageUrl: String
//     unitPrice: number
//     totalQuantity: number
//     totalPrice: number
// }


/***/ }),

/***/ "./src/app/entity/customer.ts":
/*!************************************!*\
  !*** ./src/app/entity/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Customer {
}


/***/ }),

/***/ "./src/app/entity/item.ts":
/*!********************************!*\
  !*** ./src/app/entity/item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
}


/***/ }),

/***/ "./src/app/final/final.component.css":
/*!*******************************************!*\
  !*** ./src/app/final/final.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".first\r\n{\r\n\tcolor: #006eff;\r\n\tfont-size: 40px;\r\n\tmargin-top: 20px;\r\n}\r\n.second\r\n{\r\n\tfont-size: 50px;\r\n\tcolor: green;\r\n}\r\n.card\r\n{\r\n\theight: 225px;\r\n\twidth: 200px;\r\n\tbackground-color: #00BEFE  ;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 25px;\r\n\tpadding-top: 100px;\r\n\tpadding-left: 20px;\r\n\r\n\ttransition: transform 3s 0.1s;\r\n\tcolor: white;\r\n\tborder-radius: 15px;\t\r\n\tfont-style: italic;\r\n\tfont-size: 25px;\r\n\r\n}\r\n.scratch-card\r\n{\r\n\theight: 225px;\r\n\twidth: 200px;\r\n\tbackground-color: #E6E6FA;\r\n\tpadding-top: 10px;\r\n\tpadding-left: 0px;\r\n\r\n\ttext-align: center;\r\n\tmargin-left: 20px;\r\n\tmargin-top: -225px;\r\n\tcolor:  #00BEFE;\r\n\tborder-radius: 15px;\r\n\tfont-style: italic;\r\n}\r\n.card:hover\r\n{\r\n\ttransform: translateX(150px);\r\n}\r\n.btn\r\n{\r\n\tmargin-top: 10px;\r\n\tbackground-color: green;\r\n\theight: 50px;\r\n\tcolor: white;\r\n}\r\n/* .head-dark\r\n{\r\n\theight: 100px;\r\n\twidth: 1500px;\r\n\tbackground-color: #7CFC00;\r\n}\r\n.head-light\r\n{\r\n\theight: 40px;\r\n\twidth: 100vw;\r\n\tbackground-color: #008000;\r\n}\t */\r\n.invoice\r\n{\r\n\tpadding: 20px 20px 20px 20px;\r\n\tborder-style: solid;\r\n\tborder-color: #008000;\r\n \theight: 1000px;\r\n \tfont-size: 25px;\r\n \tfont-style: italic;\r\n \t\r\n}\r\nh1\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tcolor: #ADFF2F;\r\n\ttext-align: center;\r\n}\r\nh2\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tfont-size: 50px;\r\n\tcolor: lime;\r\n\ttext-align: center;\r\n}\r\nh3\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right:auto;\r\n\tfont-size: 5.5vw;\r\n\tcolor: green;\r\n\tpadding-bottom: 20px;\r\n}\r\nh4\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tfont-size: 20px;\r\n\tcolor: darkgreen;\r\n}\r\ntable\r\n{\t\r\n\tword-spacing: 10px;\r\n\tcolor: darkgreen;\r\n\tfont-size: 25px;\r\n\t/* border: 5px solid black; */\r\n\t/* margin-top: 50px; */\r\n}\r\nth\r\n{\r\n\t/* text-decoration: underline; */\r\n\t/* color: yellow; */\r\n\t/* border: 5px solid black; */\r\n\tmargin: 5px 5px 5px 5px;\r\n\tpadding: 5px 5px 5px 5px;\r\n}\r\n/* td\r\n{\r\n\tcolor: orange;\r\n\tborder: 5px solid black; \r\n} */\r\n.personal-details\r\n{\r\n\tcolor: purple;\r\n}\r\n.btn{\r\n\twidth: 75px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwvZmluYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFFQTs7Q0FFQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7O0NBRWxCLDZCQUE2QjtDQUM3QixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixlQUFlOztBQUVoQjtBQUVBOztDQUVDLGFBQWE7Q0FDYixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixpQkFBaUI7O0NBRWpCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBRUE7O0NBRUMsNEJBQTRCO0FBQzdCO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osWUFBWTtBQUNiO0FBQ0E7Ozs7Ozs7Ozs7O0lBV0k7QUFDSjs7Q0FFQyw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLHFCQUFxQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CO0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLG9CQUFvQjtBQUNyQjtBQUNBOztDQUVDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLDZCQUE2QjtDQUM3QixzQkFBc0I7QUFDdkI7QUFDQTs7Q0FFQyxnQ0FBZ0M7Q0FDaEMsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsd0JBQXdCO0FBQ3pCO0FBQ0E7Ozs7R0FJRztBQUNIOztDQUVDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvZmluYWwvZmluYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdFxyXG57XHJcblx0Y29sb3I6ICMwMDZlZmY7XHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnNlY29uZFxyXG57XHJcblx0Zm9udC1zaXplOiA1MHB4O1xyXG5cdGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmNhcmRcclxue1xyXG5cdGhlaWdodDogMjI1cHg7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMEJFRkUgIDtcclxuXHRtYXJnaW4tdG9wOiAxMDBweDtcclxuXHRtYXJnaW4tbGVmdDogMjVweDtcclxuXHRwYWRkaW5nLXRvcDogMTAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM3MgMC4xcztcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcdFxyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblxyXG59XHJcblxyXG4uc2NyYXRjaC1jYXJkXHJcbntcclxuXHRoZWlnaHQ6IDIyNXB4O1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkZBO1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXRvcDogLTIyNXB4O1xyXG5cdGNvbG9yOiAgIzAwQkVGRTtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmNhcmQ6aG92ZXJcclxue1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCk7XHJcbn1cclxuLmJ0blxyXG57XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIC5oZWFkLWRhcmtcclxue1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0d2lkdGg6IDE1MDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN0NGQzAwO1xyXG59XHJcbi5oZWFkLWxpZ2h0XHJcbntcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbn1cdCAqL1xyXG4uaW52b2ljZVxyXG57XHJcblx0cGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwODAwMDtcclxuIFx0aGVpZ2h0OiAxMDAwcHg7XHJcbiBcdGZvbnQtc2l6ZTogMjVweDtcclxuIFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG4gXHRcclxufVxyXG5oMVxyXG57XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdGNvbG9yOiAjQURGRjJGO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMlxyXG57XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHRjb2xvcjogbGltZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDNcclxue1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDphdXRvO1xyXG5cdGZvbnQtc2l6ZTogNS41dnc7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbmg0XHJcbntcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxudGFibGVcclxue1x0XHJcblx0d29yZC1zcGFjaW5nOiAxMHB4O1xyXG5cdGNvbG9yOiBkYXJrZ3JlZW47XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG5cdC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXHJcbn1cclxudGhcclxue1xyXG5cdC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xyXG5cdC8qIGNvbG9yOiB5ZWxsb3c7ICovXHJcblx0LyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXHJcblx0bWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XHJcblx0cGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcbi8qIHRkXHJcbntcclxuXHRjb2xvcjogb3JhbmdlO1xyXG5cdGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyBcclxufSAqL1xyXG4ucGVyc29uYWwtZGV0YWlsc1xyXG57XHJcblx0Y29sb3I6IHB1cnBsZTtcclxufVxyXG5cclxuLmJ0bntcclxuXHR3aWR0aDogNzVweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/final/final.component.ts":
/*!******************************************!*\
  !*** ./src/app/final/final.component.ts ***!
  \******************************************/
/*! exports provided: FinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalComponent", function() { return FinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/buy-cart.service */ "./src/app/services/buy-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FinalComponent = class FinalComponent {
    constructor(_buycartService, _customerService, router) {
        this._buycartService = _buycartService;
        this._customerService = _customerService;
        this.router = router;
        this.cartItems = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        this._buycartService.totalPrice.subscribe(data => this.totalPrice = data);
        this._buycartService.totalQuantity.subscribe(data => this.totalQuantity = data);
        this._buycartService.calculateTotalPrice();
        this._buycartService.buyCartItemsSubscriber.subscribe(data => this.cartItems = data);
        // this._customerService.user_id.subscribe(data => this.customerDetails = data);
        this._customerService.user_id.subscribe(data => this.customerDetails = data[0]);
        this.cashBack = this.totalPrice * (11 / 100);
    }
    add() {
    }
};
FinalComponent.ctorParameters = () => [
    { type: _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_3__["BuyCartService"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-final',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./final.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/final/final.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./final.component.css */ "./src/app/final/final.component.css")).default]
    })
], FinalComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/item */ "./src/app/entity/item.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FooterComponent = class FooterComponent {
    constructor(item_service, router) {
        this.item_service = item_service;
        this.router = router;
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newitem() {
        this.submitted = false;
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
    }
    save() {
        console.log(this.item);
        this.item_service.deleteItem(this.item).subscribe(data => console.log(data), error => console.log(error));
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        this.router.navigate(['/login']);
    }
    onSubmit() {
        this.save();
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/item */ "./src/app/entity/item.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(item_service, router) {
        this.item_service = item_service;
        this.router = router;
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newitem() {
        this.submitted = false;
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
    }
    save() {
        console.log(this.item);
        this.item_service.addItem(this.item).subscribe(data => console.log(data), error => console.log(error));
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        this.router.navigate(['/login']);
    }
    onSubmit() {
        this.save();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.row\r\n{\r\n}\r\n\r\n.col\r\n{\r\n    height: 400px;\r\n}\r\n\r\n/*==============================\r\n        BUTTON\r\n==============================*/\r\n\r\n.btn-general\r\n{\r\n    border-width: 2px;\r\n    border-radius: 0;\r\n    padding: 12px 26px 12px 26px;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.btn-white\r\n{\r\n    border-color: #fff;\r\n    color: #fff;\r\n}\r\n\r\n.btn-white:hover, .btn-white:focus\r\n{\r\n    color: #41464b;\r\n    background-color: #fff;\r\n}\r\n\r\n.btn-blue\r\n{\r\n    border-color: #34c6d3;\r\n    color: #34c6d3;\r\n}\r\n\r\n.btn-blue:hover, .btn-blue:focus\r\n{ \r\n    color: #34c6d3;\r\n    background-color: #fff;\r\n}\r\n\r\n/*==============================\r\n        CONTENT\r\n==============================*/\r\n\r\n.content-box\r\n{\r\n    padding: 60px 0px 60px 0px;\r\n}\r\n\r\n.content-title h3{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    margin: 0px 0px 30px 0px ;\r\n}\r\n\r\n.content-title-white h3{\r\n    color: white;\r\n}\r\n\r\n.content-title-underline\r\n{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: #34c6d3;\r\n    margin: 0 auto 0 auto;\r\n}\r\n\r\n/*==============================\r\n        HOME\r\n==============================*/\r\n\r\n#home\r\n{\r\n    height: 400px;\r\n}\r\n\r\n#home-cover{\r\n    background-image: url('FLUTE.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    width: 103vw;\r\n    height: 500px;\r\n}\r\n\r\n#home-content-box\r\n{\r\n    display: table;\r\n\r\n}\r\n\r\n#home-content-box-inner\r\n{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    /* text-align: center; */\r\n}\r\n\r\n#home-heading h3{\r\n    color: white;\r\n    font-size: 55px;\r\n    font-weight: 700;\r\n    margin: 0px 0px 0px 0px;\r\n    text-transform: uppercase;\r\n  \r\n}\r\n\r\n/*==============================\r\n        PARALLAX EFFECT\r\n==============================*/\r\n\r\n.bg-parallax\r\n{\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n\r\n}\r\n\r\n/*==============================\r\n        GLOWING EFFECT\r\n==============================*/\r\n\r\n.glowing\r\n{\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 30%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.glowing span\r\n{\r\n    color: #fff;\r\n\r\n    font-family: verdana;\r\n    font-size: 25px;\r\n    display: inline-block;\r\n    -webkit-animation: animates 3s linear infinite ;\r\n            animation: animates 3s linear infinite ;\r\n    width: 6.5vw;\r\n    height: 50px;\r\n    text-align: center;\r\n    line-height: 48px;\r\n\r\n    border: 1px solid rgba(255,255,255,0.4);\r\n    margin: 5px -2.5px ;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n\r\n\r\n}\r\n\r\n@-webkit-keyframes animates\r\n{\r\n    0%\r\n    {\r\n        color: #f00;\r\n/*      box-shadow: 0px 2px 10px rgba(255,0,0,1);\r\n        border: 1px solid rgba(255,0,0,1); \r\n*/  \r\n            background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n}\r\n    20%\r\n    {\r\n        color: #ff0;\r\n/*      box-shadow: 0px 2px 10px rgba(255,255,0,1);\r\n        border: 1px solid rgba(255,255,0,1); \r\n*/  \r\n            background: linear-gradient(0deg, #333399 , #0099FF , #00CCFF);\r\n\r\n    }\r\n    40%\r\n    {\r\n        color: #0f0;\r\n/*      box-shadow: 0px 2px 10px rgba(0,255,0,1);\r\n        border: 1px solid rgba(0,255,0,1); \r\n*/  \r\n                background: linear-gradient(0deg, #00CC66 , #339933 , #336600);\r\n\r\n}\r\n    60%\r\n    {\r\n        color: #00f;\r\n/*      box-shadow: 0px 2px 10px rgba(0,0,255,1);\r\n        border: 1px solid rgba(0,0,255,1); \r\n*/  \r\n            background: linear-gradient(0deg, #9900CC , #CC99FF, #6600FF);\r\n\r\n}\r\n\r\n    80%\r\n    {\r\n        color: #0ff;\r\n/*      box-shadow: 0px 2px 10px rgba(0,255,255,1);\r\n        border: 1px solid rgba(0,255,255,1);    \r\n*/  \r\n                        background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n}\r\n\r\n    100%\r\n    {\r\n        color: #f00;\r\n/*      box-shadow: 0px 2px 10px rgba(255,0,0,1);\r\n        border: 1px solid rgba(255,0,0,1); \r\n*/  \r\n                            background: linear-gradient(0deg, #CC0033 , #FF0033 , #FF3366);\r\n\r\n}\r\n}\r\n\r\n@keyframes animates\r\n{\r\n    0%\r\n    {\r\n        color: #f00;\r\n/*      box-shadow: 0px 2px 10px rgba(255,0,0,1);\r\n        border: 1px solid rgba(255,0,0,1); \r\n*/  \r\n            background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n}\r\n    20%\r\n    {\r\n        color: #ff0;\r\n/*      box-shadow: 0px 2px 10px rgba(255,255,0,1);\r\n        border: 1px solid rgba(255,255,0,1); \r\n*/  \r\n            background: linear-gradient(0deg, #333399 , #0099FF , #00CCFF);\r\n\r\n    }\r\n    40%\r\n    {\r\n        color: #0f0;\r\n/*      box-shadow: 0px 2px 10px rgba(0,255,0,1);\r\n        border: 1px solid rgba(0,255,0,1); \r\n*/  \r\n                background: linear-gradient(0deg, #00CC66 , #339933 , #336600);\r\n\r\n}\r\n    60%\r\n    {\r\n        color: #00f;\r\n/*      box-shadow: 0px 2px 10px rgba(0,0,255,1);\r\n        border: 1px solid rgba(0,0,255,1); \r\n*/  \r\n            background: linear-gradient(0deg, #9900CC , #CC99FF, #6600FF);\r\n\r\n}\r\n\r\n    80%\r\n    {\r\n        color: #0ff;\r\n/*      box-shadow: 0px 2px 10px rgba(0,255,255,1);\r\n        border: 1px solid rgba(0,255,255,1);    \r\n*/  \r\n                        background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n}\r\n\r\n    100%\r\n    {\r\n        color: #f00;\r\n/*      box-shadow: 0px 2px 10px rgba(255,0,0,1);\r\n        border: 1px solid rgba(255,0,0,1); \r\n*/  \r\n                            background: linear-gradient(0deg, #CC0033 , #FF0033 , #FF3366);\r\n\r\n}\r\n}\r\n\r\n/*==============================\r\n        DISCOUNT COMPONENT\r\n==============================*/\r\n\r\n.left\r\n{\r\n    height: 400px;\r\n    padding-left: 100px;\r\n    background-color: black;\r\n}\r\n\r\n.middle\r\n{\r\n    height: 400px;\r\n    padding-top: 100px;\r\n    text-align: center; \r\n    background-color: black; \r\n}\r\n\r\n.middle p\r\n{\r\n    font-size: 20px;\r\n    color: blue;\r\n    font-style: italic;\r\n   /* animation: animate 3s linear infinite ; */\r\n}\r\n\r\n.right\r\n{\r\n    height: 400px;\r\n    padding-left: 100px;\r\n    background-color: black;\r\n}\r\n\r\n.box\r\n{\r\n    position: absolute;\r\n/*  top: 40%;\r\n    left: 40%;\r\n*/  margin-top: 20px;\r\n    height:300px;\r\n    width: 200px;\r\n    \r\n\r\n    transform: perspective(1000px) rotateX(45deg) ;  /* it will set the perspective of 3-D*/\r\n    transform-style: preserve-3d;    /* it will preseve the 3-D space */\r\n    -webkit-animation: animate 5s linear infinite;\r\n            animation: animate 5s linear infinite;\r\n    \r\n}\r\n\r\n.box div \r\n{\r\n    position: absolute;\r\n/*  top: 0;\r\n    left: 0;\r\n*/  height: 300px;\r\n    width: 200px;\r\n    border-radius: 20px;\r\n    transform-style: preserve-3d;    /* it will preseve the 3-D space */\r\n    \r\n}\r\n\r\n.box div span \r\n{\r\n    position: absolute;\r\n/*  top: 0;\r\n    left: 0;\r\n*/  display: block;\r\n    height: 300px;\r\n    width: 200px;\r\n    border-radius: 20px;\r\n    background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n    -webkit-animation: animates 3s infinite;\r\n            animation: animates 3s infinite;\r\n\r\n}\r\n\r\n/*\r\n.box div span\r\n{\r\n    color: #fff;\r\n    font-family: verdana;\r\n    display: inline-block;\r\n    animation: animate 3s linear infinite ;\r\n    width: 48px;\r\n    height: 48px;\r\n    text-align: center;\r\n    line-height: 48px;\r\n    border: 1px solid rgba(255,255,255,0.4);\r\n  margin: 0px -2.5px ;\r\n\r\n\r\n\r\n}\r\n*/\r\n\r\n.box div span:nth-child(1)\r\n{\r\n    transform: rotateX(0deg);\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n\r\n}\r\n\r\n.box div span:nth-child(2)\r\n{\r\n    transform: rotateX(45deg);\r\n    -webkit-animation-delay: 0.3s;\r\n            animation-delay: 0.3s;\r\n\r\n}\r\n\r\n.box div span:nth-child(3)\r\n{\r\n    transform: rotateX(-45deg);\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n\r\n}\r\n\r\n.box div span:nth-child(4)\r\n{\r\n    transform: rotateX(90deg);\r\n    -webkit-animation-delay: 0.9s;\r\n            animation-delay: 0.9s;\r\n\r\n}\r\n\r\n.box div span:nth-child(5)\r\n{\r\n    -webkit-animation-delay: 1.2s;\r\n            animation-delay: 1.2s;\r\n}\r\n\r\n@-webkit-keyframes animate \r\n{\r\n    0%\r\n    {\r\n        transform: perspective(750px) rotateY(0deg);\r\n\r\n    background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n    }\r\n    20%\r\n    {\r\n            background: linear-gradient(0deg, #333399 , #0099FF , #00CCFF);\r\n\r\n    }\r\n    40%\r\n    {\r\n\r\n                background: linear-gradient(0deg, #00CC66 , #339933 , #336600);\r\n\r\n    }\r\n    60%\r\n    {\r\n            background: linear-gradient(0deg, #9900CC , #CC99FF, #6600FF);\r\n\r\n    }\r\n    80%\r\n    {\r\n                        background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n    }\r\n    100%\r\n    {\r\n        transform: perspective(750px) rotateY(359deg);\r\n\r\n    }\r\n}\r\n\r\n@keyframes animate \r\n{\r\n    0%\r\n    {\r\n        transform: perspective(750px) rotateY(0deg);\r\n\r\n    background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n    }\r\n    20%\r\n    {\r\n            background: linear-gradient(0deg, #333399 , #0099FF , #00CCFF);\r\n\r\n    }\r\n    40%\r\n    {\r\n\r\n                background: linear-gradient(0deg, #00CC66 , #339933 , #336600);\r\n\r\n    }\r\n    60%\r\n    {\r\n            background: linear-gradient(0deg, #9900CC , #CC99FF, #6600FF);\r\n\r\n    }\r\n    80%\r\n    {\r\n                        background: linear-gradient(0deg, #0B6623 , #bbb , #FD6A02);\r\n\r\n    }\r\n    100%\r\n    {\r\n        transform: perspective(750px) rotateY(359deg);\r\n\r\n    }\r\n}\r\n\r\n/*==============================\r\n        SERVICES\r\n==============================*/\r\n\r\n.container\r\n{\r\n}\r\n\r\n#services\r\n{\r\n\r\n}\r\n\r\n.service-item\r\n{\r\n   cursor: pointer;\r\n}\r\n\r\n.service-item-icon i{\r\n    color: #34c6d3;\r\n    width: 100px;\r\n    height: 100px;\r\n\r\n}\r\n\r\n.service-item:hover .service-item-icon i{\r\n    color: #fff;\r\n    background-color: #34c6d3;\r\n}\r\n\r\n.service-item-title h3{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    margin: 0px 0px 10px 0px;\r\n}\r\n\r\n.service-item-desc p{\r\n    margin: 0;\r\n    padding-left: 85px;\r\n}\r\n\r\n/*==============================\r\n        ABOUT\r\n==============================*/\r\n\r\n#about\r\n{\r\n    position: relative;\r\n    height: 800px;\r\n}\r\n\r\n#about-bg-diagonal{\r\n    \r\n    /* background-color: red; */\r\n    height: 400px;\r\n    background-image: url('team-5.JPG');\r\n    border-left: 200px solid white; \r\n    border-top: 700px solid transparent;\r\n}\r\n\r\n#about-content-box\r\n{\r\n    height: 400px;\r\n}\r\n\r\n#about-content-box-outer\r\n{\r\n    display: table;\r\n}\r\n\r\n#about-content-box-inner\r\n{\r\n    display: table-cell;\r\n    vertical-align: middle;     \r\n}\r\n\r\n#about .content-title h3{\r\n    text-align: left;\r\n}\r\n\r\n#about .content-title-underline{\r\n    margin: 0px 0px 0px 0px;\r\n    /* text-align: left; */\r\n}\r\n\r\n/*==============================\r\n        WORK\r\n==============================*/\r\n\r\n#work\r\n{\r\n}\r\n\r\n.row.no-gutters [class*=col-]{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n\r\n}\r\n\r\n.img-wrapper{\r\n    overflow: hidden;\r\n}\r\n\r\n.img-wrapper img{\r\n    transition: transform .5s ease;\r\n}\r\n\r\n.img-wrapper img:hover{\r\n    transform: scale(1.5);\r\n}\r\n\r\n/*==============================\r\n        TEAM\r\n==============================*/\r\n\r\n#team\r\n{\r\n    position: relative;\r\n    top: 900px;\r\n}\r\n\r\n.team-member{\r\n    margin: 0px 15px;\r\n}\r\n\r\n.team-member-info{\r\n    padding: 10px 0px 30px 0px;\r\n}\r\n\r\nh4.team-member-name{\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n    padding-top: 20px ;\r\n\r\n}\r\n\r\nh4.team-member-designation{\r\n    color: #34c6d3;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    font-style: italic;\r\n    letter-spacing: 1px ;\r\n    margin-top: 20px;    \r\n}\r\n\r\n/*==============================\r\n        TESTIMONIAL\r\n==============================*/\r\n\r\n#testimonial\r\n{\r\n    background-color: rgba(0, 0, 0.2);\r\n    margin-left: 5px;\r\n}\r\n\r\n#testimonial-cover{\r\n    background-image: url('bg-testimonials.jpg'); \r\n}\r\n\r\n#testimonial .content-box{\r\n    background-color: rgba(0, 0, 0.2);\r\n}\r\n\r\n#customer-testimonials{\r\n    padding: 50px 0;\r\n}\r\n\r\n.testimonial img\r\n{\r\n    max-width: 120px;\r\n    border: solid 2px;\r\n    border-radius: 100px;\r\n\r\n    margin: 0 auto 0 auto ;\r\n}\r\n\r\n.testimonial blockquote{\r\n    border: 0;\r\n    font-family: Georgia, sans-serif;\r\n    font-style: italic;\r\n    color: #fff;\r\n    padding: 6px 15px;\r\n\r\n}\r\n\r\n.testimonial blockquote p{\r\n    color: #fff;\r\n}\r\n\r\n.testimonial blockquote::after\r\n.testimonial blockquote::before{\r\n    font-size: 80px;\r\n    font-style: normal;\r\n    line-height: 1;\r\n    width: 30px;\r\n    height: 30px  ;\r\n}\r\n\r\n.testimonial blockquote::before{\r\n    content: \"\\201C\";\r\n}\r\n\r\n.testimonial blockquote::after{\r\n    content: \"\\201D\";\r\n}\r\n\r\n/*==============================\r\n        TESTIMONIAL\r\n==============================*/\r\n\r\n.application\r\n{\r\n    /* border: solid 1px; */\r\n    margin: 2px 2px 2px 2px; \r\n\r\n}\r\n\r\n.application h4 \r\n{\r\n    font-size: 25px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    font-style: bold;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    font-style: italic;\r\n}\r\n\r\n.application h3\r\n{\r\n    font-size: 25px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    font-style: bold;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    font-style: italic;\r\n}\r\n\r\n.offline-video\r\n{\r\n    height: 250px;\r\n    width: 325px;\r\n    border: solid 1px black;\r\n    border-top-right-radius: 50px    ;\r\n    border-bottom-left-radius: 50px; \r\n    margin-left: 25px;\r\n}\r\n\r\n.offline-content \r\n{\r\n    font-style: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.offline-content p\r\n{\r\n    font-style: bold;\r\n    font-size: 20px;\r\n    margin-left: 25px;\r\n    font-style: bold;\r\n    color: black;\r\n}\r\n\r\n.online-video\r\n{\r\n    height: 250px;\r\n    width: 325px;\r\n    margin-left: 25px;\r\n    margin-top: 75px;\r\n    border: solid 1px black;\r\n    border-top-left-radius: 50px    ;\r\n    border-bottom-right-radius: 50px; \r\n\r\n\r\n}\r\n\r\n.online-content\r\n{\r\n    font-style: bold;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.online .online-content p\r\n{\r\n    font-style: bold;\r\n    font-size: 20px;\r\n    margin-left: 25px;\r\n    font-style: bold;\r\n    color: black;\r\n}\r\n\r\n/*==============================\r\n        NAVIGATION\r\n==============================*/\r\n\r\n#nav-bar\r\n{\r\n}\r\n\r\n.nav-bar\r\n{\r\n   height: 50px;\r\n   background-color: black;\r\n/*   position: absolute; */\r\n   margin-top: 5px;\r\n   padding-left: 100px;\r\n   word-spacing: 50px;\r\n   color: white;\r\n}\r\n\r\n.nav-link\r\n{\r\n    font-size: 15px;\r\n    list-style: none;\r\n    border-style: solid;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 0px;\r\n    text-decoration: none;\r\n    background-color: blue;\r\n    color: skyblue;\r\n    /* color: white; */\r\n    border-color: skyblue; \r\n    transition: color 0.5s 0.25s , background-color 0.5s 0.25s;\r\n    height: 40px;\r\n    width: 120px;  \r\n\r\n}\r\n\r\n.nav-card\r\n{\r\n    margin-left: 500px;\r\n}\r\n\r\n.nav-link:hover\r\n{\r\n    background-color: red;\r\n    color: yellow;\r\n    text-decoration: none;\r\n    font-style: bold;\r\n}\r\n\r\n.search-bar\r\n{\r\n    margin-left: 90px;\r\n    margin-top: 5px;\r\n    height: 125px;\r\n    width: 75px;\r\n}\r\n\r\ninput{\r\n    border: solid 2px skyblue;\r\n    color: skyblue;\r\n    background-color: blue;\r\n    \r\n    border-radius: 20px;\r\n\r\n}\r\n\r\n/*==============================\r\n        NAVIGATION\r\n==============================*/\r\n\r\n.card .h-150 .image\r\n{\r\n    height: 175px;\r\n}\r\n\r\n/*==============================\r\n        FOOTER\r\n==============================*/\r\n\r\n.footer\r\n{\r\n    height: 200px;\r\n    margin-top: 25px;\r\n    background-color: black;\r\n    \r\n    padding-bottom: 5px;\r\n    border-radius: 5px;\r\n        \r\n}\r\n\r\n.footer p\r\n{\r\n    color: white;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.about-us\r\n{\r\n    margin-top: 25px;\r\n}\r\n\r\n.floater\r\n{\r\n    margin-top: 150px;\r\n    margin-right: 25px;\r\n}\r\n\r\n/*==========================\r\n    login and create-an-account\r\n==========================*/\r\n\r\n.button\r\n{\r\n    font-size: 30px ;\r\n    margin-top: 50px;\r\n}\r\n\r\n.btn\r\n{\r\n    padding: 10px 30px;\r\n\tborder : 1px solid white;\r\n    border-radius: 10px;\r\n    border-width: 2px; \r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n.login\r\n{\r\n\tbackground-color: #3b5998;\r\n}\r\n\r\n.create-an-account\r\n{\r\n\tbackground-color: lime;\r\n\twidth: 100px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztBQUVBOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7OytCQUUrQjs7QUFHL0I7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBOztJQUVJLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTs7K0JBRStCOztBQUUvQjs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFJQTs7K0JBRStCOztBQUcvQjs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0NBQXFEO0lBQ3JELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix5QkFBeUI7O0FBRTdCOztBQUdBOzsrQkFFK0I7O0FBRS9COztJQUVJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7OytCQUUrQjs7QUFHL0I7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLFdBQVc7O0lBRVgsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7O0FBR3JCOztBQUVBOztJQUVJOztRQUVJLFdBQVc7QUFDbkI7O0NBRUM7WUFDVywyREFBMkQ7O0FBRXZFO0lBQ0k7O1FBRUksV0FBVztBQUNuQjs7Q0FFQztZQUNXLDhEQUE4RDs7SUFFdEU7SUFDQTs7UUFFSSxXQUFXO0FBQ25COztDQUVDO2dCQUNlLDhEQUE4RDs7QUFFOUU7SUFDSTs7UUFFSSxXQUFXO0FBQ25COztDQUVDO1lBQ1csNkRBQTZEOztBQUV6RTs7SUFFSTs7UUFFSSxXQUFXO0FBQ25COztDQUVDO3dCQUN1QiwyREFBMkQ7O0FBRW5GOztJQUVJOztRQUVJLFdBQVc7QUFDbkI7O0NBRUM7NEJBQzJCLDhEQUE4RDs7QUFFMUY7QUFDQTs7QUExREE7O0lBRUk7O1FBRUksV0FBVztBQUNuQjs7Q0FFQztZQUNXLDJEQUEyRDs7QUFFdkU7SUFDSTs7UUFFSSxXQUFXO0FBQ25COztDQUVDO1lBQ1csOERBQThEOztJQUV0RTtJQUNBOztRQUVJLFdBQVc7QUFDbkI7O0NBRUM7Z0JBQ2UsOERBQThEOztBQUU5RTtJQUNJOztRQUVJLFdBQVc7QUFDbkI7O0NBRUM7WUFDVyw2REFBNkQ7O0FBRXpFOztJQUVJOztRQUVJLFdBQVc7QUFDbkI7O0NBRUM7d0JBQ3VCLDJEQUEyRDs7QUFFbkY7O0lBRUk7O1FBRUksV0FBVztBQUNuQjs7Q0FFQzs0QkFDMkIsOERBQThEOztBQUUxRjtBQUNBOztBQUdBOzsrQkFFK0I7O0FBRy9COztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtHQUNuQiw0Q0FBNEM7QUFDL0M7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBSUE7O0lBRUksa0JBQWtCO0FBQ3RCOztDQUVDLEdBQUcsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZOzs7SUFHWiw4Q0FBOEMsR0FBRyxzQ0FBc0M7SUFDdkYsNEJBQTRCLEtBQUssa0NBQWtDO0lBQ25FLDZDQUFxQztZQUFyQyxxQ0FBcUM7O0FBRXpDOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7Q0FFQyxHQUFHLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRCQUE0QixLQUFLLGtDQUFrQzs7QUFFdkU7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztDQUVDLEdBQUcsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJEQUEyRDtJQUMzRCx1Q0FBK0I7WUFBL0IsK0JBQStCOztBQUVuQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQkM7O0FBRUQ7O0lBRUksd0JBQXdCO0lBQ3hCLDJCQUFtQjtZQUFuQixtQkFBbUI7O0FBRXZCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6Qiw2QkFBcUI7WUFBckIscUJBQXFCOztBQUV6Qjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsNkJBQXFCO1lBQXJCLHFCQUFxQjs7QUFFekI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLDZCQUFxQjtZQUFyQixxQkFBcUI7O0FBRXpCOztBQUVBOztJQUVJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUk7O1FBRUksMkNBQTJDOztJQUUvQywyREFBMkQ7O0lBRTNEO0lBQ0E7O1lBRVEsOERBQThEOztJQUV0RTtJQUNBOzs7Z0JBR1ksOERBQThEOztJQUUxRTtJQUNBOztZQUVRLDZEQUE2RDs7SUFFckU7SUFDQTs7d0JBRW9CLDJEQUEyRDs7SUFFL0U7SUFDQTs7UUFFSSw2Q0FBNkM7O0lBRWpEO0FBQ0o7O0FBbkNBOztJQUVJOztRQUVJLDJDQUEyQzs7SUFFL0MsMkRBQTJEOztJQUUzRDtJQUNBOztZQUVRLDhEQUE4RDs7SUFFdEU7SUFDQTs7O2dCQUdZLDhEQUE4RDs7SUFFMUU7SUFDQTs7WUFFUSw2REFBNkQ7O0lBRXJFO0lBQ0E7O3dCQUVvQiwyREFBMkQ7O0lBRS9FO0lBQ0E7O1FBRUksNkNBQTZDOztJQUVqRDtBQUNKOztBQUVBOzsrQkFFK0I7O0FBRS9COztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7R0FFRyxlQUFlO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7OytCQUUrQjs7QUFFL0I7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQ0FBeUQ7SUFDekQsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7OytCQUUrQjs7QUFFL0I7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7K0JBRStCOztBQUUvQjs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBOzsrQkFFK0I7O0FBRS9COztJQUVJLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSw0Q0FBK0Q7QUFDbkU7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9COztJQUVwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7K0JBRStCOztBQUcvQjs7SUFFSSx1QkFBdUI7SUFDdkIsdUJBQXVCOztBQUUzQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUdBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUdBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUdBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGdDQUFnQzs7O0FBR3BDOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTs7K0JBRStCOztBQUUvQjs7QUFFQTs7QUFHQTs7R0FFRyxZQUFZO0dBQ1osdUJBQXVCO0FBQzFCLDBCQUEwQjtHQUN2QixlQUFlO0dBQ2YsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixZQUFZO0FBQ2Y7O0FBR0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMERBQTBEO0lBQzFELFlBQVk7SUFDWixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUkscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUdBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsc0JBQXNCOztJQUV0QixtQkFBbUI7O0FBRXZCOztBQUVBOzsrQkFFK0I7O0FBRS9COztJQUVJLGFBQWE7QUFDakI7O0FBRUE7OytCQUUrQjs7QUFHL0I7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7O0lBRXZCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7MkJBRTJCOztBQUczQjs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtDQUNyQix3QkFBd0I7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUNBOztDQUVDLHlCQUF5QjtBQUMxQjs7QUFDQTs7Q0FFQyxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucm93XHJcbntcclxufVxyXG5cclxuLmNvbFxyXG57XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIEJVVFRPTlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi5idG4tZ2VuZXJhbFxyXG57XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI2cHggMTJweCAyNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmJ0bi13aGl0ZVxyXG57XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi13aGl0ZTpob3ZlciwgLmJ0bi13aGl0ZTpmb2N1c1xyXG57XHJcbiAgICBjb2xvcjogIzQxNDY0YjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tYmx1ZVxyXG57XHJcbiAgICBib3JkZXItY29sb3I6ICMzNGM2ZDM7XHJcbiAgICBjb2xvcjogIzM0YzZkMztcclxufVxyXG5cclxuLmJ0bi1ibHVlOmhvdmVyLCAuYnRuLWJsdWU6Zm9jdXNcclxueyBcclxuICAgIGNvbG9yOiAjMzRjNmQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBDT05URU5UXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4uY29udGVudC1ib3hcclxue1xyXG4gICAgcGFkZGluZzogNjBweCAwcHggNjBweCAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxlIGgze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweCA7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxlLXdoaXRlIGgze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGVudC10aXRsZS11bmRlcmxpbmVcclxue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNGM2ZDM7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBIT01FXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuI2hvbWVcclxue1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuI2hvbWUtY292ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSU1BR0UvRkxVVEUuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwM3Z3O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuI2hvbWUtY29udGVudC1ib3hcclxue1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcblxyXG59XHJcblxyXG4jaG9tZS1jb250ZW50LWJveC1pbm5lclxyXG57XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG5cclxuI2hvbWUtaGVhZGluZyBoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIFBBUkFMTEFYIEVGRkVDVFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuLmJnLXBhcmFsbGF4XHJcbntcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgR0xPV0lORyBFRkZFQ1RcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4uZ2xvd2luZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn1cclxuXHJcbi5nbG93aW5nIHNwYW5cclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGVzIDNzIGxpbmVhciBpbmZpbml0ZSA7XHJcbiAgICB3aWR0aDogNi41dnc7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICBtYXJnaW46IDVweCAtMi41cHggO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXNcclxue1xyXG4gICAgMCVcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuLyogICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgyNTUsMCwwLDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTsgXHJcbiovICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwQjY2MjMgLCAjYmJiICwgI0ZENkEwMik7XHJcblxyXG59XHJcbiAgICAyMCVcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogI2ZmMDtcclxuLyogICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgyNTUsMjU1LDAsMSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDAsMSk7IFxyXG4qLyAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzMzMzk5ICwgIzAwOTlGRiAsICMwMENDRkYpO1xyXG5cclxuICAgIH1cclxuICAgIDQwJVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjMGYwO1xyXG4vKiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsMjU1LDAsMSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDI1NSwwLDEpOyBcclxuKi8gIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMENDNjYgLCAjMzM5OTMzICwgIzMzNjYwMCk7XHJcblxyXG59XHJcbiAgICA2MCVcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogIzAwZjtcclxuLyogICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLDAsMjU1LDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDI1NSwxKTsgXHJcbiovICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM5OTAwQ0MgLCAjQ0M5OUZGLCAjNjYwMEZGKTtcclxuXHJcbn1cclxuXHJcbiAgICA4MCVcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogIzBmZjtcclxuLyogICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgwLDI1NSwyNTUsMSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDI1NSwyNTUsMSk7ICAgIFxyXG4qLyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMEI2NjIzICwgI2JiYiAsICNGRDZBMDIpO1xyXG5cclxufVxyXG5cclxuICAgIDEwMCVcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuLyogICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgyNTUsMCwwLDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDAsMCwxKTsgXHJcbiovICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjQ0MwMDMzICwgI0ZGMDAzMyAsICNGRjMzNjYpO1xyXG5cclxufVxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBESVNDT1VOVCBDT01QT05FTlRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4ubGVmdFxyXG57XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWlkZGxlXHJcbntcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG59XHJcblxyXG4ubWlkZGxlIHBcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgIC8qIGFuaW1hdGlvbjogYW5pbWF0ZSAzcyBsaW5lYXIgaW5maW5pdGUgOyAqL1xyXG59XHJcblxyXG5cclxuLnJpZ2h0XHJcbntcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLmJveFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8qICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuKi8gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBcclxuXHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCg0NWRlZykgOyAgLyogaXQgd2lsbCBzZXQgdGhlIHBlcnNwZWN0aXZlIG9mIDMtRCovXHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyAgICAvKiBpdCB3aWxsIHByZXNldmUgdGhlIDMtRCBzcGFjZSAqL1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIFxyXG59XHJcblxyXG4uYm94IGRpdiBcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vKiAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuKi8gIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgICAgLyogaXQgd2lsbCBwcmVzZXZlIHRoZSAzLUQgc3BhY2UgKi9cclxuICAgIFxyXG59XHJcblxyXG4uYm94IGRpdiBzcGFuIFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8qICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4qLyAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMEI2NjIzICwgI2JiYiAsICNGRDZBMDIpO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlcyAzcyBpbmZpbml0ZTtcclxuXHJcbn1cclxuXHJcbi8qXHJcbi5ib3ggZGl2IHNwYW5cclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogdmVyZGFuYTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAzcyBsaW5lYXIgaW5maW5pdGUgO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICBtYXJnaW46IDBweCAtMi41cHggO1xyXG5cclxuXHJcblxyXG59XHJcbiovXHJcblxyXG4uYm94IGRpdiBzcGFuOm50aC1jaGlsZCgxKVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG5cclxufVxyXG5cclxuLmJveCBkaXYgc3BhbjpudGgtY2hpbGQoMilcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDQ1ZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuXHJcbn1cclxuXHJcbi5ib3ggZGl2IHNwYW46bnRoLWNoaWxkKDMpXHJcbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNDVkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG5cclxufVxyXG5cclxuLmJveCBkaXYgc3BhbjpudGgtY2hpbGQoNClcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC45cztcclxuXHJcbn1cclxuXHJcbi5ib3ggZGl2IHNwYW46bnRoLWNoaWxkKDUpXHJcbntcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSBcclxue1xyXG4gICAgMCVcclxuICAgIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDc1MHB4KSByb3RhdGVZKDBkZWcpO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMEI2NjIzICwgI2JiYiAsICNGRDZBMDIpO1xyXG5cclxuICAgIH1cclxuICAgIDIwJVxyXG4gICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzMzMzM5OSAsICMwMDk5RkYgLCAjMDBDQ0ZGKTtcclxuXHJcbiAgICB9XHJcbiAgICA0MCVcclxuICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwQ0M2NiAsICMzMzk5MzMgLCAjMzM2NjAwKTtcclxuXHJcbiAgICB9XHJcbiAgICA2MCVcclxuICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM5OTAwQ0MgLCAjQ0M5OUZGLCAjNjYwMEZGKTtcclxuXHJcbiAgICB9XHJcbiAgICA4MCVcclxuICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwQjY2MjMgLCAjYmJiICwgI0ZENkEwMik7XHJcblxyXG4gICAgfVxyXG4gICAgMTAwJVxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNzUwcHgpIHJvdGF0ZVkoMzU5ZGVnKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgU0VSVklDRVNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi5jb250YWluZXJcclxue1xyXG59XHJcblxyXG4jc2VydmljZXNcclxue1xyXG5cclxufVxyXG5cclxuLnNlcnZpY2UtaXRlbVxyXG57XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlcnZpY2UtaXRlbS1pY29uIGl7XHJcbiAgICBjb2xvcjogIzM0YzZkMztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG59XHJcblxyXG4uc2VydmljZS1pdGVtOmhvdmVyIC5zZXJ2aWNlLWl0ZW0taWNvbiBpe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjNmQzO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLXRpdGxlIGgze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcclxufSAgICBcclxuXHJcbi5zZXJ2aWNlLWl0ZW0tZGVzYyBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4NXB4O1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIEFCT1VUXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4jYWJvdXRcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxufVxyXG5cclxuI2Fib3V0LWJnLWRpYWdvbmFse1xyXG4gICAgXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9JTUFHRS90ZWFtL3RlYW0tNS5KUEcpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDIwMHB4IHNvbGlkIHdoaXRlOyBcclxuICAgIGJvcmRlci10b3A6IDcwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jYWJvdXQtY29udGVudC1ib3hcclxue1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuI2Fib3V0LWNvbnRlbnQtYm94LW91dGVyXHJcbntcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4jYWJvdXQtY29udGVudC1ib3gtaW5uZXJcclxue1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgICBcclxufVxyXG5cclxuI2Fib3V0IC5jb250ZW50LXRpdGxlIGgze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI2Fib3V0IC5jb250ZW50LXRpdGxlLXVuZGVybGluZXtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBXT1JLXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4jd29ya1xyXG57XHJcbn1cclxuXHJcbi5yb3cubm8tZ3V0dGVycyBbY2xhc3MqPWNvbC1de1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblxyXG59XHJcblxyXG4uaW1nLXdyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1nLXdyYXBwZXIgaW1ne1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG59XHJcblxyXG4uaW1nLXdyYXBwZXIgaW1nOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIFRFQU1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiN0ZWFtXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOTAwcHg7XHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlcntcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlci1pbmZve1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMzBweCAwcHg7XHJcbn1cclxuXHJcbmg0LnRlYW0tbWVtYmVyLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4IDtcclxuXHJcbn1cclxuXHJcbmg0LnRlYW0tbWVtYmVyLWRlc2lnbmF0aW9ue1xyXG4gICAgY29sb3I6ICMzNGM2ZDM7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweCA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgICBcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBURVNUSU1PTklBTFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuI3Rlc3RpbW9uaWFsXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4jdGVzdGltb25pYWwtY292ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSU1BR0UvYmctdGVzdGltb25pYWxzLmpwZ1wiKTsgXHJcbn1cclxuXHJcbiN0ZXN0aW1vbmlhbCAuY29udGVudC1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNjdXN0b21lci10ZXN0aW1vbmlhbHN7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCBpbWdcclxue1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvIDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIGJsb2NrcXVvdGV7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcblxyXG59XHJcblxyXG4udGVzdGltb25pYWwgYmxvY2txdW90ZSBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCBibG9ja3F1b3RlOjphZnRlclxyXG4udGVzdGltb25pYWwgYmxvY2txdW90ZTo6YmVmb3Jle1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweCAgO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgYmxvY2txdW90ZTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcXDIwMUNcIjtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIGJsb2NrcXVvdGU6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcXDIwMURcIjtcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBURVNUSU1PTklBTFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi5hcHBsaWNhdGlvblxyXG57XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweDsgKi9cclxuICAgIG1hcmdpbjogMnB4IDJweCAycHggMnB4OyBcclxuXHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbiBoNCBcclxue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbiBoM1xyXG57XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuXHJcbi5vZmZsaW5lLXZpZGVvXHJcbntcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMzI1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4ICAgIDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4ub2ZmbGluZS1jb250ZW50IFxyXG57XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ub2ZmbGluZS1jb250ZW50IHBcclxue1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSAgIFxyXG5cclxuXHJcbi5vbmxpbmUtdmlkZW9cclxue1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweCAgICA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDsgXHJcblxyXG5cclxufVxyXG5cclxuLm9ubGluZS1jb250ZW50XHJcbntcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG4ub25saW5lIC5vbmxpbmUtY29udGVudCBwXHJcbntcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0gICBcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgTkFWSUdBVElPTlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuI25hdi1iYXJcclxue1xyXG59XHJcblxyXG5cclxuLm5hdi1iYXJcclxue1xyXG4gICBoZWlnaHQ6IDUwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vKiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICB3b3JkLXNwYWNpbmc6IDUwcHg7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5uYXYtbGlua1xyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiBza3libHVlO1xyXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiBza3libHVlOyBcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgMC4yNXMgLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgMC4yNXM7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7ICBcclxuXHJcbn1cclxuXHJcbi5uYXYtY2FyZFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbn1cclxuXHJcblxyXG4ubmF2LWxpbms6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJhclxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBza3libHVlO1xyXG4gICAgY29sb3I6IHNreWJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBOQVZJR0FUSU9OXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4uY2FyZCAuaC0xNTAgLmltYWdlXHJcbntcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgRk9PVEVSXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLmZvb3RlclxyXG57XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4uZm9vdGVyIHBcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmFib3V0LXVzXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5mbG9hdGVyXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBsb2dpbiBhbmQgY3JlYXRlLWFuLWFjY291bnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi5idXR0b25cclxue1xyXG4gICAgZm9udC1zaXplOiAzMHB4IDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5idG5cclxue1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGJvcmRlciA6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG59XHJcbi5sb2dpblxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG4uY3JlYXRlLWFuLWFjY291bnRcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGxpbWU7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm2015/ngx-wow.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/buy-cart.service */ "./src/app/services/buy-cart.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _entity_customer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entity/customer */ "./src/app/entity/customer.ts");










let HomeComponent = class HomeComponent {
    constructor(_router, wow_Services, _itemservice, _activatedRoute, _cartservice, _buycartservice, _customerService) {
        this._router = _router;
        this.wow_Services = wow_Services;
        this._itemservice = _itemservice;
        this._activatedRoute = _activatedRoute;
        this._cartservice = _cartservice;
        this._buycartservice = _buycartservice;
        this._customerService = _customerService;
        this.items = [];
        this.currentCategoryId = 1;
        this.user = new _entity_customer__WEBPACK_IMPORTED_MODULE_8__["Customer"]();
        this.wow_Services.init();
    }
    searchBooks(keyword) {
        console.log('keyword', keyword);
        this._router.navigateByUrl('/search/' + keyword);
    }
    listItems() {
        this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');
        if (this.searchMode) {
            // book list (search)
            this.handleSearchItems();
        }
        else {
            // book list (category)
            this.handleListItems();
        }
    }
    handleListItems() {
        const hasCategoryId = this._activatedRoute.snapshot.paramMap.has("id");
        if (hasCategoryId) {
            this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get("id");
        }
        else {
            this.currentCategoryId = 1;
        }
        //    this._bookservice.getBooks().subscribe(data => { this.books= data; })
        //    this._itemservice.getItems(this.currentCategoryId).subscribe(data => { this.items = data; })
        //    this.items = this._itemservice.getItems(this.currentCategoryId);
        this._itemservice.getItems(this.currentCategoryId).subscribe(items => this.items = items);
        console.log(this.items);
    }
    //  identity : String;
    handleSearchItems() {
        const keyword = this._activatedRoute.snapshot.paramMap.get('keyword');
        this._itemservice.searchItems(keyword).subscribe(items => { this.items = items; });
    }
    ngOnInit() {
        this._activatedRoute.paramMap.subscribe(() => { this.listItems(); });
        $(function () {
            //animate on scroll
        });
        /*===================================
                    WORK
        =====================================*/
        $(function () {
            $("#work").magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        /*===================================
                    TEAM
        =====================================*/
        $(function () {
            $("#team-members").owlCarousel({
                items: 3,
                autoplay: true,
                smartSpeed: 1000,
                loop: true
            });
        });
        /*===================================
                    TESTEMONIAL
        =====================================*/
        $(function () {
            $("#customer-testimonial").owlCarousel({
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                loop: true
            })();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_6__["BuyCartService"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/*!***********************************************!*\
  !*** ./src/app/invoice/invoice.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* body\r\n{\r\n\tbackground-color: #fff;\r\n\t\r\n} */\r\n\r\n\r\n.head-dark\r\n{\r\n\theight: 100px;\r\n\twidth: 100vw;\r\n\tbackground-color: #7CFC00;\r\n}\r\n\r\n\r\n.head-light\r\n{\r\n\theight: 40px;\r\n\twidth: 100vw;\r\n\tbackground-color: #008000;\r\n}\r\n\r\n\r\n.invoice\r\n{\r\n\r\n\tpadding: 20px 20px 20px 20px;\r\n\tborder-style: solid;\r\n\tborder-color: #008000;\r\n \theight: 1000px;\r\n \tfont-size: 25px;\r\n \tfont-style: italic;\r\n \t\r\n}\r\n\r\n\r\nh1\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tcolor: #ADFF2F;\r\n}\r\n\r\n\r\nh2\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tfont-size: 50px;\r\n\tcolor: lime;\r\n}\r\n\r\n\r\nh3\r\n{\r\n\tmargin-left: auto;\r\n\tmargin-right:auto;\r\n\tmargin-top: 25px;\r\n\tfont-size: 5.5vw;\r\n\tcolor: green;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n\r\ntable\r\n{\t\r\n\tword-spacing: 10px;\r\n\tcolor: darkgreen;\r\n\tfont-size: 25px;\r\n\t/* border: 5px solid black; */\r\n\t/* margin-top: 50px; */\r\n}\r\n\r\n\r\nth\r\n{\r\n\t/* text-decoration: underline; */\r\n\t/* color: yellow; */\r\n\t/* border: 5px solid black; */\r\n\tpadding: 5px 5px 5px 5px;\r\n}\r\n\r\n\r\ntd\r\n{\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.personal-details\r\n{\r\n\tcolor: purple;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7O0FBR0g7O0NBRUMsYUFBYTtDQUNiLFlBQVk7Q0FDWix5QkFBeUI7QUFDMUI7OztBQUNBOztDQUVDLFlBQVk7Q0FDWixZQUFZO0NBQ1oseUJBQXlCO0FBQzFCOzs7QUFDQTs7O0NBR0MsNEJBQTRCO0NBQzVCLG1CQUFtQjtDQUNuQixxQkFBcUI7RUFDcEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOzs7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGNBQWM7QUFDZjs7O0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsV0FBVztBQUNaOzs7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLG9CQUFvQjtBQUNyQjs7O0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsNkJBQTZCO0NBQzdCLHNCQUFzQjtBQUN2Qjs7O0FBQ0E7O0NBRUMsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0Isd0JBQXdCO0FBQ3pCOzs7QUFDQzs7Q0FFQSxrQkFBa0I7QUFDbkI7OztBQUNBOztDQUVDLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keVxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcclxufSAqL1xyXG5cclxuXHJcbi5oZWFkLWRhcmtcclxue1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM3Q0ZDMDA7XHJcbn1cclxuLmhlYWQtbGlnaHRcclxue1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxufVx0XHJcbi5pbnZvaWNlXHJcbntcclxuXHJcblx0cGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1jb2xvcjogIzAwODAwMDtcclxuIFx0aGVpZ2h0OiAxMDAwcHg7XHJcbiBcdGZvbnQtc2l6ZTogMjVweDtcclxuIFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG4gXHRcclxufVxyXG5oMVxyXG57XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdGNvbG9yOiAjQURGRjJGO1xyXG59XHJcbmgyXHJcbntcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0Zm9udC1zaXplOiA1MHB4O1xyXG5cdGNvbG9yOiBsaW1lO1xyXG59XHJcbmgzXHJcbntcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6YXV0bztcclxuXHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdGZvbnQtc2l6ZTogNS41dnc7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbnRhYmxlXHJcbntcdFxyXG5cdHdvcmQtc3BhY2luZzogMTBweDtcclxuXHRjb2xvcjogZGFya2dyZWVuO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHQvKiBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgKi9cclxuXHQvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xyXG59XHJcbnRoXHJcbntcclxuXHQvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cclxuXHQvKiBjb2xvcjogeWVsbG93OyAqL1xyXG5cdC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG5cdHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG4gdGRcclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAgXHJcbi5wZXJzb25hbC1kZXRhaWxzXHJcbntcclxuXHRjb2xvcjogcHVycGxlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/buy-cart.service */ "./src/app/services/buy-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let InvoiceComponent = class InvoiceComponent {
    constructor(_activatedRoute, _buycartService, _customerService, router) {
        this._activatedRoute = _activatedRoute;
        this._buycartService = _buycartService;
        this._customerService = _customerService;
        this.router = router;
        this.cartItems = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
    ngOnInit() {
        this._buycartService.totalPrice.subscribe(data => this.totalPrice = data);
        this._buycartService.totalQuantity.subscribe(data => this.totalQuantity = data);
        this._buycartService.calculateTotalPrice();
        this._buycartService.buyCartItemsSubscriber.subscribe(data => this.cartItems = data);
        this._customerService.user_id.subscribe(data => this.customerDetails = data[0]);
        //  this._customerService.user_id.subscribe(data => this.customerDetails = data)
        console.log(this.customerDetails);
    }
};
InvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_3__["BuyCartService"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice.component.css */ "./src/app/invoice/invoice.component.css")).default]
    })
], InvoiceComponent);



/***/ }),

/***/ "./src/app/item-category/item-category.component.css":
/*!***********************************************************!*\
  !*** ./src/app/item-category/item-category.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tY2F0ZWdvcnkvaXRlbS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/item-category/item-category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/item-category/item-category.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCategoryComponent", function() { return ItemCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ItemCategoryComponent = class ItemCategoryComponent {
    constructor(_activatedRoute, _itemService) {
        this._activatedRoute = _activatedRoute;
        this._itemService = _itemService;
    }
    ngOnInit() {
        this.listItemCategories();
        this.identity = this._activatedRoute.snapshot.paramMap.get("identity");
    }
    listItemCategories() {
        this._itemService.getItemCategories().subscribe(itemCategories => this.itemCategories = itemCategories);
    }
};
ItemCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }
];
ItemCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-category/item-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-category.component.css */ "./src/app/item-category/item-category.component.css")).default]
    })
], ItemCategoryComponent);



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head-dark\r\n{\r\n\theight: 100px;\r\n\twidth: 1600px;\r\n\tbackground-color: #FFC0CB;\r\n}\r\n.head-light\r\n{\r\n\theight: 40px;\r\n\twidth: 1600px;\r\n\tbackground-color: #800080;\r\n}\t\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsYUFBYTtDQUNiLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7QUFDQTs7Q0FFQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtZGFya1xyXG57XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHR3aWR0aDogMTYwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkMwQ0I7XHJcbn1cclxuLmhlYWQtbGlnaHRcclxue1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogMTYwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM4MDAwODA7XHJcbn1cdCJdfQ== */");

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entity_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/item */ "./src/app/entity/item.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");





let ItemComponent = class ItemComponent {
    constructor(_activatedRoute, _itemService) {
        this._activatedRoute = _activatedRoute;
        this._itemService = _itemService;
        this.item = new _entity_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
    }
    ngOnInit() {
        this._activatedRoute.paramMap.subscribe(() => { this.getBookInfo(); });
    }
    getBookInfo() {
        const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._itemService.get(id).subscribe(data => {
            this.item = data;
        });
    }
};
ItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }
];
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")).default]
    })
], ItemComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-delete-item\r\n{\r\n}\r\n\r\n.container \r\n{\r\n\tbackground-size: cover;\r\n}\r\n\r\n.login-form\r\n{\r\n    padding: 10px 30px;\r\n    font-size: 25px ;\r\n\tmargin-top: 100px;\r\n\tmargin-left: 10vw;\r\n}\r\n\r\n.input-form\r\n{\r\n\tpadding: 10px 10px;\r\n\tfont-size: 15px;\r\n\tfont-style: bold;\r\n}\r\n\r\n.button\r\n{\r\n    font-size: 30px ;\r\n}\r\n\r\n.btn\r\n{\r\n\tpadding: 10px 30px;\r\n\tborder : 1px solid white;\r\n    border-radius: 10px;\r\n    border-width: 2px; \r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n\r\n.login\r\n{\r\n\t\r\n\tbackground-color: #3b5998;\r\n\twidth: 400px;\r\n}\r\n\r\n.create-an-account\r\n{\r\n\tbackground-color: lime;\r\n\twidth: 400px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQixpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsd0JBQXdCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOzs7Q0FHQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBOztDQUVDLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWRlbGV0ZS1pdGVtXHJcbntcclxufVxyXG5cclxuLmNvbnRhaW5lciBcclxue1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweCA7XHJcblx0bWFyZ2luLXRvcDogMTAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwdnc7XHJcbn1cclxuXHJcbi5pbnB1dC1mb3JtXHJcbntcclxuXHRwYWRkaW5nOiAxMHB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b25cclxue1xyXG4gICAgZm9udC1zaXplOiAzMHB4IDtcclxufVxyXG5cclxuLmJ0blxyXG57XHJcblx0cGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGJvcmRlciA6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5sb2dpblxyXG57XHJcblx0XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGUtYW4tYWNjb3VudFxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogbGltZTtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/customer */ "./src/app/entity/customer.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(customer_service, router) {
        this.customer_service = customer_service;
        this.router = router;
        this.customer = new _entity_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.submitted = false;
        this.boolean = false;
        this.user = new _entity_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    ngOnInit() {
    }
    newEmployee() {
        this.submitted = false;
        this.customer = new _entity_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    save() {
        this.customer_service.login(this.customer).subscribe(data => {
            console.log(data);
            this.boolean = data;
            if (this.boolean) {
                console.log(this.customer.identity);
                this.customer_service.retrieveCustomerDetails(this.customer.identity).subscribe(data => {
                    this.customer = data[0];
                    console.log(data[0]);
                    this.customer_service.customerData(data);
                });
                // this.customer_service.retrieveCustomerDetails(this.customer.identity).subscribe(data => { this.customer = data; console.log(data);  this.customer_service.customerData(data);
                // });
                this.url = '/' + this.customer.identity + '/items';
                this.router.navigate([this.url]);
            }
            else {
                console.log("wrong password or identity");
            }
        }, error => console.log(error));
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    createAccount() {
        this.router.navigate(['/signup']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body\r\n{\r\n    background: #dedede;\r\n}\r\n\r\n.page-wrap\r\n{\r\n    min-height: 75vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHlcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2RlZGVkZTtcclxufVxyXG5cclxuLnBhZ2Utd3JhcFxyXG57XHJcbiAgICBtaW4taGVpZ2h0OiA3NXZoO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-blue-header\r\n{\r\n    height: 100px;\r\n    width: 100vw;\r\n    background-color: #00b9f1;\r\n}\r\n.card-sky-header\r\n{\r\n    height: 40px;\r\n    width: 100vw;\r\n    background-color: #002e6e;\r\n}\r\n.header\r\n{\r\n        font-size: 50px;\r\n        padding: 20px 20px 20px 20px;\r\n        margin: 10px 10px 10px 10px;\r\n        color: #00b9f1;\r\n}\r\n.debit-card\r\n{\r\n    \r\n    padding: 20px 20px 20px 0px;\r\n    border-style: solid;\r\n    border-color: #002e6e;;\r\n    border-radius: 25px;\r\n    height: 250px;\r\n    background-color: white;\r\n    transition: 5s  ;\r\n}\r\n.bank-name\r\n{\r\n    margin: 0px;\r\n    padding: 2px 2px 2px 15px ;\r\n    color: purple;\r\n    font-size: 30px;\r\n\r\n}\r\n.card-blue\r\n{\t\r\n    \r\n    margin-left: 0px;\r\n    height: 20px;\r\n    background-color: #00b9f1;\r\n}\r\n.card-sky\r\n{\r\n    height: 10px;\r\n\r\n    margin-left: 0px;\r\n    background-color: #002e6e;\r\n    \r\n}\r\n.input\r\n{\r\n    font-size: 20px;\r\n    margin: 20px 5px 5px 5px;\r\n\r\n}\r\n.input\r\n{\r\n    margin-top: 25px;\r\n    margin-left: 25px;\r\n    color: #002e6e;\r\n}\r\nimg\r\n{\r\n    float: right;\r\n    margin-top: -20px;\r\n}\r\n.name\r\n{\r\n    height: 25px;\r\n    width: 250px;\r\n    margin-top: 25px ;\r\n    margin-left: 10px; \r\n    font-size: 20px;\r\n    padding: 15px 10px 15px 25px;\r\n    border-color: #00b9f1;\r\n    color: #002e6e;\r\n\r\n}\r\n.card-number\r\n {\r\n     height: 25px;\r\n     width: 300px;\r\n     margin: 5px 5px 5px 10px;\r\n     padding: 15px 10px 15px 25px;\r\n     font-size: 20px;\r\n     border-color: #00b9f1;\r\n     color: #002e6e;\r\n}\r\n.expiry\r\n{\r\n    height: 25px;\r\n    width: 75px;\r\n    margin-top: 0px ;\r\n    margin-left: 50px; \r\n    font-size: 20px;\r\n    padding: 15px 10px 15px 10px;\r\n    border-color: #00b9f1;\r\n    color: #002e6e;\r\n\r\n}\r\n.cvv-number\r\n{\r\n    height: 25px;\r\n    width: 55px;\r\n    margin-top: 0px ;\r\n    margin-left: 50px; \r\n    font-size: 20px;\r\n    padding: 15px 10px 15px 5px;\r\n    border-color: #00b9f1;\r\n    color: #002e6e;\r\n\r\n}\r\nfieldset\r\n{\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n.option\r\n{\r\n    margin-right: 0px;\r\n}\r\n.footer\r\n{\r\n    background-color:  #00b9f1;\r\n    height: 125px;\r\n    width: 100vw;\r\n    font-size: 5.5vw;\r\n    padding-left: 0px ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBOztRQUVRLGVBQWU7UUFDZiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLGNBQWM7QUFDdEI7QUFDQTs7O0lBR0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZUFBZTs7QUFFbkI7QUFDQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxZQUFZOztJQUVaLGdCQUFnQjtJQUNoQix5QkFBeUI7O0FBRTdCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLHdCQUF3Qjs7QUFFNUI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGNBQWM7O0FBRWxCO0FBRUE7O0tBRUssWUFBWTtLQUNaLFlBQVk7S0FDWix3QkFBd0I7S0FDeEIsNEJBQTRCO0tBQzVCLGVBQWU7S0FDZixxQkFBcUI7S0FDckIsY0FBYztBQUNuQjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixjQUFjOztBQUVsQjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixjQUFjOztBQUVsQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ibHVlLWhlYWRlclxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjlmMTtcclxufVxyXG4uY2FyZC1za3ktaGVhZGVyXHJcbntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJlNmU7XHJcbn1cclxuXHJcbi5oZWFkZXJcclxue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICBjb2xvcjogIzAwYjlmMTtcclxufVxyXG4uZGViaXQtY2FyZFxyXG57XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDJlNmU7O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDVzICA7XHJcbn1cclxuXHJcbi5iYW5rLW5hbWVcclxue1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAxNXB4IDtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcblxyXG59XHJcbi5jYXJkLWJsdWVcclxue1x0XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOWYxO1xyXG59XHJcbi5jYXJkLXNreVxyXG57XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJlNmU7XHJcbiAgICBcclxufVxyXG4uaW5wdXRcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDVweCA1cHggNXB4O1xyXG5cclxufVxyXG4uaW5wdXRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDJlNmU7XHJcbn1cclxuaW1nXHJcbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4ubmFtZVxyXG57XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4IDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGI5ZjE7XHJcbiAgICBjb2xvcjogIzAwMmU2ZTtcclxuXHJcbn1cclxuXHJcbi5jYXJkLW51bWJlclxyXG4ge1xyXG4gICAgIGhlaWdodDogMjVweDtcclxuICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgbWFyZ2luOiA1cHggNXB4IDVweCAxMHB4O1xyXG4gICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDI1cHg7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIGJvcmRlci1jb2xvcjogIzAwYjlmMTtcclxuICAgICBjb2xvcjogIzAwMmU2ZTtcclxufVxyXG4uZXhwaXJ5XHJcbntcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4IDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGI5ZjE7XHJcbiAgICBjb2xvcjogIzAwMmU2ZTtcclxuXHJcbn1cclxuLmN2di1udW1iZXJcclxue1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7IFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBiOWYxO1xyXG4gICAgY29sb3I6ICMwMDJlNmU7XHJcblxyXG59XHJcbmZpZWxkc2V0XHJcbntcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcbi5vcHRpb25cclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmZvb3RlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwYjlmMTtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBmb250LXNpemU6IDUuNXZ3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PaymentComponent = class PaymentComponent {
    constructor(_activatedRoute, router) {
        this._activatedRoute = _activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.identity = this._activatedRoute.snapshot.paramMap.get("identity");
    }
    proceed() {
        this.url = "/" + this.identity + "/final";
        this.router.navigate([this.url]);
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")).default]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SearchComponent = class SearchComponent {
    constructor(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    ngOnInit() {
    }
    searchBooks(keyword) {
        const id = this._activatedRoute.snapshot.paramMap.get('identity');
        console.log('keyword', keyword);
        this._router.navigateByUrl(id + '/search/' + keyword);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/buy-cart.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/buy-cart.service.ts ***!
  \**********************************************/
/*! exports provided: BuyCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCartService", function() { return BuyCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let BuyCartService = class BuyCartService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        //  private categoryUrl = "http://localhost:8088/api/item-category";
        //  private baseUrl = "http://localhost:8088/api";
        //  private categoryUrl = "http://127.0.0.1:8000/api/item-category";
        //  private baseUrl = "http://127.0.0.1:8000/api";
        // local machine
        // private baseUrl = "http://localhost:3000/api";
        // private categoryUrl = "http://localhost:3000/api/item-category";
        // live server
        this.baseUrl = "api";
        this.categoryUrl = "api/item-category";
        this.cartItems = [];
        this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.buyCartItems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.cartItems);
        this.buyCartItemsSubscriber = this.buyCartItems.asObservable();
    }
    addToBuyCart(theCartItem) {
        //check already item in the cart 
        let alreadyExistsInCart = false;
        let existingCartItem = undefined;
        if (this.cartItems.length > 0) {
            //find the item in the cart based on id
            existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.name === theCartItem.name);
            //check if we found it
            alreadyExistsInCart = (existingCartItem != undefined);
        }
        if (alreadyExistsInCart) {
            //increment the quantity
            existingCartItem.total_quantity++;
        }
        else {
            //add to cart item array
            this.cartItems.push(theCartItem);
        }
        this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        let totalPriceValue = 0;
        let totalQuantityValue = 0;
        for (let currentCartItem of this.cartItems) {
            totalPriceValue += currentCartItem.total_quantity * currentCartItem.unit_price;
            totalQuantityValue += currentCartItem.total_quantity;
            currentCartItem.total_price = currentCartItem.total_quantity * currentCartItem.unit_price;
        }
        console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
        this.totalPrice.next(totalPriceValue);
        this.totalQuantity.next(totalQuantityValue);
    }
    // addToBuyCart(theCartItem: BuyCart){
    //   //check already item in the cart 
    //   let alreadyExistsInCart: boolean = false;
    //   let existingCartItem: BuyCart = undefined;
    //   if(this.cartItems.length > 0){
    //     //find the item in the cart based on id
    //     existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.name === theCartItem.name);
    //     //check if we found it
    //     alreadyExistsInCart = (existingCartItem != undefined)
    //   } 
    //   if(alreadyExistsInCart){
    //     //increment the quantity
    //     existingCartItem.totalQuantity++;
    //   }else {
    //     //add to cart item array
    //     this.cartItems.push(theCartItem);
    //   }
    //   this.calculateTotalPrice();
    // }
    // calculateTotalPrice() {
    //   let totalPriceValue: number = 0;
    //   let totalQuantityValue: number = 0;
    //   for(let currentCartItem of this.cartItems){
    //     totalPriceValue += currentCartItem.totalQuantity * currentCartItem.unitPrice;
    //     totalQuantityValue += currentCartItem.totalQuantity;
    //     currentCartItem.totalPrice = currentCartItem.totalQuantity*currentCartItem.unitPrice;
    //   }
    //   console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
    //   this.totalPrice.next(totalPriceValue);
    //   this.totalQuantity.next(totalQuantityValue);
    // }
    purchaseBuyCart(cartItems) {
        console.log(cartItems);
        this.buyCartItems.next(cartItems);
        // return this.httpclient.post(`${this.baseUrl}/purchase_buy_cart`, cartItems);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("content-type", "application/json");
        return this.httpclient.post(`${this.baseUrl}/purchase_buy_cart`, cartItems, { headers: headers });
        // return this.httpclient.post(this.baseUrl + '/items/', cartItems);
    }
    retrieveBuyCart(identity) {
        return this.httpclient.get(`${this.baseUrl}/get_buy_cart_items/${identity}`);
    }
    sendMail(identity) {
        return this.httpclient.get(`${this.baseUrl}/mail_service/${identity}`);
    }
};
BuyCartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BuyCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BuyCartService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CartService = class CartService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        // private baseUrl = "http://localhost:8088/api";
        // private baseUrl = "http://127.0.0.1:8000/api";
        // local machine
        // private baseUrl = "http://localhost:3000/api";
        // live server
        this.baseUrl = "api";
        this.cartItems = [];
        this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    addToCart(theCartItem) {
        //check already item in the cart 
        let alreadyExistsInCart = false;
        let existingCartItem = undefined;
        if (this.cartItems.length > 0) {
            //find the item in the cart based on id
            existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.name === theCartItem.name);
            //check if we found it
            alreadyExistsInCart = (existingCartItem != undefined);
        }
        if (alreadyExistsInCart) {
            //increment the quantity
            existingCartItem.total_quantity = existingCartItem.total_quantity + 1;
        }
        else {
            //add to cart item array
            this.cartItems.push(theCartItem);
        }
        this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        let totalPriceValue = 0;
        let totalQuantityValue = 0;
        for (let currentCartItem of this.cartItems) {
            totalPriceValue += currentCartItem.total_quantity * currentCartItem.unit_price;
            totalQuantityValue += currentCartItem.total_quantity;
            currentCartItem.total_price = currentCartItem.total_quantity * currentCartItem.unit_price;
        }
        console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
        this.totalPrice.next(totalPriceValue);
        this.totalQuantity.next(totalQuantityValue);
        console.log(this.cartItems);
    }
    //   addToCart(theCartItem: Cart){
    //   //check already item in the cart 
    //   let alreadyExistsInCart: boolean = false;
    //   let existingCartItem: Cart = undefined;
    //   if(this.cartItems.length > 0){
    //     //find the item in the cart based on id
    //     existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.name === theCartItem.name);
    //     //check if we found it
    //     alreadyExistsInCart = (existingCartItem != undefined)
    //   } 
    //   if(alreadyExistsInCart){
    //     //increment the quantity
    //     existingCartItem.totalQuantity = existingCartItem.totalQuantity + 1;
    //   }else {
    //     //add to cart item array
    //     this.cartItems.push(theCartItem);
    //   }
    //   this.calculateTotalPrice();
    // }
    // calculateTotalPrice() {
    //   let totalPriceValue: number = 0;
    //   let totalQuantityValue: number = 0;
    //   for(let currentCartItem of this.cartItems){
    //     totalPriceValue += currentCartItem.totalQuantity * currentCartItem.unitPrice;
    //     totalQuantityValue += currentCartItem.totalQuantity;
    //     currentCartItem.totalPrice = currentCartItem.totalQuantity*currentCartItem.unitPrice;
    //   }
    //   console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
    //   this.totalPrice.next(totalPriceValue);
    //   this.totalQuantity.next(totalQuantityValue);
    //   console.log(this.cartItems);
    // }
    saveCart(cartItems) {
        console.log(cartItems);
        // return this.httpclient.post(`${this.baseUrl}/save_cart`, cartItems);
        return this.httpclient.post(`${this.baseUrl}/save_cart`, cartItems);
        // return this.httpclient.post(this.baseUrl + '/save_cart', cartItems);
    }
    retrieveCart(identity) {
        // return this.httpclient.get<Cart[]>(`${this.baseUrl}/get_cart_items/${identity}`);
        return this.httpclient.get(`${this.baseUrl}/get_cart_items/${identity}`);
        // return this.httpclient.get<Cart[]>(this.baseUrl + '/get_cart_items/' + identity);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _entity_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity/customer */ "./src/app/entity/customer.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
        // private baseUrl = 'http://localhost:8088/api';  
        // private baseUrl = "http://127.0.0.1:8000/api"; 
        // local machine
        // private baseUrl = 'http://localhost:3000/api'; 
        // live server
        this.baseUrl = 'api';
        this.customer = new _entity_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.customer);
        this.user_id = this.user.asObservable();
    }
    addCustomer(customer) {
        // return this.http.post(`${this.baseUrl}/add_customer`, customer);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("content-type", "application/json");
        return this.http.post(`${this.baseUrl}/add_customer`, customer, { headers: headers });
        // return this.http.post(this.baseUrl + '/add_customer/', customer)
    }
    login(customer) {
        // return this.http.post(`${this.baseUrl}/login`, customer);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("content-type", "application/json");
        return this.http.post(`${this.baseUrl}/login`, customer, { headers: headers });
        // return this.http.post(this.baseUrl + '/login/', customer)
    }
    retrieveCustomerDetails(identity) {
        // return this.http.get<Customer>(`${this.baseUrl}/retrieve_customer_details/${identity}`);
        return this.http.get(`${this.baseUrl}/retrieve_customer_details/${identity}`);
        // return this.http.get<Customer>(this.baseUrl + '/retrieve_customer_details/' + identity);
    }
    customerData(customer) {
        console.log(customer);
        this.user.next(customer);
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ItemService = class ItemService {
    //  private categoryUrl = "http://localhost:8088/api/item-category";
    //  private baseUrl = "http://localhost:8088/api";
    constructor(httpclient) {
        this.httpclient = httpclient;
        // private categoryUrl = "http://127.0.0.1:8000/api/item-category";
        // private baseUrl = "http://127.0.0.1:8000/api";
        // local machine
        // private categoryUrl = "http://localhost:3000/api/item-category";
        // private baseUrl = "http://localhost:3000/api";
        // live server
        this.categoryUrl = "api/item-category";
        this.baseUrl = "api";
    }
    getItems(theCategoryId) {
        console.log(theCategoryId);
        // const searchUrl = `${this.baseUrl}/items/findbycategoryid/${theCategoryId}`;
        const searchUrl = `${this.baseUrl}/items/findbycategoryid/${theCategoryId}`;
        // const searchUrl = this.baseUrl + '/items/findbycategoryid/' + theCategoryId + '/' ;
        return this.getItemList(searchUrl);
    }
    getItemList(searchUrl) {
        // return this.httpclient.get<Item[]>(searchUrl);
        return this.httpclient.get(searchUrl);
    }
    getItemCategories() {
        return this.httpclient.get(this.categoryUrl);
    }
    searchItems(keyword) {
        const searchUrl = `${this.baseUrl}/items/searchbykeyword/${keyword}`;
        return this.getItemList(searchUrl);
    }
    get(itemId) {
        const itemDetailsUrl = `${this.baseUrl}/items/${itemId}`;
        return this.httpclient.get(itemDetailsUrl);
    }
    addItem(item) {
        return this.httpclient.post(`${this.baseUrl}/add_item`, item);
    }
    deleteItem(item) {
        return this.httpclient.post(`${this.baseUrl}/delete_item`, item);
    }
};
ItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemService);

/*
interface GetResponseItems
{
  _embedded: {
    items: Item[];
  }


}

interface GetResponseItemCategory{
    _embedded: {
      itemCategory: ItemCategory[];
    }
  }

*/ 


/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.btn-green\r\n{\r\n    background-color: lime;\r\n    border-color: lime;\r\n}\r\n\r\n.btn-green:hover\r\n{\r\n    background-color: green;\r\n    border-color: green;\r\n}\r\n\r\n#footer\r\n{\r\n\tposition: relative;\r\n    margin-top: 250px;\r\n}\r\n\r\n.footer\r\n{\r\n    height: 200px;\r\n\twidth: 100%;\r\n\tmargin-top: 25px;\r\n    background-color: black;\r\n    \r\n    padding-bottom: 5px;\r\n    border-radius: 5px;\r\n        \r\n}\r\n\r\n.footer p\r\n{\r\n    color: white;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.about-us\r\n{\r\n    float: left;\r\n    margin-top: 25px;\r\n}\r\n\r\n.floater\r\n{\r\n    margin-top: 150px;\r\n    margin-right: 25px;\r\n    float: right;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0NBRUMsa0JBQWtCO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7Q0FDaEIsV0FBVztDQUNYLGdCQUFnQjtJQUNiLHVCQUF1Qjs7SUFFdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5idG4tZ3JlZW5cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcclxuICAgIGJvcmRlci1jb2xvcjogbGltZTtcclxufVxyXG5cclxuLmJ0bi1ncmVlbjpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbiNmb290ZXJcclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyXHJcbntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4uZm9vdGVyIHBcclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmFib3V0LXVzXHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmZsb2F0ZXJcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entity_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity/cart */ "./src/app/entity/cart.ts");
/* harmony import */ var _entity_buy_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entity/buy-cart */ "./src/app/entity/buy-cart.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/buy-cart.service */ "./src/app/services/buy-cart.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _entity_customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../entity/customer */ "./src/app/entity/customer.ts");










let ShopComponent = class ShopComponent {
    constructor(_itemservice, _activatedRoute, _cartservice, _buycartservice, _customerService) {
        this._itemservice = _itemservice;
        this._activatedRoute = _activatedRoute;
        this._cartservice = _cartservice;
        this._buycartservice = _buycartservice;
        this._customerService = _customerService;
        this.items = [];
        this.currentCategoryId = 1;
        this.user = new _entity_customer__WEBPACK_IMPORTED_MODULE_9__["Customer"]();
    }
    listItems() {
        this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');
        if (this.searchMode) {
            // book list (search)
            this.handleSearchItems();
        }
        else {
            // book list (category)
            this.handleListItems();
        }
    }
    handleListItems() {
        const hasCategoryId = this._activatedRoute.snapshot.paramMap.has("id");
        if (hasCategoryId) {
            this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get("id");
            console.log(this.currentCategoryId);
        }
        else {
            this.currentCategoryId = 1;
        }
        //    this._bookservice.getBooks().subscribe(data => { this.books= data; })
        //    this._itemservice.getItems(this.currentCategoryId).subscribe(data => { this.items = data; })
        //    this.items = this._itemservice.getItems(this.currentCategoryId);
        this._itemservice.getItems(this.currentCategoryId).subscribe(items => this.items = items);
        console.log(this.items);
    }
    //  identity : String;
    ngOnInit() {
        //    this.listBooks();
        this._activatedRoute.paramMap.subscribe(() => { this.listItems(); });
        //    this._customerService.customer_id.subscribe(data => {console.log(data); this.identity = data; });
        //    this._customerService.user_id.subscribe(data => this.user = data);
        this.user.identity = this._activatedRoute.snapshot.paramMap.get("identity");
        this._customerService.retrieveCustomerDetails(this.user.identity).subscribe(data => { this.user = data; console.log(data[0]); this._customerService.customerData(data[0]); });
        // this._customerService.retrieveCustomerDetails(this.user.identity).subscribe(data => { this.user = data; console.log(data);  this._customerService.customerData(data);})
    }
    handleSearchItems() {
        const keyword = this._activatedRoute.snapshot.paramMap.get('keyword');
        this._itemservice.searchItems(keyword).subscribe(items => { this.items = items; });
    }
    addToCart(item) {
        console.log(`item name: ${item.name}, and price: ${item.unit_price}`);
        const cartItem = new _entity_cart__WEBPACK_IMPORTED_MODULE_4__["Cart"]();
        cartItem.name = item.name;
        cartItem.description = item.description;
        cartItem.image_url = item.image_url;
        cartItem.unit_price = item.unit_price;
        cartItem.total_quantity = 1;
        cartItem.total_price = 0;
        cartItem.customer_identity = this.user.identity;
        this._cartservice.addToCart(cartItem);
    }
    // addToCart(item: Item){
    //   console.log(`item name: ${item.name}, and price: ${item.unit_price}`);
    //   const cartItem = new Cart();
    //   cartItem.name = item.name;
    //   cartItem.description = item.description;
    //   cartItem.imageUrl = item.image_url;
    //   cartItem.unitPrice = item.unit_price;
    //   cartItem.totalQuantity = 1;
    //   cartItem.totalPrice = 0;
    //   cartItem.customerIdentity = this.user.identity;
    //   this._cartservice.addToCart(cartItem);
    // }
    addToBuyCart(item) {
        console.log(`item name: ${item.name}, and price: ${item.unit_price}`);
        const cartItem = new _entity_buy_cart__WEBPACK_IMPORTED_MODULE_5__["BuyCart"]();
        cartItem.name = item.name;
        cartItem.description = item.description;
        cartItem.image_url = item.image_url;
        cartItem.unit_price = item.unit_price;
        cartItem.total_quantity = 1;
        cartItem.total_price = 0;
        cartItem.customer_identity = this.user.identity;
        this._buycartservice.addToBuyCart(cartItem);
    }
};
ShopComponent.ctorParameters = () => [
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _services_buy_cart_service__WEBPACK_IMPORTED_MODULE_7__["BuyCartService"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header\r\n{\r\n\theight: 175px;\r\n\tfont-size: 5vw;\r\n\ttext-align: center;\r\n\tbackground-color: yellow;\r\n\tcolor: purple;\r\n}\r\n\r\n\r\n.tag-line\r\n{\r\n\tfont-style: italic;\r\n\tfont-size: 25px;\r\n\tfloat:right;\r\n\tpadding-right: 20px;\r\n\tpadding-top: 75px;\r\n}\r\n\r\n\r\n.link\r\n{\r\n\theight: 60px;\r\n\tfont-size: 20px;\r\n\tcolor: red;\r\n\tword-spacing: 50px; \r\n\tbackground-color: lime;\r\n\tpadding:15px 15px 15px 15px;\r\n\tpadding-left: 250px; \r\n\r\n}\r\n\r\n\r\n.nav-bar \r\n{\r\n\t\r\n\ttext-decoration: none;\r\n\tmargin-left: 20px;\r\n   margin-top: 10px;\r\n   margin-bottom: 50px;\r\n\tpadding: 10px;\r\n\tborder-color: white ;\r\n\tborder-style: solid;\r\n\tborder-radius: 10px;\r\n\ttransition: color 1s 0.25s , background-color 1s 0.25s;\r\n\r\n}\r\n\r\n\r\n.nav-bar:hover\r\n{\r\n\tcolor: red;\r\n\tbackground-color: skyblue;\r\n}\r\n\r\n\r\n.container {\r\n   background-size: cover;\r\n   background-color: lightseagreen;\r\n}\r\n\r\n\r\n*[role=\"form\"] \r\n{\r\n   max-width: 525px;\r\n   padding: 15px;\r\n   margin: 0 auto;\r\n   border-radius: 0.3em;\r\n   background-color: #f2f2f2;\r\n}\r\n\r\n\r\n*[role=\"form\"] p\r\n { \r\n   font-family: 'Open Sans' , sans-serif;\r\n   font-size: 25px;\r\n   font-weight: 500;\r\n   color: #000000;\r\n   margin-top: 5%;\r\n   text-align: center;\r\n   text-transform: uppercase;\r\n   letter-spacing: 5px;\r\n}\r\n\r\n\r\n.btn\r\n{\r\n   width : 300px;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixhQUFhO0FBQ2Q7OztBQUdBOztDQUVDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7OztBQUNBOztDQUVDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLG1CQUFtQjs7QUFFcEI7OztBQUNBOzs7Q0FHQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0dBQ2YsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtDQUNyQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsc0RBQXNEOztBQUV2RDs7O0FBQ0E7O0NBRUMsVUFBVTtDQUNWLHlCQUF5QjtBQUMxQjs7O0FBR0E7R0FDRyxzQkFBc0I7R0FDdEIsK0JBQStCO0FBQ2xDOzs7QUFFQTs7R0FFRyxnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLGNBQWM7R0FDZCxvQkFBb0I7R0FDcEIseUJBQXlCO0FBQzVCOzs7QUFFQTs7R0FFRyxxQ0FBcUM7R0FDckMsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsY0FBYztHQUNkLGtCQUFrQjtHQUNsQix5QkFBeUI7R0FDekIsbUJBQW1CO0FBQ3RCOzs7QUFFQTs7R0FFRyxhQUFhOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJcclxue1xyXG5cdGhlaWdodDogMTc1cHg7XHJcblx0Zm9udC1zaXplOiA1dnc7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuXHRjb2xvcjogcHVycGxlO1xyXG59XHJcblxyXG5cclxuLnRhZy1saW5lXHJcbntcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGZsb2F0OnJpZ2h0O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0cGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuLmxpbmtcclxue1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Y29sb3I6IHJlZDtcclxuXHR3b3JkLXNwYWNpbmc6IDUwcHg7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6IGxpbWU7XHJcblx0cGFkZGluZzoxNXB4IDE1cHggMTVweCAxNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjUwcHg7IFxyXG5cclxufVxyXG4ubmF2LWJhciBcclxue1xyXG5cdFxyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJvcmRlci1jb2xvcjogd2hpdGUgO1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR0cmFuc2l0aW9uOiBjb2xvciAxcyAwLjI1cyAsIGJhY2tncm91bmQtY29sb3IgMXMgMC4yNXM7XHJcblxyXG59XHJcbi5uYXYtYmFyOmhvdmVyXHJcbntcclxuXHRjb2xvcjogcmVkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG5cclxuKltyb2xlPVwiZm9ybVwiXSBcclxue1xyXG4gICBtYXgtd2lkdGg6IDUyNXB4O1xyXG4gICBwYWRkaW5nOiAxNXB4O1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbipbcm9sZT1cImZvcm1cIl0gcFxyXG4geyBcclxuICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnICwgc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogIzAwMDAwMDtcclxuICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5cclxuLmJ0blxyXG57XHJcbiAgIHdpZHRoIDogMzAwcHg7XHJcbiAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity/customer */ "./src/app/entity/customer.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(customer_service, router) {
        this.customer_service = customer_service;
        this.router = router;
        this.customer = new _entity_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newCustomer() {
        this.submitted = false;
        this.customer = new _entity_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    save() {
        console.log(this.customer);
        this.customer_service.addCustomer(this.customer).subscribe(data => console.log(data), error => console.log(error));
        this.customer = new _entity_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.router.navigate(['/login']);
    }
    onSubmit() {
        this.save();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map