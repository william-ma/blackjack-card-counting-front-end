import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
    constructor(props) {
        super(props)
    }

    // the benefits of using TWO layers is... the UI can be display "correctly"...
    // and we can "overlay" the betting chip on top..., instead of "replacing" the image
    // the proper way to do it...
    // may need a dictionary/key...
    // to support the intersections is fucking crazy... WTF
    // have to support "corners" and "edges".
    // corner edge corner edge corner edge
    // edge number edge number edge number
    // i can make it simplier by using one zero... two...
    // each intersection... would be... contain the numbers it touches?
    // status bar? name, money etc, maybe play? and i'll just generate some random number/roll()...
    // maybe the table contains numbers... and... the other stuff...
    // the sections and all that?
    // names for the column buttons?
    // row buttons?
    // half buttons?
    // zero buttons?
    // maybe i could create some interactivity with the buttons... how much u want to bet etc??? that'll be funny...

    // https://www.htmlgoodies.com/css/creating-layers-on-your-web-pages-with-divs/
}