import fromKapsule from 'react-kapsule';
import GlobeKapsule from 'globe.gl';
import GlobePropTypes from './globe-proptypes';

const Globe = fromKapsule(
  GlobeKapsule,
  {
    methodNames: [ // bind methods
      'pauseAnimation',
      'resumeAnimation',
      'pointOfView',
      'lights',
      'scene',
      'camera',
      'renderer',
      'postProcessingComposer',
      'controls',
      'getGlobeRadius',
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
