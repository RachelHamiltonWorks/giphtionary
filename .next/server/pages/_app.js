module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/michaelpryor/Desktop/projects/giphtionary/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n // Use the <Provider> to improve performance and allow components that call\n// `useSession()` anywhere in your application to access the `session` object.\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"] // Provider options are not required but can be useful in situations where\n  // you have a short session maxAge time. Shown here with default values.\n  , {\n    options: {\n      // Client Max Age controls how often the useSession in the client should\n      // contact the server to sync the session state. Value in seconds.\n      // e.g.\n      // * 0  - Disabled (always use cache value)\n      // * 60 - Sync session state with server if it's older than 60 seconds\n      clientMaxAge: 0,\n      // Keep Alive tells windows / tabs that are signed in to keep sending\n      // a keep alive request (which extends the current session expiry) to\n      // prevent sessions in open windows from expiring. Value in seconds.\n      //\n      // Note: If a session has expired when keep alive is triggered, all open\n      // windows / tabs will be updated to reflect the user is signed out.\n      keepAlive: 0\n    },\n    session: pageProps.session,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50TWF4QWdlIiwia2VlcEFsaXZlIiwic2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBO0FBQ0E7O0FBQ2UsU0FBU0EsR0FBVCxDQUFjO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFkLEVBQXdDO0FBQ3JELFNBQ0UsTUFBQyx5REFBRCxDQUNFO0FBQ0E7QUFGRjtBQUdFLFdBQU8sRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsa0JBQVksRUFBRSxDQU5QO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGVBQVMsRUFBRTtBQWJKLEtBSFg7QUFrQkUsV0FBTyxFQUFFRixTQUFTLENBQUNHLE9BbEJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbUJFLE1BQUMsU0FBRCxlQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQkYsQ0FERjtBQXVCRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuLy8gVXNlIHRoZSA8UHJvdmlkZXI+IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UgYW5kIGFsbG93IGNvbXBvbmVudHMgdGhhdCBjYWxsXG4vLyBgdXNlU2Vzc2lvbigpYCBhbnl3aGVyZSBpbiB5b3VyIGFwcGxpY2F0aW9uIHRvIGFjY2VzcyB0aGUgYHNlc3Npb25gIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyXG4gICAgICAvLyBQcm92aWRlciBvcHRpb25zIGFyZSBub3QgcmVxdWlyZWQgYnV0IGNhbiBiZSB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZVxuICAgICAgLy8geW91IGhhdmUgYSBzaG9ydCBzZXNzaW9uIG1heEFnZSB0aW1lLiBTaG93biBoZXJlIHdpdGggZGVmYXVsdCB2YWx1ZXMuXG4gICAgICBvcHRpb25zPXt7XG4gICAgICAgIC8vIENsaWVudCBNYXggQWdlIGNvbnRyb2xzIGhvdyBvZnRlbiB0aGUgdXNlU2Vzc2lvbiBpbiB0aGUgY2xpZW50IHNob3VsZFxuICAgICAgICAvLyBjb250YWN0IHRoZSBzZXJ2ZXIgdG8gc3luYyB0aGUgc2Vzc2lvbiBzdGF0ZS4gVmFsdWUgaW4gc2Vjb25kcy5cbiAgICAgICAgLy8gZS5nLlxuICAgICAgICAvLyAqIDAgIC0gRGlzYWJsZWQgKGFsd2F5cyB1c2UgY2FjaGUgdmFsdWUpXG4gICAgICAgIC8vICogNjAgLSBTeW5jIHNlc3Npb24gc3RhdGUgd2l0aCBzZXJ2ZXIgaWYgaXQncyBvbGRlciB0aGFuIDYwIHNlY29uZHNcbiAgICAgICAgY2xpZW50TWF4QWdlOiAwLFxuICAgICAgICAvLyBLZWVwIEFsaXZlIHRlbGxzIHdpbmRvd3MgLyB0YWJzIHRoYXQgYXJlIHNpZ25lZCBpbiB0byBrZWVwIHNlbmRpbmdcbiAgICAgICAgLy8gYSBrZWVwIGFsaXZlIHJlcXVlc3QgKHdoaWNoIGV4dGVuZHMgdGhlIGN1cnJlbnQgc2Vzc2lvbiBleHBpcnkpIHRvXG4gICAgICAgIC8vIHByZXZlbnQgc2Vzc2lvbnMgaW4gb3BlbiB3aW5kb3dzIGZyb20gZXhwaXJpbmcuIFZhbHVlIGluIHNlY29uZHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5vdGU6IElmIGEgc2Vzc2lvbiBoYXMgZXhwaXJlZCB3aGVuIGtlZXAgYWxpdmUgaXMgdHJpZ2dlcmVkLCBhbGwgb3BlblxuICAgICAgICAvLyB3aW5kb3dzIC8gdGFicyB3aWxsIGJlIHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgdXNlciBpcyBzaWduZWQgb3V0LlxuICAgICAgICBrZWVwQWxpdmU6IDBcbiAgICAgIH19XG4gICAgICBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0gPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });