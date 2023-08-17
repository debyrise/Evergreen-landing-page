import styled from '@emotion/styled';
import React from 'react'
import { AiFillBulb } from 'react-icons/ai';
import { GiSpanner} from "react-icons/gi";
import { ImOffice } from 'react-icons/im'

interface Iprops {
  Icon: any
  title: string;
  text: string

}
const Container = styled.section`
background-color: white;
padding: 40px
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const h2 = styled.div``;
const Box = styled.div``;
const IconBox = styled.div`
  height: 50px;
  width: 50px;
  background-color: #ebf0ff;
  color: #386aff;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const P = styled.div`
  width: 300px;
`;

export const CoreCard: React.FC <Iprops> = ({ Icon, title, text}) =>{
   return(
    <Box>
      <IconBox> {Icon} </IconBox>
      <h2> {title} </h2>
      <P>{text}  </P>
    </Box>
   );
};


const Corevalue: React.FC = () => {
  
    let title1: string = "Work out for the box"
    let title2: string = "flexible and composable"
    let title3: string = "Enterprise-grade"
    let text1: string = "Evergreen contains a set of polish React components that work out of the box"
    let text2: string = "Evergreen components are built on top of a React UI Primitive for endless composability."
    let text3: string = "Evergreen features a UI design language for enterprise-grade web applications."

    return(
      <Container>
      <h3>core values</h3>
      <Wrapper>
        <CoreCard Icon = {<AiFillBulb/>}  title = {title1} text= {text1}  />;
        <CoreCard Icon = {<GiSpanner/>}   title = {title2} text= {text2}  />;
        <CoreCard Icon =  {<ImOffice/>}  title = {title3} text= {text3}  />;

      </Wrapper>;
      </Container>
    );  
  
}

export default Corevalue