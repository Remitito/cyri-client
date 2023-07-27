import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Container, Column, ColumnItem, 
    Row, BigButton, Table, TableBody, TableRow, SmallButton,
    TableData, TableCategory, TitleSection, Title, ArrowWrapper, PageLabel, TableHeader,
    TableButton, TableButtonDiv, TableDate, Loading, LoadingMessage, PageNavWrapper, TopRow} from '../components/BrowseStyle'
import LoadingSpinner from '../components/spinner/spinner'
import { IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";
import {NavLink} from 'react-router-dom'
import { LevelContext} from '../UserContext'

const initialState = {
    currentTexts: [],
    level: "all",
    page: 0, // page when viewing all texts
    totalPages: 0,
    retryCount: 0
  }

const Browse = () => {
    // // For color coding levels
    const levelColors = ["#68a684", "#4c95ad", "#433b94", "#6e245d", "#bf3952", "#4f1111"]
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"]
    const [state, setState] = useState(initialState)

    useEffect(() => {
        Promise.all([getTexts(0, 'all'), getPageCount('all')])
          .then(([texts, pageCount]) => {
            setState(oldValue => ({
              ...oldValue,
              currentTexts: texts,
              totalPages: pageCount
            }));
          })
          .catch(error => {
                console.log(error)
            });
      }, []);
    
      useEffect(() => {
        const retryTimer = setTimeout(() => {
          if (state.currentTexts.length === 0) {
            setState((prevState) => ({ ...prevState, retryCount: prevState.retryCount + 1 }));
          }
        }, 3500);
        return () => clearTimeout(retryTimer);
      }, [state.currentTexts.length, state.retryCount]);



    // sets the total page count
    const getPageCount = selectedLevel => {
        return axios
          .post('https://can-you-read-it-api.onrender.com/count', {
            level: selectedLevel
          })
          .then(response => {
            let totalPages = parseInt(response.data);
            return totalPages;
          })
          .catch(error => {
            return 0;
          });
      };

    const changeLevel = (level) => {
        if(level === state.level) {return} // if level already shown 
        getPageCount(level)
        getTexts(0, level)
    }

    const getTexts = (pageNum, level) => {
        return axios
          .post('https://can-you-read-it-api.onrender.com/browse', {
            pageNum: pageNum,
            level: level
          })
          .then(response => {
            return response.data;
          })
          .catch(error => {
            return [];
          });
      };
    

    const nextPage = () => {
        if(state.page + 1 === state.totalPages) {return} //last page 
        setState(oldValue => ({...oldValue,
            page: state.page + 1}))
        getTexts(state.page + 1, state.level)
    }

    const previousPage = () => {
        if(state.page === 0) {
            return} 
        setState(oldValue => ({...oldValue,
            page: state.page - 1}))
        getTexts(state.page - 1, state.level)
    }

    const mapLevels = levels.map((level, e) => 
        <Column width="100%">
            <TableCategory className='rubixMoonrocks'
            backgroundColor={levelColors[e]} width="100%" value={level}
            onClick={(e) => changeLevel(level)}>
                {level}
            </TableCategory>
        </Column>
)
    const mapAllPages = state.currentTexts.map((text, i) =>   
        <TableRow backgroundColor={i % 2 == 0 ? "#e6e6ff" : "#d7c1f5"}> 
        <TableData id="textTitle" className='bebasNeue'>
            {text.title}
        </TableData> 
        <TableDate>Uploaded by {text.user} on {text.dateString}</TableDate>
        <TableCategory className='rubixMoonrocks' value={text.level}
        backgroundColor={levelColors[levels.indexOf(text.level)]}
        onClick={(e) => changeLevel(text.level)}>
            {text.level}
        </TableCategory>
        <TableButtonDiv as={NavLink} to={`/pages/${text._id}`}>
            <TableButton className='bebasNeue'>
            VIEW TEXT
            </TableButton>
        </TableButtonDiv>
        </TableRow>
    )

    let mapSomePages = state.currentTexts.map((text, p) => 
        <TableRow backgroundColor={p % 2 == 0 ? "#e6e6ff" : "#d7c1f5"}> 
        <TableData className='bebasNeue'>
            {text.title}
        </TableData>
            {/* <TableDate>Uploaded by {text.user} on {text.dateString}</TableDate> */}
            <TableDate>Uploaded by TestUser</TableDate>
        <TableCategory className='rubixMoonrocks' onClick={(e) => changeLevel(text.level)}
        backgroundColor={levelColors[levels.indexOf(text.level)]}>
            {text.level}
        </TableCategory>
        <TableButtonDiv as={NavLink} to={`/pages/${text._id}`}>
            <TableButton className='bebasNeue'>
            VIEW TEXT
            </TableButton>
        </TableButtonDiv>
        </TableRow>
    )

        return (
            <>
            {state.currentTexts.length > 0 && state.totalPages > 0 ? 
                <Container>
                    <TopRow>
                        <BigButton as={NavLink} to="/user/forgot" className='bebasNeue'>I want a text taken down</BigButton>
                        <Title className='kanit'>Browse Texts</Title>
                        {state.currentTexts.length > 0 ?
                        <PageNavWrapper>
                            {state.currentTexts.length > 0 ?
                            <>
                            <ArrowWrapper className='bebasNeue' onClick={previousPage}>
                                <IoIosArrowDropleft onClick={previousPage} />Back                    
                            </ArrowWrapper>
                            <PageLabel className='bebasNeue'>Page {state.page + 1}/{state.totalPages}</PageLabel>
                            <ArrowWrapper className='bebasNeue' onClick={nextPage}>
                                <IoIosArrowDropright onClick={nextPage} />Next                    
                            </ArrowWrapper>
                            </>
                            :
                            <>
                            <ArrowWrapper className='bebasNeue' onClick={previousPage}>
                                <IoIosArrowDropleft onClick={previousPage} />Back                    
                            </ArrowWrapper>
                            <PageLabel className='bebasNeue'>Page {state.levelPage + 1}/
                            {state.currentTexts.length > 1 ? state.currentTexts.length - 1 : state.currentTexts.length}</PageLabel>
                            <ArrowWrapper className='bebasNeue' onClick={nextPage}>
                                <IoIosArrowDropright onClick={nextPage} />Next                    
                            </ArrowWrapper>
                            </>
                        }
                        </PageNavWrapper>
                    : <></>}
                    </TopRow>
                    <Row>
                        {mapLevels}
                        <TableCategory className='rubixMoonrocks' 
                        backgroundColor={"grey"} width="100%" value="all"
                        onClick={(e) => changeLevel("all")}
                        > ALL
                    </TableCategory>
                    </Row>
                    <Table>
                        <TableBody>
                            {state.level !== "all" ? mapSomePages 
                            : mapAllPages
                            }
                        </TableBody>
                    </Table>
                </Container>
            :   
            <>
            <Loading className='bebasNeue'>
            Loading... <LoadingSpinner/></Loading>
            <>
                {state.retryCount <= 2 ? <LoadingMessage>If you are a first time user, it might take a while to load.</LoadingMessage>
                :
                <LoadingMessage>Almost there! Thanks for your patience.</LoadingMessage>
                }
            </>
            
            </>}
        </>
    )}

export default Browse;