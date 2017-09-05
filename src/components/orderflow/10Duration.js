"use strict";

var React = require('react');

var Duration = React.createClass({
    render: function (){
        return (
            <div>
                <h1>Uw energie</h1>
                <h2>Welke looptijd wil je?</h2>

                <div>
                    <div>
                        Flexibel
                    </div>
                    <div>
                        <div>
                            <p>
                                Een variabele prijs en iedere maand opzegbaar.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 111,40 /mnd
                            </div>
                            <div>
                                &euro; 1336,80 per jaar
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        1 jaar
                    </div>
                    <div>
                        <div>
                            <p>
                                Een vaste periode een vaste prijs.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 108,40 /mnd
                            </div>
                            <div>
                                &euro; 1312,30 per jaar
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        3 jaar
                    </div>
                    <div>
                        <div>
                            <p>
                                Een vaste periode een vaste prijs.
                            </p>
                        </div>
                        <div>
                            <div>
                                &euro; 105,40 /mnd
                            </div>
                            <div>
                                &euro; 1092,12 per jaar
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

});

module.exports = Duration;