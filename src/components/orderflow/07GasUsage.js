"use strict";

var React = require('react');

var GasUsage = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Wat is je gasverbruik?</h2>

                <form>
                    <label for="monthlyUsage">Verbruik per maand</label>
                    <input type="text" id="monthlyUsage" name="monthlyUsage" />

                    <input type="submit" value="Volgende stap" />
                </form>
            </div>
        );
    }

});

module.exports = GasUsage;