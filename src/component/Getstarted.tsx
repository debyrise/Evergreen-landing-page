import React from 'react'
import styled from '@emotion/styled'
import pic1 from '../assets/Image/1.png'
import pic2 from '../assets/Image/2.png'


interface Iprops {
  pic: any
  title: string;
  text: string;
  term: string

}


const Container = styled.section`
  background-color: white;
  padding: 40px;
  
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:center ; 
`
const Hold = styled.div`
  display: flex;
  background-color: #f5f5f5;
  width: 50%;
  border-radius: 5px;;
  gap: 50px;
  

`
const Hand = styled.div`
   display: flex;
   background-color:#f5f5f5;
  width: 50%;
  border-radius: 5px;
  margin-left: 30px;
  gap: 50px;
`


const H2 = styled.div``
const Para = styled.div``

const IconBox = styled.div`
/* height: 100px;
width: 150px;
border-radius: 10px;
 margin-right: 150px;
 background-color: yellow; */

 `;
const Had = styled.div`
   color: #5277cc;
   background-color: #5277cc;
`
const Box = styled.div``

export const  Started : React.FC <Iprops> = ({title, text, term, pic}) =>{
    return(
      <Box>
      <h2> {title} </h2>
      <Para>{text}  </Para>
      <Had> {term}  </Had>
      <IconBox> {pic} </IconBox>
      </Box>
      
    )
} 


const Getstarted: React.FC = () => {
let title1: string = "Installation"
let text1: string = "Learn how to install the evergreen-ui package"
let term1: string = "visit installation page"
let title2: string = "What’s new"
let text2: string = "Check out the latest changes and updates"
let term2: string = "Read latest update"


  return (
    <Container>
      <h2>Get started</h2>
      <Wrapper>
        <Hold>
        <Started title = {title1} text= {text1}  term = {term1} pic = {pic1} />
         <img src={pic1}  /> 
        </Hold>
          <Hand>
          < Started title = {title2} text= {text2}  term = {term2} pic = {pic2} /> 
           <img src= {pic2}  /> 
          </Hand>
      </Wrapper>
    </Container>
  )
}

export default Getstarted