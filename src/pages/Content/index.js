
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
                    recognizedText(url);
                }
                appendAlt(imgTag, data);
            }
        })
      .catch(console.error);
}

function appendAlt(imgTag, altText) {

  console.log(result);

  imgTag.alt = generateAltText(altText);

  console.log(imgTag.alt);

//   filter for accuracy
//   let accurateDesc = result.description.captions.filter((val, index) => {
//     return 
//   })
}

function generateAltText(data)
{
    return "";
}

function recognizedText(url)
{
  //Call OCR API
}