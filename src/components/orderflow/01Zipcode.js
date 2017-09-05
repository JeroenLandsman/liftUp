"use strict";

var React = require('react');

var Zipcode = React.createClass({
    render: function (){
        return (
            <div>
                <h4>Uw energie</h4>
                <h1>Waar woon je?</h1>

                <form>
                    <div className="o-layout">
                        <div className="o-layout__cell">
                            <div className="o-form__field">
                                <label className="c-label" htmlFor="zipcode">Je postcode</label>
                                <input className="c-input-text" type="text" id="zipcode" name="zipcode" />
                            </div>
                        </div>
                        <div className="o-layout__cell">
                            <div className="o-form__field">
                                <label className="c-label" htmlFor="housenr">Huisnummer</label>
                                <input className="c-input-text" type="text" id="housenr" name="housenr" />
                            </div>
                        </div>
                        <div className="o-layout__cell">
                            <div className="o-form__field">
                                <label className="c-label" htmlFor="housenrAddition">Toev.</label>
                                <input className="c-input-text" type="text" id="housenrAddition" name="housenrAddition" placeholder="A" />
                            </div>
                        </div>
                    </div>
                    <div className="o-layout">
                        <div className="o-layout__cell">
                            <div className="o-form__field">
                                <button className="c-button" type="submit">Volgende stap</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Zipcode;