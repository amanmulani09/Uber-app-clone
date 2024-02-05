import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const HeroSuggestionCard = ({isPromo,imageSrc,footerText}) => {
  return (
    <Animated.View style={[styles.container]}>
        {isPromo && (
            <View style={styles.promotxtContainer}>
        <Text style={styles.promoTxt}>Promo</Text>
        </View>
        )}

        <Animated.View style={[styles.imageContainer]}>
            <Animated.Image
                style={[styles.SuggestionCardImg]}
                source={imageSrc}
            />
        <Text style={styles.footerText}>{footerText}</Text>
        </Animated.View>
    </Animated.View>
  )
}

export default HeroSuggestionCard

const styles = StyleSheet.create({
    container:{
        width:wp('50%'),
        height:hp('15%'),
        justifyContent:'flex-end',
        alignItems:'center',
        position:'relative'
    },
    imageContainer:{
        width:wp('45%'),
        height:hp(12),
        borderRadius:15,
        backgroundColor:'#e3e8e8',
        justifyContent:'center',
        alignItems:'center'
    },
    SuggestionCardImg:{
        width:55,
        height:50,
        alignSelf:'flex-end',
        marginRight:15,
        marginTop:5
    },
    promotxtContainer:{
    backgroundColor:'green',
    borderRadius:50,
    width:60,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:10,
    zIndex:2
    },
    promoTxt:{
        fontSize:10,
        color:'#fff',
        textAlign:'center'
    },
    footerText:{
        fontSize:16,
        textAlign:'left',
        marginTop:10,
        fontWeight:'600',
        alignSelf:'flex-start',
        marginLeft:15,
        letterSpacing:1.1
    }
})