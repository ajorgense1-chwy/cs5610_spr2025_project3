import Millisecond from "./Millisecond";

function App() {
  const greetingMessage = (
    <div>Hello again, my friend
      <Millisecond textColor='blue' pizzaCount='123' favoriteAnimal='dog' />
    </div>
  )

  return greetingMessage;
}

export default App


// <input type="number" />