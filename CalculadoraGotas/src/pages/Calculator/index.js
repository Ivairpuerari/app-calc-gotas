import React, {useEffect, useState} from 'react';
import IconeGota from '../../assets/gotas.png';
import IconeTime from '../../assets/time.png';
import {
  Button,
  ButtonCalcular,
  Container,
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
    setIsCalculoMicroGotas(false);
    setIsCalculoTempo(false);
  }, [isCalculoGotas]);

  useEffect(() => {
    setIsCalculoGotas(false);
    setIsCalculoTempo(false);
  }, [isCalculoMicroGotas]);

  useEffect(() => {
    setIsCalculoGotas(false);
    setIsCalculoMicroGotas(false);
  }, [isCalculoTempo]);

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
          OnPress={() => setIsCalculoTempo(true)}>
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

        <LabelInputVol>VOL (ML)</LabelInputVol>

        <InputTextVol
          keyboardType={'numeric'}
          onChangeText={(valor) => setValorVolume(valor)}
          value={valorVolume}
        />

        <LabelInputTempo>TEMPO (H)</LabelInputTempo>

        <InputTextTempo
          keyboardType={'numeric'}
          onChangeText={(valor) => setValorTempo(valor)}
          value={valorTempo}
        />

        <ButtonCalcular>
          <LabelBotaoCalcular>CALCULAR</LabelBotaoCalcular>
        </ButtonCalcular>
      </Container>
    </>
  );
}
