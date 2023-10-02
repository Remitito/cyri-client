import {Navigate, useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import { TextWrapper, TextWrapperRow, TextWrapperColumn, Author, 
  MainText, LogoWrapper, BottomRow, StarWrapper, Star, PageInfo, TableCategory,
  BigButton, SmallButton, Website, FormRow, Loading, LinkInfo, TextUrl, TextUrlCont } from '../components/ViewPageStyle';
import LoadingSpinner from '../components/spinner/spinner';
  import { NavLink } from 'react-router-dom';
import {IoArrowUndoOutline, IoArrowRedoOutline} from 'react-icons/io5'
import { FaWindows } from 'react-icons/fa';

// // For color coding levels
const levelColors = ["#68a684", "#4c95ad", "#433b94", "#6e245d", "#bf3952", "#4f1111"]
const levels = ["A1", "A2", "B1", "B2", "C1", "C2"]

const ViewPage = () => {
  const {pageId} = useParams()
  const {loaded, setLoaded} = useState(false)
  const [page, setPage] = useState({
    title: "",
    text: "",
    date: "",
    level: "",
    url: "",
    website: "",
    user: "",
    rating: 0,
    id: 0,
    preview: true
  })

  useEffect(() => {
      axios({
        method: 'post',
        url: `https://can-you-read-it-api.onrender.com/getOne`,
        headers: {},
        data: {
          id: pageId,
        } 
      }).then((response) => {
        setPage({
        title: response.data.title,
        text: response.data.text,
        date: response.data.dateString,
        level: response.data.level,
        url: response.data.url,
        user: response.data.user,
        rating: response.data.rating,
        id: response.data._id,
        preview: response.data.preview
      })
      })
    }, [])

    const nextPage = () => {
      axios({
        method: 'post',
        url: `https://can-you-read-it-api.onrender.com/getNext`,
        headers: {},
        data: {
          id: pageId,
          level: page.level
        } 
      }).then((response) => {
        window.location.assign(`https://can-you-read-it-atd5.onrender.com/pages/${response.data._id}`)
      })
    }

  return (
    <>
    {page.url ? 
    <TextUrlCont className='openSans'>
      View this text at: <TextUrl onHover={{color: "red"}} href={page.url}>{page.url}</TextUrl>
    </TextUrlCont> :
      <>
      {page.title ?
      <>
      <TextWrapper>
        <TextWrapperRow>
          <TextWrapperColumn>
            <LogoWrapper as={NavLink} to="/browse">
              <IoArrowUndoOutline size={50}/>
              Back  
            </LogoWrapper>
          </TextWrapperColumn>
          <h2>{page.title}</h2>
          <Author>Written by: {page.user} 
          </Author>
        </TextWrapperRow>
        <FormRow fontSize="1.4rem">
          {page.url.length > 0 ?
          <>
            {page.preview ? 
              <LinkInfo>THIS IS A PREVIEW. Read the full text at: 
                  <Website href={page.url}> {page.url}</Website>
              </LinkInfo>
              :
              <LinkInfo>Find this text and others at: 
                <Website href={page.url}> {page.url}</Website>
              </LinkInfo>
            }
          </>
          : <></>}
        </FormRow>
        <MainText id="mainText" className='arima'>
          {page.text}...
          </MainText>
          <BottomRow>
          <PageInfo>Uploaded by {page.user}</PageInfo>
          <TableCategory className='rubixMoonrocks' margin="none" height="20%"
          backgroundColor={levelColors[levels.indexOf(page.level)]}>
            {page.level}
          </TableCategory>
          </BottomRow> </TextWrapper></>: <>
          <Loading className='bebasNeue'>
          Loading...<LoadingSpinner/>
          </Loading></>}
          </>}
        </>
  );
};
export default ViewPage;