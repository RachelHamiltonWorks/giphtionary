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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fauna_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fauna-auth */ "./utils/fauna-auth.js");


async function login(req, res) {
  const {
    email,
    password
  } = await req.body;

  try {
    if (!email || !password) {
      throw new Error('Email and password must be provided.');
    }

    const loginRes = await _utils_fauna_auth__WEBPACK_IMPORTED_MODULE_1__["serverClient"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Login(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Index('users_by_email'), email), {
      password
    }));

    if (!loginRes.secret) {
      throw new Error('No secret present in login query response.');
    }

    const cookieSerialized = Object(_utils_fauna_auth__WEBPACK_IMPORTED_MODULE_1__["serializeFaunaCookie"])(loginRes.secret);
    res.setHeader('Set-Cookie', cookieSerialized);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZhdW5hLWF1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmF1bmFkYlwiIl0sIm5hbWVzIjpbImxvZ2luIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJFcnJvciIsImxvZ2luUmVzIiwic2VydmVyQ2xpZW50IiwicXVlcnkiLCJxIiwiTG9naW4iLCJNYXRjaCIsIkluZGV4Iiwic2VjcmV0IiwiY29va2llU2VyaWFsaXplZCIsInNlcmlhbGl6ZUZhdW5hQ29va2llIiwic2V0SGVhZGVyIiwic3RhdHVzIiwiZW5kIiwiZXJyb3IiLCJzZW5kIiwibWVzc2FnZSIsIkZBVU5BX1NFQ1JFVF9DT09LSUUiLCJmYXVuYWRiIiwiQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIkZBVU5BX1NFUlZFUl9LRVkiLCJmYXVuYUNsaWVudCIsInVzZXJTZWNyZXQiLCJjb29raWUiLCJzZXJpYWxpemUiLCJzYW1lU2l0ZSIsInNlY3VyZSIsIm1heEFnZSIsImh0dHBPbmx5IiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLGVBQWVBLEtBQWYsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUM1QyxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQixNQUFNSCxHQUFHLENBQUNJLElBQXRDOztBQUVBLE1BQUk7QUFDRixRQUFJLENBQUNGLEtBQUQsSUFBVSxDQUFDQyxRQUFmLEVBQXlCO0FBQ3ZCLFlBQU0sSUFBSUUsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDRDs7QUFFRCxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsOERBQVksQ0FBQ0MsS0FBYixDQUNyQkMsNkNBQUMsQ0FBQ0MsS0FBRixDQUFRRCw2Q0FBQyxDQUFDRSxLQUFGLENBQVFGLDZDQUFDLENBQUNHLEtBQUYsQ0FBUSxnQkFBUixDQUFSLEVBQW1DVixLQUFuQyxDQUFSLEVBQW1EO0FBQ2pEQztBQURpRCxLQUFuRCxDQURxQixDQUF2Qjs7QUFNQSxRQUFJLENBQUNHLFFBQVEsQ0FBQ08sTUFBZCxFQUFzQjtBQUNwQixZQUFNLElBQUlSLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ0Q7O0FBRUQsVUFBTVMsZ0JBQWdCLEdBQUdDLDhFQUFvQixDQUFDVCxRQUFRLENBQUNPLE1BQVYsQ0FBN0M7QUFFQVosT0FBRyxDQUFDZSxTQUFKLENBQWMsWUFBZCxFQUE0QkYsZ0JBQTVCO0FBQ0FiLE9BQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNELEdBbkJELENBbUJFLE9BQU9DLEtBQVAsRUFBYztBQUNkbEIsT0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JHLElBQWhCLENBQXFCRCxLQUFLLENBQUNFLE9BQTNCO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUM1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1DLG1CQUFtQixHQUFHLGFBQTVCO0FBRUEsTUFBTWYsWUFBWSxHQUFHLElBQUlnQiw4Q0FBTyxDQUFDQyxNQUFaLENBQW1CO0FBQzdDWCxRQUFNLEVBQUVZLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUR5QixDQUFuQixDQUFyQixDLENBSVA7O0FBQ08sTUFBTUMsV0FBVyxHQUFJZixNQUFELElBQ3pCLElBQUlVLDhDQUFPLENBQUNDLE1BQVosQ0FBbUI7QUFDakJYO0FBRGlCLENBQW5CLENBREs7QUFLQSxNQUFNRSxvQkFBb0IsR0FBSWMsVUFBRCxJQUFnQjtBQUNsRCxRQUFNZixnQkFBZ0IsR0FBR2dCLDZDQUFNLENBQUNDLFNBQVAsQ0FBaUJULG1CQUFqQixFQUFzQ08sVUFBdEMsRUFBa0Q7QUFDekVHLFlBQVEsRUFBRSxLQUQrRDtBQUV6RUMsVUFBTSxPQUZtRTtBQUd6RUMsVUFBTSxFQUFFLFFBSGlFO0FBSXpFQyxZQUFRLEVBQUUsSUFKK0Q7QUFLekVDLFFBQUksRUFBRTtBQUxtRSxHQUFsRCxDQUF6QjtBQU9BLFNBQU90QixnQkFBUDtBQUNELENBVE0sQzs7Ozs7Ozs7Ozs7QUNmUCxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJ1xuaW1wb3J0IHsgc2VydmVyQ2xpZW50LCBzZXJpYWxpemVGYXVuYUNvb2tpZSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZhdW5hLWF1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuYm9keVxuXG4gIHRyeSB7XG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgYW5kIHBhc3N3b3JkIG11c3QgYmUgcHJvdmlkZWQuJylcbiAgICB9XG5cbiAgICBjb25zdCBsb2dpblJlcyA9IGF3YWl0IHNlcnZlckNsaWVudC5xdWVyeShcbiAgICAgIHEuTG9naW4ocS5NYXRjaChxLkluZGV4KCd1c2Vyc19ieV9lbWFpbCcpLCBlbWFpbCksIHtcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KVxuICAgIClcblxuICAgIGlmICghbG9naW5SZXMuc2VjcmV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlY3JldCBwcmVzZW50IGluIGxvZ2luIHF1ZXJ5IHJlc3BvbnNlLicpXG4gICAgfVxuXG4gICAgY29uc3QgY29va2llU2VyaWFsaXplZCA9IHNlcmlhbGl6ZUZhdW5hQ29va2llKGxvZ2luUmVzLnNlY3JldClcblxuICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWVTZXJpYWxpemVkKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yLm1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCBmYXVuYWRiIGZyb20gJ2ZhdW5hZGInXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuZXhwb3J0IGNvbnN0IEZBVU5BX1NFQ1JFVF9DT09LSUUgPSAnZmF1bmFTZWNyZXQnXG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJDbGllbnQgPSBuZXcgZmF1bmFkYi5DbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BX1NFUlZFUl9LRVksXG59KVxuXG4vLyBVc2VkIGZvciBhbnkgYXV0aGVkIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IGZhdW5hQ2xpZW50ID0gKHNlY3JldCkgPT5cbiAgbmV3IGZhdW5hZGIuQ2xpZW50KHtcbiAgICBzZWNyZXQsXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVGYXVuYUNvb2tpZSA9ICh1c2VyU2VjcmV0KSA9PiB7XG4gIGNvbnN0IGNvb2tpZVNlcmlhbGl6ZWQgPSBjb29raWUuc2VyaWFsaXplKEZBVU5BX1NFQ1JFVF9DT09LSUUsIHVzZXJTZWNyZXQsIHtcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIG1heEFnZTogNzI1NzYwMDAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgcGF0aDogJy8nLFxuICB9KVxuICByZXR1cm4gY29va2llU2VyaWFsaXplZFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhdW5hZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==