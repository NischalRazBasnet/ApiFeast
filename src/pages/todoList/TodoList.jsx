import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  const fetchTodo = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  console.log(data);

  if (load) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className='space-y-10 pt-5'>
      <h1 className='text-center text-5xl underline underline-offset-8 tracking-wider'>
        Todo Lists
      </h1>
      {data &&
        data.map((todo) => {
          return (
            <div className=' mx-auto w-[900px]'>
              <div
                className='bg-slate-200 py-5 space-y-5 rounded-lg'
                key={todo.userId}
              >
                <div className='grid grid-cols-[1fr_3fr_1fr] place-items-center'>
                  <h2>
                    <strong>user:</strong> {todo.userId}
                  </h2>
                  <h2
                    className={`place-self-start `}
                    style={{
                      textDecoration: todo.completed ? 'line-through' : '',
                      color: todo.completed ? 'gray' : '',
                    }}
                  >
                    {todo.title}
                  </h2>
                  <h2>{todo.completed ? '✔️' : '🕒'}</h2>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
