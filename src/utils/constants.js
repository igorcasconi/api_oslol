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
    studentName: "Jonas Reltersinger Costa",
    ra: "602221",
    password: "0005",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/933531165997015121/WhatsApp_Image_2022-01-18_at_15.00.59.png",
    course: "Sistemas de Informação",
    semester: "4A-D/Noturno",
    courseware: course.find(
      (course) => course.name === "Sistemas de Informação"
    ),
  },
  {
    studentName: "Joaquim Caetano Ravanhani",
    ra: "623232",
    password: "0006",
    photo:
      "https://media.discordapp.net/attachments/763150414668496918/933882359407845426/WhatsApp_Image_2022-01-20_at_21.16.12.jpeg?width=779&height=1055",
    course: "Sistemas de Informação",
    semester: "4A-D/Noturno",
    courseware: course.find(
      (course) => course.name === "Sistemas de Informação"
    ),
  },
  {
    studentName: "João Marcos de Souza",
    ra: "551125",
    password: "1125",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/934201513583190086/WhatsApp_Image_2022-01-21_at_18.36.45.jpeg",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Stéfanny Virgínia Panágio Alves",
    ra: "602732",
    password: "2732",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/934401329001029632/WhatsApp_Image_2022-01-21_at_23.05.29.jpeg",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Vinicius Treymann Franco",
    ra: "629333",
    password: "7000",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/943892236083548240/WhatsApp_Image_2022-02-15_at_14.31.16.jpeg",
    course: "Sistemas de Informação",
    semester: "4A-D/Noturno",
    courseware: course.find(
      (course) => course.name === "Sistemas de Informação"
    ),
  },
  {
    studentName: "Mateus de Carvalho Belam",
    ra: "601544",
    password: "7444",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/945695456086876190/WhatsApp_Image_2022-02-20_at_16.36.54.jpeg",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Caio Vinícius Silva Moraes",
    ra: "610704",
    password: "1103",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/946062445737291846/WhatsApp_Image_2022-02-23_at_10.32.27.jpeg",
    course: "Administração",
    semester: "5A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Mayra Mayumi Ocampo Ishida",
    ra: "618999",
    password: "0006",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/946117115419689030/WhatsApp_Image_2022-02-23_at_13.45.02.jpeg",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Aline Airi Shimizu",
    ra: "618787",
    password: "0006",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/946527572840296498/WhatsApp_Image_2022-02-24_at_17.09.35.jpeg",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
  {
    studentName: "Lucas Matoso Ferreira de Castro",
    ra: "611899",
    password: "9000",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/951303345761583194/WhatsApp_Image_2022-03-09_at_14.11.13.jpeg",
    course: "Sistemas de Informação",
    semester: "4A-D/Noturno",
    courseware: course.find(
      (course) => course.name === "Sistemas de Informação"
    ),
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
    studentName: "Rafaela Monteiro Carvalho",
    ra: "728898",
    password: "0001",
    photo:
      "https://cdn.discordapp.com/attachments/763150414668496918/990010493534085150/WhatsApp_Image_2022-06-22_at_16.53.36.jpeg",
    course: "Administração",
    semester: "4A-S/Noturno",
    courseware: course.find((course) => course.name === "Administração"),
  },
];
