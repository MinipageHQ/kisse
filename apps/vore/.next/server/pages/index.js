"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,3955,6950];
exports.modules = {

/***/ 8033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WrappedAuthProvider)
/* harmony export */ });
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9304);
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WrappedAuthProvider({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__.ClerkProvider, {
    children: children
  });
}

/***/ }),

/***/ 6380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);


async function logout(_, ctx) {
  return await ctx.session.$revoke();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(logout, {
  "resolverName": "logout",
  "resolverType": "mutation",
  "routePath": "/api/rpc/logout"
}));

/***/ }),

/***/ 1246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useCurrentUser)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5223);


const useCurrentUser = () => {
  const [user] = (0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_1__.default, null);
  return user;
};

/***/ }),

/***/ 2661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/marketing-images/hero-image.png
/* harmony default export */ const hero_image = ({"src":"/_next/static/image/public/marketing-images/hero-image.2ce044710efe96b50ab59c9c0d981e27.png","height":1080,"width":1620,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAjElEQVR42mMAgY27rzExMFzik6h7pB455bFRa91No0SG3ewMyODIicf7jp68++fYgTt/V++8/TFg5QkpuOSPezUcbx7cfvDmyf3/D4+f/n/42JVHG/+/44Yr+Pr/AtPj/efOPjt0+f/th8//375x8wFc8v6xbYwg+ua1O9I3L162unHzjv/VG3c8YPIA5uJJzyguazgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/marketing-images/easy-to-use.png
/* harmony default export */ const easy_to_use = ({"src":"/_next/static/image/public/marketing-images/easy-to-use.0a8fa7ab285d434755318713ba7a5dd5.png","height":712,"width":712,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/UlEQVR42h3KvUrDUBgG4Pd8J0nNj1iiLtYEoQju4tTJG3Aq3oCDt5GbcNJFehmigzgIVRDECkJTbAv+pNJCTdM0J+cr9JkfgdsBANhPdeMstMUBAw5r3iuUioIguDdQFaswV0WkpryJ/wLsr0ERrgCA3ta1hcPaZFvpm1KnIC+fEefwSYwAQFy24oYq8fA1Fjg5+tPBjoXc9OkxFXen8bRJvaz8eWW6CKuznmmAtLRZsEJRqArmOYHbzy43W/Vk2L3+/mjzKH5Jk893ngz7xwBg9KXrZ+f7HR5nVsXZADQcS5pYSItWoZsnA3iIkPw2iKRk5i3X88xwt9YBgCWT5G7DU8GrmgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/marketing-images/logo-dark.png
/* harmony default export */ const logo_dark = ({"src":"/_next/static/image/public/marketing-images/logo-dark.0def8db1462298c98a738b26b4734620.png","height":28,"width":130,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAO0lEQVR4nBXKsREAEBAF0U8BMgWINKFCgV50og0FEAicFbyZDdYplSanIYMoKWLiwv5QiY6NjAOPhfAAkzYLPiKafNkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/marketing-images/productive.png
/* harmony default export */ const productive = ({"src":"/_next/static/image/public/marketing-images/productive.2654580c7d277f12497eef2d1c89fa19.png","height":712,"width":712,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42mOAgaq6c0xgRvxxo4rWG1eaJj3Kg0s+2lDCtGr+Ktb/67YKL8w/WFNWd+1/ZfOjfrDks8nLGWEKHxatef6yc+//mpxT/wtWPdgNN+HJ9tqSNye6DzzrmvX9ef2ev5WZR//nrri7Hq7gwfLY8+9P1v1/Prv3z9PCHT9Kss/9t09+kgZXcHRuy9ZzR5b9fzOj5dfz3qP/t228/f/y9WcvP79/YsBw/85N20snjvy9c+X4/zc3L/1/fv/J7Xdvn3W/e/PE6vqNxxxgE27dvJ78/PHjDY/efvTZ/P8aKwMSAAAu+oB+081XIgAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./app/core/layouts/Layout.tsx
var Layout = __webpack_require__(6481);
// EXTERNAL MODULE: external "@clerk/clerk-react"
var clerk_react_ = __webpack_require__(5085);
// EXTERNAL MODULE: ./app/core/hooks/useCurrentUser.ts
var useCurrentUser = __webpack_require__(1246);
// EXTERNAL MODULE: external "next/stdlib"
var stdlib_ = __webpack_require__(1210);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/data-client"
var data_client_ = __webpack_require__(3136);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./app/auth/mutations/logout.ts
var logout = __webpack_require__(6380);
// EXTERNAL MODULE: ./app/auth/components/AuthProvider.tsx
var AuthProvider = __webpack_require__(8033);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./app/auth/components/UserBox.tsx












const UserInfo = () => {
  const currentUser = (0,useCurrentUser/* useCurrentUser */.x)();
  const clerk = (0,clerk_react_.useClerk)();
  const [logoutMutation] = (0,data_client_.useMutation)(logout.default);

  if (currentUser) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "button small",
        onClick: async () => {
          await Promise.all([clerk.signOut(), logoutMutation()]);
        },
        children: "Logout"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: ["User id: ", /*#__PURE__*/jsx_runtime_.jsx("code", {
          children: currentUser.id
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "User role: ", /*#__PURE__*/jsx_runtime_.jsx("code", {
          children: currentUser.roles.join(', ')
        })]
      })]
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.Link, {
        href: stdlib_.Routes.LoginPage({}),
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "button small",
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "Login"
          })
        })
      })
    });
  }
};

