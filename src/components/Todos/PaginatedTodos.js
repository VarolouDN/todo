import { useEffect, useState } from "react";

import Tables from "./Tables";
import { ClientsState, State } from "../../types";
import { getClients } from "./clientsSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import TodoList from "./TodoList";

function PaginatedTodos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(8);

  // const dispatch = useDispatch();

  const { clients } = useSelector(function (state) {
    return state.clients;
  });
  /* useEffect(()=>{
         console.log('hello')
        dispatch(getClients())


    },[clients.length])*/

  /* useEffect(() => {
    console.log("hello");
    dispatch(getClients());
  }, []);*/
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  // Get current posts
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
  console.log(currentClients);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">List of the clients</h1>
      <TodoList currentClients={currentClients} />
      <Pagination
        clientsPerPage={clientsPerPage}
        totalClients={clients.length}
        paginate={paginate}
      />
    </div>
  );
}
