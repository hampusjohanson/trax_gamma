export const SURVEY_CONFIG = {
  title: "Hamburgerkedjor Enkät",
  subtitle: "Din åsikt är viktig för oss",
  
  brands: [
    { name: "McDonald's", image: "/images/mcdonalds.png" },
    { name: "Burger King", image: "/images/burger-king.png" },
    { name: "Max", image: "/images/max.png" },
    { name: "Sibylla", image: "/images/sibylla.png" },
    { name: "Flippin' Burgers", image: "/images/flippin-burgers.png" },
    { name: "Prime Burger", image: "/images/prime-burger.png" },
    { name: "Bastard Burgers", image: "/images/bastard-burgers.png" },
    { name: "Five Guys", image: "/images/five-guys.svg" },
    { name: "Shake Shack", image: "/images/shake-shack.svg" },
    { name: "Frasses", image: "/images/frasses.svg" }
  ],

  sections: {
    security: {
      title: "Säkerhetsfrågor",
      questions: {
        security_questions: {
          type: "security",
          label: "Säkerhetsfrågor för att säkerställa att du är en riktig person",
          questions: [
            "Jag är en människa",
            "Jag är över 18 år gammal",
            "Jag bor i Sverige",
            "Jag kan svenska",
            "Jag är intresserad av hamburgerkedjor",
            "Jag har ätit på hamburgerkedjor",
            "Jag planerar att äta på hamburgerkedjor",
            "Jag rekommenderar hamburgerkedjor till andra",
            "Jag följer hamburgerkedjor på sociala medier",
            "Jag har jobbat på en hamburgerkedja",
            "Jag äger aktier i hamburgerkedjor",
            "Jag har investerat i hamburgerkedjor",
            "Jag är anställd av en hamburgerkedja",
            "Jag är konsult för hamburgerkedjor",
            "Jag har familj som jobbar på hamburgerkedjor",
            "Jag är journalist som skriver om hamburgerkedjor",
            "Jag är forskare som studerar hamburgerkedjor",
            "Jag är politiker som arbetar med hamburgerkedjor"
          ]
        }
      }
    },

    screening: {
      title: "Screening",
      questions: {
        age: {
          type: "radio",
          label: "Hur gammal är du?",
          options: [
            "18-24 år",
            "25-34 år", 
            "35-44 år",
            "45-54 år",
            "55-64 år",
            "65+ år"
          ]
        }
      }
    },

    awareness_v2: {
      title: "Kännedom",
      questions: {
        awareness_v2_brands: {
          type: "brand_matrix_v2",
          label: "Vilka av följande hamburgerkedjor känner du till?",
          description: "Markera alla kedjor du känner till"
        }
      }
    },

    image: {
      title: "Attribut och påståenden",
      questions: {
        image_statements: {
          type: "image_statements",
          label: "I vilken utsträckning instämmer du i följande påstående om varje kedja?",
          description: "Använd skalan 1-7 där 1 = Håller inte alls med och 7 = Håller helt med",
          statements: [
            "Denna kedja har högkvalitativ mat",
            "Denna kedja har snabb service",
            "Denna kedja har bra priser",
            "Denna kedja har trevlig personal",
            "Denna kedja har ren och fräsch miljö",
            "Denna kedja har bra öppettider",
            "Denna kedja har bra läge",
            "Denna kedja har bra parkering",
            "Denna kedja har bra för barn",
            "Denna kedja har bra för vuxna",
            "Denna kedja har bra för familjer",
            "Denna kedja har bra för ensamma",
            "Denna kedja har bra för grupper",
            "Denna kedja har bra för datum",
            "Denna kedja har bra för lunch",
            "Denna kedja har bra för middag",
            "Denna kedja har bra för kvällsmål",
            "Denna kedja har bra för snabbmåltid",
            "Denna kedja har bra för avkopplande måltid",
            "Denna kedja har bra för festlig måltid"
          ]
        }
      }
    },

    behavior: {
      title: "Köpbeteende",
      questions: {
        behavior_frequency: {
          type: "radio",
          label: "Hur ofta äter du på hamburgerkedjor?",
          options: [
            "Aldrig",
            "Sällan (1-2 gånger per år)",
            "Ibland (3-6 gånger per år)",
            "Ofta (1-2 gånger per månad)",
            "Mycket ofta (1-2 gånger per vecka)",
            "Nästan dagligen"
          ]
        },
        behavior_spend: {
          type: "radio",
          label: "Hur mycket spenderar du vanligtvis per besök?",
          options: [
            "Under 50 kr",
            "50-100 kr",
            "100-150 kr",
            "150-200 kr",
            "200-300 kr",
            "Över 300 kr"
          ]
        }
      }
    },

    share_of_market: {
      title: "Marknadsandel",
      questions: {
        share_of_market_brands: {
          type: "share_of_market",
          label: "Hur stor andel av marknaden tror du att varje kedja har?",
          description: "Fördelningen ska summera till 100%"
        }
      }
    },

    importance: {
      title: "Viktiga faktorer",
      questions: {
        importance_attributes: {
          type: "importance_scale",
          label: "Hur viktiga är följande faktorer när du väljer hamburgerkedja?",
          description: "Använd skalan 1-7 där 1 = Inte alls viktigt och 7 = Mycket viktigt",
          options: [
            "Pris",
            "Kvalitet",
            "Service",
            "Läge",
            "Öppettider",
            "Renlighet",
            "Snabbhet",
            "Variation",
            "Hälsosamma alternativ",
            "Miljövänlighet",
            "Lokal produktion",
            "Innovation",
            "Tradition",
            "Trendighet",
            "Barnvänlighet"
          ]
        }
      }
    },

    consideration: {
      title: "Övervägande",
      questions: {
        consideration_brands: {
          type: "brand_scale_single",
          label: "I vilken utsträckning instämmer du i följande påstående:",
          description: "Jag skulle överväga att besöka [kedja] nästa gång jag ska äta hamburgare",
          scale: {
            min: 1,
            max: 7,
            labels: {
              1: "Håller inte alls med",
              7: "Håller helt med"
            }
          }
        }
      }
    },

    open_questions: {
      title: "Öppna frågor",
      questions: {
        open_feedback: {
          type: "open_text",
          label: "Har du några ytterligare kommentarer om hamburgerkedjor?",
          placeholder: "Dela dina tankar här..."
        }
      }
    },

    background: {
      title: "Bakgrund",
      questions: {
        gender: {
          type: "radio",
          label: "Vilket kön tillhör du?",
          options: [
            "Man",
            "Kvinna",
            "Icke-binär",
            "Vill inte ange"
          ]
        },
        education: {
          type: "radio",
          label: "Vad är din högsta utbildning?",
          options: [
            "Grundskola",
            "Gymnasieskola",
            "Högskola/Universitet",
            "Doktorsexamen",
            "Annat"
          ]
        },
        income: {
          type: "radio",
          label: "Vad är din månadsinkomst (före skatt)?",
          options: [
            "Under 15 000 kr",
            "15 000-25 000 kr",
            "25 000-35 000 kr",
            "35 000-50 000 kr",
            "50 000-75 000 kr",
            "Över 75 000 kr",
            "Vill inte ange"
          ]
        }
      }
    }
  }
} 