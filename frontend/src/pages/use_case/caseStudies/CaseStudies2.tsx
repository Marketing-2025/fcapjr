import type React from "react";
import { Chip } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imagePosition: "left" | "right";
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
}

export function CaseStudy2({
  title,
  subtitle,
  description,
  tags,
  imagePosition,
  bgColor,
  textColor,
  icon,
}: CaseStudyProps) {
  return (
    <div className="mb-16 relative">
      {/* Blue accent squares */} 
      <div className="absolute left-4 -top-5 w-16 h-12 bg-blue-500/80"></div>
      {imagePosition === "right" && (
        <div className="absolute -right-7 bottom-12 w-16 h-12 bg-blue-500/80"></div>
      )}
      {imagePosition === "left" && (
        <div className="absolute left-6 bottom-20 w-12 h-8 bg-blue-500/80"></div>
      )}

      <div className="flex flex-col md:flex-row gap-0 ml-10">
        {/* Image/Title Section */}
        <div
          className={`
            w-full md:w-96 p-8 flex flex-col justify-center h-64
            ${bgColor}
            ${textColor}
            ${imagePosition === "right" ? "md:order-2" : "md:order-1"}
          `}
        >
          <div className="mb-4 uppercase text-sm font-light   tracking-wide">
            CASE DE SUCESSO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-1 uppercase tracking-wide flex items-center gap-2">
            {title} {icon}
          </h2>

          {/* Subtitle shown on mobile only */}
          <div className="md:hidden mt-6 bg-blue-100 p-4 text-blue-900 text-2xl font-bold">
            {subtitle}
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`
            w-full md:w-2/3 h-72 mt-10 bg-blue-100 p-8 relative
            ${imagePosition === "right" ? "md:order-1" : "md:order-2"}
          `}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md"
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-800 text-lg mb-8">{description}</p>

          {/* CTA */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center gap-2 uppercase text-sm no-underline"
            >
              SAIBA MAIS <ArrowRightAltIcon fontSize="small" />
            </a>
          </div>

          {/* Subtitle shown on desktop only */}
          <div className="hidden md:block absolute bottom-0 -left-80 bg-blue-100 p-4 text-blue-900 text-3xl font-bold">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
