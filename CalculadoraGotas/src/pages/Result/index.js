import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Share from 'react-native-share';
import Feather from 'react-native-vector-icons/Feather';
import ViewShot, {captureRef} from 'react-native-view-shot';
import {
  ButtonCalcular,
  ButtonVoltar,
  Container,
  Header,
  LabelBotaoCompartilhar,
  Title,
} from '../Calculator/StyledComponents';

const screenWidth = Dimensions.get('window').width;

export default function Result() {
  const navigation = useNavigation();

  const route = useRoute();
  const item = route.params.item;

  let horasEmDecimal = item.gotas !== 0 ? item.resultado : item.tempo;

  let labelsEmHoras = [];
  let data = [];
  let divisor = horasEmDecimal;

  const decrementar = horasEmDecimal > 10 ? 3 : 1;

  while (horasEmDecimal > 0) {
    let horas = horasEmDecimal.toString().split('.')[0] + 'h';

    let fracaoDeTempo = parseFloat(
      '0.' + horasEmDecimal.toString().split('.')[1],
    );

    if (fracaoDeTempo) {
      let minutos = parseInt(parseFloat(fracaoDeTempo) * 60);

      horas = horas.concat(minutos.toString() + 'm');
    }

    labelsEmHoras.push(horas);

    const mls = (horasEmDecimal * item.volume) / divisor;

    data.push(parseFloat(mls).toFixed(0));

    horasEmDecimal = horasEmDecimal - decrementar;
  }

  labelsEmHoras.push('0h');

  data.push(0);

  data.reverse();
  labelsEmHoras.reverse();

  console.log(data);
  console.log(labelsEmHoras);

  let title = item.gotas !== 0 ? item.gotas : item.resultado;

  const line = {
    labels: labelsEmHoras,
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

  const viewRef = useRef();

  const captureAndShareScreenshot = async () => {
    console.log('shared \n\n\n');
    await captureRef(viewRef, {
      format: 'png',
      quality: 0.8,
    })
      .then((uri) => Share.open({message: 'Calculo de Gotejamento', url: uri}))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Header>
          <ButtonVoltar onPress={navigateBack}>
            <Feather name="arrow-left" size={50} color="white" />
          </ButtonVoltar>
          <Title>Resultado </Title>
        </Header>
        <View style={styles.container}>
          <ViewShot ref={viewRef}>
            <Text style={styles.label}>{title} Gotas/(M)</Text>

            <LineChart
              data={line}
              width={screenWidth} // from react-native
              height={300}
              segments={5}
              yAxisLabel={''}
              verticalLabelRotation={30}
              chartConfig={{
                backgroundColor: '#FFA500',
                backgroundGradientFrom: '#c0c0c0',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {marginTop: 40, marginLeft: 20, fontSize: 1},
              }}
              style={{
                marginVertical: 12,
              }}
              renderDotContent={({x, y, index}) => (
                <Text
                  key={index}
                  style={{
                    position: 'absolute',
                    paddingTop: y,
                    paddingLeft: x,
                    color: 'black',
                  }}>
                  {data[index] + 'ml'}
                </Text>
              )}
            />
          </ViewShot>
        </View>
        <ButtonCalcular onPress={captureAndShareScreenshot}>
          <LabelBotaoCompartilhar>COMPARTILHAR</LabelBotaoCompartilhar>
        </ButtonCalcular>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    lineHeight: 28,
    textAlign: 'center',
    top: 0,
  },
  container: {
    alignItems: 'center',
  },
});
