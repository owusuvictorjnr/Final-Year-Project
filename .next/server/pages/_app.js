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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_2__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// import { PayPalScriptProvider } from '@paypal/react-paypal-js'\nfunction MyApp({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {\n            children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                adminOnly: Component.auth.adminOnly,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children, adminOnly }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push('/unauthorized?message=login required');\n        }\n    });\n    if (status === 'loading') {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\_app.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    // Admin Authentication\n    if (adminOnly && !session.user.isAdmin) {\n        router.push('/unauthorized?message=admin login required');\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2dCO0FBQ2dCO0FBQ3RCO0FBQ3ZDLGlFQUFpRTtBQUVqRSxTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDTCw0REFBZUE7UUFBQ00sU0FBU0E7a0JBQ3hCLDRFQUFDUCx1REFBYUE7c0JBRVRLLFVBQVVHLElBQUksaUJBQ2IsOERBQUNDO2dCQUFLQyxXQUFXTCxVQUFVRyxJQUFJLENBQUNFLFNBQVM7MEJBQ3ZDLDRFQUFDTDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7O3FDQUcxQiw4REFBQ0Q7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztBQUVBLFNBQVNHLEtBQUssRUFBRUUsUUFBUSxFQUFFRCxTQUFTLEVBQUU7SUFDbkMsTUFBTUUsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsTUFBTSxFQUFFQyxNQUFNUCxPQUFPLEVBQUUsR0FBR0wsMkRBQVVBLENBQUM7UUFDM0NhLFVBQVU7UUFDVkM7WUFDRUosT0FBT0ssSUFBSSxDQUFDO1FBQ2Q7SUFDRjtJQUNBLElBQUlKLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkO0lBRUEsdUJBQXVCO0lBQ3ZCLElBQUlSLGFBQWEsQ0FBQ0gsUUFBUVksSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDdENSLE9BQU9LLElBQUksQ0FBQztJQUNkO0lBQ0EsT0FBT047QUFDVDtBQUVBLGlFQUFlUCxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXFByb2plY3RzXFxGaW5hbC1ZZWFyLVByb2plY3RcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tICdAL3V0aWxzL1N0b3JlJ1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG4vLyBpbXBvcnQgeyBQYXlQYWxTY3JpcHRQcm92aWRlciB9IGZyb20gJ0BwYXlwYWwvcmVhY3QtcGF5cGFsLWpzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XHJcbiAgICAgIDxTdG9yZVByb3ZpZGVyPlxyXG4gICAgICAgIHsvKiA8UGF5UGFsU2NyaXB0UHJvdmlkZXIgZGVmZXJMb2FkaW5nPXt0cnVlfT4gKi99XHJcbiAgICAgICAgICB7Q29tcG9uZW50LmF1dGggPyAoXHJcbiAgICAgICAgICAgIDxBdXRoIGFkbWluT25seT17Q29tcG9uZW50LmF1dGguYWRtaW5Pbmx5fT5cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQXV0aD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgey8qIDwvUGF5UGFsU2NyaXB0UHJvdmlkZXI+ICovfVxyXG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF1dGgoeyBjaGlsZHJlbiwgYWRtaW5Pbmx5IH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgc3RhdHVzLCBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKHtcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvdW5hdXRob3JpemVkP21lc3NhZ2U9bG9naW4gcmVxdWlyZWQnKVxyXG4gICAgfSxcclxuICB9KVxyXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gIH1cclxuXHJcbiAgLy8gQWRtaW4gQXV0aGVudGljYXRpb25cclxuICBpZiAoYWRtaW5Pbmx5ICYmICFzZXNzaW9uLnVzZXIuaXNBZG1pbikge1xyXG4gICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1hZG1pbiBsb2dpbiByZXF1aXJlZCcpXHJcbiAgfVxyXG4gIHJldHVybiBjaGlsZHJlblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiU3RvcmVQcm92aWRlciIsIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJhdXRoIiwiQXV0aCIsImFkbWluT25seSIsImNoaWxkcmVuIiwicm91dGVyIiwic3RhdHVzIiwiZGF0YSIsInJlcXVpcmVkIiwib25VbmF1dGhlbnRpY2F0ZWQiLCJwdXNoIiwiZGl2IiwidXNlciIsImlzQWRtaW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: () => (/* binding */ Store),\n/* harmony export */   StoreProvider: () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst intitialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('cart') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('cart')) : {\n        cartItems: [],\n        shippingAddress: {}\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case 'CART_ADD_ITEM':\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('cart', JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case 'CART_REMOVE_ITEM':\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('cart', JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case 'CART_RESET':\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: ''\n                }\n            };\n        case 'CART_CLEAR_ITEMS':\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case 'SAVE_SHIPPING_ADDRESS':\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case 'SAVE_PAYMENT_METHOD':\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, intitialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\utils\\\\Store.js\",\n        lineNumber: 78,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXFByb2plY3RzXFxGaW5hbC1ZZWFyLVByb2plY3RcXHV0aWxzXFxTdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgaW50aXRpYWxTdGF0ZSA9IHtcclxuICBjYXJ0OiBDb29raWVzLmdldCgnY2FydCcpXHJcbiAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2NhcnQnKSlcclxuICAgIDogeyBjYXJ0SXRlbXM6IFtdLCBzaGlwcGluZ0FkZHJlc3M6IHt9IH0sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0NBUlRfQUREX0lURU0nOiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IG5ld0l0ZW0uc2x1Z1xyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxyXG4gICAgICAgID8gc3RhdGUuY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICBpdGVtLm5hbWUgPT09IGV4aXN0SXRlbS5uYW1lID8gbmV3SXRlbSA6IGl0ZW1cclxuICAgICAgICAgIClcclxuICAgICAgICA6IFsuLi5zdGF0ZS5jYXJ0LmNhcnRJdGVtcywgbmV3SXRlbV1cclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSlcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NBUlRfUkVNT1ZFX0lURU0nOiB7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnICE9PSBhY3Rpb24ucGF5bG9hZC5zbHVnXHJcbiAgICAgIClcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSlcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0NBUlRfUkVTRVQnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgIGNhcnRJdGVtczogW10sXHJcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHsgbG9jYXRpb246IHt9IH0sXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSAnQ0FSVF9DTEVBUl9JVEVNUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtczogW10gfSB9XHJcblxyXG4gICAgY2FzZSAnU0FWRV9TSElQUElOR19BRERSRVNTJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxyXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLmNhcnQuc2hpcHBpbmdBZGRyZXNzLFxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgJ1NBVkVfUEFZTUVOVF9NRVRIT0QnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW50aXRpYWxTdGF0ZSlcclxuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH1cclxuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIlN0b3JlIiwiaW50aXRpYWxTdGF0ZSIsImNhcnQiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJjYXJ0SXRlbXMiLCJzaGlwcGluZ0FkZHJlc3MiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3SXRlbSIsInBheWxvYWQiLCJleGlzdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInNsdWciLCJtYXAiLCJuYW1lIiwic2V0Iiwic3RyaW5naWZ5IiwiZmlsdGVyIiwibG9jYXRpb24iLCJwYXltZW50TWV0aG9kIiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();