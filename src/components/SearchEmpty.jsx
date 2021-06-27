import React, { Component } from 'react';
import {DivContainer, Image, Text} from './search-empty/SearchEmptyStyles';

class SearchEmpty extends Component {

    render() {
        return(
            <DivContainer>
                <Image
                    src= {this.props.image}
                    alt= {this.props.alt}
                />
                <Text>{this.props.text}</Text>
            </DivContainer>
        )
    }

}

export default SearchEmpty;