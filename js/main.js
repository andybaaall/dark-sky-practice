$(document).ready(function(){
  // console.log('hello world');

  let latitude;
  let longitude;

  // config file request
  let darkSkyKey;
  let googleKey;

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      darkSkyKey = keys['darkSkyKey'];
      googleKey = keys['googleKey'];
    },
    error: function(){
      console.log('can\'t find config.json');
    }
  });

  // Dark Sky API request
  getWeatherData = () => {
    $.ajax({
      url: `https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`,
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
      },
      error: function() {
        console.log('something bad happened');
      }
    })
  }

  // places autocomplete request
  getLatLng = () => {
    
  }

  // let's use the google places autocomplete API!
  // let's maybe just grab the code off the class github repo ?
  // let's use it to pass co-ordinates into the ajax request we're sending to dark-sky


});
