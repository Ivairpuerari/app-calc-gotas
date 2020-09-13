import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {
  Dimensions,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Feather from 'react-native-vector-icons/Feather';
import ViewShot from 'react-native-view-shot';
import {
  ButtonVoltar,
  Container,
  ContainerGrafico,
  Header,
  Title,
  TitleGrafico,
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

  const full = useRef();

  const compartilhar = useCallback(() => {
    full.current.capture().then((uri) => {
      Share.share({
        message: 'teste',
        url: uri,
      });
    });
  }, []);

  return (
    <View>
      <Container>
        <Header>
          <ButtonVoltar onPress={navigateBack}>
            <Feather name="arrow-left" size={50} color="white" />
          </ButtonVoltar>
          <Title>Resultado </Title>
        </Header>
        <TitleGrafico>Gotas {title}</TitleGrafico>
        <ViewShot ref={full} options={{format: 'jpg', quality: 0.9}}>
          <ContainerGrafico>
            <LineChart
              data={line}
              width={screenWidth - 10} // from react-native
              height={300}
              segments={5}
              yAxisLabel={''}
              verticalLabelRotation={30}
              chartConfig={{
                backgroundColor: '##FFA500',
                backgroundGradientFrom: '#c0c0c0',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                borderRadius: 10,
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
                  {data[index]}
                </Text>
              )}
            />
          </ContainerGrafico>
        </ViewShot>

        <TouchableOpacity style={styles.action} onPress={compartilhar}>
          <Text style={styles.actionText}>Finalizar</Text>
        </TouchableOpacity>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    marginTop: 15,
    marginBottom: 8,
    marginLeft: '30%',
    backgroundColor: '#009a17',
    borderRadius: 8,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
