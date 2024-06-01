import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

import useSWR from 'swr';

function App() {
  const fetcher = (url, payload) => fetch(url, {
    method: 'POST', // Change the method to POST
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers as needed
    },
    body: JSON.stringify(payload), // Stringify the payload and include it in the request body
  }).then((res) => res.json());

  // Define the payload
  const payload = {
    userId: 1,
    // Add more payload parameters as needed
  };

  const { data, error, mutate } = useSWR(['https://jsonplaceholder.typicode.com/posts/1', payload], fetcher);

  const handleRefresh = () => {
    mutate(); // Trigger a re-fetch of the data
  };

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  console.log("fsdfsdf", data);

  return (
    <div className="App">
      <button onClick={handleRefresh}>Refresh Data</button>
      <TodoList />
    </div>
  );
}

export default App;
