var React = require('react');

var WeatherMessage = (props) =>{
  var location = props.location;
  var temp = props.temp;
  return (
    <div>
      <h1 className="text-center"> The current Temperature in {location} is {temp}</h1>
    </div>
  );
};

module.exports = WeatherMessage;
