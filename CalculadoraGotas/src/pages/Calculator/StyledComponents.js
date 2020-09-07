import styled from 'styled-components';

const Header = styled.View`
  position: absolute;
  height: 10%;
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
  top: 285px;

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
  height: 50px;
  left: 29px;
  top: 445px;

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
  width: 146px;
  height: 55px;
  left: 200px;
  top: 275px;

  background: #00008b;
  border-radius: 33px;
`;

const InputTextTempo = styled.TextInput`
  position: absolute;
  width: 146px;
  height: 55px;
  left: 200px;
  top: 435px;

  background: #00008b;
  border-radius: 33px;
`;

const ButtonCalcular = styled.TouchableOpacity`
  position: absolute;
  width: 224px;
  height: 55px;
  left: 65px;
  top: 88%;

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
};
