"use strict";

var React = require('react');

var StepNavigation = React.createClass({
    render: function (){
        return (
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#01Zipcode">01: Zipcode</a></li>
                    <li><a href="/#04EnergyType">04: EnergyType</a></li>
                    <li><a href="/#05EnergyUsage">05: EnergyUsage</a></li>
                    <li><a href="/#06ElectricityUsage">06: ElectricityUsage</a></li>
                    <li><a href="/#06ElectricityUsageEstimation">06: ElectricityUsageEstimation</a></li>
                    <li><a href="/#07GasUsage">07: GasUsage</a></li>
                    <li><a href="/#08ElectricityOffer">08: ElectricityOffer</a></li>
                    <li><a href="/#09GasOffer">09: GasOffer</a></li>
                    <li><a href="/#10Duration">10: Duration</a></li>
                    <li><a href="/#11Upsell">11: Upsell</a></li>
                    <li><a href="/#12PersonalDetails">12: PersonalDetails</a></li>
                    <li><a href="/#15PaymentDetails">15: PaymentDetails</a></li>
                    <li><a href="/#connecting">Connecting</a></li>
                </ul>
            </nav>
        );
    }

});

module.exports = StepNavigation;