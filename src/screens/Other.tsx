import React from 'react';
import {View, Text} from 'react-native-web';
import {Link} from '@react-navigation/web';
import styled from 'styled-components/native';
import { StyledButton } from './Home';

const StyledText = styled.Text`
    color: green;
`

interface OtherScreenProps {
    navigation: {navigate: (screen: string) => void}       
}

const OtherScreen: React.FC<OtherScreenProps> = ({navigation}) => {
    const {navigate} = navigation;
   
   return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StyledText>Other Screen</StyledText>
        <StyledText>Subtitle of other screen</StyledText>
        <StyledButton title="Navigate to Home" onPress={() => navigate('home')}/>
    </View >
);
}

export default OtherScreen;