import React from 'react'
import styled from '@emotion/styled'
  const But = styled.button`
    padding: 7px 20px 7px 20px;
    background-color:#2952cc;
    color: white;
    border: 1px solid silver;
    font-family: customFont;
    border-radius: 3px;
    cursor: pointer;
  `
const Button : React.FC = () => {
  return (
    <But>Get started </But>
  )
}

export default Button