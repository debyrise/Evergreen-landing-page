import styled from '@emotion/styled'
import React from 'react'
import image from '../assets/Image/fig.png'
import image1 from '../assets/Image/seg.png'

interface Iprops {
  text: string
  Image: any

}

 const Container = styled.div``
 const Hold = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;

 `
 const Para = styled.div`
   color:#386aff ;

 `;

 const IcBox = styled.div``
 const Figma = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
 `
 const Icon = styled.div``
 const P = styled.div``
 const Hub = styled.div`
    height: 90px;
    width: 45%;
    border-radius: 5px;
    border: 1px solid silver;
    background-color: white;
    display: flex;
    align-items: center;
 `

 export const Resource:React.FC <Iprops> = ({text, Image, }) =>{
    return(
        <IcBox>
            <Icon> {Image} </Icon>
            <P> {text} </P>
        
             
        </IcBox>
    )
}

const Resources: React.FC = () => {
       let text1: string = "Evegreen figma library"
       let text: string = 'segment brand Hub'

  return (
     <Container>
        <h2>Resources</h2>
        <Hold>
            <p> A collection of tools, kits, plugins and guides to help simplify the creation process for our users. </p>
            <Para>see all resources</Para>
        </Hold>
        <Figma>
           <Hub>
           <img src= {image} />
            < Resource Image = {Image}   text = {text1}   />
            
           </Hub>
           <Hub>
             <img src= {image1} />
            < Resource Image = {Image}   text = {text}   />
           </Hub>
        </Figma>
           
     </Container>
  )
}

export default Resources