import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

const startTabs = () => {
  // Promise.all([
  //   Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
  //   Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30),
  //   Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  // ]).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'awesome-places.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place',
        navigatorButtons: {
          leftButtons: [
            {
              title: 'Menu',
              id: 'sideDrawerToggle'
            }
          ]
        }
      },
      {
        screen: 'awesome-places.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place',
        navigatorButtons: {
          leftButtons: [
            {
              title: 'Menu',
              id: 'sideDrawerToggle'
            }
          ]
        }
      }
    ],
    tabsStyle: {
      tabBarSelectedButtonColor: 'orange'
    },
    appStyle: {
      tabBarSelectedButtonColor: 'orange'
    },
    drawer: {
      left: {
        screen: 'awesome-places.SideDrawer'
      }
    }
  });
  // });
};

export default startTabs;
