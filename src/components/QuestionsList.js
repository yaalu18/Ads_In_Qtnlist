import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuestionsList.css';


const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    // Fetch questions and ads
    const fetchData = async () => {
      try {
        const [questionsResponse, adsResponse] = await Promise.all([
          //axios.get('http://localhost:5000/api/questions'),
          //axios.get('http://localhost:5000/api/ads')
          axios.get('https://vercel.com/yaalu18s-projects/ads-in-qtnlist-server2/api/questions'),
          axios.get('https://vercel.com/yaalu18s-projects/ads-in-qtnlist-server2/api/ads')
        ]);
        setQuestions(questionsResponse.data);
        setAds(adsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {questions.map((question, index) => (
        <div key={question._id} className="list-item">
          <div className="question-item">
            <p> I'm inside QuestionsList file</p>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
          </div>
          {ads[index] && (
            <div className="ad-bar">
              {ads[index].content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;
