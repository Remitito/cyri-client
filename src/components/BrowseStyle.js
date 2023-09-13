import styled from 'styled-components'

export const Container = styled.div `
    width: ${props => props.width ? props.width : "80%"};
    margin: 50px auto auto;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Row = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: "space-evenly";
    background-color: ${props => props.color ? props.color : ""};
`
 export const TopRow = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
    margin-bottom: 30px;
    }
 `


export const Column = styled.div `
    width: ${props => props.width ? props.width : "auto"};
`

export const ColumnItem = styled.div `
    margin: auto;
    font-size: x-large;
    color: ${props => props.color ? props.color : "black"};
`

export const BigButton = styled.button `
    background-color: #49426c;
    color: #ebc88b;
    font-size: x-large;
    height: 70px;
    padding: 5px;
    text-decoration: none;
    text-align: center;
    line-height: 4.5rem;
    border-radius: 2rem;
    &:hover{
        color: #9c7e38;
        border: 0.2rem solid #9c7e38;
        transition: 0.2s ease-in;
    }
    @media screen and (max-width: 960px) {
        display: ${props => props.show ? "" : "none"};
    }

`

export const Table = styled.div `
    border: solid #49426c;
    margin:  auto;
    width: 100%;
    margin-top: 20px;
`

export const TableBody = styled.div `
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: 100%;
`

export const TableRow = styled.tr `
    display: flex;
    height: 100px;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    flex-direction: row;
    justify-content: space-between;

`

export const TableData = styled.div `
    width: 50%;
    margin: auto;
    text-align: center;
    color: black;
    font-size: 1.7rem;

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
    
    @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
    }

`

export const TableButton = styled.button`
    width: 70%;
    background-color: #49426c;
    font-size: x-large;
    color: #ebc88b;  
    border-radius: 2rem;
    line-height: 2;

    &:hover{
        color: #9c7e38;
        transition: 0.3s ease-in;
    }
        @media screen and (max-width: 960px) {
    width: 100%};

    @media only screen and (max-width: 767px) {
        font-size: large;
    }
`

export const TableButtonDiv = styled.div`
    width: 15%;
    margin: auto;
    text-align: center;
`



export const TableDate = styled.div `
    margin: auto;
    width: 15%;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: none;
    }
`

export const SmallButton = styled.button `
    background-color: #49426c;
    color: #ebc88b;
    font-size: large;
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

export const TitleSection = styled.div `
    margin: auto;
    height: 80px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`

export const Title = styled.h1 `
    font-size: xx-large;
    line-height: 0;
    margin-top: 30px;
    @media only screen and (max-width: 767px) {
        display: none;
    }
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

export const LoadingMessage = styled.h3 `
    margin: auto;
    text-align: center;
    margin-top: 20px;
    width: 400px;
`



export const ArrowWrapper = styled.div `
 font-size: 1.5rem;
 background-color: #49426c;
 height: 40%;
 padding: 15px;
 margin: auto;
  box-shadow: inset 0 0 0 0 #49426c;
  color: #ebc88b;
  text-decoration: none;
  margin: 0 10px 0 10px;
  border-radius: 1rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
      &:hover{
          box-shadow: inset 200px 0 0 0 #49426c;
          color: #9c7e38;
      }

      @media only screen and (max-width: 767px) {
        height: 60%;
    }
`

export const PageNavWrapper = styled.div `
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
`

export const PageLabel = styled.label `
    margin: auto;
    font-size: 2rem;
    text-align: center;
`