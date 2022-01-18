import React from "react";
import { Container } from "./style";

export default React.memo((props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
});