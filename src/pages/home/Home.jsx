import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const fetched = useRef(false);

  const getMeal = async () => {
    if (fetched.current) return;
    fetched.current = true;

    setLoad(true);
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getMeal();
  }, []);
  console.log(data);

  if (load) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className='pt-5'>
      <h1 className='text-center text-5xl underline underline-offset-8 tracking-wider'>
        Meals
      </h1>
      {data &&
        data.meals.map((info) => {
          return (
            <div className=' px-20 py-5 space-y-5' key={info.idMeal}>
              <div>
                <p className='text-base'>
                  <strong>Category:</strong> {info.strCategory}
                </p>
                <h1>
                  {info.strMeal}
                  <span className='text-xl'> ({info.strArea})</span>
                </h1>
              </div>
              <div className='flex flex-col gap-1'>
                <p className={isExpanded ? '' : 'line-clamp-2'}>
                  {info.strInstructions}
                </p>
                <button
                  onClick={() => setExpanded(!isExpanded)}
                  className='flex self-end items-baseline bg-black text-white px-5 py-2 font-mono hover:underline hover:scale-102 uppercase'
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </button>
              </div>
              <div className=' mx-auto w-[600px]'>
                <div className='bg-slate-200 py-5 space-y-5 rounded-lg '>
                  <div className='grid grid-cols-[1fr_1fr] place-items-center'>
                    <div>
                      <h2 className='font-semibold underline'>Ingredients</h2>
                      <p>{info.strIngredient1}</p>
                      <p>{info.strIngredient2}</p>
                      <p>{info.strIngredient3}</p>
                      <p>{info.strIngredient4}</p>
                      <p>{info.strIngredient5}</p>
                      <p>{info.strIngredient6}</p>
                      <p>{info.strIngredient7}</p>
                      <p>{info.strIngredient8}</p>
                      <p>{info.strIngredient9}</p>
                      <p>{info.strIngredient10}</p>
                    </div>
                    <div>
                      <h2 className='font-semibold underline'>Measurement</h2>
                      <p>{info.strMeasure1}</p>
                      <p>{info.strMeasure2}</p>
                      <p>{info.strMeasure3}</p>
                      <p>{info.strMeasure4}</p>
                      <p>{info.strMeasure5}</p>
                      <p>{info.strMeasure6}</p>
                      <p>{info.strMeasure7}</p>
                      <p>{info.strMeasure8}</p>
                      <p>{info.strMeasure9}</p>
                      <p>{info.strMeasure10}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
