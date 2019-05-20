import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

export class TopicsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
  				<CardTemplate nextSection='/subtopics' dataSource="/topics"/>
      </Container>
    );
  }
};
