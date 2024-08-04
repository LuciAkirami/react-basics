function App() {
  let username = "Lucifer"
  return (
    // to inject js inside jsx, we se {}
    // this called evaluated expression, where we perform all the operations(evaluations) outside
    // and write the final js output in the {}
    <h1>Hello {username}</h1>
  )
}

export default App
