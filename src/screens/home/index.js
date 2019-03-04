import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Item, Icon, Input, Header } from "native-base";

class Home extends Component {
  render() {
    return (
      <Header style={styles.header} searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            returnKeyType="search"
            placeholder="Search"
          />
        </Item>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingTop: Platform.OS === 'ios' ? 0 : 30, //!!!! removing this line would fix the "Invariant Violation" error but the stying would be broken
    paddingBottom: Platform.OS === 'ios' ? 0 : 30,
  },
});

export default Home;
