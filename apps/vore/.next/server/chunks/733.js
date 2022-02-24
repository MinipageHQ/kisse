"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = isBlockedPage;
__webpack_unused_export__ = cleanAmpPath;
__webpack_unused_export__ = resultFromChunks;
__webpack_unused_export__ = resultToChunks;
__webpack_unused_export__ = __webpack_unused_export__ = exports.sw = void 0;
var _constants = __webpack_require__(6044);
function isBlockedPage(pathname) {
    return _constants.BLOCKED_PAGES.includes(pathname);
}
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
function resultFromChunks(chunks) {
    return ({ next , complete  })=>{
        chunks.forEach(next);
        complete();
        return ()=>{
        };
    };
}
function resultToChunks(result) {
    return new Promise((resolve, reject)=>{
        const chunks = [];
        result({
            next: (chunk)=>{
                chunks.push(chunk);
            },
            error: (error)=>reject(error)
            ,
            complete: ()=>resolve(chunks)
        });
    });
}
const isInternalBlitzMonorepoDevelopment = __dirname.match(/[\\/]packages[\\/]next[\\/]dist[\\/]server$/);
__webpack_unused_export__ = isInternalBlitzMonorepoDevelopment;
const fixNodeFileTrace = ()=>{
    const path = __webpack_require__(5622);
    path.resolve('.blitz.config.compiled.js');
    path.resolve('.next/server/blitz-db.js');
    path.resolve('.next/serverless/blitz-db.js');
};
__webpack_unused_export__ = fixNodeFileTrace;
const withFixNodeFileTrace = (fn)=>{
    fixNodeFileTrace();
    return fn;
};
exports.sw = withFixNodeFileTrace;

//# sourceMappingURL=utils.js.map

/***/ })

};
;