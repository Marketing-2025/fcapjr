import { Container, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export default function BlogHeader() {
  return (
    <section className="py-16 relative m-auto max-w-[1000px]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between h-72">
          <div className="absolute top-0 -left-20 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-600 opacity-50" />
            <div className="absolute top-6 left-80 w-36 h-28 bg-gradient-to-br from-blue-300 to-blue-600 opacity-50" />
            <div className="absolute bottom-40 left-124 w-20 h-26 bg-gradient-to-br from-blue-300 to-blue-600 opacity-50" />
            <div className="absolute bottom-20 left-112 w-12 h-20 bg-gradient-to-br from-blue-300 to-blue-600 opacity-50" />
          </div>

          <div className="z-10 md:w-1/2">
            <h1 className="text-[#0a4d8b] text-5xl font-semibold mb-8 md:ml-24">BLOG</h1>
          </div>

          <div className="z-10 mx-10 text-center md:text-right">
            <div className="mb-14 relative">
              <div className="relative">
                <InputBase
                  placeholder="Buscar no blog..."
                  className="w-96 md:max-w-md py-3 px-4 rounded-md bg-white"
                  endAdornment={<SearchIcon className="text-gray-500" />}
                />
              </div>
            </div>

            <p className="text-[#0a4d8b] text-center text-2xl m-auto w-[17em] font-medium">
              Confira aqui artigos, tendências e guias práticos que irão ajudar
              no sucesso do seu negócio.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
