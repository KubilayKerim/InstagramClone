import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, Pressable } from "react-native";

const Details = ({ navigation }) => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
              <Image style={styles.image} source={require('../assets/images/image.png')} />
              <View style={styles.container}>
                  <View style={styles.subContainer}>
                      <Text style={styles.title}>Title</Text>
                      <Pressable style={{ borderRadius: 60, borderColor: '#0A8754', borderWidth: 2, width: 100, marginBottom: 20, }}>
                          <Text style={{ textAlign: 'center' }}>Title</Text>
                      </Pressable>
                      <Text style={styles.text}>
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                          Name: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.png
                      </Text>
                  </View>
              </View>
          </ScrollView>
      </SafeAreaView>
  );
}

export default Details;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        marginBottom:-20
    },
    container: {
        flexGrow: 1, 
        backgroundColor: 'white', 
        borderRadius: 20, 
    },
    subContainer: {
        margin:30,
    },
    title: {
        fontSize: 30, 
        color: '#0A8754',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
    }
    });
