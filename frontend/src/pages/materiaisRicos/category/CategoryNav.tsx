import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function CategoryNav() {
  const categories = [
    { name: "TODOS OS MATERIAIS", href: "/materiais" },
    {
      name: "GESTÃO DE PESSOAS E PROCESSOS",
      href: "/materiais/gestao-pessoas",
    },
    { name: "NOVOS NEGÓCIOS", href: "/materiais/novos-negocios" },
    { name: "MARKETING E VENDAS", href: "/materiais/marketing-vendas" },
    { name: "GESTÃO FINANCEIRA", href: "/materiais/gestao-financeira" },
    { name: "GESTÃO ESTRATÉGICA", href: "/materiais/gestao-estrategica" },
  ];

  return (
    <Box
      sx={{ backgroundColor: "#063a6a", color: "white", position: "relative" }}
    >
      <Box className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-between">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-center px-2 py-2 text-sm md:text-base"
            >
              <Link
                to={category.href}
                className="text-white hover:text-blue-200 transition-colors whitespace-nowrap"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <div className="w-full">
        <div className="bg-blue-900 relative h-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-gray-100"></div>
        </div>
      </div>
    </Box>
  );
}

export default CategoryNav;
