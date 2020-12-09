import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




function AllTab() {
  return (
    <View style={styles.completeHomeSection} >
      <View style={styles.homeTabAllView} >

        <View style={styles.homeAllLeft}> 

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606533127214-92342a35779e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=358&q=80'}} style={styles.homeAllBlockImage} style={{height:140, borderRadius: 10}}  />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Best drones on the market
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1605365068021-33a03339a441?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=625&q=80'}} style={styles.homeAllBlockImage} style={{height:180, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Stunning buildings
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}} style={styles.homeAllBlockImage} style={{height:280, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Dell XPS
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606553451420-7caf4a83048f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80'}} style={styles.homeAllBlockImage} style={{height:100, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606425288528-4cebbfc69de7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}} style={styles.homeAllBlockImage} style={{height:220, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Beautiful home decor ideas
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

        </View>

        <View style={styles.homeAllRight}>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606464957892-50eccae7a52b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}} style={styles.homeAllBlockImage} style={{height:300, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Photograph of the day
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606498678391-ddef6a7c7fe3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}} style={styles.homeAllBlockImage} style={{height:100, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606479459736-dfc38862bda4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}} style={styles.homeAllBlockImage} style={{height:200, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Automobiles
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          <View style={styles.homeAllBlock}>
            <Image  source={{uri: 'https://images.unsplash.com/photo-1606423213493-2298fd1fa990?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}} style={styles.homeAllBlockImage} style={{height:200, borderRadius: 10}} />
            <View style={styles.aboutPinContainer}>
              <Text style={styles.aboutPinText}>
                Music to touch soul
              </Text>
              <Image source={{uri: 'https://icon-library.net//images/three-horizontal-dots-icon/three-horizontal-dots-icon-5.jpg'}}  style={styles.aboutPinIcon} />
            </View>
          </View>

          
          

        </View>

      </View>
    </View>
  )
}

function TodayTab() {

  function todaysDate() {
    function getMonth() {
      var monthIndex = new Date().getUTCMonth();
      var months = [
          "January", "February", "March", "April", "May",
          "June", "July", "August", "September", "October",
          "November", "December"
      ];
      return(months[monthIndex]);
    }
    var month =  getMonth();
    var date = new Date().getDate();
    var year = new Date().getFullYear();

    var finalDate = month + ' ' + date + ', ' + year;
    return(finalDate);
  }

  return (
    <View style={styles.completeHomeSection} >
      <ScrollView style={styles.homeTodayScrollView} showsVerticalScrollIndicator={false}>

        <View style={styles.aboutTodayContainer}> 
          <Text style={styles.todaysDateContainer}>
            {todaysDate()}
          </Text>
          <Text style={styles.ourFavoutiteIdeasTitle}>
            Our favourite ideas today
          </Text>
        </View>

        <View style={styles.todaysIdeasBlockContainer}>

        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80'}} style={styles.todaysIdeasBlock} imageStyle={{width: '100%', borderRadius: 25}}>
            <Text style={styles.todaysIdeasCategory}>
              Good, clean fun
            </Text>
            <Text style={styles.todaysIdeasText}>
              Family game night ideas for healthy dose of competition
            </Text>
          </ImageBackground>

          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}} style={styles.todaysIdeasBlock} imageStyle={{width: '100%', borderRadius: 25}}>
            <Text style={styles.todaysIdeasCategory}>
              Healthy and delicious
            </Text>
            <Text style={styles.todaysIdeasText}>
              Light meals to recover from holiday indulgence
            </Text>
          </ImageBackground>

          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1576326040382-541f48980626?ixlib=rb-1.2.1&auto=format&fit=crop&w=617&q=80'}} style={styles.todaysIdeasBlock} imageStyle={{width: '100%', borderRadius: 25}}>
            <Text style={styles.todaysIdeasCategory}>
              Light it up
            </Text>
            <Text style={styles.todaysIdeasText}>
              Spectacular Christmas tree decorations to
            </Text>
          </ImageBackground>

          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1537907690979-ee8e01276184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'}} style={styles.todaysIdeasBlock} imageStyle={{width: '100%', borderRadius: 25}}>
            <Text style={styles.todaysIdeasCategory}>
              Backyard matrimony
            </Text>
            <Text style={styles.todaysIdeasText}>
              Intimate wedding ceremonies to inspire your nuptials
            </Text>
          </ImageBackground>

          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1585104368639-0933bee8e8af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'}} style={styles.todaysIdeasBlock} imageStyle={{width: '100%', borderRadius: 25}}>
            <Text style={styles.todaysIdeasCategory}>
              Boost your microbiome
            </Text>
            <Text style={styles.todaysIdeasText}>
              The best probiotic skincare to add to your kit
            </Text>
          </ImageBackground>

          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1529905361811-8a9a132cd390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}} style={styles.todaysIdeasBlock} imageStyle={{width: '100%', borderRadius: 25}}>
            <Text style={styles.todaysIdeasCategory}>
              Artist of the week
            </Text>
            <Text style={styles.todaysIdeasText}>
              The colorful art of Takashi Murakami
            </Text>
          </ImageBackground>

        </View>


      </ScrollView>
    </View>
  )
}

