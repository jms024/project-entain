import React, {useState} from 'react';
import _ from 'lodash';

import ViewPortContainer from "../ViewportContainer";
import { Container, Field } from './style';
import useFilter from "../../utils/useFilter";

const _handleChange = _.debounce((filterName, filterValue, callback) => {
    callback(filterName, filterValue)
}, 900);

export default React.memo((props) => {
    const filter = useFilter(),
        [fieldValue, setFieldValue] = useState(filter.get.title || '');

    const handleChange = ({target}) => {
        setFieldValue(target.value);
        _handleChange('title', target.value, filter.set)
    }

    return (
        <Container>
            <ViewPortContainer>
                <Field
                    label="Movie title"
                    value={fieldValue}
                    onChange={handleChange}/>
            </ViewPortContainer>
        </Container>
    )
})