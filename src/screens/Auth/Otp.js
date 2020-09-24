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
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Input from '../../components/UI/Input';
import BoderCard from '../../components/UI/BoderCord';
import Back from '../../components/UI/back';
import Card from '../../components/UI/Card';
import Colors from '../../containers/Colors';
import OTPInput from '../../components/UI/Otp';
import Icon from 'react-native-vector-icons/FontAwesome';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
import { Container, Header, Content, Button } from 'native-base';
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = props => {
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState();


  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      MobileNo: '',
    },
    inputValidities: {
      MobileNo: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  const authHandler = async () => {
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (mobileRegex.test(formState.inputValues.MobileNo) == '') {
      setError(null);
      setIsLoading(true);
    } else {
      try {
    
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={10} style={styles.screen}>
      <Back/>
    
      
    
      <View style={{ backgroundColor:'#2c3b4c'}}>
        <View style={{ justifyContent:'center',alignItems:'center',marginTop:40,marginBottom:40}}>
        <Animatable.Image
        animation="slideInLeft"
            style={{height: 50, width:'35%', margin: 8}}
            source={require('../../assets/icons/VFast-white.png')}
          />



        </View>


    <ScrollView>


      <Animatable.View 
      animation="fadeInUp"
      style={styles.gradient}>
        <View
          style={{
            width: '90%',
            maxWidth: 400,

           
          }}>
         
         <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color:'#2c3b4c'
              }}>
              One-time password
            </Text>
        </View>
        <Card style={styles.authContainer}>
      
        <Text style={{fontWeight: 'bold',  color:'white',fontSize:15}}>
              please enter 4-digit
            </Text>
           
          <OTPInput
       
          tintColor="#FB6C6A"
          offTintColor="#BBBCBE"
          otpLength={4}
        />
   <Button 
    onPress={() => props.navigation.navigate('Login')}
   style={{marginTop:15, width:'100%', backgroundColor:'white',justifyContent:'center'}} >
            <Text style={{textAlign:'center',color:'#2c3b4c',fontWeight:'bold'}}>Send Otp</Text>
          </Button>
          <View style={{position:'relative',right:0}}>

         
          <Text style={{fontWeight: 'bold', marginTop: 10,textAlign:'right',color:'white'}}>
            Reset Otp
            </Text>
       
            </View>
        
        </Card>
        
        <View style={{flexDirection: 'row', marginTop: 20}}>
       
        </View>
       
      </Animatable.View>
    
      </ScrollView>
      </View>
      
    </KeyboardAvoidingView>
    
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e5f0fc'
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
});


export default (AuthScreen);