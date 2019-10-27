import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Public from './src/screens';

const Apps = createSwitchNavigator({
  Public: Public,
});

export default createAppContainer(Apps);
