import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

     //tasks state for this component
     const [tasks, setTasks] = useState(
      [
          {
              id: 1,
              text:'doc',
              day:'mon',
              reminder: true,
          },
          {
              id: 2,
              text:'groc',
              day:'tues',
              reminder: false,
          },
          {
              id: 3,
              text:'school',
              day:'wed',
              reminder: true,
          },
      ]
  )

  //returning JSX
  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
