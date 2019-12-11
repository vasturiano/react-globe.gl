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
      'scene',
      'camera',
      'renderer',
      'controls',
      'getCoords',
      'toGeoCoords'
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
