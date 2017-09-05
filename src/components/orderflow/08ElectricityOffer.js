"use strict";

var React = require('react');

var ElectricityOffer = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Aanbod stroom</h2>

                <p>Dit aanbod is berekend met een verbruik van 2946 kWh. Onze stroom is altijd groen maar jij hebt de keuze waarvandaan.</p>
            

                <div>
                    <div>
                        Groene stroom uit Europa
                    </div>
                    <div>
                        <div>
                            <p>
                                Voornamelijk gewonnen uit wind en een beetje zon uit Europa. Wij noemen dit EcoStroom.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 30,- /mnd
                            </div>
                            <div>
                                &euro; 360,- per jaar
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        Groene stroom uit Nederland
                        Nog groener
                    </div>
                    <div>
                        <div>
                            <p>
                                Lokaal efficiënter opgewekte stroom uit wind. Wij noemen dit HollandseWind.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 30,80 /mnd
                            </div>
                            <div>
                                &euro; 369,60- per jaar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = ElectricityOffer;