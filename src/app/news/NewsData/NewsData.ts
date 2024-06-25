import { StaticImageData } from 'next/image';
import { GraceMyers, gregRobertson, johnWells, JonathanLilly, RWlogo, KameronJones, MadisonChenault, patrickSteelman, RamonaGraves, TamraPhillips } from '../newsImgs/NewsAssets';

export type News = {
  id: string;
  title: string;
  SEOTitle: string;
  date: string;
  img: StaticImageData;
  description: string;
  description2?: string;
  description3?: string;
  description4?: string;
};

const NewsData: News[] = [
  {
    id: 'kameron-jones',
    title: "R&W-Engineering-has-hired-Kameron-Jones-as-a-mechanical-Engineering-designer",
    SEOTitle: 'RW Engineering hires Kameron Jones as mechanical engineer',
    date: "October 6, 2023",
    img: KameronJones,
    description: "Kameron provides design services for HVAC, plumbing and piping systems, energy analysis, and commissioning for commercial and industrial projects.  Kameron holds a bachelor's degree in mechanical engineering from Colorado State University.",
  },
  {
    id: 'grace',
    title: "R&W-Engineering-has-hired-Grace-Myers-as-a-mechanical-engineering-designer",
    SEOTitle: "R&W Engineering has hired Grace Myers as a mechanical engineering designer.",
    date: "October 6, 2023",
    img: GraceMyers,
    description: "Grace provides design services for HVAC, plumbing and piping systems for commercial and industrial projects. Grace has a bachelor's degree in mechanical engineering from Oregon State University.",
  },
  {
    id: 'madison',
    title: "R&W-Engineering-has-hired-Madison-Chenault-as-Project-Coordinator.",
    SEOTitle: "R&W Engineering has hired Grace Myers as a mechanical engineering designer",
    date: "October 6, 2023",
    img: MadisonChenault,
    description: "Madison is responsible for supporting the project managers for administrative operations on various project tasks. Madison holds a bachelor's degree in journalism and communications from University of Oregon.",
  },
  {
    id: 'megan',
    title: "R&W-Engineering-has-hired-Megan-Richmond",
    SEOTitle: "R&W Engineering has hired Megan Richmond",
    date: "October 6, 2023",
    img: RWlogo,
    description: "R&W Engineering has hired Megan Richmond as Office Coordinator. She contributes to front-office administrative operations and supports the firm's team on office and project-specific tasks.",
  },
  {
    id: 'ramona',
    title: "John-Wells-Promoted-to-Project-Manager",
    SEOTitle: "John Wells Promoted to Project Manager",
    date: "February 23, 2021",
    img: RamonaGraves,
    description: "John Wells has been promoted to Project Manager at R&W Engineering. Wells, an electrical engineer, is known for his expertise in electrical design, controls design, programming, and integration. Mr. Wells has extensive experience with servicing or modifying control systems and troubleshooting complicated problems. He has worked on electrical and control design projects for many industrial, as well as municipal and commercial projects. Mr. Wells also has experience with new process research and development, design, and prototyping. Due to the advanced level of his experience, he is now leading the automation marketing for R&W. We are excited to have him on board as a Project Manager.",
  },
  {
    id: 'greg',
    title: "Greg-Robertson-Retires",
    SEOTitle: "Greg Robertson Retires",
    date: "February 9, 2022",
    img: gregRobertson,
    description: "The last two years have brought lots of changes, and 2021 was no exception. R&W worked entirely remote throughout the year and met a lot of uncertainty surrounding when and if we would be able to occupy the office again. We had to adapt, sometimes daily, to the ever-changing working environment around us. But even as the year ended, we faced yet another change as one of our owners said goodbye to us.",
    description2: "Greg Robertson announced his retirement at the end of 2021. He had been with R&W Engineering for 24 years. He was an owner, a Project Manager, associate, and shareholder, as well as a friend and valuable member of our company. His announcement was met with well wishes for his retirement, and sadness at seeing him go. He was a much loved and respected member of our team, a fantastic leader within the company, and an absolute pleasure to work with. And though he will be missed, we wish him so much joy as he steps into retirement, and we thank him heartily for all the years he invested in this firm.",
    description3: "Happy Retirement, Greg!",
  },
  {
    id: 'lilly',
    title: "Lilly-Promoted-to-an-Owner-of-R&W",
    SEOTitle: "Lilly Promoted to an Owner of R&W",
    date: "February 4, 2021",
    img: JonathanLilly,
    description: "R&W has promoted Jonathan Lilly to an owner of R&W! He is a Senior Electrical Engineer and has been in the consulting engineering field since 2007, and with R&W since 2017. He is a project manager with Professional Engineering licenses in over 10 states. He has extensive experience in lighting, power, and control design, and substantial experience working on industrial, commercial, and municipal projects. He is also responsible for the supervision of designers and engineers necessary for executing projects in all phases. He is a West Virginia University graduate holding two bachelor's degrees as well as a masters. His advanced level of experience and knowledge have not only made him invaluable to us, but are precisely what make us so thrilled to include him as an owner of R&W!",
  },
  {
    id: 'patrick',
    title: "New-Hire-Patrick-Steelman",
    SEOTitle: "New Hire: Patrick Steelman",
    date: "March 3, 2020",
    img: patrickSteelman,
    description: "R&W is excited to announce a new member of our team! Patrick Steelman was hired on as a mechanical/energy designer. Mr. Steelman obtained his B.S. in Energy Systems Engineering from Oregon State University. Mr. Steelman works primarily on energy projects under the guidance of the project engineers. He has also worked on some mechanical projects. His work primarily centers around energy studies. Patrick also does design work for HVAC projects and performs research for the project managers. He is EIT certified in Oregon. His education, flexibility, and attention to details make him a reliable addition to our team.",
    description2: "In his spare time, Mr. Steelman enjoys spending time at home with his girlfriend and his cat. He enjoys tinkering with electronics and playing video games. He also enjoys spending time outside playing basketball, camping, walking, and other sports.",
  },
  {
    id: 'tamra',
    title: "New-Hire-Tamra-Phillips",
    SEOTitle: "New Hire: Tamra Phillips",
    date: "July 15, 2020",
    img: TamraPhillips,
    description: "R&W is excited to announce another new team member!",
    description2: "Tamra Phillips has joined our company as Project Technical Support. Ms. Phillips graduated from Oregon State University with a bachelor's in Human Development and Family Science. She focused her studies in Early Childhood Education. Ms. Phillips has worked on a wide and diverse variety of projects at R&W. They have included energy studies, cell sites, design support, and project admin support. The scope of her experience includes scheduling and conducting site visits, data analysis and input into technical programs, and calculations for building design. Ms. Phillips has also communicated with project team, clients, and power and utility companies to obtain information necessary for project completion. Ms. Phillips has also been involved in project setup. Ms. Phillip's willingness to learn, previous project management experience, and positive attitude make her a valuable member of our team.",
    description3: "In her free time, Ms. Phillips enjoys biking, hiking, camping, kayaking, and exploring with her two boys. She also loves trying new foods, meeting new people, and watching movies with her family. We're excited to have her on our team!",
  },
  {
    id: 'john',
    title: "John-Wells-is-a-Professional-Engineer!",
    SEOTitle: "John Wells is a Professional Engineer!",
    date: "December 9, 2019",
    img: johnWells,
    description: "R&W Engineering congratulates John Wells on his Professional Engineer Registration in Electrical Engineering.",
    description2: "Mr. Wells has been with R&W for a total of 4 years! His dedication, hard work, and diverse background in the industry have made him a valuable asset to the company.",
    description3: "We are so excited to have him aboard in this capacity! And we look forward to moving with him through this journey.",
    description4: "Congratulations, John!",
  },
];

export default NewsData;