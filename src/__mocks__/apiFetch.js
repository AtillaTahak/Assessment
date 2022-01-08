import todolist from './api';

const fetchingResults = () => todolist().then((results) => results);

export default fetchingResults;