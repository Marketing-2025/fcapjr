import { Typography } from "@mui/material";

interface AwardCardProps {
  title: string;
  logoSrc: string;
  logoAlt: string;
  hasBorder?: boolean;
}

const AwardCard = ({
  title,
  logoSrc,
  logoAlt,
  hasBorder = true,
}: AwardCardProps) => {
  return (
    <div
      className={`px-4 h-full ${hasBorder ? "border-r border-gray-300" : ""}`}
    >
      <Typography
        variant="subtitle1"
        className="text-[#00509e] text-center font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: title.replace(/<br\/>/g, "<br>") }}
      />
      <div className="flex justify-center">
        <img
          src={logoSrc || "/placeholder.svg"}
          alt={logoAlt}
          className="h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default AwardCard;
