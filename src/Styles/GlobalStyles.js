import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
    body {
        background-color: ${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
    } 
    a {
        color: ${props => props.theme.blueColor};
        text-decoration: none;
    }
    
`;

//* {box-sizing:border-box} 박스형태의 스타일들의 사이즈를 테두리까지로 설정하는것 원래는 테두리는 계산안함
//props는 어디서 오냐 App에 보면 ThemeProvider로 부터 GlobalStyles 가 감싸져있으니까 props가 전달됨
