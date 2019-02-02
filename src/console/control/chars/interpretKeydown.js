import { getAction } from './getAction';
import { getKeyChord } from './getKeyChord';

function interpretKeydown(event) {
  return getAction(getKeyChord(event));
}

export { interpretKeydown };
