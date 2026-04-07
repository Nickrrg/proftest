export default function StartScreen({ onStart }) {
  return (
    <section className="card center">
      <img className="logo" src="/assets/emaktab-logo.svg" alt="eMaktab" />
      <h1>Навигатор будущего</h1>
      <p>Короткий React-прототип для пользовательской проверки в монолите.</p>
      <button className="btn btn-primary" onClick={onStart}>Пройти тест</button>
    </section>
  );
}
