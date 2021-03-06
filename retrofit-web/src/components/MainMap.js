/// app.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { PathStyleExtension } from '@deck.gl/extensions';
import perimetroRetrofitData from '../data/perimetros_retrofit.json';
import edificacaoData from '../data/edificacao.json';

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

function MainMap() {
  const perimetroRetrofit = new GeoJsonLayer({
    id: 'perimetro',
    data: perimetroRetrofitData,
    pickable: true,
    stroked: true,
    filled: false,
    getLineColor: [50, 100, 220],
    getPointRadius: 100,
    getLineWidth: 5,
    lineWidthScale: 1,
    lineWidthUnits: 'pixels',
    getDashArray: [3, 2],
    dashJustified: true,
    dashGapPickable: true,
    extensions: [new PathStyleExtension({ dash: true })],
  });

  const edificacoes = new GeoJsonLayer({
    id: 'edificacoes',
    data: edificacaoData,
    pickable: false,
    filled: true,
    extruded: true,
    getFillColor: [180, 200, 220],
    getPointRadius: 100,
    getLineWidth: 1,
    lineWidthScale: 1,
    lineWidthUnits: 'pixels',
    getElevation: (d) => d.properties.ed_altura,
  });

  return (
    <div style={{ height: '75vh', width: '100%', position: 'relative' }} >
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[perimetroRetrofit, edificacoes]}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </div>
  );
}

export default MainMap;
