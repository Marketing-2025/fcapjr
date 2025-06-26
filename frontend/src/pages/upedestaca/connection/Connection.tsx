import CountdownTimer from "../../../components/CountDown/CountdownTimer";
import { Container } from "@mui/material";
import upeDestaca2025 from "../../../assets/imagens/upeDestaca2025.png";
import bgUpeDestaca from "../../../assets/imagens/bgUpeDestaca.png";
import fcapLogo from "../../../assets/logos/fecap.png";
import sebraeLogo from "../../../assets/logos/sebrae.png";
import upe from "../../../assets/logos/upe.png";

import { useNavigate } from "react-router-dom";

const UpeDestaca = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col" style={{ overflowX: "hidden" }}>
      <main
        className="relative flex-1 bg-linear-to-b from-[#2D0EC8] to-[#160762] text-white"
        style={{ overflowX: "hidden" }}
      >
        {/* Background overlay */}
        <div
          style={{ backgroundImage: `url(${bgUpeDestaca})` }}
          className="absolute inset-0 z-0 bg-[image:var(--backgroundImage)] bg-cover bg-center opacity-40"
        ></div>

        {/* Hero Section */}
        <Container className="relative z-10 mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            <div className="text-left">
              <h2 className="text-4xl font-light md:text-5xl lg:text-6xl">
                amplie
                <br />
                avance
                <br />
                <span className="font-medium">destaque</span>
              </h2>
            </div>

            <div className="h-16 w-[0.1px] bg-white md:h-32"></div>

            <div>
              <div className="flex flex-col items-center">
                <img
                  className="w-72 max-w-[400px]"
                  src={upeDestaca2025}
                  alt=""
                />
              </div>
            </div>
          </div>

          <p className="mt-12 text-xl font-medium md:text-2xl">
            10 e 11 de Junho
          </p>

          {/* Countdown Timer */}
          <CountdownTimer targetDate="2025-06-10T00:00:00" />

          {/* CTA Button */}
          <button
            className="mt-12 bg-linear-to-r from-[#0417C3] via-[#120763]/30 to-[#0615B8] px-10 py-4 rounded-lg text-xl font-semibold uppercase text-white hover:bg-blue-700"
            onClick={() => navigate("/upe-destaca#form-contato-eventPage")}
          >
            Quero Participar
          </button>

          {/* Description */}
          <div className="mt-16 max-w-4xl space-y-6 text-center">
            <p className="text-lg md:text-xl">
              O UPE Destaca chega à sua terceira edição como uma iniciativa
              organizada pela FCAP JR. Consultoria, em parceria com o Sebrae.
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold">
                Nossa missão é conectar empresas ao ecossistema universitário
                pernambucano,
              </span>{" "}
              impulsionando o desenvolvimento de talentos locais, promovendo o
              empreendedorismo, fortalecendo a marca empregadora das empresas
              parceiras e facilitando a atração e contratação de jovens
              profissionais promissores.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <img src={fcapLogo} alt="FCAP JR" className="h-8 w-auto" />
            <img src={sebraeLogo} alt="SEBRAE" className="h-12 w-auto" />
            <img src={upe} alt="UPE" className="h-12 w-auto" />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default UpeDestaca;
