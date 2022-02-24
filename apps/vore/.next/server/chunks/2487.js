"use strict";
exports.id = 2487;
exports.ids = [2487];
exports.modules = {

/***/ 2487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var mjml_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9294);
/* harmony import */ var mjml_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mjml_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7838);
/* harmony import */ var _clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)((0,quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__.Queue)("api/_/jobs/send-email", // the path of this API route
async ({
  clerkEmailId,
  type,
  data
}) => {
  let subject;
  let body;
  let fromEmailName = "Saltana Support";

  switch (type) {
    case "user-welcome":
      {
        subject = "We created a Saltana account for you";
        const {
          html,
          errors
        } = (0,mjml_react__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.Mjml, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlHead, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlTitle, {
              children: subject
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlPreview, {
              children: "Saltana is a platform for digital creators"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlBody, {
            width: 500,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlSection, {
              fullWidth: true,
              backgroundColor: "#efefef",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlColumn, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlImage, {
                  src: "https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlSection, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlColumn, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlButton, {
                  padding: "20px",
                  backgroundColor: "#346DB7",
                  href: "https://www.saltana.com/",
                  children: ["Some action for ", data.user.name]
                })
              })
            })]
          })]
        }), {
          validationLevel: "soft"
        });
        body = html;
      }

    case "organization-welcome":
      {
        subject = "You are now a Saltana creator!";
        const {
          html,
          errors
        } = (0,mjml_react__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.Mjml, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlHead, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlTitle, {
              children: subject
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlPreview, {
              children: "Saltana is a platform for digital creators"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlBody, {
            width: 500,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlSection, {
              fullWidth: true,
              backgroundColor: "#efefef",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlColumn, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlImage, {
                  src: "https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlSection, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlColumn, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(mjml_react__WEBPACK_IMPORTED_MODULE_1__.MjmlButton, {
                  padding: "20px",
                  backgroundColor: "#346DB7",
                  href: "https://www.saltana.com/",
                  children: ["Some action for ", data.name]
                })
              })
            })]
          })]
        }), {
          validationLevel: "soft"
        });
        body = html;
      }
  }

  const createEmailArgs = {
    subject,
    body,
    fromEmailName,
    emailAddressId: clerkEmailId
  };
  console.log("sending an email with", createEmailArgs);
  await _clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3__.emails.createEmail(createEmailArgs);
  console.log("email sent");
})));

/***/ })

};
;