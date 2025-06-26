import type React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { Testimonial } from "../testimonialSection/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      className={`flex relative items-center my-8 md:my-18 gap-10 justify-center ${
        isMobile
          ? "flex-col"
          : index % 2 === 0
          ? "flex-row"
          : "flex-row-reverse"
      }`}
    >
      <div
        className={`flex justify-center items-end md:max-w-[80%] h-64 md:p-0 md:mt-0 ${
          isMobile ? "w-full mt-12" : ""
        }`}
      >
        <Card elevation={0} className="bg-white w-[90%] max-w-[500px]">
          <CardContent className="overflow-hidden">
            <Typography
              variant="body1"
              component="blockquote"
              className="italic text-gray-700 border-blue-600 pl-4 py-4"
            >
              "{testimonial.quote}"
            </Typography>
            <div
              className={`w-full bottom-2 justify-self-end absolute ${
                isMobile
                  ? "flex-col"
                  : index % 2 === 0
                  ? "right-88 lg:right-112 h-2 bg-linear-to-r from-[#D9D9D9] to-[#0B1096]"
                  : "-right-78 h-2 max-w-[90%] bg-linear-to-r from-[#0B1096] to-[#D9D9D9]"
              }`}
            ></div>
          </CardContent>
        </Card>
      </div>

      <Grid
        item
        xs={12}
        md={4}
        className={`flex flex-col items-center md:items-start ${
          isMobile ? "w-56" : ""
        }`}
      >
        <Box
          className="bg-[#110F8E] overflow-hidden rounded-lg mb-3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            width: isMobile ? "100%" : "auto",
            maxWidth: isMobile ? 220 : 192,
            margin: isMobile ? "0 auto" : 0,
            height: 192,
          }}
        >
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="rounded object-cover mx-auto"
            style={{
              width: "120%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
        <Box className="text-center md:text-left">
          <Typography variant="h6" className="text-[#001AD2] font-bold">
            {testimonial.name},
          </Typography>
          <Typography variant="body2" className="text-gray-700 w-48">
            {testimonial.role} na
          </Typography>
          <Typography
            sx={{ fontSize: "1em", fontWeight: "bold" }}
            className="text-[#001AD2] font-bold"
          >
            {testimonial.company}
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default TestimonialCard;
