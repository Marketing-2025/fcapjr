import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";

interface CaseCardProps {
  title: string;
  description: string;
}

const CaseCard = ({ title, description }: CaseCardProps) => {
  return (
    <Grid item xs={12} md={4}>
      <Card className="p-6 h-full">
        <CardContent className="flex flex-col items-center">
          <StarIcon className="text-blue-700 mb-4" fontSize="large" />
          <Typography variant="h6" className="font-bold text-blue-900 mb-2">
            {title}
          </Typography>
          <Typography className="text-gray-700">{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CaseCard;
