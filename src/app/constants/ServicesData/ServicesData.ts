import React from 'react'
import { Electrical, Mechanical, Automation, Comissioning, Energy, Projects, Communication, Lighting, LowVoltage, PowerDistrubition, PowerQuality, Wireline, FireProtection, HVAC, Piping, Plumbing, ControlsSystem, ElectricalWiring, Telematary, BuildingSystems, LEED, Building, Metro, Metro2, School, Solar, Theater  } from  './ServiceAssetImports'
   
const servicesData = [

    {
      
        id: 'electrical',
        img: Electrical,
        title: "Electrical",
        subCategories: [
          {
            image: Lighting,
            subtitle: "Lighting",
            subCategory1: "Site Lighting",
            subCategory2: "interior Lighting",
            subCategory3: "Egress/Emergency Lighting",
            accordianContent: [
             "Building Lighting",
            "Roadway Lighting",
             "Sports Lighting",
             "Runway Lighting",
            ],
            
          },
          {
            image: PowerDistrubition,
            subtitle: "Power Distribution",
            subCategory1: "Power Distribution",
            subCategory2: "DC Power System",
            subCategory3: "Standby / Emergency Power",
          },
          {
            image: PowerQuality,
            subtitle: "Power Quality",
            subCategory1: "Electrical System Power Quality Review",
            subCategory2: "Short Circuit Analysis",
            subCategory3: "Harmonic Analysis",
            accordianContent: [
              "Electrical System Disturbance Monitoring & Analysis",
            ],
            
          },

          {
            image: LowVoltage,
            subtitle: "Technology Systems Low Voltage",
            subCategory1: "Video & Teleconferencing Facilities",
            subCategory2: "Audio/Video Based Instructional Systems",
            subCategory3: "Audio/Video Based Presentation Systems",
            accordianContent: [
               "Information Transportation Systems",
               "Inside/ Outside Plant Cabling Selection",
               "Horizontal Structured Cabling Systems",
              "Distribution Infrastructure Planning & Design",
               "Infrastrucutre System Grounding",
               "Building & Site Security and Protection Systems",
               "Analog & Digital Video Serveilance",
               "Analog & Digital Video Recording Systems",
               "Intrusion Detection & Alarm Systems",
               "Building Systems Integration",
               "Building Automation & Building Control Systems",
               "Security & Access Control",
              "Interior & Exterior Lighting Control",
               "Fire Detection & Secruity Integration",
              "Building & infrastructure Planning",
               "Entrance Facility, Telecommunications Room & Equipment Room Design",
               "Structured Cabling Distribution & Cable Managment System Design",
               "Infrastructure Systems Grounding", 
            ]
            
            
          },

          {
            image: Communication,
            subtitle: "Wireless Communication Infrastructure",
            subCategory1: "Utility Coordination",
            subCategory2: "Identify & Contact Power & telco/Fiber Providers For New Services",
            subCategory3: "Power & telecom(Copper/Fiber) Service Design",
            accordianContent: [
              "Design incoming power & Telco/fiber Services",
              "Soil Resitivity Testing",
             "Test soil to determine overall resistance fro grounding design",
             "Electrical Design",
              "Lighting, Power, Equipment connections Distribution",
               "Solar Power Design",
               "Photovoltaic Arrays & Distribution for Supplemental or Primary Power",
               "Emergency Power Design(Generators, UPS Systems)",
               "Standby Power System for site support During utlituty failures",
               "Grounding Design",
               "Equipment Pad, Shelter, Tower, Site Grounding Sytems",
               "HVAC Design for Tenant Improvmeent Sites",
               "Heating, cooling, general ventilation & battery exhaust systems",
               "Propane/ Natural Gas Piping Designs",
              "Piping Design for emergyency gnerator fuel sources",
               "Power Load Studies",
               "Identfiy Avialable Power Capicity in existing systems",
            ],
           
               
          },

          {
            image: Wireline,
            subtitle: "Wireline",
            subCategory1: "Identify & Contact power providers for new services",
            subCategory2: "Soil Resistivity Testing",
            subCategory3: "Test Soil to Determine Overall Resistance for grounding Design",
            accordianContent: [
              "Electrical Design",
             "Lighting, Power, Equipment Connections, Distribution",
            "Emergency Power Design(generators, UPS Systems)",
             "Standyby Power System for Site Support During Utility Failures",
             "Grounding Design",
             "Equipment Pad, Shelter, Tower, Site Grounding Sytems",
             "HVAC Design for Tenant Improvement sites",
             "Heating, Cooling, General ventilation & Battery Exhaust Systems",
            "Power Load Studies",
            "Identify Available Power Capcioty in Existing Systems",
             "DC Power Plan Design",
             "Rectifiers, batteris & Distribution",
            ],
            
               
          },

        ]
      },

      {
        id: "mechanical",
        img: Mechanical,
        title: "Mechanical",   
        subCategories: [
          {
            image: FireProtection,
            subtitle: "Fire Protection",
            subCategory1: "Hydrant Flow Testing",
            subCategory2: "Fire Sprinkler Design",
            subCategory3: "Sprinkler Main Routing & Analysis",
            accordianContent: [
               "Sprinkler Head Layout",
            ]
            
        
          },
          {
            image: HVAC,
            subtitle: "HVAC",
            subCategory1: "System Assessment/Due Diligence",
            subCategory2: "Heating & Colling System Design",
            subCategory3: "Hydronic Piping System Design",
            accordianContent: [
              "Water/Ground Source Heat Pump Design",
            "DDC Control Design/Specification",
           "Indoor Air Quality Assessment",
             "Forensic Investigation/Testimony",
            ]
          

          },
          {
            image: Piping,
            subtitle: "Industrial",
            subCategory1: "Process Piping Design",
            subCategory2: "Industrial Ventilation",
            subCategory3: "Exhaust Calculations & Design",
            accordianContent: [
              "Machine Design",
              "Dust Collection",
               "Clean Room Design",
               "H Occupancy Analysis",
            ]
            

          },
          {
            image: Plumbing,
            subtitle: "Plumbing",
            subCategory1: "System Assessment/Due Dilligence",
            subCategory2: "Water & Sewer System Design",
            subCategory3: "Medical Gas System Design",
            accordianContent: [
              "Forensic Investigation/Testimony",
             "Domestic Water Piping Design",
             "Hot Water Heater Sizing",
            "Solar System Piping Design",
            ]
           

          },

         
        ]
      },

      {
        id: "automation",
        img: Automation,
        title: "Automation",
        subCategories: [
          {
            image: ControlsSystem,
            subtitle: "Control Systems",
            subCategory1: "Functional Descriptions",
            subCategory2: "Instrument Specifications",
            subCategory3: "Control System Design",
            accordianContent: [
              "PLC Programming",
            "Commmisioning & Testing",
             "Loop Diagrams",
            "Commissioning Plans",
            ]
            
        
          },
          {
            image: ElectricalWiring,
            subtitle: "Data Logging & Reporting",
            subCategory1: "Data base Configuration",
            subCategory2: "Report Generation",
           

          },

          {
            image: Telematary,
            subtitle: "Telemetry & SCADA",
            subCategory1: "SCADA COmmunication Analysis",
            subCategory2: "Internet Access to SCADA systems",
            subCategory3: "HMI Programming",
          },
         

        ]    
      },

      {
        id: "commissioning",
        img: Comissioning,
        title: "Commissioning",
        subCategories: [
          { 
            image: BuildingSystems,
            subtitle: "Building, Systems & Process",
            subCategory1: "HVAC, Plumbing, Power, Lighting",
            subCategory2: "Water & Waste Water Treatment",
            subCategory3: "Industrial Systems",
            accordianContent: [
              "Commissioning Plans",
             "Pre-inspection & functional Testing",
             "Commissioning Reports",
             "Retro-Commisioning",
            ]
             

        
          },
          {
            image: LEED,
            subtitle: "LEED",
            subCategory1: "Fundamental & Enhanced",

          },
          
        ]    
      },

      {
        id: "energy",
        img: Energy,
        title: "Energy Services", 
        subCategories: [
          {
            image: Theater,
            subtitle: "Building & Systems Audits",
            subCategory1: "ASHRAE Level 1, 2 & 3",
          },
          
          {
            image: Metro,
            subtitle: "Building & System Modeling",
            subCategory1: "Life Cycle Cost Analysis",
            subCategory2: "Conservation Measure Analysis System Comparison",
            subCategory3: "LEED",
          },
          {
            image: School,
            subtitle: "Energy Code Compliance",
            subCategory1: "Forms, Engineering & Permit Assistance",
            subCategory2: "SEED, Title 24, Oregon Reach Code",
            subCategory3: "Multiple States",
          },
          {
            image: Building,
            subtitle: "Rebates & Incentives",
            subCategory1: "Local, Regional, State & Federal",
            subCategory2: "BPA ESIP, Energy Trust of Oregon, 179D, ARRA, HB3672",
          },

          {
            image: Solar,
            subtitle: "Renewable",
            subCategory1: "Solar PV",
            subCategory2: "Solar Thermal",
            subCategory3: "Ground Source",
          },

          {
            image: Metro2,
            subtitle: "Sustainable Building Programs",
            subCategory1: "LEED, Green Globes, Energy Star",
            subCategory2: "Building & Systems Modeling",
          },

        ]   
      },

      {
        id: "projects",
        img: Projects,
        title: "Projects", 
        subCategories: [
          {
            subtitle: "Fire Protection",
            subCategory1: "Hydrant Flow Testing",
            subCategory2: "Fire Sprinkler Design",
            subCategory3: "Sprinkler Main Routing & Analysis",
            accordianContent: [
              "Sprinkler Head Layout",
            ]
            
          
        
          },
          {
            subtitle: "HVAC",
            subCategory1: "System Assessment/Due Diligence",
            subCategory2: "Heating & Colling System Design",
            subCategory3: "Hydronic Piping System Design",
            accordianContent: [
              "Water/Ground Source Heat Pump Design",
             "DDC Control Design/Specification",
             "Indoor Air Quality Assessment",
             "Forensic Investigation/Testimony",
            ]
             

          }
        ]  
        
      }

]



export default servicesData