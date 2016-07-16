var React = require('react');

// React component to write location to search for
var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.locationInput.value;
    if(location.length >0){
      this.refs.locationInput.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="locationInput" placeholder="Search Weather by City"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
