import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SliderCard = ({title,ctaText,sideImgSrc,cardThemes}) => {
  return (
    <View style={[styles.cardContainer,{backgroundColor:cardThemes.bg}]}>
        <View style={styles.cardTypographyContainer}>
                <Text style={[styles.title,{color:cardThemes.color}]}>{title}</Text>
                <Text style={[styles.ctxText,{color:cardThemes.color}]}>{ctaText}
                <MaterialCommunityIcons name='arrow-right-thin' size={'small'} style={{color:'white',marginLeft:10,fontSize:20,position:'absolute'}}/>
                </Text>
        </View>
        <View>
        <Image source={sideImgSrc} style={styles.slideImg}
        />
        </View>
    </View>
  )
}

export default SliderCard

const styles = StyleSheet.create({
    cardContainer:{
        width:wp('90%'),
        height:hp('18%'),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:15,
        marginTop:20,
        borderRadius:17
    },
    cardTypographyContainer:{
        flex:3
    },
    title:{
        fontSize:20,
        marginLeft:10,
        fontWeight:'600'
    },
    ctxText:{
        marginTop:20,
        marginLeft:15
    },
    slideImg:{
        flex:1,
        height:'100%',
        width:wp('35%'),
        borderTopRightRadius:17,
        borderBottomRightRadius:17
    }
})