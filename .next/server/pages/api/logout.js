module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/logout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logout; });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fauna_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fauna-auth */ "./utils/fauna-auth.js");



async function logout(req, res) {
  var _req$headers$cookie;

  const cookies = cookie__WEBPACK_IMPORTED_MODULE_1___default.a.parse((_req$headers$cookie = req.headers.cookie) !== null && _req$headers$cookie !== void 0 ? _req$headers$cookie : '');
  const faunaSecret = cookies[_utils_fauna_auth__WEBPACK_IMPORTED_MODULE_2__["FAUNA_SECRET_COOKIE"]];

  if (!faunaSecret) {
    // Already logged out.
    return res.status(200).end();
  } // Invalidate secret (ie. logout from Fauna).


  await Object(_utils_fauna_auth__WEBPACK_IMPORTED_MODULE_2__["faunaClient"])(faunaSecret).query(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Logout(false)); // Clear cookie.

  const cookieSerialized = cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize(_utils_fauna_auth__WEBPACK_IMPORTED_MODULE_2__["FAUNA_SECRET_COOKIE"], '', {
    sameSite: 'lax',
    secure: false,
    maxAge: -1,
    httpOnly: true,
    path: '/'
  });
  res.setHeader('Set-Cookie', cookieSerialized);
  res.status(200).end();
}

/***/ }),

/***/ "./utils/fauna-auth.js":
/*!*****************************!*\
  !*** ./utils/fauna-auth.js ***!
  \*****************************/
