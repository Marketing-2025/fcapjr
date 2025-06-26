import { Card, CardContent, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

interface BlogPostProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function BlogPost({
  imageUrl,
  title,
  description,
}: BlogPostProps) {
  return (
    <Card className="mb-12 overflow-hidden shadow-sm">
      <CardContent style={{
    backgroundImage: `url(${imageUrl})`, backgroundColor: "rgba(255,255,255,0.8)", backgroundBlendMode: "lighten"
  }} className="bg-cover bg-center backdrop-blur-xs md:!bg-none p-8">
        <div className="flex flex-col md:flex-row gap-8">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="hidden md:block rounded-md w-[50%] h-auto object-cover"
            />
          

          <div className="md:w-2/3 flex flex-col justify-right">
            <div className="flex flex-row items-center md:flex-col md:items-start lg:items-center lg:flex-row gap-3 mb-4">
              <div className="w-64 h-0.5 bg-[#0a4d8b]"></div>
            

            <Typography
              variant="h5"
              component="h2"
              className="font-bold text-[#000000] mb-4"
            >
              {title}
            </Typography></div>

            <Typography variant="body1" className="text-gray-700 mb-6">
              {description}
            </Typography>

            <Button sx={{ fontWeight: '100', fontSize: '1.2em' }}
              endIcon={<ArrowForward />}
              className="text-[#0a4d8b] self-end hover:underline normal-case p-0"
            >
              LEIA MAIS
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
