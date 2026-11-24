/* Painel PES 2.0 · indicadores.js
   ----------------------------------------------------------------------
   Valores da matriz GIBS que NÃO vêm das automações.

   · receita ................. preenchida automaticamente pelo workflow
                               "Painel PES · 6 · Receita e indicadores".
                               Não precisa digitar; se você escrever um valor
                               aqui, a próxima execução o substitui.
   · margem .................. % da margem (receita ÷ despesas). Vem do
                               financeiro, então é digitada aqui.
   · satisfacao_areas ........ nota da pesquisa de satisfação das áreas
                               técnicas com a área (0 a 100).
   · satisfacao_associados ... nota da pesquisa de satisfação dos associados
                               (0 a 100).

   Os demais indicadores (participação nos pagos, nos gratuitos e satisfação
   dos cursos) são calculados pelo painel e não entram aqui.

   Para informar um valor, troque null pelo número. Exemplo: "margem": 78.
   Para começar um ano novo, copie o bloco e troque o ano.
   ---------------------------------------------------------------------- */
window.PES_METAS = {
  unidadeReceita: 'R$ mil',
  anos: {
    "2026": {
      informados: {
        margem: 87,
        satisfacao_areas: null,
        satisfacao_associados: null
      }
    },
    "2025": {
      informados: {
        margem: null,
        satisfacao_areas: null,
        satisfacao_associados: null
      }
    }
  }
};
