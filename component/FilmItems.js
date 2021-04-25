import React from 'react';
import {StyleSheet , View , Text , Image} from 'react-native';
import { getImageFromApi} from '../API/TMDBA'


class FilmItems extends React.Component{
    render(){
        const film = this.props.film
        return (
            <View style = {styles.main_container}>
                    <Image
                        style = {styles.images}
                        source = {{uri : getImageFromApi(film.poster_path)}}
                    />
                    <View style = {styles.content_container}>
                        <View style={styles.content_head}>
                            <Text style = {styles.titleText} > {film.title} </Text>
                            <Text style = {styles.vote} >{film.vote_average}</Text>
                        </View>
                        <View style = {styles.description_container}>
                            <Text style = {styles.description} numberOfLines = {5} > {film.overview} </Text>
                        </View>
                        <View style = {styles.date_containere}>
                            <Text style = {styles.date} > Sorti le  {  film.release_date }</Text>
                        </View>
                    </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height : 200,
        shadowOffset:{  width: 5,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        flexDirection : 'row',
        position : 'relative',
        justifyContent : 'space-between'

    }, 
    images : {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    titleText : {

    },
    content_container : {
        flex : 1,
        padding: 7
    },
    content_head : {
        flexDirection : 'row',
        justifyContent : 'space-between',

    },
    date_containere : {
       alignItems : 'flex-end'
    },
    description_container : {
        flex : 7,
        justifyContent : 'center'
    },
    titleText : {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote : {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#666666'
    },
    description : {
        fontStyle: 'italic',
        color: '#666666',
        fontSize : 15
    }

})
export default FilmItems