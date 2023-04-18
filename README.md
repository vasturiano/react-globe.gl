react-globe.gl
==============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

React bindings for the [globe.gl](https://github.com/vasturiano/globe.gl) UI component.

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/world-population/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/world-population/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/airline-routes/us-international-outbound.html"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/airline-routes/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/countries-population/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/countries-population/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/submarine-cables/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/submarine-cables/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/hexed-polygons/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/hexed-polygons/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/world-cities/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/world-cities/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/satellites/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/satellites/preview.png"></a>
   <a href="//vasturiano.github.io/react-globe.gl/example/moon-landing-sites/"><img width="48%" src="https://vasturiano.github.io/react-globe.gl/example/moon-landing-sites/preview.png"></a>
</p>

A React component to represent data visualization layers on a 3-dimensional globe in a spherical projection, using [ThreeJS](https://github.com/mrdoob/three.js/)/WebGL for 3D rendering.

#### Check out the examples:
* [Basic](https://vasturiano.github.io/react-globe.gl/example/basic/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/basic/index.html))
* [Arc Links](https://vasturiano.github.io/react-globe.gl/example/random-arcs/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/random-arcs/index.html))
* [Highlight links](https://vasturiano.github.io/react-globe.gl/example/airline-routes/highlight-links.html) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/airline-routes/highlight-links.html))
* [Choropleth](https://vasturiano.github.io/react-globe.gl/example/choropleth-countries/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/choropleth-countries/index.html))
* [Elevated Polygons](https://vasturiano.github.io/react-globe.gl/example/countries-population/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/countries-population/index.html))
* [Hollow Globe](https://vasturiano.github.io/react-globe.gl/example/hollow-globe/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/hollow-globe/index.html))
* [Path Lines](https://vasturiano.github.io/react-globe.gl/example/random-paths/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/random-paths/index.html))
* [Map Labels](https://vasturiano.github.io/react-globe.gl/example/world-cities/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/world-cities/index.html))
* [HTML Markers](https://vasturiano.github.io/react-globe.gl/example/html-markers/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/html-markers/index.html))
* [Hexed Country Polygons](https://vasturiano.github.io/react-globe.gl/example/hexed-polygons/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/hexed-polygons/index.html))
* [Tiles](https://vasturiano.github.io/react-globe.gl/example/tiles/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/tiles/index.html))
* [Ripple Rings](https://vasturiano.github.io/react-globe.gl/example/random-rings/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/random-rings/index.html))
* [Emit Arcs on Click](https://vasturiano.github.io/react-globe.gl/example/emit-arcs-on-click/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/emit-arcs-on-click/index.html))
* [Clouds](https://vasturiano.github.io/react-globe.gl/example/clouds/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/clouds/index.html))
* [Solar Terminator](https://vasturiano.github.io/react-globe.gl/example/solar-terminator/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/solar-terminator/index.html))
* [Custom Globe Styling](https://vasturiano.github.io/react-globe.gl/example/custom-globe-styling/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/custom-globe-styling/index.html))
* [Custom Layer](https://vasturiano.github.io/react-globe.gl/example/custom-layer/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/custom-layer/index.html))
* [World Population](https://vasturiano.github.io/react-globe.gl/example/world-population/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/world-population/index.html))
* [Recent Earthquakes](https://vasturiano.github.io/react-globe.gl/example/earthquakes/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/earthquakes/index.html))
* [World Volcanoes](https://vasturiano.github.io/react-globe.gl/example/volcanoes/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/volcanoes/index.html))
* [US outbound international airline routes](https://vasturiano.github.io/react-globe.gl/example/airline-routes/us-international-outbound.html) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/airline-routes/us-international-outbound.html))
* [Earth Shield](https://vasturiano.github.io/react-globe.gl/example/earth-shield/) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/earth-shield/index.html))
* [Satellites](https://vasturiano.github.io/react-globe.gl/example/satellites/index.html) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/satellites/index.html))
* [Submarine Cables](https://vasturiano.github.io/react-globe.gl/example/submarine-cables/index.html) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/submarine-cables/index.html))
* [Moon Landing Sites](https://vasturiano.github.io/react-globe.gl/example/moon-landing-sites/index.html) ([source](https://github.com/vasturiano/react-globe.gl/blob/master/example/moon-landing-sites/index.html))

## Quick start

```js
import Globe from 'react-globe.gl';
```

or using a *script* tag

```html
<script src="//unpkg.com/react-globe.gl"></script>
```

then

```jsx
ReactDOM.render(
  <Globe
    pointsData={myData}
  />, 
  myDOMElement
);
```

## API reference

* [Container Layout](#container-layout)
* [Globe Layer](#globe-layer)
* [Points Layer](#points-layer)
* [Arcs Layer](#arcs-layer)
* [Polygons Layer](#polygons-layer)
* [Paths Layer](#paths-layer)
* [Hex Bin Layer](#hex-bin-layer)
* [Hexed Polygons Layer](#hexed-polygons-layer)
* [Tiles Layer](#tiles-layer)
* [Rings Layer](#rings-layer)
* [Labels Layer](#labels-layer)
* [HTML Elements Layer](#html-elements-layer)
* [3D Objects Layer](#3d-objects-layer)
* [Custom Layer](#custom-layer)
* [Render Control](#render-control)
* [Utility](#utility)

### Container Layout

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>width</b> | <i>number</i> | *&lt;window width&gt;* | Canvas width. |
| <b>height</b> | <i>number</i> | *&lt;window height&gt;* | Canvas height. |
| <b>backgroundColor</b> | <i>string</i> | `#000011` | Background color. |
| <b>backgroundImageUrl</b> | <i>string</i> | *-* | URL of the image to be used as background to the globe. If no image is provided, the background color is shown instead. |
| <b>waitForGlobeReady</b> | <i>bool</i> | `true` | Whether to wait until the globe wrapping or background image has been fully loaded before rendering the globe or any of the data layers. |
| <b>animateIn</b> | <i>bool</i> | `true` | Whether to animate the globe initialization, by scaling and rotating the globe into its inital position. This prop only has an effect on component mount. |

### Globe Layer

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>globeImageUrl</b> | <i>string</i>| *-* | URL of the image used in the material that wraps the globe. If no image is provided, the globe is represented as a black sphere. |
| <b>bumpImageUrl</b> | <i>string</i>| *-* | URL of the image used to create a [bump map](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.bumpMap) in the material, to represent the globe's terrain. |
| <b>showGlobe</b> | <i>bool</i> | `true` | Whether to show the globe surface itself. |
| <b>showGraticules</b> | <i>bool</i> | `false` | Whether to show a graticule grid demarking latitude and longitude lines at every 10 degrees. |
| <b>showAtmosphere</b> | <i>bool</i> | `true` | Whether to show a bright halo surrounding the globe, representing the atmosphere. |
| <b>atmosphereColor</b> | <i>string</i> | `lightskyblue` | The color of the atmosphere. |
| <b>atmosphereAltitude</b> | <i>string</i> | 0.15 | The max altitude of the atmosphere, in terms of globe radius units. |
| <b>globeMaterial</b> | <i>Material</i> | [MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial) | ThreeJS material used to wrap the globe. Can be used for more advanced styling of the globe, like in [this example](https://github.com/vasturiano/react-globe.gl/blob/master/example/custom-globe-styling/index.html). |
| <b>onGlobeReady</b> | <i>func</i> | *-* | Callback function to invoke immediately after the globe has been initialized and visible on the scene. |
| <b>onGlobeClick</b> | <i>func</i> | *-* | Callback function for (left-button) clicks on the globe. The clicked globe coordinates and the event object are included as arguments: `onGlobeClick({ lat, lng }, event)`. |
| <b>onGlobeRightClick</b> | <i>func</i> | *-* | Callback function for right-clicks on the globe. The clicked globe coordinates and the event object are included as arguments: `onGlobeRightClick({ lat, lng }, event)`. |

### Points Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/basic/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/basic/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>pointsData</b> | <i>array</i> | `[]` | List of points to represent in the points map layer. Each point is displayed as a cylindrical 3D object rising perpendicularly from the surface of the globe. |
| <b>pointLabel</b> | <i>string</i> or <i>func</i> | `name` | Point object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>pointLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | Point object accessor function, attribute or a numeric constant for the cylinder's center latitude coordinate. |
| <b>pointLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | Point object accessor function, attribute or a numeric constant for the cylinder's center longitude coordinate. |
| <b>pointColor</b> | <i>string</i> or <i>func</i> | `() => '#ffffaa'` | Point object accessor function or attribute for the cylinder color. |
| <b>pointAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.1 | Point object accessor function, attribute or a numeric constant for the cylinder's altitude in terms of globe radius units (`0` = 0 altitude (flat circle), `1` = globe radius). |
| <b>pointRadius</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.25 | Point object accessor function, attribute or a numeric constant for the cylinder's radius, in angular degrees. |
| <b>pointResolution</b> | <i>number</i> | 12 | Radial geometric resolution of each cylinder, expressed in how many slice segments to divide the circumference. Higher values yield smoother cylinders. |
| <b>pointsMerge</b> | <i>bool</i> | `false` | Whether to merge all the point meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. |
| <b>pointsTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate point changes involving geometry modifications. A value of `0` will move the objects immediately to their final position. New objects are animated by scaling them from the ground up. Only works if `pointsMerge` is disabled. |
| <b>onPointClick</b> | <i>func</i>| *-* | Callback function for point (left-button) clicks. The point object, the event object and the clicked coordinates are included as arguments: `onPointClick(point, event, { lat, lng, altitude })`. Only works if `pointsMerge` is disabled. |
| <b>onPointRightClick</b> | <i>func</i>| *-* | Callback function for point right-clicks. The point object, the event object and the clicked coordinates are included as arguments: `onPointRightClick(point, event, { lat, lng, altitude })`. Only works if `pointsMerge` is disabled. |
| <b>onPointHover</b> | <i>func</i>| *-* | Callback function for point mouse over events. The point object (or `null` if there's no point under the mouse line of sight) is included as the first argument, and the previous point object (or `null`) as second argument: `onPointHover(point, prevPoint)`. Only works if `pointsMerge` is disabled. |

### Arcs Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/random-arcs/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/random-arcs/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>arcsData</b> | <i>array</i> | `[]` | List of links to represent in the arcs map layer. Each link is displayed as an arc line that rises from the surface of the globe, connecting the start and end coordinates. |
| <b>arcLabel</b> | <i>string</i> or <i>func</i> | `name` | Arc object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>arcStartLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `startLat` | Arc object accessor function, attribute or a numeric constant for the line's start latitude coordinate. |
| <b>arcStartLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `startLng` | Arc object accessor function, attribute or a numeric constant for the line's start longitude coordinate. |
| <b>arcEndLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `endLat` | Arc object accessor function, attribute or a numeric constant for the line's end latitude coordinate. |
| <b>arcEndLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `endLng` | Arc object accessor function, attribute or a numeric constant for the line's end longitude coordinate. |
| <b>arcColor</b> | <i>string</i>, <i>[string, ...]</i> or <i>func</i> | `() => '#ffffaa'` | Arc object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors, or a color interpolator function. |
| <b>arcAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i>| `null` |Arc object accessor function, attribute or a numeric constant for the arc's maximum altitude (ocurring at the half-way distance between the two points) in terms of globe radius units (`0` = 0 altitude (ground line), `1` = globe radius). If a value of `null` or `undefined` is used, the altitude is automatically set proportionally to the distance between the two points, according to the scale set in `arcAltitudeAutoScale`. |
| <b>arcAltitudeAutoScale</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.5 | Arc object accessor function, attribute or a numeric constant for the scale of the arc's automatic altitude, in terms of units of the great-arc distance between the two points. A value of `1` indicates the arc should be as high as its length on the ground. Only applicable if `arcAltitude` is not set. |
| <b>arcStroke</b> | <i>number</i>, <i>string</i> or <i>func</i>| `null` | Arc object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry) is used. |
| <b>arcCurveResolution</b> | <i>number</i> | 64 | Arc's curve resolution, expressed in how many straight line segments to divide the curve by. Higher values yield smoother curves. |
| <b>arcCircularResolution</b> | <i>number</i> | 6 | Radial geometric resolution of each line, expressed in how many slice segments to divide the tube's circumference. Only applicable when using Tube geometries (defined `arcStroke`). |
| <b>arcDashLength</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Arc object accessor function, attribute or a numeric constant for the length of the dashed segments in the arc, in terms of relative length of the whole line (`1` = full line length). |
| <b>arcDashGap</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Arc object accessor function, attribute or a numeric constant for the length of the gap between dash segments, in terms of relative line length. |
| <b>arcDashInitialGap</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Arc object accessor function, attribute or a numeric constant for the length of the initial gap before the first dash segment, in terms of relative line length. |
| <b>arcDashAnimateTime</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Arc object accessor function, attribute or a numeric constant for the time duration (in `ms`) to animate the motion of dash positions from the start to the end point for a full line length. A value of `0` disables the animation. |
| <b>arcsTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate arc changes involving geometry modifications. A value of `0` will move the arcs immediately to their final position. New arcs are animated by rising them from the ground up. |
| <b>onArcClick</b> | <i>func</i>| *-* | Callback function for arc (left-button) clicks. The arc object, the event object and the clicked coordinates are included as arguments: `onArcClick(arc, event, { lat, lng, altitude })`. |
| <b>onArcRightClick</b> | <i>func</i>| *-* | Callback function for arc right-clicks. The arc object, the event object and the clicked coordinates are included as arguments: `onArcRightClick(arc, event, { lat, lng, altitude })`. |
| <b>onArcHover</b> | <i>func</i>| *-* | Callback function for arc mouse over events. The arc object (or `null` if there's no arc under the mouse line of sight) is included as the first argument, and the previous arc object (or `null`) as second argument: `onArcHover(arc, prevArc)`. |

### Polygons Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/choropleth-countries/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/choropleth-countries/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>polygonsData</b> | <i>array</i> | `[]` | List of polygon shapes to represent in the polygons map layer. Each polygon is displayed as a shaped cone that extrudes from the surface of the globe. |
| <b>polygonLabel</b> | <i>string</i> or <i>func</i> | `name` | Polygon object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>polygonGeoJsonGeometry</b> | <i>string</i> or <i>func</i> | `geometry` | Polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. |
| <b>polygonCapColor</b> | <i>string</i> or <i>func</i> | `() => '#ffffaa'` | Polygon object accessor function or attribute for the color of the top surface. |
| <b>polygonCapMaterial</b> | <i>Material</i>, <i>string</i> or <i>func</i> | *-* | Polygon object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) to use in the top surface. This prop takes precedence over `polygonCapColor`, which will be ignored if both are defined. |
| <b>polygonSideColor</b> | <i>string</i> or <i>func</i> | `() => '#ffffaa'` | Polygon object accessor function or attribute for the color of the cone sides. |
| <b>polygonSideMaterial</b> | <i>Material</i>, <i>string</i> or <i>func</i> | *-* | Polygon object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) to use in the cone sides. This prop takes precedence over `polygonSideColor`, which will be ignored if both are defined. |
| <b>polygonStrokeColor</b> | <i>string</i> or <i>func</i> | *-* | Polygon object accessor function or attribute for the color to stroke the polygon perimeter. A falsy value will disable the stroking. |
| <b>polygonAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.01 | Polygon object accessor function, attribute or a numeric constant for the polygon cone's altitude in terms of globe radius units (`0` = 0 altitude (flat polygon), `1` = globe radius). |
| <b>polygonCapCurvatureResolution</b> | <i>number</i>, <i>string</i> or <i>func</i> | 5 | Polygon object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of the cap surface curvature. The finer the resolution, the more the polygon is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. |
| <b>polygonsTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate polygon altitude changes. A value of `0` will size the cone immediately to their final altitude. New polygons are animated by rising them from the ground up. |
| <b>onPolygonClick</b> | <i>func</i> | *-* | Callback function for polygon (left-button) clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onPolygonClick(polygon, event, { lat, lng, altitude })`. |
| <b>onPolygonRightClick</b> | <i>func</i> | *-* | Callback function for polygon right-clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onPolygonRightClick(polygon, event, { lat, lng, altitude })`. |
| <b>onPolygonHover</b> | <i>func</i> | *-* | Callback function for polygon mouse over events. The polygon object (or `null` if there's no polygon under the mouse line of sight) is included as the first argument, and the previous polygon object (or `null`) as second argument: `onPolygonHover(polygon, prevPolygon)`. |

### Paths Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/random-paths/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/random-paths/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>pathsData</b> | <i>array</i> | `[]` | List of lines to represent in the paths map layer. Each path is displayed as a line that connects all the coordinate pairs in the path array. |
| <b>pathLabel</b> | <i>string</i> or <i>func</i> | `name` | Path object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>pathPoints | <i>array</i>, <i>string</i> or <i>func</i> | `pnts => pnts` | Path object accessor function, attribute or an array for the set of points that define the path line. By default, each path point is assumed to be a 2-position array (`[<lat>, <lon>]`). This default behavior can be modified using the `pathPointLat` and `pathPointLng` methods. |
| <b>pathPointLat | <i>number</i>, <i>string</i> or <i>func</i> | `arr => arr[0]` | Path point object accessor function, attribute or a numeric constant for the latitude coordinate. |
| <b>pathPointLng | <i>number</i>, <i>string</i> or <i>func</i> | `arr => arr[1]` | Path point object accessor function, attribute or a numeric constant for the longitude coordinate. |
| <b>pathPointAlt | <i>number</i>, <i>string</i> or <i>func</i> | 0.001 | Path point object accessor function, attribute or a numeric constant for the point altitude, in terms of globe radius units (`0` = 0 altitude (ground), `1` = globe radius). |
| <b>pathResolution | <i>number</i> | 2 | The path's angular resolution, in lat/lng degrees. If the ground distance (excluding altitude) between two adjacent path points is larger than this value, the line segment will be interpolated in order to approximate the curvature of the sphere surface. Lower values yield more perfectly curved lines, at the cost of performance. |
| <b>pathColor | <i>string</i>, <i>[string, ...]</i> or <i>func</i> | `() => '#ffffaa'` | Path object accessor function or attribute for the line's color. Also supports color gradients by passing an array of colors, or a color interpolator function. Transparent colors are not supported in Fat Lines with set width. |
| <b>pathStroke | <i>number</i>, <i>string</i> or <i>func</i> | `null` | Path object accessor function, attribute or a numeric constant for the line's diameter, in angular degrees. A value of `null` or `undefined` will render a [ThreeJS Line](https://threejs.org/docs/#api/objects/Line) whose width is constant (`1px`) regardless of the camera distance. Otherwise, a [FatLine](https://github.com/vasturiano/three-fatline) is used. |
| <b>pathDashLength | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Path object accessor function, attribute or a numeric constant for the length of the dashed segments in the path line, in terms of relative length of the whole line (`1` = full line length). |
| <b>pathDashGap | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Path object accessor function, attribute or a numeric constant for the length of the gap between dash segments, in terms of relative line length. |
| <b>pathDashInitialGap | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Path object accessor function, attribute or a numeric constant for the length of the initial gap before the first dash segment, in terms of relative line length. |
| <b>pathDashAnimateTime | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Path object accessor function, attribute or a numeric constant for the time duration (in `ms`) to animate the motion of dash positions from the start to the end point for a full line length. A value of `0` disables the animation. |
| <b>pathTransitionDuration | <i>number</i> | 1000 | Duration (ms) of the transition to animate path changes. A value of `0` will move the paths immediately to their final position. New paths are animated from start to end. |
| <b>onPathClick</b> | <i>func</i> | *-* | Callback function for path (left-button) clicks. The path object, the event object and the clicked coordinates are included as arguments: `onPathClick(arc, event, { lat, lng, altitude })`. |
| <b>onPathRightClick</b> | <i>func</i> | *-* | Callback function for path right-clicks. The path object, the event object and the clicked coordinates are included as arguments: `onPathRightClick(arc, event, { lat, lng, altitude })`. |
| <b>onPathHover</b> | <i>func</i> | *-* | Callback function for path mouse over events. The path object (or `null` if there's no path under the mouse line of sight) is included as the first argument, and the previous path object (or `null`) as second argument: `onPathHover(path, prevPath)`. |

### Hex Bin Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/earthquakes/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/earthquakes/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>hexBinPointsData</b> | <i>array</i> | `[]` | List of points to aggregate using the hex bin map layer. Each point is added to an hexagonal prism 3D object that represents all the points within a tesselated portion of the space. |
| <b>hexLabel</b> | <i>string</i> or <i>func</i>| *-* |Hex object accessor function or attribute for label (shown as tooltip). An hex object includes all points binned, and has the syntax: `{ points, sumWeight, center: { lat, lng } }`. Supports plain text or HTML content. |
| <b>hexBinPointLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | Point object accessor function, attribute or a numeric constant for the latitude coordinate. |
| <b>hexBinPointLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | Point object accessor function, attribute or a numeric constant for the longitude coordinate. |
| <b>hexBinPointWeight</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Point object accessor function, attribute or a numeric constant for the weight of the point. Weights for points in the same bin are summed and determine the hexagon default altitude. |
| <b>hexBinResolution</b> | <i>number</i> | 4 | The geographic binning resolution as defined by [H3](https://uber.github.io/h3/#/documentation/core-library/resolution-table). Determines the area of the hexagons that tesselate the globe's surface. Accepts values between `0` and `15`. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons. |
| <b>hexMargin</b> | <i>number</i> or <i>func</i> | 0.2 | The radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons and serve only a visual purpose, as the data points within the margin still contribute to the hexagon's data. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexMargin(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. |
| <b>hexAltitude</b> | <i>number</i> or <i>func</i> | `({ sumWeight }) => sumWeight * 0.01` | The altitude of each hexagon, in terms of globe radius units (`0` = 0 altitude (flat hexagon), `1` = globe radius). This property also supports using an accessor method based on the hexagon's aggregated data, following the syntax: `hexAltitude(({ points, sumWeight, center: { lat, lng }}) => ...)`. This method should return a numeric constant. |
| <b>hexTopCurvatureResolution</b> | <i>number</i> | 5 | The resolution (in angular degrees) of the top surface curvature. The finer the resolution, the more the top area is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. |
| <b>hexTopColor</b> | <i>func</i> | `() => '#ffffaa'` | Accessor method for each hexagon's top color. The method should follow the signature: `hexTopColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. |
| <b>hexSideColor</b> | <i>func</i> | `() => '#ffffaa'` | Accessor method for each hexagon's side color. The method should follow the signature: `hexSideColor(({ points, sumWeight, center: { lat, lng }}) => ...)` and return a color string. |
| <b>hexBinMerge</b> | <i>bool</i> | `false` | Whether to merge all the hexagon meshes into a single ThreeJS object, for improved rendering performance. Visually both options are equivalent, setting this option only affects the internal organization of the ThreeJS objects. |
| <b>hexTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate hexagon changes related to geometry modifications (altitude, radius). A value of `0` will move the hexagons immediately to their final position. New hexagons are animated by scaling them from the ground up. Only works if `hexBinMerge` is disabled. |
| <b>onHexClick</b> | <i>func</i>| *-* | Callback function for hexagon (left-button) clicks. The hex object including all points binned, the event object and the clicked coordinates are included as arguments: `onHexClick({ points, sumWeight, center: { lat, lng } }, event, { lat, lng, altitude })`. Only works if `hexBinMerge` is disabled. |
| <b>onHexRightClick</b> | <i>func</i>| *-* | Callback function for hexagon right-clicks. The hex object including all points binned, the event object and the clicked coordinates are included as arguments: `onHexRightClick({ points, sumWeight, center: { lat, lng } }, event, { lat, lng, altitude })`. Only works if `hexBinMerge` is disabled. |
| <b>onHexHover</b> | <i>func</i>| *-* | Callback function for hexagon mouse over events. The hex object (or `null` if there's no hex under the mouse line of sight) is included as the first argument, and the previous hex object (or `null`) as second argument: `onHexHover(hex, prevHex)`. Each hex object includes all points binned, and has the syntax: `{ points, sumWeight, center: { lat, lng } }`. Only works if `hexBinMerge` is disabled. |

### Hexed Polygons Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/hexed-polygons/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/hexed-polygons/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>hexPolygonsData</b> | <i>array</i> | `[]` | List of polygon shapes to represent in the hexed polygons map layer. Each polygon is displayed as a tesselated group of hexagons that approximate the polygons shape according to the resolution specified in `hexPolygonResolution`. |
| <b>hexPolygonLabel</b> | <i>string</i> or <i>func</i> | `name` | Hexed polygon object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>hexPolygonGeoJsonGeometry</b> | <i>string</i> or <i>func</i> | `geometry` | Hexed polygon object accessor function or attribute for the GeoJson geometry specification of the polygon's shape. The returned value should have a minimum of two fields: `type` and `coordinates`. Only GeoJson geometries of type `Polygon` or `MultiPolygon` are supported, other types will be skipped. |
| <b>hexPolygonColor</b> | <i>string</i> or <i>func</i> | `() => '#ffffaa'` | Hexed polygon object accessor function or attribute for the color of each hexagon in the polygon. |
| <b>hexPolygonAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.001 | Hexed polygon object accessor function, attribute or a numeric constant for the polygon's hexagons altitude in terms of globe radius units (`0` = 0 altitude, `1` = globe radius). |
| <b>hexPolygonResolution</b> | <i>number</i>, <i>string</i> or <i>func</i> | 3 | Hexed polygon object accessor function, attribute or a numeric constant for the geographic binning resolution as defined by [H3](https://uber.github.io/h3/#/documentation/core-library/resolution-table). Determines the area of the hexagons that tesselate the globe's surface. Accepts values between `0` and `15`. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons. |
| <b>hexPolygonMargin</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.2 | Hexed polygon object accessor function, attribute or a numeric constant for the radial margin of each hexagon. Margins above `0` will create gaps between adjacent hexagons within a polygon. The margin is specified in terms of fraction of the hexagon's surface diameter. Values below `0` or above `1` are disadvised. |
| <b>hexPolygonCurvatureResolution</b> | <i>number</i>, <i>string</i> or <i>func</i> | 5 | Hexed polygon object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of each hexed polygon surface curvature. The finer the resolution, the more the polygon hexes are fragmented into smaller faces to approximate the spheric surface, at the cost of performance. |
| <b>hexPolygonsTransitionDuration</b> | <i>number</i> | 0 | Duration (ms) of the transition to animate hexed polygons altitude and margin changes. A value of `0` will move the hexagons immediately to their final state. New hexed polygons are animated by sizing each hexagon from `0` radius. |
| <b>onHexPolygonClick</b> | <i>func</i> | *-* | Callback function for hexed polygon (left-button) clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onHexPolygonClick(polygon, event, { lat, lng, altitude })`. |
| <b>onHexPolygonRightClick</b> | <i>func</i> | *-* | Callback function for hexed polygon right-clicks. The polygon object, the event object and the clicked coordinates are included as arguments: `onHexPolygonRightClick(polygon, event, { lat, lng, altitude })`. |
| <b>onHexPolygonHover</b> | <i>func</i> | *-* | Callback function for hexed polygon mouse over events. The polygon object (or `null` if there's no polygon under the mouse line of sight) is included as the first argument, and the previous polygon object (or `null`) as second argument: `onHexPolygonHover(polygon, prevPolygon)`. |

### Tiles Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/tiles/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/tiles/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>tilesData</b> | <i>array</i> | `[]` | List of tiles to represent in the tiles map layer. Each tile is displayed as a spherical surface segment. The segments can be placed side-by-side for a tiled surface and each can be styled separately. |
| <b>tileLabel</b> | <i>string</i> or <i>func</i> | `name` | Tile object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>tileLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | Tile object accessor function, attribute or a numeric constant for the segment's centroid latitude coordinate. |
| <b>tileLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | Tile object accessor function, attribute or a numeric constant for the segment's centroid longitude coordinate. |
| <b>tileAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.01 | Tile object accessor function, attribute or a numeric constant for the segment's altitude in terms of globe radius units. |
| <b>tileWidth</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Tile object accessor function, attribute or a numeric constant for the segment's longitudinal width, in angular degrees. |
| <b>tileHeight</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Tile object accessor function, attribute or a numeric constant for the segment's latitudinal height, in angular degrees. |
| <b>tileUseGlobeProjection</b> | <i>bool</i>, <i>string</i> or <i>func</i> | `true` | Tile object accessor function, attribute or a boolean constant for whether to use the globe's projection to shape the segment to its relative tiled position (`true`), or break free from this projection and shape the segment as if it would be laying directly on the equatorial perimeter (`false`). |
| <b>tileMaterial</b> | <i>Material</i>, <i>string</i> or <i>func</i> | `() => new MeshLambertMaterial({ color: '#ffbb88' })` | Tile object accessor function, attribute or material object for the [ThreeJS material](https://threejs.org/docs/#api/en/materials/Material) used to style the segment's surface. |
| <b>tileCurvatureResolution</b> | <i>number</i>, <i>string</i> or <i>func</i> | 5 | Tile object accessor function, attribute or a numeric constant for the resolution (in angular degrees) of the surface curvature. The finer the resolution, the more the tile geometry is fragmented into smaller faces to approximate the spheric surface, at the cost of performance. |
| <b>tilesTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate tile changes involving geometry modifications. A value of `0` will move the tiles immediately to their final position. New tiles are animated by scaling them from the centroid outwards. |
| <b>onTileClick</b> | <i>func</i> | *-* | Callback function for tile (left-button) clicks. The tile object, the event object and the clicked coordinates are included as arguments: `onTileClick(tile, event, { lat, lng, altitude })`. |
| <b>onTileRightClick</b> | <i>func</i> | *-* | Callback function for tile right-clicks. The tile object, the event object and the clicked coordinates are included as arguments: `onTileRightClick(tile, event, { lat, lng, altitude })`. |
| <b>onTileHover</b> | <i>func</i> | *-* | Callback function for tile mouse over events. The tile object (or `null` if there's no tile under the mouse line of sight) is included as the first argument, and the previous tile object (or `null`) as second argument: `onTileHover(tile, prevTile)`. |

### Rings Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/random-rings/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/random-rings/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>ringsData</b> | <i>array</i> | `[]` | List of self-propagating ripple rings to represent in the rings map layer. Each data point is displayed as an animated set of concentric circles that propagate outwards from (or inwards to) a central point through the spherical surface. |
| <b>ringLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | Ring object accessor function, attribute or a numeric constant for each circle's center latitude coordinate. |
| <b>ringLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | Ring object accessor function, attribute or a numeric constant for each circle's center longitude coordinate. |
| <b>ringAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.0015 | Ring object accessor function, attribute or a numeric constant for the circle's altitude in terms of globe radius units. |
| <b>ringColor</b> | <i>string</i>, <i>[string, ...]</i> or <i>func</i> | `() => '#ffffaa'` | Ring object accessor function or attribute for the stroke color of each ring. Also supports radial color gradients by passing an array of colors, or a color interpolator function. |
| <b>ringResolution</b> | <i>number</i> | 64 | Geometric resolution of each circle, expressed in how many slice segments to divide the circumference. Higher values yield smoother circles. |
| <b>ringMaxRadius</b> | <i>number</i>, <i>string</i> or <i>func</i> | 2 | Ring object accessor function, attribute or a numeric constant for the maximum outer radius of the circles, at which the rings stop propagating and are removed. Defined in angular degrees. |
| <b>ringPropagationSpeed</b> | <i>number</i>, <i>string</i> or <i>func</i> | 1 | Ring object accessor function, attribute or a numeric constant for the propagation velocity of the rings, defined in degrees/second. Setting a negative value will invert the direction and cause the rings to propagate inwards from the `maxRadius`. |
| <b>ringRepeatPeriod</b> | <i>number</i>, <i>string</i> or <i>func</i> | 700 | Ring object accessor function, attribute or a numeric constant for the interval of time (in ms) to wait between consecutive auto-generated concentric circles. A value less or equal than `0` will disable the repetition and emit a single ring. |

### Labels Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/world-cities/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/world-cities/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>labelsData</b> | <i>array</i> | `[]` | List of label objects to represent in the labels map layer. |
| <b>labelLabel</b> | <i>string</i> or <i>func</i>| *-* |Label object accessor function or attribute for its own tooltip label. Supports plain text or HTML content. |
| <b>labelLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | Label object accessor function, attribute or a numeric constant for the latitude coordinate. |
| <b>labelLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | Label object accessor function, attribute or a numeric constant for the longitude coordinate. |
| <b>labelText</b> | <i>string</i> or <i>func</i> | `text` | Label object accessor function or attribute for the label text. |
| <b>labelColor</b> | <i>string</i> or <i>func</i> | `() => 'lightgrey'` | Label object accessor function or attribute for the label color. |
| <b>labelAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Label object accessor function, attribute or a numeric constant for the label altitude in terms of globe radius units. |
| <b>labelSize</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.5 | Label object accessor function, attribute or a numeric constant for the label text height, in angular degrees. |
| <b>labelTypeFace</b> | <i>typeface object </i> | [helvetiker regular](https://github.com/mrdoob/three.js/blob/dev/examples/fonts/helvetiker_regular.typeface.json) | Text font typeface JSON object. Supports any typeface font generated by [Facetype.js](http://gero3.github.io/facetype.js/). |
| <b>labelRotation</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | Label object accessor function, attribute or a numeric constant for the label rotation in degrees. The rotation is performed clockwise along the axis of its latitude parallel plane. |
| <b>labelResolution</b> | <i>number</i> | 3 | The text geometric resolution of each label, expressed in how many segments to use in the text curves. Higher values yield smoother labels. |
| <b>labelIncludeDot</b> | <i>bool</i>, <i>string</i> or <i>func</i> | `true` | Label object accessor function, attribute or a bool constant for whether to include a dot marker next to the text indicating the exact `lat`, `lng` coordinates of the label. If enabled the text will be rendered offset from the dot. |
| <b>labelDotRadius</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.1 | Label object accessor function, attribute or a numeric constant for the radius of the dot marker, in angular degrees. |
| <b>labelDotOrientation</b> | <i>string</i> or <i>func</i> | `() => 'bottom'` | Label object accessor function or attribute for the orientation of the label if the dot marker is present. Possible values are `right`, `top` and `bottom`. |
| <b>labelsTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate label changes involving position modifications (`lat`, `lng`, `altitude`, `rotation`). A value of `0` will move the labels immediately to their final position. New labels are animated by scaling their size. |
| <b>onLabelClick</b> | <i>func</i>| *-* | Callback function for label (left-button) clicks. The label object, the event object and the clicked coordinates are included as arguments: `onLabelClick(label, event, { lat, lng, altitude })`. |
| <b>onLabelRightClick</b> | <i>func</i>| *-* | Callback function for label right-clicks. The label object, the event object and the clicked coordinates are included as arguments: `onLabelRightClick(label, event, { lat, lng, altitude })`. |
| <b>onLabelHover</b> | <i>func</i>| *-* | Callback function for label mouse over events. The label object (or `null` if there's no label under the mouse line of sight) is included as the first argument, and the previous label object (or `null`) as second argument: `onLabelHover(label, prevlabel)`. |

### HTML Elements Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/html-markers/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/html-markers/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>htmlElementsData</b> | <i>array</i> | `[]` | List objects to represent in the HTML elements map layer. Each HTML element is rendered using [ThreeJS CSS2DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer). |
| <b>htmlLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | HTML element accessor function, attribute or a numeric constant for the latitude coordinate of the element's central position. |
| <b>htmlLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | HTML element accessor function, attribute or a numeric constant for the longitude coordinate of the element's central position. |
| <b>htmlAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0 | HTML element accessor function, attribute or a numeric constant for the altitude coordinate of the element's position, in terms of globe radius units. |
| <b>htmlElement</b> | <i>string</i> or <i>func</i> | `null` | Accessor function or attribute to retrieve the DOM element to use. Should return an instance of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). |
| <b>htmlTransitionDuration</b> | <i>number</i> | 1000 | Duration (ms) of the transition to animate HTML elements position changes. A value of `0` will move the elements immediately to their final position. |

### 3D Objects Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/satellites/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/satellites/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>objectsData</b> | <i>array</i> | `[]` | Getter/setter for the list of custom 3D objects to represent in the objects layer. Each object is rendered according to the `objectThreeObject` method. |
| <b>objectLabel</b> | <i>string</i> or <i>func</i> | `name` | Object accessor function or attribute for its own tooltip label. Supports plain text or HTML content. |
| <b>objectLat</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lat` | Object accessor function, attribute or a numeric constant for the latitude coordinate of the object's position. |
| <b>objectLng</b> | <i>number</i>, <i>string</i> or <i>func</i> | `lng` | Object accessor function, attribute or a numeric constant for the longitude coordinate of the object's position. |
| <b>objectAltitude</b> | <i>number</i>, <i>string</i> or <i>func</i> | 0.01 | Object accessor function, attribute or a numeric constant for the altitude coordinate of the object's position, in terms of globe radius units. |
| <b>objectRotation</b> | <i>{[x], [y], [z]}</i>, <i>str</i> or <i>func</i> | | Object accessor function, attribute or a `{x, y, z}` object for the object's rotation (in degrees). Each dimension is optional, allowing for rotation only in some axes. Rotation is applied in the order **X**->**Y**->**Z**. |
| <b>objectFacesSurface</b> | <i>bool</i>, <i>string</i> or <i>func</i> | `true` | Object accessor function, attribute or a boolean constant for whether the object should be rotated to face (away from) the globe surface (`true`), or be left in its original universe orientation (`false`). |
| <b>objectThreeObject</b> | <i>Object3d</i>, <i>string</i> or <i>func</i> | *A yellow sphere* | Object accessor function or attribute for defining a custom 3d object to render as part of the objects map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). |
| <b>onObjectClick</b> | <i>func</i> | *-* | Callback function for object (left-button) clicks. The object itself, the event and the clicked coordinates are included as arguments: `onObjectClick(obj, event, { lat, lng, altitude })`. |
| <b>onObjectRightClick</b> | <i>func</i> | *-* | Callback function for object right-clicks. The object itself, the event and the clicked coordinates are included as arguments: `onObjectRightClick(obj, event, { lat, lng, altitude })`. |
| <b>onObjectHover</b> | <i>func</i> | *-* | Callback function for object mouse over events. The object itself (or `null` if there's no object under the mouse line of sight) is included as the first argument, and the previous object (or `null`) as second argument: `onObjectHover(obj, prevObj)`. |

### Custom Layer

<p align="center">
   <a href="//vasturiano.github.io/react-globe.gl/example/custom-layer/"><img width="70%" src="https://vasturiano.github.io/react-globe.gl/example/custom-layer/preview.png"></a>
</p>

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>customLayerData</b> | <i>array</i> | `[]` | List of items to represent in the custom map layer. Each item is rendered according to the `customThreeObject` method. |
| <b>customLayerLabel</b> | <i>string</i> or <i>func</i> | `name` | Object accessor function or attribute for label (shown as tooltip). Supports plain text or HTML content. |
| <b>customThreeObject</b> | <i>Object3d</i>, <i>string</i> or <i>func</i>| *-* |Object accessor function or attribute for generating a custom 3d object to render as part of the custom map layer. Should return an instance of [ThreeJS Object3d](https://threejs.org/docs/index.html#api/core/Object3D). |
| <b>customThreeObjectUpdate</b> | <i>string</i> or <i>func</i>| *-* |Object accessor function or attribute for updating an existing custom 3d object with new data. This can be used for performance improvement on data updates as the objects don't need to be removed and recreated at each update. The callback method's signature includes the object to be update and its new data: `customThreeObjectUpdate((obj, objData) => { ... })`. |
| <b>onCustomLayerClick</b> | <i>func</i>| *-* | Callback function for custom object (left-button) clicks. The custom object, the event object and the clicked coordinates are included as arguments: `onCustomLayerClick(obj, event, { lat, lng, altitude })`. |
| <b>onCustomLayerRightClick</b> | <i>func</i>| *-* | Callback function for custom object right-clicks. The custom object, the event object and the clicked coordinates are included as arguments: `onCustomLayerRightClick(obj, event, { lat, lng, altitude })`. |
| <b>onCustomLayerHover</b> | <i>func</i>| *-* | Callback function for custom object mouse over events. The custom object (or `null` if there's no object under the mouse line of sight) is included as the first argument, and the previous custom object (or `null`) as second argument: `onCustomLayerHover(obj, prevObj)`. |

### Render Control

| Prop | Type | Default | Description |
| --- | :--: | :--: | --- |
| <b>rendererConfig</b> | <i>object</i> | `{ antialias: true, alpha: true }` | Configuration parameters to pass to the [ThreeJS WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) constructor. This prop only has an effect on component mount. |
| <b>enablePointerInteraction</b> | <i>bool</i> | `true` | Whether to enable the mouse tracking events. This activates an internal tracker of the canvas mouse position and enables the functionality of object hover/click and tooltip labels, at the cost of performance. If you're looking for maximum gain in your globe performance it's recommended to switch off this property. |
| <b>pointerEventsFilter</b> | <i>func</i> | `() => true` | Filter function which defines whether a particular object can be the target of pointer interactions. In general, objects that are closer to the camera get precedence in capturing pointer events. This function allows having ignored object layers so that pointer events can be passed through to deeper objects in the various globe layers. The ThreeJS object and its associated data (if any) are passed as arguments: `pointerEventsFilter(obj, data)`. The function should return a boolean value. |
| <b>lineHoverPrecision</b> | <i>number</i> | 0.2 | Precision to use when detecting hover events over [Line](https://threejs.org/docs/#api/objects/Line) objects, such as arcs and paths. |

| Method | Arguments | Description |
| --- | :--: | --- |
| <b>pointOfView</b> | { <i>lat</i>, <i>lng</i>, <i>altitude</i> } [,<i>ms</i>=`0`] | By default the camera will aim at the cross between the equator and the prime meridian (`0,0` coordinates), at an altitude of `2.5` globe radii. | Camera position, in terms of geographical `lat`, `lng`, `altitude` coordinates. Each of the coordinates is optional, allowing for motion in just some direction. The 2nd optional argument defines the duration of the transition (in ms) to animate the camera motion. A value of 0 (default) moves the camera immediately to the final position. |
| <b>pauseAnimation</b>| *-* |Pauses the rendering cycle of the component, effectively freezing the current view and cancelling all user interaction. This method can be used to save performance in circumstances when a static image is sufficient. |
| <b>resumeAnimation</b>| *-* |Resumes the rendering cycle of the component, and re-enables the user interaction. This method can be used together with `pauseAnimation` for performance optimization purposes. |
| <b>onZoom</b> | <i>func</i> | *-* | Callback function for point-of-view changes by zooming or rotating the globe using the orbit controls. The current point of view (with the syntax `{ lat, lng, altitude }`) is included as sole argument. |
| <b>scene</b>| *-* |Access the internal ThreeJS [Scene](https://threejs.org/docs/#api/scenes/Scene). Can be used to extend the current scene with additional objects not related to globe.gl. |
| <b>camera</b>| *-* |Access the internal ThreeJS [Camera](https://threejs.org/docs/#api/cameras/PerspectiveCamera). |
| <b>renderer</b>| *-* |Access the internal ThreeJS [WebGL renderer](https://threejs.org/docs/#api/renderers/WebGLRenderer). |
| <b>postProcessingComposer</b> | *-* | Access the [post-processing composer](https://threejs.org/docs/#examples/en/postprocessing/EffectComposer). Use this to add post-processing [rendering effects](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/postprocessing) to the scene. By default the composer has a single pass ([RenderPass](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/postprocessing/RenderPass.js)) that directly renders the scene without any effects. |
| <b>controls</b>| *-* |Access the internal ThreeJS [orbit controls object](https://threejs.org/docs/#examples/controls/OrbitControls). |

### Utility

| Method | Arguments | Description |
| --- | :--: | --- |
| <b>getGlobeRadius</b> | *-* | Returns the cartesian distance of a globe radius in absolute spatial units. |
| <b>getCoords</b> | <i>lat</i>, <i>lng</i> [,<i>altitude</i>=`0`] | Utility method to translate spherical coordinates to cartesian. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the equivalent `{x, y, z}` cartesian spatial coordinates. |
| <b>getScreenCoords</b> | <i>lat</i>, <i>lng</i> [,<i>altitude</i>=`0`] | Utility method to translate spherical coordinates to the viewport domain. Given a pair of latitude/longitude coordinates and optionally altitude (in terms of globe radius units), returns the current equivalent `{x, y}` in viewport coordinates. |
| <b>toGeoCoords</b> | { <i>x</i>, <i>y</i>, <i>z</i> } | Utility method to translate cartesian coordinates to the geographic domain. Given a set of 3D cartesian coordinates `{x, y, z}`, returns the equivalent `{lat, lng, altitude}` spherical coordinates. Altitude is defined in terms of globe radius units. |
| <b>toGlobeCoords</b> | <i>x</i>, <i>y</i> | Utility method to translate viewport coordinates to the globe surface coordinates directly under the specified viewport pixel. Returns the globe coordinates in the format `{ lat, lng }`, or `null` if the globe does not currently intersect with that viewport location. |

## Giving Back

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url) If this project has helped you and you'd like to contribute back, you can always [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)!

[npm-img]: https://img.shields.io/npm/v/react-globe.gl
[npm-url]: https://npmjs.org/package/react-globe.gl
[build-size-img]: https://img.shields.io/bundlephobia/minzip/react-globe.gl
[build-size-url]: https://bundlephobia.com/result?p=react-globe.gl
[npm-downloads-img]: https://img.shields.io/npm/dt/react-globe.gl
[npm-downloads-url]: https://www.npmtrends.com/react-globe.gl
