import { CaseStudy2 } from "../caseStudies/CaseStudies2";
import { Pagination } from "../pagination/Pagination";
// import { Footer } from "./components/Footer"

function Connection() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Case Studies Section */}
      <div className="container mx-auto px-4 py-12">
      <CaseStudy2
          title="E-LOG"
          subtitle="E-LOG"
          description="A E-LOG Pátio é uma empresa de apoio logístico do complexo portuário de Suape, para triagem e estacionamento para caminhões, além de outros serviços de suporte direcionados aos caminhoneiros. Assim, o pátio garante a assistência, agilidade e segurança necessária aos caminhoneiros."
          tags={["Pesquisa qualitativa", "Insumos coletados"]}
          imagePosition="left"
          bgColor="bg-red-700"
          textColor="text-white"
        />

        <CaseStudy2
          title="MOURA TACÓGRAFOS"
          subtitle="Moura Tacógrafos"
          description="A E-LOG Pátio é uma empresa de apoio logístico do complexo portuário de Suape, para triagem e estacionamento para caminhões, além de outros serviços de suporte direcionados aos caminhoneiros. Assim, o pátio garante a assistência, agilidade e segurança necessária aos caminhoneiros."
          tags={["Pesquisa qualitativa", "Insumos coletados"]}
          imagePosition="right"
          bgColor="bg-red-700"
          textColor="text-white"
        />

        {/* First Case Study */}
        <CaseStudy2
          title="EMPÓRIO GREENCARE"
          subtitle="Emporio greencare"
          description="A Empório GreenCare é uma loja de cosméticos orgânicos, veganos e não testados em animais e foi aberta recentemente. Para entender a viabilidade desse negócio, Flávia, a proprietária, procurou a FCAP JR. Consultoria e, como resultado, conseguiu abrir seu novo empreendimento."
          tags={["Pesquisa qualitativa", "Insumos coletados"]}
          imagePosition="left"
          bgColor="bg-red-700"
          textColor="text-white"
        />

        {/* Second Case Study */}
        <CaseStudy2
          title="DULINO"
          subtitle="Dulino"
          description="A Dulino nasceu em Recife no ano de 2013, e é uma empresa que visa trabalhar com robótica educacional. Atendendo a alunos do 3° ao 9° ano, a Dulino pretende fazer com que os adolescentes aprendam na prática aquilo que é dado em sala de aula, através da robótica, incentivando habilidades como empreendedorismo, criatividade e trabalho em equipe."
          tags={["Otimizações", "Processos"]}
          imagePosition="right"
          bgColor="bg-indigo-800"
          textColor="text-white"
        />

        {/* Third Case Study */}
        <CaseStudy2
          title="Cult Student Housing"
          subtitle="Cult hotel"
          description="O Cult Hotel é um hotel pernambucano com mais de 20 anos de mercado e que, recentemente, a partir do projeto realizado com a FCAP JR. Consultoria, inovou no seu modelo de negócios e vem conquistando resultados impressionantes."
          tags={[
            "Mudança no modelo de negócio",
            "Focous group",
            "Pesquisa quantitativa",
          ]}
          imagePosition="left"
          bgColor="bg-teal-800"
          textColor="text-white"
          icon={<span className="text-amber-500">⌂</span>}
        />

        <Pagination currentPage={3} totalPages={4} />
      </div>

      {/* CTA Section */}
      {/* <div className="bg-blue-900 py-8 text-center">
        <Button
          variant="contained"
          className="bg-amber-50 hover:bg-amber-100 text-black font-medium rounded-md px-6 normal-case"
        >
          Planeje seu projeto
        </Button>
      </div> */}

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}

export default Connection;
