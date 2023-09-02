import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

function VideoCard({ video: { id: { videoId }, snippet } }) {

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia

                    image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
                    sx={{
                        width: {
                            xs: '100%', sm: '358px', md: '320px'
                        }, height: 180, justifyContent: 'center', alignContent: 'center', justifyItem: 'center', alignItems: 'center'
                    }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '160px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        <span>{snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}</span><br />
                        <span>{snippet?.title.slice(40, 70)}</span>
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='grey'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'grey', ml: '5' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
