import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native-web';
import {Link} from '@react-navigation/web';
import styled from 'styled-components/native';

const StyledText = styled.Text`
    color: blue;
`

export const StyledButton = styled(Button)`
    background: ${props => props.primary ? "palevioletred" : "white"} !important;
    background-color: ${props => props.primary ? "palevioletred" : "white"} !important;
    color: ${props => props.primary ? "white" : "palevioletred"};
  
`

interface HomeScreenProps {
    navigation: {navigate: (screen: string) => void}       
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
    const {navigate} = navigation;

   return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StyledText>Home Screen</StyledText>
        <StyledButton primary title="Navigate to Other" onPress={() => navigate('other')}/>

    </View >
);
}

export default HomeScreen;