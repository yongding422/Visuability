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
var images = window.document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
  //   recognizedImage(document.images[i]);
  console.log(images[i]);
} // function recognizedImage(imgTag) {
//     const url = imgTag.src;
//     computerVisionClient.describeImage(url)
//       .then(data => appendAlt(imgTag, data))
//       .catch(console.error);
// }
// function appendAlt(imgTag, result) {
//   imgTag.alt = result.desription.captions[0];
//   console.log(imgTag.alt);
//   //filter for accuracy
// //   let accurateDesc = result.description.captions.filter((val, index) => {
// //     return 
// //   })
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("824c4a7ccd7ca689b6d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.800e8b1f25553137be82.hot-update.js.map