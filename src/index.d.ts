import * as React from 'react';
import { Light, Scene, Camera, WebGLRenderer, Object3D, Material, Texture } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ConfigOptions, GlobeInstance as GlobeKapsuleInstance } from 'globe.gl';

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;
type HexBinAccessor<T> = Accessor<HexBin, T>;

type TooltipContent = string | React.ReactHTMLElement<HTMLElement>;

interface HexBin {
  points: object[],
  sumWeight: number,
  center: { lat: number, lng: number }
}

interface GeoJsonGeometry {
  type: string;
  coordinates: number[];
}

interface TypeFace {}

type LabelOrientation = 'right' | 'top' | 'bottom';

interface GeoCoords {
  lat: number;
  lng: number;
  altitude: number;
}

interface CartesianCoords {
  x: number;
  y: number;
  z: number;
}

interface ScreenCoords {
  x: number;
  y: number;
}

export interface GlobeProps extends ConfigOptions {
  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;
  backgroundImageUrl?: string | null;

  // Globe layer
  globeImageUrl?: string | null;
  bumpImageUrl?: string | null;
  globeTileEngineUrl?: ((x: number, y: number, level: number) => string)| null;
  showGlobe?: boolean;
  showGraticules?: boolean;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  globeMaterial?: Material;
  onGlobeReady?: () => void;
  onGlobeClick?: (coords: { lat: number, lng: number }, event: MouseEvent) => void;
  onGlobeRightClick?: (coords: { lat: number, lng: number }, event: MouseEvent) => void;

