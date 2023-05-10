import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/Duolingo-logo.png')}
      />
      <Text style={styles.text}>O jeito gratis, divertido e eficaz{'\n'} de aprender um idioma!</Text>
      <TouchableOpacity style={styles.botao1} onPress={() => navigation.navigate('Começar')}>
      <Text style={styles.botaoTexto}>Começar agora</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.botaoTexto2}>Já tenho uma conta</Text>
          </TouchableOpacity>
    </View>
  );
};

const ComecarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/Duo.jpg')}
      />
        <TouchableOpacity style={styles.botao3} onPress={() => navigation.navigate('Continuar')}>
      <Text style={styles.botaoTexto3}>Continuar</Text>
          </TouchableOpacity>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Usuário ou E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.botao5} >
      <Text style={styles.botaoTexto5}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao6} >
      <Text style={styles.botaoTexto6}>Esqueci a senha</Text>
          </TouchableOpacity>
    </View>
  );
};

const ContinuarScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/Duo2.jpg')}
      />
        <TouchableOpacity style={styles.botao4} onPress={() => navigation.navigate('Continuar')}>
      <Text style={styles.botaoTexto4}>Continuar</Text>
          </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Começar" component={ComecarScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Continuar" component={ContinuarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  botao1: {
    backgroundColor: '#228B22',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
  },
  botao2: {
    backgroundColor: '#F4F3F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    color:'#228B22',
    boxShadow: 100,
  },
  botao3: {
    backgroundColor: '#228B22',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
    marginTop: 250,
  },
  botao4: {
    backgroundColor: '#228B22',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
    marginTop: 250,
  },
  botao5: {
    backgroundColor: '#228B22',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
    marginTop: 250,
  }, 
  botao6: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
  },
   botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  botaoTexto2: {
    color: '#228B22',
    fontSize: 16,
    textAlign: 'center',
  },
     botaoTexto3: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
   botaoTexto4: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  botaoTexto5: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  botaoTexto6: {
    color: '#399FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;