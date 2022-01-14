import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${(props) => props.theme.spacing} 0;
`

const Thumb = styled.div`
    flex: 1;
    height: 100px;
    flex-basis: 100%;
    
    @media ${(props) => props.theme.breakpoint.sm}{
        flex-basis: 50%;
    }
    @media ${(props) => props.theme.breakpoint.md}{
        flex-basis: 50%;
    }
    @media ${(props) => props.theme.breakpoint.lg}{
        flex-basis: 25%;
    }
`

const Genre = styled.div`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    height: 75px;
    padding: ${(props) => props.theme.spacing};
    color: #FFF;
    background-color: ${(props) => props.theme.color.main}; 
    .label {
        flex: 1; 
        font-weight: 700;
        font-size: 45px;
    };
    .button {
        width: 80px;
    };
`;

export default React.memo((props) => {

    return(
        <Container>
            <Section>
                <Genre>
                    <div className="label">
                        Humor
                    </div>
                    <div className="button">
                        See More
                    </div>
                </Genre>
                <Thumb>Movie 1</Thumb>
                <Thumb>Movie 2</Thumb>
                <Thumb>Movie 3</Thumb>
                <Thumb>Movie 4</Thumb>
            </Section>
            <Section>
                <Genre>
                    <div className="label">
                        Thriller
                    </div>
                    <div className="button">
                        See More
                    </div>
                </Genre>
                <Thumb>Movie 5</Thumb>
                <Thumb>Movie 6</Thumb>
                <Thumb>Movie 7</Thumb>
                <Thumb>Movie 8</Thumb>
            </Section>
            <Section>
                <Genre>
                    <div className="label">
                        Horror
                    </div>
                    <div className="button">
                        See More
                    </div>
                </Genre>
                <Thumb>Movie 9</Thumb>
                <Thumb>Movie 10</Thumb>
                <Thumb>Movie 11</Thumb>
                <Thumb>Movie 12</Thumb>
            </Section>
        </Container>
    )
})