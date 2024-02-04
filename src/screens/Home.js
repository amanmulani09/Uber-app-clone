import { SafeAreaView, StyleSheet, Text, View,TextInput, ActivityIndicator,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import { SuggestionsData } from '../constants';
import SuggestionCard from '../Components/SuggestionCard';
const Home = ({navigation}) => {
  const isFocused= useIsFocused();
  return (
    <SafeAreaView style={styles.container}>
      {/* header tab  */}
      <Text style={styles.header}>
        Uber
      </Text>

      {/* inputer tab  */}
      <TextInput 
      placeholder='Enter pick-up location'
      placeholderTextColor="black"
      style={styles.textInput}
      />

      {/* suggestions tab */}
      <View style={styles.suggestionContainer}>
        <View style={styles.suggestionHeading}>
          <Text style={styles.suggestionsText}>Suggestions</Text>
          <Text style={styles.seeAllText} onPress={()=> navigation.navigate('Services')}>See all</Text>
        </View>

        <View style={styles.suggestions}>
            {SuggestionsData.length > 0 ? (
            <FlatList
              data={SuggestionsData}
              keyExtractor={(data)=> data.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate(item.navigatePath)}>
                  <SuggestionCard {...item} isFocused={isFocused}/>
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

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    fontSize:35,
    marginHorizontal:20,
    fontWeight:'600',
    marginBottom:30
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
    marginTop:50,
    marginLeft:0
  },
  suggestionHeading:{
    width:wp('90%'),
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:'row',
    marginLeft:20
  },
  suggestionsText:{
    fontWeight:'700',
    fontSize:20
  },
  seeAllText:{
    fontSize:14
  },
  suggestions:{
    width:wp('98%'),
    marginTop:10,
    justifyContent:'flex-end'
  }
})