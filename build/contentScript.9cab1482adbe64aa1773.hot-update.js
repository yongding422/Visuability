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

for (imgTag in images) {
  //   recognizedImage(document.images[i]);
  console.log(imgTag.src);
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
/******/ 	__webpack_require__.h = () => ("b2eae87153960e11a6f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.9cab1482adbe64aa1773.hot-update.js.map