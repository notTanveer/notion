import React from "react";
import CustomDialogTrigger from "../global/custom-dialog-trigger";
import SettingForm from "./settings-form";

interface SettingsProps {
  children: React.ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children }) => {
  return (
    <CustomDialogTrigger header="Settings" content={<SettingForm />}>
      {children}
    </CustomDialogTrigger>
  );
};

export default Settings;
