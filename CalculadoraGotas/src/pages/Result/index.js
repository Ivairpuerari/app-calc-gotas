import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Feather from 'react-native-vector-icons/Feather';
import {
  ButtonVoltar,
  Container,
  ContainerGrafico,
  Header,
  Title,
  TitleGrafico,
} from '../Calculator/StyledComponents';

export default function Result() {
  const navigation = useNavigation();

  const route = useRoute();
  const item = route.params.item;

  let vetorTempo =
    item.gotas !== 0 ? Array.from(item.resultado) : Array.from(item.tempo);

  let data = Array.from(item.volume);

  let title = item.gotas !== 0 ? item.gotas : item.resultado;

  let labels = vetorTempo.map((t) => t.toString());

  console.log(title);
  console.log(data);
  console.log(labels);

  const line = {
    labels: labels,
    datasets: [
      {
        data: data,
        strokeWidth: 2, // optional
      },
    ],
  };

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View>
      <Container>
        <Header>
          <ButtonVoltar onPress={navigateBack}>
            <Feather name="arrow-left" size={40} color="white" />
          </ButtonVoltar>
          <Title>Resultado </Title>
        </Header>
        <TitleGrafico>Gotas {title}</TitleGrafico>
        <ContainerGrafico>
          <LineChart
            data={line}
            width={350} // from react-native
            height={220}
            yAxisLabel={'(H)'}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ContainerGrafico>
      </Container>
    </View>
  );
}
