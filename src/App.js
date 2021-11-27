import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Child from './Child';

// map, filter, concat, reduce 이 네가지 함수 다 배열과 관련된 작업을 하는 함수이며,
// map은 모든 배열을 다 돈다
// filter는 조건문을 걸어서 배열에 치환한다.
// [1,2,3,4] => [1,2,3,4].filter(item = > { item !== 1 ? true : false})
//

// concat 배열과 배열끼리 합친?다

function App() {
  const [name, setName] = useState('테스트');
  const [list, setList] = useState([]);

  useEffect(() => {
    if (name === '배성원') {
      alert(name);
    }
  }, [name]);

  const onAppendName = () => {
    // let test = list;
    // test.push(name);
    // setList(test);
    setList(list.concat(name));
  };

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onAppendName}>추가</button>

      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
