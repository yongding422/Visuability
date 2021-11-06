import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: 
    { 'Ocp-Apim-Subscription-Key': 'b2b0f47751494c8493d87044ce5cecb0' } }),
      'https://visualbilty.cognitiveservices.azure.com/');

//Get all images
let images = window.document.querySelectorAll("img");

for(let i = 0; i < images.length; i++){
    
    var imgTag = images[i];

    if(!imgTag.alt)
    {
        recognizedImage(images[i]);
    }
    
}

function recognizedImage(imgTag) {

    const url = imgTag.src;

    computerVisionClient.describeImage(url)
      .then(data => {
            if(data.captions?.length > 0)
            {
                if(data.captions[0].text === 'text')
                {
                    //Need to call OCR API to recognize the text
                    recognizedText(imgTag);
                }
                else
                {
                  //get display text
                  let altText = generateAltText(data.captions[0].text, data.captions[0].confidence);

                  appendAlt(imgTag, altText);
                }
            }
        })
      .catch(console.error);
}

function appendAlt(imgTag, altText) {
  imgTag.alt = altText;
}


function generateAltText(data, confidence){
  let ret = '';
  if(confidence >= 0.40)
    ret = data;
  else if(confidence >= 0.2 && confidence < 0.4)
    ret = "It probally is " + data;
  else if(confidence >= 0.1 && confidence < 0.2)
    ret = "It likely is " + data;
  else
    ret = "Image cannbe be recoginized.";

  return ret;
}

function recognizedText(imgTag)
{
  var url = imgTag.src;
  computerVisionClient.recognizePrintedText(true, url, {language:"en"})
  .then((result) => {
    if(result.regions?.length > 0)
    {
      let text = "";
      if(result.regions[0].lines?.length > 0)
      {
        result.regions[0].lines[0].words.forEach(element => {
          text += element.text + " ";
        });

        //get display text
        let altText = generateAltText(text, 1);

        appendAlt(imgTag, altText);
      }
    }
  });
}