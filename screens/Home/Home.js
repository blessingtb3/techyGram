import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Title from '../../components/Title/Title';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import globalStyle from './style';
import UserStory from '../../components/userStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scaleFontSize } from '../../assets/styles/scaling';
import styles from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/routes';
//react native platform api documentation: https://reactnative.dev/docs/platform

const Home = ({navigation}) => {

  //user stories array
  const userStories = [

    //users
    {
      firstName: 'You',
      id: 1,
      profileImage: require('../../assets/images/mj23_profile.png'),
    },
    {
      firstName: 'j_harden',
      id: 2,
      profileImage: require('../../assets/images/harden_profile.png'),
    },
    {
      firstName: 'kingjames',
      id: 3,
      profileImage: require('../../assets/images/james_profile.png'),
    },
    {
      firstName: 'mamba_24',
      id: 4,
      profileImage: require('../../assets/images/bryant_profile.png'),
    },
    {
      firstName: 'drizzy',
      id: 5,
      profileImage: require('../../assets/images/drizzy_profile.png'),
    },
    {
      firstName: 'a.shwar',
      id: 6,
      profileImage: require('../../assets/images/arnold_profile.png'),
    },
    {
      firstName: 'top_boy',
      id: 7,
      profileImage: require('../../assets/images/jamie_profile.png'),
    },
    {
      firstName: 'mm',
      id: 8,
      profileImage: require('../../assets/images/millionairementality_profile.png'),
    },
  ];

  //user posts array
  const userPosts = [
    {
      firstName: 'millionarairementality',
      location: '',
      lastName: '', 
      likes: 1021,
      comments: 24,
      bookmarks: 55,
      image: require('../../assets/images/motivation_post.png'),
      profileImage: require('../../assets/images/millionairementality_profile.png'),
      id: 1,
    },
    {
      firstName: 'Netflix',
      lastName: '',
      location: 'LA, USA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('../../assets/images/netflix_post.png'),
      profileImage: require('../../assets/images/netflix_profile.png'),

      id: 2,
    },
    {
      firstName: 'Chicago',
      lastName: 'Bulls',
      location: 'Chicago, USA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require('../../assets/images/jordan8_post.png'),
      profileImage: require('../../assets/images/bulls_profile.png'),
      id: 3,
    },
    // {
    //   firstName: 'Nata',
    //   lastName: 'Vacheishvili',
    //   location: 'New York, NY',
    //   likes: 200,
    //   comments: 16,
    //   bookmarks: 6,
    //   image: require('../../assets/images/default_post.png'),
    //   profileImage: require('../../assets/images/default_profile.png'),
    //   id: 4,
    // },
    // {
    //   firstName: 'Nicholas',
    //   lastName: 'Namoradze',
    //   location: 'Berlin, Germany',
    //   likes: 2000,
    //   comments: 32,
    //   bookmarks: 12,
    //   image: require('../../assets/images/default_post.png'),
    //   profileImage: require('../../assets/images/default_profile.png'),
    //   id: 5,
    // },
  ];


  //user story constants and hooks
  const userStoriesPageSize = 4; //number of stories the user has been horizontally
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRedenderedData] = useState([]);
  const [isLoadingUserStories, setisLoadingUserStories] = useState(false);//to know when we are loading the user data
  //user story constants and hooks





  //user post constants and hooks
  const userPostsPageSize = 2; //number of posts the user has been horizontally
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRedenderedData] = useState([]);
  const [isLoadingUserPosts, setisLoadingUserPosts] = useState(false);//to know when we are loading the user data
  //user post constants and hooks




  //isLoading useEffect
  useEffect(() => {

    //stories
    setisLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRedenderedData(getInitialData);
    setisLoadingUserStories(false);

    //posts
    setisLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRedenderedData(getInitialDataPosts);
    setisLoadingUserPosts(false);

    console.log('techyGram initiated!')

  }, []);

  //takes the whole db of the users stories, 
  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage -1) * pageSize;//starting at 0
    const endIndex = startIndex + pageSize;
    
    if(startIndex >= database.length){
      return [];
    }
    return database.slice(startIndex, endIndex);
  }






  return (
      <SafeAreaView style={styles.backgroundWhite}>
        {/* FlatList with user posts */}
        <View>
          <FlatList 
          ListHeaderComponent={<>
          
            <View style={globalStyle.header}>
              <Title title={"Let's explore"}/>
              {/* touchable component that dims when being touched */}
              <TouchableOpacity style={globalStyle.messageIcon} onPress={() => {navigation.navigate(Routes.Profile)}}>
              {/* icon */}
              <FontAwesomeIcon icon={faEnvelope} size={scaleFontSize(20)}/>
              {/* message number container */}
              <View style={globalStyle.messageNumberContainer}>
                {/* message number */}
                <Text style={globalStyle.messageNumber}>2</Text>
              </View>
              </TouchableOpacity>
            </View>    

            {/* FlatList with user stories */}
            <View style={globalStyle.userStoryContainer}>
              <FlatList 
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if(isLoadingUserStories){
                    return;
                  }
                  setisLoadingUserStories(true);
                  const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
                  if(contentToAppend.length>0){  
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRedenderedData(prev => [...prev, ...contentToAppend]);
                  }
                  setisLoadingUserStories(false);
                }}

                showsHorizontalScrollIndicator={false} 
                horizontal={true} 
                data={userStoriesRenderedData} 
                renderItem={({item}) => (
                  <UserStory 
                    key={'userStory' + item.id}
                    firstName={item.firstName} 
                    profileImage={item.profileImage}
                  />
                )}
          />
        </View>
          
          </>} 
              
          onEndReachedThreshold={0.5}
          onEndReached={()=>{
            if(isLoadingUserPosts){
              return;
            }
            setisLoadingUserPosts(true);
            console.log('Fetching more data for you ', userPostsCurrentPage + 1)
            const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
            if(contentToAppend.length>0){  
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRedenderedData(prev => [...prev, ...contentToAppend]);
            }
            setisLoadingUserPosts(false);
          }}
          data={userPostsRenderedData} showsVerticalScrollIndicator={false} renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPost key={'userPost' + item.id}
                        firstName={item.firstName}
                        lastName={item.lastName}  
                        image={item.image}
                        likes={item.likes}
                        comments={item.comments}
                        bookmarks={item.bookmarks}
                        profileImage={item.profileImage}
                        location={item.location}
              />
            </View>
          )}/>
        </View>
      </SafeAreaView>
  );
};

export default Home;
