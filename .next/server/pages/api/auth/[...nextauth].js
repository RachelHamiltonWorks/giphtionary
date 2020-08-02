module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n // For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\n\nconst options = {\n  // https://next-auth.js.org/configuration/providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Okta({\n    clientId: \"0oao8x9b6t2PxbapM4x6\",\n    clientSecret: \"00wl7S8zevJFI3tefK8l-yqVPrbXGYIjzBnSopM1k\",\n    domain: \"https://dev-421964.okta.com/oauth2/default\"\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Apple({\n    clientId: process.env.APPLE_ID,\n    clientSecret: {\n      appleId: process.env.APPLE_ID,\n      teamId: process.env.APPLE_TEAM_ID,\n      privateKey: process.env.APPLE_PRIVATE_KEY,\n      keyId: process.env.APPLE_KEY_ID\n    }\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Auth0({\n    clientId: process.env.AUTH0_ID,\n    clientSecret: process.env.AUTH0_SECRET,\n    domain: process.env.AUTH0_DOMAIN\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({\n    clientId: process.env.FACEBOOK_ID,\n    clientSecret: process.env.FACEBOOK_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({\n    clientId: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Twitter({\n    clientId: process.env.TWITTER_ID,\n    clientSecret: process.env.TWITTER_SECRET\n  })],\n  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.\n  // https://next-auth.js.org/configuration/database\n  //\n  // Notes:\n  // * You must to install an appropriate node_module for your database\n  // * The Email provider requires a database (OAuth providers do not)\n  database: process.env.DATABASE_URL || \"mongodb+srv://MichaelP:Stringbean86@project3.fwi9o.mongodb.net/<dbname>?retryWrites=true&w=majority\",\n  // The secret should be set to a reasonably long random string.\n  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless\n  // a seperate secret is defined explicitly for encrypting the JWT.\n  secret: process.env.SECRET,\n  session: {\n    // Use JSON Web Tokens for session instead of database sessions.\n    // This option can be used with or without a database for users/accounts.\n    // Note: `jwt` is automatically set to `true` if no database is specified.\n    jwt: true // Seconds - How long until an idle session expires and is no longer valid.\n    // maxAge: 30 * 24 * 60 * 60, // 30 days\n    // Seconds - Throttle how frequently to write to database to extend a session.\n    // Use it to limit write operations. Set to 0 to always update the database.\n    // Note: This option is ignored if using JSON Web Tokens\n    // updateAge: 24 * 60 * 60, // 24 hours\n\n  },\n  // JSON Web tokens are only used for sessions if the `jwt: true` session\n  // option is set - or by default if no database is specified.\n  // https://next-auth.js.org/configuration/options#jwt\n  jwt: {// A secret to use for key generation (you should set this explicitly)\n    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',\n    // Set to true to use encryption (default: false)\n    // encryption: true,\n    // You can define your own encode/decode functions for signing and encryption\n    // if you want to override the default behaviour.\n    // encode: async ({ secret, token, maxAge }) => {},\n    // decode: async ({ secret, token, maxAge }) => {},\n  },\n  // You can define custom pages to override the built-in pages.\n  // The routes shown here are the default URLs that will be used when a custom\n  // pages is not specified for that route.\n  // https://next-auth.js.org/configuration/pages\n  pages: {// signIn: '/api/auth/signin',  // Displays signin buttons\n    // signOut: '/api/auth/signout', // Displays form with sign out button\n    // error: '/api/auth/error', // Error code passed in query string as ?error=\n    // verifyRequest: '/api/auth/verify-request', // Used for check email page\n    // newUser: null // If set, new users will be directed here on first sign in\n  },\n  // Callbacks are asynchronous functions you can use to control what happens\n  // when an action is performed.\n  // https://next-auth.js.org/configuration/callbacks\n  callbacks: {// signIn: async (user, account, profile) => { return Promise.resolve(true) },\n    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },\n    // session: async (session, user) => { return Promise.resolve(session) },\n    // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }\n  },\n  // Events are useful for logging\n  // https://next-auth.js.org/configuration/events\n  events: {},\n  // Enable debug messages in the console if you are having problems\n  debug: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsib3B0aW9ucyIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsIk9rdGEiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImRvbWFpbiIsIkFwcGxlIiwicHJvY2VzcyIsImVudiIsIkFQUExFX0lEIiwiYXBwbGVJZCIsInRlYW1JZCIsIkFQUExFX1RFQU1fSUQiLCJwcml2YXRlS2V5IiwiQVBQTEVfUFJJVkFURV9LRVkiLCJrZXlJZCIsIkFQUExFX0tFWV9JRCIsIkF1dGgwIiwiQVVUSDBfSUQiLCJBVVRIMF9TRUNSRVQiLCJBVVRIMF9ET01BSU4iLCJGYWNlYm9vayIsIkZBQ0VCT09LX0lEIiwiRkFDRUJPT0tfU0VDUkVUIiwiR2l0SHViIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsIkdvb2dsZSIsIkdPT0dMRV9JRCIsIkdPT0dMRV9TRUNSRVQiLCJUd2l0dGVyIiwiVFdJVFRFUl9JRCIsIlRXSVRURVJfU0VDUkVUIiwiZGF0YWJhc2UiLCJEQVRBQkFTRV9VUkwiLCJzZWNyZXQiLCJTRUNSRVQiLCJzZXNzaW9uIiwiand0IiwicGFnZXMiLCJjYWxsYmFja3MiLCJldmVudHMiLCJkZWJ1ZyIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTtBQUNBOztBQUNBLE1BQU1BLE9BQU8sR0FBRztBQUNkO0FBQ0FDLFdBQVMsRUFBRSxDQUNUQywwREFBUyxDQUFDQyxJQUFWLENBQWU7QUFDYkMsWUFBUSxFQUFFLHNCQURHO0FBRWJDLGdCQUFZLEVBQUUsMkNBRkQ7QUFHYkMsVUFBTSxFQUFFO0FBSEssR0FBZixDQURTLEVBTVRKLDBEQUFTLENBQUNLLEtBQVYsQ0FBZ0I7QUFDZEgsWUFBUSxFQUFFSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFEUjtBQUVkTCxnQkFBWSxFQUFFO0FBQ1pNLGFBQU8sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBRFQ7QUFFWkUsWUFBTSxFQUFFSixPQUFPLENBQUNDLEdBQVIsQ0FBWUksYUFGUjtBQUdaQyxnQkFBVSxFQUFFTixPQUFPLENBQUNDLEdBQVIsQ0FBWU0saUJBSFo7QUFJWkMsV0FBSyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFKUDtBQUZBLEdBQWhCLENBTlMsRUFlVGYsMERBQVMsQ0FBQ2dCLEtBQVYsQ0FBZ0I7QUFDZGQsWUFBUSxFQUFFSSxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsUUFEUjtBQUVkZCxnQkFBWSxFQUFFRyxPQUFPLENBQUNDLEdBQVIsQ0FBWVcsWUFGWjtBQUdkZCxVQUFNLEVBQUVFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWTtBQUhOLEdBQWhCLENBZlMsRUFvQlRuQiwwREFBUyxDQUFDb0IsUUFBVixDQUFtQjtBQUNqQmxCLFlBQVEsRUFBRUksT0FBTyxDQUFDQyxHQUFSLENBQVljLFdBREw7QUFFakJsQixnQkFBWSxFQUFFRyxPQUFPLENBQUNDLEdBQVIsQ0FBWWU7QUFGVCxHQUFuQixDQXBCUyxFQXdCVHRCLDBEQUFTLENBQUN1QixNQUFWLENBQWlCO0FBQ2ZyQixZQUFRLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaUIsU0FEUDtBQUVmckIsZ0JBQVksRUFBRUcsT0FBTyxDQUFDQyxHQUFSLENBQVlrQjtBQUZYLEdBQWpCLENBeEJTLEVBNEJUekIsMERBQVMsQ0FBQzBCLE1BQVYsQ0FBaUI7QUFDZnhCLFlBQVEsRUFBRUksT0FBTyxDQUFDQyxHQUFSLENBQVlvQixTQURQO0FBRWZ4QixnQkFBWSxFQUFFRyxPQUFPLENBQUNDLEdBQVIsQ0FBWXFCO0FBRlgsR0FBakIsQ0E1QlMsRUFnQ1Q1QiwwREFBUyxDQUFDNkIsT0FBVixDQUFrQjtBQUNoQjNCLFlBQVEsRUFBRUksT0FBTyxDQUFDQyxHQUFSLENBQVl1QixVQUROO0FBRWhCM0IsZ0JBQVksRUFBRUcsT0FBTyxDQUFDQyxHQUFSLENBQVl3QjtBQUZWLEdBQWxCLENBaENTLENBRkc7QUF1Q2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFVBQVEsRUFDTjFCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEIsWUFBWixJQUNBLHFHQS9DWTtBQWlEZDtBQUNBO0FBQ0E7QUFDQUMsUUFBTSxFQUFFNUIsT0FBTyxDQUFDQyxHQUFSLENBQVk0QixNQXBETjtBQXNEZEMsU0FBTyxFQUFFO0FBQ1A7QUFDQTtBQUNBO0FBQ0FDLE9BQUcsRUFBRSxJQUpFLENBTVA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVpPLEdBdERLO0FBcUVkO0FBQ0E7QUFDQTtBQUNBQSxLQUFHLEVBQUUsQ0FDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkcsR0F4RVM7QUFtRmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsT0FBSyxFQUFFLENBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxLLEdBdkZPO0FBK0ZkO0FBQ0E7QUFDQTtBQUNBQyxXQUFTLEVBQUUsQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUpTLEdBbEdHO0FBeUdkO0FBQ0E7QUFDQUMsUUFBTSxFQUFFLEVBM0dNO0FBNkdkO0FBQ0FDLE9BQUssRUFBRTtBQTlHTyxDQUFoQjtBQWlIZSxnRUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXN0MsT0FBWCxDQUFyQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBlYWNoIG9wdGlvbiAoYW5kIGEgZnVsbCBsaXN0IG9mIG9wdGlvbnMpIGdvIHRvXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG5jb25zdCBvcHRpb25zID0ge1xuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9wcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLk9rdGEoe1xuICAgICAgY2xpZW50SWQ6IFwiMG9hbzh4OWI2dDJQeGJhcE00eDZcIixcbiAgICAgIGNsaWVudFNlY3JldDogXCIwMHdsN1M4emV2SkZJM3RlZks4bC15cVZQcmJYR1lJanpCblNvcE0xa1wiLFxuICAgICAgZG9tYWluOiBcImh0dHBzOi8vZGV2LTQyMTk2NC5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdFwiLFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5BcHBsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHtcbiAgICAgICAgYXBwbGVJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgICAgIHRlYW1JZDogcHJvY2Vzcy5lbnYuQVBQTEVfVEVBTV9JRCxcbiAgICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuQVBQTEVfUFJJVkFURV9LRVksXG4gICAgICAgIGtleUlkOiBwcm9jZXNzLmVudi5BUFBMRV9LRVlfSUQsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5BdXRoMCh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcbiAgICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5GYWNlYm9vayh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgUHJvdmlkZXJzLkdvb2dsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5Ud2l0dGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgLy8gRGF0YWJhc2Ugb3B0aW9uYWwuIE15U1FMLCBNYXJpYSBEQiwgUG9zdGdyZXMgYW5kIE1vbmdvREIgYXJlIHN1cHBvcnRlZC5cbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vZGF0YWJhc2VcbiAgLy9cbiAgLy8gTm90ZXM6XG4gIC8vICogWW91IG11c3QgdG8gaW5zdGFsbCBhbiBhcHByb3ByaWF0ZSBub2RlX21vZHVsZSBmb3IgeW91ciBkYXRhYmFzZVxuICAvLyAqIFRoZSBFbWFpbCBwcm92aWRlciByZXF1aXJlcyBhIGRhdGFiYXNlIChPQXV0aCBwcm92aWRlcnMgZG8gbm90KVxuICBkYXRhYmFzZTpcbiAgICBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHxcbiAgICBcIm1vbmdvZGIrc3J2Oi8vTWljaGFlbFA6U3RyaW5nYmVhbjg2QHByb2plY3QzLmZ3aTlvLm1vbmdvZGIubmV0LzxkYm5hbWU+P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuXG4gIC8vIFRoZSBzZWNyZXQgc2hvdWxkIGJlIHNldCB0byBhIHJlYXNvbmFibHkgbG9uZyByYW5kb20gc3RyaW5nLlxuICAvLyBJdCBpcyB1c2VkIHRvIHNpZ24gY29va2llcyBhbmQgdG8gc2lnbiBhbmQgZW5jcnlwdCBKU09OIFdlYiBUb2tlbnMsIHVubGVzc1xuICAvLyBhIHNlcGVyYXRlIHNlY3JldCBpcyBkZWZpbmVkIGV4cGxpY2l0bHkgZm9yIGVuY3J5cHRpbmcgdGhlIEpXVC5cbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG5cbiAgc2Vzc2lvbjoge1xuICAgIC8vIFVzZSBKU09OIFdlYiBUb2tlbnMgZm9yIHNlc3Npb24gaW5zdGVhZCBvZiBkYXRhYmFzZSBzZXNzaW9ucy5cbiAgICAvLyBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB3aXRoIG9yIHdpdGhvdXQgYSBkYXRhYmFzZSBmb3IgdXNlcnMvYWNjb3VudHMuXG4gICAgLy8gTm90ZTogYGp3dGAgaXMgYXV0b21hdGljYWxseSBzZXQgdG8gYHRydWVgIGlmIG5vIGRhdGFiYXNlIGlzIHNwZWNpZmllZC5cbiAgICBqd3Q6IHRydWUsXG5cbiAgICAvLyBTZWNvbmRzIC0gSG93IGxvbmcgdW50aWwgYW4gaWRsZSBzZXNzaW9uIGV4cGlyZXMgYW5kIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICAvLyBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXG5cbiAgICAvLyBTZWNvbmRzIC0gVGhyb3R0bGUgaG93IGZyZXF1ZW50bHkgdG8gd3JpdGUgdG8gZGF0YWJhc2UgdG8gZXh0ZW5kIGEgc2Vzc2lvbi5cbiAgICAvLyBVc2UgaXQgdG8gbGltaXQgd3JpdGUgb3BlcmF0aW9ucy4gU2V0IHRvIDAgdG8gYWx3YXlzIHVwZGF0ZSB0aGUgZGF0YWJhc2UuXG4gICAgLy8gTm90ZTogVGhpcyBvcHRpb24gaXMgaWdub3JlZCBpZiB1c2luZyBKU09OIFdlYiBUb2tlbnNcbiAgICAvLyB1cGRhdGVBZ2U6IDI0ICogNjAgKiA2MCwgLy8gMjQgaG91cnNcbiAgfSxcblxuICAvLyBKU09OIFdlYiB0b2tlbnMgYXJlIG9ubHkgdXNlZCBmb3Igc2Vzc2lvbnMgaWYgdGhlIGBqd3Q6IHRydWVgIHNlc3Npb25cbiAgLy8gb3B0aW9uIGlzIHNldCAtIG9yIGJ5IGRlZmF1bHQgaWYgbm8gZGF0YWJhc2UgaXMgc3BlY2lmaWVkLlxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zI2p3dFxuICBqd3Q6IHtcbiAgICAvLyBBIHNlY3JldCB0byB1c2UgZm9yIGtleSBnZW5lcmF0aW9uICh5b3Ugc2hvdWxkIHNldCB0aGlzIGV4cGxpY2l0bHkpXG4gICAgLy8gc2VjcmV0OiAnSU5wOEl2ZEl5ZU1jb0dBZ0ZHb0E2MURkQmdsd3dTcW5YSlprZ3o4UFNudycsXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gdXNlIGVuY3J5cHRpb24gKGRlZmF1bHQ6IGZhbHNlKVxuICAgIC8vIGVuY3J5cHRpb246IHRydWUsXG4gICAgLy8gWW91IGNhbiBkZWZpbmUgeW91ciBvd24gZW5jb2RlL2RlY29kZSBmdW5jdGlvbnMgZm9yIHNpZ25pbmcgYW5kIGVuY3J5cHRpb25cbiAgICAvLyBpZiB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIuXG4gICAgLy8gZW5jb2RlOiBhc3luYyAoeyBzZWNyZXQsIHRva2VuLCBtYXhBZ2UgfSkgPT4ge30sXG4gICAgLy8gZGVjb2RlOiBhc3luYyAoeyBzZWNyZXQsIHRva2VuLCBtYXhBZ2UgfSkgPT4ge30sXG4gIH0sXG5cbiAgLy8gWW91IGNhbiBkZWZpbmUgY3VzdG9tIHBhZ2VzIHRvIG92ZXJyaWRlIHRoZSBidWlsdC1pbiBwYWdlcy5cbiAgLy8gVGhlIHJvdXRlcyBzaG93biBoZXJlIGFyZSB0aGUgZGVmYXVsdCBVUkxzIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gYSBjdXN0b21cbiAgLy8gcGFnZXMgaXMgbm90IHNwZWNpZmllZCBmb3IgdGhhdCByb3V0ZS5cbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vcGFnZXNcbiAgcGFnZXM6IHtcbiAgICAvLyBzaWduSW46ICcvYXBpL2F1dGgvc2lnbmluJywgIC8vIERpc3BsYXlzIHNpZ25pbiBidXR0b25zXG4gICAgLy8gc2lnbk91dDogJy9hcGkvYXV0aC9zaWdub3V0JywgLy8gRGlzcGxheXMgZm9ybSB3aXRoIHNpZ24gb3V0IGJ1dHRvblxuICAgIC8vIGVycm9yOiAnL2FwaS9hdXRoL2Vycm9yJywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cbiAgICAvLyB2ZXJpZnlSZXF1ZXN0OiAnL2FwaS9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gVXNlZCBmb3IgY2hlY2sgZW1haWwgcGFnZVxuICAgIC8vIG5ld1VzZXI6IG51bGwgLy8gSWYgc2V0LCBuZXcgdXNlcnMgd2lsbCBiZSBkaXJlY3RlZCBoZXJlIG9uIGZpcnN0IHNpZ24gaW5cbiAgfSxcblxuICAvLyBDYWxsYmFja3MgYXJlIGFzeW5jaHJvbm91cyBmdW5jdGlvbnMgeW91IGNhbiB1c2UgdG8gY29udHJvbCB3aGF0IGhhcHBlbnNcbiAgLy8gd2hlbiBhbiBhY3Rpb24gaXMgcGVyZm9ybWVkLlxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9jYWxsYmFja3NcbiAgY2FsbGJhY2tzOiB7XG4gICAgLy8gc2lnbkluOiBhc3luYyAodXNlciwgYWNjb3VudCwgcHJvZmlsZSkgPT4geyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpIH0sXG4gICAgLy8gcmVkaXJlY3Q6IGFzeW5jICh1cmwsIGJhc2VVcmwpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShiYXNlVXJsKSB9LFxuICAgIC8vIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoc2Vzc2lvbikgfSxcbiAgICAvLyBqd3Q6IGFzeW5jICh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodG9rZW4pIH1cbiAgfSxcblxuICAvLyBFdmVudHMgYXJlIHVzZWZ1bCBmb3IgbG9nZ2luZ1xuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9ldmVudHNcbiAgZXZlbnRzOiB7fSxcblxuICAvLyBFbmFibGUgZGVidWcgbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgaWYgeW91IGFyZSBoYXZpbmcgcHJvYmxlbXNcbiAgZGVidWc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });