"use strict";
self["webpackHotUpdatevisuability"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _azure_cognitiveservices_computervision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/cognitiveservices-computervision */ "./node_modules/@azure/cognitiveservices-computervision/esm/computerVisionClient.js");
/* harmony import */ var _azure_ms_rest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/ms-rest-js */ "./node_modules/@azure/ms-rest-js/es/lib/credentials/apiKeyCredentials.js");


var computerVisionClient = new _azure_cognitiveservices_computervision__WEBPACK_IMPORTED_MODULE_0__.ComputerVisionClient(new _azure_ms_rest_js__WEBPACK_IMPORTED_MODULE_1__.ApiKeyCredentials({
  inHeader: {
    'Ocp-Apim-Subscription-Key': 'b2b0f47751494c8493d87044ce5cecb0'
  }
}), 'https://visualbilty.cognitiveservices.azure.com/');
var images = window.document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
  console.log(images[i]);
  recognizedImage(images[i]);
}

function recognizedImage(imgTag) {
  var url = imgTag.src;
  computerVisionClient.describeImage(url).then(function (data) {
    return appendAlt(imgTag, data);
  })["catch"](console.error);
}

function appendAlt(imgTag, result) {
  imgTag.alt = result.desription.captions[0];
  console.log(imgTag.alt); //filter for accuracy
  //   let accurateDesc = result.description.captions.filter((val, index) => {
  //     return 
  //   })
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("214aabd911ae34fde0e8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.9525b1654fcd1d27abb1.hot-update.js.map