import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';
import { Loader } from '../components/Loader';
import { WorkoutHistoryForm } from '../forms/WorkoutHistoryForm';


const WorkoutReport = ({ uid }) => {
    const firebase = useContext(FirebaseContext)
    const [workouts, setWorkouts] = useState({})
    const [filterAttributes, setFilterAttributes] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (uid)
            firebase.db.ref("/maxes/" + uid)
                .on("value", function (snapshot) {
                    setWorkouts(snapshot.val())
                    setLoading(false)
                })

    }, [firebase, uid])
    console.log(filterAttributes)
    return (
        loading ?
            <Loader /> :
            <>
                <WorkoutHistoryForm
                    setFilterAttributes={setFilterAttributes}
                />
                <ul>
                    {
                        workouts ?
                            Object.keys(workouts).map(function (key, index) {
                                const { exercise, reps, weight } = workouts[key].workout
                                const timestamp = new Date(JSON.parse(workouts[key].timestamp)).toLocaleDateString("en-US")
                                return (
                                    <li key={index}>
                                        {exercise} | {reps} | {weight} | {timestamp}
                                    </li>
                                )
                            }) :
                            <li>You have not logged any workouts.</li>
                    }
                </ul>

            </>
    );
}

export default WorkoutReport;