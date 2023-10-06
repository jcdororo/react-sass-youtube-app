import React, { useCallback, useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getVideoInfo } from '../../helpers/fetchingData'

const MainPage = () => {
  const [mainVideos, setMainVideos] = useState([])

  const getMainVideos = useCallback(async () => {
    try {
      const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful%20place`);
      let videosArray = response.data.items;
      console.log('videosArray1',videosArray)
      videosArray =await getVideoInfo(videosArray);
      console.log('videosArray2',videosArray)
    } catch (error) {
      console.log(error);
    }
  }, [])


  useEffect(() => {
    getMainVideos();
  }, [getMainVideos])
  

  return (
    <div>MainPage</div>
  )
}


export default MainPage