import { Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="py-20 px-6">
      <Container>
        <div className="flex flex-col justify-center m-auto items-center md:gap-20 md:flex-row">
          <div>
            <Typography
              className="text-[#005396]"
              sx={{ fontFamily: "Montserrat", fontSize: "3.5em", fontWeight: "550" }}
            >
              CASES DE
              <br />
              SUCESSO
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: { xs: "1.5em", md: "1.8em"} }} className="text-2xl w-72 text-[#005396]">
              Como impactamos nosssos clientes.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
