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
}), 'https://visualbilty.cognitiveservices.azure.com/'); //Get all images

var images = window.document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
  var imgTag = images[i];

  if (!imgTag.alt) {
    recognizedImage(images[i]);
  }
}

function recognizedImage(imgTag) {
  var url = imgTag.src;
  computerVisionClient.describeImage(url).then(function (data) {
    var _data$captions;

    if (((_data$captions = data.captions) === null || _data$captions === void 0 ? void 0 : _data$captions.length) > 0) {
      if (data.captions[0].text === 'text') {
        //Need to call OCR API to recognize the text
        recognizedText(imgTag);
      } //get display text


      console.log(data.captions[0].confidence);
      var altText = generateAltText(data.captions[0].text, data.captions[0].confidence);
      appendAlt(imgTag, altText);
    }
  })["catch"](console.error);
}

function appendAlt(imgTag, altText) {
  imgTag.alt = generateAltText(altText);
}

function generateAltText(data, confidence) {
  var ret = '';
  if (confidence >= 0.40) ret = data;else if (confidence < 0.4 && confidence >= 0.2) ret = "It probability is " + data;else if (confidence < 0.2 && confidence >= 0.1) ret = "It likely is " + data;else {
    debugger;
    ret = "Image cannot be recogenized.";
  }
  return ret;
}

function recognizedText(imgTag) {
  var url = imgTag.src;
  computerVisionClient.recognizePrintedText(true, url).then(function (result) {
    var _result$regions;

    if (((_result$regions = result.regions) === null || _result$regions === void 0 ? void 0 : _result$regions.length) > 0) {
      var _result$regions$0$lin;

      var text = "";

      if (((_result$regions$0$lin = result.regions[0].lines) === null || _result$regions$0$lin === void 0 ? void 0 : _result$regions$0$lin.length) > 0) {
        console.log(result.regions[0].lines[0].words);
        result.regions[0].lines[0].words.forEach(function (element) {
          console.log(element);
          text += element.text + " ";
        }); //get display text

        var altText = generateAltText(text, 1);
        appendAlt(imgTag, altText);
      }
    }
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3c2cd1f542ef63258ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.2851e9823149e36f2b70.hot-update.js.map