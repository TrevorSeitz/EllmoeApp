import React from "react";
import { createStackNavigator } from "react-navigation";
import * as Icon from 'react-native-vector-icons'

import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Profile",
          headerLeft: (
            <Icon.Ionicons
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default ProfileStack;
