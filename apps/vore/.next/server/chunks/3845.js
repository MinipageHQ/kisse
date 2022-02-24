"use strict";
exports.id = 3845;
exports.ids = [3845];
exports.modules = {

/***/ 6398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authenticateUser": () => (/* binding */ authenticateUser),
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "next/data-client"
var data_client_ = __webpack_require__(3136);
// EXTERNAL MODULE: external "next/stdlib"
var stdlib_ = __webpack_require__(1210);
// EXTERNAL MODULE: external "next/stdlib-server"
var stdlib_server_ = __webpack_require__(9986);
// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__(3659);
// EXTERNAL MODULE: external "hibp"
var external_hibp_ = __webpack_require__(2710);
;// CONCATENATED MODULE: ./app/auth/utils/checkPassword.ts


const unsafeCheckPwnedPassword = password => {
  return (0,external_hibp_.pwnedPassword)(password);
};

const isPasswordSafe = async password => {
  try {
    const numberOfPwned = await unsafeCheckPwnedPassword(password);
    return !numberOfPwned;
  } catch (error) {
    return true;
  }
};
// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__(6602);
;// CONCATENATED MODULE: ./app/auth/mutations/login.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const authenticateUser = async (rawEmail, rawPassword) => {
  const {
    email,
    password
  } = validations/* Login.parse */.m3.parse({
    email: rawEmail,
    password: rawPassword
  });

  if ((await isPasswordSafe(password)) === false) {
    throw new stdlib_.AuthenticationError("Your password was found on a list of passwords that are considered unsafe. You'll need to change your password by resetting it.");
  } // const emailSafe = safeEmail(email)


  const user = await db.default.user.findFirst({
    where: {
      emails: {
        some: {
          email
        }
      }
    },
    select: {
      id: true,
      hashedPassword: true,
      roles: true,
      prefersEmail: {
        select: {
          id: true,
          email: true,
          emailSafe: true
        }
      },
      emails: {
        select: {
          id: true,
          email: true,
          emailSafe: true
        }
      },
      memberships: {
        select: {
          role: true,
          organization: {
            select: {
              id: true,
              platformFeatures: true
            }
          }
        }
      }
    }
  });

  if (!user) {
    throw new stdlib_.AuthenticationError();
  }

  const updates = [];
  const result = await stdlib_server_.SecurePassword.verify(user.hashedPassword, password);

  if (result === stdlib_server_.SecurePassword.VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await stdlib_server_.SecurePassword.hash(password);
    updates.push(db.default.user.update({
      where: {
        id: user.id
      },
      data: {
        hashedPassword: improvedHash
      }
    }));
  }

  if (user.prefersEmail === null && user.emails[0]) {
    updates.push(db.default.user.update({
      where: {
        id: user.id
      },
      data: {
        prefersEmailId: user.emails[0].id
      }
    }));
  }

  const {
    hashedPassword
  } = user,
        rest = _objectWithoutProperties(user, ["hashedPassword"]);

  return rest;
};
/* harmony default export */ const login = ((0,data_client_.buildRpcResolver)(stdlib_server_.resolver.pipe(stdlib_server_.resolver.zod(validations/* Login */.m3), async ({
  email,
  password
}, ctx) => {
  var _user$memberships$, _user$memberships$2;

  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password);
  const roles = [...user.roles];
  const defaultOrganization = user.memberships.length > 0 ? _objectSpread(_objectSpread({}, (_user$memberships$ = user.memberships[0]) === null || _user$memberships$ === void 0 ? void 0 : _user$memberships$.organization), {}, {
    role: (_user$memberships$2 = user.memberships[0]) === null || _user$memberships$2 === void 0 ? void 0 : _user$memberships$2.role
  }) : null;

  if (defaultOrganization && defaultOrganization.role) {
    roles.push(defaultOrganization.role);
  }

  await ctx.session.$create({
    userId: user.id,
    roles,
    platformFeatures: defaultOrganization === null || defaultOrganization === void 0 ? void 0 : defaultOrganization.platformFeatures,
    defaultOrgId: defaultOrganization ? defaultOrganization.id : undefined
  });
  return user;
}), {
  "resolverName": "login",
  "resolverType": "mutation",
  "routePath": "/api/rpc/login"
}));

/***/ })

};
;