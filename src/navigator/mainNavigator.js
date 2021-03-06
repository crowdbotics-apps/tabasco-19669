import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings92201Navigator from '../features/Settings92201/navigator';
import UserProfile92194Navigator from '../features/UserProfile92194/navigator';
import Settings92193Navigator from '../features/Settings92193/navigator';
import Settings92191Navigator from '../features/Settings92191/navigator';
import SignIn292189Navigator from '../features/SignIn292189/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings92201: { screen: Settings92201Navigator },
UserProfile92194: { screen: UserProfile92194Navigator },
Settings92193: { screen: Settings92193Navigator },
Settings92191: { screen: Settings92191Navigator },
SignIn292189: { screen: SignIn292189Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
