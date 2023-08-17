import React from 'react'
import styled from '@emotion/styled'
import pic from '../assets/Image/seg.svg'

const Container = styled.div`
background-color: white;
padding: 40px;

`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Hnd = styled.div`
  display: flex;
  align-items: center;
`
const Link = styled.div``
const Hsd = styled.div`
   height: 50px;
  width: 150px;
  object-fit: cover;
`

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
      
         <Hnd>
            <Hsd><img src= {pic} /></Hsd>
            <h3>© 2023, Segment.io, Inc.</h3>
         </Hnd>
        <Link>We re Hiring    website Data Collection</Link>
        
      </Wrapper>
    </Container>
  )
}

export default Footer