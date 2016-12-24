import React, { Component } from 'react';
import Clipboard from 'clipboard';
import Feed from './Feed';

const mockEntries = [{
  likes: 7,
  youtubeId: 'SXiSVQZLje8',
  description: 'This entry is a test entry',
  date: new Date('Dec 19, 2016')
},
{
  likes: 2,
  youtubeId: 'YykjpeuMNEk',
  description: 'This another test entry',
  date: new Date('Dec 18, 2016')
},
{
  likes: 45,
  youtubeId: 'i2DBEOO3-L0',
  description: 'This another test entry',
  date: new Date('Dec 18, 2016')
},
{
  likes: 23,
  youtubeId: 'XaVL6Z8r9lE',
  description: 'This another test entry',
  date: new Date('Dec 18, 2016')
},
{
  likes: 357,
  youtubeId: 'Vsnzss7XOfg',
  description: 'This another test entry',
  date: new Date('Dec 18, 2016')
},
{
  likes: 8,
  youtubeId: 'axGa_7c-vsM',
  description: 'This another test entry',
  date: new Date('Dec 18, 2016')
}];

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    new Clipboard('.entry');
  }

  state = {

  };

  render() {
    return (
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Feed entries={mockEntries} />
      </div>
    )
  }
}

export default App;
