import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Link } from "react-router-dom";

interface ResourceCardProps {
  type: "E-BOOK" | "INFOGRÁFICO";
  title: string;
  imageUrl: string;
  downloadUrl: string;
  showDownloadButton?: boolean;
}

function ResourceCard({
  type,
  title,
  imageUrl,
  downloadUrl,
  showDownloadButton = false,
}: ResourceCardProps) {
  return (
    <Card className="h-full flex flex-col" sx={{borderRadius: '10px'}}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl || "/placeholder.jpg"}
        alt={title}
        className="h-48 object-cover"
      />

      <CardContent className="p-4 text-center flex-grow flex flex-col">
        <Typography variant="subtitle1" color="primary" className="font-medium" sx={{fontFamily: "Montserrat"}}>
          {type}
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}className="font-semibold flex-grow" >
          {title}
        </Typography>

      </CardContent>
      {showDownloadButton && (
          <Button
            component={Link}
            to={downloadUrl}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#005396",
              borderRadius: '0px 0px 5px 5px',
              "&:hover": {
                backgroundColor: "#063a6a",
              },
            }}
          >
            BAIXE AGORA <FileDownloadOutlinedIcon sx={{ ml: 2, my: 0.5 }} />
          </Button>
        )}
    </Card>
  );
}

export default ResourceCard;
