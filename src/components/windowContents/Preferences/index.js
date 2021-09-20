import React, { useState } from "react";
import BackgroundColor from "./BackgroundColor";
import { useMyTheme } from "../../MyThemeProvider";
import { SWindowWrapper, SIconFile, SIconsGrid } from "../styles";

const SystemPreferences = () => {
  const { updateTheme } = useMyTheme();
  const [currentPreference, setPreference] = useState();

  const preferences = [
    { name: "Background", component: BackgroundColor, props: { updateTheme } },
    { name: "Date & Time", component: BackgroundColor, props: { updateTheme } },
    { name: "Displays", component: BackgroundColor, props: { updateTheme } },
    { name: "General", component: BackgroundColor, props: { updateTheme } },
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
        <PrefComponent {...currentPreference.props} />
      </SWindowWrapper>
    );
  }

  return <SWindowWrapper>{iconGrid}</SWindowWrapper>;
};

export default SystemPreferences;
