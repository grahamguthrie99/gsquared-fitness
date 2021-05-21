import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';
import { Loader } from '../components/Loader';


const RunningReport = ({ uid }) => {
    const firebase = useContext(FirebaseContext)
    const [runs, setRuns] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (uid)
            firebase.db.ref("/runs/" + uid)
                .on("value", function (snapshot) {
                    setRuns(snapshot.val())
                    setLoading(false);
                })

    }, [firebase, uid])

    return (
        loading ? <Loader /> : <ul>{
            runs ?
                Object.keys(runs).map(function (key, index) {
                    const timestamp = new Date(JSON.parse(runs[key].timestamp)).toLocaleDateString("en-US")
                    return (
                        <li key={index}>
                            {runs[key].distance} miles in {runs[key].min}:{runs[key].sec} on {timestamp}
                        </li>
                    )
                }) :
                <li>You have not logged any runs.</li>
        }</ul>
    );
}

export default RunningReport;