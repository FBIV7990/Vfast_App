import React, { Component } from "react";
import { Text, View, Modal, Dimensions } from "react-native";
import Swiper from "./UI/ViewPager"; // 1.5.13
import { Button } from "react-native-elements"; // 0.18.5
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[
        { title: "Hello Swiper", css: thisstyles.slide1 },
        { title: "Beautiful", css: thisstyles.slide2 },
        { title: "simple", css: thisstyles.slide3 },
        { title: "And simple", css: thisstyles.slide3 }
      ],
      modalVisible: false
    };
  }
  componentDidMount() {

  }
  // affiche / cache la modal avec l'image en plein écran
  toggleModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  // vue plein écran avec zoom sans info
  renderFullScreen() {
    if (!this.state.modalVisible) {
      return null;
    }
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => this.toggleModalVisible()}
      >
        <View style={thisstyles.modalFullScreen}>
          <Text>I have component and text here</Text>
          <Swiper style={thisstyles.wrapper} showsButtons={true}>
            {this.state.items.map((item, key) => {
              console.log("item", item);
              return (
                <View key={key} style={item.css}>
                  <Text style={thisstyles.text}>{item.title}</Text>
                </View>
              );
            })}
          </Swiper>
        </View>
      </Modal>
    );
  }

  render() {
    return (
       <Swiper style={thisstyles.wrapper} showsButtons={true}>
            {this.state.items.map((item, key) => {
              console.log("item", item);
              return (
                <View key={key} style={item.css}>
                  <Text style={thisstyles.text}>{item.title}</Text>
                  {this.renderFullScreen()}
                    <Button
                      title="modal"
                      onPress={() => this.toggleModalVisible()}
                      icon={{ name: "close", type: "font-awesome" }}
                    />
                </View>
              );
            })}
          </Swiper>

    );
  }
}

const thisstyles = {
  modalFullScreen: {
    height: height,
    width: width
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },

  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold"
  }
};