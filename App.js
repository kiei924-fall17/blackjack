import React from 'react';
import shuffledDeck from './ShuffledDeck'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      hand: []
    };
  }
  render() {
    let cards = [];
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          <Text>It'd be awesome if something were here.</Text>
        </View>
        <View style={styles.buttons}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cards: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    width: 103,
    height: 150,
    margin: 5
  },
  buttons: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});
