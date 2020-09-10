import styled from 'styled-components';

const Header = styled.View`
  position: absolute;
  height: 65px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #00008b;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px;

  position: relative;
  width: 100%;
  height: 100%;

  background: #c0c0c0;
`;

const ContainerGrafico = styled.View`
  position: absolute;
  width: 315px;
  height: 270px;
  left: 5px;
  top: 175px;
`;

const TitleGrafico = styled.Text`
  position: absolute;
  left: 20%;
  right: 25%;
  top: 20.95%;
  bottom: 23.05%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* white */

  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.Text`
  position: absolute;
  left: 20%;
  right: 25%;
  top: 20.95%;
  bottom: 23.05%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* white */

  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  
  ${({gotasEnum, microEnum, tempoEnum}) => {
    switch (true) {
      case gotasEnum:
        return ` left: 10px
        right: 0px`;

      case microEnum:
        return ` left: 130px
          right: 130px`;
      case tempoEnum:
        return ` left: 250px
            right: 0px`;
    }
  }}
  
  width: 100px;
  height: 105px
 
  top: 92px;
  ${(props) => {
    if (props.selecionado) {
      return ` background: #2D9CDB`;
    } else {
      return ` background: #00008b`;
    }
  }}
 
  border-radius: 32px;
`;

const ButtonVoltar = styled.TouchableOpacity`
  position: absolute;
  height: 20px;
  left: 4px;
  right: 303px;
  top: 10px;
`;

const Gotas = styled.Image`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
`;

const LabelGotas = styled.Text`
  position: absolute;
  width: 91px;
  height: 21px;
  left: 5px;
  right: 5px;
  top: 80px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* white */

  color: #ffffff;
`;

const LabelInputVol = styled.Text`
  position: absolute;
  width: 164px;
  width: 164px;
  height: 50px;
  left: 29px;
  right: 213px;
  top: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  /* white */

  color: #ffffff;
`;

const LabelInputTempo = styled.Text`
  position: absolute;
  width: 164px;
  width: 164px;
  height: 50px;
  left: 29px;
  right: 213px;
  top: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  /* white */

  color: #ffffff;
`;

const LabelInputGotas = styled.Text`
  position: absolute;
  width: 164px;
  width: 164px;
  height: 50px;
  left: 29px;
  right: 213px;
  top: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  /* white */

  color: #ffffff;
`;

const InputTextVol = styled.TextInput`
  position: absolute;

  width: 164px;
  height: 50px;
  left: 200px;
  right: 213px;
  top: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  color: #ffffff;
`;

const InputTextTempo = styled.TextInput`
  position: absolute;

  width: 164px;
  height: 50px;
  left: 200px;
  right: 213px;
  top: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  color: #ffffff;
`;

const InputTextGotas = styled.TextInput`
  position: absolute;

  width: 164px;
  height: 50px;
  left: 200px;
  right: 213px;
  top: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  color: #ffffff;
`;

const ButtonCalcular = styled.TouchableOpacity`
  position: absolute;
  width: 224px;
  height: 55px;
  left: 65px;
  top: 550px;

  background: #00008b;
  border-radius: 33px;
`;
const LabelBotaoCalcular = styled.Text`
  width: 224px;
  height: 55px;
  left: 50px;
  top: 25%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  display: flex;
  align-items: center;

  text-transform: uppercase;

  /* white */

  color: #ffffff;
`;

const ContentVolume = styled.View`
  position: absolute;
  width: 300px;
  height: 68px;
  left: 30px;
  top: 257px;

  background: #00008b;
  border-radius: 33px;
`;

const ContentTempo = styled.View`
  position: absolute;
  width: 300px;
  height: 68px;
  left: 30px;
  top: 370px;

  background: #00008b;
  border-radius: 33px;
`;

const ContentGotas = styled.View`
  position: absolute;
  width: 300px;
  height: 68px;
  left: 30px;
  top: 370px;

  background: #00008b;
  border-radius: 33px;
`;

export {
  Header,
  Container,
  Title,
  Button,
  Gotas,
  LabelGotas,
  LabelInputVol,
  LabelInputTempo,
  InputTextVol,
  InputTextTempo,
  ButtonCalcular,
  LabelBotaoCalcular,
  ContentVolume,
  ContentTempo,
  ContentGotas,
  InputTextGotas,
  LabelInputGotas,
  ButtonVoltar,
  ContainerGrafico,
  TitleGrafico,
};
