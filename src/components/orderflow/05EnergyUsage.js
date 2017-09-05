"use strict";

var React = require('react');

var EnergyUsage = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Weet je je energieverbruik?</h2>

                <a href="">
                    Aanbod op maat
                    Ja dat weet ik
                </a>

                <a href="">
                    Schatting op basis van adres
                    Nee, dat weet ik niet
                </a>
            </div>
        );
    }
});

module.exports = EnergyUsage;