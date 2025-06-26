import type { ReactNode } from "react";
import { Typography } from "@mui/material";

interface AreaCardProps {
  icon: ReactNode;
  title: string;
}

const AreaCard = ({ icon, title }: AreaCardProps) => {
  return (
    <div className="flex items-center h-full">
      <div className="bg-[#00509e] p-4 flex items-center justify-center">
        {icon}
      </div>
      <div className="bg-white py-2 px-4 flex-1">
        <Typography variant="body1" className="text-lg">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default AreaCard;
