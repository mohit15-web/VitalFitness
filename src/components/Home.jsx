import React, { useEffect, useState } from 'react'
import Hero from './Hero';
import Footer from './Footer';
import { showExercises } from '../utils/costants';
import Body from './Body';
function Home() {
    const[exercise,setExercise] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await showExercises({ exercise: 'chest' });
                setExercise(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    console.log(exercise);
  return (
    <div>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Home;