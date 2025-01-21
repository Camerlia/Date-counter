import Counter from "./components/Counter"


const App = () => {
  return (
    <div className="p-16 bg-blue-100 h-screen">
    <div className=" bg-white py-12 rounded-2xl max-w-lg m-auto px-4">
    <h1 className=" font-bold  text-center text-2xl md:text-4xl text-blue-900">
      Date Counter
     
    </h1>
    <Counter />
    </div>
    
    </div>
  )
}

export default App