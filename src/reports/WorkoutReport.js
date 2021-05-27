import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';
import { Loader } from '../components/Loader';
import { WorkoutHistoryForm } from '../forms/WorkoutHistoryForm';
import WorkoutDisplayList from './WorkoutDisplayList';


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

    let displayList = Object.keys(workouts).reduce((obj, key) => obj.concat(workouts[key].workout), [])
    if (!(Object.keys(filterAttributes).length === 0 && filterAttributes.constructor === Object)) {
        const { exercise, reps } = filterAttributes
        displayList = displayList.filter(workout => workout.exercise === exercise && workout.reps === reps)
    }
    return (
        loading ?
            <Loader /> :
            <>
                <WorkoutHistoryForm
                    setFilterAttributes={setFilterAttributes}
                />
                <WorkoutDisplayList
                    filterAttributes={filterAttributes}
                    displayList={displayList}
                />
            </>
    );
}

export default WorkoutReport;