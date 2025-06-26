import { Container } from "@mui/material";
import BlogPost from "../blogPost/BlogPost";
import blog1 from "../../../assets/imagens/blog1.png"
import blog2 from "../../../assets/imagens/blog2.png"
import blog3 from "../../../assets/imagens/blog3.png"
import blog4 from "../../../assets/imagens/blog4.png"

// Sample blog data - in a real app, this would come from an API or props
const blogPosts = [
  {
    id: 1,
    imageUrl: `${blog1}`,
    title: "Marketing de Dados: O Futuro das Estratégias",
    description:
      "O marketing está passando por uma revolução com a transformação digital e o uso de dados. O Data-Driven Marketing permite alinhar estratégias à inteligência dos dados, integrando CRM, automação e Machine Learning para personalizar conteúdos e otimizar decisões. Essa abordagem transforma o setor, potencializando vendas, inteligência de mercado e a eficiência das empresas.",
  },
  {
    id: 2,
    imageUrl: `${blog2}`,
    title: "Inteligência Artificial para Produtividade Empresarial",
    description:
      "A Inteligência Artificial está transformando os negócios ao elevar a eficiência e permitir que equipes foquem em tarefas estratégicas. Automatizando processos repetitivos, a IA otimiza operações e se torna essencial para empresas que buscam prosperar em um mercado dinâmico.",
  },
  {
    id: 3,
    imageUrl: `${blog3}`,
    title: "Pipeline de Vendas: O Que é e Como Impactam as Suas Vendas?",
    description:
      "O Pipeline de Vendas é um método fundamental para empresas que desejam atrair novos clientes e manter um relacionamento comercial saudável. Através dele, é possível visualizar de forma eficiente as etapas do processo de vendas e da jornada do cliente, possibilitando uma compreensão detalhada do que deve ser realizado em cada fase, buscando, assim, ter um funil de vendas mais direcionado para o objetivo principal do negócio.",
  },
  {
    id: 4,
    imageUrl: `${blog4}`,
    title: "Relatórios Financeiros: O Que São e Como Aplicá-los Na Prática?",
    description:
      "Em meio a uma rotina empresarial repleta de informações e dados cruciais, os relatórios financeiros emergem como ferramentas indispensáveis para os gestores. Além de acompanhar regularmente esses relatórios, é possível obter uma visão abrangente da empresa e avaliar se ela está trilhando o caminho certo para alcançar os objetivos e metas estabelecidos.",
  },
];

export default function BlogList() {
  return (
    <section className="pb-20 m-auto max-w-[1000px]">
      <Container>
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    </section>
  );
}
