export const course = [
  {
    name: "Ciência da Computação",
    courseware: [
      {
        name: "Inteligência Artificial I",
        file: "aula-7-inteligencia-artificial.ppt",
      },
      { name: "Compiladores", file: "compiladores-aula-9.pdf" },
      { name: "Estrutura de Dados I", file: "aula-9-estrutura-arvores.pdf" },
      { name: "Interfaces e Gráficos Computacionais", file: "aula-6.ppt" },
    ],
  },
  {
    name: "Administração",
    courseware: [
      {
        name: "Gestão de Custos e Precificação",
        file: "gestao-custo-precificacao.pdf",
      },
      {
        name: "Gestão de Materiais",
        file: "gestao-materiais-aula7.pptx",
      },
      {
        name: "Gestão de Pessoas",
        file: "gestao-pessoas-aula6.ppt",
      },
      {
        name: "Gestão Financeira",
        file: "gestão-financeira-aula9.pdf",
      },
      {
        name: "Legislação Social e Previdenciária",
        file: "legislacao-social-previdenciária.pdf",
      },
    ],
  },
  {
    name: "Sistemas de Informação",
    courseware: [
      {
        name: "Desenvolvimento e Administração de Banco de Dados",
        file: "banco-dados-aula6.pdf",
      },
      {
        name: "Modelagem de Processo de Negócio",
        file: "modelagem-de-planos-de-negocio.pdf",
      },
      {
        name: "Desenvolvimento de Sistemas de Informação",
        file: "desenvolvimento-si-aula8.ppt",
      },
      {
        name: "Ética, Direito e os Desafios do Mundo Contemporâneo",
        file: "aula4.pdf",
      },
      {
        name: "Engenharia de Software",
        file: "scrum-sprints-eng-software.pdf",
      },
    ],
  },
];

export const databaseUniversity = [
  {
    studentName: "Igor Casconi de Oliveira",
    ra: "559342",
    password: "1172",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/932434222495453224/Captura_de_Tela_2022-01-16_as_19.24.25.png",
    course: "Ciência da Computação",
    semester: "7A-S/Noturno",
    courseware: course.find(
      (course) => course.name === "Ciência da Computação"
    ),
  },
  {
    studentName: "Guilherme Augusto Pereira",
    ra: "550803",
    password: "0803",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/932434419820683404/Captura_de_Tela_2022-01-16_as_19.24.01.png",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Nicole Camacho Dejuste",
    ra: "619889",
    password: "0001",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/984544030216028211/WhatsApp_Image_2022-06-08_at_17.21.27.png",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Ana Julia Rossigalli Bolfi",
    ra: "556324",
    password: "0001",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/1240012163528130732/348592750_802162394575420_8001417418584468666_n.jpeg?ex=664502d2&is=6643b152&hm=e23ba09d806d0c208aadf2795a8371e05943e274658d166aea5d7af61cb63094&",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Jessica Chiozini",
    ra: "556325",
    password: "0001",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/1241415663973564558/81ff7cae-39f9-41c4-8047-4f03372de6e1.jpg?ex=664a1dee&is=6648cc6e&hm=bd6ae3ead50188f1888cebe303a223441752c54da42364ae50f4f7a97b152643&",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Victor Alves Justino",
    ra: "556326",
    password: "0001",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/1306637703839879189/PHOTO-2024-11-14-12-09-27.jpg?ex=673764b0&is=67361330&hm=416521fb1054d58d198c841ba835d8bf3d70ccd303a17c8419a9ce110a89fbe3&",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
];
