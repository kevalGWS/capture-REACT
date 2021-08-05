import React,{useEffect,useState} from 'react';
import Styled from 'react-router-dom';
import { useHistory } from 'react-router';
import {MovieState} from '../movieState';
import styled from 'styled-components';
//animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const MovieDetail = () => {
    const history= useHistory();
    const url = history.location.pathname;
    const [movies,setMovies]=useState(MovieState);
    const [movie,setMovie]=useState(null);
    
    //useeffect
    useEffect(() => {
        const currentMovie= movies.filter((s) => s.url === url);
        setMovie(currentMovie[0]);
        
    },[movies,url]);

    return(
        <>
        {movie && (
        <Details variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <HeadLine>
               <h2>{movie.title}</h2>
               <img src={movie.mainImg} alt="movie" /> 
            </HeadLine>
            <Awards>
               {movie.awards.map((a)=>(
                   <Award title={a.title} description={a.description} key={a.title} /> 
               ))} 
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="image" />
            </ImageDisplay>    
        </Details>
        )}
        </>
    );
};

const Details= styled(motion.div)`
    color: white;
`;

const HeadLine=styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform:translate(-50%, -10%) ;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`; 
const Awards= styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem ;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle=styled.div`
    padding: 5rem;
    h3{
        font-size: 1.5rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
        font-size: 1rem;
    }
`;
const ImageDisplay= styled.div`
  min-height: 50vh;
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

//Award component
const Award= (x)=> {
    return(
        <AwardStyle>
            <h3>{x.title}</h3>
            <div className="line"></div>
            <p>{x.description}</p>
        </AwardStyle>
    )
};
 
export default MovieDetail;