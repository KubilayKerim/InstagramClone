import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, Image, Pressable } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        backgroundColor: '#59b2ab',
        image: <Image source={require('../assets/images/first.png')} />,
        title: 'Title 1',
        subtitle: 'Cool Description.',
    },
    {
        backgroundColor: '#febe29',
        image: <Image source={require('../assets/images/second.png')} />,
        title: 'Title 2',
        subtitle: 'Other cool stuff',
    },
    {
        backgroundColor: '#22bcb5',
        image: <Image source={require('../assets/images/third.png')} />,
        title: 'Title 3',
        subtitle: 'Can this app get any cooler? Continue to find out!',
    },
  ];

  const slides2 = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../assets/images/first.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/images/second.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions',
      image: require('../assets/images/third.png'),
      backgroundColor: '#22bcb5',
    }
  ];

const Intro = ({ navigation }) => {

    const _renderItem = ({ item }) => {
        return (
            <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
                <Image resizeMode='contain' style={[styles.image, { width:'70%', }]} source={require("../assets/images/logo.png")} />
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    const _onDone = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'BottomTabNavigator' }],
          });
    }

    const _renderNextButton = () => {
        return (
          <View style={styles.buttonBottom}>
            <Text style={styles.buttonText}>İleri</Text>
          </View>
        );
      };

    const _renderDoneButton = () => {
        return (
          <View style={styles.buttonBottom}>
            <Text style={styles.buttonText}>Bitir</Text>
          </View>
        );
      }

  return (
      <SafeAreaView style={{ flex: 1 }}>
          <AppIntroSlider bottomButton={true} renderItem={_renderItem} data={slides2} onDone={_onDone} renderNextButton={_renderNextButton} renderDoneButton={_renderDoneButton}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB',
        },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        },
    title: {
        fontSize: 35,
        color: '#0A8754',
        fontWeight: 'bold',
        },
    image: {
        overflow: 'hidden',
        width: '100%',
        },
    buttonBottom: {
        height:56,
        minWidth:108,
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'#fff',
        fontSize:24,
        color:'#480CA8',
        textAlign:'center'
        },
        buttonText: {
          fontSize:24,
          color:'#480CA8',
          textAlign:'center'
        }
      });

export default Intro;