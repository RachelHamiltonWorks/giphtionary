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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return signuo; });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ "faunadb");
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fauna_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fauna-auth */ "./utils/fauna-auth.js");


async function signuo(req, res) {
  const {
    email,
    password
  } = await req.body;

  try {
    if (!email || !password) {
      throw new Error('Email and password must be provided.');
    }

    console.log(`email: ${email} trying to create user.`);
    let user;

    try {
      user = await _utils_fauna_auth__WEBPACK_IMPORTED_MODULE_1__["serverClient"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Create(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Collection('User'), {
        credentials: {
          password
        },
        data: {
          email
        }
      }));
    } catch (error) {
      console.error('Fauna create user error:', error);
      throw new Error('User already exists.');
    }

    if (!user.ref) {
      throw new Error('No ref present in create query response.');
    }

    const loginRes = await _utils_fauna_auth__WEBPACK_IMPORTED_MODULE_1__["serverClient"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__["query"].Login(user.ref, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mYXVuYS1hdXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhdW5hZGJcIiJdLCJuYW1lcyI6WyJzaWdudW8iLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJzZXJ2ZXJDbGllbnQiLCJxdWVyeSIsInEiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiY3JlZGVudGlhbHMiLCJkYXRhIiwiZXJyb3IiLCJyZWYiLCJsb2dpblJlcyIsIkxvZ2luIiwic2VjcmV0IiwiY29va2llU2VyaWFsaXplZCIsInNlcmlhbGl6ZUZhdW5hQ29va2llIiwic2V0SGVhZGVyIiwic3RhdHVzIiwiZW5kIiwic2VuZCIsIm1lc3NhZ2UiLCJGQVVOQV9TRUNSRVRfQ09PS0lFIiwiZmF1bmFkYiIsIkNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQV9TRVJWRVJfS0VZIiwiZmF1bmFDbGllbnQiLCJ1c2VyU2VjcmV0IiwiY29va2llIiwic2VyaWFsaXplIiwic2FtZVNpdGUiLCJzZWN1cmUiLCJtYXhBZ2UiLCJodHRwT25seSIsInBhdGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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QUFELElBQWdCO0FBQ2xELFFBQU1kLGdCQUFnQixHQUFHZSw2Q0FBTSxDQUFDQyxTQUFQLENBQWlCVCxtQkFBakIsRUFBc0NPLFVBQXRDLEVBQWtEO0FBQ3pFRyxZQUFRLEVBQUUsS0FEK0Q7QUFFekVDLFVBQU0sT0FGbUU7QUFHekVDLFVBQU0sRUFBRSxRQUhpRTtBQUl6RUMsWUFBUSxFQUFFLElBSitEO0FBS3pFQyxRQUFJLEVBQUU7QUFMbUUsR0FBbEQsQ0FBekI7QUFPQSxTQUFPckIsZ0JBQVA7QUFDRCxDQVRNLEM7Ozs7Ozs7Ozs7O0FDZlAsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3NpZ251cC5qc1wiKTtcbiIsImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJ1xuaW1wb3J0IHsgc2VydmVyQ2xpZW50LCBzZXJpYWxpemVGYXVuYUNvb2tpZSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZhdW5hLWF1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNpZ251byhyZXEsIHJlcykge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmJvZHlcblxuICB0cnkge1xuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGFuZCBwYXNzd29yZCBtdXN0IGJlIHByb3ZpZGVkLicpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBlbWFpbDogJHtlbWFpbH0gdHJ5aW5nIHRvIGNyZWF0ZSB1c2VyLmApXG5cbiAgICBsZXQgdXNlclxuXG4gICAgdHJ5IHtcbiAgICAgIHVzZXIgPSBhd2FpdCBzZXJ2ZXJDbGllbnQucXVlcnkoXG4gICAgICAgIHEuQ3JlYXRlKHEuQ29sbGVjdGlvbignVXNlcicpLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6IHsgcGFzc3dvcmQgfSxcbiAgICAgICAgICBkYXRhOiB7IGVtYWlsIH0sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhdW5hIGNyZWF0ZSB1c2VyIGVycm9yOicsIGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIGFscmVhZHkgZXhpc3RzLicpXG4gICAgfVxuXG4gICAgaWYgKCF1c2VyLnJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZWYgcHJlc2VudCBpbiBjcmVhdGUgcXVlcnkgcmVzcG9uc2UuJylcbiAgICB9XG5cbiAgICBjb25zdCBsb2dpblJlcyA9IGF3YWl0IHNlcnZlckNsaWVudC5xdWVyeShcbiAgICAgIHEuTG9naW4odXNlci5yZWYsIHtcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KVxuICAgIClcblxuICAgIGlmICghbG9naW5SZXMuc2VjcmV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlY3JldCBwcmVzZW50IGluIGxvZ2luIHF1ZXJ5IHJlc3BvbnNlLicpXG4gICAgfVxuXG4gICAgY29uc3QgY29va2llU2VyaWFsaXplZCA9IHNlcmlhbGl6ZUZhdW5hQ29va2llKGxvZ2luUmVzLnNlY3JldClcblxuICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWVTZXJpYWxpemVkKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yLm1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCBmYXVuYWRiIGZyb20gJ2ZhdW5hZGInXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuZXhwb3J0IGNvbnN0IEZBVU5BX1NFQ1JFVF9DT09LSUUgPSAnZmF1bmFTZWNyZXQnXG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJDbGllbnQgPSBuZXcgZmF1bmFkYi5DbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BX1NFUlZFUl9LRVksXG59KVxuXG4vLyBVc2VkIGZvciBhbnkgYXV0aGVkIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IGZhdW5hQ2xpZW50ID0gKHNlY3JldCkgPT5cbiAgbmV3IGZhdW5hZGIuQ2xpZW50KHtcbiAgICBzZWNyZXQsXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVGYXVuYUNvb2tpZSA9ICh1c2VyU2VjcmV0KSA9PiB7XG4gIGNvbnN0IGNvb2tpZVNlcmlhbGl6ZWQgPSBjb29raWUuc2VyaWFsaXplKEZBVU5BX1NFQ1JFVF9DT09LSUUsIHVzZXJTZWNyZXQsIHtcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIG1heEFnZTogNzI1NzYwMDAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgcGF0aDogJy8nLFxuICB9KVxuICByZXR1cm4gY29va2llU2VyaWFsaXplZFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhdW5hZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==