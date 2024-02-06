import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
    {/* header tab  */}
    <Text style={styles.header}>
      Activity
    </Text>
    <Text style={styles.headerSecondary}>upcomming</Text>

    {/* upcomming trip section  */}
    <View style={styles.upcommingTripSection}>
        <View style={styles.typography}>
            <Text style={styles.typofirst}>You have no upcomming trips</Text>
            <Text style={styles.typosecond}>Reserve your trip</Text>
        </View>
        <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require('../assets/upcomming.png')}
            />
        </View>
    </View>

    </SafeAreaView>
  )
}

export default Activity

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
    fontSize:18,
    fontWeight:'700',
    letterSpacing:1
  },
  upcommingTripSection:{
    width:wp('90%'),
    height:hp('12%'),
    borderWidth:1,
    borderColor:'#F2F3F4',
    marginLeft:20,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    marginTop:10
  },
typography:{
  width:wp('60%')
},
typofirst:{
  fontSize:18,
  fontWeight:'6--'
},
typosecond:{
  marginTop:5,
  fontWeight:'700',
  fontSize:15
},
imgContainer:{
alignSelf:'center',
marginLeft:30
},
img:{
  width:50,
  height:50
}
  })