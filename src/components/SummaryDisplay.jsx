import React, { useState } from 'react';
import axios from 'axios';


const SummaryDisplay = () => {
  //State Initialization
  const [article, setArticle] = useState({ url: '' });
  const [summary, setSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a GET request to express server
      const response = await axios.get('http://localhost:3000/api/summarize', {
        params: {
          url: article.url,
          length: '3', 
        },
      });
  
      // Ensure response.data.summary is a string before setting it to the state
      let summaryText = response.data.summary;
      if (typeof response.data.summary === 'string') {
        summaryText = response.data.summary;
      } else {
        summaryText = '';
      }
  
      // Update the state with the summary
      setSummary(summaryText);
    } catch (error) {
      console.error('Error fetching and summarizing article:', error);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
        <img alt="Link Icon" src="/assets/link.svg" className="absolute left-0 my-2 ml-3 w-5" />

          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
            />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p> ↵</p>
          </button>
        </form>
      </div>

      {/* Display Results */}
      <div className="mt-4">
        <h2 className='blue_gradient article_summary'>Article Summary: </h2>
        <p className = "text-justify leading-loose summary_box "> {summary}</p>
      </div>
    </section>
  );
};

export default SummaryDisplay;





