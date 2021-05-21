import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../config/Firebase/FirebaseContext';
import { Loader } from '../components/Loader';


const WeightReport = ({ uid }) => {
    const firebase = useContext(FirebaseContext)
    const [weights, setWeights] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (uid)
            firebase.db.ref("/weights/" + uid)
                .on("value", function (snapshot) {
                    setWeights(snapshot.val())
                    setLoading(false)
                })

    }, [firebase, uid])

    return (
        loading ? <Loader /> : <ul>{
            weights ?
                Object.keys(weights).map(function (key, index) {
                    const timestamp = new Date(JSON.parse(weights[key].timestamp)).toLocaleDateString("en-US")
                    return (
                        <li key={index}>
                            {weights[key].weight} on {timestamp}
                        </li>
                    )
                }) :
                <li>You have not weighed in.</li>
        }</ul>
    );
}

export default WeightReport;