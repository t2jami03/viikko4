import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import {DATA} from './Data';
import Row from './components/Row'
import Search from './components/Search';

export default function App() {

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(DATA);
  }, [])

  const renderItem = ({item}) => (
    <Text key={item.id}>
      {item.firstname} {item.lastname}
       </Text>
  );

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };



  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
      data={items}
      renderItem={({item}) => (
        <Row person = {item} />
      )}
      ></FlatList>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  image: {
    marginRight: 16
  },
  rowText: {
    fontSize: 16,
    marginLeft: 5,
    padding: 1,
  }
});
