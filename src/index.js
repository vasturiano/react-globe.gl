import fromKapsule from 'react-kapsule';
import GlobeKapsule from 'globe.gl';
import GlobePropTypes from './globe-proptypes';

const Globe = fromKapsule(
  GlobeKapsule,
  undefined,
  [ // bind methods
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
  ['animateIn', 'rendererConfig']
);

Globe.displayName = 'Globe';
Globe.propTypes = GlobePropTypes;

export default Globe;