/*! exports provided: FAUNA_SECRET_COOKIE, serverClient, faunaClient, serializeFaunaCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAUNA_SECRET_COOKIE", function() { return FAUNA_SECRET_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverClient", function() { return serverClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faunaClient", function() { return faunaClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeFaunaCookie", function() { return serializeFaunaCookie; });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);


const FAUNA_SECRET_COOKIE = 'faunaSecret';
const serverClient = new faunadb__WEBPACK_IMPORTED_MODULE_0___default.a.Client({
  secret: process.env.FAUNA_SERVER_KEY
}); // Used for any authed requests.

const faunaClient = secret => new faunadb__WEBPACK_IMPORTED_MODULE_0___default.a.Client({
  secret
});
const serializeFaunaCookie = userSecret => {
  const cookieSerialized = cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize(FAUNA_SECRET_COOKIE, userSecret, {
    sameSite: 'lax',
    secure: false,
    maxAge: 72576000,
    httpOnly: true,
    path: '/'
  });
  return cookieSerialized;
};

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faunadb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xvZ291dC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mYXVuYS1hdXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhdW5hZGJcIiJdLCJuYW1lcyI6WyJsb2dvdXQiLCJyZXEiLCJyZXMiLCJjb29raWVzIiwiY29va2llIiwicGFyc2UiLCJoZWFkZXJzIiwiZmF1bmFTZWNyZXQiLCJGQVVOQV9TRUNSRVRfQ09PS0lFIiwic3RhdHVzIiwiZW5kIiwiZmF1bmFDbGllbnQiLCJxdWVyeSIsInEiLCJMb2dvdXQiLCJjb29raWVTZXJpYWxpemVkIiwic2VyaWFsaXplIiwic2FtZVNpdGUiLCJzZWN1cmUiLCJtYXhBZ2UiLCJodHRwT25seSIsInBhdGgiLCJzZXRIZWFkZXIiLCJzZXJ2ZXJDbGllbnQiLCJmYXVuYWRiIiwiQ2xpZW50Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BX1NFUlZFUl9LRVkiLCJzZXJpYWxpemVGYXVuYUNvb2tpZSIsInVzZXJTZWNyZXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxlQUFlQSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFBQTs7QUFDN0MsUUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDQyxLQUFQLHdCQUFhSixHQUFHLENBQUNLLE9BQUosQ0FBWUYsTUFBekIscUVBQW1DLEVBQW5DLENBQWhCO0FBQ0EsUUFBTUcsV0FBVyxHQUFHSixPQUFPLENBQUNLLHFFQUFELENBQTNCOztBQUNBLE1BQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQjtBQUNBLFdBQU9MLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQVA7QUFDRCxHQU40QyxDQU83Qzs7O0FBQ0EsUUFBTUMscUVBQVcsQ0FBQ0osV0FBRCxDQUFYLENBQXlCSyxLQUF6QixDQUErQkMsNkNBQUMsQ0FBQ0MsTUFBRixDQUFTLEtBQVQsQ0FBL0IsQ0FBTixDQVI2QyxDQVM3Qzs7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR1gsNkNBQU0sQ0FBQ1ksU0FBUCxDQUFpQlIscUVBQWpCLEVBQXNDLEVBQXRDLEVBQTBDO0FBQ2pFUyxZQUFRLEVBQUUsS0FEdUQ7QUFFakVDLFVBQU0sT0FGMkQ7QUFHakVDLFVBQU0sRUFBRSxDQUFDLENBSHdEO0FBSWpFQyxZQUFRLEVBQUUsSUFKdUQ7QUFLakVDLFFBQUksRUFBRTtBQUwyRCxHQUExQyxDQUF6QjtBQU9BbkIsS0FBRyxDQUFDb0IsU0FBSixDQUFjLFlBQWQsRUFBNEJQLGdCQUE1QjtBQUNBYixLQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUYsbUJBQW1CLEdBQUcsYUFBNUI7QUFFQSxNQUFNZSxZQUFZLEdBQUcsSUFBSUMsOENBQU8sQ0FBQ0MsTUFBWixDQUFtQjtBQUM3Q0MsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEeUIsQ0FBbkIsQ0FBckIsQyxDQUlQOztBQUNPLE1BQU1sQixXQUFXLEdBQUllLE1BQUQsSUFDekIsSUFBSUYsOENBQU8sQ0FBQ0MsTUFBWixDQUFtQjtBQUNqQkM7QUFEaUIsQ0FBbkIsQ0FESztBQUtBLE1BQU1JLG9CQUFvQixHQUFJQyxVQUFELElBQWdCO0FBQ2xELFFBQU1oQixnQkFBZ0IsR0FBR1gsNkNBQU0sQ0FBQ1ksU0FBUCxDQUFpQlIsbUJBQWpCLEVBQXNDdUIsVUFBdEMsRUFBa0Q7QUFDekVkLFlBQVEsRUFBRSxLQUQrRDtBQUV6RUMsVUFBTSxPQUZtRTtBQUd6RUMsVUFBTSxFQUFFLFFBSGlFO0FBSXpFQyxZQUFRLEVBQUUsSUFKK0Q7QUFLekVDLFFBQUksRUFBRTtBQUxtRSxHQUFsRCxDQUF6QjtBQU9BLFNBQU9OLGdCQUFQO0FBQ0QsQ0FUTSxDOzs7Ozs7Ozs7OztBQ2ZQLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9sb2dvdXQuanNcIik7XG4iLCJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYidcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHsgZmF1bmFDbGllbnQsIEZBVU5BX1NFQ1JFVF9DT09LSUUgfSBmcm9tICcuLi8uLi91dGlscy9mYXVuYS1hdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxLCByZXMpIHtcbiAgY29uc3QgY29va2llcyA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUgPz8gJycpXG4gIGNvbnN0IGZhdW5hU2VjcmV0ID0gY29va2llc1tGQVVOQV9TRUNSRVRfQ09PS0lFXVxuICBpZiAoIWZhdW5hU2VjcmV0KSB7XG4gICAgLy8gQWxyZWFkeSBsb2dnZWQgb3V0LlxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKClcbiAgfVxuICAvLyBJbnZhbGlkYXRlIHNlY3JldCAoaWUuIGxvZ291dCBmcm9tIEZhdW5hKS5cbiAgYXdhaXQgZmF1bmFDbGllbnQoZmF1bmFTZWNyZXQpLnF1ZXJ5KHEuTG9nb3V0KGZhbHNlKSlcbiAgLy8gQ2xlYXIgY29va2llLlxuICBjb25zdCBjb29raWVTZXJpYWxpemVkID0gY29va2llLnNlcmlhbGl6ZShGQVVOQV9TRUNSRVRfQ09PS0lFLCAnJywge1xuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgbWF4QWdlOiAtMSxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBwYXRoOiAnLycsXG4gIH0pXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWVTZXJpYWxpemVkKVxuICByZXMuc3RhdHVzKDIwMCkuZW5kKClcbn1cbiIsImltcG9ydCBmYXVuYWRiIGZyb20gJ2ZhdW5hZGInXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuZXhwb3J0IGNvbnN0IEZBVU5BX1NFQ1JFVF9DT09LSUUgPSAnZmF1bmFTZWNyZXQnXG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJDbGllbnQgPSBuZXcgZmF1bmFkYi5DbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BX1NFUlZFUl9LRVksXG59KVxuXG4vLyBVc2VkIGZvciBhbnkgYXV0aGVkIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IGZhdW5hQ2xpZW50ID0gKHNlY3JldCkgPT5cbiAgbmV3IGZhdW5hZGIuQ2xpZW50KHtcbiAgICBzZWNyZXQsXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVGYXVuYUNvb2tpZSA9ICh1c2VyU2VjcmV0KSA9PiB7XG4gIGNvbnN0IGNvb2tpZVNlcmlhbGl6ZWQgPSBjb29raWUuc2VyaWFsaXplKEZBVU5BX1NFQ1JFVF9DT09LSUUsIHVzZXJTZWNyZXQsIHtcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIG1heEFnZTogNzI1NzYwMDAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgcGF0aDogJy8nLFxuICB9KVxuICByZXR1cm4gY29va2llU2VyaWFsaXplZFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhdW5hZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==