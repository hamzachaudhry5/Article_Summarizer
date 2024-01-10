/* Displaying initial text to user */
import React from 'react';

const InfoDisplay = () => {
  return (
    <div>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="purple_gradient"> OpenAI GPT - 4 </span>
      </h1>
      <h2 className="description">
        Please provide the URL link to the article you've chosen, 
        and we'll promptly generate a summary for you.
      </h2>
    </div>
  );
};

export default InfoDisplay;
