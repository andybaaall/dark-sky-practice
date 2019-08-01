$(document).ready(function(){
  // console.log('hello world');

  // config file request
  let darkSkyKey;

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      darkSkyKey = keys['darkSkyKey'];
      getWeatherData();
    },
    error: function(){
      console.log('can\'t find config.json');
    }
  });

  // API request
  getWeatherData = () => {
    $.ajax({
      url: `https://api.darksky.net/forecast/${darkSkyKey}/-41.2865,174.7762`,
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

  // let's use the google places autocomplete API!
  // let's maybe just grab the code off the class github repo ?
  // let's use it to pass co-ordinates into the ajax request we're sending to dark-sky


});
