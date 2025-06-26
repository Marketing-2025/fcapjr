import type React from "react";
import { Grid, Typography } from "@mui/material";
import type { Statistic } from "../testimonialSection/types/statistics";

interface StatisticItemProps {
  statistic: Statistic;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ statistic }) => {
  return (
    <div className="flex mt-1 mb-6 justify-start items-center gap-6">
      <Grid item xs={3} sm={2}>
        <Typography sx={{ fontSize: "4.5em", fontWeight: "bold" }} className="text-[#001AD2]">
          {statistic.value}
        </Typography>
      </Grid>
      <Grid item xs={9} sm={10}>
        <Typography variant="body1" className="w-72 text-[#001AD2]">
          {statistic.description}
        </Typography>
      </Grid>
    </div>
  );
};

export default StatisticItem;
