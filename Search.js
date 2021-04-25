import React from 'react';
import {StyleSheet,View , TextInput , Button , FlatList , ActivityIndicator} from 'react-native';
import films from './Helpers/filmsData';
import FilmItems from "./component/FilmItems"
import { getFilmsFromApiWithSearchedText } from './API/TMDBA'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {films: [] , isLoading: false}

        //propriété
        this.page = 0,
        this.totalPages = 0

        //methode
        this._loadFilms.bind(this)
        this.handleChangeSearch.bind(this)
        this._displayLoading.bind(this)
        this._searchFilms.bind(this)

    }
    _searchFilms(){
        this.page = 0
        this.totalPages = 0
        this.setState({films : []})
        this._loadFilms()
    }

    _displayLoading(){
        if(this.state.isLoading){
            return (
                <View style = {styles.loader}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }
   
    _loadFilms() {
        if(this.SearchText.length > 0){
            this.setState({isLoading : true})
            getFilmsFromApiWithSearchedText(this.SearchText , this.page+1).then(data => {
                this.totalPages = data.total_pages
                this.setState({films:[...this.state.films ,...data.results] , isLoading : false})
            })
        }
    }
    handleChangeSearch(text) {
        this.SearchText = text
    }
    render() {
        return (
        <View style = {styles.main_container}>
            <TextInput  style={[styles.textinput , {outline:"none"}]} placeholder="Recherchez votre programme..."   onChangeText={(text) => this.handleChangeSearch(text)}  onSubmitEditing={(text) => this._searchFilms()}  />
            <Button   style = {[styles.button , {width : 10}]} title="Rechercher" onPress = {() => {this._searchFilms() }} />
            <FlatList
                data={this.state.films}
                keyExtractor = {(item)=> item.id.toString()}
                renderItem= {({item}) => <FilmItems film = {item} /> }
                onEndReachedThreshold = {0.5}
                onEndReached = {()=>{
                   if(this.page<this.totalPages){
                       this._loadFilms()
                   }
                }}
            />
            {this._displayLoading()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      marginBottom : 10,
      marginTop : 10,
      padding : 5,
      height: 50,
      borderColor: 'black',
      shadowOffset:{  width: 5,  height: 2,  },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      paddingLeft: 5,
      borderRadius : 5,
    },
    button: {
        width : '100px',
        backgroundColor : 'red',
        color : 'blue'
    }, 
    main_container:{
        fontFamily : 'sans-serif',
    },
    loader:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
  })

export default Search