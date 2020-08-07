import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [SearchApi, errorMessage, results] = useResults();
    
    const filterPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }   
    
    return (
    <>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => SearchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        
        <ScrollView>
            <ResultsList                  
                results={filterPrice('$')} 
                title="Cost Effective" 
            />
            <ResultsList                 
                results={filterPrice('$$')} 
                title="Bit Pricier" 
            />
            <ResultsList                
                results={filterPrice('$$$')} 
                title="Big Spender" 
            />
        </ScrollView>
    </>
    )};

const styles = StyleSheet.create({});

export default SearchScreen;