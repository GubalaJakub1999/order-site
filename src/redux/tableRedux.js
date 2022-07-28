
//selector
export const getAllTables = ({tables}) => tables;
export const getTablesById =  ({tables}, id) => tables.filter(table => table.id === id)[0];

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('EDIT_TABLE');


// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload});
export const updateTable = payload => ({ type: UPDATE_TABLE, payload});
export const fetchTables = () => {
  return dispatch =>  {
    fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)));
  }
};

export const editTable = table => {
  const url = `http://localhost:3131/api/tables/${table.id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(table),
  };
  return dispatch => {
    fetch(url, options)
      .then(response => response.json())
      .then(() => dispatch(updateTable(table)));
  };
};
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    case UPDATE_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? {...table, ...action.payload} : table));
    default:
      return statePart;
  };
};

export default tablesReducer;