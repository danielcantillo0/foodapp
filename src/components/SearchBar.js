import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
    <View style={styles.background}>        
        <MaterialCommunityIcons name="search-web" style={styles.iconStyle} />
        <TextInput style={styles.inputStyle} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}

        />
    </View>
    )};

const styles = StyleSheet.create({
    background: {
        marginTop:15,
        backgroundColor:'#E8E8E8',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
        
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal: 15
    }
});

export default SearchBar;