import React, { useEffect, useState, useCallback } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'
import { db } from '../firebaseConfig'
import {
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy,
} from 'firebase/firestore'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import InfoPopup from '../components/InfoPopup'

const GameExercise = () => {
    const { exercisesId } = useParams()
    const { state } = useLocation()
    const categoryId = state?.categoryId
    const [gameExercises, setGameExercises] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Game Exercise'
        const gameExerciseCollection = collection(db, 'GameExercise')
        const gameExerciseQuery = query(
            gameExerciseCollection,
            where('ExercisesId', '==', exercisesId),
            orderBy('Order', 'asc'),
        )

        const unsubscribe = onSnapshot(
            gameExerciseQuery,
            (snapshot) => {
                const gameExercisesData = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setGameExercises(gameExercisesData)
                setLoading(false)
            },
            (error) => {
                console.error('Error fetching game exercises:', error)
                setLoading(false)
            },
        )

        return () => unsubscribe()
    }, [exercisesId])

    const handleDifficultySelect = useCallback(
        async (gameExerciseId) => {
            try {
                const sessionData = {
                    GameExerciseId: gameExerciseId,
                    SessionStartTime: new Date(),
                }
                const gameSessionRef = collection(db, 'GameSession')
                const docref = await addDoc(gameSessionRef, sessionData)
                const GameSessionId = docref.id
                navigate(`/Ingame/${GameSessionId}`)
            } catch (error) {
                console.error('Error starting game session:', error)
            }
        },
        [navigate],
    )

    const MemoizedGameExerciseCard = React.memo(({ gameExercise }) => (
        <div
            onClick={() => handleDifficultySelect(gameExercise.id)}
            className="text-shadow h-[80%] w-72 flex-shrink-0 cursor-pointer rounded-2xl border-8 border-softgray bg-butter p-2 mobile:h-[90%] mobile:w-1/3 mobile:border-4 ipad:w-1/3"
        >
            <div className="flex h-full w-full flex-col items-center justify-between">
                <img
                    src={gameExercise.ExerciseImagePath}
                    alt=""
                    className="h-[80%] transition-opacity duration-500 ease-in-out"
                    loading="lazy"
                />
                <span>{gameExercise.DifficultyLevel}</span>
            </div>
        </div>
    ))

    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                <div className="w-1/10 flex flex-col justify-between">
                    <Actionbtn
                        text=""
                        to={`/Exercises/${categoryId}`}
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    <FullScreen />
                </div>

                <div className="flex w-full flex-col items-center justify-center font-bubbles text-white">
                    <div className="text-shadow relative flex h-[70%] w-[80%] justify-center rounded-3xl border-8 border-softgray bg-white p-8 mobile:h-[80%] mobile:border-4 mobile:p-4 ipad:h-[60%] ipad:p-6">
                        <span className="absolute -top-9 flex h-14 w-1/3 items-center justify-center rounded-2xl border-8 border-softgray bg-white px-4 font-nunito text-4xl font-black text-black mobile:h-12 mobile:w-auto mobile:border-4 mobile:text-2xl ipad:text-3xl">
                            Lebel
                        </span>

                        {loading ? (
                            <p className="text-2xl text-black">Loading...</p>
                        ) : (
                            <div className="inner-shadow flex h-full w-full items-center justify-evenly space-x-4 rounded-2xl bg-cheese p-4 text-center font-nunito text-4xl font-black text-black mobile:overflow-x-auto mobile:rounded-xl mobile:text-xl ipad:overflow-x-auto ipad:text-3xl">
                                {gameExercises.length > 0 ? (
                                    gameExercises.map((gameExercise) => (
                                        <MemoizedGameExerciseCard
                                            key={gameExercise.id}
                                            gameExercise={gameExercise}
                                        />
                                    ))
                                ) : (
                                    <p className="text-2xl text-black">
                                        No exercises available.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-1/10 flex select-none flex-col justify-between">
                    <div className="flex flex-col space-y-4 mobile:space-y-3">
                        <Actionbtn
                            text=""
                            to="/settings"
                            bgColor="#AB47BC"
                            icon={PiGearSixBold}
                        />
                    </div>
                    <InfoPopup
                        className="flex flex-col"
                        messages={[
                            'LEBEL: PUMILI SA TATLONG KAHON NG LEBEL ANG NAIS NA SUBUKAN',
                            'MADALI NA LEBEL NG LINYA: SUNDAN ANG LINYA BATAY SA GABAY NG NUMERO AT I-TRACE ANG LINYA',
                            'KARANIWAN NA LEBEL NG LINYA: SUNDAN ANG LINYA BATAY SA LINYA NG PAG-TRACE',
                            'MAHIRAP NA LEBEL NG LINYA: ISULAT ANG LINYA NG WALANG GABAY NA BATAYAN',
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default GameExercise
