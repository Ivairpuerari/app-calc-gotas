import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Header = styled.View`
  background: #87cefa;
`;

const Title = styled.Text`
  font-size: 14px;
  color: white;
`;

export default function Calculator() {
  return (
    <View>
      <View>
        <Header>
          <Title>CALCULADORA DE GOTAS</Title>
        </Header>
      </View>

      <Text>Calcular</Text>
    </View>
  );
}
