"use strict";

var React = require('react');
var Home = require('./components/homePage');

var Zipcode = require('./components/orderFlow/01Zipcode');
var EnergyType = require('./components/orderFlow/04EnergyType');
var EnergyUsage = require('./components/orderFlow/05EnergyUsage');
var ElectricityUsage = require('./components/orderFlow/06ElectricityUsage');
var ElectricityUsageEstimation = require('./components/orderFlow/06ElectricityUsageEstimation');
var GasUsage = require('./components/orderFlow/07GasUsage');
var ElectricityOffer = require('./components/orderFlow/08ElectricityOffer');
var GasOffer = require('./components/orderFlow/09GasOffer');
var Duration = require('./components/orderFlow/10Duration');
var Upsell = require('./components/orderFlow/11Upsell');
var PersonalDetails = require('./components/orderFlow/12PersonalDetails');
var PaymentDetails = require('./components/orderFlow/15PaymentDetails');
var Connecting = require('./components/connectingPage');

var Header = require('./components/common/Header');
var StepNavigation = require('./components/common/StepNavigation');


var App = React.createClass({
    render: function(){
        var Child;

        switch(this.props.route) {
            case '01Zipcode' : Child = Zipcode; break;
            case '04EnergyType' : Child = EnergyType; break;
            case '05EnergyUsage' : Child = EnergyUsage; break;
            case '06ElectricityUsage' : Child = ElectricityUsage; break;
            case '06ElectricityUsageEstimation' : Child = ElectricityUsageEstimation; break;
            case '07GasUsage' : Child = GasUsage; break;
            case '08ElectricityOffer' : Child = ElectricityOffer; break;  
            case '09GasOffer' : Child = GasOffer; break;
            case '10Duration' : Child = Duration; break;
            case '11Upsell' : Child = Upsell; break;
            case '12PersonalDetails' : Child = PersonalDetails; break;  
            case '15PaymentDetails' : Child = PaymentDetails; break;  
            case 'connecting' : Child = Connecting; break;
            default: Child = Home;
        }

        return (
            <div>
                <Header/>
                <StepNavigation/>
                <Child/>
            </div>
        );
    }
});

function render(){
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();