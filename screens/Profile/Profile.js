import React from 'react';
import { SafeAreaView, View, ScrollView, Image, Text } from 'react-native';
import styles from '../../assets/styles/globalStyle';
import localStyle from './style';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = ({navigation}) => {

    return (
        <SafeAreaView style={[styles.backgroundWhite, styles.flex]}>
            <ScrollView contentContainerStyle={styles.flexGrow}>
                {/* profile image */}
                <View style={localStyle.profileImageContainer}>
                    <View style={localStyle.profileImageBorder}>
                        <Image source={require('../../assets/images/mj23_profile.png')} style={localStyle.profileImage}/>
                    </View>
                </View>

                {/* user name */}
                <View>
                    <Text style={localStyle.userName}>Michael Jordan</Text>
                </View>


                {/* user stats */}
                <View style={localStyle.userStatContainer}>
                    {/* folllowing */}
                    <View>
                        <Text style={localStyle.userStat}>3870</Text>
                        <Text style={localStyle.userStatType}>Posts</Text>
                    </View>

                    {/* stat border */}
                    <View style={localStyle.userStatBorder}></View>

                    {/* followers */}
                    <View>
                        <Text style={localStyle.userStat}>223M</Text>
                        <Text style={localStyle.userStatType}>Followers</Text>
                    </View>

                    {/* stat border */}
                    <View style={localStyle.userStatBorder}></View>

                    {/* posts */}
                    <View>
                        <Text style={localStyle.userStat}>23</Text>
                        <Text style={localStyle.userStatType}>Following</Text>
                    </View>
                </View>

                {/* tab container */}
                <View style={globalStyle.flex}>
                    <ProfileTabsNavigation/>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;