/// app.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import {ShapefileLoader} from '@loaders.gl/shapefile';
import {load} from '@loaders.gl/core';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
console.log(MAPBOX_ACCESS_TOKEN);
console.log(process.env);



// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -46.63,
  latitude: -23.55,
  zoom: 12,
  pitch: 0,
  bearing: 0
};


function App({data}) {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  const layer = new Tile3DLayer({
    id: 'tile-3d-layer',
    // Tileset entry point: Indexed 3D layer file url
    data: './data/perimetro.shp',
    loader: ShapefileLoader,
    onTilesetLoad: this._onTilesetLoad.bind(this)
  });

  
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}

export default App;
