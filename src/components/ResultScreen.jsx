export default function ResultScreen({ result, resultLink, onRestart }) {
  return (
    <section className="card">
      <div className="badge">🎉 Профиль готов</div>
      <h2>{result.title}</h2>
      <p>{result.description}</p>

      <div className="link-box">
        <strong>Постоянная ссылка на результат:</strong>
        <a href={resultLink}>{resultLink}</a>
      </div>

      <div className="actions">
        <button className="btn" onClick={() => (window.location.href = 'https://emaktab.uz')}>
          ← Назад в eMaktab
        </button>
        <button className="btn" onClick={() => navigator.clipboard?.writeText(resultLink)}>
          🔗 Копировать ссылку
        </button>
        <button className="btn btn-primary" onClick={onRestart}>
          🔄 Пройти заново
        </button>
      </div>
    </section>
  );
}
