import React, { useEffect, useState } from 'react';
import Background from '../components/Background';
import FullScreen from '../components/FullScreen';
import Actionbtn from '../components/Actionbtn';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { LuArrowBigLeft } from 'react-icons/lu';
import { PiGearSixBold } from 'react-icons/pi';
import { IoBulbOutline } from 'react-icons/io5';
import { db } from '../firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const GameExercise = () => {
    const { exercisesId } = useParams();
    const location = useLocation();
    const categoryId = location.state?.categoryId; // Get categoryId from state
    const [gameExercises, setGameExercises] = useState([]);

    useEffect(() => {
        document.title = 'Game Exercise';
        const gameExerciseCollection = collection(db, 'GameExercise');
        const gameExerciseQuery = query(
            gameExerciseCollection,
            where('ExercisesId', '==', exercisesId)
        );

        const unsubscribe = onSnapshot(gameExerciseQuery, (snapshot) => {
            const gameExercisesData = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setGameExercises(gameExercisesData);
            console.log(gameExercisesData);
        });

        return () => unsubscribe();
    }, [exercisesId]);

    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                <div className="w-1/10 flex flex-col justify-between">
                    <Actionbtn
                        text=""
                        to={`/Exercises/${categoryId}`} // Navigate back to exercises with the correct category
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    <FullScreen />
                </div>
                <div className="flex w-full flex-col items-center justify-center font-bubbles text-white">
                    <div className="text-shadow relative flex h-[70%] w-[80%] justify-center rounded-3xl border-8 border-softgray bg-white p-8">
                        <span className="absolute -top-9 flex h-14 w-1/3 items-center justify-center rounded-2xl border-8 border-softgray bg-white font-nunito text-4xl font-black text-black">
                            Mga Lebel
                        </span>
                        <div className="inner-shadow flex h-full w-full items-center justify-evenly space-x-4 rounded-2xl bg-cheese p-4 text-center font-nunito text-4xl font-black text-black">
                            {gameExercises.length > 0 &&
                                gameExercises.map((gameExercise) => (
                                    <Link
                                        key={gameExercise.id}
                                        to={`/ingame/${gameExercise.id}`}
                                    >
                                        <div className="flex size-[90%] flex-col items-center justify-end bg-cover bg-center">
                                            <span>{gameExercise.DifficultyLevel}</span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/10 flex flex-col space-y-4">
                    <Actionbtn
                        text=""
                        to="/settings"
                        bgColor="#AB47BC"
                        icon={PiGearSixBold}
                    />
                    <Actionbtn
                        text=""
                        to="/achievement"
                        bgColor="#8BC34A"
                        icon={IoBulbOutline}
                    />
                </div>
            </div>
        </>
    );
}

export default GameExercise;