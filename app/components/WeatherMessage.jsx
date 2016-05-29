var React = require('react');

var WeatherMessage = (props) =>{
  var location = props.location;
  var temp = props.temp;
  return (
    <div>
      <h1> The current Temperature in {location} is {temp}</h1>
    </div>
  );
};

module.exports = WeatherMessage;
