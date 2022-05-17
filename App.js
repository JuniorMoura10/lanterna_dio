import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //Liga flash/lanterna do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    //Essa função será chamada quando o componente for desmontado
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.containerDark}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
        <Text style={toggle ? style.textoLight : style.textoDark}>
          'By Júnior Moura'
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  containerDark: {
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
  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  textoDark: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  textoLight: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
});
