import React, { Component } from 'react';

import './Edit.css';

export default class Edit extends Component {
    constructor( props ) {
      super( props );
  
      this.state = {
        text: props.text
      };