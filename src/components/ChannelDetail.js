import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './index';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState([]);
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideo(data?.items));
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{ background: 'linear-gradient(90deg, rgba(255,0,196,0.745014245014245) 0%, rgba(255,0,48,0.8390313390313391) 49%, rgba(15,1,66,0.8903133903133903) 100%)', zIndex: 10, height: '250px' }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '110px' } }} />
                <Videos videos={video} />
            </Box>
        </Box>
    )
}

export default ChannelDetail
