import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BackboneReactComponent} from './BackboneReactComponent';
import LeafletViewModel from '../models/LeafletViewModel';

// Note: d3 version 4 is not working with TypeScript.
// Reverted to version 3.
import * as d3 from 'd3';

// We have type definitions for Leaflet but not for the Leaflet plugins.
// Import manually here and declar L to avoid TypeScript errors on L.
// http://stackoverflow.com/questions/18083389/ignore-typescript-errors-property-does-not-exist-on-value-of-type
import '../../../node_modules/leaflet/dist/leaflet.js';
import '../../../node_modules/leaflet-providers/leaflet-providers.js';
import '../../../lib/L.D3SvgOverlay.min.js';
declare var L:any;

// Also import CSS.
// Remember to import the Leaflet CSS; otherwise, the tiles will be scrambled.
import '../../../node_modules/leaflet/dist/leaflet.css';

export class LeafletView extends BackboneReactComponent<LeafletViewModel, {}> {

    private map:any = null;
    private projection:any = null;
    private mainGroup:d3.Selection<any>;

    /**
     * When the div is rendered into the DOM.
     */
    componentDidMount() {

        this.props.model.on('change', this.renderD3, this);

        this.map = L.map('leaflet-view', {
            minZoom: 2,
            maxZoom: 20,
            layers: [
                // The regular, light map.
                // L.tileLayer(
                //     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                //     {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
                
                // The dark map
                L.tileLayer.provider('CartoDB.DarkMatter')
            ],
            attributionControl: false,
            center: [45.67,-121.12], 
            zoom: 8
        });

        this.map.on('click', this.onMapClick);

        // Initialize the SVG layer
        //this.map['_initPathRoot'](); //replace with: https://groups.google.com/forum/#!topic/leaflet-js/bzM9ssegitU
        L.svg().addTo(this.map);

        // Pick up the SVG from the map object
        var svg = d3.select('.leaflet.map').select('svg');
        this.mainGroup = svg.append('g');

        this.renderD3();
    }

    componentWillUnmount() {
        this.props.model.off('change', this.renderD3, this);

        this.map.off('click', this.onMapClick);
        this.map = null;
    }

    render() {
        return <div id="leaflet-view" className="leaflet map view" />
    }

    renderD3() {

        this.mainGroup.append('circle')
            .attr('r', 100)
            .attr('cx', 10)
            .attr('cy', 10)
            .style('fill', 'green');
    }

    onMapClick() {
        console.log('Map click!');
    }
}