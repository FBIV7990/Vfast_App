import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Text,
  CheckBox,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Input from '../../components/UI/Input';
import BoderCard from '../../components/UI/BoderCord';
import Card from '../../components/UI/Card';
import Colors from '../../containers/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
import Swiper from '../../components/Swiper';
import {Carousel} from '../../components/UI/Carousel';

import { Button } from 'native-base';
const viewWidth = Dimensions.get('window').width;
const AuthScreen = props => {
  
  const [images, setImages] = useState([ 'https://assets.entrepreneur.com/content/3x2/2000/20150903183433-businessmen-meeting-discussion-corporate-paperwork-colleague.jpeg', 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60']);


const Login = ()=>{
  props.navigation.navigate('Login');
  console.log("hgjs");
}

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <View style={{flex:1, backgroundColor:'#2c3b4c'}}>
        <View style={{ justifyContent:'center',alignItems:'center'}}>
        <Animatable.Image
        animation="bounceIn"
            style={{height:'40%', width:'85%'}}
            source={require('../../assets/icons/VFast-white.png')}
          />
<Animatable.Text 
        animation="bounceIn"

style={{marginLeft: 100, color:'white',textAlign:'center',fontWeight:'bold',fontSize:16}}>CLICK  START TO DIGITAL </Animatable.Text>


        </View>
       <View>

      <View style={{   
        borderRadius: 40,
    width: '85%',
    height: 320,
    marginLeft:25,
    marginRight:20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'white'}}>
      <Image
        style={{  height: '90%',width:'90%',margin:20
         
         

         }}
        source={{uri:'https://www.contactmonkey.com/cm_wp/wp-content/uploads/2018/10/03.gif'}}
    
        />
     
      </View>
     
          </View>    
       
      
    
      <Animatable.View 
     animation="slideInLeft"
     style={{flexDirection:'row',position:'absolute',bottom:0}}
     >
       
       
       <Button
       
       onPress={() => props.navigation.navigate('Login')}
       style={{marginTop:15, width:'45%',borderColor:'white',borderRadius:1, borderWidth:1, backgroundColor:'#2c3b4c',justifyContent:'center',margin:10,position:'relative',bottom:0}}  >
            <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>Login </Text>
          </Button>
           
   <Button 
     onPress={() =>props.navigation.navigate('Sigup')}
   style={{marginTop:15, width:'44%', backgroundColor:'white',justifyContent:'center',margin:10,position:'relative',bottom:0}} >
            <Text style={{textAlign:'center',color:'#2c3b4c',fontWeight:'bold'}}>Sign Up </Text>
          </Button>
         
         
        
       
      </Animatable.View>
    
    
      </View>
      
    </KeyboardAvoidingView>
    
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradient: {
    
   position:'relative',
   bottom:0,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
  
    shadowRadius: 8,
    elevation: 5,
   
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    backgroundColor: '#e5f0fc'
  },
  authContainer: {
    width: '90%',
    maxWidth: 500,
    maxHeight: 500,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#2c3b4c'

  },

  buttonContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    color: Colors.green_color,
  },
  label: {
    margin: 8,
    color: Colors.light_gray,
    fontSize: 13,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});


export default (AuthScreen);