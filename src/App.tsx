import BudgetForm from "./components/BudgetForm"


function App() {

  return (
    <>
      <div className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de gastos
        </h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lgmt-10 p-10">
        <BudgetForm 
        
        />
      </div>
    </>
  )
}

export default App
