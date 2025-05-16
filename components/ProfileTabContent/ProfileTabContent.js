import React from 'react';
import {ScrollView, Image, View} from 'react-native';
import ProfileTabContentStyle from './style';

const ProfileTabContent = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={ProfileTabContentStyle.profileTabContentContainer}>
            <View style={ProfileTabContentStyle.ProfileTabContent}>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan6_post.png')}/>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan2_post.png')}/>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan8_post.png')}/>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan5_post.png')}/>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan3_post.png')}/>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan4_post.png')}/>
                <Image style={ProfileTabContentStyle.image} resizeMode={'fill'} source={require('../../assets/images/jordan7_post.png')}/>
            </View>
        </ScrollView>
    );
};

export default ProfileTabContent;

