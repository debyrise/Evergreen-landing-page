import React from 'react'
import styled from "@emotion/styled"
import img from '../assets/Image/fun.png'
 import img1 from '../assets/Image/funs.png'
 import img3 from '../assets/Image/fon.png'
 import imgg from '../assets/Image/t.png'
 import img9 from '../assets/Image/Icons.png'
 import img8 from '../assets/Image/Colors.png'
 import imgf from '../assets/Image/Badge & Pill.png'
 import img6 from '../assets/Image/Button.png'
 import img7 from '../assets/Image/Alert.png'
 import img5 from '../assets/Image/Empty State.png'
 import img4 from '../assets/Image/Table Layout.png'
 import imgk from '../assets/Image/Error Messages.png'


interface Iprops {
  // img: any
  // img2:any
  title: string;
  text: string;
  term: string;

}

 const Container = styled.section`
    background-color:white;
    padding: 40px;

 
 `
 const Wrapper = styled.div`
   align-items: center;
   justify-content: space-between;
 
 `
 const Hold = styled.div`

 
 `
 const Write = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   
 
 `

   const Para = styled.div``
  const Ram = styled.div`
        display: flex;
        height: 100px;
        width: 150px;
        gap: 20px;
        margin-left: 50px;
 
 `;
      const H2 = styled.div``
     const Pare = styled.div`
     width: 400px;
     
     `
    const H5 = styled.div``
    const IconBox  = styled.div`
      height: 100px;
      width: 150px;
      border-radius: 10px;
      
      
      `

  const Box = styled.div``
   export const Language: React.FC <Iprops> = ({ title, text, term, }) => {
     return(
         <Box>
          {/* <IconBox> {img} </IconBox> */}
           <h2> {title} </h2>
          <Pare>{text}  </Pare>
          <h5> {term}  </h5>
          {/* <IconBox> {img2} </IconBox> */}
         </Box>
     )

   }

const Designlang:React.FC = () => {
   let title1 : string = "Foundations"
   let term1: string = "Go to foundations"
   let text1: string =  "Evergreen contains a set of polished React components that work out of the box."
   let title2 : string = "Component"
   let term2: string = "Go to component"
   let text2: string = "Evergreen components are built on top of a React UI Primitive for endless composability."
   let title3: string = "Patterns"
   let term3: string = "Go to patterns"
   let text3: string ="Evergreen features a UI design language for enterprise-grade web applications."

  return (
    <Container>
      <h2>Design Language</h2>
      <Wrapper>
        
        <Write>
        <Hold> <img src= {img} /></Hold> 
        <Language  title= {title1}  term = {term1}  text = {text1}  />;
        <Ram> 
          <img src= {imgg} />
          <img src= {img9} />
          <img src= {img8} />
        </Ram> 
         </Write>
        <Write>
        <Hold> <img src={img1} /></Hold> 
        <Language title= {title2}  term = {term2}  text = {text2} />;
        <Ram> 
          <img src= {imgf} />
          <img src= {img6} />
          <img src= {img7} />
        </Ram> 
        </Write>
        <Write>
        <Hold> <img src={img3} /></Hold> 
        <Language  title= {title3}  term = {term3}  text = {text3}  />;
        <Ram> 
          <img src= {img5} />
          <img src= {img4} />
          <img src= {imgk} />
        </Ram> 
        </Write>
       

         
          {/* <Ham>
             
               
              <Im>
                <img src="" alt="2" />
                <Para>w</Para> 
              </Im>
              
              <Im>
                 <img src="" alt="3" />
                 <Para>w</Para>
              </Im>
                

          </Ham> */}
      </Wrapper>
    </Container>
  )
}

export default Designlang