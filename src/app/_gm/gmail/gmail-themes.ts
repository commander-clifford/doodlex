import { GmailTheme } from './gmail-theme';
export const GMAILTHEMES: GmailTheme[] = [
  {
    name: 'Standard',
    thumbNail: {
      url: './assets/gmail-themes/default_theme_thumbnail.png',
    },
    primaryColor: null,
    secondaryColor: null,
    primaryColorClear: null,
    styles: {
      background: null,
      assets: null,
    },
  },
  {
    name: 'Standard + Doodle',
    thumbNail: {
      url: './assets/gmail-themes/default_theme_thumbnail.png',
    },
    primaryColor: null,
    secondaryColor: null,
    primaryColorClear: null,
    styles: {
      background: null,
      assets: null,
    },
  },




  {
    name: 'Dark',
    thumbNail: {
      url: './assets/gmail-themes/dark_theme_thumbnail.png',
    },
    primaryColor: '#ffffff',
    secondaryColor: '#eeeeee',
    primaryColorClear: 'rgba(255,255,255,0.7)',
    styles: {
      background: {
        background: '#111111',
      },
      assets: null,
    },
  },
  {
    name: 'Sky Blue',
    thumbNail: {
      url: './assets/gmail-themes/skyblue_theme_thumbnail.png',
    },
    primaryColor: '#ffffff',
    secondaryColor: '#eeeeee',
    primaryColorClear: 'rgba(0,0,0,0.7)',
    styles: {
      background: {
        background: '#B2D5EF',
      },
      assets: null,
    },
  },



  {
    name: 'Flowers',
    thumbNail: {
      url: './assets/gmail-themes/flowers_theme_thumbnail.png',
    },
    primaryColor: '#202124',
    secondaryColor: '#5F6368',
    primaryColorClear: 'rgba(255,255,255,0.7)',
    styles: {
      background: {
        background: '#ffffff',
      },
      assets: [
        { background: 'url(./assets/gmail-themes/flowers_bg.png)' },
      ],
    },
  },


  {
    name: 'Mario',
    thumbNail: {
      url: './assets/gmail-themes/mario_theme_thumbnail.png',
    },
    primaryColor: '#202124',
    secondaryColor: '#5F6368',
    primaryColorClear: 'rgba(255,255,255,0.7)',
    styles: {
      background: {
        background: '#42b2da',
      },
      assets: [
        { background: 'url(ssl.gstatic.com/ui/v1/icons/mail/images/2/5/highscore/day_hills_top.png) repeat-x' },
        { background: 'url(//ssl.gstatic.com/ui/v1/icons/mail/images/2/5/highscore/day_background.png) 0 -70px repeat-x' },
        { background: 'url(//ssl.gstatic.com/ui/v1/icons/mail/images/2/5/highscore/day_hills_footer.png) left bottom repeat-x' },
      ],
    },
  },




  {
    name: 'Bus Stop',
    thumbNail: {
      url: './assets/gmail-themes/bus-stop_thumbnail.png',
    },
    primaryColor: '#202124',
    secondaryColor: '#5F6368',
    primaryColorClear: 'rgba(255,255,255,0.7)',
    styles: {
      background: {
        background: '#afdbe5',
      },
      assets: [
        { background: 'url("./assets/gmail-themes/bus-stop/header_bg.jpg") no-repeat 100% 0' },
        { background: 'url("./assets/gmail-themes/bus-stop/footertile_bg.jpg") repeat-x left bottom' },
        { background: 'url("./assets/gmail-themes/bus-stop/footer_bg.gif") no-repeat bottom' },
      ],
    },
  },
  {
    name: 'Arizona Rocks',
    thumbNail: {
      url: './assets/gmail-themes/az-rocks_theme_thumbnail.jpg',
    },
    primaryColor: '#FFFFFF',
    secondaryColor: '#EEEEEE',
    primaryColorClear: 'rgba(255,255,255,0.16)',
    styles: {
      background: {
        background: 'url("https://lh5.ggpht.com/cEY8_OawWNzn-gEEnAPHrVGCjievGuzoBkdjaPMePDY_UkMQl1v1ersgu4PsMgJlenKtDlZsHYQ=w1680-h1077-p-e365-k-no")'
      },
      assets: null,
    },
  },
];
