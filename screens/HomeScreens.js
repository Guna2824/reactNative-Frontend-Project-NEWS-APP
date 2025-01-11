import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {

    const navigation = useNavigation();

  const [data, setData] = useState([]);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiKey = process.env.EXPO_PUBLIC_API_KEY

  useEffect(()=>{
    const getData = async()=>{
      try{
        const response = await axios.get(`${apiUrl}${apiKey}`)
        setData(response.data.articles)
        // Alert.alert('success')
      }catch(err){
        Alert.alert('Error')
      }
    }
    getData()
  },[])

  const onpress =(news)=>{
    navigation.navigate('news', {news})
  }

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri : item.urlToImage}} style={styles.img} />
      <View style={{padding:10}}>
        <Text style={styles.description}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>onpress(item)}>
          <Text style={styles.buttonText}>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if(data.length === 0){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='green' />
        <Text style={styles.loadingText} >Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  img: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  author: {
    fontStyle: 'italic',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loadingContainer : {
    flex : 1,
    alignItems:'center',
    justifyContent:'center'
  },
});

