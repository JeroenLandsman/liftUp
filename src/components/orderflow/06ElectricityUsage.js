"use strict";

var React = require('react');

var ElectricityUsage = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Wat is je stroomverbruik?</h2>

                <form>
                    <label for="monthlyUsage">Verbruik per maand</label>
                    <input type="text" id="monthlyUsage" name="monthlyUsage" />

                    <input type="checkbox" name="doubleMeter" value="doubleMeter" />Ik heb een dubbele meter <br />
                    <input type="checkbox" name="sunPanels" value="sunPanels" />Ik heb zonnepanelen <br />

                    <input type="submit" value="Volgende stap" />
                </form>
            </div>
        );
    }
});

module.exports = ElectricityUsage;