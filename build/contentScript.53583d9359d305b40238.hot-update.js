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


      var altText = generateAltText(data.captions[0].text, data.captions[0].confidence);
      appendAlt(imgTag, altText);
    }
  })["catch"](console.error);
}

function appendAlt(imgTag, altText) {
  imgTag.alt = generateAltText(altText);
  console.log(imgTag);
}

function generateAltText(data, confidence) {
  var ret = '';
  if (confidence > 0.40) ret = "It is" + data;else if (confidence < 0.4 && confidence > 0.2) ret = "It is probability " + data;else if (confidence < 0.4 && confidence > 0.2) ret = "It is likely " + data;else ret = "Image cannot be recogenized.";
}

function recognizedText(imgTag) {
  var url = imgTag.src;
  computerVisionClient.recognizePrintedText(true, url).then(function (result) {
    var _result$regions;

    if (((_result$regions = result.regions) === null || _result$regions === void 0 ? void 0 : _result$regions.length) > 0) {
      var _result$regions$0$lin;

      var _text = "";

      if (((_result$regions$0$lin = result.regions[0].lines) === null || _result$regions$0$lin === void 0 ? void 0 : _result$regions$0$lin.length) > 0) {
        console.log(result.regions[0].lines[0].words);
        result.regions[0].lines[0].words.forEach(function (element) {
          console.log(element);
          _text += element.text + " ";
        }); //get display text

        var altText = generateAltText(_text, 1);
        appendAlt(imgTag, altText);
      }
    }

    return text;
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("676be0e5abc1f5f2bb86")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.53583d9359d305b40238.hot-update.js.map