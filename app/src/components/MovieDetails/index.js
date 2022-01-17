import React from 'react';
import BackIcon from '@mui/icons-material/KeyboardBackspace';

import Banner from "./Banner";
import {BackDrop, Container, Title, Details, Button} from "./style";

export default React.memo((props) => {
    const { movie, onClose } = props;

    if (!movie) return null;

    return (
        <React.Fragment>
            <BackDrop onClick={onClose}/>
            <Container>
                <Title>{ movie.title }</Title>
                <Details>
                    <Banner backdrop_path={movie.backdrop_path} title={movie.title}/>
                    <p>Release Date: {movie.release_date}</p>
                    <p>{movie.overview}</p>
                    <Button
                        variant="outlined"
                        startIcon={<BackIcon />}
                        onClick={onClose}>
                        Back
                    </Button>
                </Details>
            </Container>
        </React.Fragment>
    )
})