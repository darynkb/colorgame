import React from 'react';
import { 
  AppRegistry,
  Alert,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,} from 'react-native';

import { Constants } from 'expo';
import { Button } from 'react-native';

export default class App extends React.Component {
  state = {
    start: 'Go!',
    count: 0,
    lifes: 3,
    colors: ['red', 'blue', 'green'],
  };

  getrandomColor = () => {
    return this.state.colors[
      Math.floor(Math.random() * this.state.colors.length)
    ];
  };

  checkforTrue = () => {
    this.setState({
      start:'Restart',
    }); //здесь мы меняем значение переменной старт
    if (this.state.textColor === this.state.backgroundColor) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        lifes: this.state.lifes - 1,
      });
    }
  };

  checkforFalse = () => {
    this.setState({
      start:'Restart',
    });
    if (this.state.textColor !== this.state.backgroundColor) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        lifes: this.state.lifes - 1,
      });
      if (this.state.lifes < 0){
        this.onPressStart()
      }
    }
  };

  _showAlert = () => {
    Alert.alert('Good news!', 'You scored '+this.state.count +'points!');
  };

  _getAlert = () => {
    Alert.alert('Game Over!', 'Never give up!');
    this.onPressStart();
  };

  onPressTrue = () => {
    let textColor = this.getrandomColor();
    let backgroundColor = this.getrandomColor();
    
    this.checkforTrue();
  if (this.state.count === 10) {
      this._showAlert();
    }
    if (this.state.lifes <= 1) {
      this._getAlert();
    }
    this.setState({
      textColor,
      backgroundColor,
    });
  };
  onPressFalse = () => {
    let textColor = this.getrandomColor();
    let backgroundColor = this.getrandomColor();
    this.checkforFalse();
    if (this.state.count == 10) {
      this._showAlert();
    }
    if (this.state.lifes <= 1) {
      this._getAlert();
    }
    

    this.setState({
      textColor,
      backgroundColor,
    });
  };
  
  onPressStart =() => {
    let textColor = this.getrandomColor();
    let backgroundColor = this.getrandomColor();
    this.setState({
      textColor,
      backgroundColor,
      start:'Restart',
      count: 0,
      lifes: 3,
      
    });
  }

  

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor,
        }}>
        <Text style={styles.name}>The Best Game. Tap "Go!" to start!</Text>

        <View style={{backgroundColor:"white",}}>
          
          <Button
            onPress={this.onPressStart}
            title={this.state.start}
            color="#3399ff"
          />
        </View>

        <View style={styles.info}>
        <Text style={styles.image}>{'\n'}Score: {this.state.count}</Text>

        <Text style={styles.image}>Lifes: {this.state.lifes}</Text>

        <Text style={styles.colorText}>{this.state.textColor}</Text>
        </View>

        <View style={{flexDirection: 'row',backgroundColor:"white"}}>
        <TouchableOpacity activeOpacity = { .5 } onPress={this.onPressTrue }>
          <Image
            style={styles.imgtrue}
            source={{uri: 'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity = { .5 } onPress={this.onPressFalse }>
          <Image
            style={styles.imgfalse}
            source={{uri: 'https://icons-for-free.com/free-icons/png/512/1398920.png'}}
          />
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    fontSize: 20,
    textAlign: 'center',
  },
  colorText:{
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  info:{
    justifyContent: "center",
    backgroundColor: "white"
  },
  name: {
    backgroundColor: 'white',
    paddingTop: 40,
    fontSize: 18,
    textAlign: "center",
  
  },
  imgtrue: {
    width: 180, 
    height: 180
  },
  imgfalse:{
    width: 180, 
    height: 180
  }
  
});
