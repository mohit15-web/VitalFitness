import { useEffect, useState } from 'react'
import Footer from './Footer';
import { showExercises } from '../utils/costants';
import Body from './Body';
import Search from './Search';
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
        <Search/>
        <Footer/>
    </div>
  )
}

export default Home;