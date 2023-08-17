import React from 'react'
import {Global,css} from "@emotion/react"

const Globalstyle:React.FC = () => {
  return (
    <div>
      <Global
      styles = {css`
        @font-face {
          font-family: "customFont";
          src: url(../fonts/Roboto/Roboto-Black.ttf);
          src: url(../fonts/Roboto/Roboto-Bold.ttf);
          src: url(../fonts/Roboto/Roboto-Medium.ttf);
          src: url(../fonts/Roboto/Roboto-Regular.ttf);
          src: url(../fonts/Roboto/Roboto-MediumItalic.ttf);
          src: url(../fonts/Roboto/Roboto-Thin.ttf);
        }

        body{
          font-family: "customFont";
          background-color: white;
        }
      `}
        

       
        
          />
    </div>
  )
}

export default Globalstyle