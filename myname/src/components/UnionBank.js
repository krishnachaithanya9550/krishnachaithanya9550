import React, { Component } from 'react'
import Andhrabank from './Andhrabank'
import CoorporationBank from './CoorporationBank'

export default class UnionBank extends Component {
    render() {
        return (
            <div>
                <h1>Union Bank</h1>
                <Andhrabank location="vijayawada"/>
                <CoorporationBank located="tirupati"/>
            </div>
        )
    }
}