  // Points layer
  pointsData?: object[];
  pointLat?: ObjAccessor<number>;
  pointLng?: ObjAccessor<number>;
  pointColor?: ObjAccessor<string>;
  pointAltitude?: ObjAccessor<number>;
  pointRadius?: ObjAccessor<number>;
  pointResolution?: number;
  pointsMerge?: boolean;
  pointsTransitionDuration?: number;
  pointLabel?: ObjAccessor<TooltipContent>;
  onPointClick?: (point: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onPointRightClick?: (point: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onPointHover?: (point: object | null, prevPoint: object | null) => void;

  // Arcs layer
  arcsData?: object[];
  arcStartLat?: ObjAccessor<number>;
  arcStartLng?: ObjAccessor<number>;
  arcEndLat?: ObjAccessor<number>;
  arcEndLng?: ObjAccessor<number>;
  arcColor?: ObjAccessor<string | string[] | ((t: number) => string)>;
  arcAltitude?: ObjAccessor<number | null>;
  arcAltitudeAutoScale?: ObjAccessor<number>;
  arcStroke?: ObjAccessor<number | null>;
  arcCurveResolution?: number;
  arcCircularResolution?: number;
  arcDashLength?: ObjAccessor<number>;
  arcDashGap?: ObjAccessor<number>;
  arcDashInitialGap?: ObjAccessor<number>;
  arcDashAnimateTime?: ObjAccessor<number>;
  arcsTransitionDuration?: number;
  arcLabel?: ObjAccessor<TooltipContent>;
  onArcClick?: (arc: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onArcRightClick?: (arc: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onArcHover?: (arc: object | null, prevArc: object | null) => void;

  // Polygons layer
  polygonsData?: object[];
  polygonGeoJsonGeometry?: ObjAccessor<GeoJsonGeometry>;
  polygonCapColor?: ObjAccessor<string>;
  polygonCapMaterial?: ObjAccessor<Material>;
  polygonSideColor?: ObjAccessor<string>;
  polygonSideMaterial?: ObjAccessor<Material>;
  polygonStrokeColor?: ObjAccessor<string | boolean | null>;
  polygonAltitude?: ObjAccessor<number>;
  polygonCapCurvatureResolution?: ObjAccessor<number>;
  polygonsTransitionDuration?: number;
  polygonLabel?: ObjAccessor<TooltipContent>;
  onPolygonClick?: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onPolygonRightClick?: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onPolygonHover?: (polygon: object | null, prevPolygon: object | null) => void;

  // Paths layer
  pathsData?: object[];
  pathPoints?: ObjAccessor<any[]>;
  pathPointLat?: Accessor<any, number>;
  pathPointLng?: Accessor<any, number>;
  pathPointAlt?: Accessor<any, number>;
  pathResolution?: number;
  pathColor?: ObjAccessor<string | string[] | ((t: number) => string)>;
  pathStroke?: ObjAccessor<number | null>;
  pathDashLength?: ObjAccessor<number>;
  pathDashGap?: ObjAccessor<number>;
  pathDashInitialGap?: ObjAccessor<number>;
  pathDashAnimateTime?: ObjAccessor<number>;
  pathTransitionDuration?: number;
  pathLabel?: ObjAccessor<TooltipContent>;
  onPathClick?: (path: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onPathRightClick?: (path: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onPathHover?: (path: object | null, prevPath: object | null) => void;

  // Heatmaps layer
  heatmapsData?: object[];
  heatmapPoints?: ObjAccessor<any[]>;
  heatmapPointLat?: Accessor<any, number>;
  heatmapPointLng?: Accessor<any, number>;
  heatmapPointWeight?: Accessor<any, number>;
  heatmapBandwidth?: ObjAccessor<number>;
  heatmapColorFn?: ObjAccessor<(t: number) => string>;
  heatmapColorSaturation?: ObjAccessor<number>;
  heatmapBaseAltitude?: ObjAccessor<number>;
  heatmapTopAltitude?: ObjAccessor<number>;
  heatmapsTransitionDuration?: number;
  onHeatmapClick?: (heatmap: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onHeatmapRightClick?: (heatmap: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onHeatmapHover?: (heatmap: object | null, prevHeatmap: object | null) => void;

  // Hex Bin layer
  hexBinPointsData?: object[];
  hexBinPointLat?: ObjAccessor<number>;
  hexBinPointLng?: ObjAccessor<number>;
  hexBinPointWeight?: ObjAccessor<number>;
  hexBinResolution?: number;
  hexMargin?: HexBinAccessor<number>;
  hexAltitude?: HexBinAccessor<number>;
  hexTopCurvatureResolution?: number;
  hexTopColor?: HexBinAccessor<string>;
  hexSideColor?: HexBinAccessor<string>;
  hexBinMerge?: boolean;
  hexTransitionDuration?: number;
  hexLabel?: HexBinAccessor<TooltipContent>;
  onHexClick?: (hex: HexBin, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onHexRightClick?: (hex: HexBin, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onHexHover?: (hex: HexBin | null, prevHex: HexBin | null) => void;

  // Hexed Polygons layer
  hexPolygonsData?: object[];
  hexPolygonGeoJsonGeometry?: ObjAccessor<GeoJsonGeometry>;
  hexPolygonColor?: ObjAccessor<string>;
  hexPolygonAltitude?: ObjAccessor<number>;
  hexPolygonResolution?: ObjAccessor<number>;
  hexPolygonMargin?: ObjAccessor<number>;
  hexPolygonUseDots?: ObjAccessor<boolean>;
  hexPolygonCurvatureResolution?: ObjAccessor<number>;
  hexPolygonDotResolution?: ObjAccessor<number>;
  hexPolygonsTransitionDuration?: number;
  hexPolygonLabel?: ObjAccessor<TooltipContent>;
  onHexPolygonClick?: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onHexPolygonRightClick?: (polygon: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onHexPolygonHover?: (polygon: object | null, prevPolygon: object | null) => void;

  // Tiles layer
  tilesData?: object[];
  tileLat?: ObjAccessor<number>;
  tileLng?: ObjAccessor<number>;
  tileAltitude?: ObjAccessor<number>;
  tileWidth?: ObjAccessor<number>;
  tileHeight?: ObjAccessor<number>;
  tileUseGlobeProjection?: ObjAccessor<boolean>;
  tileMaterial?: ObjAccessor<Material>;
  tileCurvatureResolution?: ObjAccessor<number>;
  tilesTransitionDuration?: number;
  tileLabel?: ObjAccessor<TooltipContent>;
  onTileClick?: (tile: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onTileRightClick?: (tile: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onTileHover?: (tile: object | null, prevTile: object | null) => void;

  // Particles layer
  particlesData?: object[];
  particlesList?: ObjAccessor<object[]>;
  particleLat?: ObjAccessor<number>;
  particleLng?: ObjAccessor<number>;
  particleAltitude?: ObjAccessor<number>;
  particlesSize?: ObjAccessor<number>;
  particlesSizeAttenuation?: ObjAccessor<boolean>;
  particlesColor?: ObjAccessor<string>;
  particlesTexture?: ObjAccessor<Texture>;
  particleLabel?: ObjAccessor<TooltipContent>;
  onParticleClick?: (particle: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onParticleRightClick?: (particle: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onParticleHover?: (particle: object | null, prevParticle: object | null) => void;

  // Rings Layer
  ringsData?: object[];
  ringLat?: ObjAccessor<number>;
  ringLng?: ObjAccessor<number>;
  ringAltitude?: ObjAccessor<number>;
  ringColor?: ObjAccessor<string | string[] | ((t: number) => string)>;
  ringResolution?: number;
  ringMaxRadius?: ObjAccessor<number>;
  ringPropagationSpeed?: ObjAccessor<number>;
  ringRepeatPeriod?: ObjAccessor<number>;

  // Labels layer
  labelsData?: object[];
  labelLat?: ObjAccessor<number>;
  labelLng?: ObjAccessor<number>;
  labelText?: ObjAccessor<string>;
  labelColor?: ObjAccessor<string>;
  labelAltitude?: ObjAccessor<number>;
  labelSize?: ObjAccessor<number>;
  labelTypeFace?: TypeFace;
  labelRotation?: ObjAccessor<number>;
  labelResolution?: number;
  labelIncludeDot?: ObjAccessor<boolean>;
  labelDotRadius?: ObjAccessor<number>;
  labelDotOrientation?: ObjAccessor<LabelOrientation>;
  labelsTransitionDuration?: number;
  labelLabel?: ObjAccessor<TooltipContent>;
  onLabelClick?: (label: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onLabelRightClick?: (label: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onLabelHover?: (label: object | null, prevLabel: object | null) => void;

  // HTML Elements layer
  htmlElementsData?: object[];
  htmlLat?: ObjAccessor<number>;
  htmlLng?: ObjAccessor<number>;
  htmlAltitude?: ObjAccessor<number>;
  htmlElement?: string | ((d: object) => HTMLElement);
  htmlTransitionDuration?: number;

  // 3D Objects layer
  objectsData?: object[];
  objectLat?: ObjAccessor<number>;
  objectLng?: ObjAccessor<number>;
  objectAltitude?: ObjAccessor<number>;
  objectRotation?: ObjAccessor<{ x?: number, y?: number, z?: number } | null>;
  objectFacesSurfaces?: ObjAccessor<boolean>;
  objectThreeObject?: Object3D | string | ((d: object) => Object3D);
  objectLabel?: ObjAccessor<TooltipContent>;
  onObjectClick?: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onObjectRightClick?: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onObjectHover?: (obj: object | null, prevObj: object | null) => void;

  // Custom layer
  customLayerData?: object[];
  customThreeObject?: Object3D | string | ((d: object) => Object3D);
  customThreeObjectUpdate?: string | ((obj: Object3D, objData: object) => void);
  customLayerLabel?: ObjAccessor<TooltipContent>;
  onCustomLayerClick?: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onCustomLayerRightClick?: (obj: object, event: MouseEvent, coords: { lat: number, lng: number, altitude: number }) => void;
  onCustomLayerHover?: (obj: object | null, prevObj: object | null) => void;

  // Render control
  enablePointerInteraction?: boolean;
  pointerEventsFilter?: (object: Object3D, data?: object) => boolean;
  lineHoverPrecision?: number;
  onZoom?: (pov: GeoCoords) => void;
}

export interface GlobeMethods {
  // Render control
  pointOfView(): GeoCoords;
  pointOfView(pov: { lat?: number, lng?: number, altitude?: number }, transitionMs?: number): GlobeKapsuleInstance;
  pauseAnimation(): GlobeKapsuleInstance;
  resumeAnimation(): GlobeKapsuleInstance;
  lights(): Light[];
  lights(lights: Light[]): GlobeKapsuleInstance;
  scene(): Scene;
  camera(): Camera;
  renderer(): WebGLRenderer;
  postProcessingComposer(): EffectComposer;
  controls(): OrbitControls;

  // Utilities
  getGlobeRadius(): number;
  getCoords(lat: number, lng: number, altitude?: number): CartesianCoords;
  getScreenCoords(lat: number, lng: number, altitude?: number): ScreenCoords;
  toGeoCoords(coords: CartesianCoords): GeoCoords;
  toGlobeCoords(x: number, y: number): { lat: number, lng: number} | null;
}

type FCwithRef<P = {}, R = {}> = React.FunctionComponent<P & { ref?: React.MutableRefObject<R | undefined> }>;

declare const Globe: FCwithRef<GlobeProps, GlobeMethods>;

export default Globe;
