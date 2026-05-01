export type Category =
  | "PHOTOGRAPHY"
  | "ILLUSTRATION"
  | "3D ART"
  | "FASHION"
  | "TRADITIONAL";

export type Artwork = {
  id: string;
  category: Category;
  status?: "IN BATTLE" | "FOR SALE";
  statusColor?: string;
  statusTextColor?: string;
  statusIcon?: string;
  image: string;
  alt: string;
  title: string;
  author: string;
  price?: string;
  likes?: string;
  views?: string;
  isWinner?: boolean;
};

export const artworks: Artwork[] = [
  {
    id: "ethereal-fracture",
    category: "TRADITIONAL",
    status: "IN BATTLE",
    statusColor: "bg-secondary-container",
    statusTextColor: "text-on-secondary-container",
    statusIcon: "🔥",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALFV4feUo6DZQ-aP7c8WL7Lv8BEXCp9nZpFqda_7sBd608o_tNZ7emd7FPpY1b_STm1mzuWH1AaW_E69UgxMnJmYlBVdRbwkjHLJlhgFpRWCoWdsIKm4vb0xPh1Udh4-lrmLnWP4vr4sUbk_f41Mb5sU8L_z_gmAy_swWNWpTbh57XxF4scEIZlrieTp019sdcV6Saqp3YYh0KKmD_LTlOlVN15_dxw3AbBOjvMRKThiPWaAtoApDsW5XDg_eGpi3dOJZbaQa-fhGe",
    alt: "vibrant abstract expressionist oil painting with swirling textures of red, gold and deep blue with thick impasto brushstrokes",
    title: "Ethereal Fracture",
    author: "VictorKael",
    likes: "1.2k",
    views: "4.5k",
    isWinner: true,
  },
  {
    id: "obsidian-grace",
    category: "FASHION",
    status: "FOR SALE",
    statusColor: "bg-primary-container",
    statusTextColor: "text-on-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgRNCA0IusUbI_broWkig9Gt9UVrBl8dRP8tfUoKiM2OWh9r3uUJb73AFZs_2PzC4-gF4by_vwUO8LTRIpt8npme9JlfF5nZ6s_W-ta5dZTu9MAnS4tM4tgs6wuJGZ4IfB_tPrLC656vEWOYaywUVmyXq-B5yzl0IY-WFBOWf9cU7Qaktzd-FoZPa-QHDUXeMZCns_X0g_pX9GPQ1kQeb86Tc37dAoUfXoJGcSEs_OgacozsY_kfNhSRmseP1BiwzKnQx1rJD60Bwd",
    alt: "high fashion editorial portrait of a woman with metallic gold makeup and structural obsidian jewelry in dramatic low key lighting",
    title: "Obsidian Grace",
    author: "MinaVogue",
    price: "2.4 ETH",
  },
  {
    id: "silent-architecture",
    category: "3D ART",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJVJA9mxD5hIccwJGjqfWkwvDsudgPCdsP6szxESAJS9QVN6DbN3Q9Ow8ySiX6D5E5QwIOL_DC3UtQPniaqhtnX2oHWFLSDTjk12a2PLilGe_lWFvG47DtseuQfMY1ZcmDBeRCdgnrtvEhPKWPieZXNc6b_naoJTkxYXaYjeEw-lUCX7q0ASKF6MxKic-fCZdij2orxkH0koax9FGXVQSTpFm119WQqVoSytQP7Eyg0mhaeKOyw_u0D-29Ad2G3-_uOw6HHkHqH1ic",
    alt: "minimalist 3D render of flowing silk-like architectural forms in pearl white and soft charcoal with clean shadows",
    title: "Silent Architecture",
    author: "ZahaDigital",
    isWinner: true,
  },
  {
    id: "neon-ronin",
    category: "PHOTOGRAPHY",
    status: "IN BATTLE",
    statusColor: "bg-secondary-container",
    statusTextColor: "text-on-secondary-container",
    statusIcon: "🔥",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPbLe84lukVciUIWbAKh8mWcznJxS3gr6eYIjLiw4jbwYwPmRDzcCFSehhc8k_WCxhdDfpli1dAENvf2g-MLE57pp3le1WCIFntN-6dBGtX4yu552I84UYmhuCd-MbipY10uWjfhJqO6p4Q1aUAcVnidlFd5BYhh-xhZDtF8fSoknsbYGo3chHW4BkvfJ9yOrVe1w3COAqKD1Q4uEmLZ36vEbOCFDermn2aKgXWTzD86toKVNd-IBKji9ugBDRPcFBNTnQaZ31NgRW",
    alt: "dark cyberpunk street photography at night with neon amber reflections in rain puddles and high contrast shadows",
    title: "Neon Ronin",
    author: "TokyoNight",
  },
  {
    id: "cosmic-drift",
    category: "ILLUSTRATION",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7MGmEKCp9_vL7RExACGtoPwvmyoZh0U1gx7_sHZFooJmm7iUIyDzFs0O7AcrGVNbTxLJUJG25JRB-jXTgDEtfLJ5R4BwpT35Yz6A234LTEfvKFIeXSsP2wiMTKrhEAubvGCGgeNdOrDo_QYcOCpBHeedBpH3y2Wpw4sylyf7gjePMZvIDWIiizvgY7JUYUcxJGnZzpf40beNOdFJvmUbIfcLVoWxcdjd0hPpPLid8apNQcLqXY_7D0s_XoUtTEuL9lbDKHZps5Fgp",
    alt: "surreal digital illustration of a floating island with golden trees under a starry cosmos in purple and amber tones",
    title: "Cosmic Drift",
    author: "AstroArt",
    isWinner: true,
  },
  {
    id: "guilded-abyss",
    category: "PHOTOGRAPHY",
    status: "FOR SALE",
    statusColor: "bg-primary-container",
    statusTextColor: "text-on-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWad_7uELnd7rvctndB2g-JkXSL3x34F3CFyAlkrpuJz7ug6t2I9O85Vk0mWQ3mPPSAQQy8GcAW99P6EID4mpBAZxJ2DLkKKwrm0ZimIwEHnAYb7YzutQZ5Q5oCMqzh0nJiUPwJ0lExqVVVczbwth9BPcovjGb0sq39VkJXs96aSN4MPIwljHno981BK5I5XLFJCSmj8jhpqKweOgWHsq3IzkD9od4DFL4csdufebJJ-pSGCvOJgN0Nj39kwkFyXfFEkcFgmet794h",
    alt: "macro photography of textured gold leaf on black stone background with dramatic shadows and shimmering particles",
    title: "Guilded Abyss",
    author: "TextureKing",
    price: "0.85 ETH",
  },
  {
    id: "kinetic-surge",
    category: "ILLUSTRATION",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB95NIAhCi2D9-5r6BLQeQp4GWGb3UCq88Edpy5doWJbTDWzVHz_TxOeLhQtZXnXD4rxZjVz6_Ow5Q8VshCZGfeqNUXLWVLsJ1uFUb-ndoOVhzZH3SvnceTBoSAKnqjPrfz31h1IlZORf-Gt7FCLOshJT7kYJiqR_kbOFq4HP6yW1pYUkAwFamiONnRktYRtQ4MhhybD6hG5iil9jqn7c0oPISqPKTnZPM2C2hnKf84FKtSLP88Hk829rEU1exWQItQfUKZj_3BXNrd",
    alt: "dynamic abstract digital art with explosive brush strokes of charcoal and metallic bronze against a cream background",
    title: "Kinetic Surge",
    author: "MotionMaster",
  },
  {
    id: "basalt-echo",
    category: "PHOTOGRAPHY",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZwTGRKvk_wG15Xnlly-GuU3UdFhtlU1iIqHQYVzWjvpbj2O2fA4Sncil1_fO1hEzPwCQSgQ3YuwOpH95IpkcZrfCtYWotUnrNqzjt04yn68katoRKGq6eWvyUoE_8Nfw7gpdaC-wjlFfBPT8KQr8lkkIIaQ1cy6ZhnK56gQm73ItMWUdaAr8IT8i7Y6dQVhKCJGhGejz27QMiEqmRQcciyq3c6I3fG-qaHY6XDfw8PjjBm5W12PubnJ0_CFnYOUglO95J95gYpBcS",
    alt: "conceptual landscape with jagged basalt columns and a low hanging heavy fog in monochrome tones",
    title: "Basalt Echo",
    author: "TerraIncognita",
  },
];
