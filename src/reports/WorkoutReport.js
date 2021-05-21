import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';
import { Loader } from '../components/Loader';
import { WorkoutTable } from '../components/WorkoutTable';


const WorkoutReport = ({ uid }) => {
    const firebase = useContext(FirebaseContext)
    const [workouts, setWorkouts] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (uid)
            firebase.db.ref("/workouts/" + uid)
                .on("value", function (snapshot) {
                    setWorkouts(snapshot.val())
                    setLoading(false)
                })

    }, [firebase, uid])

    console.log(workouts)
    return (
        loading ? <Loader /> : <ul>{
            workouts ?
                Object.keys(workouts).map(function (key, index) {
                    const timestamp = new Date(JSON.parse(workouts[key].timestamp)).toLocaleDateString("en-US")
                    return (
                        <li key={index}>
                            {timestamp}
                            <WorkoutTable
                                tableContent={workouts[key].exerciseList} />
                        </li>
                    )
                }) :
                <li>You have not logged any workouts.</li>
        }</ul>
    );
}

export default WorkoutReport;