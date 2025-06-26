import React, { useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CaseStudyCard from "./CaseStydyCard";
import murtaConsultoria from "../../../assets/casesUse/murtaConsultoria.jpg";
import hope from "../../../assets/casesUse/hope.png";
import farmaciaTradicao from "../../../assets/casesUse/farmaciaTradicao.png";
import fkEngenharia from "../../../assets/casesUse/engenhariaFk.jpg";
import arpel from "../../../assets/casesUse/arpel.png";
import stericycle from "../../../assets/casesUse/stericycle.jpg";
import postoPichilau from "../../../assets/casesUse/postoPichilau.jpg";
import interiorati from "../../../assets/casesUse/interiorati.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Murta Consultoria",
      subtitle: "Murta Consultoria",
      description:
        "A Murta Consultoria é uma empresa de consultoria que oferece soluções personalizadas para empresas em diversas áreas, incluindo gestão, marketing e processos. Com uma equipe de especialistas, a Murta Consultoria busca entender as necessidades de cada cliente e desenvolver estratégias eficazes para alcançar seus objetivos.",
      tags: [
        { label: "Identidade Organizacional" },
        { label: "Planejamento Estratégico" },
      ],
      imageUrl: murtaConsultoria,
      learnMoreUrl:
        "https://drive.google.com/file/d/16bOGfk_e8vJRaDQiABLTR5kkpDSlQTx4/view?usp=sharing",
      isReversed: true,
    },
    {
      id: 2,
      title: "Hope",
      subtitle: "Hospital de Olhos",
      description:
        "O Hope, renomada instituição de oftalmologia, foi instruída passo a passo visando alinhar sua cultura organizacional à prática cotidiana dos colaboradores. Por meio de pesquisas qualitativas e quantitativas, a empresa redefiniu sua missão, visão e valores, criando uma identidade organizacional tangível. Como resultado, houve uma maior compreensão e adesão aos valores da empresa, facilitando a expansão e inovação no atendimento​.",
      tags: [
        { label: "Pessoas" },
        { label: "Clima Organizacional" },
        { label: "Indicadores" },
      ],
      imageUrl: hope,
      learnMoreUrl:
        "https://drive.google.com/file/d/1sJlxrwtCJ2Q1Zm5dIW2TcvAhEZZFEpt4/view?usp=sharing",
      isReversed: false,
    },
    {
      id: 3,
      title: "Farmácia Tradição",
      subtitle: "Farmácia Tradição",
      description:
        " A FCAP JR. conduziu uma pesquisa de mercado para entender os hábitos de consumo do público-alvo da Farmácia Tradição. O projeto incluiu a análise de concorrentes e a aplicação de pesquisas presenciais e virtuais nas 10 filiais da farmácia. Como principal resultado, houve um melhor direcionamento estratégico e a definição de estratégias comerciais mais assertivas, culminando em um NPS de 10 e a otimização das operações​.",
      tags: [
        { label: "Pesquisa Qualitativa" },
        { label: "Pesquisa Quantitativa" },
      ],
      imageUrl: farmaciaTradicao,
      learnMoreUrl:
        "https://drive.google.com/file/d/1vfwHuzPtRlnP42JpftuMufd4Ng5ObljB/view?usp=sharing",
      isReversed: true,
    },
    {
      id: 4,
      title: "FK Engenharia",
      subtitle: "FK Engenharia",
      description:
        "O trabalho com a FK Engenharia teve como principal objetivo otimizar seus processos internos, incluindo a digitalização de processos manuais e a melhoria na comunicação interna. A partir de um mapeamento detalhado de mais de 300 processos e 25 cargos, foram implementadas melhorias que aumentaram a eficiência operacional. A empresa agora apresenta uma organização mais ágil e inovadora, com processos bem estruturados e mais eficientes​.",
      tags: [
        { label: "Processos" },
        { label: "Otimizações" },
        { label: "Indicadores" },
      ],
      imageUrl: fkEngenharia,
      learnMoreUrl:
        "https://drive.google.com/file/d/1hj85MMjORq6LLbChYoZ3Me51GlTq4Vo0/view?usp=sharing",
      isReversed: false,
    },
    {
      id: 5,
      title: "Arpel",
      subtitle: "Arpel",
      description:
        "A FCAP JR. ajudou a Arpel, uma indústria de papelaria, a melhorar a eficiência operacional do setor de logística, com foco em processos internos. A consultoria incluiu o mapeamento de processos e a criação de ferramentas, como planilhas de controle de demanda e frete. Como resultado, a Arpel teve grande redução de custos operacionais e o aumento da precisão e autonomia no cálculo de frete, resultando em uma operação mais ágil e eficiente​.",
      tags: [
        { label: "Operações " },
        { label: "Otimizações" },
        { label: "Logística" },
      ],
      imageUrl: arpel,
      learnMoreUrl:
        "https://drive.google.com/file/d/1evQeipYjv-xedyPFJ1_aod42oB8unK1V/view?usp=sharing",
      isReversed: true,
    },
    {
      id: 6,
      title: "Sterycicle",
      subtitle: "Sterycicle",
      description:
        "O projeto focou na estruturação de estratégias para a Sterycicle, uma empresa que se dedica ao reaproveitamento de resíduos recicláveis. A consultoria envolveu um mapeamento do mercado, análise de concorrentes e definição de diretrizes para fortalecimento da presença digital. A otimização prática foi uma organização mais eficiente e uma comunicação mais clara com os clientes, resultando em um crescimento da visibilidade e alinhamento estratégico para a empresa.",
      tags: [
        { label: "Processos" },
        { label: "Padronização" },
        { label: "Sustentabilidade" },
      ],
      imageUrl: stericycle,
      learnMoreUrl:
        "https://drive.google.com/file/d/11k63CMKJFjdws9X2AWz38McYWurKZIqU/view?usp=sharing",
      isReversed: false,
    },
    {
      id: 7,
      title: "Postos Pichilau",
      subtitle: "Postos Pichilau",
      description:
        "A consultoria para os Postos Pichilau teve como objetivo melhorar a gestão de seus processos operacionais e a eficiência da comunicação interna. Por meio de um levantamento das operações diárias e da implementação de novas práticas de gestão, o resultado foi uma maior agilidade nas operações, além da otimização no atendimento ao cliente e no processo de controle de estoques, proporcionando um aumento no desempenho da rede de postos.",
      tags: [
        { label: "Aplicativo" },
        { label: "Fidelização" },
        { label: "Comercial" },
      ],
      imageUrl: postoPichilau,
      learnMoreUrl:
        "https://drive.google.com/file/d/1AjlPElZRd3I4Hr5deYEyU0eOUZyZ-H-8/view?usp=sharing",
      isReversed: true,
    },
    {
      id: 8,
      title: "Interiorati",
      subtitle: "Interiorati",
      description:
        "Para a Interiorati, empresa especializada no design de interiores, a consultoria teve como foco a melhoria da eficiência operacional e o aumento da competitividade no mercado. Foram realizados estudos sobre a gestão de projetos e as necessidades dos clientes, resultando em um reposicionamento estratégico que otimizou os processos internos e aumentou a capacidade da empresa em lidar com projetos de maior porte, melhorando tanto a gestão interna quanto a experiência do cliente.",
      tags: [
        { label: "Estruturação" },
        { label: "Planejamento Estratégico" },
        { label: "Comercial" },
      ],
      imageUrl: interiorati,
      learnMoreUrl:
        "https://drive.google.com/file/d/1iKm4R7Tha1wrzZ24ZL6-teFwhZLhH6-c/view?usp=sharing",
      isReversed: false,
    },
  ];

  // Obter todas as tags únicas dos cases
  const allTags = Array.from(
    new Set(caseStudies.flatMap((c) => c.tags.map((t) => t.label)))
  );

  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Carrossel
  const tagsRef = useRef<HTMLDivElement>(null);

  // Drag para scroll
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (tagsRef.current?.offsetLeft || 0);
    scrollLeft = tagsRef.current?.scrollLeft || 0;
  };
  const handleMouseLeave = () => {
    isDown = false;
  };
  const handleMouseUp = () => {
    isDown = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (tagsRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (tagsRef.current) tagsRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollTags = (direction: "left" | "right") => {
    if (tagsRef.current) {
      const scrollAmount = 200;
      tagsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Filtrar cases por busca e tag
  const filteredCases = caseStudies.filter((c) => {
    const matchesTag = selectedTag
      ? c.tags.some((t) => t.label === selectedTag)
      : true;
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <>
      {/* Filtro de tags como carrossel */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={() => scrollTags("left")}
          className="p-2 rounded border border-gray-400 bg-white text-gray-500 hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon />
        </button>
        <div
          ref={tagsRef}
          className="flex gap-3 flex-nowrap overflow-x-auto px-2"
          style={{
            scrollBehavior: "smooth",
            width: "100%",
            background: "#eaf3fa", // cor igual ao fundo
            borderRadius: "8px",
            userSelect: "none",
            cursor: "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {allTags.map((tag) => {
            const wordCount = tag.trim().split(/\s+/).length;
            let width;
            let whiteSpace = "nowrap";
            let lineHeight = "1.1";
            // Se for muito grande, permite quebrar em duas linhas e aumenta altura
            if (tag.length > 22 || wordCount > 1) {
              width = `${Math.max(tag.length * 12, 220)}px`;
              whiteSpace = "normal";
              lineHeight = "1.2";
            }

            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-6 py-4 rounded font-semibold border transition text-xs flex items-center justify-center text-center ${
                  selectedTag === tag
                    ? "bg-[#006EAD] text-white"
                    : "bg-[#eaf3fa] text-[#006EAD] border-[#006EAD]"
                }`}
                style={{
                  borderWidth: "2px",
                  minWidth: "180px",
                  width,
                  maxWidth: "100%",
                  fontSize: "0.85rem",
                  height: "48px",
                  whiteSpace,
                  lineHeight,
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => scrollTags("right")}
          className="p-2 rounded border border-gray-400 bg-white text-gray-500 hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Campo de busca */}
      <div className="mb-8 flex justify-end">
        <input
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-64"
          style={{ outline: "none" }}
        />
      </div>

      {/* Lista filtrada */}
      {filteredCases.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          Nenhum case encontrado.
        </div>
      )}
      {filteredCases.map((caseStudy, index) => (
        <div
          key={caseStudy.id}
          className={
            index < filteredCases.length - 1
              ? "mb-24 relative flex justify-center"
              : "relative flex justify-center"
          }
        >
          <CaseStudyCard
            {...caseStudy}
            imageUrl={caseStudy.imageUrl}
            title={caseStudy.title}
            subtitle={caseStudy.subtitle}
            description={caseStudy.description}
            tags={caseStudy.tags}
            learnMoreUrl={caseStudy.learnMoreUrl}
            isReversed={caseStudy.isReversed}
          />
        </div>
      ))}
      <style>
        {`
          /* Esconde a barra de rolagem horizontal */
          div::-webkit-scrollbar {
            display: none;
          }
          div {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
};

export default CaseStudies;
