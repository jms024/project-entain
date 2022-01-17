import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.primary};
`

export const Field = styled(TextField)`
    width: 100%;
`