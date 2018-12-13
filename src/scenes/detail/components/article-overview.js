import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ArticleStyle from '../styles/article-style.android';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const ArticleOverview = props => (
    <View style={ArticleStyle.container}>
        <Image 
            source = {{uri: props.article.avatar}}
            style={ArticleStyle.image}
        />
        <Text style={ArticleStyle.name}>{props.article.name} </Text>
        <Text style={ArticleStyle.description}>{props.article.description}</Text>
        <Icon name="plus" size={30} onPress={ () =>props.onPressPlusEvent (props.article)} />
        <Icon name="minus" size={30} onPress={ () =>props.onPressMinusEvent (props.article)} />
    </View>
);

export default ArticleOverview;