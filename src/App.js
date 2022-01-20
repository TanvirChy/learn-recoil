import React from 'react';
import {
  RecoilRoot,
 
} from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import TodoList from './todoApp/TodoIndex';



function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList/>
    </RecoilRoot>
  );
}

export default App