"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\[...nextauth].js */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQ2lFO0FBQ2pFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO1FBQU1FLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNJLFNBQVM7UUFBRU4sTUFBTU87UUFBU0wsVUFBVTtRQUFNTSxTQUFTO0lBQU07QUFDM0QsR0FDQTtJQUNFQyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxPQUFPZCx3REFBZSxDQUFDYyxJQUFJLElBQUlkLHFEQUFjLENBQUMsUUFBUUM7QUFDNUQsaUVBQWVhLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcUHJvamVjdHNcXEZpbmFsLVllYXItUHJvamVjdFxcbW9kZWxzXFxVc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpc0FkbWluOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbilcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()({\n    session: {\n        strategy: 'jwt'\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user?._id) token._id = user._id;\n            if (user?.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token?._id) session.user._id = token._id;\n            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disconnect();\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compareSync(credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        image: 'f',\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error('Invalid email or password');\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNMO0FBQ0s7QUFDaUM7QUFDbEM7QUFFL0IsaUVBQWVFLGdEQUFRQSxDQUFDO0lBQ3RCRyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUVBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNQyxLQUFLRixNQUFNRSxHQUFHLEdBQUdELEtBQUtDLEdBQUc7WUFDbkMsSUFBSUQsTUFBTUUsU0FBU0gsTUFBTUcsT0FBTyxHQUFHRixLQUFLRSxPQUFPO1lBQy9DLE9BQU9IO1FBQ1Q7UUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU9FLEtBQUtOLFFBQVFLLElBQUksQ0FBQ0MsR0FBRyxHQUFHRixNQUFNRSxHQUFHO1lBQzVDLElBQUlGLE9BQU9HLFNBQVNQLFFBQVFLLElBQUksQ0FBQ0UsT0FBTyxHQUFHSCxNQUFNRyxPQUFPO1lBQ3hELE9BQU9QO1FBQ1Q7SUFDRjtJQUNBUSxXQUFXO1FBQ1RWLHNFQUFtQkEsQ0FBQztZQUNsQixNQUFNVyxXQUFVQyxXQUFXO2dCQUN6QixNQUFNZCx5REFBVTtnQkFDaEIsTUFBTVMsT0FBTyxNQUFNViw0REFBWSxDQUFDO29CQUM5QmtCLE9BQU9ILFlBQVlHLEtBQUs7Z0JBQzFCO2dCQUNBLE1BQU1qQiw0REFBYTtnQkFDbkIsSUFBSVMsUUFBUU4sMkRBQW9CLENBQUNXLFlBQVlNLFFBQVEsRUFBRVgsS0FBS1csUUFBUSxHQUFHO29CQUNyRSxPQUFPO3dCQUNMVixLQUFLRCxLQUFLQyxHQUFHO3dCQUNiVyxNQUFNWixLQUFLWSxJQUFJO3dCQUNmSixPQUFPUixLQUFLUSxLQUFLO3dCQUNqQkssT0FBTzt3QkFDUFgsU0FBU0YsS0FBS0UsT0FBTztvQkFDdkI7Z0JBQ0Y7Z0JBQ0EsTUFBTSxJQUFJWSxNQUFNO1lBQ2xCO1FBQ0Y7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcUHJvamVjdHNcXEZpbmFsLVllYXItUHJvamVjdFxccGFnZXNcXGFwaVxcYXV0aFxcWy4uLm5leHRhdXRoXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICdAL21vZGVscy9Vc2VyJ1xyXG5pbXBvcnQgZGIgZnJvbSAnQC91dGlscy9kYidcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiAnand0JyxcclxuICB9LFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXI/Ll9pZCkgdG9rZW4uX2lkID0gdXNlci5faWRcclxuICAgICAgaWYgKHVzZXI/LmlzQWRtaW4pIHRva2VuLmlzQWRtaW4gPSB1c2VyLmlzQWRtaW5cclxuICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuPy5faWQpIHNlc3Npb24udXNlci5faWQgPSB0b2tlbi5faWRcclxuICAgICAgaWYgKHRva2VuPy5pc0FkbWluKSBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9IHRva2VuLmlzQWRtaW5cclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgIH0sXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBhd2FpdCBkYi5jb25uZWN0KClcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIGlmICh1c2VyICYmIGJjcnlwdGpzLmNvbXBhcmVTeW5jKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX2lkOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgaW1hZ2U6ICdmJyxcclxuICAgICAgICAgICAgaXNBZG1pbjogdXNlci5pc0FkbWluLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSlcclxuIl0sIm5hbWVzIjpbIlVzZXIiLCJkYiIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdGpzIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiX2lkIiwiaXNBZG1pbiIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiY29ubmVjdCIsImZpbmRPbmUiLCJlbWFpbCIsImRpc2Nvbm5lY3QiLCJjb21wYXJlU3luYyIsInBhc3N3b3JkIiwibmFtZSIsImltYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log(\"Already connected\");\n        return;\n    }\n    // Check if there's an existing connection\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections).length > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState;\n        if (connection.isConnected === 1) {\n            console.log(\"Use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    // New connection with additional error handling\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"New connection established\");\n        connection.isConnected = db.connections[0].readyState;\n    } catch (error) {\n        console.error(\"Failed to connect to MongoDB\", error);\n    }\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"Not disconnected in development\");\n        }\n    }\n}\nfunction convertDocToObj(doc) {\n    doc._id = doc._id.toString();\n    doc.createdAt = doc.createdAt.toString();\n    doc.updatedAt = doc.updatedAt.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    disconnect,\n    convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLGVBQWVDO0lBQ2IsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsMENBQTBDO0lBQzFDLElBQUlMLDZEQUFvQixDQUFDTyxNQUFNLEdBQUcsR0FBRztRQUNuQ04sV0FBV0UsV0FBVyxHQUFHSCw2REFBb0IsQ0FBQyxFQUFFLENBQUNRLFVBQVU7UUFDM0QsSUFBSVAsV0FBV0UsV0FBVyxLQUFLLEdBQUc7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0Y7UUFDQSxNQUFNTCwwREFBbUI7SUFDM0I7SUFFQSxnREFBZ0Q7SUFDaEQsSUFBSTtRQUNGLE1BQU1VLEtBQUssTUFBTVYsdURBQWdCLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUN6RFQsUUFBUUMsR0FBRyxDQUFDO1FBQ1pKLFdBQVdFLFdBQVcsR0FBR08sR0FBR0osV0FBVyxDQUFDLEVBQUUsQ0FBQ0UsVUFBVTtJQUN2RCxFQUFFLE9BQU9NLE9BQU87UUFDZFYsUUFBUVUsS0FBSyxDQUFDLGdDQUFnQ0E7SUFDaEQ7QUFDRjtBQUVBLGVBQWVMO0lBQ2IsSUFBSVIsV0FBV0UsV0FBVyxFQUFFO1FBQzFCLElBQUlRLEtBQXFDLEVBQUUsRUFJMUMsTUFBTTtZQUNMUCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNGO0FBQ0Y7QUFFQSxTQUFTVyxnQkFBZ0JELEdBQUc7SUFDMUJBLElBQUlFLEdBQUcsR0FBR0YsSUFBSUUsR0FBRyxDQUFDQyxRQUFRO0lBQzFCSCxJQUFJSSxTQUFTLEdBQUdKLElBQUlJLFNBQVMsQ0FBQ0QsUUFBUTtJQUN0Q0gsSUFBSUssU0FBUyxHQUFHTCxJQUFJSyxTQUFTLENBQUNGLFFBQVE7SUFDdEMsT0FBT0g7QUFDVDtBQUVBLE1BQU1MLEtBQUs7SUFBRVI7SUFBU087SUFBWU87QUFBZ0I7QUFDbEQsaUVBQWVOLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcUHJvamVjdHNcXEZpbmFsLVllYXItUHJvamVjdFxcdXRpbHNcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWRcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGNvbm5lY3Rpb25cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVzZSBwcmV2aW91cyBjb25uZWN0aW9uXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBOZXcgY29ubmVjdGlvbiB3aXRoIGFkZGl0aW9uYWwgZXJyb3IgaGFuZGxpbmdcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTmV3IGNvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREJcIiwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSBNb25nb0RCIGluIHByb2R1Y3Rpb25cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCBkaXNjb25uZWN0ZWQgaW4gZGV2ZWxvcG1lbnRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsImxlbmd0aCIsInJlYWR5U3RhdGUiLCJkaXNjb25uZWN0IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnJvciIsImRvYyIsImNvbnZlcnREb2NUb09iaiIsIl9pZCIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();