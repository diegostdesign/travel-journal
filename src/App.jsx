import Card from "./components/Card.jsx"
import Header from "./components/Header.jsx"
import cardData from "./data.js"

export default function App() {
  const cards = cardData.map(item => {
    return (
      <Card 
        {...item}
      />
    )
  })
  return (
    <div className="container">
      <Header />
      <main>
        {cards}
      </main>
    </div>
  )
}