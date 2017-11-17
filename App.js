import React from 'react';
import shuffledDeck from './ShuffledDeck'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      hand: ["face_down", "face_down"]
    };
  }
  hit() {
    let newHand = this.state.hand;
    newHand.push(this.state.deck[0]);
    let remainingDeck = this.state.deck.slice(1);
    this.setState({
      deck: remainingDeck,
      hand: newHand
    });
  }
  deal() {
    let newDeck = shuffledDeck();
    let remainingDeck = newDeck.slice(2);
    this.setState({
      deck: remainingDeck,
      hand: [newDeck[0], newDeck[1]]
    });
  }
  render() {
    let cards = [];
    for(let i=0;i<this.state.hand.length;i++) {
      cards.push(
        <Image key={i}
               style={styles.card}
               source={{uri: "http://golearntocode.com/images/cards/" +  this.state.hand[i] + ".png"}} />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          {cards}
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => this.deal()}
                  title="Let's Play!" />
          <Button onPress={() => this.hit()}
                  title="Hit!" />
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
  // the view that holds the cards
  cards: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  // one card
  card: {
    width: 103,
    height: 150,
    margin: 5
  },
  // the view that hold the buttons
  buttons: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});
