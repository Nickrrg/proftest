import { QUESTIONS } from '../data/questions';

export default function QuizScreen({ currentIndex, answer, onAnswer }) {
  const q = QUESTIONS[currentIndex];
  return (
    <section className="card">
      <div className="muted">Вопрос {currentIndex + 1} / {QUESTIONS.length}</div>
      <h2>{q.text}</h2>
      <div className="stack">
        {q.options.map((option, index) => (
          <button
            key={option.text}
            className={`btn btn-option ${answer === index ? 'selected' : ''}`}
            onClick={() => onAnswer(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </section>
  );
}
