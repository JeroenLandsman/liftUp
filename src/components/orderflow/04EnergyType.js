"use strict";

var React = require('react');

var EnergyType = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Welke energie wil je?</h2>

                <a href="">
                    Voordelig samen
                    Stroom &amp; Gas
                </a>

                <a href="">
                    Alleen
                    Stroom
                </a>

                <a href="">
                    Alleen
                    Gas
                </a>
            </div>
        );
    }
});

module.exports = EnergyType;