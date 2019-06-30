import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
    ${reset};
    * {
        box-sizing:border-box;
    }
    body {
        position:absolute;
        width:100%;
        height:100%;
        font-family: "Source Sans Pro", sans-serif;
        background-color: ${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
    } 
    a {
        color: ${props => props.theme.blueColor};
        text-decoration: none;
    }
    input {
        outline:none;
    }

    
`;

//* {box-sizing:border-box} 박스형태의 스타일들의 사이즈를 테두리까지로 설정하는것 원래는 테두리는 계산안함
//props는 어디서 오냐 App에 보면 ThemeProvider로 부터 GlobalStyles 가 감싸져있으니까 props가 전달됨
