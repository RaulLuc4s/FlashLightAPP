import react, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    // liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {

    const subscription = RNShake.addListener(() => {

      setToggle(oldToggle => !oldToggle);
    });
  

  // Essa função vai ser chamada quando o componente
  // For ser desmontado

  return () => subscription.remove();
  }, []);

  

  return(

    <View style={[toggle ? style.containerLight : style.containerBlack]}>
    <TouchableOpacity onPress={handleChangeToggle}>

      <Image style={toggle ? style.LightingOn : style.LightingOff} source={toggle ? require('./icons/eco-light.png') : require('./icons/eco-light-off.png')}></Image>

      <Image style={style.DioLogo} source={toggle ? require('./icons/logo-dio.png') : require('./icons/logo-dio-white.png')}></Image>
    </TouchableOpacity>
  </View>

  ); 

};

export default App;

const style = StyleSheet.create({

  containerBlack: {

    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },

  containerLight: {

    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  LightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },

  LightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,

  },
  
  DioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,

  },

});