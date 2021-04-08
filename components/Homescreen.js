import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={[styles.city, textColor]}>{item.name}</Text>

     
      <Text style={[styles.temp, textColor]}>
        {parseInt(item.main.temp - 273.15)+"\xB0c" }
      </Text>
    </View>
    <Text style={[styles.sub]}>{item.weather[0].main}</Text>

  </TouchableOpacity>
);

const Homescreen = ({navigation}) => {



  const [selectedId, setSelectedId] = useState(null);

  const [cityData, setCityData] = useState([]);

  useEffect(() => {
      
    fetch(
      "http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=f0062ad623887f0e5731ad205441e104"
    )
      .then((res) => {
        console.log(
          "res",
          res.json().then((data) => {
            console.log("data", data.list);

            setCityData(data.list);
          })
        );
      })
      .catch((err) => {});
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#e8e8e8" : "#fff";
    const color = item.id === selectedId ? "black" : "black";

    return (
      <Item
        item={item}
        onPress={()=>{
            navigation.navigate('Aboutscreen',{item:item})
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cityData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  city: {
    fontSize: 32,
  },
  sub: {
    fontSize: 18,
    color:"#555"
  },
  temp: {
    fontSize: 20,
  },
});
export default Homescreen;