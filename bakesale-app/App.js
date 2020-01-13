import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ajax from './src/ajax';
import DealList from './src/components/DealList';
// disable really annoying in app warnings
console.disableYellowBox = true;

class App extends React.Component {
  state = {
    deals: [],
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({deals});
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.deals.length > 0 ? (
            <DealList deals={this.state.deals}></DealList> 
            ) :(
            <Text style={styles.header}>Bakesale</Text>)}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
  }
});

export default App;


