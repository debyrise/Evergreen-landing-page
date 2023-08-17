import styled from '@emotion/styled'
import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
const Container = styled.header`
display: flex;
height: 70px;
width: 100%;
background-color:white ;
justify-content: space-between;
align-items: center;
margin: 0;

`
const Logo = styled.div`
margin-right: 50px; 
margin-left: 20px;
 height: 50px;
  width: 150px;
  object-fit: cover;



`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Navigation = styled.div`
   display: flex;
   align-items: center;
`
const Nav = styled.div`
    margin-right: 25px;
    font-size: 20px;
    color: rgba(0,0,0,1.1);
    transition: all 350ms;
    cursor: pointer;
    font-weight: 550;

    :hover{
      color: white;
    }
`
const Github = styled.div`
     display: flex;
     margin-right: 20px;
     gap: 10px;
`
const Icon = styled.div`
   font-size: 15px;
`;
const Hold = styled.div`
  display: flex;
  background-color: #d2cece;
  border-radius: 3px;
  font-size: 13px;
  width: 50px;
  height: 25px; 
`;
const Hand = styled.div`
background-color: #d2cece;
  border-radius: 3px;
  font-size: 13px;
  width: 50px;
`
const Text =styled.div``

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
      <Logo> logo </Logo>
      <Navigation>
       <Nav>introduction</Nav>
       <Nav>Foundation</Nav>
       <Nav>Componets</Nav>
       <Nav>Paterns</Nav>
       <Nav>Resources</Nav>
      </Navigation>
      </Wrapper>
      <Github>
        <Hold>
        <Icon>
           <AiOutlineGithub/>
        </Icon>
        <Text>test</Text>
        </Hold>
        <Hand>
         <Text>12200</Text>
        </Hand>
      </Github>
    </Container>
  )
}

export default Header
     
     
