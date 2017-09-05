"use strict";

var React = require('react');

var Header = React.createClass({
    render: function (){
        return (
            <div className="o-layout c-header">
                <div className="o-layout__cell u-fraction--6of12">Logo</div>
                <div className="o-layout__cell u-fraction--6of12"><a href="#">Sluiten</a></div>
            </div>
        );
    }

});

module.exports = Header;