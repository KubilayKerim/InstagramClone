import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, Image, Pressable, ScrollView, FlatList } from "react-native";

const slides = [
    {
        image: require('../assets/images/first.png'),
        title: 'Title 1',
    },
    {
        image: require('../assets/images/second.png'),
        title: 'Title 2',
    },
    {
        image: require('../assets/images/third.png'),
        title: 'Title 3',
    },
    {
        image: require('../assets/images/first.png'),
        title: 'Title 1',
    },
    {
        image: require('../assets/images/second.png'),
        title: 'Title 2',
    },
    {
        image: require('../assets/images/third.png'),
        title: 'Title 3',
    },
    {
        image: require('../assets/images/first.png'),
        title: 'Title 1',
    },
    {
        image: require('../assets/images/second.png'),
        title: 'Title 2',
    },
    {
        image: require('../assets/images/third.png'),
        title: 'Title 3',
    },
    {
        image: require('../assets/images/first.png'),
        title: 'Title 1',
    },
    {
        image: require('../assets/images/second.png'),
        title: 'Title 2',
    },
    {
        image: require('../assets/images/third.png'),
        title: 'Title 3',
    },
  ];

const Home = ({ navigation }) => {

  return (
      <SafeAreaView>
          <View>
                  <FlatList horizontal={true} showsHorizontalScrollIndicator={false} 
                  contentContainerStyle={{height:130,flexDirection:'row',justifyContent:'center',alignContent:'center', }} 
                   renderItem={
                      ({ item }) => {
                          return (
                              <View style={styles.slideButton}>
                                  <Image source={item.image} style={styles.slideImage} />
                                  <Text>{item.title}</Text>
                              </View>
                          )
                      }}
                      data={slides}
                  />
                  <FlatList 
                  contentContainerStyle={{justifyContent:'center',alignContent:'center', }} 
                   renderItem={
                      ({ item }) => {
                          return (
                              <Pressable style={styles.card} onPress={()=>{navigation.navigate('Details')}}>
                                  <View style={styles.cardButton}>
                                      <Image source={item.image} style={styles.cardImage} />
                                      <Text style={styles.cardText}>{item.title}</Text>
                                      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                      <Text>asda</Text>
                                      <View style={{flexDirection:'row'}}>
                                            <Text>asda</Text>
                                      <Image source={require('../assets/images/calendar.png')} style={{marginLeft:10}} />
                                      </View>
                                      <Image source={require('../assets/images/heart.png')} style={{marginLeft:10}} />

                                      </View>
                                  </View>
                              </Pressable>
                              
                          )
                      }}
                      data={slides}
                  />
   
              {/* <Button
                  title="Go to Details"
                  onPress={() => navigation.navigate("InnerStackNavigator")}
              /> */}
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    slideButton: {
        height: 80, 
        width: 80, 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin:3,
        marginTop:20,
        left:20,  
    },
    slideImage: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
    },
    cardImage: {
        height: '100%',
        width: '100%',
    },
    cardButton: {
        height: 200,
        // width: '90%',
        borderRadius: 20,
        // margin:20,
    },
    cardText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A8754',
    },
    card: {
        height: 300,
        borderRadius: 20,
        margin:20,
        backgroundColor:'white',
        // marginVertical:10,
        overflow: "hidden"

    },
});

export default Home;