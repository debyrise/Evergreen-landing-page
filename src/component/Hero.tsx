import React from 'react'
import styled from '@emotion/styled'
import Button from "../component/Button"
import pic from "../assets/Image/img1.png"
     const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     `;
     const Right= styled.div`
       margin-left:30px;

       h4{
        font-size: 30px;
        margin-bottom: 10px;
        line-height: 40px
       }
     `
     const Left = styled.div``;
     const Img = styled.img``;
     const Para = styled.p`
      width: 400px;
      font-size: 20px;
     `
const Hero: React.FC = () => {
  return (
    <Container>
      <Right>
        <h4>
          Meet Evergreen, <br /> Segments, Design System 
        </h4>
        <Para>
          Evergreen is a reaact ui framework for building ambitious products on the web. Brought to you by segment
        </Para>
        <Button/>
      </Right>
      <Left>
           <Img src = {pic} />
       
      </Left>
     </Container>
  )
}

export default Hero