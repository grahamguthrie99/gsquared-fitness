import React, { useContext, useState } from "react";
import { AuthContext } from "../session/AuthContext";
import WorkoutReport from "../reports/WorkoutReport";
import { WorkoutForm } from "../forms/WorkoutForm";
import { ViewSelector } from "../components/ViewSelector";
import report from "../assets/images/report.svg";

const Dashboard = () => {
  const [selection, setSelection] = useState(-1);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const { uid } = user || JSON.parse(localStorage.getItem("user"));
  const viewOptions = ["Log Workout", "View History"];
  const views = [
    <WorkoutForm key={0} setSelection={setSelection} uid={uid} />,
    <WorkoutReport key={1} setSelection={setSelection} uid={uid} />,
  ];

  return (
    <ViewSelector
      selection={selection}
      setSelection={setSelection}
      viewOptions={viewOptions}
      views={views}
      image={report}
    />
  );
};

export default Dashboard;
