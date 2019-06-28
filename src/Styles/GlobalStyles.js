import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    } 
    
`;

//* {box-sizing:border-box} 박스형태의 스타일들의 사이즈를 테두리까지로 설정하는것 원래는 테두리는 계산안함
