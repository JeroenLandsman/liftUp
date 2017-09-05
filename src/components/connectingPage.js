"use strict";

var React = require('react');

var Connecting = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Gefeliciteerd</h1>
                <h2>We sluiten je energie nu aan bij Eneco!</h2>

                <ul>
                    <li>EcoStroom 3 jaar</li>
                    <li>EcoGas 3 jaar</li>
                </ul>
            </div>
        );
    }

});

module.exports = Connecting;