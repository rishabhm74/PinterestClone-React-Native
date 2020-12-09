import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';

function UserTab() {
    return (
        <ScrollView style={styles.mainUserSection}showsVerticalScrollIndicator={false} >
            <View style={styles.userSettingsNavContainer}>
                <Icon name='settings' size = {27} color={'#333'} />
            </View>
            <View style={styles.userAvatarContainer} >
                <View style={styles.userAvatarInitial}>
                    <Text style={styles.userInital}>
                        Q
                    </Text>
                </View>

                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>
                        Qwerty
                    </Text>
                </View>

                <View style={styles.userEmailContainer}>
                    <Text style={styles.userEmail}>
                        @qwerty2272
                    </Text>
                </View>

                <View style={styles.userFollowersContainer}>
                    <Text style={styles.userFollowers}>
                        4 followers
                    </Text>
                    <View style={styles.followersSeparator} />
                    <Text style={styles.userFollowing}>
                        32 following
                    </Text>
                </View>
                
            </View>


            <View style={styles.searchUserPinsMainContainer}>

                <View style={styles.searchUserPinsBarMainContainer}>
                    <View style={styles.searchUserPinsSearchBar}>
                        <Icon name='search' size={27} color={'#333'} />
                        <TextInput style={styles.searchYourPinsInput} placeholder='Search your Pins' />
                    </View>
                    <Icon name='add' size={30} color={'#333'} />
                </View>

                <View style={styles.myPinsContainer}>
                    
                    <View style={styles.myPinBlockContainer}>
                        <Image source={{uri: 'https://images.unsplash.com/photo-1606423213493-2298fd1fa990?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}} style={styles.myPinBlockPinsThumbnailHolder} />
                        <Text style={styles.myPinsBoardName}>
                            All Pins
                        </Text>
                        <View style={styles.aboutPinsContainer}>
                            <Text style={styles.pinsCountContainer}>
                                55 Pins
                            </Text>
                            <Text style={styles.pinsTimeContainer}>
                                2d
                            </Text>
                        </View>
                    </View>


                    <View style={styles.myPinBlockContainer}>
                        <Image source={{uri: 'https://images.unsplash.com/photo-1589471861110-1144cd568519?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80'}}  style={styles.myPinBlockPinsThumbnailHolder} />
                        <Text style={styles.myPinsBoardName}>
                            Guitars
                        </Text>
                        <View style={styles.aboutPinsContainer}>
                            <Text style={styles.pinsCountContainer}>
                                12 Pins
                            </Text>
                            <Text style={styles.pinsTimeContainer}>
                                2d
                            </Text>
                        </View>
                    </View>

                    <View style={styles.myPinBlockContainer}>
                        <Image source={{uri: 'https://images.unsplash.com/photo-1526773506473-d0fd316dd17d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=491&q=80'}}  style={styles.myPinBlockPinsThumbnailHolder} />
                        <Text style={styles.myPinsBoardName}>
                            Photography
                        </Text>
                        <View style={styles.aboutPinsContainer}>
                            <Text style={styles.pinsCountContainer}>
                                43 Pins
                            </Text>
                            <Text style={styles.pinsTimeContainer}>
                                5d
                            </Text>
                        </View>
                    </View>
                    

                </View>


            </View>


        </ScrollView>
    )
};


const styles = StyleSheet.create({
    mainUserSection: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    userSettingsNavContainer: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    userAvatarContainer: {
        height: 300,
        backgroundColor: '#fff',
        width: '100%'
    },
    userAvatarInitial: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: '#f4f4f4',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems:'center'
    },
    userInital: {
        fontSize: 43,
        fontWeight: '500',
        color: '#333',
        fontFamily: 'sans-serif',
        textTransform: 'capitalize'
    },
    userNameContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    },
    userName: {
        fontFamily: 'sans-serif',
        fontSize: 35,
        fontWeight: '700',
        color: '#333',
        textTransform: 'capitalize'
    },
    userEmailContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8
    },
    userEmail: {
        fontSize: 14,
        color: '#888'
    },
    userFollowersContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 13.5
    },
    followersSeparator: {
        height: 3,
        width: 3,
        borderRadius: 4,
        backgroundColor: '#414141',
        marginLeft: 8,
        marginRight: 8
    },
    userFollowers: {
        fontFamily: 'sans-serif',
        fontSize: 14,
        fontWeight: '500',
        color: '#414141'
    },
    userFollowing: {
        fontFamily: 'sans-serif',
        fontSize: 14,
        fontWeight: '700',
        color: '#333'
    },
    searchUserPinsMainContainer: {
        minHeight: 500,
        width: '100%',
        backgroundColor: '#fff'
    },
    searchUserPinsBarMainContainer: {
        height: 65,
        width: '100%',
        backgroundColor: '#fff',
        paddingRight: 13,
        paddingLeft: 13,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchUserPinsSearchBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '87%',
        backgroundColor: '#f4f4f4',
        marginRight: '2%',
        paddingLeft: 17,
        borderRadius: 65
    },
    searchYourPinsInput: {
        paddingLeft: 12,
        width: '85%'
    },
    myPinsContainer: {
        minHeight: 250,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingBottom: 100,
        paddingLeft: '4%'
    },
    myPinBlockContainer: {
        height: 195,
        width: '44%',
        margin: '2%',
        backgroundColor: '#fff'
    },
    aboutPinsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 3,
        paddingLeft: 5
    },
    myPinBlockPinsThumbnailHolder: {
        height: 130,
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 13
    },
    myPinsBoardName: {
        fontWeight: '700',
        color: '#333',
        fontSize: 18,
        paddingLeft: 5
    },
    pinsCountContainer: {
        color: '#333',
        fontSize: 14,
        marginRight: 10
    },
    pinsTimeContainer: {
        fontSize: 12,
        color: '#9c9c9c'
    }
  })


export default UserTab;