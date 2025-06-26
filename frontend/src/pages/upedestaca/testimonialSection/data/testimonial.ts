import type { Testimonial } from "../types/testimonial";
import rebecaMeloPhoto from "../../../../assets/imagens/rebecaMelo.png"
import danielUrquizaPhoto from "../../../../assets/imagens/danielUrquiza.png"

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rebeca Melo",
    role: "Coordenadora de Atração e Seleção",
    company: "ASA Indústria",
    quote:
      "Estamos muito satisfeitos com a experiência no evento! A excelência no atendimento e a atenção aos detalhes foram evidentes em cada etapa. O alto nível de planejamento, organização e execução refletiu o cuidado da equipe em garantir que tanto expositores quanto participantes tivessem uma vivência proveitosa e bem estruturada. A grande quantidade de inscritos na vaga do nosso programa de estágio também reforça o sucesso do evento em atrair talentos qualificados.",
    image: `${rebecaMeloPhoto}`,
  },
  {
    id: 2,
    name: "Daniel Urquiza",
    role: "Diretor de Gente e Gestão",
    company: "Praso",
    quote:
      "Estamos muito satisfeitos com o evento! A organização foi excelente e vários pontos merecem destaque, como a alta adesão de público, que trouxe grande visibilidade para os stands, a estrutura bem planejada, e a diversidade de cursos e universidades representadas, que ampliou a troca de experiências e networking. A organização realmente está de parabéns, foi uma experiência incrível!",
    image: `${danielUrquizaPhoto}`,
  },
];
