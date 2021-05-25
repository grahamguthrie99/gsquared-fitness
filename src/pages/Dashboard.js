import React, { useContext, useState } from 'react';
import { AuthContext } from '../session/AuthContext';
import WorkoutReport from "../reports/WorkoutReport"
import { FormSelector } from "../components/FormSelector"
import report from "../assets/images/report.svg"

const Dashboard = () => {
    const [selection, setSelection] = useState(0);
    const { authState: { user } } = useContext(AuthContext);
    const { uid } = user || JSON.parse(localStorage.getItem("user"))
    const formOptions = ['Workouts']
    const reports = [
        <WorkoutReport setSelection={setSelection} uid={uid} />
    ]

    return (
        <FormSelector
            selection={selection}
            setSelection={setSelection}
            formOptions={formOptions}
            forms={reports}
            image={report}
            title='I want to see the performance of my...'
        />
    );
}

export default Dashboard;