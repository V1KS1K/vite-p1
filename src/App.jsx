import { useState } from 'react';
import './App.css';

const animeQuestions = [
  {
    questionText: 'В аниме "Фрирен, провожающая в последний путь", кого она увидела, когда она была с Ферн в лесу в котором демоны повторяли лик дорогого ей человека?',
    answerOptions: [
      { answerText: 'Айзен', isCorrect: false },
      { answerText: 'Гиммель', isCorrect: true },
      { answerText: 'Старк', isCorrect: false },
      { answerText: 'Фламме', isCorrect: false },
    ],
  },
  {
    questionText: 'Как зовут главную героиню в аниме "Монолог фармацевта"?',
    answerOptions: [
      { answerText: 'Жэньши', isCorrect: false },
      { answerText: 'Маомао', isCorrect: true },
      { answerText: 'Гаошунь', isCorrect: false },
      { answerText: 'Лахань', isCorrect: false },
    ],
  },
  {
    questionText: 'В аниме "Очень приятно, Бог", какое животное является хранителем Нанами?',
    answerOptions: [
      { answerText: 'Волк', isCorrect: false },
      { answerText: 'Лиса', isCorrect: true },
      { answerText: 'Змея', isCorrect: false },
      { answerText: 'Енот', isCorrect: false },
    ],
  },
  {
    questionText: 'Какая основная профессия главной героини Энн Хэлфорд в "Сказке о сахарном яблоке"?',
    answerOptions: [
      { answerText: 'Сахарный Мастер', isCorrect: true },
      { answerText: 'Повар', isCorrect: false },
      { answerText: 'Перекупщица сладостей', isCorrect: false },
      { answerText: 'Фермер яблонь', isCorrect: false },
    ],
  },
  {
    questionText: 'В аниме "Проживая 7-ю жизнь в качестве принцессы-заложницы", с кем в 1-й жизни Рише была?',
    answerOptions: [
      { answerText: 'С принцем Арнольдом', isCorrect: false },
      { answerText: 'С купцом', isCorrect: true },
      { answerText: 'С наемным убийцей', isCorrect: false },
      { answerText: 'С доктором', isCorrect: false },
    ],
  },
];

const CorrectAnswersDisplay = ({ questions }) => (
  <div className="answers-review-section">
    <h3>Правильные ответы:</h3>
    {questions.map((q, index) => {
      const correctAnswer = q.answerOptions.find(option => option.isCorrect);
      return (
        <div key={index} className="answer-item">
          <p><strong>{index + 1}. {q.questionText}</strong></p>
          <p className="correct-answer">
            Ответ: {correctAnswer ? correctAnswer.answerText : 'Не найден'}
          </p>
        </div>
      );
    })}
  </div>
);

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false); 

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < animeQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setShowCorrectAnswers(false); 
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setShowCorrectAnswers(false); 
  };
  
  const toggleAnswers = () => {
    setShowCorrectAnswers(!showCorrectAnswers);
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <h2>Квиз завершен!</h2>
          <p>Ваш результат: {score} из {animeQuestions.length} правильных ответов.</p>
          
          <button onClick={toggleAnswers} className="review-btn">
            {showCorrectAnswers ? 'Скрыть ответы' : 'Показать правильные ответы'}
          </button>
          
          <button onClick={handleRestart} className="restart-btn">Попробовать снова</button>
          
          {showCorrectAnswers && <CorrectAnswersDisplay questions={animeQuestions} />}

        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Вопрос {currentQuestion + 1}</span>/{animeQuestions.length}
            </div>
            <div className='question-text'>
              {animeQuestions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {animeQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;