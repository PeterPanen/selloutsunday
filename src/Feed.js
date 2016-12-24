import React from 'react';
import Entry from './Entry';

const Feed = ({ entries }) => (
  <div>
    {entries.map((entry, index) => (
      <Entry key={index} {...entry} />
    ))}
  </div>
)

export default Feed;
