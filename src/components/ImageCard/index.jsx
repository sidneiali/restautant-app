import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Skeleton } from '../../components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffff;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
`

const ImageCard =  ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState()
  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = photo
    imageLoader.onload = () => setImageLoaded(true)
  }, [photo])

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo} >
          <Title>{title}</Title>
        </Card>
      ): (
        <Skeleton width="90px" height="90px" />
      )} 
    </>
  )
}

export default ImageCard