const UserInfoWrapped = () => /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
  fallback: "Loading...",
  children: /*#__PURE__*/jsx_runtime_.jsx(AuthProvider/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(clerk_react_.ClerkLoaded, {
      children: /*#__PURE__*/jsx_runtime_.jsx(UserInfo, {})
    })
  })
});
/* harmony default export */ const UserBox = (UserInfoWrapped);
;// CONCATENATED MODULE: ./app/pages/index.tsx










const MarketingHome = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "antialiased bg-body text-body font-body",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "relative pb-20",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
          className: "flex justify-between items-center py-8 px-4 xl:px-10 ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "text-lg font-semibold",
            href: "https://www.saltana.com",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.Image, {
              src: logo_dark,
              alt: "Saltana",
              layout: "fixed"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lg:hidden",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "navbar-burger flex items-center p-3 hover:bg-gray-50 rounded",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                className: "block h-4 w-4",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                  children: "Mobile menu"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden lg:block",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200 typeform-share",
              href: "https://form.typeform.com/to/pEOpVF3E",
              "data-mode": "drawer_right",
              target: "_blank",
              rel: "noreferrer",
              children: "Get early access"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(UserBox, {})
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative container pt-12 px-4 mx-auto text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-blue-400 font-semibold",
            children: "For the creators, by the creators"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "mt-8 mb-8 lg:mb-12 text-4xl lg:text-6xl font-semibold",
            children: "Selling digital products is easy with Saltana"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "max-w-3xl mx-auto mb-8 lg:mb-12 text-xl text-gray-500",
            children: "Creator economy is the future, get ready to seize it! Saltana provides creators with easy checkouts and hassle-free delivery."
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-lg font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200 typeform-share",
            href: "https://form.typeform.com/to/pEOpVF3E",
            "data-mode": "drawer_right",
            target: "_blank",
            rel: "noreferrer",
            children: "Get early access"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "hero container max-w-screen-lg mx-auto pb-10 flex",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.Image, {
          className: "mx-auto",
          src: hero_image,
          alt: "Selling digital products is easy with Saltana"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "relative py-20 overflow-x-hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container px-4 mx-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative max-w-2xl mx-auto",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "absolute top-0 left-0 lg:-ml-20",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                width: "552",
                height: "414",
                viewBox: "0 0 552 414",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M299 269.675C299 151.65 388.187 28.1937 528.224 0.154258C528.676 0.0636969 529.136 0.294669 529.33 0.713275L551.18 47.9217C551.424 48.449 551.174 49.0702 550.633 49.2812C500.445 68.8437 456.451 134.368 450.998 180.121C450.935 180.651 451.309 181.121 451.836 181.208C508.665 190.617 552 239.966 552 299.483C552 372.669 492.568 414 432.423 414C363.078 414 299 360.985 299 269.675ZM0 269.675C0 151.65 89.1865 28.1937 229.224 0.154258C229.676 0.0636969 230.136 0.294669 230.33 0.713274L252.18 47.9217C252.424 48.449 252.174 49.0702 251.633 49.2812C201.445 68.8437 157.451 134.368 151.998 180.121C151.935 180.651 152.309 181.121 152.836 181.208C209.665 190.617 253 239.966 253 299.483C253 372.669 193.568 414 133.423 414C64.078 414 0 360.985 0 269.675Z",
                  fill: "url(#paint0_linear)"
                }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("linearGradient", {
                    id: "paint0_linear",
                    x1: "648",
                    y1: "-418.5",
                    x2: "107.461",
                    y2: "354.11",
                    gradientUnits: "userSpaceOnUse",
                    children: /*#__PURE__*/jsx_runtime_.jsx("stop", {
                      stopColor: "white",
                      stopOpacity: "0",
                      children: /*#__PURE__*/jsx_runtime_.jsx("stop", {
                        offset: "1",
                        stopColor: "#F2F5FA"
                      })
                    })
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative z-10 lg:py-10",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "mb-10 text-2xl leading-loose",
                children: "Saltana helps you create branded checkout experiences just for the purpose of selling digital products online. Turn your side hustle into a business with end-to-end sales process from hosted payment pages, checkout, automated promotions to delivery, and so much more."
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "relative py-20",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container px-4 mx-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-wrap items-start -mx-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative w-full md:w-1/2 px-4 mb-12 md:mb-0",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.Image, {
                className: "h-96 lg:h-128 w-full rounded-xl object-cover",
                src: productive,
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative w-full md:w-1/2 px-4 pb-20 lg:pb-0",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "lg:ml-auto max-w-md",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "mb-6 lg:mb-10 text-4xl font-semibold font-heading",
                  children: "Full-service"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "mb-6 lg:mb-10 text-xl text-gray-500",
                  children: "Whether you\u2019re selling ebooks, software, online courses, or other digital products, Saltana\u2019s full-service product platform makes it easy to sell more, stay lean, and compete big."
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mb-10 border rounded-lg",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex p-4 border-b",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-4 mt-1",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z",
                        fill: "#45C1FF"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "font-semibold font-heading",
                      children: "Modern, responsive checkout"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex p-4 border-b",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-4 mt-1",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z",
                        fill: "#45C1FF"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "font-semibold font-heading",
                      children: "Fast & secure delivery"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex p-4",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-4 mt-1",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z",
                        fill: "#45C1FF"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "font-semibold font-heading",
                      children: "Full product reports"
                    })]
                  })]
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "relative py-20 overflow-x-hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container px-4 mx-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-wrap items-center -mx-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "relative w-full lg:w-1/2 px-4 pb-12 lg:pb-0",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "max-w-md",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "mb-6 lg:mb-10 text-4xl font-semibold font-heading",
                  children: "Easy to use"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "mb-6 lg:mb-10 text-xl text-gray-500",
                  children: "Saltana is a one-stop platform for creators to sell digital products from selling, delivering, marketing to analytics. A simple and powerful solution."
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mb-10 border rounded-lg",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex p-4 border-b",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-4 mt-1",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z",
                        fill: "#45C1FF"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "font-semibold font-heading",
                      children: "Discount & promo codes"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex p-4 border-b",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-4 mt-1",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z",
                        fill: "#45C1FF"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "font-semibold font-heading",
                      children: "Embedded buttons"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex p-4",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "mr-4 mt-1",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z",
                        fill: "#45C1FF"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "font-semibold font-heading",
                      children: "Income analytics"
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full lg:w-1/2 px-4",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.Image, {
                className: "w-full h-100 mx-auto mb-6 md:mb-0 rounded-xl object-cover",
                src: easy_to_use,
                alt: ""
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "py-20",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container mx-auto px-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-wrap -mx-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full md:w-1/2 lg:w-1/3 px-3 mb-6",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "p-6 md:p-8 h-full border rounded-lg hover:bg-white hover:shadow-xl hover:border-transparent cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-teal-400 rounded-full",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      stroke: "white",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "mb-4 text-2xl font-semibold font-heading",
                    children: "Sell"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base text-gray-500",
                    children: "You can use our shopping cart and embed button on your website or you can direct your customers to our hosted payment page."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full md:w-1/2 lg:w-1/3 px-3 mb-6",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "p-6 md:p-8 h-full border rounded-lg hover:bg-white hover:shadow-xl hover:border-transparent cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-blue-400 rounded-full",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      stroke: "white",
                      d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "mb-4 text-2xl font-semibold font-heading",
                    children: "Deliver"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base text-gray-500",
                    children: "Sell whatever you want, wherever you want and to whomever you want and we'll deliver your downloadable products fast and safe."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full md:w-1/2 lg:w-1/3 px-3 mb-6",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "p-6 md:p-8 h-full border rounded-lg hover:bg-white hover:shadow-xl hover:border-transparent cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-red-400 rounded-full",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      stroke: "white",
                      d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "mb-4 text-2xl font-semibold font-heading",
                    children: "Market"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base text-gray-500",
                    children: "Saltana has all kinds of marketing automations you can think of. Email marketing automation, coupon codes, upsells, affiliates, etc."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "p-6 md:p-8 h-full border rounded-lg hover:bg-white hover:shadow-xl hover:border-transparent cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-orange-400 rounded-full",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      stroke: "white",
                      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "mb-4 text-2xl font-semibold font-heading",
                    children: "Secure"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base text-gray-500",
                    children: "Saltana protects your intellectual property and customers'l data with powerful and reliable management tools."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "p-6 md:p-8 h-full border rounded-lg hover:bg-white hover:shadow-xl hover:border-transparent cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-yellow-400 rounded-full",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      stroke: "white",
                      d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "mb-4 text-2xl font-semibold font-heading",
                    children: "Customize"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base text-gray-500",
                    children: "With Saltana, creators can customize every step of the checkout experience. Custom branding, email templates, embedded buttons..."
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full md:w-1/2 lg:w-1/3 px-3 mb-6 lg:mb-0",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "p-6 md:p-8 h-full border rounded-lg hover:bg-white hover:shadow-xl hover:border-transparent cursor-pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-gray-900 rounded-full",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      stroke: "white",
                      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "mb-4 text-2xl font-semibold font-heading",
                    children: "Analyze"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text-base text-gray-500",
                    children: "Optimize your sales process with top-notch dashboards and boost your revenue with Saltana."
                  })]
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "py-20",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container px-4 mx-auto",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "mb-8 md:mb-16 text-5xl lg:text-6xl font-semibold font-heading",
            children: "Sell quickly & scale efficiently"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-wrap items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "inline-block max-w-xl mb-6 md:mb-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-xl text-gray-500",
                children: "Saltana is super simple. You just focus on creating digital products, start selling in seconds. Your customers will have a world class checkout experience."
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "inline-block ml-auto w-full md:w-auto px-12 py-4 text-center text-lg text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded typeform-share",
              href: "https://form.typeform.com/to/pEOpVF3E",
              "data-mode": "drawer_right",
              target: "_blank",
              rel: "noreferrer",
              children: "Get early acess"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "py-20",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container mx-auto px-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pb-6 lg:pb-10 border-b border-gray-100",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex flex-wrap items-start justify-between",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-full lg:w-1/5 mb-6 lg:mb-0",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "inline-block mb-5 text-gray-900 text-lg font-semibold",
                  href: "https://www.saltana.com",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image.Image, {
                    src: logo_dark,
                    alt: "",
                    layout: "responsive"
                  })
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex flex-wrap justify-between items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-sm text-gray-500 mt-8",
                children: "All rights reserved \xA9 Copyright 2022 hey@saltana.com"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex order-first sm:order-last mt-8",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full",
                  href: "https://www.twitter.com/withSaltana/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: "text-gray-500",
                    width: "13",
                    height: "11",
                    viewBox: "0 0 13 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M12.5455 2.09728C12.0904 2.29892 11.6022 2.43566 11.0892 2.49671C11.613 2.18304 12.014 1.6855 12.204 1.09447C11.7127 1.38496 11.1703 1.59589 10.5924 1.71023C10.1296 1.21655 9.47138 0.909058 8.74128 0.909058C7.34059 0.909058 6.20489 2.04475 6.20489 3.44467C6.20489 3.64322 6.2273 3.83714 6.27057 4.02257C4.16298 3.91671 2.29411 2.90696 1.0433 1.37259C0.824652 1.74653 0.700269 2.18225 0.700269 2.64736C0.700269 3.52734 1.14837 4.30379 1.82825 4.75805C1.41259 4.74415 1.02166 4.62981 0.67942 4.43975V4.47142C0.67942 5.69983 1.55399 6.72504 2.71362 6.95837C2.50116 7.01554 2.27712 7.04722 2.04534 7.04722C1.88156 7.04722 1.72318 7.031 1.56788 7.00009C1.89081 8.00831 2.8272 8.74148 3.93663 8.76158C3.06902 9.44146 1.97504 9.84552 0.786814 9.84552C0.582087 9.84552 0.38043 9.83316 0.181885 9.81076C1.30445 10.5316 2.63716 10.9519 4.06952 10.9519C8.73514 10.9519 11.2854 7.0874 11.2854 3.73595L11.2769 3.4076C11.7752 3.05219 12.2063 2.60564 12.5455 2.09728Z",
                      fill: "currentColor"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full",
                  href: "https://www.instagram.com/withSaltana/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: "text-gray-500",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z",
                      fill: "currentColor"
                    })
                  })
                })]
              })]
            })
          })]
        })
      })]
    })
  });
};

MarketingHome.suppressFirstRenderFlicker = true;

MarketingHome.getLayout = page => /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
  title: "Home",
  children: page
});

/* harmony default export */ const pages = (MarketingHome);

/***/ }),

/***/ 5085:
/***/ ((module) => {

module.exports = require("@clerk/clerk-react");

/***/ }),

/***/ 9304:
/***/ ((module) => {

module.exports = require("@clerk/nextjs");

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3136:
/***/ ((module) => {

module.exports = require("next/data-client");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 654:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1210:
/***/ ((module) => {

module.exports = require("next/stdlib");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5071:
/***/ ((module) => {

module.exports = require("superjson");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,6481,5223], () => (__webpack_exec__(2661)));
module.exports = __webpack_exports__;

})();