import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function FlowerSeal() {
  return (
    <svg className="flower-seal" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 17c8 11 10 20 5 28-5-8-7-17-5-28Z" />
      <path d="M76 28c-1 14-7 22-16 24 3-9 8-17 16-24Z" />
      <path d="M83 56c-11 8-21 9-28 3 9-3 19-4 28-3Z" />
      <path d="M65 80c-13-4-20-12-19-22 8 5 14 12 19 22Z" />
      <path d="M35 80c5-10 11-17 19-22 1 10-6 18-19 22Z" />
      <path d="M17 56c9-1 19 0 28 3-7 6-17 5-28-3Z" />
      <path d="M24 28c8 7 13 15 16 24-9-2-15-10-16-24Z" />
      <circle cx="50" cy="51" r="7" />
    </svg>
  )
}

function App() {
  return (
    <main className="invitation">
      <div className="sunset" aria-hidden="true" />
      <div className="tropical-wash" aria-hidden="true" />
      <div className="paper-grain" aria-hidden="true" />

      <header className="masthead">
        <p>Бали, Улувату</p>
        <FlowerSeal />
        <p>Воскресенье · 01.11.26</p>
      </header>

      <section className="scene" aria-labelledby="invitation-title">
        <div className="side-caption side-caption-left">Солнце · океан · мы</div>

        <section className="love-letter">
          <p className="kicker">Для моей любимой</p>
          <h1 id="invitation-title">Встретим<br />закат<br /><em>вдвоём</em></h1>
          <p className="letter-copy">
            Я нашёл место, где море ловит последние лучи солнца.
            И хочу, чтобы этот вечер был только нашим.
          </p>
          <p className="love-whisper">Пусть этот закат станет ещё одним нашим воспоминанием.</p>
          <div className="letter-signature">
            <span>Твой человек</span>
            <span>♥</span>
          </div>
        </section>

        <aside className="reservation-ticket" aria-label="Детали бронирования">
          <p className="ticket-topline">Для нас двоих</p>
          <h2>Malini</h2>
          <p className="ticket-place">Seafood &amp; Sunset<br />Uluwatu, Bali</p>
          <div className="ticket-rule" />
          <div className="ticket-details">
            <p><span>Когда</span><strong>1 ноября · 17:30</strong></p>
            <p><span>Для нас</span><strong>Столик с видом на закат</strong></p>
          </div>
          <p className="ticket-number">01 · ЗАКАТ · 2026</p>
        </aside>

      </section>

      <footer className="footer-note">
        <span>Оставим телефон в стороне</span>
        <span>и будем просто рядом</span>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
