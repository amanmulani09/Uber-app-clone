import { StyleSheet, Text, View,StatusBar ,TouchableOpacity,SafeAreaView,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { servicesData,servicesHeroData } from '../constants'
import SuggestionCard from '../Components/SuggestionCard'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HeroSuggestionCard from '../Components/HeroSuggestionCard'

const Services = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* header tab  */}
    <Text style={styles.header}>
      Services
    </Text>

    <Text style={styles.headerSecondary}>Go anywhere, get anything</Text>

    {/* Hero suggestions  */}

    <View style={styles.suggestions}>
          {servicesHeroData.length > 0 ? (
          <FlatList
            data={servicesHeroData}
            keyExtractor={(data)=> data.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=> navigation.navigate(item.navigatePath)}>
                <HeroSuggestionCard {...item}/>
              </TouchableOpacity>
            )}
          />
          ):(
            <ActivityIndicator size="small" />
          )}
      </View>

    {/* suggestions tab */}
    <View style={styles.suggestionContainer}>
      <View style={styles.suggestions}>
          {servicesData.length > 0 ? (
          <FlatList
            data={servicesData}
            keyExtractor={(data)=> data.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=> navigation.navigate(item.navigatePath)}>
                <SuggestionCard {...item}/>
              </TouchableOpacity>
            )}
          />
          ):(
            <ActivityIndicator size="small" />
          )}
      </View>
    </View>

    </SafeAreaView>
  )
}

export default Services

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    fontSize:35,
    marginHorizontal:20,
    fontWeight:'600',
    marginBottom:20,
    letterSpacing:1.01
  },
  headerSecondary:{
    marginHorizontal:20,
    fontSize:20,
    fontWeight:'700',
    letterSpacing:1.1
  },
  textInput:{
    width:wp('90%'),
    backgroundColor:'#e3e8e8',
    height:hp('7%'),
    borderRadius:50,
    marginLeft:wp('5%'),
    fontSize:20,
    paddingLeft:20,
    fontWeight:'600'
  },
  suggestionContainer:{
    width:wp('95%'),
    marginTop:0,
    marginLeft:0
  },
  suggestionHeading:{
    width:wp('90%'),
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:'row',
    marginLeft:20
  },
  suggestions:{
    width:wp('98%'),
    marginTop:0,
    justifyContent:'flex-end'
  }
  })