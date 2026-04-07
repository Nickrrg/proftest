import { useMemo, useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { DIRECTION_TITLES, QUESTIONS } from './data/questions';
import { buildResultLink, decodeResultPayload } from './lib/resultLink';

function computeResult(answers) {
  const score = {
    tech: 0,
    analysis: 0,
    practice: 0,
    comm: 0,
    help: 0,
    creative: 0,
  };

  answers.forEach((answer, i) => {
    const dir = QUESTIONS[i].options[answer].dir;
    score[dir] += 1;
  });

  const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  return {
    direction: top,
    title: DIRECTION_TITLES[top],
    description: 'Результат сохранён как постоянная ссылка и может быть добавлен в ЛК пользователя.',
  };
}

export default function App() {
  const [phase, setPhase] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('result') ? 'result' : 'start';
  });

  const restored = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('result');
    if (!fromUrl) return null;
    const payload = decodeResultPayload(fromUrl);
    return payload?.result || null;
  }, []);

  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(restored);

  const currentIndex = answers.length;

  const resultLink = useMemo(() => {
    if (!result) return '';
    return buildResultLink({ result });
  }, [result]);

  const handleStart = () => {
    setAnswers([]);
    setResult(null);
    setPhase('quiz');
    window.history.replaceState({}, '', window.location.pathname);
  };

  const handleAnswer = (index) => {
    const nextAnswers = [...answers, index];
    setAnswers(nextAnswers);

    if (nextAnswers.length === QUESTIONS.length) {
      const finalResult = computeResult(nextAnswers);
      setResult(finalResult);
      setPhase('result');
      const link = buildResultLink({ result: finalResult });
      window.history.replaceState({}, '', link);
      return;
    }
  };

  if (phase === 'start') return <StartScreen onStart={handleStart} />;
  if (phase === 'quiz') {
    return <QuizScreen currentIndex={currentIndex} answer={answers[currentIndex]} onAnswer={handleAnswer} />;
  }

  if (!result) return <StartScreen onStart={handleStart} />;
  return <ResultScreen result={result} resultLink={resultLink} onRestart={handleStart} />;
}
