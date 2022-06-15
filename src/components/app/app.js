import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

const data =[
  {name:"Jane Black", salary:800, increase: false, id: 1},
  {name:"Timothee Barns", salary:3000, increase: false, id: 2},
  {name:"Ben Stiller", salary:1230, increase: true, id: 3},
  {name:"Hue Pills", salary:1240, increase: false, id: 4},
  {name:"Tanya Marbles", salary:7000, increase: false, id: 5},
  {name:"Rigina Papakhina", salary:1400, increase: false, id: 6},
  {name:"Arina Romashkina", salary:1500, increase: false, id: 7}
]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
