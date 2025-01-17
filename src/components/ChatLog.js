import React from 'react';
//import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComponent = props.entries.map((entry, id) => {
    return (
      <ChatEntry
        key={id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLike={props.onUpdateChat}
      />
    );
  });
  return <section>{entryComponent}</section>;
};

export default ChatLog;
