import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

const NewsScreen = () => {

    const route = useRoute()

    const {news} = route.params;

  return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={{ uri: news.urlToImage }} style={styles.img} />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.metaInfo}>
            {news.author ? `By ${news.author}` : 'Unknown Author'} | {new Date(news.publishedAt).toDateString()}
            </Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.content}>{news.content}</Text>
        </View>
    </ScrollView>

  )
}

export default NewsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    img: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      marginBottom: 20,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    metaInfo: {
      fontSize: 12,
      fontStyle: 'italic',
      color: '#888',
      marginBottom: 20,
    },
    description: {
      fontSize: 16,
      color: '#555',
      lineHeight: 22,
      marginBottom: 15,
    },
    content: {
      fontSize: 14,
      color: '#444',
      lineHeight: 20,
    },
  });
  