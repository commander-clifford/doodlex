import { Doodletype } from './doodletype';

export const DOODLETYPES: Doodletype[] = [


  // Google
  {
    name: 'Google',
    id: 0,
    blogLink: 'https://www.google.com/doodles/',
    isActive: true,
    isDoodle: false,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'No Doodle',
    intro: 'No Doodle',
    scribbleUrl: null,
    scribble: null,
    triggers: ['google'],
    promo: "This is not the greatest page in world 😇 🤘🏻<br>This is just a prototype",
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        primaryColor: null,
        cardElementsColor: null,
        content: null,
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          standard: {
            url: './assets/logos/google--gmail-2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },
          alternative: {
            url: './assets/logos/google--gmail-2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },
        },
        levelOne: {
          standard: {
            url: './assets/logos/google--gmail-2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },
          alternative: {
            url: './assets/logos/google--gmail-2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },
        },
        levelTwo: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/google--srp-2x.png',
          name: 'Google',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },
      small: {
        url: './assets/logos/google--small-2x.png',
        name: 'Google',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/google--standard-2x.png',
        name: 'Google',
        width: 272,
        height: 92,
      },
    },
  },

  // Summer Solstice
  {
    name: 'Summer Solstice',
    id: 1,
    blogLink: 'https://www.google.com/doodles/summer-solstice-2018-northern-hemisphere',
    isActive: true,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: true,
    tagSrp: false,
    desc: 'Summer Solstice 2019',
    intro: 'It\'s the longest day of the year☀️😎',
    scribbleUrl: 'https://www.google.com/doodles/summer-solstice-2018-northern-hemisphere',
    scribble: `
              To-do list filling up? Been putting off that pesky task for far too long? Well, today’s the day to finally get it done — June 21 marks this year’s summer solstice: the longest day of the year for the northern hemisphere.<br><br>
              Each year on the summer solstice, the sun hits its annual altitudinal peak directly over the Tropic of Cancer. This year, that moment occurs at exactly 10:07 am UTC. When it happens, the tilt of the earth’s North Pole is at its closest to the sun, marking the first day of summer on the astronomical calendar.<br><br>
              Throughout history, the summer solstice has been the impetus for numerous cultural celebrations, many of which we see variations of today. From Astrofest in Croatia, to Midsommar in Sweden, to the Summer Solstice Celebration in Santa Barbara, U.S.A., the summer solstice remains a day of celebration around the world.<br><br>
              As you enjoy today’s extra bit of sunlight, check out what our neighbors to the South are up to on their shortest day of the year.<br><br>
              Happy Summer!
    `,
    triggers: ['summer solstice','summer','solstice','summer solstice 2018'],
    promo: "June 21 marks this year's summer solstice: the longest day of the year.",
    archive: [

      {
        url: './assets/logos/summer-solstice-2018-northern-hemisphere-6257064564228096-2xa.gif',
        name: 'Summer Solstice',
        width: 500,
        height: 200,
        year: '2018',
        link: 'https://www.google.com/doodles/summer-solstice-2018-northern-hemisphere',
      },
      {
        url: './assets/logos/first-day-summer_2009--standard.gif',
        name: 'First Day of Summer',
        width: 500,
        height: 200,
        year: '2009',
        link: 'https://www.google.com/doodles/first-day-of-summer-2009-northern-hemisphere',
      },
      {
        url: './assets/logos/summer-solstice-2015-northern-hemisphere-hp2x.gif',
        name: 'summer solstice northern hemisphere',
        width: 500,
        height: 200,
        year: '2015',
        link: 'https://www.google.com/doodles/summer-solstice-2015-northern-hemisphere',
      },


    ],
    imgs: [
      { url: './assets/', width: 910/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/view-all.png', width: 256/2, height: 512/2, alt: 'alt text' },
    ],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {
            color: '#284505',
            background: `
              url(./assets/styles/srp/summer-solstice__left-toolbar-2--2x.png) left top no-repeat,
              url(./assets/styles/srp/summer-solstice__right-toolbar-2--2x.png) right top no-repeat, linear-gradient(to bottom, #f4f5aa 0%, transparent 50%)`,
          },
        },
        toolbar: {
          simple: {
            color: '#284505',
            // borderBottom: '1px solid #f4f5aa',
            borderBottom: 'none',
            background: `
              url(./assets/styles/srp/summer-solstice__full-toolbar--2x.png) left center no-repeat,
              #f4f5aa`,
          },
          elaborate: {
            // height: '150px',
            color: '#284505',
            // borderBottom: '1px solid #f4f5aa',
            borderBottom: 'none',
            background: `
              url(./assets/styles/srp/summer-solstice__full-top-toolbar--2x.png) left top / 100% 118px no-repeat, linear-gradient(#f4f5aa, white)`,
          },
          elaborate_clear: {
            // height: '150px',
            color: '#284505',
            // borderBottom: '1px solid #f4f5aa',
            borderBottom: 'none',
            background: `
              url(./assets/styles/srp/summer-solstice__full-top-toolbar--2x.png) left top / 100% 118px no-repeat, linear-gradient(white, white)`,
          },
          whole: {
            color: '#284505',
            borderBottom: 'none',
            background: 'transparent',
            // background: `
            //   url(./assets/styles/srp/summer-solstice__full-toolbar--2x.png) left center no-repeat, linear-gradient(to bottom, white , white)`,
          }
        },
        secondaryToolbar: {
          simple: {
            color: '#284505',
            // borderBottom: '1px solid #f4f5aa',
            borderBottom: 'none',
            background: `
              url(./assets/styles/srp/summer-solstice__full-toolbar--2x.png) left center no-repeat,
              #f4f5aa`,
          },
          elaborate: {
            color: '#284505',
            // borderBottom: '1px solid #f4f5aa',
            borderBottom: 'none',
            background: `
              url(./assets/styles/srp/summer-solstice__full-top-toolbar--2x.png) left center no-repeat, linear-gradient(#f4f5aa, white)`,
          },
          whole: {
            color: '#284505',
            borderBottom: 'none',
            background: 'rgba(255,255,255,0.85)',
            // background: `
            //   url(./assets/styles/srp/summer-solstice__full-toolbar--2x.png) left center no-repeat, linear-gradient(to bottom, white , white)`,
          }
        }
      },
      gmail: {
        primaryColor: '#284505',
        cardElementsColor: '#284505',
        secondaryColor: '#ffd823',

        gColor0: '#b95445',
        gColor1: '#456945',
        gColor2: '#3f99d0',
        gColor3: '#ffd823',

        content: {
          background: 'url(./assets/doodle-styles/summer_solstice-content-top.png) left top / contain no-repeat, url(./assets/doodle-styles/summer_solstice-content.png) left bottom / contain no-repeat, #f4f5aa',
        },

        levelNo: {
          searchBar: {
            background: '#f1f3f4',
          },
        },
        levelOne: {
          searchBar: {
            background: 'rgba(255,255,255,0.9)',
          },
          sidebar: {
            // color: '#b9d66a',
          },
          toolbar: {
            // color: '#b9d66a',
            color: '#284505',
            borderBottom: '1px solid #b9d66a',
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: ' #f6f8b9',
            // backgroundImage: "url('./assets/doodle-styles/summer_solstice-header_left.png')",

            background: 'url(./assets/doodle-styles/summer_solstice-header_left.png) 180px top / contain no-repeat,url(./assets/doodle-styles/summer_solstice-header_right.png) right top / contain no-repeat, #f4f5aa',
          },
        },

        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {

      gmail: {
        inCard: {
          url: './assets/SummerAsset2.png',
          name: 'summer',
          width: 180,
          height: 180,
        },
        no: {
          standard: {
            url: './assets/logos/google--gmail-2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },
          alternative: {
            url: './assets/logos/google--gmail-2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },

        },
        levelOne: {
          standard: {
            url: './assets/logos/summer-solstice__logo-gmail--full.png',
            name: 'GMail',
            width: 110,
            height: 40,
            style: {
              transform: 'translate(-8px, -6px)'
            },
          },
          alternative: {
            url: './assets/logos/summer-solstice__logo-gmail--full.png',
            name: 'GMail',
            width: 110,
            height: 40,
            style: {
              transform: 'translate(-8px, -6px)'
            },
          },

        },
        levelTwo: {},
      },
      srp: {
        fullReplace: {
          url: './assets/logos/summer-solstice__srp-2x.png',
          name: 'ss',
          width: 92,
          height: 30,
        },
        openLetterReplace: {
          url: './assets/logos/summer-solstice__srp-2x.png',
          name: 'ss',
          width: 92,
          height: 30,
        },
        letterReplace: {
          url: './assets/logos/summer-solstice__srp-2x.png',
          name: 'ss',
          width: 92,
          height: 30,
        },
      },

      small: {
        url: './assets/logos/sirindhorn-bird--small-2x.png',
        name: 'Sirindhorn Bird',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/summer-solstice-2018-northern-hemisphere-6257064564228096-2xa.gif',
        name: 'Summer Solstice',
        width: 500,
        height: 200,
        offset: -80
      }
    },
  },

  // Earth Day (Geminid Meteor Shower)
  {
    name: 'Earth Day',
    id: 2,
    blogLink: 'https://www.google.com/doodles/earth-day-2017',
    isActive: true,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: true,
    tagSrp: false,
    desc: '',
    intro: 'Happy Earth Day! 🌎',
    scribbleUrl: 'https://www.google.com/doodles/earth-day-2017',
    scribble: `Happy Earth Day 2017!<br><br>Today, we honor the rich, vast Earth that’s sustained generations before us and continues to nurture life and inspire wonder. At an estimated 4.543 billion years of age, the Earth is still the only known object in the Universe known to harbor life. It’s also the densest planet in the Solar System and the largest of the four terrestrial planets. That’s quite an awe-inspiring roster of qualities, if you ask us.<br><br>Today’s Doodle follows the story of a fox who dreams about an Earth that’s been polluted and adversely affected by climate change. The fox wakes with a startle, and urgently starts making small lifestyle changes to care for the Earth. Along the way, the fox enlists friends – including Momo the cat, and Google Weather’s favorite frog – to join its quest to protect and nurture the environment.<br><br>To combat things like coral bleaching and pollution, the three eco-rangers are inspired to take action such as eating less meat, carpooling, and unplugging unused electronic devices. That’s some heroic work for tiny animals!<br><br>Celebrating Earth Day on Google Search<br><br>But the Earth Day celebration doesn’t end there! By clicking beyond the Doodle to Google Search, you’ll find easy Earth Day tips to help you do your part in saving our planet, including supporting critical conservation efforts such as wildlife conservation with World Wildlife Fund, coral reef conservation with The Ocean Agency, and rainforest conservation with The Jane Goodall Institute.`,
    triggers: ['earth day','earth','earth day 2017'],
    promo: "Happy Earth Day 2017!<br><br>Today, we honor the rich, vast Earth that’s sustained generations before us and continues to nurture life and inspire wonder.",
    archive: null,
    imgs: [
      { url: './assets/results/sirindhorn-bird_1.png', width: 693/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_2.png', width: 683/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_3.png', width: 406/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_4.png', width: 507/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_5.png', width: 910/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/view-all.png', width: 256/2, height: 512/2, alt: 'alt text' },
    ],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {

          },
          whole: {},
        },
        toolbar: {
          simple: {

          },
          elaborate: {
            background: 'url(./assets/doodle-styles/meteor-header_core.png) center top no-repeat, #000',
          },
          whole: {

          }
        }
      },
      gmail: {
        primaryColor: '#c2e5ec',
        cardElementsColor: '#2F5E5D',
        content: {
          background: 'url(./assets/doodle-styles/meteor-content-top.png) left top / contain no-repeat, url(./assets/doodle-styles/meteor-content.png) left bottom / contain no-repeat, #131828',
        },

        levelNo: {
          searchBar: {
            color: '#111',
            backgroundColor: '#f1f3f4',
          },
        },
        levelOne: {
          searchBar: {
            color: '#111',
            background: 'rgba(255,255,255,0.8)',
          },
          sidebar: {},
          toolbar: {
            color: '#c2e5ec',
            borderBottom: '1px solid #131828',
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: ' #f6f8b9',
            // backgroundImage: "url('./assets/doodle-styles/summer_solstice-header_left.png')",

            background: 'url(./assets/EarthAsset2.png) 80% top / contain no-repeat, url(./assets/doodle-styles/meteor-header_left.png) left top / contain no-repeat,url(./assets/doodle-styles/meteor-header_right.png) right top / contain no-repeat,url(./assets/doodle-styles/meteor-header_core.png) center top / contain no-repeat, #000',


          },
        },

        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          standard: {
            url: './assets/logos/logo_gmail_lockup_dark_2x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },
          alternative: {
            url: './assets/logos/logo_gmail_lockup_default_1x.png',
            name: 'GMail',
            width: 110,
            height: 40,
          },

        },
        levelOne: {
          standard: {
            url: './assets/logos/meteor__logo-gmail--full.png',
            name: 'GMail',
            width: 130,
            height: 47,
            style: {
              transform: 'translate(-26px,-7px)',
            }
          },
          alternative: {
            url: './assets/logos/meteor__logo-gmail--full--alt.png',
            name: 'GMail',
            width: 130,
            height: 47,
            style: {
              transform: 'translate(-26px,-7px)',
            }
          },
        },
        levelTwo: {},
        inCard: {
          url: './assets/logos/earth-day--gmail--card.png',
          name: 'GMail',
          width: 215/2,
          height: 206/2,
        },
      },
      srp: {
        fullReplace: {
          url: './assets/logos/meteor--srp-2x.png',
          name: 'Geminid Metoer Shower',
          width: 92,
          height: 30,
        },
        openLetterReplace: {
          url: './assets/logos/meteor--srp-2x.png',
          name: 'Geminid Metoer Shower',
          width: 92,
          height: 30,
        },
        letterReplace: {
          url: './assets/logos/meteor--srp-2x.png',
          name: 'Geminid Metoer Shower',
          width: 92,
          height: 30,
        },
      },
      small: {
        url: './assets/logos/the-geminid-meteor-shower-2018--2x.gif',
        name: 'Geminid Metoer Shower',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/the-geminid-meteor-shower-2018--2x.gif',
        name: 'Geminid Metoer Shower',
        width: 500,
        height: 200,
        offset: -80
      }
    },
  },

  // Sirindhorn Bird
  {
    name: 'Sirindhorn Bird',
    id: 3,
    blogLink: 'https://www.google.com/doodles/',
    isActive: true,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: true,
    tagSrp: true,
    desc: '50th Anniversary of Princess Sirindhorn Bird First Sighting',
    intro: '50th Anniversary of Princess Sirindhorn Bird First Sighting',
    scribbleUrl: '',
    scribble: `It has been 50 years since the rare white-eyed river Martin was first spotted in Thailand, a bird seen so infrequently it is nearly mythical.<br><br>Known locally as the Princess Sirindhorn bird, the white-eyed Martin is one of only two species of birds native to Thailand. This unique Thai treasure is distinguished by gleaming green-black feathers, a white midsection and a tail extending into two delicate black feathers. <br><br>Its beauty is hard to find, with only three confirmed sightings since it was first discovered at a wintering site in 1968. The Thai government has honored the mystical species with a stamp and commemorative coin, meant to pique curiosity and raise awareness of the bird.<br><br>No one has spotted the Princess Sirindhorn since 1980, stoking unconfirmed speculation that the species has gone extinct. That won’t stop residents and tourists alike this spring from perusing river banks, where the rare bird is known to roost, in the hopes that they’ll spot this rare Thai jewel!`,
    triggers: ['sirindhorn bird'],
    promo: "50th Anniversary of Princess Sirindhorn Bird First Sighting",
    archive: null,
    imgs: [
      { url: './assets/results/sirindhorn-bird_1.png', width: 693/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_2.png', width: 683/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_3.png', width: 406/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_4.png', width: 507/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/sirindhorn-bird_5.png', width: 910/2, height: 512/2, alt: 'alt text' },
      { url: './assets/results/view-all.png', width: 256/2, height: 512/2, alt: 'alt text' },
    ],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {
            background: "#faf7d4"
          },
        },
        toolbar: {
          simple: {
            background: "linear-gradient(transparent, #f2ffd0)",
            borderBottom: "1px solid #eee8ab",
          },
          elaborate: {
            background: "linear-gradient(transparent, #f2ffd0)",
            borderBottom: "1px solid #eee8ab",
          },
          whole: {
            borderBottom: "1px solid #eee8ab",
            background: "url('./assets/header_bg-bird-right.png') right bottom no-repeat, url('./assets/header_bg-bird-left.png') left bottom no-repeat, linear-gradient(#faf7d4, #faf7d4)",
          }
        }
      },
      gmail: {
        primaryColor: '#005619', // green
        cardElementsColor: '#005619', // green
        secondaryColor: '#D8E9A5', // green
        accentBackground: 'rgba(0,0,0,0.16)',

        content: {
          color: '#005619',
          background: 'url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-bottom.png") bottom right no-repeat #f9f9e4',
        },

        levelOne: {
          searchBar: {
            background: 'rgba(0,0,0,0.16)',
          },
          sidebar: {
            color: '#005619',
          },
          toolbar: {
            color: '#005619',
            borderBottom: '1px solid #D8E9A5',
            background: 'url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-left.png") top left no-repeat, url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-right.png") top right no-repeat, rgba(249, 249, 228, 0.85)',
          },
        },

        levelTwo: {
          searchBar: {
            background: 'rgba(0,0,0,0.16)',
          },
          sidebar: {
            color: '#005619',
          },
          toolbar: {
            color: '#005619',
          },
          content: {
            color: '#005619',
            background: 'url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-bottom.png") bottom right no-repeat #f9f9e4',
          },
        },
        levelThere: {
          sidebar: {
            color: '#005619',
          },
          searchBar: {
            background: 'rgba(0,0,0,0.16)',
          },
          toolbar: {
            borderBottom: '1px solid #ebe2a1',
            background: 'url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-left.png") top left no-repeat, url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-right.png") top right no-repeat, rgba(249, 249, 228, 0.85)',
          },
          content: {
            color: '#005619',
          },
        },
        levelFour: {
          sidebar: {
            color: '#005619',
          },
          parent: {
            borderRight: '8px solid #bce494',
          },
          content: {
            color: '#005619',
            // backgroundColor: '#f9f9e4',
            background: 'url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-bottom.png") bottom right no-repeat',

          },
          searchBar: {
            background: 'rgba(0,0,0,0.16)',
          },
          toolbar: {
            borderBottom: '1px solid #ebe2a1',
            background: 'url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-left.png") top left no-repeat, url("./assets/doodle-styles/sirindhorn-bird__gmail-drawer--bg-right.png") top right no-repeat, rgba(249, 249, 228, 0.85)',
          },
          footer: {
            color: '#005619',
            background: 'linear-gradient(transparent,#bce494)',
          },
        },
      },
    },
    logo: {
      gmail: {
        inCard: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/sirindhorn-bird__logo-gmail--full.png',
          name: 'GMail',
          width: 130,
          height: 47,
        },
        levelTwo: {
          url: './assets/logos/sirindhorn-bird__logo-gmail--full.png',
          name: 'GMail',
          width: 130,
          height: 47,
        },
      },
      srp: {
        fullReplace: {
          url: './assets/logos/sirindhorn-bird__full-replace--srp-2x.png',
          name: 'Sirindhorn Bird',
          width: 92,
          height: 30,
        },
        openLetterReplace: {
          url: './assets/logos/sirindhorn-bird__open-letter-replace--srp-2x.png',
          name: 'Sirindhorn Bird',
          width: 92,
          height: 30,
        },
        letterReplace: {
          url: './assets/logos/sirindhorn-bird__letter-replace--srp-2x.png',
          name: 'Sirindhorn Bird',
          width: 92,
          height: 30,
        },
      },

      small: {
        url: './assets/logos/sirindhorn-bird--small-2x.png',
        name: 'Sirindhorn Bird',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/sirindhorn-bird--standard-2x.png',
        name: 'Sirindhorn Bird',
        width: 500,
        height: 200,
        offset: -80
      }
    },
  },

  // Hinamatsuri
  {
    name: 'Hinamatsuri',
    id: 4,
    blogLink: 'https://www.google.com/doodles/',
    isActive: true,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: true,
    tagSrp: true,
    desc: 'Celebration',
    intro: 'Happy Hinamatsuri Day! 🙋🏻‍♀️',
    scribbleUrl: '',
    scribble: 'Today, two Japanese hina dolls—an Emperor and Empress—preside over the Google colors in celebration of Hinamatsuri, an annual Japanese festival during which families wish for the health and happiness of their young girls. Also known as Girls’ Day, Hinamatsuri is believed to be rooted in the Heian-period custom nagashi-bina, where straw-and-paper dolls were placed in boats and floated down rivers to spirit away misfortune. <br><br>Though nagashi-bina ceremonies are still part of Hinamatsuri festivities in some regions, the day is more widely celebrated with elaborate displays of dolls (hina-ningyo) symbolically arranged on five- to seven-step platforms draped in red carpet. Each step depicts a different scene, always beginning with the Emperor and Empress, who are dressed in colorful kimonos that represent ancient court costumes.<br><br>These splendid arrangements decorate restaurants, shops, and family homes in the month leading up to Hinamatsuri. On festival day, people partake in traditional food and drink, such as chirashi-zushi (scattered sushi), shirozake (sweet white sake), and hishimochi (red, white, and green rice cakes shaped like diamonds). <br><br>Today’s Doodle honors Hinamatsuri with two hina-ningyo handcrafted from paper. In a special homage, the Emperor and Empress’ robes are fashioned from chiyogami, Japanese origami paper. Cherry blossoms—another symbol of this festive day—bloom above them, imparting good luck.',
    triggers: ['hinamatsuri'],
    promo: 'Today, two Japanese hina dolls—an Emperor and Empress—preside over the Google colors in celebration of Hinamatsuri.',
    archive: [

      {
        url: './assets/logos/hinamatsuri--standard-2x.png',
        name: 'Hinamatsuri',
        width: 500,
        height: 200,
        year: '2018',
        link: 'https://www.google.com/doodles/girls-day-2012',
      },
      {
        url: './assets/logos/hinamatsuri_2012--standard-2x.png',
        name: 'Hinamatsuri',
        width: 500,
        height: 200,
        year: '2012',
        link: 'https://www.google.com/doodles/girls-day-2012',
      },
      {
        url: './assets/logos/hinamatsuri_2019--standard-2x.png',
        name: 'Hinamatsuri',
        width: 500,
        height: 200,
        year: '2018',
        link: 'https://www.google.com/doodles/girls-day-2018',
      },
      {
        url: './assets/logos/hinamatsuri_2010--standard-2x.png',
        name: 'Hinamatsuri',
        width: 500,
        height: 200,
        year: '2010',
        link: 'https://www.google.com/doodles/girls-day-2010-japan',
      },
      {
        url: './assets/logos/hinamatsuri_2009--standard-2x.png',
        name: 'Hinamatsuri',
        width: 500,
        height: 200,
        year: '2009',
        link: 'https://www.google.com/doodles/hinamatsuri-2009',
      },
    ],
    imgs: [],
    styles: {

      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },

      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {
            background: "url('./assets/body_bg-hina-left.png') left 180px no-repeat, url('./assets/body_bg-hina-right.png') right 120px no-repeat, #fffae4",
          },
        },
        toolbar: {
          simple: {
            backgroundImage: "linear-gradient(transparent, #ffddd0)",
            borderBottom: "1px solid #e9c1b1",
          },
          elaborate: {
            borderBottom: "1px solid #e9c1b1",
            background: "url('./assets/header_bg-hina-right.png') right bottom no-repeat, linear-gradient(#ffddd0, #ffddd0)",
          },
          whole: {
            borderBottom: "1px solid #e9c1b1",
            background: "url('./assets/header_bg-hina-right.png') right bottom no-repeat, linear-gradient(#ffddd0, #ffddd0)",
          }
        }
      },

      gmail: {

        primaryColor: '#4d1d2d',
        cardElementsColor: '#4d1d2d',
        secondaryColor: '#e4b762',
        accentBackground: 'rgba(255,255,255,0.5)',

        content: {
          background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-bottom-h.png") 100% 200px no-repeat, #fbe9eb',
          color: '#6b2844',
        },

        levelOne: {
          mInput: {
            boxShadow: '0px 1px 3px 1px #fcb4bb, 0px 0px 1px 0px #fcb4bb',
            color: '#4d1d2d',
          },
          mToolbar: {
            color: '#4d1d2d',
          },
          content: {},
          footer: {},
          searchBar: {
            background: 'rgba(255,255,255,0.5)',
          },
          sidebar: {
            color: '#4d1d2d',
          },
          toolbar: {
            color: '#6b2844',
            borderBottom: '1px solid #eaccca',
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-left.png") top left no-repeat, url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-right.png") top right no-repeat rgba(251,233,235,0.85)',
          },
        },

        levelTwo: {
          sidebar: {
            color: '#4d1d2d',
          },
          primaryColor: '#4d1d2d',
          cardElementsColor: '#4d1d2d',
          mToolbar: {
            color: '#4d1d2d',
            background: 'linear-gradient(#f8a7c0,transparent)',
          },
          mInput: {
            boxShadow: '0px 1px 3px 1px #fcb4bb, 0px 0px 1px 0px #fcb4bb',
            color: '#4d1d2d',
          },
          toolbar: {
            background: '#fbe9eb',
            color: '#6b2844',
          },
          content: {
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-bottom-h.png") 100% 200px no-repeat, #fbe9eb',
            color: '#6b2844',
          },
          footer: {},
          searchBar: {
            background: 'rgba(255,255,255,0.5)',
          },
        },
        levelThere: {
          searchBar: {
            background: 'rgba(255,255,255,0.5)',
          },
          sidebar: {
            color: '#4d1d2d',
          },
          primaryColor: '#4d1d2d',
          cardElementsColor: '#4d1d2d',
          mToolbar: {
            color: '#4d1d2d',
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-mtoolbar--bg-left.png") top left no-repeat, url("./assets/doodle-styles/hinamatsuri-bird__gmail-mtoolbar--bg-right.png") top right no-repeat, linear-gradient(#f8a7c0,transparent)',
          },
          mInput: {
            boxShadow: '0px 1px 3px 1px #fcb4bb, 0px 0px 1px 0px #fcb4bb',
            color: '#4d1d2d',
          },
          toolbar: {
            borderBottom: '1px solid #eaccca',
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-left.png") top left no-repeat, url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-right.png") top right no-repeat, #ffe6e1',
          },
          content: {
            background: '#fbe9eb',
            color: '#6b2844',
          },
          footer: {},
        },
        levelFour: {
          searchBar: {
            background: 'rgba(255,255,255,0.5)',
          },
          sidebar: {
            color: '#4d1d2d',
          },
          primaryColor: '#4d1d2d',
          cardElementsColor: '#4d1d2d',
          mToolbar: {
            color: '#4d1d2d',
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-mtoolbar--bg-left.png") top left no-repeat, url("./assets/doodle-styles/hinamatsuri-bird__gmail-mtoolbar--bg-right.png") top right no-repeat, linear-gradient(#f8a7c0,transparent)',
          },
          mInput: {
            boxShadow: '0px 1px 3px 1px #fcb4bb, 0px 0px 1px 0px #fcb4bb',
            color: '#4d1d2d',
          },
          parent: {
            borderRight: '8px solid #b50047',
          },
          toolbar: {
            borderBottom: '1px solid #eaccca',
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-left.png") top left no-repeat, url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-right.png") top right no-repeat, #ffe6e1',
          },
          content: {
            background: 'url("./assets/doodle-styles/hinamatsuri-bird__gmail-drawer--bg-bottom.png") bottom right no-repeat, #fbe9eb',
            color: '#6b2844',
          },
          footer: {
            color: '#4d1d2d',
            background: 'linear-gradient(transparent,#f8a7c0)',
          },
        },
      },
    },
    logo: {
      gmail: {
        inCard: {
          url: './assets/logos/hinamatsuri__logo-gmail--full.png',
          name: 'GMail',
          width: 130,
          height: 47,
        },
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/hinamatsuri__logo-gmail--full.png',
          name: 'GMail',
          width: 130,
          height: 47,
        },
        levelTwo: {
          url: './assets/logos/hinamatsuri__logo-gmail--full.png',
          name: 'GMail',
          width: 130,
          height: 47,
        },
      },
      srp: {
        fullReplace: {
          url: './assets/logos/hinamatsuri__full-replace--srp-2x.png',
          name: 'Hinamatsuri',
          width: 92,
          height: 30,
        },
        openLetterReplace: {
          url: './assets/logos/hinamatsuri__open-letter-replace--srp-2x.png',
          name: 'Hinamatsuri',
          width: 92,
          height: 30,
        },
        letterReplace: {
          url: './assets/logos/hinamatsuri__letter-replace--srp-2x.png',
          name: 'Hinamatsuri',
          width: 92,
          height: 30,
        },
      },
      small: {
        url: './assets/logos/hinamatsuri--small-2x.png',
        name: 'Mother\'s Day',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/hinamatsuri--standard-2x.png',
        name: 'Mother\'s Day',
        width: 500,
        height: 200,
        offset: -80
      }
    },
  },

  ///////////////////////// inactive

  // The First Doodle
  {
    name: 'The First Doodle',
    id: 5,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'Burning Man',
    intro: 'Burning Man',
    scribbleUrl: '',
    scribble: 'Google founders Larry Page and Sergey Brin played with the corporate logo to indicate that they were headed to the Burning Man festival—it was their “out of office" message for Google users. With this, the idea of creatively altering the company logo was born',
    triggers: ['burning man', 'burner'],
    promo: "Out of Office",
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        primaryColor: '#0108BC',
        cardElementsColor: '#0108BC',
        secondaryColor: 'yellow',
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/burningman--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/burningman--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/burningman--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/burningman-doodle.jpg',
          name: 'Burning Man',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },

      small: {
        url: './assets/burningman-doodle.jpg',
        name: 'Burning Man',
        width: 160,
        height: 54,
      },

      standard: {
        url: './assets/logos/burningman--standard-2x.png',
        name: 'Burning Man',
        width: 272,
        height: 92,
      },

    },
  },

  // Easter
  {
    name: 'Easter',
    id: 6,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'Easter (FPO)',
    intro: 'Easter (FPO)',
    scribbleUrl: '',
    scribble: null,
    triggers: ['easter'],
    promo: "It's almost <a class='test' href='./#/results/easter'>Easter</a> time! 🐰🥚🧺",
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {
            background: "linear-gradient(#fff0f7, #ff69b4)",
          },
        },
        toolbar: {
          simple: {
            borderBottom: "1px solid #87ceeb",
            // backgroundImage: "linear-gradient(#f3fafd, #93d2ed)",
            backgroundImage: "linear-gradient(#fff0f7, #ff69b4)",
          },
          elaborate: {
            borderBottom: "1px solid #87ceeb",
            // backgroundImage: "linear-gradient(#f3fafd, #93d2ed)",
            backgroundImage: "linear-gradient(#FFFFFF, #FFD6E9)",
          },
          whole: {
            borderBottom: "1px solid #87ceeb",
            // backgroundImage: "linear-gradient(#f3fafd, #93d2ed)",
            backgroundImage: "linear-gradient(#fff0f7, #ff69b4)",
          }
        }
      },
      gmail: {
        primaryColor: '#86D1E6',
        cardElementsColor: '#86D1E6',
        secondaryColor: 'pink',
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/easter--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/easter--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/easter--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/easter--srp-2x.png',
          name: 'Easter',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },
      small: {
        url: './assets/logos/easter--small-2x.png',
        name: 'Easter',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/easter--standard-2x.png',
        name: 'Easter',
        width: 272,
        height: 92,
      }
    },
  },

  // George H. W. Bush
  {
    name: 'George H. W. Bush',
    id: 7,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'Mourning President George H. W. Bush, 1924 - 2018',
    intro: 'Mourning President George H. W. Bush, 1924 - 2018',
    scribbleUrl: '',
    scribble: null,
    triggers: ['george hw bush', 'george bush', 'bush'],
    promo: "<a href='./#/results/georgehwbush'>President George H. W. Bush, 1924 - 2018</a>",
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/mourning--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/mourning--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/mourning--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/mourning--srp-2x.png',
          name: 'mourning',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },

      small: {
        url: './assets/logos/mourning--small-2x.png',
        name: 'mourning',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/mourning--standard-2x.png',
        name: 'mourning',
        width: 272,
        height: 92,
      }
    },
  },

  // Mothers Day
  {
    name: 'Mothers Day',
    id: 8,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: true,
    desc: 'Mothers Day',
    intro: 'Mothers Day',
    scribbleUrl: '',
    scribble: null,
    triggers: ['mothers day', 'mothers'],
    promo: "I love you Mommy",
    archive: [
      {
        url: './assets/logos/mothers-day--standard-2x.png',
        name: 'Mother\'s Day',
        width: 500,
        height: 200,
        year: '2018',
      },
      {
        url: "./assets/logos/mothers-day-2017--standard-2x.png",
        name: "Mother's Day",
        year: "2017",
        width: 272,
        height: 92,
      },
      {
        url: "./assets/logos/mothers-day-2016--standard-2x.gif",
        name: "Mother's Day",
        year: "2016",
        width: 272,
        height: 92,
      },
      {
        url: "./assets/logos/mothers-day-2015--standard-2x.gif",
        name: "Mother's Day",
        year: "2015",
        width: 272,
        height: 92,
      },
    ],
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {
            background: "url('./assets/body_bg-mothers_day-left.png') left 180px no-repeat, url('./assets/body_bg-mothers_day-center.png') 30% 60% no-repeat, url('./assets/body_bg-mothers_day-right.png') right 180px no-repeat, #f1fff3",
          },
        },
        toolbar: {
          simple: {
            borderBottom: "1px solid #9de9d3",
            backgroundImage: "linear-gradient(transparent, #d0f2ff)",
          },
          elaborate: {
            borderBottom: "1px solid #9de9d3",
            background: 'url("./assets/header_bg-mothers_day-left.png") left bottom no-repeat, url("./assets/header_bg-mothers_day-right.png") right bottom no-repeat, linear-gradient(#d0f2ff, #d0f2ff)',
          },
          whole: {
            borderBottom: "1px solid #9de9d3",
            background: 'url("./assets/header_bg-mothers_day-left.png") left bottom no-repeat, url("./assets/header_bg-mothers_day-right.png") right bottom no-repeat, linear-gradient(#d0f2ff, #d0f2ff)',
          }
        }
      },
      gmail: {
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: {
          url: './assets/logos/mothers-day__full-replace--small-2x.png',
          name: 'Mother\'s Day',
          width: 92,
          height: 30,
        },
        openLetterReplace: {
          url: './assets/logos/mothers-day__open-letter-replace--small-2x.png',
          name: 'Mother\'s Day',
          width: 92,
          height: 30,
        },
        letterReplace: {
          url: './assets/logos/mothers-day__letter-replace--small-2x.png',
          name: 'Mother\'s Day',
          width: 92,
          height: 30,
        },
      },
      small: {
        url: './assets/logos/mothers-day--small-2x.png',
        name: 'Mother\'s Day',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/mothers-day--standard-2x.png',
        name: 'Mother\'s Day',
        width: 500,
        height: 200,
        offset: -80,
      }
    },
  },

  // Memorial Day
  {
    name: 'Memorial Day',
    id: 9,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'Memorial Day (FPO)',
    intro: 'Memorial Day (FPO)',
    scribbleUrl: '',
    scribble: null,
    triggers: ['memorial day', 'memorial'],
    promo: 'Never Forget 🎖🎗',
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/memorial--srp-2x.png',
          name: 'Memorial Day',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },
      small: {
        url: './assets/logos/memorial--small-2x.png',
        name: 'Memorial Day',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/memorial--standard-2x.png',
        name: 'Memorial Day',
        width: 272,
        height: 92,
      }
    },
  },

  // 9/11
  {
    name: '9/11',
    id: 10,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: '9/11 (FPO)',
    intro: '9/11 (FPO)',
    scribbleUrl: '',
    scribble: null,
    triggers: ['9/11', '911', 'september 11'],
    promo: 'Never Forget 🎖🎗',
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/memorial--srp-2x.png',
          name: '9/11',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },
      small: {
        url: './assets/logos/memorial--small-2x.png',
        name: '9/11',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/memorial--standard-2x.png',
        name: '9/11',
        width: 272,
        height: 92,
      }
    },
  },

  // Christmas
  {
    name: 'Christmas',
    id: 11,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: false,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'Christmas (FPO)',
    intro: 'Christmas (FPO)',
    scribbleUrl: '',
    scribble: null,
    triggers: ['christmas', 'xmas'],
    promo: "Do you know, what happens under <a href='./#/results/mistletoe'>mistletoe</a>? 🎄",
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/google--srp-2x.png',
          name: 'Christmas',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },
      small: {
        url: './assets/logos/google--small-2x.png',
        name: 'Christmas',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/google--standard-2x.png',
        name: 'Christmas',
        width: 272,
        height: 92,
      }
    },
  },

  // Simon Says
  {
    name: 'Google Says',
    id: 12,
    blogLink: 'https://www.google.com/doodles/',
    isActive: false,
    isDoodle: true,
    isInteractiveDoodle: true,
    highlight: false,
    tagGmail: false,
    tagSrp: false,
    desc: 'Google Says (FPO)',
    intro: 'Google Says (FPO)',
    scribbleUrl: '',
    scribble: null,
    triggers: ['simon says', 'google says'],
    promo: "Google says 'blue, red, yellow, blue, green, red'",
    archive: null,
    imgs: [],
    styles: {
      hp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
      },
      srp: {
        cont: {
          simple: {},
          elaborate: {},
          whole: {},
        },
        toolbar: {
          simple: {},
          elaborate: {},
          whole: {}
        }
      },
      gmail: {
        levelOne: {},
        levelTwo: {},
        levelThere: {},
        levelFour: {},
      },
    },
    logo: {
      gmail: {
        no: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelOne: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        levelTwo: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
        inCard: {
          url: './assets/logos/google--gmail-2x.png',
          name: 'GMail',
          width: 110,
          height: 40,
        },
      },
      srp: {
        fullReplace: null,
        openLetterReplace: {
          url: './assets/logos/google--srp-2x.png',
          name: 'Christmas',
          width: 92,
          height: 30,
        },
        letterReplace: null,
      },
      small: {
        url: './assets/logos/google--small-2x.png',
        name: 'Christmas',
        width: 160,
        height: 56,
      },
      standard: {
        url: './assets/logos/google--standard-2x.png',
        name: 'Christmas',
        width: 272,
        height: 92,
      }
    },
  },

];
