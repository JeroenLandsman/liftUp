"use strict";

var React = require('react');

var GasOffer = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Aanbod gas</h2>

                <p>Dit aanbod is berekend met een verbruik van 1393 m³. Verzekerd van een warm huis met de mogelijkheid om te verduurzamen.</p>
            

                <div>
                    <div>
                        Gas
                    </div>
                    <div>
                        <div>
                            <p>
                                Gewoon aardgas. Verzekerd van een warm huis de hele winter door.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 80,- /mnd
                            </div>
                            <div>
                                &euro; 960,- per jaar
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        Gecompenseerd gas
                        Nog groener
                    </div>
                    <div>
                        <div>
                            <p>
                                Compensatie voor het gebruik van gewoon gas, de mogelijkheid te verduurzamen.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 80,60 /mnd
                            </div>
                            <div>
                                &euro; 967,20 per jaar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = GasOffer;