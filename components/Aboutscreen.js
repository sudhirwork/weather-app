// Aboutscreen.js
import React, { Component } from "react";
import { Button, View, Text, Image,StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

const DetailsScreen = ({ route, navigation }) => {
  const item = navigation.getParam("item");

  console.log(item);
  return (
    <>
      <View style={{ position: "relative", height: "60%" }}>
        <MapView
          style={{ left: 0, right: 0, top: 0, bottom: 0, position: "absolute" }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: item.coord.lat,
            longitude: item.coord.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            key={"main"}
            coordinate={{
              latitude: item.coord.lat,
              longitude: item.coord.lon,
            }}
           
            title={item.name}
            description={item.name}
          >
              <View style={{alignItems:"center"}}>
              <Image
    source={require('../assets/marker.png')}
    style={{width: 40, height: 40}}
    resizeMode="contain"
  />
              <Text>{item.name}</Text>
                  </View>
          
              </Marker>
        </MapView>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: "40%",
          paddingTop: 15,
          paddingHorizontal: 25,
        }}
      >
                   <View style={{ flexDirection: "row",justifyContent:"space-between" }}>

        <View style={{ flexDirection: "column" }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.weather[0].description}</Text>
         
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.detail_name}>Humidity:</Text>
            <Text style={styles.description}>{item.main.humidity}%</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.detail_name}>Wind Speed:</Text>
            <Text style={styles.description}>{item.wind.speed} m/s</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.detail_name}>Max Temp:</Text>
            <Text style={styles.description}>
              {parseInt(item.main.temp_max - 273.15) + "\xB0c"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.detail_name}>Min Temp:</Text>
            <Text style={styles.description}>
              {parseInt(item.main.temp_min - 273.15) + "\xB0c"}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>

<View style={{alignItems:"center"}}>

<Text style={styles.tempmain}>

{parseInt(item.main.temp-273.15) + "\xB0c"}

</Text>


        <Image
 source={{uri: 
    'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'
     }}    style={{width: 100, height: 100}}
    resizeMode="contain"
  />


</View>
        </View>

        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 5,
  },
  detail_name: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 5,
    marginRight: 5,
  },
  tempmain:{
    fontSize: 24,
    fontWeight: "600",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default DetailsScreen;
