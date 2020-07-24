import fromKapsule from 'react-kapsule';
import GlobeKapsule from 'globe.gl';
import GlobePropTypes from './globe-proptypes';

const Globe = fromKapsule(
  GlobeKapsule,
  {
    methodNames: [ // bind methods
      'globeMaterial',
      'pauseAnimation',
      'resumeAnimation',
      'pointOfView',
      'scene',
      'camera',
      'renderer',
      'postProcessingComposer',
      'controls',
      'getCoords',
      'getScreenCoords',
      'toGeoCoords',
      'toGlobeCoords'
    ],
    initPropNames: [
      'animateIn',
      'waitForGlobeReady',
      'rendererConfig'
    ]
  }
);

Globe.displayName = 'Globe';
Globe.propTypes = GlobePropTypes;

export default Globe;
