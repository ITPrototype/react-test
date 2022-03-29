import './App.css';
import Reqres from './users';
import { useEffect,useState } from 'react';
import Profiles from './Profiles';
import Paging from './Paging';

function App() {
  const [users,setUsers] = useState([])
  const [totalPages,setTotalPages] = useState(1);
  const [currentPage,setCurrentPage] = useState(1);

  

  useEffect(()=>{
    Reqres(currentPage).then((result)=>{
      setUsers(result.data);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
    });
  },[currentPage])

  return (
    <div className="App">
      <Paging
       currentPage={currentPage}
       totalPages = {totalPages}
       setCurrentPage = {setCurrentPage}
      />
      <div className='cardss'>
          <Profiles
           users={users}
          />
      </div>
    </div> 
  );
}

export default App;