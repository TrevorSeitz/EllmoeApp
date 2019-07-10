import React from "react";
// import * as Permissions from 'expo-permissions'
// import * as Location from 'expo-location'
// import Constants from 'expo-constants'
import { Permissions, Location, Constants } from 'react-native'

 const GetCurrentLocation = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") {
    this.setState({
      errorMessage: "Permission to access location was denied"
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  // await AsyncStorage.multiSet([ ["latitude", this.state.latitude], ["longitude", this.state.longitude] ]);
  return(location)
}
export default GetCurrentLocation
