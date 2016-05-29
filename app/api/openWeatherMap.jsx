var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2cd4710752253e7a688aa4938b1190f6&units=metric';

// 2cd4710752253e7a688aa4938b1190f6
module.exports = {
  getTemp: function (location){
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (res){
        debugger;
        if(res.data.cod && res.data.messsage){
          throw new Error(res.data.messsage);
        } else{
          return res.data.main.temp;
        }
      } , function(res) {
        throw new Error(res.data.message);
      });
  }
}
