import React, { useState } from "react";
import BackgroundColor from "./BackgroundColor";
import { SWindowWrapper, SIconFile, SIconsGrid } from "../styles";

const SystemPreferences = () => {
  const [currentPreference, setPreference] = useState();

  const preferences = [
    { name: "Background", component: BackgroundColor },
    { name: "Date & Time", component: BackgroundColor },
    { name: "Displays", component: BackgroundColor },
    { name: "General", component: BackgroundColor },
  ];

  const iconGrid = (
    <SIconsGrid>
      {preferences.map((preference, idx) => (
        <SIconFile key={idx}>
          <span onClick={() => setPreference(preference)} />
          {preference.name}
        </SIconFile>
      ))}
    </SIconsGrid>
  );

  if (currentPreference) {
    const PrefComponent = currentPreference.component;
    return (
      <SWindowWrapper>
        <PrefComponent />
      </SWindowWrapper>
    );
  }

  return <SWindowWrapper>{iconGrid}</SWindowWrapper>;
};

export default SystemPreferences;
