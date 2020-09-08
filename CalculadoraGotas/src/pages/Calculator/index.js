import React, {useEffect, useState} from 'react';
import IconeGota from '../../assets/gotas.png';
import IconeTime from '../../assets/time.png';
import {
  Button,
  ButtonCalcular,
  Container,
  ContentTempo,
  ContentVolume,
  Gotas,
  Header,
  InputTextTempo,
  InputTextVol,
  LabelBotaoCalcular,
  LabelGotas,
  LabelInputTempo,
  LabelInputVol,
  Title,
} from './StyledComponents';

export default function Calculator() {
  const [valorVolume, setValorVolume] = useState(0);
  const [valorTempo, setValorTempo] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [isCalculoGotas, setIsCalculoGotas] = useState(true);
  const [isCalculoMicroGotas, setIsCalculoMicroGotas] = useState(false);
  const [isCalculoTempo, setIsCalculoTempo] = useState(false);

  useEffect(() => {
    setValorVolume(0);
    setValorTempo(0);
    setResultado(0);
    setIsCalculoMicroGotas(false);
    setIsCalculoTempo(false);
  }, [isCalculoGotas]);

  useEffect(() => {
    setValorVolume(0);
    setValorTempo(0);
    setResultado(0);
    setIsCalculoGotas(false);
    setIsCalculoTempo(false);
  }, [isCalculoMicroGotas]);

  useEffect(() => {
    setValorVolume(0);
    setValorTempo(0);
    setResultado(0);
    setIsCalculoGotas(false);
    setIsCalculoMicroGotas(false);
  }, [isCalculoTempo]);

  function onConvert(valor) {
    const numericRegex = /^([0-9]{1,100})+$/;
    if (numericRegex.test(valor)) {
      return parseInt(valor);
    }

    return 0;
  }

  useEffect(() => {
    setValorVolume(0);
    setValorTempo(0);
    setResultado(0);

    setIsCalculoGotas(true);
    setIsCalculoMicroGotas(false);
    setIsCalculoTempo(false);
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Title> CALCULADORA DE GOTEJAMENTO</Title>
        </Header>

        <Button
          gotasEnum
          selecionado={isCalculoGotas}
          OnPress={() => setIsCalculoGotas(true)}>
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
          OnPress={() => setIsCalculoMicroGotas(true)}>
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
          OnPress={() => {
            setIsCalculoTempo(true);
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
            onChangeText={(valor) => setValorVolume(onConvert(valor))}
            value={valorVolume.toString()}
          />
        </ContentVolume>

        <ContentTempo>
          <LabelInputTempo>TEMPO (H)</LabelInputTempo>
          <InputTextTempo
            keyboardType={'numeric'}
            onChangeText={(valor) => setValorTempo(onConvert(valor))}
            value={valorTempo.toString()}
          />
        </ContentTempo>

        <ButtonCalcular>
          <LabelBotaoCalcular>CALCULAR</LabelBotaoCalcular>
        </ButtonCalcular>
      </Container>
    </>
  );
}
