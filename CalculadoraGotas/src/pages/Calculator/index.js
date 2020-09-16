import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import IconeGota from '../../assets/gotas.png';
import IconeTime from '../../assets/time.png';
import {
  Button,
  ButtonCalcular,
  Container,
  ContentGotas,
  ContentTempo,
  ContentVolume,
  Gotas,
  Header,
  InputTextGotas,
  InputTextTempo,
  InputTextVol,
  LabelBotaoCalcular,
  LabelGotas,
  LabelInputGotas,
  LabelInputTempo,
  LabelInputVol,
  Title,
} from './StyledComponents';

export default function Calculator() {
  const [valorVolume, setValorVolume] = useState(0);
  const [valorTempo, setValorTempo] = useState(0);
  const [valorGotas, setValorGotas] = useState(0);
  const [isCalculoGotas, setIsCalculoGotas] = useState(true);
  const [isCalculoMicroGotas, setIsCalculoMicroGotas] = useState(false);
  const [isCalculoTempo, setIsCalculoTempo] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setValorVolume(0);
    setValorTempo(0);
    setValorGotas(0);

    setIsCalculoGotas(true);
    setIsCalculoMicroGotas(false);
    setIsCalculoTempo(false);
  }, []);

  const zerarVariaveisDeCalculo = () => {
    setValorVolume(0);
    setValorTempo(0);
    setValorGotas(0);
  };

  const setCalculoGotas = () => {
    zerarVariaveisDeCalculo();

    setIsCalculoGotas(true);
    setIsCalculoMicroGotas(false);
    setIsCalculoTempo(false);
  };

  const setCalculoMicroGotas = () => {
    zerarVariaveisDeCalculo();

    setIsCalculoGotas(false);
    setIsCalculoMicroGotas(true);
    setIsCalculoTempo(false);
  };

  const setCalculoTempo = () => {
    zerarVariaveisDeCalculo();

    setIsCalculoGotas(false);
    setIsCalculoMicroGotas(false);
    setIsCalculoTempo(true);
  };

  const navigateToResumo = (total) => {
    const item = {
      volume: valorVolume,
      tempo: valorTempo,
      gotas: valorGotas,
      resultado: total,
    };

    console.log(item);

    navigation.navigate('Result', {item});
  };

  const calcularResultado = () => {
    let total = 0.0;
    if (isCalculoGotas) {
      if (valorTempo > 0 && valorVolume > 0) {
        total = valorVolume / (valorTempo * 3);
      }
    }

    if (isCalculoMicroGotas) {
      if (valorTempo > 0 && valorVolume > 0) {
        total = valorVolume / valorTempo;
      }
    }

    if (isCalculoTempo) {
      if (valorGotas > 0 && valorVolume > 0) {
        total = valorVolume / (valorGotas * 3);
      }
    }
    console.log(total);
    if (total > 0.0) {
      navigateToResumo(total);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <Title> Cálculo de Gotejamento </Title>
        </Header>
        <Button
          gotasEnum
          selecionado={isCalculoGotas}
          onPress={() => setCalculoGotas()}>
          <Gotas
            source={IconeGota}
            left={'20px'}
            right={'20px'}
            top={'15px'}
            height={'62px'}
            width={'58px'}
          />
          <LabelGotas>GOTAS</LabelGotas>
        </Button>
        <Button
          microEnum
          selecionado={isCalculoMicroGotas}
          onPress={() => setCalculoMicroGotas()}>
          <Gotas
            source={IconeGota}
            left={'50px'}
            right={'20px'}
            top={'35px'}
            height={'40px'}
            width={'40px'}
          />
          <Gotas
            source={IconeGota}
            left={'10px'}
            right={'10px'}
            top={'-20px'}
            height={'40px'}
            width={'40px'}
          />
          <LabelGotas>MICROGOTAS</LabelGotas>
        </Button>
        <Button
          tempoEnum
          selecionado={isCalculoTempo}
          onPress={() => {
            setCalculoTempo();
          }}>
          <Gotas
            source={IconeTime}
            left={'25px'}
            right={'20px'}
            top={'20px'}
            height={'55px'}
            width={'55px'}
          />
          <LabelGotas>TEMPO</LabelGotas>
        </Button>
        <ContentVolume>
          <LabelInputVol>VOL (ML)</LabelInputVol>
          <InputTextVol
            keyboardType={'numeric'}
            onChangeText={(valor) => setValorVolume(valor)}
            value={valorVolume.toString()}
          />
        </ContentVolume>
        {(isCalculoGotas || isCalculoMicroGotas) && (
          <ContentTempo>
            <LabelInputTempo>TEMPO (H)</LabelInputTempo>
            <InputTextTempo
              keyboardType={'numeric'}
              onChangeText={(valor) => setValorTempo(valor)}
              value={valorTempo.toString()}
            />
          </ContentTempo>
        )}
        {isCalculoTempo && (
          <ContentGotas>
            <LabelInputGotas>GOTAS (P/M)</LabelInputGotas>
            <InputTextGotas
              keyboardType={'numeric'}
              onChangeText={(valor) => setValorGotas(valor)}
              value={valorGotas.toString()}
            />
          </ContentGotas>
        )}
        <ButtonCalcular onPress={() => calcularResultado()}>
          <LabelBotaoCalcular>CALCULAR</LabelBotaoCalcular>
        </ButtonCalcular>
      </Container>
    </>
  );
}
