"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: () => (/* binding */ __N_SSP),\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProductItem */ \"./components/ProductItem.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { products, featuredProducts } = param;\n    _s();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__.Store);\n    const { cart } = state;\n    const addToCartHandler = async (product)=>{\n        const existItem = cart.cartItems.find((x)=>x.slug === product.slug);\n        const quantity = existItem ? existItem.quantity + 1 : 1;\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"/api/products/\".concat(product._id));\n        if (data.countInStock < quantity) {\n            return react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Sorry, Product is out of stock\");\n        }\n        dispatch({\n            type: \"CART_ADD_ITEM\",\n            payload: {\n                ...product,\n                quantity\n            }\n        });\n        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Product added successfully\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Home Page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {\n                className: \"mt-[3rem]\",\n                showThumbs: false,\n                autoPlay: true,\n                infiniteLoop: true,\n                children: featuredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            href: \"/product/\".concat(product.slug),\n                            passHref: true,\n                            className: \"flex \",\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                src: product.banner,\n                                alt: product.name,\n                                height: 1000,\n                                width: 1000,\n                                className: \"w-full h-[20rem] lg:h-[40rem]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, product._id, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"capitalize h-2 my-4 font-bold mt-10\",\n                children: \"latest products\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: product,\n                        addToCartHandler: addToCartHandler\n                    }, product.slug, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\Projects\\\\Final-Year-Project\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"QMdo+h1+fLbTriZQ0QN6uukzyow=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNVO0FBRWI7QUFFWjtBQUNTO0FBQ0k7QUFDYztBQUNVO0FBQ2xDO0FBQ0U7O0FBR2hCLFNBQVNTLEtBQUssS0FBOEI7UUFBOUIsRUFBRUMsUUFBUSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUE5Qjs7SUFDM0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0YsK0NBQUtBO0lBQzVDLE1BQU0sRUFBRVksSUFBSSxFQUFFLEdBQUdGO0lBRWpCLE1BQU1HLG1CQUFtQixPQUFPQztRQUM5QixNQUFNQyxZQUFZSCxLQUFLSSxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJLEtBQUtMLFFBQVFLLElBQUk7UUFDcEUsTUFBTUMsV0FBV0wsWUFBWUEsVUFBVUssUUFBUSxHQUFHLElBQUk7UUFDdEQsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNcEIsa0RBQVMsQ0FBQyxpQkFBNkIsT0FBWmEsUUFBUVMsR0FBRztRQUU3RCxJQUFJRixLQUFLRyxZQUFZLEdBQUdKLFVBQVU7WUFDaEMsT0FBT2pCLGlEQUFLQSxDQUFDc0IsS0FBSyxDQUFDO1FBQ3JCO1FBRUFkLFNBQVM7WUFBRWUsTUFBTTtZQUFpQkMsU0FBUztnQkFBRSxHQUFHYixPQUFPO2dCQUFFTTtZQUFTO1FBQUU7UUFFcEVqQixpREFBS0EsQ0FBQ3lCLE9BQU8sQ0FBQztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDOUIsMERBQU1BO1FBQUMrQixPQUFNOzswQkFDWiw4REFBQ3pCLCtEQUFRQTtnQkFDUDBCLFdBQVU7Z0JBQ1ZDLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLFlBQVk7MEJBRVh4QixpQkFBaUJ5QixHQUFHLENBQUMsQ0FBQ3BCLHdCQUNyQiw4REFBQ3FCO2tDQUNDLDRFQUFDOUIsa0RBQUlBOzRCQUNIK0IsTUFBTSxZQUF5QixPQUFidEIsUUFBUUssSUFBSTs0QkFDOUJrQixRQUFROzRCQUNSUCxXQUFVOzRCQUNWUSxjQUFjO3NDQUVkLDRFQUFDaEMsbURBQUtBO2dDQUNKaUMsS0FBS3pCLFFBQVEwQixNQUFNO2dDQUNuQkMsS0FBSzNCLFFBQVE0QixJQUFJO2dDQUNqQkMsUUFBUTtnQ0FDUkMsT0FBTztnQ0FDUGQsV0FBVTs7Ozs7Ozs7Ozs7dUJBWk5oQixRQUFRUyxHQUFHOzs7Ozs7Ozs7OzBCQW1CekIsOERBQUNzQjtnQkFBR2YsV0FBVTswQkFBc0M7Ozs7OzswQkFDcEQsOERBQUNLO2dCQUFJTCxXQUFVOzBCQUNadEIsU0FBUzBCLEdBQUcsQ0FBQyxDQUFDcEIsd0JBQ2IsOERBQUNmLCtEQUFXQTt3QkFDVmUsU0FBU0E7d0JBRVRELGtCQUFrQkE7dUJBRGJDLFFBQVFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7R0ExRHdCWjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBZG1pbmlzdHJhdG9yXFxEZXNrdG9wXFxQcm9qZWN0c1xcRmluYWwtWWVhci1Qcm9qZWN0XFxwYWdlc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiQC9tb2RlbHMvUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAL3V0aWxzL1N0b3JlXCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiQC91dGlscy9kYlwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cywgZmVhdHVyZWRQcm9kdWN0cyB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gIGNvbnN0IHsgY2FydCB9ID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc3QgZXhpc3RJdGVtID0gY2FydC5jYXJ0SXRlbXMuZmluZCgoeCkgPT4geC5zbHVnID09PSBwcm9kdWN0LnNsdWcpO1xyXG4gICAgY29uc3QgcXVhbnRpdHkgPSBleGlzdEl0ZW0gPyBleGlzdEl0ZW0ucXVhbnRpdHkgKyAxIDogMTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7cHJvZHVjdC5faWR9YCk7XHJcblxyXG4gICAgaWYgKGRhdGEuY291bnRJblN0b2NrIDwgcXVhbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKFwiU29ycnksIFByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJDQVJUX0FERF9JVEVNXCIsIHBheWxvYWQ6IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfSB9KTtcclxuXHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJIb21lIFBhZ2VcIj5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtWzNyZW1dXCJcclxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICBhdXRvUGxheT17dHJ1ZX1cclxuICAgICAgICBpbmZpbml0ZUxvb3BcclxuICAgICAgPlxyXG4gICAgICAgIHtmZWF0dXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YH1cclxuICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggXCJcclxuICAgICAgICAgICAgICBsZWdhY3lCZWhhdmlvclxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuYmFubmVyfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVsyMHJlbV0gbGc6aC1bNDByZW1dXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIGgtMiBteS00IGZvbnQtYm9sZCBtdC0xMFwiPmxhdGVzdCBwcm9kdWN0czwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3Quc2x1Z31cclxuICAgICAgICAgICAgYWRkVG9DYXJ0SGFuZGxlcj17YWRkVG9DYXJ0SGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKS5sZWFuKCk7XHJcbiAgY29uc3QgZmVhdHVyZWRQcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCh7IGlzRmVhdHVyZWQ6IHRydWUgfSkubGVhbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZmVhdHVyZWRQcm9kdWN0czogZmVhdHVyZWRQcm9kdWN0cy5tYXAoZGIuY29udmVydERvY1RvT2JqKSxcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChkYi5jb252ZXJ0RG9jVG9PYmopLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJQcm9kdWN0SXRlbSIsIlN0b3JlIiwiYXhpb3MiLCJ1c2VDb250ZXh0IiwidG9hc3QiLCJDYXJvdXNlbCIsIkxpbmsiLCJJbWFnZSIsIkhvbWUiLCJwcm9kdWN0cyIsImZlYXR1cmVkUHJvZHVjdHMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FydCIsImFkZFRvQ2FydEhhbmRsZXIiLCJwcm9kdWN0IiwiZXhpc3RJdGVtIiwiY2FydEl0ZW1zIiwiZmluZCIsIngiLCJzbHVnIiwicXVhbnRpdHkiLCJkYXRhIiwiZ2V0IiwiX2lkIiwiY291bnRJblN0b2NrIiwiZXJyb3IiLCJ0eXBlIiwicGF5bG9hZCIsInN1Y2Nlc3MiLCJ0aXRsZSIsImNsYXNzTmFtZSIsInNob3dUaHVtYnMiLCJhdXRvUGxheSIsImluZmluaXRlTG9vcCIsIm1hcCIsImRpdiIsImhyZWYiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwic3JjIiwiYmFubmVyIiwiYWx0IiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwiaDIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});