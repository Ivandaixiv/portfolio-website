import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const Skills = () => {
  return (
    <PieChart
      animate={true}
      label={({ dataEntry }) => dataEntry.title}
      data={[
        { title: "React", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" },
      ]}
    />
  );
};

export default Skills;
