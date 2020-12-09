import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



function UpdateTab() {
  return (
    <ScrollView style={styles.updatesSectionMainContainer} showsVerticalScrollIndicator={false} >
      
      <View style={styles.updatesContainerOuter}>

        <View style={styles.updateBlockContainer}>
          <View style={styles.updateBlockMain} />
          <Text style={styles.updateTextContainer}>
            Lorem, ipsum dolor sit amet 
          </Text>
        </View>

        <View style={styles.updateBlockContainer}>
          <View style={styles.updateBlockMain} />
          <Text style={styles.updateTextContainer}>
            Ipsam eos saepe. Deleniti, architecto 
          </Text>
        </View>

        <View style={styles.updateBlockContainer}>
          <View style={styles.updateBlockMain} />
          <Text style={styles.updateTextContainer}>
            Amet consectetur adipisicing eli
          </Text>
        </View>

        <View style={styles.updateBlockContainer}>
          <View style={styles.updateBlockMain} />
          <Text style={styles.updateTextContainer}>
            Maiores veritatis ipsam eos s
          </Text>
        </View>

        <View style={styles.updateBlockContainer}>
          <View style={styles.updateBlockMain} />
          <Text style={styles.updateTextContainer}>
            Ritatis ipsam eos saepe. Deleniti, architecto.
          </Text>
        </View>

      </View>

    </ScrollView>
  )
}

function MessageTab() {
  return (
    <ScrollView style={styles.messagesSectionMainContainer} showsVerticalScrollIndicator={false} >
      <View style={styles.shareTitleContainer}>
        <Text style={styles.shareTitle}>
          Share ideas with your {'\n'} friends
        </Text>
      </View>

      <View style={styles.searchPeopleBarContainer}>
        <Icon name='search' size={27} color={'#333'} />
        <TextInput style={styles.searchPeopleInput} placeholder='Search by nme or email' />
      </View>

      <View style={styles.peopleListContainer}>


        <View style={styles.peopleBlock}>
          <View style={styles.peopleNameAndPictureContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80'}}   imageStyle={{width: '100%', borderRadius: 65}} style={styles.peopleDpContainer} />
            <Text style={styles.peopleNameContainer}>
              Jared Dunn
            </Text>
          </View>
          <TouchableOpacity style={styles.messagePeopleButton}>
            <Text style={styles.peopleMessageText}>
              Message
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleBlock}>
          <View style={styles.peopleNameAndPictureContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'}}   imageStyle={{width: '100%', borderRadius: 65}} style={styles.peopleDpContainer} />
            <Text style={styles.peopleNameContainer}>
              Richard
            </Text>
          </View>
          <TouchableOpacity style={styles.messagePeopleButton}>
            <Text style={styles.peopleMessageText}>
              Message
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleBlock}>
          <View style={styles.peopleNameAndPictureContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80'}}   imageStyle={{width: '100%', borderRadius: 65}} style={styles.peopleDpContainer} />
            <Text style={styles.peopleNameContainer}>
              Dinesh
            </Text>
          </View>
          <TouchableOpacity style={styles.messagePeopleButton}>
            <Text style={styles.peopleMessageText}>
              Message
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleBlock}>
          <View style={styles.peopleNameAndPictureContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'}}   imageStyle={{width: '100%', borderRadius: 65}} style={styles.peopleDpContainer} />
            <Text style={styles.peopleNameContainer}>
              Gilfoyle
            </Text>
          </View>
          <TouchableOpacity style={styles.messagePeopleButton}>
            <Text style={styles.peopleMessageText}>
              Message
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  )
}


const UpdatesTabNavigator = createMaterialTopTabNavigator();


function UpdatesTab() {
    return (
      <ScrollView style = {styles.section} showsVerticalScrollIndicator={false} >
        <UpdatesTabNavigator.Navigator tabBarOptions = {{
          style: {
            paddingTop: 10,
            paddingBottom: 15,
            width: '55%',
            marginLeft: 82.5,
            elevation: 0,
            flex: 1,
            backgroundColor: '#fff'
          },
          width: Dimensions.get('window').width,
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
        }}   >


          <UpdatesTabNavigator.Screen name = 'Messages' component = {MessageTab} />
          <UpdatesTabNavigator.Screen name = 'Updates' component = {UpdateTab} />

        </UpdatesTabNavigator.Navigator>
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
    updatesSectionMainContainer: {
      minHeight: 300,
      width: '100%',
      backgroundColor: '#fff'
    },
    messagesSectionMainContainer: {
      minHeight: 500,
      width: '100%',
      backgroundColor: '#fff',
      paddingBottom: 90
    },
    shareTitleContainer: {
      height: 220,
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 22
    },
    shareTitle: {
      textAlign: 'center',
      fontWeight: '700',
      color: '#333',
      fontSize: 28
    },
    searchPeopleBarContainer: {
      flexDirection: 'row',
      backgroundColor: '#f4f4f4',
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 55,
      borderRadius: 55, 
      alignItems: 'center',
      paddingLeft: 18
    },
    searchPeopleInput: {
      width: '88%',
      paddingLeft: 12,
      color: '#333',
      fontSize: 14
    },
    peopleListContainer: {
      width: '100%',
      height: 'auto',
      padding: 20,
      backgroundColor: '#fff',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 35
    },
    peopleBlock: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    peopleNameAndPictureContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    peopleDpContainer: {
      height: 65,
      width: 65,
      backgroundColor: '#dbdbdb',
      borderRadius: 65
    },
    peopleNameContainer: {
      color: '#333',
      fontWeight: '700',
      fontSize: 17,
      marginLeft: 15
    },
    messagePeopleButton: {
      backgroundColor: '#E60023',
      padding: 15,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 30
    },
    peopleMessageText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16
    },
    updatesContainerOuter: {
      minHeight: 300,
      width: '100%',
      backgroundColor: '#fff',
      padding: 25,
      paddingTop: 10,
      paddingBottom: 100
    },
    updateBlockContainer: {
      height: 'auto',
      width: '100%',
      marginBottom: 27
    },
    updateBlockMain: {
      height: 200,
      width: '100%',
      backgroundColor: '#f4f4f4',
      marginBottom: 10,
      borderRadius: 10
    },
    updateTextContainer: {
      color: '#333',
      fontSize: 13.5,
      paddingLeft: 5
    }
  })


export default UpdatesTab;