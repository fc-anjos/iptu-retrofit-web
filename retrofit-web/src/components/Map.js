/// app.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import perimetroRetrofitData from '../data/perimetros_retrofit.json'
import edificacaoData from '../data/edificacao.json'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const INITIAL_VIEW_STATE = {
  longitude: -46.637,
  latitude: -23.55,
  zoom: 15,
  minZoom: 15,
  pitch: 60,
  bearing: 0,
};


function Map({data}) {
  const perimetroRetrofit = new GeoJsonLayer({
    id: 'perimetro',
    data: perimetroRetrofitData,
    pickable: true,
    stroked: true,
    filled: false,
    getLineColor: [255, 0, 0],
    getPointRadius: 100,
    getLineWidth: 5,
    lineWidthScale: 1,
    lineWidthUnits: 'pixels',
  });

  const edificacoes = new GeoJsonLayer({
    id: 'edificacoes',
    data: edificacaoData,
    pickable: false,
    filled: true,
    extruded: true,
    getFillColor: [220, 200, 200],
    getPointRadius: 100,
    getLineWidth: 1,
    lineWidthScale: 1,
    lineWidthUnits: 'pixels',
    getElevation: d => d.properties.ed_altura
  });
  
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[perimetroRetrofit, edificacoes]}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}

export default Map;
