import { Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface Tag {
  label: string;
}

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: Tag[];
  imageUrl: string;
  learnMoreUrl: string;
  isReversed?: boolean;
}

const CaseStudyCard = ({
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  learnMoreUrl,
  isReversed = false,
}: CaseStudyCardProps) => {
  const ImageSection = () => (
    <>
      <div
        className={`flex w-[100%] ${
          isReversed
            ? "md:justify-end md:mr-4"
            : "justify-start md:ml-100 lg:ml-140"
        }`}
      >
        <div
          className={`md:absolute md:top-00 max-w-[300px] bottom-2 z-40 bg-linear-to-l from-[#006EAD]/80 from-40% to-[#006EAD]/100 text-white px-6 py-2 text-2xl font-bold`}
        >
          {subtitle}
        </div>
      </div>
      <div
        className={`hidden md:flex absolute h-[80%] max-w-[500px] overflow-hidden ${
          isReversed
            ? "md:left-16 md:w-[40%] md:p-14"
            : "md:right-12 md:w-[45%] md:p-8"
        }`}
      >
        {/* <div
          className={`absolute ${
            isReversed ? "left-10 top-22" : "left-6 top-18"
          }  text-white text-xs uppercase tracking-wide px-3 py-1 rounded`}
        >
          CASE DE SUCESSO
        </div> */}
        {/* <div className={`mt-14 text-white text-left`}>
          <Typography sx={{ fontSize: "2.8em" }} className="font-semibold">
            {title}
          </Typography>
        </div> */}
        <div className="absolute inset-0">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} case study`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );

  const ContentSection = () => (
    <>
      <div className="flex justify-center md:flex-col items-start md:justify-start">
        <div
          className={`flex flex-wrap absolute px-6 top-10 md:top-2 justify-center items-center md:relative gap-4 mb-8 ${
            isReversed
              ? "md:ml-12 md:justify-start"
              : "top-20 md:ml-1 md:justify-end"
          }`}
        >
          {tags.map((tag, index) => (
            <Button
              key={index}
              variant="contained"
              size="small"
              sx={{
                backgroundImage: "#006EAD",
                fontSize: "0.85 76rem",
                fontWeight: "normal",
                borderRadius: "5px",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                px: 2,
                py: 0.5,
                "&:hover": { backgroundColor: "#0052a3" },
              }}
            >
              {tag.label}
            </Button>
          ))}
        </div>

        <div
          className={`flex flex-col pt-26 bg-linear-to-t from-[#006EAD]/80 to-[#9EE2FE] p-6 md:p-10 ${
            isReversed
              ? "pt-34 md:w-[90%]"
              : "md:w-[55%] md:mr-30 md:justify-start"
          }`}
        >
          <Typography
            className={`text-blue-900 mb-12 px-5 py-4 ${
              isReversed ? "" : "md:pr-16"
            }`}
          >
            {description}
          </Typography>
          <div
            className={`flex justify-end pr-3 ${
              isReversed ? "md:justify-end" : "md:justify-start pr-16"
            }`}
          >
            <Button
              href={learnMoreUrl}
              endIcon={<ArrowRightAltIcon />}
              sx={{ color: "#fff", fontWeight: "100" }}
            >
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`flex flex-col mx-1 gap-0 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-col items-start md:ml-16"
      }`}
    >
      {isReversed ? (
        <>
          <div className="flex order-1 md:order-2 md:w-1/2">
            <ImageSection />
          </div>
          <div className={`relative order-2 md:order-1 md:w-2/3`}>
            <ContentSection />
          </div>
        </>
      ) : (
        <>
          <ImageSection />
          <ContentSection />
        </>
      )}
    </div>
  );
};

export default CaseStudyCard;
