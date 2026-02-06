// Tuning Data Dataset

export interface EngineData {
    name: string;
    volume: string;
    stock: { hp: number; torque: number; zeroToHundred?: number };
    stage1: { hp: number; torque: number; zeroToHundred?: number; price: number };
    stage2?: { hp: number; torque: number; zeroToHundred?: number; price: number };
}

export interface GenerationData {
    name: string;
    engines: EngineData[];
}

export interface ModelData {
    name: string;
    generations: GenerationData[];
}

export interface BrandData {
    brand: string;
    models: ModelData[];
}

export const TUNING_DATA: BrandData[] = [
    {
    brand: "Audi",
    models: [
      {
        name: "A3",
        generations: [
          {
            name: "8V (2012-2020)",
            engines: [
              { name: "1.6 TDI (110hp)", volume: "1598cc", stock: { hp: 110, torque: 250 }, stage1: { hp: 145, torque: 320, price: 450 } },
              { name: "2.0 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 320 }, stage1: { hp: 190, torque: 420, price: 500 } },
              { name: "2.0 TDI (184hp)", volume: "1968cc", stock: { hp: 184, torque: 380 }, stage1: { hp: 225, torque: 460, price: 500 } },
              { name: "1.4 TFSI (150hp)", volume: "1395cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 185, torque: 310, price: 450 } },
              { name: "2.0 TFSI (220hp)", volume: "1984cc", stock: { hp: 220, torque: 350 }, stage1: { hp: 300, torque: 440, price: 550 } },
              { name: "S3 (300hp)", volume: "1984cc", stock: { hp: 300, torque: 380 }, stage1: { hp: 360, torque: 480, price: 600 } },
              { name: "RS3 (400hp)", volume: "2480cc", stock: { hp: 400, torque: 480 }, stage1: { hp: 470, torque: 580, price: 800 } }
            ]
          },
          {
            name: "8Y (2020-Present)",
            engines: [
              { name: "30 TDI (116hp)", volume: "1968cc", stock: { hp: 116, torque: 300 }, stage1: { hp: 160, torque: 380, price: 500 } },
              { name: "35 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 360 }, stage1: { hp: 200, torque: 440, price: 500 } },
              { name: "35 TFSI (150hp)", volume: "1498cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 190, torque: 320, price: 500 } },
              { name: "40 TFSI (190hp)", volume: "1984cc", stock: { hp: 190, torque: 320 }, stage1: { hp: 250, torque: 420, price: 550 } },
              { name: "S3 (310hp)", volume: "1984cc", stock: { hp: 310, torque: 400 }, stage1: { hp: 370, torque: 490, price: 650 } },
              { name: "RS3 (400hp)", volume: "2480cc", stock: { hp: 400, torque: 500 }, stage1: { hp: 480, torque: 600, price: 850 } }
            ]
          }
        ]
      },
      {
        name: "A4",
        generations: [
          {
            name: "B8 (2008-2016)",
            engines: [
              { name: "2.0 TDI (143hp)", volume: "1968cc", stock: { hp: 143, torque: 320 }, stage1: { hp: 185, torque: 410, price: 450 } },
              { name: "2.0 TDI (177hp)", volume: "1968cc", stock: { hp: 177, torque: 380 }, stage1: { hp: 215, torque: 450, price: 450 } },
              { name: "3.0 TDI (245hp)", volume: "2967cc", stock: { hp: 245, torque: 500 }, stage1: { hp: 300, torque: 600, price: 550 } },
              { name: "1.8 TFSI (170hp)", volume: "1798cc", stock: { hp: 170, torque: 320 }, stage1: { hp: 220, torque: 380, price: 500 } },
              { name: "2.0 TFSI (211hp)", volume: "1984cc", stock: { hp: 211, torque: 350 }, stage1: { hp: 265, torque: 420, price: 500 } },
              { name: "S4 (333hp)", volume: "2995cc", stock: { hp: 333, torque: 440 }, stage1: { hp: 410, torque: 520, price: 700 } }
            ]
          },
          {
            name: "B9 (2015-2024)",
            engines: [
              { name: "35 TFSI (150hp)", volume: "1984cc", stock: { hp: 150, torque: 270 }, stage1: { hp: 240, torque: 380, price: 550 } },
              { name: "40 TFSI (190hp)", volume: "1984cc", stock: { hp: 190, torque: 320 }, stage1: { hp: 260, torque: 420, price: 550 } },
              { name: "45 TFSI (245hp)", volume: "1984cc", stock: { hp: 245, torque: 370 }, stage1: { hp: 310, torque: 450, price: 550 } },
              { name: "35 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 320 }, stage1: { hp: 195, torque: 420, price: 500 } },
              { name: "40 TDI (190hp)", volume: "1968cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 500 } },
              { name: "50 TDI (286hp)", volume: "2967cc", stock: { hp: 286, torque: 620 }, stage1: { hp: 340, torque: 720, price: 650 } },
              { name: "S4 (354hp)", volume: "2995cc", stock: { hp: 354, torque: 500 }, stage1: { hp: 420, torque: 600, price: 750 } },
              { name: "RS4 (450hp)", volume: "2894cc", stock: { hp: 450, torque: 600 }, stage1: { hp: 510, torque: 700, price: 900 } }
            ]
          }
        ]
      },
      {
        name: "A6",
        generations: [
          {
            name: "C7 (2011-2018)",
            engines: [
              { name: "2.0 TDI (190hp)", volume: "1968cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 500 } },
              { name: "3.0 TDI (245hp)", volume: "2967cc", stock: { hp: 245, torque: 580 }, stage1: { hp: 300, torque: 680, price: 600 } },
              { name: "3.0 TDI BiTDI (313hp)", volume: "2967cc", stock: { hp: 313, torque: 650 }, stage1: { hp: 380, torque: 780, price: 700 } },
              { name: "3.0 TFSI (310hp)", volume: "2995cc", stock: { hp: 310, torque: 440 }, stage1: { hp: 420, torque: 520, price: 700 } },
              { name: "S6 (420hp)", volume: "3993cc", stock: { hp: 420, torque: 550 }, stage1: { hp: 540, torque: 750, price: 950 } },
              { name: "RS6 (560hp)", volume: "3993cc", stock: { hp: 560, torque: 700 }, stage1: { hp: 680, torque: 900, price: 1200 } }
            ]
          },
          {
            name: "C8 (2018-Present)",
            engines: [
              { name: "40 TDI (204hp)", volume: "1968cc", stock: { hp: 204, torque: 400 }, stage1: { hp: 250, torque: 480, price: 600 } },
              { name: "45 TDI (231hp)", volume: "2967cc", stock: { hp: 231, torque: 500 }, stage1: { hp: 300, torque: 620, price: 700 } },
              { name: "50 TDI (286hp)", volume: "2967cc", stock: { hp: 286, torque: 620 }, stage1: { hp: 340, torque: 740, price: 700 } },
              { name: "55 TFSI (340hp)", volume: "2995cc", stock: { hp: 340, torque: 500 }, stage1: { hp: 410, torque: 600, price: 800 } },
              { name: "S6 TDI (344hp)", volume: "2967cc", stock: { hp: 344, torque: 700 }, stage1: { hp: 390, torque: 800, price: 850 } },
              { name: "RS6 (600hp)", volume: "3996cc", stock: { hp: 600, torque: 800 }, stage1: { hp: 720, torque: 1000, price: 1500 } }
            ]
          }
        ]
      },
      {
        name: "Q5",
        generations: [
          {
            name: "8R (2008-2017)",
            engines: [
              { name: "2.0 TDI (177hp)", volume: "1968cc", stock: { hp: 177, torque: 380 }, stage1: { hp: 215, torque: 450, price: 500 } },
              { name: "3.0 TDI (245hp)", volume: "2967cc", stock: { hp: 245, torque: 580 }, stage1: { hp: 300, torque: 680, price: 600 } },
              { name: "SQ5 TDI (313hp)", volume: "2967cc", stock: { hp: 313, torque: 650 }, stage1: { hp: 380, torque: 760, price: 750 } },
              { name: "2.0 TFSI (225hp)", volume: "1984cc", stock: { hp: 225, torque: 350 }, stage1: { hp: 285, torque: 440, price: 550 } }
            ]
          },
          {
            name: "FY (2017-Present)",
            engines: [
              { name: "40 TDI (190hp)", volume: "1968cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 235, torque: 480, price: 600 } },
              { name: "50 TDI (286hp)", volume: "2967cc", stock: { hp: 286, torque: 620 }, stage1: { hp: 340, torque: 740, price: 750 } },
              { name: "45 TFSI (245hp)", volume: "1984cc", stock: { hp: 245, torque: 370 }, stage1: { hp: 310, torque: 480, price: 650 } },
              { name: "SQ5 (354hp)", volume: "2995cc", stock: { hp: 354, torque: 500 }, stage1: { hp: 420, torque: 620, price: 850 } }
            ]
          }
        ]
      },
      {
        name: "Q7",
        generations: [
          {
            name: "4L (2006-2015)",
            engines: [
              { name: "3.0 TDI (245hp)", volume: "2967cc", stock: { hp: 245, torque: 550 }, stage1: { hp: 300, torque: 650, price: 600 } },
              { name: "4.2 TDI (340hp)", volume: "4134cc", stock: { hp: 340, torque: 800 }, stage1: { hp: 410, torque: 950, price: 850 } },
              { name: "6.0 TDI V12 (500hp)", volume: "5934cc", stock: { hp: 500, torque: 1000 }, stage1: { hp: 580, torque: 1200, price: 1500 } }
            ]
          },
          {
            name: "4M (2015-Present)",
            engines: [
              { name: "45 TDI (231hp)", volume: "2967cc", stock: { hp: 231, torque: 500 }, stage1: { hp: 300, torque: 620, price: 750 } },
              { name: "50 TDI (286hp)", volume: "2967cc", stock: { hp: 286, torque: 600 }, stage1: { hp: 340, torque: 740, price: 750 } },
              { name: "SQ7 TDI (435hp)", volume: "3956cc", stock: { hp: 435, torque: 900 }, stage1: { hp: 510, torque: 1050, price: 1200 } },
              { name: "SQ7 TFSI (507hp)", volume: "3996cc", stock: { hp: 507, torque: 770 }, stage1: { hp: 650, torque: 900, price: 1400 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "BMW",
    models: [
      {
        name: "3 Series",
        generations: [
          {
            name: "F30/F31 (2011-2019)",
            engines: [
              { name: "318d (150hp)", volume: "1995cc", stock: { hp: 150, torque: 320 }, stage1: { hp: 195, torque: 420, price: 450 } },
              { name: "320d (190hp)", volume: "1995cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 450 } },
              { name: "330d (258hp)", volume: "2993cc", stock: { hp: 258, torque: 560 }, stage1: { hp: 315, torque: 660, price: 600 } },
              { name: "335d (313hp)", volume: "2993cc", stock: { hp: 313, torque: 630 }, stage1: { hp: 380, torque: 760, price: 650 } },
              { name: "320i (184hp)", volume: "1998cc", stock: { hp: 184, torque: 270 }, stage1: { hp: 260, torque: 420, price: 550 } },
              { name: "328i (245hp)", volume: "1997cc", stock: { hp: 245, torque: 350 }, stage1: { hp: 295, torque: 440, price: 550 } },
              { name: "335i (306hp)", volume: "2979cc", stock: { hp: 306, torque: 400 }, stage1: { hp: 370, torque: 520, price: 650 } },
              { name: "340i (326hp)", volume: "2998cc", stock: { hp: 326, torque: 450 }, stage1: { hp: 420, torque: 580, price: 700 } },
              { name: "M3 (431hp)", volume: "2979cc", stock: { hp: 431, torque: 550 }, stage1: { hp: 520, torque: 700, price: 950 } }
            ]
          },
          {
            name: "G20/G21 (2019-Present)",
            engines: [
              { name: "320d (190hp)", volume: "1995cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 235, torque: 480, price: 600 } },
              { name: "330d (265hp)", volume: "2993cc", stock: { hp: 265, torque: 580 }, stage1: { hp: 330, torque: 700, price: 700 } },
              { name: "M340d (340hp)", volume: "2993cc", stock: { hp: 340, torque: 700 }, stage1: { hp: 400, torque: 820, price: 800 } },
              { name: "320i (184hp)", volume: "1998cc", stock: { hp: 184, torque: 300 }, stage1: { hp: 260, torque: 420, price: 650 } },
              { name: "330i (258hp)", volume: "1998cc", stock: { hp: 258, torque: 400 }, stage1: { hp: 310, torque: 500, price: 650 } },
              { name: "M340i (374hp)", volume: "2998cc", stock: { hp: 374, torque: 500 }, stage1: { hp: 440, torque: 620, price: 850 } },
              { name: "M3 (480hp)", volume: "2993cc", stock: { hp: 480, torque: 550 }, stage1: { hp: 590, torque: 750, price: 1200 } }
            ]
          }
        ]
      },
      {
        name: "5 Series",
        generations: [
          {
            name: "F10/F11 (2010-2017)",
            engines: [
              { name: "520d (184/190hp)", volume: "1995cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 450 } },
              { name: "530d (258hp)", volume: "2993cc", stock: { hp: 258, torque: 560 }, stage1: { hp: 315, torque: 660, price: 600 } },
              { name: "535d (313hp)", volume: "2993cc", stock: { hp: 313, torque: 630 }, stage1: { hp: 380, torque: 760, price: 650 } },
              { name: "M550d (381hp)", volume: "2993cc", stock: { hp: 381, torque: 740 }, stage1: { hp: 440, torque: 850, price: 850 } },
              { name: "528i (245hp)", volume: "1997cc", stock: { hp: 245, torque: 350 }, stage1: { hp: 295, torque: 440, price: 550 } },
              { name: "535i (306hp)", volume: "2979cc", stock: { hp: 306, torque: 400 }, stage1: { hp: 370, torque: 520, price: 650 } },
              { name: "550i (450hp)", volume: "4395cc", stock: { hp: 450, torque: 650 }, stage1: { hp: 540, torque: 800, price: 1100 } },
              { name: "M5 (560hp)", volume: "4395cc", stock: { hp: 560, torque: 680 }, stage1: { hp: 680, torque: 850, price: 1350 } }
            ]
          },
          {
            name: "G30/G31 (2017-2023)",
            engines: [
              { name: "520d (190hp)", volume: "1995cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 235, torque: 480, price: 600 } },
              { name: "530d (265hp)", volume: "2993cc", stock: { hp: 265, torque: 620 }, stage1: { hp: 330, torque: 720, price: 700 } },
              { name: "540d (320hp)", volume: "2993cc", stock: { hp: 320, torque: 680 }, stage1: { hp: 390, torque: 800, price: 800 } },
              { name: "M550d (400hp)", volume: "2993cc", stock: { hp: 400, torque: 760 }, stage1: { hp: 470, torque: 880, price: 950 } },
              { name: "530i (252hp)", volume: "1998cc", stock: { hp: 252, torque: 350 }, stage1: { hp: 310, torque: 480, price: 700 } },
              { name: "540i (340hp)", volume: "2998cc", stock: { hp: 340, torque: 450 }, stage1: { hp: 420, torque: 580, price: 850 } },
              { name: "M550i (530hp)", volume: "4395cc", stock: { hp: 530, torque: 750 }, stage1: { hp: 630, torque: 900, price: 1400 } },
              { name: "M5 (600hp)", volume: "4395cc", stock: { hp: 600, torque: 750 }, stage1: { hp: 720, torque: 900, price: 1600 } }
            ]
          }
        ]
      },
      {
        name: "X5",
        generations: [
          {
            name: "F15 (2013-2018)",
            engines: [
              { name: "25d (218/231hp)", volume: "1995cc", stock: { hp: 231, torque: 500 }, stage1: { hp: 280, torque: 580, price: 550 } },
              { name: "30d (258hp)", volume: "2993cc", stock: { hp: 258, torque: 560 }, stage1: { hp: 315, torque: 660, price: 650 } },
              { name: "40d (313hp)", volume: "2993cc", stock: { hp: 313, torque: 630 }, stage1: { hp: 380, torque: 760, price: 700 } },
              { name: "M50d (381hp)", volume: "2993cc", stock: { hp: 381, torque: 740 }, stage1: { hp: 440, torque: 850, price: 900 } },
              { name: "35i (306hp)", volume: "2979cc", stock: { hp: 306, torque: 400 }, stage1: { hp: 370, torque: 520, price: 700 } },
              { name: "50i (450hp)", volume: "4395cc", stock: { hp: 450, torque: 650 }, stage1: { hp: 540, torque: 820, price: 1100 } },
              { name: "X5 M (575hp)", volume: "4395cc", stock: { hp: 575, torque: 750 }, stage1: { hp: 700, torque: 920, price: 1500 } }
            ]
          },
          {
            name: "G05 (2018-Present)",
            engines: [
              { name: "30d (265hp)", volume: "2993cc", stock: { hp: 265, torque: 620 }, stage1: { hp: 330, torque: 720, price: 750 } },
              { name: "40d (340hp)", volume: "2993cc", stock: { hp: 340, torque: 700 }, stage1: { hp: 400, torque: 820, price: 850 } },
              { name: "M50d (400hp)", volume: "2993cc", stock: { hp: 400, torque: 760 }, stage1: { hp: 470, torque: 880, price: 1000 } },
              { name: "40i (340hp)", volume: "2998cc", stock: { hp: 340, torque: 450 }, stage1: { hp: 420, torque: 580, price: 900 } },
              { name: "M50i (530hp)", volume: "4395cc", stock: { hp: 530, torque: 750 }, stage1: { hp: 630, torque: 920, price: 1400 } },
              { name: "X5 M (600hp)", volume: "4395cc", stock: { hp: 600, torque: 750 }, stage1: { hp: 720, torque: 900, price: 1800 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Mercedes-Benz",
    models: [
      {
        name: "C-Class",
        generations: [
          {
            name: "W205 (2014-2021)",
            engines: [
              { name: "C200d (160hp)", volume: "1598cc", stock: { hp: 160, torque: 360 }, stage1: { hp: 205, torque: 440, price: 500 } },
              { name: "C220d (170/194hp)", volume: "2143cc", stock: { hp: 194, torque: 400 }, stage1: { hp: 240, torque: 480, price: 550 } },
              { name: "C250d (204hp)", volume: "2143cc", stock: { hp: 204, torque: 500 }, stage1: { hp: 250, torque: 580, price: 550 } },
              { name: "C300d (245hp)", volume: "1950cc", stock: { hp: 245, torque: 500 }, stage1: { hp: 300, torque: 600, price: 650 } },
              { name: "C200 (184hp)", volume: "1497cc", stock: { hp: 184, torque: 280 }, stage1: { hp: 230, torque: 360, price: 600 } },
              { name: "C300 (245/258hp)", volume: "1991cc", stock: { hp: 258, torque: 370 }, stage1: { hp: 310, torque: 480, price: 650 } },
              { name: "C43 AMG (367/390hp)", volume: "2996cc", stock: { hp: 390, torque: 520 }, stage1: { hp: 440, torque: 620, price: 900 } },
              { name: "C63 AMG (476hp)", volume: "3982cc", stock: { hp: 476, torque: 650 }, stage1: { hp: 580, torque: 800, price: 1300 } },
              { name: "C63 S AMG (510hp)", volume: "3982cc", stock: { hp: 510, torque: 700 }, stage1: { hp: 610, torque: 850, price: 1300 } }
            ]
          },
          {
            name: "W206 (2021-Present)",
            engines: [
              { name: "C200d (163hp)", volume: "1993cc", stock: { hp: 163, torque: 380 }, stage1: { hp: 210, torque: 460, price: 650 } },
              { name: "C220d (200hp)", volume: "1993cc", stock: { hp: 200, torque: 440 }, stage1: { hp: 260, torque: 540, price: 700 } },
              { name: "C300d (265hp)", volume: "1993cc", stock: { hp: 265, torque: 550 }, stage1: { hp: 320, torque: 650, price: 750 } },
              { name: "C200 (204hp)", volume: "1496cc", stock: { hp: 204, torque: 300 }, stage1: { hp: 250, torque: 380, price: 700 } },
              { name: "C300 (258hp)", volume: "1999cc", stock: { hp: 258, torque: 400 }, stage1: { hp: 310, torque: 500, price: 750 } },
              { name: "C43 AMG (408hp)", volume: "1991cc", stock: { hp: 408, torque: 500 }, stage1: { hp: 460, torque: 580, price: 1100 } }
            ]
          }
        ]
      },
      {
        name: "E-Class",
        generations: [
          {
            name: "W212 (2009-2016)",
            engines: [
              { name: "E220 CDI (170hp)", volume: "2143cc", stock: { hp: 170, torque: 400 }, stage1: { hp: 210, torque: 480, price: 450 } },
              { name: "E250 CDI (204hp)", volume: "2143cc", stock: { hp: 204, torque: 500 }, stage1: { hp: 250, torque: 580, price: 500 } },
              { name: "E350 BlueTEC (252hp)", volume: "2987cc", stock: { hp: 252, torque: 620 }, stage1: { hp: 300, torque: 720, price: 600 } },
              { name: "E350 CGI (292hp)", volume: "3498cc", stock: { hp: 292, torque: 365 }, stage1: { hp: 320, torque: 410, price: 500 } },
              { name: "E500 (408hp)", volume: "4663cc", stock: { hp: 408, torque: 600 }, stage1: { hp: 500, torque: 800, price: 950 } },
              { name: "E63 AMG (525/557hp)", volume: "5461cc", stock: { hp: 525, torque: 700 }, stage1: { hp: 650, torque: 950, price: 1400 } }
            ]
          },
          {
            name: "W213 (2016-2023)",
            engines: [
              { name: "E220d (194hp)", volume: "1950cc", stock: { hp: 194, torque: 400 }, stage1: { hp: 240, torque: 480, price: 600 } },
              { name: "E300d (245/265hp)", volume: "1950cc", stock: { hp: 265, torque: 550 }, stage1: { hp: 320, torque: 650, price: 700 } },
              { name: "E350d (258/286hp)", volume: "2925cc", stock: { hp: 286, torque: 600 }, stage1: { hp: 340, torque: 740, price: 800 } },
              { name: "E400d (340hp)", volume: "2925cc", stock: { hp: 340, torque: 700 }, stage1: { hp: 400, torque: 820, price: 850 } },
              { name: "E300 (245/258hp)", volume: "1991cc", stock: { hp: 258, torque: 370 }, stage1: { hp: 310, torque: 480, price: 700 } },
              { name: "E450 (367hp)", volume: "2999cc", stock: { hp: 367, torque: 500 }, stage1: { hp: 430, torque: 620, price: 950 } },
              { name: "E53 AMG (435hp)", volume: "2999cc", stock: { hp: 435, torque: 520 }, stage1: { hp: 500, torque: 650, price: 1200 } },
              { name: "E63 S AMG (612hp)", volume: "3982cc", stock: { hp: 612, torque: 850 }, stage1: { hp: 710, torque: 1000, price: 1800 } }
            ]
          }
        ]
      },
      {
        name: "GLE",
        generations: [
          {
            name: "W166 (2015-2018)",
            engines: [
              { name: "250d (204hp)", volume: "2143cc", stock: { hp: 204, torque: 500 }, stage1: { hp: 250, torque: 580, price: 600 } },
              { name: "350d (258hp)", volume: "2987cc", stock: { hp: 258, torque: 620 }, stage1: { hp: 310, torque: 720, price: 700 } },
              { name: "400 (333hp)", volume: "2996cc", stock: { hp: 333, torque: 480 }, stage1: { hp: 400, torque: 580, price: 850 } },
              { name: "43 AMG (367/390hp)", volume: "2996cc", stock: { hp: 390, torque: 520 }, stage1: { hp: 440, torque: 620, price: 950 } },
              { name: "63 S AMG (585hp)", volume: "5461cc", stock: { hp: 585, torque: 760 }, stage1: { hp: 700, torque: 1000, price: 1600 } }
            ]
          },
          {
            name: "V167 (2019-Present)",
            engines: [
              { name: "300d (245/272hp)", volume: "1950cc", stock: { hp: 272, torque: 550 }, stage1: { hp: 320, torque: 650, price: 800 } },
              { name: "350d (272hp)", volume: "2925cc", stock: { hp: 272, torque: 600 }, stage1: { hp: 340, torque: 740, price: 850 } },
              { name: "400d (330hp)", volume: "2925cc", stock: { hp: 330, torque: 700 }, stage1: { hp: 400, torque: 820, price: 900 } },
              { name: "450 (367hp)", volume: "2999cc", stock: { hp: 367, torque: 500 }, stage1: { hp: 430, torque: 620, price: 1000 } },
              { name: "53 AMG (435hp)", volume: "2999cc", stock: { hp: 435, torque: 520 }, stage1: { hp: 500, torque: 650, price: 1300 } },
              { name: "63 S AMG (612hp)", volume: "3982cc", stock: { hp: 612, torque: 850 }, stage1: { hp: 720, torque: 1050, price: 2000 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Volkswagen",
    models: [
      {
        name: "Golf",
        generations: [
          {
            name: "Golf 7 (2012-2020)",
            engines: [
              { name: "1.6 TDI (105/115hp)", volume: "1598cc", stock: { hp: 115, torque: 250 }, stage1: { hp: 150, torque: 320, price: 400 } },
              { name: "2.0 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 320 }, stage1: { hp: 190, torque: 420, price: 450 } },
              { name: "2.0 GTD (184hp)", volume: "1968cc", stock: { hp: 184, torque: 380 }, stage1: { hp: 230, torque: 460, price: 500 } },
              { name: "1.4 TSI (150hp)", volume: "1395cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 185, torque: 310, price: 450 } },
              { name: "2.0 GTI (220/230hp)", volume: "1984cc", stock: { hp: 230, torque: 350 }, stage1: { hp: 300, torque: 450, price: 550 } },
              { name: "2.0 GTI Performance (245hp)", volume: "1984cc", stock: { hp: 245, torque: 370 }, stage1: { hp: 310, torque: 470, price: 550 } },
              { name: "2.0 R (300/310hp)", volume: "1984cc", stock: { hp: 310, torque: 400 }, stage1: { hp: 370, torque: 500, price: 650 } }
            ]
          },
          {
            name: "Golf 8 (2020-Present)",
            engines: [
              { name: "2.0 TDI (115hp)", volume: "1968cc", stock: { hp: 115, torque: 300 }, stage1: { hp: 160, torque: 380, price: 500 } },
              { name: "2.0 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 360 }, stage1: { hp: 200, torque: 440, price: 550 } },
              { name: "1.5 TSI (150hp)", volume: "1498cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 190, torque: 320, price: 500 } },
              { name: "2.0 GTI (245hp)", volume: "1984cc", stock: { hp: 245, torque: 370 }, stage1: { hp: 300, torque: 480, price: 650 } },
              { name: "2.0 GTI Clubsport (300hp)", volume: "1984cc", stock: { hp: 300, torque: 400 }, stage1: { hp: 350, torque: 500, price: 700 } },
              { name: "2.0 R (320hp)", volume: "1984cc", stock: { hp: 320, torque: 420 }, stage1: { hp: 380, torque: 520, price: 800 } }
            ]
          }
        ]
      },
      {
        name: "Passat",
        generations: [
          {
            name: "B7 (2010-2015)",
            engines: [
              { name: "1.6 TDI (105hp)", volume: "1598cc", stock: { hp: 105, torque: 250 }, stage1: { hp: 145, torque: 320, price: 400 } },
              { name: "2.0 TDI (140hp)", volume: "1968cc", stock: { hp: 140, torque: 320 }, stage1: { hp: 185, torque: 410, price: 450 } },
              { name: "2.0 TDI (177hp)", volume: "1968cc", stock: { hp: 177, torque: 380 }, stage1: { hp: 215, torque: 450, price: 450 } },
              { name: "2.0 TSI (210hp)", volume: "1984cc", stock: { hp: 210, torque: 280 }, stage1: { hp: 260, torque: 380, price: 500 } }
            ]
          },
          {
            name: "B8 (2015-2023)",
            engines: [
              { name: "2.0 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 340 }, stage1: { hp: 195, torque: 440, price: 500 } },
              { name: "2.0 TDI (190hp)", volume: "1968cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 235, torque: 480, price: 500 } },
              { name: "2.0 BiTDI (240hp)", volume: "1968cc", stock: { hp: 240, torque: 500 }, stage1: { hp: 290, torque: 580, price: 650 } },
              { name: "1.5 TSI (150hp)", volume: "1498cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 190, torque: 320, price: 500 } },
              { name: "2.0 TSI (190hp)", volume: "1984cc", stock: { hp: 190, torque: 320 }, stage1: { hp: 250, torque: 420, price: 600 } },
              { name: "2.0 TSI (272/280hp)", volume: "1984cc", stock: { hp: 280, torque: 350 }, stage1: { hp: 340, torque: 450, price: 700 } }
            ]
          }
        ]
      },
      {
        name: "Tiguan",
        generations: [
          {
            name: "Mk1 (2007-2016)",
            engines: [
              { name: "2.0 TDI (140hp)", volume: "1968cc", stock: { hp: 140, torque: 320 }, stage1: { hp: 185, torque: 420, price: 450 } },
              { name: "2.0 TDI (177hp)", volume: "1968cc", stock: { hp: 177, torque: 380 }, stage1: { hp: 215, torque: 460, price: 450 } },
              { name: "2.0 TSI (200hp)", volume: "1984cc", stock: { hp: 200, torque: 280 }, stage1: { hp: 260, torque: 380, price: 500 } }
            ]
          },
          {
            name: "Mk2 (2016-Present)",
            engines: [
              { name: "2.0 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 340 }, stage1: { hp: 195, torque: 440, price: 550 } },
              { name: "2.0 TDI (190hp)", volume: "1968cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 240, torque: 480, price: 550 } },
              { name: "2.0 BiTDI (240hp)", volume: "1968cc", stock: { hp: 240, torque: 500 }, stage1: { hp: 290, torque: 580, price: 700 } },
              { name: "1.5 TSI (150hp)", volume: "1498cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 190, torque: 320, price: 550 } },
              { name: "2.0 TSI (190hp)", volume: "1984cc", stock: { hp: 190, torque: 320 }, stage1: { hp: 250, torque: 430, price: 650 } },
              { name: "Tiguan R (320hp)", volume: "1984cc", stock: { hp: 320, torque: 420 }, stage1: { hp: 380, torque: 520, price: 850 } }
            ]
          }
        ]
      },
      {
        name: "Touareg",
        generations: [
          {
            name: "7P (2010-2018)",
            engines: [
              { name: "3.0 TDI (204hp)", volume: "2967cc", stock: { hp: 204, torque: 450 }, stage1: { hp: 280, torque: 580, price: 600 } },
              { name: "3.0 TDI (245/262hp)", volume: "2967cc", stock: { hp: 262, torque: 580 }, stage1: { hp: 310, torque: 680, price: 650 } },
              { name: "4.2 TDI V8 (340hp)", volume: "4134cc", stock: { hp: 340, torque: 800 }, stage1: { hp: 410, torque: 950, price: 900 } }
            ]
          },
          {
            name: "CR (2018-Present)",
            engines: [
              { name: "3.0 TDI (231hp)", volume: "2967cc", stock: { hp: 231, torque: 500 }, stage1: { hp: 300, torque: 620, price: 750 } },
              { name: "3.0 TDI (286hp)", volume: "2967cc", stock: { hp: 286, torque: 600 }, stage1: { hp: 340, torque: 740, price: 750 } },
              { name: "4.0 TDI V8 (421hp)", volume: "3956cc", stock: { hp: 421, torque: 900 }, stage1: { hp: 510, torque: 1050, price: 1200 } },
              { name: "3.0 TSI (340hp)", volume: "2995cc", stock: { hp: 340, torque: 450 }, stage1: { hp: 410, torque: 580, price: 950 } },
              { name: "Touareg R (462hp)", volume: "2995cc", stock: { hp: 462, torque: 700 }, stage1: { hp: 520, torque: 820, price: 1300 } }
            ]
          }
        ]
      }
    ]
  },
{
    brand: "Porsche",
    models: [
      {
        name: "911",
        generations: [
          {
            name: "997 mk2 (2008-2011)",
            engines: [
              { name: "Carrera (345hp)", volume: "3614cc", stock: { hp: 345, torque: 390 }, stage1: { hp: 370, torque: 420, price: 650 } },
              { name: "Carrera S (385hp)", volume: "3824cc", stock: { hp: 385, torque: 420 }, stage1: { hp: 410, torque: 450, price: 650 } },
              { name: "Carrera 4 (345hp)", volume: "3614cc", stock: { hp: 345, torque: 390 }, stage1: { hp: 370, torque: 420, price: 650 } },
              { name: "Carrera 4S (385hp)", volume: "3824cc", stock: { hp: 385, torque: 420 }, stage1: { hp: 410, torque: 450, price: 650 } },
              { name: "Carrera GTS (408hp)", volume: "3800cc", stock: { hp: 408, torque: 420 }, stage1: { hp: 435, torque: 450, price: 700 } },
              { name: "Targa 4 (345hp)", volume: "3614cc", stock: { hp: 345, torque: 390 }, stage1: { hp: 370, torque: 420, price: 650 } },
              { name: "Targa 4S (385hp)", volume: "3824cc", stock: { hp: 385, torque: 420 }, stage1: { hp: 410, torque: 450, price: 650 } },
              { name: "Turbo (500hp)", volume: "3800cc", stock: { hp: 500, torque: 650 }, stage1: { hp: 580, torque: 850, price: 950 } },
              { name: "Turbo S (530hp)", volume: "3800cc", stock: { hp: 530, torque: 700 }, stage1: { hp: 620, torque: 920, price: 950 } }
            ]
          },
          {
            name: "997 mk1 (2004-2008)",
            engines: [
              { name: "Carrera (325hp)", volume: "3596cc", stock: { hp: 325, torque: 370 }, stage1: { hp: 350, torque: 400, price: 650 } },
              { name: "Carrera S (355hp)", volume: "3824cc", stock: { hp: 355, torque: 400 }, stage1: { hp: 380, torque: 430, price: 650 } },
              { name: "Carrera 4 (325hp)", volume: "3596cc", stock: { hp: 325, torque: 370 }, stage1: { hp: 350, torque: 400, price: 650 } },
              { name: "Carrera 4S (355hp)", volume: "3824cc", stock: { hp: 355, torque: 400 }, stage1: { hp: 380, torque: 430, price: 650 } },
              { name: "Turbo (480hp)", volume: "3600cc", stock: { hp: 480, torque: 620 }, stage1: { hp: 550, torque: 800, price: 900 } },
              { name: "Turbo S (530hp)", volume: "3600cc", stock: { hp: 530, torque: 680 }, stage1: { hp: 600, torque: 880, price: 950 } },
              { name: "GT3 (415hp)", volume: "3600cc", stock: { hp: 415, torque: 405 }, stage1: { hp: 440, torque: 430, price: 800 } },
              { name: "GT3 RS (450hp)", volume: "3797cc", stock: { hp: 450, torque: 430 }, stage1: { hp: 475, torque: 455, price: 900 } }
            ]
          },
          {
            name: "991.1 (2011-2015)",
            engines: [
              { name: "Carrera (350hp)", volume: "3436cc", stock: { hp: 350, torque: 390 }, stage1: { hp: 400, torque: 460, price: 750 } },
              { name: "Carrera S (400hp)", volume: "3800cc", stock: { hp: 400, torque: 440 }, stage1: { hp: 450, torque: 520, price: 750 } },
              { name: "Carrera 4 (350hp)", volume: "3436cc", stock: { hp: 350, torque: 390 }, stage1: { hp: 400, torque: 460, price: 750 } },
              { name: "Carrera 4S (400hp)", volume: "3800cc", stock: { hp: 400, torque: 440 }, stage1: { hp: 450, torque: 520, price: 750 } },
              { name: "Turbo (520hp)", volume: "3800cc", stock: { hp: 520, torque: 660 }, stage1: { hp: 600, torque: 860, price: 1000 } },
              { name: "Turbo S (560hp)", volume: "3800cc", stock: { hp: 560, torque: 700 }, stage1: { hp: 640, torque: 900, price: 1100 } },
              { name: "GT3 (475hp)", volume: "3799cc", stock: { hp: 475, torque: 440 }, stage1: { hp: 495, torque: 460, price: 850 } },
              { name: "GT3 RS (500hp)", volume: "3996cc", stock: { hp: 500, torque: 460 }, stage1: { hp: 520, torque: 480, price: 950 } }
            ]
          },
          {
            name: "991.2 (2016-2019)",
            engines: [
              { name: "Carrera (370hp)", volume: "2981cc", stock: { hp: 370, torque: 450 }, stage1: { hp: 470, torque: 580, price: 950 } },
              { name: "Carrera S (420hp)", volume: "2981cc", stock: { hp: 420, torque: 500 }, stage1: { hp: 500, torque: 620, price: 950 } },
              { name: "Carrera 4 (370hp)", volume: "2981cc", stock: { hp: 370, torque: 450 }, stage1: { hp: 470, torque: 580, price: 950 } },
              { name: "Carrera 4S (420hp)", volume: "2981cc", stock: { hp: 420, torque: 500 }, stage1: { hp: 500, torque: 620, price: 950 } },
              { name: "Carrera GTS (450hp)", volume: "2981cc", stock: { hp: 450, torque: 550 }, stage1: { hp: 530, torque: 680, price: 1000 } },
              { name: "Turbo (540hp)", volume: "3800cc", stock: { hp: 540, torque: 660 }, stage1: { hp: 620, torque: 840, price: 1200 } },
              { name: "Turbo S (580hp)", volume: "3800cc", stock: { hp: 580, torque: 700 }, stage1: { hp: 640, torque: 850, price: 1200 } },
              { name: "GT3 (500hp)", volume: "3996cc", stock: { hp: 500, torque: 460 }, stage1: { hp: 520, torque: 480, price: 900 } },
              { name: "GT3 RS (520hp)", volume: "3996cc", stock: { hp: 520, torque: 470 }, stage1: { hp: 540, torque: 490, price: 1000 } },
              { name: "GT2 RS (700hp)", volume: "3800cc", stock: { hp: 700, torque: 750 }, stage1: { hp: 780, torque: 900, price: 1500 } }
            ]
          },
          {
            name: "992 (2019-Present)",
            engines: [
              { name: "Carrera (385hp)", volume: "2981cc", stock: { hp: 385, torque: 450 }, stage1: { hp: 480, torque: 600, price: 1100 } },
              { name: "Carrera S (450hp)", volume: "2981cc", stock: { hp: 450, torque: 530 }, stage1: { hp: 530, torque: 650, price: 1100 } },
              { name: "Carrera 4 (385hp)", volume: "2981cc", stock: { hp: 385, torque: 450 }, stage1: { hp: 480, torque: 600, price: 1100 } },
              { name: "Carrera 4S (450hp)", volume: "2981cc", stock: { hp: 450, torque: 530 }, stage1: { hp: 530, torque: 650, price: 1100 } },
              { name: "Carrera GTS (480hp)", volume: "2981cc", stock: { hp: 480, torque: 570 }, stage1: { hp: 550, torque: 680, price: 1200 } },
              { name: "Turbo (580hp)", volume: "3745cc", stock: { hp: 580, torque: 750 }, stage1: { hp: 670, torque: 900, price: 1400 } },
              { name: "Turbo S (650hp)", volume: "3745cc", stock: { hp: 650, torque: 800 }, stage1: { hp: 720, torque: 920, price: 1400 } },
              { name: "GT3 (510hp)", volume: "3996cc", stock: { hp: 510, torque: 470 }, stage1: { hp: 530, torque: 490, price: 1000 } },
              { name: "GT3 RS (525hp)", volume: "3996cc", stock: { hp: 525, torque: 465 }, stage1: { hp: 545, torque: 485, price: 1100 } }
            ]
          }
        ]
      },
      {
        name: "Cayenne",
        generations: [
          {
             name: "PO536 (2018-Present)",
             engines: [
               { name: "3.0 V6 (340hp)", volume: "2995cc", stock: { hp: 340, torque: 450 }, stage1: { hp: 420, torque: 580, price: 850 } },
               { name: "E-Hybrid (462hp)", volume: "2995cc", stock: { hp: 462, torque: 700 }, stage1: { hp: 540, torque: 820, price: 950 } },
               { name: "Turbo 4.0 V8 (550hp)", volume: "3996cc", stock: { hp: 550, torque: 770 }, stage1: { hp: 670, torque: 900, price: 1200 } }
             ]
          }
        ]
      },
      {
        name: "Macan",
        generations: [
          {
            name: "95B Facelift (2018-2023)",
            engines: [
              { name: "2.0 TFSI (245hp)", volume: "1984cc", stock: { hp: 245, torque: 370 }, stage1: { hp: 300, torque: 450, price: 650 } },
              { name: "Macan S (354hp)", volume: "2995cc", stock: { hp: 354, torque: 480 }, stage1: { hp: 420, torque: 600, price: 850 } },
              { name: "Macan GTS (380hp)", volume: "2894cc", stock: { hp: 380, torque: 520 }, stage1: { hp: 480, torque: 680, price: 950 } }
            ]
          }
        ]
      },
      {
        name: "718 (Cayman/Boxster)",
        generations: [
          {
            name: "982 (2016-Present)",
            engines: [
              { name: "2.0T (300hp)", volume: "1988cc", stock: { hp: 300, torque: 380 }, stage1: { hp: 360, torque: 460, price: 750 } },
              { name: "2.5T S (350hp)", volume: "2497cc", stock: { hp: 350, torque: 420 }, stage1: { hp: 410, torque: 500, price: 850 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Toyota",
    models: [
      {
        name: "Supra",
        generations: [
          {
            name: "A90 (2019-Present)",
            engines: [
              { name: "2.0 Turbo (258hp)", volume: "1998cc", stock: { hp: 258, torque: 400 }, stage1: { hp: 310, torque: 480, price: 700 } },
              { name: "3.0 Turbo (340hp)", volume: "2998cc", stock: { hp: 340, torque: 500 }, stage1: { hp: 440, torque: 620, price: 900 } }
            ]
          }
        ]
      },
      {
        name: "Land Cruiser",
        generations: [
          {
            name: "200 Series (2007-2021)",
            engines: [
              { name: "4.5 D-4D (235/272hp)", volume: "4461cc", stock: { hp: 272, torque: 650 }, stage1: { hp: 330, torque: 800, price: 800 } },
              { name: "4.6 V8 (309hp)", volume: "4608cc", stock: { hp: 309, torque: 439 }, stage1: { hp: 340, torque: 480, price: 800 } }
            ]
          },
          {
            name: "300 Series (2021-Present)",
            engines: [
              { name: "3.3D V6 (309hp)", volume: "3346cc", stock: { hp: 309, torque: 700 }, stage1: { hp: 370, torque: 820, price: 1000 } },
              { name: "3.5T V6 (415hp)", volume: "3445cc", stock: { hp: 415, torque: 650 }, stage1: { hp: 490, torque: 780, price: 1000 } }
            ]
          }
        ]
      },
      {
        name: "Hilux",
        generations: [
          {
            name: "AN120 (2015-Present)",
            engines: [
              { name: "2.4 D-4D (150hp)", volume: "2393cc", stock: { hp: 150, torque: 400 }, stage1: { hp: 190, torque: 480, price: 550 } },
              { name: "2.8 D-4D (177/204hp)", volume: "2755cc", stock: { hp: 204, torque: 500 }, stage1: { hp: 245, torque: 600, price: 600 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Ford",
    models: [
      {
        name: "Focus",
        generations: [
          {
            name: "Mk4 (2018-Present)",
            engines: [
              { name: "1.0 EcoBoost (125hp)", volume: "998cc", stock: { hp: 125, torque: 170 }, stage1: { hp: 155, torque: 240, price: 450 } },
              { name: "1.5 EcoBoost (150hp)", volume: "1497cc", stock: { hp: 150, torque: 240 }, stage1: { hp: 185, torque: 300, price: 500 } },
              { name: "1.5 EcoBoost (182hp)", volume: "1497cc", stock: { hp: 182, torque: 240 }, stage1: { hp: 205, torque: 310, price: 500 } },
              { name: "ST 2.3 EcoBoost (280hp)", volume: "2261cc", stock: { hp: 280, torque: 420 }, stage1: { hp: 330, torque: 530, price: 650 } }
            ]
          }
        ]
      },
      {
        name: "Mustang",
        generations: [
          {
            name: "S550 (2015-2023)",
            engines: [
              { name: "2.3 EcoBoost (317hp)", volume: "2261cc", stock: { hp: 317, torque: 432 }, stage1: { hp: 360, torque: 520, price: 600 } },
              { name: "5.0 V8 GT (421hp)", volume: "4951cc", stock: { hp: 421, torque: 530 }, stage1: { hp: 450, torque: 580, price: 700 } },
              { name: "5.0 V8 GT (450hp)", volume: "5038cc", stock: { hp: 450, torque: 529 }, stage1: { hp: 480, torque: 580, price: 700 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Land Rover",
    models: [
      {
        name: "Range Rover Sport",
        generations: [
          {
            name: "L494 (2013-2022)",
            engines: [
              { name: "3.0 SDV6 (306hp)", volume: "2993cc", stock: { hp: 306, torque: 700 }, stage1: { hp: 350, torque: 780, price: 650 } },
              { name: "4.4 SDV8 (339hp)", volume: "4367cc", stock: { hp: 339, torque: 740 }, stage1: { hp: 390, torque: 850, price: 750 } },
              { name: "SVR 5.0 V8 (550hp)", volume: "4999cc", stock: { hp: 550, torque: 680 }, stage1: { hp: 610, torque: 780, price: 950 } }
            ]
          }
        ]
      },
      {
        name: "Defender",
        generations: [
          {
            name: "L663 (2020-Present)",
            engines: [
              { name: "D200 (200hp)", volume: "2996cc", stock: { hp: 200, torque: 500 }, stage1: { hp: 300, torque: 650, price: 750 } },
              { name: "D250 (249hp)", volume: "2996cc", stock: { hp: 249, torque: 570 }, stage1: { hp: 300, torque: 650, price: 750 } },
              { name: "P400 (400hp)", volume: "2996cc", stock: { hp: 400, torque: 550 }, stage1: { hp: 460, torque: 660, price: 850 } }
            ]
          }
        ]
      },
      {
        name: "Range Rover Velar",
        generations: [
          {
            name: "L560 (2017-Present)",
            engines: [
              { name: "D180 (180hp)", volume: "1999cc", stock: { hp: 180, torque: 430 }, stage1: { hp: 220, torque: 490, price: 600 } },
              { name: "D240 (240hp)", volume: "1999cc", stock: { hp: 240, torque: 500 }, stage1: { hp: 285, torque: 580, price: 600 } },
              { name: "P250 (250hp)", volume: "1997cc", stock: { hp: 250, torque: 365 }, stage1: { hp: 300, torque: 440, price: 650 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Skoda",
    models: [
      {
        name: "Octavia",
        generations: [
          {
            name: "Mk4 (2020-Present)",
            engines: [
              { name: "1.5 TSI (150hp)", volume: "1498cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 190, torque: 320, price: 500 } },
              { name: "2.0 TDI (116hp)", volume: "1968cc", stock: { hp: 116, torque: 300 }, stage1: { hp: 160, torque: 380, price: 500 } },
              { name: "2.0 TDI (150hp)", volume: "1968cc", stock: { hp: 150, torque: 340 }, stage1: { hp: 200, torque: 440, price: 500 } },
              { name: "vRS 2.0 TSI (245hp)", volume: "1984cc", stock: { hp: 245, torque: 370 }, stage1: { hp: 300, torque: 450, price: 600 } },
              { name: "vRS 2.0 TDI (200hp)", volume: "1968cc", stock: { hp: 200, torque: 400 }, stage1: { hp: 240, torque: 480, price: 550 } }
            ]
          }
        ]
      },
      {
        name: "Superb",
        generations: [
          {
            name: "Mk3 (2015-2023)",
            engines: [
              { name: "2.0 TDI (190hp)", volume: "1968cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 500 } },
              { name: "2.0 TSI (280hp)", volume: "1984cc", stock: { hp: 280, torque: 350 }, stage1: { hp: 350, torque: 480, price: 650 } }
            ]
          }
        ]
      }
    ]
  },
{
  brand: "Renault",
  models: [
    {
      name: "Megane",
      generations: [
        {
          name: "R.S. IV (2017+)",
          engines: [
            {
              name: "1.8 TCe Trophy",
              volume: "1798 ccm",
              stock: { hp: 300, torque: 400, zeroToHundred: 5.7 },
              stage1: { hp: 335, torque: 460, zeroToHundred: 5.3, price: 650 }
            },
            {
              name: "1.8 TCe 280",
              volume: "1798 ccm",
              stock: { hp: 280, torque: 390, zeroToHundred: 5.8 },
              stage1: { hp: 320, torque: 450, zeroToHundred: 5.4, price: 600 }
            }
          ]
        }
      ]
    },
    {
      name: "Clio",
      generations: [
        {
          name: "R.S. IV (2012-2019)",
          engines: [
            {
              name: "1.6 Turbo Trophy",
              volume: "1618 ccm",
              stock: { hp: 220, torque: 280, zeroToHundred: 6.6 },
              stage1: { hp: 250, torque: 340, zeroToHundred: 6.1, price: 500 }
            }
          ]
        }
      ]
    }
  ]
},
  {
    brand: "Kia",
    models: [
      {
        name: "Stinger",
        generations: [
          {
            name: "CK (2017-2023)",
            engines: [
              { name: "2.0 T-GDI (255hp)", volume: "1998cc", stock: { hp: 255, torque: 353 }, stage1: { hp: 305, torque: 440, price: 600 } },
              { name: "2.2 CRDi (200hp)", volume: "2199cc", stock: { hp: 200, torque: 440 }, stage1: { hp: 240, torque: 510, price: 550 } },
              { name: "3.3 T-GDI V6 (370hp)", volume: "3342cc", stock: { hp: 370, torque: 510 }, stage1: { hp: 430, torque: 620, price: 850 } }
            ]
          }
        ]
      },
      {
        name: "Sportage",
        generations: [
          {
            name: "NQ5 (2021-Present)",
            engines: [
              { name: "1.6 T-GDI (150hp)", volume: "1598cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 190, torque: 320, price: 550 } },
              { name: "1.6 CRDi (136hp)", volume: "1598cc", stock: { hp: 136, torque: 320 }, stage1: { hp: 165, torque: 390, price: 550 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Hyundai",
    models: [
      {
        name: "i30",
        generations: [
          {
            name: "PDE (2017-Present)",
            engines: [
              { name: "1.4 T-GDI (140hp)", volume: "1353cc", stock: { hp: 140, torque: 242 }, stage1: { hp: 175, torque: 300, price: 500 } },
              { name: "i30N 2.0T (250hp)", volume: "1998cc", stock: { hp: 250, torque: 353 }, stage1: { hp: 300, torque: 450, price: 650 } },
              { name: "i30N Performance (275hp)", volume: "1998cc", stock: { hp: 275, torque: 353 }, stage1: { hp: 315, torque: 460, price: 650 } }
            ]
          }
        ]
      },
      {
        name: "Tucson",
        generations: [
          {
            name: "NX4 (2020-Present)",
            engines: [
              { name: "1.6 T-GDI (150hp)", volume: "1598cc", stock: { hp: 150, torque: 250 }, stage1: { hp: 195, torque: 310, price: 550 } },
              { name: "1.6 CRDi (136hp)", volume: "1598cc", stock: { hp: 136, torque: 320 }, stage1: { hp: 170, torque: 390, price: 550 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Volvo",
    models: [
      {
        name: "XC90 / XC60",
        generations: [
          {
            name: "SPA Platform (2015-Present)",
            engines: [
              { name: "D3 (150hp)", volume: "1969cc", stock: { hp: 150, torque: 320 }, stage1: { hp: 190, torque: 420, price: 550 } },
              { name: "D4 (190hp)", volume: "1969cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 550 } },
              { name: "D5 (235hp)", volume: "1969cc", stock: { hp: 235, torque: 480 }, stage1: { hp: 275, torque: 560, price: 600 } },
              { name: "T4 (190hp)", volume: "1969cc", stock: { hp: 190, torque: 300 }, stage1: { hp: 250, torque: 390, price: 600 } },
              { name: "T5 (250hp)", volume: "1969cc", stock: { hp: 250, torque: 350 }, stage1: { hp: 300, torque: 440, price: 600 } },
              { name: "T6 (310hp)", volume: "1969cc", stock: { hp: 310, torque: 400 }, stage1: { hp: 360, torque: 490, price: 700 } },
              { name: "T8 Recharge (407hp)", volume: "1969cc", stock: { hp: 407, torque: 640 }, stage1: { hp: 460, torque: 750, price: 850 } }
            ]
          }
        ]
      },
      {
        name: "S90 / V90",
        generations: [
          {
            name: "SPA Platform (2016-Present)",
            engines: [
              { name: "D4 (190hp)", volume: "1969cc", stock: { hp: 190, torque: 400 }, stage1: { hp: 230, torque: 480, price: 550 } },
              { name: "D5 (235hp)", volume: "1969cc", stock: { hp: 235, torque: 480 }, stage1: { hp: 275, torque: 560, price: 600 } },
              { name: "T5 (254hp)", volume: "1969cc", stock: { hp: 254, torque: 350 }, stage1: { hp: 305, torque: 450, price: 600 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Jaguar",
    models: [
      {
        name: "F-Pace",
        generations: [
          {
            name: "X761 (2016-Present)",
            engines: [
              { name: "2.0d (180hp)", volume: "1999cc", stock: { hp: 180, torque: 430 }, stage1: { hp: 220, torque: 490, price: 600 } },
              { name: "3.0d (300hp)", volume: "2993cc", stock: { hp: 300, torque: 700 }, stage1: { hp: 350, torque: 780, price: 700 } },
              { name: "SVR 5.0 (550hp)", volume: "5000cc", stock: { hp: 550, torque: 680 }, stage1: { hp: 610, torque: 780, price: 950 } }
            ]
          }
        ]
      },
      {
        name: "F-Type",
        generations: [
          {
            name: "X152 (2013-Present)",
            engines: [
              { name: "2.0 Turbo (300hp)", volume: "1997cc", stock: { hp: 300, torque: 400 }, stage1: { hp: 340, torque: 480, price: 700 } },
              { name: "3.0 V6 S (380hp)", volume: "2995cc", stock: { hp: 380, torque: 460 }, stage1: { hp: 420, torque: 540, price: 800 } },
              { name: "5.0 V8 R (550hp)", volume: "5000cc", stock: { hp: 550, torque: 680 }, stage1: { hp: 620, torque: 800, price: 950 } }
            ]
          }
        ]
      }
    ]
  },
    {
        brand: "MINI",
        models: [
            {
                name: "Hatch / Cooper",
                generations: [
                    {
                        name: "F56 (2014-Present)",
                        engines: [
                             {
                                name: "Cooper S",
                                volume: "1998cc",
                                stock: { hp: 192, torque: 280, zeroToHundred: 6.7 },
                                stage1: { hp: 260, torque: 380, zeroToHundred: 6.0, price: 500 }
                            },
                            {
                                name: "JCW",
                                volume: "1998cc",
                                stock: { hp: 231, torque: 320, zeroToHundred: 6.1 },
                                stage1: { hp: 280, torque: 420, zeroToHundred: 5.5, price: 550 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
  {
    brand: "Honda",
    models: [
      {
        name: "Civic",
        generations: [
          {
            name: "Type R FK8 (2017-2021)",
            engines: [
              { name: "2.0 VTEC Turbo (320hp)", volume: "1996cc", stock: { hp: 320, torque: 400 }, stage1: { hp: 375, torque: 500, price: 750 } }
            ]
          }
        ]
      },
      {
        name: "Accord",
        generations: [
          {
            name: "10th Gen (2017-2022)",
            engines: [
               { name: "1.5T (192hp)", volume: "1498cc", stock: { hp: 192, torque: 260 }, stage1: { hp: 230, torque: 330, price: 600 } },
               { name: "2.0T (252hp)", volume: "1996cc", stock: { hp: 252, torque: 370 }, stage1: { hp: 310, torque: 460, price: 700 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Mazda",
    models: [
      {
        name: "Mazda 6 / CX-5",
        generations: [
          {
            name: "SkyActiv Era (2012-Present)",
            engines: [
              { name: "2.2 SkyActiv-D (150hp)", volume: "2191cc", stock: { hp: 150, torque: 380 }, stage1: { hp: 210, torque: 480, price: 550 } },
              { name: "2.2 SkyActiv-D (175hp)", volume: "2191cc", stock: { hp: 175, torque: 420 }, stage1: { hp: 210, torque: 480, price: 550 } },
              { name: "2.5 SkyActiv-G Turbo (250hp)", volume: "2488cc", stock: { hp: 250, torque: 420 }, stage1: { hp: 290, torque: 490, price: 650 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Nissan",
    models: [
      {
        name: "GT-R",
        generations: [
          {
            name: "R35 (2007-Present)",
            engines: [
              { name: "3.8 V6 (480hp)", volume: "3799cc", stock: { hp: 480, torque: 588 }, stage1: { hp: 580, torque: 750, price: 1200 } },
              { name: "3.8 V6 (550hp)", volume: "3799cc", stock: { hp: 550, torque: 632 }, stage1: { hp: 620, torque: 800, price: 1200 } },
              { name: "3.8 V6 (570hp)", volume: "3799cc", stock: { hp: 570, torque: 637 }, stage1: { hp: 640, torque: 820, price: 1200 } }
            ]
          }
        ]
      },
      {
        name: "Qashqai",
        generations: [
          {
            name: "J11 (2013-2021)",
            engines: [
              { name: "1.3 DIG-T (140hp)", volume: "1332cc", stock: { hp: 140, torque: 240 }, stage1: { hp: 175, torque: 300, price: 500 } },
              { name: "1.3 DIG-T (160hp)", volume: "1332cc", stock: { hp: 160, torque: 260 }, stage1: { hp: 185, torque: 310, price: 500 } },
              { name: "1.6 dCi (130hp)", volume: "1598cc", stock: { hp: 130, torque: 320 }, stage1: { hp: 165, torque: 390, price: 500 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Lexus",
    models: [
      {
        name: "IS",
        generations: [
          {
            name: "XE30 (2013-Present)",
            engines: [
              { name: "IS200t / IS300 (245hp)", volume: "1998cc", stock: { hp: 245, torque: 350 }, stage1: { hp: 290, torque: 440, price: 700 } },
              { name: "IS300h Hybrid (181hp engine)", volume: "2494cc", stock: { hp: 181, torque: 221 }, stage1: { hp: 210, torque: 260, price: 650 } }
            ]
          }
        ]
      },
      {
        name: "RX",
        generations: [
          {
            name: "AL20 (2015-2022)",
            engines: [
              { name: "RX200t / RX300 (238hp)", volume: "1998cc", stock: { hp: 238, torque: 350 }, stage1: { hp: 285, torque: 440, price: 750 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Subaru",
    models: [
      {
        name: "WRX STI",
        generations: [
          {
            name: "VA (2014-2021)",
            engines: [
              { name: "2.5 Turbo (300hp)", volume: "2457cc", stock: { hp: 300, torque: 407 }, stage1: { hp: 340, torque: 500, price: 800 } }
            ]
          }
        ]
      },
      {
        name: "Forester",
        generations: [
          {
            name: "SJ (2012-2018)",
            engines: [
              { name: "2.0 XT (241hp)", volume: "1998cc", stock: { hp: 241, torque: 350 }, stage1: { hp: 285, torque: 430, price: 700 } },
              { name: "2.0 D (147hp)", volume: "1998cc", stock: { hp: 147, torque: 350 }, stage1: { hp: 185, torque: 420, price: 600 } }
            ]
          }
        ]
      }
    ]
  },
    {
    brand: "Jeep",
    models: [
      {
        name: "Wrangler (JL)",
        generations: [
          {
            name: "2018-Present",
            engines: [
              { name: "2.0 Turbo (272hp)", volume: "1995cc", stock: { hp: 272, torque: 400, zeroToHundred: 7.3 }, stage1: { hp: 310, torque: 480, zeroToHundred: 6.5, price: 600 } },
              { name: "3.6 V6 (284hp)", volume: "3604cc", stock: { hp: 284, torque: 347, zeroToHundred: 8.1 }, stage1: { hp: 305, torque: 380, zeroToHundred: 7.7, price: 600 } },
              { name: "3.0 EcoDiesel (264hp)", volume: "2987cc", stock: { hp: 264, torque: 600, zeroToHundred: 8.0 }, stage1: { hp: 315, torque: 680, zeroToHundred: 7.2, price: 650 } }
            ]
          }
        ]
      },
      {
        name: "Grand Cherokee",
        generations: [
          {
            name: "WK2 (2011-2022)",
            engines: [
              { name: "3.0 CRD (250hp)", volume: "2987cc", stock: { hp: 250, torque: 570, zeroToHundred: 8.2 }, stage1: { hp: 300, torque: 650, zeroToHundred: 7.4, price: 600 } },
              { name: "5.7 HEMI (352hp)", volume: "5654cc", stock: { hp: 352, torque: 520, zeroToHundred: 7.3 }, stage1: { hp: 385, torque: 570, zeroToHundred: 6.8, price: 700 } },
              { name: "6.4 SRT8 (468hp)", volume: "6417cc", stock: { hp: 468, torque: 624, zeroToHundred: 5.0 }, stage1: { hp: 505, torque: 680, zeroToHundred: 4.6, price: 800 } },
              { name: "6.2 Trackhawk (707hp)", volume: "6166cc", stock: { hp: 707, torque: 875, zeroToHundred: 3.7 }, stage1: { hp: 850, torque: 1000, zeroToHundred: 3.2, price: 800 } }
            ]
          },
          {
            name: "WL (2021-Present)",
            engines: [
              { name: "2.0 4xe (380hp)", volume: "1995cc", stock: { hp: 380, torque: 637, zeroToHundred: 6.0 }, stage1: { hp: 430, torque: 720, zeroToHundred: 5.4, price: 800 } },
              { name: "3.6 V6 (293hp)", volume: "3604cc", stock: { hp: 293, torque: 352, zeroToHundred: 7.5 }, stage1: { hp: 315, torque: 390, zeroToHundred: 7.1, price: 600 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Dodge",
    models: [
      {
        name: "Challenger",
        generations: [
          {
            name: "2015-2023",
            engines: [
              { name: "5.7 HEMI (375hp)", volume: "5654cc", stock: { hp: 375, torque: 556, zeroToHundred: 5.2 }, stage1: { hp: 410, torque: 610, zeroToHundred: 4.8, price: 700 } },
              { name: "6.4 SRT (485hp)", volume: "6417cc", stock: { hp: 485, torque: 644, zeroToHundred: 4.4 }, stage1: { hp: 520, torque: 700, zeroToHundred: 4.1, price: 800 } },
              { name: "6.2 Hellcat (717hp)", volume: "6166cc", stock: { hp: 717, torque: 881, zeroToHundred: 3.6 }, stage1: { hp: 850, torque: 1020, zeroToHundred: 3.2, price: 800 } },
              { name: "6.2 Demon (840hp)", volume: "6166cc", stock: { hp: 840, torque: 1044, zeroToHundred: 2.3 }, stage1: { hp: 950, torque: 1150, zeroToHundred: 2.1, price: 800 } }
            ]
          }
        ]
      },
      {
        name: "RAM 1500",
        generations: [
          {
            name: "DT (2019-Present)",
            engines: [
              { name: "5.7 HEMI (395hp)", volume: "5654cc", stock: { hp: 395, torque: 556, zeroToHundred: 6.6 }, stage1: { hp: 425, torque: 610, zeroToHundred: 6.2, price: 700 } },
              { name: "6.2 TRX (702hp)", volume: "6166cc", stock: { hp: 702, torque: 881, zeroToHundred: 4.5 }, stage1: { hp: 840, torque: 1020, zeroToHundred: 3.9, price: 800 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Alfa Romeo",
    models: [
      {
        name: "Giulietta",
        generations: [
          {
            name: "940 (2010-2020)",
            engines: [
              { name: "1.4 TB (120hp)", volume: "1368cc", stock: { hp: 120, torque: 206, zeroToHundred: 9.5 }, stage1: { hp: 155, torque: 260, zeroToHundred: 8.3, price: 400 } },
              { name: "1.4 TB MultiAir (170hp)", volume: "1368cc", stock: { hp: 170, torque: 250, zeroToHundred: 7.5 }, stage1: { hp: 205, torque: 310, zeroToHundred: 6.7, price: 450 } },
              { name: "1.6 JTDM (105hp)", volume: "1598cc", stock: { hp: 105, torque: 320, zeroToHundred: 11.2 }, stage1: { hp: 140, torque: 380, zeroToHundred: 9.8, price: 400 } },
              { name: "1.6 JTDM (120hp)", volume: "1598cc", stock: { hp: 120, torque: 320, zeroToHundred: 10.3 }, stage1: { hp: 155, torque: 400, zeroToHundred: 9.0, price: 400 } },
              { name: "2.0 JTDM (140hp)", volume: "1956cc", stock: { hp: 140, torque: 350, zeroToHundred: 9.5 }, stage1: { hp: 180, torque: 420, zeroToHundred: 8.3, price: 450 } },
              { name: "2.0 JTDM (175hp)", volume: "1956cc", stock: { hp: 175, torque: 380, zeroToHundred: 8.0 }, stage1: { hp: 210, torque: 450, zeroToHundred: 7.1, price: 450 } },
              { name: "Quadrifoglio Verde QV (240hp)", volume: "1742cc", stock: { hp: 240, torque: 340, zeroToHundred: 6.0 }, stage1: { hp: 280, torque: 410, zeroToHundred: 5.4, price: 550 } }
            ]
          }
        ]
      },
      {
        name: "4C",
        generations: [
          {
            name: "960 (2013-2020)",
            engines: [
              { name: "1.75 TBi (240hp)", volume: "1742cc", stock: { hp: 240, torque: 350, zeroToHundred: 4.5 }, stage1: { hp: 280, torque: 420, zeroToHundred: 4.0, price: 600 } }
            ]
          }
        ]
      },
      {
        name: "Brera",
        generations: [
          {
            name: "939 (2005-2010)",
            engines: [
              { name: "2.2 JTS (185hp)", volume: "2198cc", stock: { hp: 185, torque: 230, zeroToHundred: 8.3 }, stage1: { hp: 205, torque: 270, zeroToHundred: 7.7, price: 450 } },
              { name: "3.2 V6 (260hp)", volume: "3195cc", stock: { hp: 260, torque: 322, zeroToHundred: 6.8 }, stage1: { hp: 280, torque: 350, zeroToHundred: 6.3, price: 500 } },
              { name: "2.4 JTDM (210hp)", volume: "2387cc", stock: { hp: 210, torque: 400, zeroToHundred: 7.8 }, stage1: { hp: 245, torque: 470, zeroToHundred: 7.0, price: 500 } }
            ]
          }
        ]
      },
      {
        name: "159",
        generations: [
          {
            name: "939 (2005-2011)",
            engines: [
              { name: "1.9 JTS (160hp)", volume: "1859cc", stock: { hp: 160, torque: 190, zeroToHundred: 9.3 }, stage1: { hp: 180, torque: 220, zeroToHundred: 8.5, price: 400 } },
              { name: "2.2 JTS (185hp)", volume: "2198cc", stock: { hp: 185, torque: 230, zeroToHundred: 8.6 }, stage1: { hp: 205, torque: 270, zeroToHundred: 8.0, price: 400 } },
              { name: "3.2 V6 (260hp)", volume: "3195cc", stock: { hp: 260, torque: 322, zeroToHundred: 7.0 }, stage1: { hp: 280, torque: 350, zeroToHundred: 6.5, price: 500 } },
              { name: "1.9 JTDM (120hp)", volume: "1910cc", stock: { hp: 120, torque: 280, zeroToHundred: 11.1 }, stage1: { hp: 155, torque: 340, zeroToHundred: 9.8, price: 400 } },
              { name: "1.9 JTDM (150hp)", volume: "1910cc", stock: { hp: 150, torque: 320, zeroToHundred: 9.7 }, stage1: { hp: 185, torque: 390, zeroToHundred: 8.6, price: 400 } },
              { name: "2.0 JTDM (136hp)", volume: "1956cc", stock: { hp: 136, torque: 320, zeroToHundred: 10.2 }, stage1: { hp: 175, torque: 390, zeroToHundred: 9.0, price: 450 } },
              { name: "2.0 JTDM (170hp)", volume: "1956cc", stock: { hp: 170, torque: 360, zeroToHundred: 8.8 }, stage1: { hp: 210, torque: 430, zeroToHundred: 7.8, price: 450 } },
              { name: "2.4 JTDM (200hp)", volume: "2387cc", stock: { hp: 200, torque: 400, zeroToHundred: 8.2 }, stage1: { hp: 235, torque: 470, zeroToHundred: 7.3, price: 500 } }
            ]
          }
        ]
      },
      {
        name: "Mito",
        generations: [
          {
            name: "955 (2008-2018)",
            engines: [
              { name: "0.9 TwinAir (85hp)", volume: "875cc", stock: { hp: 85, torque: 145, zeroToHundred: 11.4 }, stage1: { hp: 115, torque: 190, zeroToHundred: 9.8, price: 350 } },
              { name: "1.4 TB (120hp)", volume: "1368cc", stock: { hp: 120, torque: 206, zeroToHundred: 9.5 }, stage1: { hp: 155, torque: 260, zeroToHundred: 8.3, price: 400 } },
              { name: "1.4 TB MultiAir (135hp)", volume: "1368cc", stock: { hp: 135, torque: 190, zeroToHundred: 8.9 }, stage1: { hp: 170, torque: 250, zeroToHundred: 7.9, price: 400 } },
              { name: "1.4 TB MultiAir (170hp)", volume: "1368cc", stock: { hp: 170, torque: 250, zeroToHundred: 7.5 }, stage1: { hp: 205, torque: 310, zeroToHundred: 6.7, price: 450 } },
              { name: "1.3 JTDM (85hp)", volume: "1248cc", stock: { hp: 85, torque: 200, zeroToHundred: 12.5 }, stage1: { hp: 115, torque: 260, zeroToHundred: 11.0, price: 350 } },
              { name: "1.3 JTDM (95hp)", volume: "1248cc", stock: { hp: 95, torque: 200, zeroToHundred: 11.5 }, stage1: { hp: 125, torque: 270, zeroToHundred: 10.2, price: 350 } },
              { name: "1.6 JTDM (120hp)", volume: "1598cc", stock: { hp: 120, torque: 320, zeroToHundred: 9.8 }, stage1: { hp: 155, torque: 400, zeroToHundred: 8.6, price: 400 } },
              { name: "Quadrifoglio Verde QV (170hp)", volume: "1368cc", stock: { hp: 170, torque: 250, zeroToHundred: 7.3 }, stage1: { hp: 205, torque: 310, zeroToHundred: 6.5, price: 500 } }
            ]
          }
        ]
      },
      {
        name: "147",
        generations: [
          {
            name: "937 (2000-2010)",
            engines: [
              { name: "1.6 TS (105hp)", volume: "1598cc", stock: { hp: 105, torque: 145, zeroToHundred: 11.3 }, stage1: { hp: 125, torque: 170, zeroToHundred: 10.2, price: 350 } },
              { name: "1.6 TS (120hp)", volume: "1598cc", stock: { hp: 120, torque: 147, zeroToHundred: 10.5 }, stage1: { hp: 140, torque: 175, zeroToHundred: 9.5, price: 350 } },
              { name: "2.0 TS (150hp)", volume: "1970cc", stock: { hp: 150, torque: 181, zeroToHundred: 9.3 }, stage1: { hp: 170, torque: 215, zeroToHundred: 8.5, price: 400 } },
              { name: "3.2 V6 GTA (250hp)", volume: "3179cc", stock: { hp: 250, torque: 300, zeroToHundred: 6.3 }, stage1: { hp: 270, torque: 330, zeroToHundred: 5.9, price: 550 } },
              { name: "1.9 JTD (115hp)", volume: "1910cc", stock: { hp: 115, torque: 280, zeroToHundred: 10.5 }, stage1: { hp: 145, torque: 340, zeroToHundred: 9.3, price: 400 } },
              { name: "1.9 JTD (140hp)", volume: "1910cc", stock: { hp: 140, torque: 305, zeroToHundred: 9.4 }, stage1: { hp: 175, torque: 375, zeroToHundred: 8.3, price: 400 } }
            ]
          }
        ]
      },
      {
        name: "Giulia",
        generations: [
          {
            name: "952 (2016-Present)",
            engines: [
              { name: "2.0 Turbo (200hp)", volume: "1995cc", stock: { hp: 200, torque: 330, zeroToHundred: 6.6 }, stage1: { hp: 280, torque: 460, zeroToHundred: 5.5, price: 600 } },
              { name: "2.0 Turbo (280hp)", volume: "1995cc", stock: { hp: 280, torque: 400, zeroToHundred: 5.2 }, stage1: { hp: 310, torque: 480, zeroToHundred: 4.8, price: 600 } },
              { name: "2.2 Turbo Diesel (160hp)", volume: "2143cc", stock: { hp: 160, torque: 380, zeroToHundred: 7.1 }, stage1: { hp: 210, torque: 480, zeroToHundred: 6.2, price: 550 } },
              { name: "2.2 Turbo Diesel (180hp)", volume: "2143cc", stock: { hp: 180, torque: 450, zeroToHundred: 6.6 }, stage1: { hp: 230, torque: 540, zeroToHundred: 5.8, price: 550 } },
              { name: "2.2 Turbo Diesel (210hp)", volume: "2143cc", stock: { hp: 210, torque: 470, zeroToHundred: 6.2 }, stage1: { hp: 250, torque: 550, zeroToHundred: 5.5, price: 550 } },
              { name: "2.9 V6 Quadrifoglio (510hp)", volume: "2891cc", stock: { hp: 510, torque: 600, zeroToHundred: 3.9 }, stage1: { hp: 580, torque: 720, zeroToHundred: 3.5, price: 700 } }
            ]
          }
        ]
      },
      {
        name: "Stelvio",
        generations: [
          {
            name: "949 (2017-Present)",
            engines: [
              { name: "2.0 Turbo (280hp)", volume: "1995cc", stock: { hp: 280, torque: 400, zeroToHundred: 5.7 }, stage1: { hp: 310, torque: 480, zeroToHundred: 5.2, price: 600 } },
              { name: "2.2 Turbo Diesel (190hp)", volume: "2143cc", stock: { hp: 190, torque: 470, zeroToHundred: 6.6 }, stage1: { hp: 240, torque: 560, zeroToHundred: 5.9, price: 550 } },
              { name: "2.2 Turbo Diesel (210hp)", volume: "2143cc", stock: { hp: 210, torque: 470, zeroToHundred: 6.2 }, stage1: { hp: 250, torque: 550, zeroToHundred: 5.6, price: 550 } },
              { name: "2.9 V6 Quadrifoglio (510hp)", volume: "2891cc", stock: { hp: 510, torque: 600, zeroToHundred: 3.8 }, stage1: { hp: 580, torque: 720, zeroToHundred: 3.4, price: 700 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Bentley",
    models: [
      {
        name: "Continental GT",
        generations: [
          {
            name: "3rd Gen (2018-Present)",
            engines: [
              { name: "4.0 V8 (550hp)", volume: "3996cc", stock: { hp: 550, torque: 770, zeroToHundred: 4.0 }, stage1: { hp: 680, torque: 900, zeroToHundred: 3.4, price: 2000 } },
              { name: "6.0 W12 (635hp)", volume: "5950cc", stock: { hp: 635, torque: 900, zeroToHundred: 3.7 }, stage1: { hp: 740, torque: 1100, zeroToHundred: 3.2, price: 2500 } }
            ]
          }
        ]
      },
      {
        name: "Bentayga",
        generations: [
          {
            name: "2016-Present",
            engines: [
              { name: "4.0 V8 (550hp)", volume: "3996cc", stock: { hp: 550, torque: 770, zeroToHundred: 4.5 }, stage1: { hp: 680, torque: 900, zeroToHundred: 3.8, price: 2000 } },
              { name: "6.0 W12 Speed (635hp)", volume: "5950cc", stock: { hp: 635, torque: 900, zeroToHundred: 3.9 }, stage1: { hp: 740, torque: 1100, zeroToHundred: 3.5, price: 2500 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Ferrari",
    models: [
      {
        name: "F8 Tributo",
        generations: [
          {
            name: "2019-2023",
            engines: [
              { name: "3.9 V8 (720hp)", volume: "3902cc", stock: { hp: 720, torque: 770, zeroToHundred: 2.9 }, stage1: { hp: 800, torque: 900, zeroToHundred: 2.7, price: 2500 } }
            ]
          }
        ]
      },
      {
        name: "812 Superfast",
        generations: [
          {
            name: "2017-2024",
            engines: [
              { name: "6.5 V12 (800hp)", volume: "6496cc", stock: { hp: 800, torque: 718, zeroToHundred: 2.9 }, stage1: { hp: 840, torque: 760, zeroToHundred: 2.8, price: 2500 } }
            ]
          }
        ]
      },
      {
        name: "Roma / Portofino",
        generations: [
          {
            name: "2018-Present",
            engines: [
              { name: "3.9 V8 (620hp)", volume: "3855cc", stock: { hp: 620, torque: 760, zeroToHundred: 3.4 }, stage1: { hp: 710, torque: 880, zeroToHundred: 3.1, price: 2000 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Lamborghini",
    models: [
      {
        name: "Urus",
        generations: [
          {
            name: "2018-Present",
            engines: [
              { name: "4.0 V8 BiTurbo (650hp)", volume: "3996cc", stock: { hp: 650, torque: 850, zeroToHundred: 3.6 }, stage1: { hp: 760, torque: 980, zeroToHundred: 3.2, price: 2500 } }
            ]
          }
        ]
      },
      {
        name: "Huracan",
        generations: [
          {
            name: "Evo (2019-2024)",
            engines: [
              { name: "5.2 V10 (640hp)", volume: "5204cc", stock: { hp: 640, torque: 600, zeroToHundred: 2.9 }, stage1: { hp: 670, torque: 630, zeroToHundred: 2.8, price: 2000 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Maserati",
    models: [
      {
        name: "Levante",
        generations: [
          {
            name: "2016-Present",
            engines: [
              { name: "3.0 V6 (350hp)", volume: "2979cc", stock: { hp: 350, torque: 500, zeroToHundred: 6.0 }, stage1: { hp: 420, torque: 600, zeroToHundred: 5.3, price: 1500 } },
              { name: "3.0 V6 S (430hp)", volume: "2979cc", stock: { hp: 430, torque: 580, zeroToHundred: 5.2 }, stage1: { hp: 490, torque: 680, zeroToHundred: 4.7, price: 1500 } },
              { name: "3.8 V8 Trofeo (580hp)", volume: "3799cc", stock: { hp: 580, torque: 730, zeroToHundred: 4.1 }, stage1: { hp: 660, torque: 850, zeroToHundred: 3.7, price: 2000 } }
            ]
          }
        ]
      },
      {
        name: "MC20",
        generations: [
          {
            name: "2020-Present",
            engines: [
              { name: "3.0 V6 Nettuno (630hp)", volume: "3000cc", stock: { hp: 630, torque: 730, zeroToHundred: 2.9 }, stage1: { hp: 720, torque: 820, zeroToHundred: 2.7, price: 2500 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Cadillac",
    models: [
      {
        name: "Escalade",
        generations: [
          {
            name: "GMT1XX (2021-Present)",
            engines: [
              { name: "6.2 V8 (426hp)", volume: "6162cc", stock: { hp: 426, torque: 623, zeroToHundred: 6.1 }, stage1: { hp: 460, torque: 680, zeroToHundred: 5.7, price: 1000 } },
              { name: "6.2 V8 Supercharged (682hp)", volume: "6162cc", stock: { hp: 682, torque: 885, zeroToHundred: 4.4 }, stage1: { hp: 780, torque: 1000, zeroToHundred: 3.9, price: 1200 } }
            ]
          }
        ]
      },
      {
        name: "CT5",
        generations: [
          {
            name: "V-Series / Blackwing",
            engines: [
              { name: "3.0 V6 Twin Turbo (360hp)", volume: "2990cc", stock: { hp: 360, torque: 550, zeroToHundred: 4.9 }, stage1: { hp: 430, torque: 650, zeroToHundred: 4.4, price: 1000 } },
              { name: "6.2 V8 Blackwing (668hp)", volume: "2990cc", stock: { hp: 668, torque: 893, zeroToHundred: 3.4 }, stage1: { hp: 750, torque: 1050, zeroToHundred: 3.1, price: 1200 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Infiniti",
    models: [
      {
        name: "Q50 / Q60",
        generations: [
          {
            name: "2016-Present",
            engines: [
              { name: "3.0t (300hp)", volume: "2997cc", stock: { hp: 300, torque: 400, zeroToHundred: 5.2 }, stage1: { hp: 420, torque: 580, zeroToHundred: 4.4, price: 700 } },
              { name: "3.0t Red Sport (400hp)", volume: "2997cc", stock: { hp: 400, torque: 475, zeroToHundred: 4.5 }, stage1: { hp: 460, torque: 600, zeroToHundred: 4.0, price: 700 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Chevrolet",
    models: [
      {
        name: "Corvette",
        generations: [
          {
            name: "C8 (2020-Present)",
            engines: [
              { name: "6.2 LT2 (495hp)", volume: "6162cc", stock: { hp: 495, torque: 637, zeroToHundred: 2.9 }, stage1: { hp: 530, torque: 680, zeroToHundred: 2.8, price: 800 } }
            ]
          },
          {
            name: "C7 (2014-2019)",
            engines: [
              { name: "6.2 LT1 (460hp)", volume: "6162cc", stock: { hp: 460, torque: 630, zeroToHundred: 3.8 }, stage1: { hp: 495, torque: 670, zeroToHundred: 3.6, price: 700 } },
              { name: "6.2 LT4 Z06 (650hp)", volume: "6162cc", stock: { hp: 650, torque: 881, zeroToHundred: 3.0 }, stage1: { hp: 740, torque: 980, zeroToHundred: 2.8, price: 800 } }
            ]
          }
        ]
      },
      {
        name: "Silverado / Tahoe",
        generations: [
          {
            name: "2019-Present",
            engines: [
              { name: "5.3 V8 (355hp)", volume: "5328cc", stock: { hp: 355, torque: 519, zeroToHundred: 7.2 }, stage1: { hp: 385, torque: 570, zeroToHundred: 6.8, price: 600 } },
              { name: "6.2 V8 (420hp)", volume: "6162cc", stock: { hp: 420, torque: 624, zeroToHundred: 5.8 }, stage1: { hp: 460, torque: 680, zeroToHundred: 5.4, price: 700 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Tesla",
    models: [
      {
        name: "Model 3 / Y",
        generations: [
          {
            name: "Performance",
            engines: [
              { name: "Dual Motor (513hp)", volume: "Electric", stock: { hp: 513, torque: 660, zeroToHundred: 3.3 }, stage1: { hp: 560, torque: 750, zeroToHundred: 3.1, price: 1200 } }
            ]
          }
        ]
      },
      {
        name: "Model S / X",
        generations: [
          {
            name: "Plaid",
            engines: [
              { name: "Tri-Motor (1020hp)", volume: "Electric", stock: { hp: 1020, torque: 1420, zeroToHundred: 2.1 }, stage1: { hp: 1100, torque: 1550, zeroToHundred: 2.0, price: 1200 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Zeekr",
    models: [
      {
        name: "001",
        generations: [
          {
            name: "Performance",
            engines: [
              { name: "Dual Motor (544hp)", volume: "Electric", stock: { hp: 544, torque: 686, zeroToHundred: 3.8 }, stage1: { hp: 600, torque: 780, zeroToHundred: 3.4, price: 1200 } },
              { name: "FR (1265hp)", volume: "Electric", stock: { hp: 1265, torque: 1280, zeroToHundred: 2.07 }, stage1: { hp: 1350, torque: 1450, zeroToHundred: 1.95, price: 1200 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Li Auto",
    models: [
      {
        name: "L7 / L8 / L9",
        generations: [
          {
            name: "Standard Performance",
            engines: [
              { name: "1.5T EREV (449hp)", volume: "1499cc", stock: { hp: 449, torque: 620, zeroToHundred: 5.3 }, stage1: { hp: 500, torque: 720, zeroToHundred: 4.8, price: 1000 } }
            ]
          }
        ]
      }
    ]
  },
  {
    brand: "Xiaomi",
    models: [
      {
        name: "SU7",
        generations: [
          {
            name: "Performance",
            engines: [
              { name: "Max Dual Motor (673hp)", volume: "Electric", stock: { hp: 673, torque: 838, zeroToHundred: 2.78 }, stage1: { hp: 730, torque: 950, zeroToHundred: 2.6, price: 1200 } },
              { name: "Ultra (1548hp)", volume: "Electric", stock: { hp: 1548, torque: 1770, zeroToHundred: 1.98 }, stage1: { hp: 1650, torque: 1900, zeroToHundred: 1.9, price: 1200 } }
            ]
          }
        ]
      }
    ]
  },
    {
        brand: "Mitsubishi",
        models: [
            {
                name: "Lancer",
                generations: [
                    {
                        name: "Evolution X",
                        engines: [
                            {
                                name: "2.0 Turbo (295hp)",
                                volume: "1998cc",
                                stock: { hp: 295, torque: 366, zeroToHundred: 5.4 },
                                stage1: { hp: 350, torque: 450, zeroToHundred: 4.8, price: 600 },
                                stage2: { hp: 400, torque: 520, zeroToHundred: 4.4, price: 1200 }
                            }
                        ]
                    },
                    {
                        name: "Evolution IX",
                        engines: [
                            {
                                name: "2.0 Turbo (280hp)",
                                volume: "1997cc",
                                stock: { hp: 280, torque: 355, zeroToHundred: 5.7 },
                                stage1: { hp: 330, torque: 440, zeroToHundred: 5.1, price: 600 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "Outlander",
                generations: [
                    {
                        name: "III (2012-2021)",
                        engines: [
                            {
                                name: "2.2 DI-D (150hp)",
                                volume: "2268cc",
                                stock: { hp: 150, torque: 380, zeroToHundred: 10.2 },
                                stage1: { hp: 190, torque: 460, zeroToHundred: 9.1, price: 450 }
                            },
                            {
                                name: "2.0 PHEV (121hp)",
                                volume: "1998cc",
                                stock: { hp: 121, torque: 190, zeroToHundred: 11.0 },
                                stage1: { hp: 145, torque: 240, zeroToHundred: 10.2, price: 500 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Opel",
        models: [
            {
                name: "Astra",
                generations: [
                    {
                        name: "K (2015-2021)",
                        engines: [
                            {
                                name: "1.4 Turbo (125hp)",
                                volume: "1399cc",
                                stock: { hp: 125, torque: 230, zeroToHundred: 9.2 },
                                stage1: { hp: 165, torque: 300, zeroToHundred: 8.2, price: 400 }
                            },
                            {
                                name: "1.4 Turbo (150hp)",
                                volume: "1399cc",
                                stock: { hp: 150, torque: 230, zeroToHundred: 8.3 },
                                stage1: { hp: 180, torque: 300, zeroToHundred: 7.5, price: 400 }
                            },
                            {
                                name: "1.6 CDTi (136hp)",
                                volume: "1598cc",
                                stock: { hp: 136, torque: 320, zeroToHundred: 9.6 },
                                stage1: { hp: 165, torque: 390, zeroToHundred: 8.7, price: 400 }
                            }
                        ]
                    },
                    {
                        name: "J (2009-2015)",
                        engines: [
                            {
                                name: "1.4 Turbo (140hp)",
                                volume: "1364cc",
                                stock: { hp: 140, torque: 200, zeroToHundred: 9.9 },
                                stage1: { hp: 170, torque: 260, zeroToHundred: 8.9, price: 350 }
                            },
                            {
                                name: "2.0 CDTi (165hp)",
                                volume: "1956cc",
                                stock: { hp: 165, torque: 350, zeroToHundred: 9.0 },
                                stage1: { hp: 200, torque: 430, zeroToHundred: 8.1, price: 400 }
                            },
                            {
                                name: "OPC (2.0 Turbo 280hp)",
                                volume: "1998cc",
                                stock: { hp: 280, torque: 400, zeroToHundred: 6.0 },
                                stage1: { hp: 315, torque: 480, zeroToHundred: 5.4, price: 500 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "Insignia",
                generations: [
                    {
                        name: "B (2017-2022)",
                        engines: [
                            {
                                name: "2.0 Turbo (260hp)",
                                volume: "1998cc",
                                stock: { hp: 260, torque: 400, zeroToHundred: 7.3 },
                                stage1: { hp: 300, torque: 480, zeroToHundred: 6.5, price: 550 }
                            },
                            {
                                name: "2.0 CDTi (170hp)",
                                volume: "1956cc",
                                stock: { hp: 170, torque: 400, zeroToHundred: 8.7 },
                                stage1: { hp: 205, torque: 470, zeroToHundred: 7.9, price: 450 }
                            },
                            {
                                name: "GSi (2.0 Bi-Turbo 210hp)",
                                volume: "1956cc",
                                stock: { hp: 210, torque: 480, zeroToHundred: 7.9 },
                                stage1: { hp: 250, torque: 550, zeroToHundred: 7.1, price: 500 }
                            }
                        ]
                    },
                    {
                        name: "A (2008-2017)",
                        engines: [
                            {
                                name: "2.0 Turbo (220hp)",
                                volume: "1998cc",
                                stock: { hp: 220, torque: 350, zeroToHundred: 7.6 },
                                stage1: { hp: 270, torque: 440, zeroToHundred: 6.8, price: 450 }
                            },
                            {
                                name: "2.0 CDTi (160hp)",
                                volume: "1956cc",
                                stock: { hp: 160, torque: 350, zeroToHundred: 9.5 },
                                stage1: { hp: 195, torque: 430, zeroToHundred: 8.5, price: 400 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Peugeot",
        models: [
            {
                name: "308",
                generations: [
                    {
                        name: "II (2013-2021)",
                        engines: [
                            {
                                name: "1.2 PureTech (130hp)",
                                volume: "1199cc",
                                stock: { hp: 130, torque: 230, zeroToHundred: 9.1 },
                                stage1: { hp: 155, torque: 280, zeroToHundred: 8.4, price: 400 }
                            },
                            {
                                name: "1.6 BlueHDi (120hp)",
                                volume: "1560cc",
                                stock: { hp: 120, torque: 300, zeroToHundred: 9.7 },
                                stage1: { hp: 150, torque: 370, zeroToHundred: 8.8, price: 400 }
                            },
                            {
                                name: "GTi (1.6 THP 270hp)",
                                volume: "1598cc",
                                stock: { hp: 270, torque: 330, zeroToHundred: 6.0 },
                                stage1: { hp: 300, torque: 400, zeroToHundred: 5.5, price: 500 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "3008",
                generations: [
                    {
                        name: "II (2016-Present)",
                        engines: [
                            {
                                name: "1.6 PureTech (180hp)",
                                volume: "1598cc",
                                stock: { hp: 180, torque: 250, zeroToHundred: 8.0 },
                                stage1: { hp: 220, torque: 320, zeroToHundred: 7.2, price: 450 }
                            },
                            {
                                name: "2.0 BlueHDi (180hp)",
                                volume: "1997cc",
                                stock: { hp: 180, torque: 400, zeroToHundred: 8.9 },
                                stage1: { hp: 210, torque: 470, zeroToHundred: 8.1, price: 450 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Citroen",
        models: [
            {
                name: "C4",
                generations: [
                    {
                        name: "II (2010-2018)",
                        engines: [
                            {
                                name: "1.6 BlueHDi (120hp)",
                                volume: "1560cc",
                                stock: { hp: 120, torque: 300, zeroToHundred: 10.6 },
                                stage1: { hp: 150, torque: 370, zeroToHundred: 9.5, price: 400 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "C5 Aircross",
                generations: [
                    {
                        name: "I (2018-Present)",
                        engines: [
                            {
                                name: "1.6 PureTech (180hp)",
                                volume: "1598cc",
                                stock: { hp: 180, torque: 250, zeroToHundred: 8.2 },
                                stage1: { hp: 220, torque: 320, zeroToHundred: 7.4, price: 450 }
                            },
                            {
                                name: "2.0 BlueHDi (180hp)",
                                volume: "1997cc",
                                stock: { hp: 180, torque: 400, zeroToHundred: 8.6 },
                                stage1: { hp: 215, torque: 480, zeroToHundred: 7.8, price: 450 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Seat",
        models: [
            {
                name: "Leon",
                generations: [
                    {
                        name: "5F (2012-2020)",
                        engines: [
                            {
                                name: "1.4 TSI (150hp)",
                                volume: "1395cc",
                                stock: { hp: 150, torque: 250, zeroToHundred: 8.0 },
                                stage1: { hp: 185, torque: 320, zeroToHundred: 7.2, price: 450 }
                            },
                            {
                                name: "2.0 TSI Cupra (290hp)",
                                volume: "1984cc",
                                stock: { hp: 290, torque: 350, zeroToHundred: 5.7 },
                                stage1: { hp: 360, torque: 480, zeroToHundred: 5.0, price: 600 }
                            },
                            {
                                name: "2.0 TDI (184hp)",
                                volume: "1968cc",
                                stock: { hp: 184, torque: 380, zeroToHundred: 7.5 },
                                stage1: { hp: 230, torque: 460, zeroToHundred: 6.6, price: 450 }
                            }
                        ]
                    },
                    {
                        name: "KL (2020-Present)",
                        engines: [
                            {
                                name: "1.5 TSI (150hp)",
                                volume: "1498cc",
                                stock: { hp: 150, torque: 250, zeroToHundred: 8.4 },
                                stage1: { hp: 190, torque: 320, zeroToHundred: 7.6, price: 450 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Cupra",
        models: [
            {
                name: "Formentor",
                generations: [
                    {
                        name: "Gen 1 (2020-Present)",
                        engines: [
                            {
                                name: "1.5 TSI (150hp)",
                                volume: "1498cc",
                                stock: { hp: 150, torque: 250, zeroToHundred: 8.9 },
                                stage1: { hp: 190, torque: 320, zeroToHundred: 8.0, price: 450 }
                            },
                            {
                                name: "2.0 TSI (310hp)",
                                volume: "1984cc",
                                stock: { hp: 310, torque: 400, zeroToHundred: 4.9 },
                                stage1: { hp: 370, torque: 500, zeroToHundred: 4.2, price: 600 },
                                stage2: { hp: 400, torque: 530, zeroToHundred: 3.9, price: 1100 }
                            },
                            {
                                name: "VZ5 (2.5 TFSI 390hp)",
                                volume: "2480cc",
                                stock: { hp: 390, torque: 480, zeroToHundred: 4.2 },
                                stage1: { hp: 450, torque: 580, zeroToHundred: 3.8, price: 800 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Fiat",
        models: [
            {
                name: "500",
                generations: [
                    {
                        name: "Type 312 (2007-Present)",
                        engines: [
                            {
                                name: "0.9 TwinAir (105hp)",
                                volume: "875cc",
                                stock: { hp: 105, torque: 145, zeroToHundred: 10.0 },
                                stage1: { hp: 125, torque: 185, zeroToHundred: 9.1, price: 350 }
                            },
                            {
                                name: "1.3 MultiJet (95hp)",
                                volume: "1248cc",
                                stock: { hp: 95, torque: 200, zeroToHundred: 10.7 },
                                stage1: { hp: 120, torque: 260, zeroToHundred: 9.6, price: 400 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "Ducato",
                generations: [
                    {
                        name: "X290 (2014-Present)",
                        engines: [
                            {
                                name: "2.3 MultiJet (130hp)",
                                volume: "2287cc",
                                stock: { hp: 130, torque: 320, zeroToHundred: 12.5 },
                                stage1: { hp: 170, torque: 400, zeroToHundred: 10.5, price: 450 }
                            },
                            {
                                name: "2.3 MultiJet (150hp)",
                                volume: "2287cc",
                                stock: { hp: 150, torque: 350, zeroToHundred: 11.8 },
                                stage1: { hp: 190, torque: 440, zeroToHundred: 10.0, price: 450 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Suzuki",
        models: [
            {
                name: "Swift",
                generations: [
                    {
                        name: "Sport (2017-Present)",
                        engines: [
                            {
                                name: "1.4 BoosterJet (140hp)",
                                volume: "1373cc",
                                stock: { hp: 140, torque: 230, zeroToHundred: 8.1 },
                                stage1: { hp: 175, torque: 300, zeroToHundred: 7.2, price: 450 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Abarth",
        models: [
            {
                name: "595/695",
                generations: [
                    {
                        name: "2012-Present",
                        engines: [
                            {
                                name: "1.4 T-Jet (145hp)",
                                volume: "1368cc",
                                stock: { hp: 145, torque: 206, zeroToHundred: 7.8 },
                                stage1: { hp: 180, torque: 300, zeroToHundred: 6.9, price: 450 }
                            },
                            {
                                name: "1.4 T-Jet (180hp)",
                                volume: "1368cc",
                                stock: { hp: 180, torque: 250, zeroToHundred: 6.7 },
                                stage1: { hp: 210, torque: 320, zeroToHundred: 6.1, price: 450 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Alpina",
        models: [
            {
                name: "D3 / B3",
                generations: [
                    {
                        name: "G20/G21 based",
                        engines: [
                            {
                                name: "D3 S (3.0 Bi-Turbo 355hp)",
                                volume: "2993cc",
                                stock: { hp: 355, torque: 730, zeroToHundred: 4.6 },
                                stage1: { hp: 410, torque: 820, zeroToHundred: 4.2, price: 900 }
                            },
                            {
                                name: "B3 (3.0 Bi-Turbo 462hp)",
                                volume: "2993cc",
                                stock: { hp: 462, torque: 700, zeroToHundred: 3.8 },
                                stage1: { hp: 530, torque: 800, zeroToHundred: 3.4, price: 1000 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "D5 / B5",
                generations: [
                    {
                        name: "G30/G31 based",
                        engines: [
                            {
                                name: "D5 S (3.0 Tri-Turbo 408hp)",
                                volume: "2993cc",
                                stock: { hp: 408, torque: 800, zeroToHundred: 4.4 },
                                stage1: { hp: 470, torque: 900, zeroToHundred: 4.0, price: 1000 }
                            },
                            {
                                name: "B5 (4.4 V8 Bi-Turbo 608hp)",
                                volume: "4395cc",
                                stock: { hp: 608, torque: 800, zeroToHundred: 3.5 },
                                stage1: { hp: 700, torque: 900, zeroToHundred: 3.1, price: 1500 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Aston Martin",
        models: [
            {
                name: "Vantage",
                generations: [
                    {
                        name: "AM6 (2018-Present)",
                        engines: [
                            {
                                name: "4.0 V8 Bi-Turbo (510hp)",
                                volume: "3982cc",
                                stock: { hp: 510, torque: 685, zeroToHundred: 3.6 },
                                stage1: { hp: 610, torque: 800, zeroToHundred: 3.2, price: 1500 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "DB11",
                generations: [
                    {
                        name: "2016-2023",
                        engines: [
                            {
                                name: "4.0 V8 Bi-Turbo (510hp)",
                                volume: "3982cc",
                                stock: { hp: 510, torque: 675, zeroToHundred: 4.0 },
                                stage1: { hp: 610, torque: 800, zeroToHundred: 3.6, price: 1500 }
                            },
                            {
                                name: "5.2 V12 Bi-Turbo (608hp)",
                                volume: "5204cc",
                                stock: { hp: 608, torque: 700, zeroToHundred: 3.9 },
                                stage1: { hp: 700, torque: 850, zeroToHundred: 3.5, price: 2000 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "McLaren",
        models: [
            {
                name: "570S / 600LT",
                generations: [
                    {
                        name: "Sports Series",
                        engines: [
                            {
                                name: "3.8 V8 Bi-Turbo (570hp)",
                                volume: "3799cc",
                                stock: { hp: 570, torque: 600, zeroToHundred: 3.2 },
                                stage1: { hp: 640, torque: 720, zeroToHundred: 2.9, price: 2000 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "720S",
                generations: [
                    {
                        name: "Super Series",
                        engines: [
                            {
                                name: "4.0 V8 Bi-Turbo (720hp)",
                                volume: "3994cc",
                                stock: { hp: 720, torque: 770, zeroToHundred: 2.9 },
                                stage1: { hp: 800, torque: 880, zeroToHundred: 2.6, price: 2500 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Lotus",
        models: [
            {
                name: "Emira",
                generations: [
                    {
                        name: "2022-Present",
                        engines: [
                            {
                                name: "2.0 Turbo (AMG 365hp)",
                                volume: "1991cc",
                                stock: { hp: 365, torque: 430, zeroToHundred: 4.4 },
                                stage1: { hp: 420, torque: 520, zeroToHundred: 4.0, price: 1000 }
                            },
                            {
                                name: "3.5 V6 Supercharged (405hp)",
                                volume: "3456cc",
                                stock: { hp: 405, torque: 420, zeroToHundred: 4.3 },
                                stage1: { hp: 460, torque: 500, zeroToHundred: 3.9, price: 1200 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Rolls-Royce",
        models: [
            {
                name: "Cullinan / Ghost / Wraith",
                generations: [
                    {
                        name: "V12 Models",
                        engines: [
                            {
                                name: "6.75 V12 Bi-Turbo (571hp)",
                                volume: "6750cc",
                                stock: { hp: 571, torque: 850, zeroToHundred: 5.2 },
                                stage1: { hp: 680, torque: 1000, zeroToHundred: 4.7, price: 2500 }
                            },
                            {
                                name: "6.6 V12 Bi-Turbo (632hp)",
                                volume: "6592cc",
                                stock: { hp: 632, torque: 800, zeroToHundred: 4.6 },
                                stage1: { hp: 720, torque: 950, zeroToHundred: 4.2, price: 2500 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Maybach",
        models: [
            {
                name: "S-Class",
                generations: [
                    {
                        name: "Z223 (2021-Present)",
                        engines: [
                            {
                                name: "S580 (4.0 V8 503hp)",
                                volume: "3982cc",
                                stock: { hp: 503, torque: 700, zeroToHundred: 4.8 },
                                stage1: { hp: 600, torque: 850, zeroToHundred: 4.2, price: 1500 }
                            },
                            {
                                name: "S680 (6.0 V12 612hp)",
                                volume: "5980cc",
                                stock: { hp: 612, torque: 900, zeroToHundred: 4.5 },
                                stage1: { hp: 700, torque: 1050, zeroToHundred: 4.1, price: 2500 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Smart",
        models: [
            {
                name: "Fortwo",
                generations: [
                    {
                        name: "453 (2014-2019)",
                        engines: [
                            {
                                name: "0.9 Turbo (90hp)",
                                volume: "898cc",
                                stock: { hp: 90, torque: 135, zeroToHundred: 10.4 },
                                stage1: { hp: 115, torque: 175, zeroToHundred: 9.3, price: 350 }
                            },
                            {
                                name: "Brabus (0.9 Turbo 109hp)",
                                volume: "898cc",
                                stock: { hp: 109, torque: 170, zeroToHundred: 9.5 },
                                stage1: { hp: 130, torque: 210, zeroToHundred: 8.6, price: 400 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Ssangyong",
        models: [
            {
                name: "Korando / Rexton",
                generations: [
                    {
                        name: "Current Gen",
                        engines: [
                            {
                                name: "1.6 e-XDi (136hp)",
                                volume: "1597cc",
                                stock: { hp: 136, torque: 324, zeroToHundred: 11.5 },
                                stage1: { hp: 170, torque: 400, zeroToHundred: 10.0, price: 450 }
                            },
                            {
                                name: "2.2 e-XDi (202hp)",
                                volume: "2157cc",
                                stock: { hp: 202, torque: 441, zeroToHundred: 10.2 },
                                stage1: { hp: 240, torque: 510, zeroToHundred: 9.2, price: 500 }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        brand: "Saab",
        models: [
            {
                name: "9-3",
                generations: [
                    {
                        name: "YS3F (2002-2012)",
                        engines: [
                            {
                                name: "1.9 TiD (150hp)",
                                volume: "1910cc",
                                stock: { hp: 150, torque: 320, zeroToHundred: 9.5 },
                                stage1: { hp: 185, torque: 400, zeroToHundred: 8.6, price: 400 }
                            },
                            {
                                name: "2.0 T (210hp)",
                                volume: "1998cc",
                                stock: { hp: 210, torque: 300, zeroToHundred: 7.5 },
                                stage1: { hp: 250, torque: 380, zeroToHundred: 6.8, price: 400 }
                            },
                            {
                                name: "2.8 Turbo V6 (250hp)",
                                volume: "2792cc",
                                stock: { hp: 250, torque: 350, zeroToHundred: 6.7 },
                                stage1: { hp: 300, torque: 460, zeroToHundred: 6.0, price: 500 }
                            }
                        ]
                    }
                ]
            },
            {
                name: "9-5",
                generations: [
                    {
                        name: "YS3G (2010-2012)",
                        engines: [
                            {
                                name: "2.0 T (220hp)",
                                volume: "1998cc",
                                stock: { hp: 220, torque: 350, zeroToHundred: 7.9 },
                                stage1: { hp: 270, torque: 440, zeroToHundred: 7.0, price: 450 }
                            },
                            {
                                name: "2.8 Turbo V6 (300hp)",
                                volume: "2792cc",
                                stock: { hp: 300, torque: 400, zeroToHundred: 6.9 },
                                stage1: { hp: 350, torque: 500, zeroToHundred: 6.1, price: 550 }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
