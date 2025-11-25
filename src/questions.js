export const questions = [
  {
    questionText: 'Что такое React?',
    answerOptions: [
      { answerText: 'Библиотека для интерфейсов', isCorrect: true },
      { answerText: 'Серверная платформа', isCorrect: false },
      { answerText: 'База данных', isCorrect: false },
      { answerText: 'Операционная система', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой хук используется для хранения состояния?',
    answerOptions: [
      { answerText: 'useEffect', isCorrect: false },
      { answerText: 'useState', isCorrect: true },
      { answerText: 'useContext', isCorrect: false },
      { answerText: 'useReducer', isCorrect: false },
    ],
  },
  {
    questionText: 'Как передать данные в дочерний компонент?',
    answerOptions: [
      { answerText: 'Через State', isCorrect: false },
      { answerText: 'Через Props', isCorrect: true },
      { answerText: 'Через Render', isCorrect: false },
      { answerText: 'Магией', isCorrect: false },
    ],
  },
];