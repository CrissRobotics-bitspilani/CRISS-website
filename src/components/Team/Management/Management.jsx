import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import { ManagementTeam } from "../TeamData";

export default function Management() {
  const batch2023 = ManagementTeam.filter(d => d.batch === "2023");
  const batch2024 = ManagementTeam.filter(d => d.batch === "2024");

  return (
    <div className="memberContainer">

      <h6>Batch of 2023</h6>
      <div className="members">
        {batch2023.map(data => (
          <TeamCard
            key={data.id}
            name={data.name}
            profile={data.img}
            position={data.position}
            linkedin={data.linkedin}
            github={data.github}
            insta={data.insta}
          />
        ))}
      </div>

      <h6>Batch of 2024</h6>
      <div className="members">
        {batch2024.map(data => (
          <TeamCard
            key={data.id}
            name={data.name}
            profile={data.img}
            position={data.position}
            linkedin={data.linkedin}
            github={data.github}
            insta={data.insta}
          />
        ))}
      </div>

    </div>
  );
}
