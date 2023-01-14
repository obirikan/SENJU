import { View, Text,StyleSheet,Animated,TouchableOpacity,Dimensions } from 'react-native'
import React,{useRef}from 'react'
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Intro = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center',justifyContent: 'center',}}>
            <Text>logo</Text>
            <Text>Hello I Am Senju</Text>
            <Text>personal AI chat bot</Text>
        </View>
        <View style={{marginTop:height/5}}>
           <TouchableOpacity style={{backgroundColor:'blue'}}
                 onPress={() => navigation.navigate("main")}
           >
                 <Text>lets chat</Text>
           </TouchableOpacity>
        </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });