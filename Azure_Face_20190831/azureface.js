// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azureface'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var faceApi_key = "";
var faceApi_url = "";  
var faceApi_result = ""; 

function azureface_settings(input_resourceName, input_key){
  faceApi_url = "https://" + input_resourceName.trim() + ".cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion,gender,age";
  faceApi_key = input_key;
}

function azureface_part(input_part){
  DetectVideo();
  return "test";
}

function azureface_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function DetectVideo() {
  if (faceApi_key == ""||faceApi_url == "") return;    

  context.drawImage(video, 0, 0, video.width, video.height);
  video.style.display = "none";
  canvas.style.display = "block";
  const dataURL = canvas.toDataURL('image/png');
  const blobBin = atob(dataURL.split(',')[1]);
  const mime = dataURL.split(',')[0].split(':')[1].split(';')[0];
  const arr = [];
  for (let i = 0; i < blobBin.length; i++) {
    arr.push(blobBin.charCodeAt(i));
  }
  const u8 = new Uint8Array(arr);
  const imagefile = new Blob([u8], { type: mime });

  // Perform the REST API call.
  $.ajax({
    url: faceApi_url,
    // Request headers.
    beforeSend: function(xhrObj){
    xhrObj.setRequestHeader("Content-Type","application/octet-stream");
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApi_key);     
    },
    type: "POST",
    // Request body.
    data: imagefile,
    processData: false
  })
  .done(function(json) {
    result.innerHTML = "";
    json = eval(json);
    faceApi_result = "";
    for (var i in json) 
    {
      faceApi_result += i + ",";	    
      faceApi_result += json[i]["faceId"]; 
      faceApi_result += ",";
      faceApi_result += json[i]["faceRectangle"]["top"];
      faceApi_result += ",";
      faceApi_result += json[i]["faceRectangle"]["left"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceRectangle"]["width"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceRectangle"]["height"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["gender"]; 
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["age"]; 
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["anger"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["contempt"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["disgust"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["fear"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["happiness"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["neutral"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["sadness"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["surprise"];	   
      faceApi_result += ";";

      context.lineWidth = "3";
      context.strokeStyle = "#00FFFF";
      context.beginPath();
      context.rect(json[i]["faceRectangle"]["left"], json[i]["faceRectangle"]["top"], json[i]["faceRectangle"]["width"], json[i]["faceRectangle"]["height"]);
      context.stroke(); 
      context.lineWidth = "2";
      context.fillStyle = "red";
      context.font = "14px Arial";
      context.fillStyle = "green";
      context.fillText(json[i]["faceAttributes"]["gender"]+", "+json[i]["faceAttributes"]["age"], json[i]["faceRectangle"]["left"],  json[i]["faceRectangle"]["top"]);     
    }
    result.innerHTML = faceApi_result;
    setTimeout(( () => canvas.style.display = "none";video.style.display = "block; ), 2000);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    // Display error message.
    var errorString = (errorThrown === "") ?
    "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    errorString += (jqXHR.responseText === "") ?
    "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
      jQuery.parseJSON(jqXHR.responseText).message :
    jQuery.parseJSON(jqXHR.responseText).error.message;
    result.innerHTML = errorString;
  });
}

window.azureface_settings = azureface_settings;
window.azureface_part = azureface_part;
window.azureface_video = azureface_video;
window.DetectVideo = DetectVideo;

}(window, window.document));