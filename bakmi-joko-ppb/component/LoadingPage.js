import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const LoadingPage = () => {
    return (
        <View>
            <Image source={require('../assets/LogoBakmie.png')} style ={{width:206,height:206}} />
            <Text style={{textAlign:"center",marginTop:30,fontWeight:"bold",fontSize:30,color:"white"}}>BAKMIEJOKO</Text>

        </View>
       
    );
}

const styles = StyleSheet.create({})

export default LoadingPage;
