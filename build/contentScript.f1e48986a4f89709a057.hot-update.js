self["webpackHotUpdatevisuability"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ (() => {

// import ComputerVisionClient from '@azure/cognitiveservices-computervision';
// import ApiKeyCredentials from '@azure/ms-rest-js';
// const computerVisionClient = new ComputerVisionClient(
//   new ApiKeyCredentials({ inHeader: 
//     { 'Ocp-Apim-Subscription-Key': 'b2b0f47751494c8493d87044ce5cecb0' } }),
//       'https://visualbilty.cognitiveservices.azure.com/');
for (var i = 0; i < document.images.length; i++) {
  //   recognizedImage(document.images[i]);
  console.log(imgTag.src);
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
/******/ 	__webpack_require__.h = () => ("09859dc98988656f8bbc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.f1e48986a4f89709a057.hot-update.js.map