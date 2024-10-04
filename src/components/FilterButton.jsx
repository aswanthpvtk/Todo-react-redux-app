// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {filterTodos, markAllCompleted } from '../redux/actions';

// function FilterButton() {
//     const dispatch=useDispatch;
//     const currentFilter=useSelector((state)=>state.filter)
//     const handleFilter=(filter)=>{
//         dispatch(filterTodos())
//     }
//   return (
//     <div className="d-flex align-items-center gap-3">
//       <select
//       value={currentFilter}
//       onChange={(e)=>handleFilter(e.target.value)}
//        className="form-select form-select-sm">
//         <option value="ALL">Default</option>
//         <option value="COMPLETED">Completed</option>
//         <option value="INCOMPLETE">Incomplete</option>
//       </select>
//       <button onClick={()=>dispatch(markAllCompleted())} className="btn btn-success btn-sm w-100">
//         Completed
//       </button>
//     </div>
//   );
// }

// export default FilterButton;
