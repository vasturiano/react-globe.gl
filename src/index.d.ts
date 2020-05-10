import * as React from 'react';
import { Scene, Camera, WebGLRenderer, Object3D, MeshPhongMaterial } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ConfigOptions, GlobeInstance as GlobeKapsuleInstance } from 'globe.gl';

type Accessor<In, Out> = Out | string | ((obj: In) => Out);
type ObjAccessor<T> = Accessor<object, T>;
type HexBinAccessor<T> = Accessor<HexBin, T>;

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

export interface GlobeProps extends ConfigOptions {
  // Container layout
  width?: number;
  height?: number;
  backgroundColor?: string;
  backgroundImageUrl?: string | null;

  // Globe layer
  globeImageUrl?: string | null;
  bumpImageUrl?: string | null;
  showAtmosphere?: boolean;
  showGraticules?: boolean;

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
  pointLabel?: ObjAccessor<string>;
  onPointClick?: (point: object) => void;
  onPointRightClick?: (point: object) => void;
  onPointHover?: (point: object | null, prevPoint: object | null) => void;

  // Arcs layer
  arcsData?: object[];
  arcStartLat?: ObjAccessor<number>;
  arcStartLng?: ObjAccessor<number>;
  arcEndLat?: ObjAccessor<number>;
  arcEndLng?: ObjAccessor<number>;
  arcColor?: ObjAccessor<string | string[]>;
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
  arcLabel?: ObjAccessor<string>;
  onArcClick?: (arc: object) => void;
  onArcRightClick?: (arc: object) => void;
  onArcHover?: (arc: object | null, prevArc: object | null) => void;

  // Polygons layer
  polygonsData?: object[];
  polygonGeoJsonGeometry?: ObjAccessor<GeoJsonGeometry>;
  polygonCapColor?: ObjAccessor<string>;
  polygonSideColor?: ObjAccessor<string>;
  polygonStrokeColor?: ObjAccessor<string | boolean | null>;
  polygonAltitude?: ObjAccessor<number>;
  polygonsTransitionDuration?: number;
  polygonLabel?: ObjAccessor<string>;
  onPolygonClick?: (polygon: object) => void;
  onPolygonRightClick?: (polygon: object) => void;
  onPolygonHover?: (polygon: object | null, prevPolygon: object | null) => void;

  // Paths layer
  pathsData?: object[];
  pathPoints?: ObjAccessor<any[]>;
  pathPointLat?: Accessor<any, number>;
  pathPointLng?: Accessor<any, number>;
  pathPointAlt?: Accessor<any, number>;
  pathResolution?: number;
  pathColor?: ObjAccessor<string | string[]>;
  pathStroke?: ObjAccessor<number | null>;
  pathDashLength?: ObjAccessor<number>;
  pathDashGap?: ObjAccessor<number>;
  pathDashInitialGap?: ObjAccessor<number>;
  pathDashAnimateTime?: ObjAccessor<number>;
  pathTransitionDuration?: number;
  pathLabel?: ObjAccessor<string>;
  onPathClick?: (path: object) => void;
  onPathRightClick?: (path: object) => void;
  onPathHover?: (path: object | null, prevPath: object | null) => void;

  // Hex Bin layer
  hexBinPointsData?: object[];
  hexBinPointLat?: ObjAccessor<number>;
  hexBinPointLng?: ObjAccessor<number>;
  hexBinPointWeight?: ObjAccessor<number>;
  hexBinResolution?: number;
  hexMargin?: HexBinAccessor<number>;
  hexAltitude?: HexBinAccessor<number>;
  hexTopColor?: HexBinAccessor<string>;
  hexSideColor?: HexBinAccessor<string>;
  hexBinMerge?: boolean;
  hexTransitionDuration?: number;
  hexLabel?: HexBinAccessor<string>;
  onHexClick?: (hex: HexBin) => void;
  onHexRightClick?: (hex: HexBin) => void;
  onHexHover?: (hex: HexBin | null, prevHex: HexBin | null) => void;

  // Hexed Polygons layer
  hexPolygonsData?: object[];
  hexPolygonGeoJsonGeometry?: ObjAccessor<GeoJsonGeometry>;
  hexPolygonColor?: ObjAccessor<string>;
  hexPolygonAltitude?: ObjAccessor<number>;
  hexPolygonResolution?: ObjAccessor<number>;
  hexPolygonMargin?: ObjAccessor<number>;
  hexPolygonsTransitionDuration?: number;
  hexPolygonLabel?: ObjAccessor<string>;
  onHexPolygonClick?: (polygon: object) => void;
  onHexPolygonRightClick?: (polygon: object) => void;
  onHexPolygonHover?: (polygon: object | null, prevPolygon: object | null) => void;

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
  labelLabel?: ObjAccessor<string>;
  onLabelClick?: (label: object) => void;
  onLabelRightClick?: (label: object) => void;
  onLabelHover?: (label: object | null, prevLabel: object | null) => void;

  // Custom layer
  customLayerData?: object[];
  customThreeObject?: Object3D | string | ((d: object, globeRadius: number) => Object3D);
  customThreeObjectUpdate?: string | ((obj: Object3D, objData: object, globeRadius: number) => void);
  customLayerLabel?: ObjAccessor<string>;
  onCustomLayerClick?: (obj: object) => void;
  onCustomLayerRightClick?: (obj: object) => void;
  onCustomLayerHover?: (obj: object | null, prevObj: object | null) => void;

  // Render control
  enablePointerInteraction?: boolean;
  onZoom?: (pov: GeoCoords) => void;
}

export interface GlobeMethods {
  // Globe layer
  globeMaterial(): MeshPhongMaterial;

  // Render control
  pointOfView(): GeoCoords;
  pointOfView(pov: { lat?: number, lng?: number, altitude?: number }, transitionMs?: number): GlobeKapsuleInstance;
  pauseAnimation(): GlobeKapsuleInstance;
  resumeAnimation(): GlobeKapsuleInstance;
  scene(): Scene;
  camera(): Camera;
  renderer(): WebGLRenderer;
  postProcessingComposer(): EffectComposer;
  controls(): object;

  // Utilities
  getCoords(lat: number, lng: number, altitude?: number): CartesianCoords;
  toGeoCoords(coords: CartesianCoords): GeoCoords;
}

type FCwithRef<P = {}, R = {}> = React.FunctionComponent<P & { ref?: React.MutableRefObject<R | undefined> }>;

declare const Globe: FCwithRef<GlobeProps, GlobeMethods>;

export default Globe;
