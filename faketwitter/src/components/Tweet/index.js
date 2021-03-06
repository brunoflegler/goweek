import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import api from "../../services/api";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default class weet extends Component {
  handleLike = async () => {
    const { _id } = this.props.tweet;
    await api.put(`/tweets/likes/${_id}`);
  };

  render() {
    const { tweet } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.author}>{tweet.author}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
        <TouchableOpacity onPress={this.handleLike} style={styles.likeButton}>
          <Icon name="ios-heart-empty" size={20} color="#999" />
          <Text style={styles.likeText}>{tweet.likes}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
