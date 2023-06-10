import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack, CircularProgress } from '@mui/material';
import { ContentContext } from '../../Context/ContentContext';

export default function UserProfile() {
    const { pageData } = useContext(ContentContext);

    let image = pageData?.userInfo?.titlePhoto;
    if (image === 'https://userpic.codeforces.org/no-title.jpg') {
        image =
            'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1685624037~exp=1685624637~hmac=029d2dc94e8f02c29d72d258b93419adbe107704cecda134160948ca2b2d1aba';
    }
    const handle = pageData?.userInfo?.handle;
    const maxRank = pageData?.userInfo?.maxRank;
    const maxRating = pageData?.userInfo?.maxRating;
    const currRank = pageData?.userInfo?.rank;
    const currRating = pageData?.userInfo?.rating;


    let color = 'gray';
    let colorCurr = 'gray';
    if (maxRank === 'newbie') {
        color = 'grey';
    } else if (maxRank === 'pupil') {
        color = 'green';
    } else if (maxRank === 'specialist') {
        color = 'cyan';
    } else if (maxRank === 'expert') {
        color = 'blue';
    } else if (maxRank === 'candidate master') {
        color = 'violet';
    } else if (maxRank === 'master' || maxRank === 'international master') {
        color = 'orange';
    } else if (
        maxRank === 'grandmaster' ||
        maxRank === 'international grandmaster' ||
        maxRank === 'legendary grandmaster'
    ) {
        color = 'red';
    }

    if (currRank === 'newbie') {
        colorCurr = 'grey';
    } else if (currRank === 'pupil') {
        colorCurr = 'green';
    } else if (currRank === 'specialist') {
        colorCurr = 'cyan';
    } else if (currRank === 'expert') {
        colorCurr = 'blue';
    } else if (currRank === 'candidate master') {
        colorCurr = 'violet';
    } else if (currRank === 'master' || currRank === 'international master') {
        colorCurr = 'orange';
    } else if (
        currRank === 'grandmaster' ||
        currRank === 'international grandmaster' ||
        currRank === 'legendary grandmaster'
    ) {
        colorCurr = 'red';
    }

    return (
        <Stack display="flex" justifyContent="center" alignItems="center" paddingTop={10}>
            {handle ? (
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia component="img" height="300" image={image} alt="" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align="center">
                                {handle}
                            </Typography>
                            <Typography variant="body1" align="center" fontWeight={700}>
                                Max Rank: <span style={{ color }}>{maxRank}</span>
                            </Typography>
                            <Typography variant="body1" align="center" fontWeight={700}>
                                Max Rating: <span style={{ color }}>{maxRating}</span>
                            </Typography>
                            <Typography variant="body1" align="center" fontWeight={700}>
                                Current Rank: <span style={{ color: colorCurr }}>{currRank}</span>
                            </Typography>
                            <Typography variant="body1" align="center" fontWeight={700}>
                                Current Rating: <span style={{ color: colorCurr }}>{currRating}</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ) : (

                " "

            )}
        </Stack>
    );
}





