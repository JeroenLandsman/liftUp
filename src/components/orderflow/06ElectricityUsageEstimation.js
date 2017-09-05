"use strict";

var React = require('react');

var ElectricityUsageEstimation = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Hoe woon je?</h2>

                <form>
                    <label for="houseType">Soort huis</label>
                    <select>
                        <option value="appartement">Appartement</option>
                    </select>

                    <label for="yearOfConstruction">Bouwjaar</label>
                    <select>
                        <option value="2011 of later">2011 of later</option>
                    </select>

                    <label for="numberOfPersons">Aantal personen</label>
                    <select>
                        <option value="2 personen">2 personen</option>
                    </select>
                    
                    <input type="checkbox" name="doubleMeter" value="doubleMeter" />Ik heb een dubbele meter <br />
                    <input type="checkbox" name="sunPanels" value="sunPanels" />Ik heb zonnepanelen <br />

                    <p>We schatten je verbruik aan stroom op 2366 k@h en gs op 773 m3</p>

                    <input type="submit" value="Berken aanbod" />
                </form>
            </div>
        );
    }

});

module.exports = ElectricityUsageEstimation;