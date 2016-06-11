var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center">Examples!</h1>
      <p>These are a few example locations!!</p>
      <ol>
        <li>
          <Link to='/?location=Munich'>Munich</Link>
        </li>
        <li>
          <Link to='/?location=Barcelona'>Barcelona</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
