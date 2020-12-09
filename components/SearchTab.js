import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

function SearchTab() {
    return (
      <ScrollView style={styles.completeSearchSection} showsVerticalScrollIndicator={false}>

        <View style={styles.searchBarContainer}>
          <Icon name = 'search' size = {30} color = {'#333'} />
          <TextInput placeholder = "Search for ideas" style={styles.searchInput} />
          <Icon name = 'camera' size = {30} color = {'#333'} />
        </View>

        

        <View style={styles.shoppingSpotlightContainer}>
          <Text style={styles.shoppingSpotlightTitle}>
            Shopping spotlight
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} style={styles.shoppingSpotlightScroll} horizontal={true} >
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}  style={styles.shoppingSpotlightBlock} imageStyle={{ resizeMode: 'cover', height: '100%', borderRadius: 10, opacity: 0.7}}>
              <Text style={styles.shppingBlockText}>
                The shop-by-price wish list
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1542992015-4a0b729b1385?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=767&q=80'}}  style={styles.shoppingSpotlightBlock} imageStyle={{ resizeMode: 'cover', height: '100%', borderRadius: 10, opacity: 0.7}}>
              <Text style={styles.shppingBlockText}>
                Black friday deals happening now
              </Text>

            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-1.2.1&auto=format&fit=crop&w=677&q=80'}}  style={styles.shoppingSpotlightBlock} imageStyle={{ resizeMode: 'cover', height: '100%', borderRadius: 10, opacity: 0.7}}>
              <Text style={styles.shppingBlockText}>
                Shop small this weekend
              </Text>

            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=724&q=80'}}  style={styles.shoppingSpotlightBlock} imageStyle={{ resizeMode: 'cover', height: '100%', borderRadius: 10, opacity: 0.7}}>
              <Text style={styles.shppingBlockText}>
                The Pinterest Shop gift guide
              </Text>

            </ImageBackground>
          </ScrollView>
        </View>

        <View style={styles.ideasForYouContainer} >
          <View style={styles.ideasForYouTitleContainer} > 
            <Text style={styles.ideasForYouTitle}>
              Ideas for you
            </Text>
          </View>
          <View style={styles.ideaBlockContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}  style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8, opacity: 0.7}}>
              <Text style={styles.ideaForYouText}>
                UI UX Design
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1599143286278-645439b288fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'}}  style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8, opacity: 0.7}}>
              <Text style={styles.ideaForYouText}>
                Photography
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}  style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8, opacity: 0.7}}>
              <Text style={styles.ideaForYouText}>
                Guitar
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1511367734837-f2956f0d8020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=694&q=80'}}  style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8, opacity: 0.7}}>
              <Text style={styles.ideaForYouText}>
                Music
              </Text>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.shoppingIdeasForYouContainer} >
          <View style={styles.ideasForYouTitleContainer}> 
            <Text style={styles.ideasForYouTitle}>
              Shopping ideas for you
            </Text>
          </View>
          <View style={styles.ideaBlockContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1597502321303-ac7965ad7e8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=853&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Appliances
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Kitchen
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1537212013010-de9c76f8f0ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Furniture
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=731&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Lifestyle
              </Text>
            </ImageBackground>
            <ImageBackground  source={{uri: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}}  style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Electronics
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1552585155-f5c1efa32555?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Hardware
              </Text>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.ideasForYouContainer} >
          <View style={styles.ideasForYouTitleContainer}> 
            <Text style={styles.ideasForYouTitle}>
              Popular on Pinterest
            </Text>
          </View>
          <View style={styles.ideaBlockContainer}>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1509456592530-5d38e33f3fdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Thanksgiving quotes
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Character art
              </Text>
            </ImageBackground>
            <ImageBackground    style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Grunge hair
              </Text>
            </ImageBackground>
            <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'}}   style={styles.ideaBlock} imageStyle={{width: '100%', borderRadius: 8}}>
              <Text style={styles.ideaForYouText}>
                Anime
              </Text>
            </ImageBackground>
          </View>
        </View>
        

      </ScrollView>
    )
  };


const styles = StyleSheet.create({
    completeSearchSection: {
      height: '100%',
      width: '100%',
      backgroundColor: '#fff'
    },
    searchBarContainer: {
      height: 55,
      width: '92%',
      backgroundColor: '#f4f4f4',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 17,
      borderRadius: 65,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 19,
      paddingRight: 19,
      marginBottom: 27
    },
    searchInput: {
      width: '82%',
      paddingLeft: 15,
      fontSize: 15,
      fontFamily: 'sans-serif',
      color: '#333'
    },
    ideasForYouContainer: {
      height: 310,
      backgroundColor: '#fff',
      width: '100%'
    },
    ideasForYouTitleContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 17
    },
    ideasForYouTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#333'
    },
    ideaBlockContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      // paddingLeft: '5%',
      // paddingRight: '5%'
    },
    ideaBlock: {
      height: 110,
      width: '43%',
      backgroundColor:'#000',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2%',
      borderRadius: 8
    },
    shoppingIdeasForYouContainer: {
      height: 440,
      backgroundColor: '#fff',
      width: '100%'
    },
    shoppingSpotlightContainer: {
      height: 305,
      width: '100%',
      backgroundColor: '#fff'
    },
    shoppingSpotlightTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#333',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 22,
      paddingTop: 10
    },
    shoppingSpotlightScroll: {
      height: 'auto',
      width: '100%',
      paddingHorizontal: 13,
      paddingVertical: 5
    },
    shoppingSpotlightBlock: {
      height: 220,
      width: 300,
      backgroundColor: '#000',
      margin: 10,
      marginTop: 0,
      borderRadius: 10,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingLeft: 50,
      paddingRight: 50,
      // paddingBottom: 30
    },
    shppingBlockText: {
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center',
      color: '#fff',
      paddingBottom: 35
    },
    ideaForYouText: {
      fontSize: 17,
      fontWeight: '700',
      color: '#fff'
    }
  })


export default SearchTab;