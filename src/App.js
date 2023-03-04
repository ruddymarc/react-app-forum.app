import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import Forum from './Forum';
import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Forum />
      <footer>
        This app is made with 💕 by Ruddy
      </footer>
    </div>
    </QueryClientProvider>
  );
}

export default App;
