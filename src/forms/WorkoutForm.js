import React, { useState, useContext } from 'react';
import { ExerciseForm } from "./ExerciseForm"
import { WorkoutTable, TableTitle } from "../components/WorkoutTable"
import { PrimaryButton } from '../components/Buttons';
import { toast } from 'react-toastify';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';

export const WorkoutForm = ({ setSelection, uid }) => {

    const firebase = useContext(FirebaseContext)
    const [exerciseList, addExercise] = useState([])
    const [errors, setErrors] = useState({})

    async function onSubmit() {
        const timestamp = JSON.stringify(Date.now())

        try {
            await firebase.db.ref('/workouts/' + uid).push({
                exerciseList,
                timestamp
            })
            setSelection(0)
            toast("Workout Submitted")
        }
        catch (e) {
            console.log(e);
            const errors = {}
            errors.onSave = e.message
            setErrors(errors)
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {exerciseList.length > 0 ?
                <>
                    <TableTitle>Workout</TableTitle>
                    <WorkoutTable
                        tableContent={exerciseList} />
                    <PrimaryButton onClick={() => onSubmit()}> Submit Workout </PrimaryButton>
                    <br />
                    <br />
                </> : <p style={{ marginTop: "0px" }}>Add an exercise below.</p>
            }
            <ExerciseForm
                exerciseList={exerciseList}
                addExercise={addExercise}
            />


        </div>

    )
}