function FollowingTab() {
  return (
    <View style={styles.completeHomeSection} >
      <Text>
        following
      </Text>
    </View>
  )
}




const HomeTabNavigator = createMaterialTopTabNavigator();


function HomeTab() {
    return (
      <ScrollView style = {styles.section} showsVerticalScrollIndicator={false} >
        <HomeTabNavigator.Navigator tabBarOptions = {{
          style: {
            paddingTop: 10,
            paddingBottom: 15,
            width: '95%',
            marginLeft: 20,
            elevation: 0
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#a8a8a8',
          tabStyle: {
            borderRadius: 70,
            width: 'auto'
          },
          indicatorStyle: {
            height: 45,
            marginBottom: 15,
            borderRadius: 30,
            backgroundColor: '#E60023'
          },
          labelStyle: {
            fontSize: 13,
            fontFamily: 'sans-serif',
            fontWeight: '700',
            paddingLeft: 10,
            paddingRight: 10
          }
        }} initialRouteName={AllTab} >

          <HomeTabNavigator.Screen name = 'All' component = {AllTab} />

          <HomeTabNavigator.Screen name = 'Today' component = {TodayTab} />

          <HomeTabNavigator.Screen name = 'Following' component = {FollowingTab} />

          

        </HomeTabNavigator.Navigator>
      </ScrollView>
    )
  };


const styles = StyleSheet.create({
  section: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      paddingBottom: 180
    },
    completeHomeSection: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#fff'
    },
    homeTodayScrollView: {
      height: 'auto',
      minHeight: 400,
      width: '100%',
      backgroundColor: '#fff',
      paddingTop: 5,
      paddingBottom: 100
    },
    aboutTodayContainer: {
      backgroundColor: '#fff',
      width: '100%',
      height: 90,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom:15,
      marginBottom: 15
    },
    ourFavoutiteIdeasTitle: {
      color: '#333',
      fontSize: 26,
      fontWeight: '700'
    },
    todaysDateContainer: {
      color: '#333',
      fontSize: 16,
      marginBottom: 8
    },
    todaysIdeasBlockContainer: {
      width: '100%',
      height: 'auto',
      minHeight: 500,
      backgroundColor: '#fff',
      paddingBottom: 80
    },
    todaysIdeasBlock: {
      height: 250,
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 25,
      elevation: 5,
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 35,
      marginBottom: 45,
    },
    todaysIdeasCategory: {
      fontSize: 15,
      color: '#fff',
      textAlign: 'center'
    },
    todaysIdeasText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 7,
      paddingLeft: 40,
      paddingRight: 40
    },
    homeTabAllView: {
      width: '100%',
      height: 'auto',
      paddingBottom: 60,
      flexDirection: 'row',
      backgroundColor: '#fff'
      
    },
    homeAllLeft: {
      height: 'auto',
      width: '50%',
      alignItems: 'flex-end',
      paddingRight: '2%',
      justifyContent: 'flex-start'
    },
    homeAllRight: {
      height: 'auto',
      width: '50%',
      alignItems: 'flex-start',
      paddingLeft: '2%',
      justifyContent: 'flex-start'
    },
    homeAllBlock: {
      width: '89%',
      height: 'auto',
      marginBottom: '4%'
    },
    homeAllBlockImage: {
      width: '100%',
      height: 'auto',
      minHeight: 120,
      borderRadius: 10
    },
    aboutPinContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: 10,
      padding: 7,
      paddingLeft: 3
    },
    aboutPinText: {
      width: '80%',
      textAlign: 'left',
      color: '#333',
      fontSize: 13
    },
    aboutPinIcon: {
      width: 20,
      height: 5
    }
    
    
  })


export default HomeTab;