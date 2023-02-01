import styled from 'styled-components'

  export const TextWrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 80%;
`

export const FormRow = styled.div `
    margin: auto;
    font-size: ${props => props.fontSize ? props.fontSize : ""};
`

export const Author = styled.div `
    background-color: #49426c;
    color: #ebc88b;
    font-size: large;
    height: 70px;
    width: 250px;
    text-decoration: none;
    text-align: center;
    line-height: 4.5rem;
    border-radius: 1rem;
    &:hover{
        color: #9c7e38;
        transition: 0.2s ease-in;
    }
`

export const TextUrl = styled.a `
text-decoration: none;
  &:hover {
    color: #9c7e38;
    transition: 0.2s ease-in;
  }
`

export const TextUrlCont = styled.div `
  margin: auto;
  text-decoration: none;
  color: #9c7e38;  
  margin-top: 50px;
  font-size: 1.5rem;
  text-align: center;
  width: 50%;
`

export const BigButton = styled.button `
    background-color: #49426c;
    color: #ebc88b;
    font-size: xx-large;
    height: 70px;
    width: 250px;
    text-decoration: none;
    text-align: center;
    line-height: 4.5rem;
    margin: auto;
    border-radius: 2rem;
    margin-top: 50px;
    &:hover{
        color: #9c7e38;
        border: 0.2rem solid #9c7e38;
        transition: 0.2s ease-in;
    }
    @media screen and (max-width: 960px) {
    margin-bottom: "20px";
    margin-top: "0px";
    }
`

export const TopRowColumn = styled.div `
  display: flex;
  flex-direction: column;
`

export const DropDown = styled.select `
    text-align: center;
    margin: auto;
    color: #ebc88b;
    width: 80%;
    background-color: #49426c;
    border-radius: 1rem;
    font-size: 1rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
      &:hover{
          box-shadow: inset 300px 0 0 0 #49426c;
          color: #9c7e38;
      }
`

export const Download = styled.a `
    font-size: 1.5rem;
  box-shadow: inset 0 0 0 0 #49426c;
  color: #9c7e38;
  text-decoration: none;
  margin: 0 -.25rem 10px;
  padding: 0 .25rem;
  border-radius: 1rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
      &:hover{
          box-shadow: inset 300px 0 0 0 #49426c;
          color: #ebc88b;
      }
`

export const SmallButton = styled.button `
    background-color: #49426c;
    color: #ebc88b;
    font-size: x-large;
    height: 50px;
    width: 150px;
    text-align: center;
    
    border-radius: 2rem;
    margin-top: 10px;
    &:hover{
        color: #9c7e38;
        border: 0.2rem solid #9c7e38;
        transition: 0.2s ease-in;
    }
`

export const MainText = styled.div `
  white-space: pre-wrap;
  font-size: large;
  width: 80%;
  margin: auto;
  font-weight: 600;
  padding: 3%;
` 

export const TextWrapperRow = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottomBig ? props.marginBottomBig : "-10px"};
  @media screen and (max-width: 960px) {
    flex-direction: ${props => props.column ? "column" : "row"};
    }
`

export const TextWrapperColumn = styled.div `
  display: flex;
  flex-direction: row;
`
export const LogoWrapper = styled.div `
  font-size: 1.5rem;
  box-shadow: inset 0 0 0 0 #49426c;
  color: #9c7e38;
  text-decoration: none;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  border-radius: 1rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
      &:hover{
          box-shadow: inset 300px 0 0 0 #49426c;
          color: #ebc88b;
      }
`


export const StarWrapper = styled.div `
  margin: auto;
  font-size: 2rem;
  color: #9c7e38;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Star = styled.button `
  background-color: transparent;
  border: none;
  margin: auto;
  font-size: 2rem;
  color: #9c7e38;
  display: flex;
  flex-direction: row;
`
export const Website = styled.a `
  color: #ebc88b;
  font-style: italic;
  &:hover{
    color: #9c7e38;
  }
`

export const PageInfo = styled.h4 `
  width: ${props => props.width ? props.width : ""};
  @media screen and (max-width: 960px) {
  display: ${props => props.disappear ? "none" : ""};
  }
`

export const LinkInfo = styled.div `
  margin-top: 40px;
  width: 600px;
  text-align: center;
  border-radius: 1rem;
  background-color: #49426c;
  color: #ebc88b;
  padding: 10px;
`

export const TableCategory = styled.button `
    width: ${props => props.width ? props.width : "10%"};
    height: ${props => props.height ? props.height : ""};
    background-color: ${props => props.backgroundColor};
    margin: ${props => props.margin ? props.margin : "auto"};
    text-align: center;
    border-radius: 2rem;
    border-style: outset;

    &:hover{
        color: #9c7e38;
        transition: 0.3s ease-in;
        border-color: #9c7e38;
        border-style: solid;
}

@media screen and (max-width: 960px) {
    width: ${props => props.width ? props.width : "20%"};
    }
`

export const BottomRow = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const Loading = styled.h1 `
    margin: auto;
    width: 200px;
    margin-top: 65px;
    line-height: 2.5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BeforeWrapper = styled.div `
  margin-top: 50px;
  width: 50%;
  height: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const AfterWrapper = styled.div `
  width: 50%;
  height: 300px;
  margin-bottom: ${props => props.addMargin ? "120px" : "30px"};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    }
`

export const FinalWrapper = styled.div `
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: ${props => props.marginTopSmall ? props.marginTopSmall : ""};
    margin-bottom: ${props => props.marginBottomSmall ? props.marginBottomSmall : ""};
    }
`

export const PictureWrapper = styled.div `
  margin-top: 50px;
  margin-bottom: 20px;
  height: 300px;
  width: 30%;
  @media screen and (max-width: 960px) {
    width: 40%;
    }
`

export const QuestionAnswer = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Question = styled.label `
  font-weight: bolder;
  color: ${props => props.answered ? "green" : ""};
  
`

export const Answer = styled.input `
  height: 30px;
  width: 100%;
`

export const Picture = styled.img `
  width: 100%;
  height: 90%;
`

export const PictureSource = styled.a `
  height: 10%;
  text-decoration: none;
  color: #9c7e38;
  font-weight: bolder;
    &:hover{
        color: #ebc88b;
        transition: 0.3s ease-in;
        
    }
`