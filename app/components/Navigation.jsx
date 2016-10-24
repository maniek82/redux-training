var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Boilerplate Final
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Example</IndexLink>
          </li>
          
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.mariuszwojewodka.pl" target="_blank">Mariusz</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
