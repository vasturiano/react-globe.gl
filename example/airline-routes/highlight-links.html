<head>
  <style> body { margin: 0; } </style>

  <script type="importmap">{ "imports": {
    "react": "https://esm.sh/react",
    "react-dom": "https://esm.sh/react-dom/client"
  }}</script>

<!--  <script type="module">import * as React from 'react'; window.React = React;</script>-->
<!--  <script src="../../dist/react-globe.gl.js" defer></script>-->
</head>

<body>
<div id="globeViz"></div>

<script src="//unpkg.com/@babel/standalone"></script>
<script type="text/jsx" data-type="module">
  import Globe from 'https://esm.sh/react-globe.gl?external=react';
  import React, { useState, useEffect, useRef } from 'react';
  import { createRoot } from 'react-dom';
  import { csvParseRows } from 'https://esm.sh/d3-dsv';
  import indexBy from 'https://esm.sh/index-array-by';

  const COUNTRY = 'Portugal';
  const MAP_CENTER = { lat: 37.6, lng: -16.6, altitude: 0.4 };
  const OPACITY = 0.3;

  const airportParse = ([airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source]) => ({ airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source });
  const routeParse = ([airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment]) => ({ airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment});

  const World = () => {
    const globeEl = useRef();
    const [airports, setAirports] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [hoverArc, setHoverArc] = useState();

    useEffect(() => {
      // load data
      Promise.all([
        fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat').then(res => res.text())
          .then(d => csvParseRows(d, airportParse)),
        fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat').then(res => res.text())
          .then(d => csvParseRows(d, routeParse))
      ]).then(([airports, routes]) => {

        const filteredAirports = airports.filter(d => d.country === COUNTRY);
        const byIata = indexBy(filteredAirports, 'iata', false);

        const filteredRoutes = routes
          .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown airports
          .filter(d => d.stops === '0') // non-stop flights only
          .map(d => Object.assign(d, {
            srcAirport: byIata[d.srcIata],
            dstAirport: byIata[d.dstIata]
          }))
          .filter(d => d.srcAirport.country === COUNTRY && d.dstAirport.country === COUNTRY); // domestic routes within country

        setAirports(filteredAirports);
        setRoutes(filteredRoutes);

        globeEl.current.pointOfView(MAP_CENTER, 4000);
      });
    }, []);

    return <Globe
      ref={globeEl}
      globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"

      arcsData={routes}
      arcLabel={d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
      arcStartLat={d => +d.srcAirport.lat}
      arcStartLng={d => +d.srcAirport.lng}
      arcEndLat={d => +d.dstAirport.lat}
      arcEndLng={d => +d.dstAirport.lng}
      arcDashLength={0.4}
      arcDashGap={0.2}
      arcDashAnimateTime={1500}
      arcsTransitionDuration={0}
      arcColor={d => {
        const op = !hoverArc ? OPACITY : d === hoverArc ? 0.9 : OPACITY / 4;
        return [`rgba(0, 255, 0, ${op})`, `rgba(255, 0, 0, ${op})`];
      }}
      onArcHover={setHoverArc}

      pointsData={airports}
      pointColor={() => 'orange'}
      pointAltitude={0}
      pointRadius={0.04}
      pointsMerge={true}
    />;
  };

  createRoot(document.getElementById('globeViz'))
    .render(<World />);
</script>
</body>