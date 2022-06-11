import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
  const { userInfo, isLoading, logout, update } = useContext(AuthContext);
  const [name, setName] = useState(null);
  const [secondname, setSecondName] = useState(null);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Text style={styles.welcome}>Name: {userInfo.name}</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="New name"
        onChangeText={text => setName(text)}
      />
      <Text style={styles.welcome}>Second name: {userInfo.secondname}</Text>
      <TextInput
        style={styles.input}
        value={secondname}
        placeholder="New second name"
        onChangeText={text => setSecondName(text)}
      />
      <View style={{ flexDirection: "row", marginLeft: 20 , marginRight: 20}}>
        <Button title="Update" color="#33cc99" onPress={() => {
            update(userInfo.email, userInfo.password, name, secondname);
          }} />
          <View style={styles.space} /> 
        <Button title="Logout" color="#33cc99" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#bbb',
    borderRadius: 15,
    paddingHorizontal: 14,
  },
  space: {
    width: 10, 
    height: 20,
  },
});

export default HomeScreen;
