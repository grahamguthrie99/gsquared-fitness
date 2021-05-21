import React, { useState, useContext } from 'react';
import { RunningForm } from '../forms/RunningForm';
import { WeightForm } from '../forms/WeightForm';
import { WorkoutForm } from '../forms/WorkoutForm';
import log from "../assets/images/log.svg"
import { AuthContext } from '../session/AuthContext';
import { FormSelector } from "../components/FormSelector"

const ActivityLog = () => {
    const [selection, setSelection] = useState(0);
    const { authState: { user } } = useContext(AuthContext);
    const { uid } = user || JSON.parse(localStorage.getItem("user"))
    const formOptions = ['Run', 'Weigh In', 'Workout']
    const forms = [
        <RunningForm setSelection={setSelection} uid={uid} />,
        <WeightForm setSelection={setSelection} uid={uid} />,
        <WorkoutForm setSelection={setSelection} uid={uid} />
    ]

    return (
        <FormSelector
            selection={selection}
            setSelection={setSelection}
            formOptions={formOptions}
            forms={forms}
            image={log}
            title='I completed a...'
        />
    );
}

export default ActivityLog;