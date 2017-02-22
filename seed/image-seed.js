const images = [
  {
    title: 'Blue Poles',
    url: 'https://www.brooklynmuseum.org/assets/system-images/made/assets/system-images/remote/https_d1lfxha3ugu3d4.cloudfront.net/exhibitions/images/2016_Pretty_Dirty_Marilyn_Minter_Blue_Poles_2000w_600_494.jpg',
    EventId: 1,
  },
  {
    title: 'Weathersby',
    url: 'http://www.minusspace.com/weathersby-500.jpg',
    EventId: 2,
  },
  {
    title: 'Body Meets Dress - Dress Meets Body',
    url: 'http://www.metmuseum.org/-/media/Images/Exhibitions/2017/Rei%20Kawakubo/ReiKawakubo_DetailPage_1200x1280_111016_v1.jpg',
    EventId: 3,
  },
  {
    title: 'Dyslexia',
    url: 'http://iscp-nyc.org/wp-content/uploads/2017/01/G-2.jpeg',
    EventId: 4,
  },
  {
    title: 'Secrets of Leaves',
    url: 'http://www.artfixdaily.com/images/cache/Feb2_tarver.jpg',
    EventId: 5,
  },
  {
    title: 'Hattie_McDaniel',
    url: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDkvMjcvN3doM25kbGZpYl9IYXR0aWVfTWNEYW5pZWwuanBnIl0sWyJwIiwiY29udmVydCIsIi1yZXNpemUgMjAwMHgyMDAwXiAtZ3Jhdml0eSBDZW50ZXIgLWV4dGVudCAyMDAweDIwMDAiXV0/Hattie_McDaniel.jpg?sha=9aec7879e65953f3',
    EventId: 6,
  },
  {
    title: 'Alchemy',
    url: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1947/01/76.2553.150_ph_web.jpg?w=870',
    EventId: 7,
  },
  {
    title: 'Spent Flower',
    url: 'https://www.pratt.edu/tiny_mce/plugins/imagemanager/files/Heaton--Spent_Flower%2C_2015.jpg',
    EventId: 8,
  },
  {
    title: 'Untitled',
    url: 'http://www.sva.edu/uploads/assets/headerslideitem/735x410/784ff9a855c180061315bceba5b8b3023761c923.jpeg',
    EventId: 9,
  },
  {
    title: 'Hub | NYC',
    url: 'http://www.marlboroughgallery.com/image_assets/artworks/6179/full/Jacklin__Hub_1_NYC_(email)__2016__oil_on_canvas__60_x_54_in.__NON_58.647.jpg',
    EventId: 10
  },
  {
    title: 'Pale Moon Over Passion Flowers',
    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNkntnnFtWi089CZRVHOR41_QkgnQkctNy8URdLd1y-rNXFtdBKA',
    EventId: 11
  },
  {
    title: 'This Strange Embrace',
    url: 'http://www.artnet.com/WebServices/images/ll1074436llgK6FB3CfDrCWvaHBOAD/gareth-mason-this-strange-embrace.jpg',
    EventId: 12
  },
  {
    title: 'Giddy',
    url: 'https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/56cb334384184e52558b4568/4bfe504dac8695251d19e509d1a04318.jpeg',
    EventId: 13
  },
  {
    title: 'Japan Blue',
    url: 'https://a.1stdibscdn.com/archivesE/upload/a_402/36_15/japan_blue/Japan_Blue_l.jpeg',
    EventId: 14
  },
  {
    title: 'Steppenwolf',
    url: "http://www.artnet.com/WebServices/images/ll1100766llgQyjR3CfDWqOHqOrCAD/steppenwolf.jpg",
    EventId: 15
  },
  {
    title: 'Night Sky #20',
    url: 'http://www.artnet.com/WebServices/images/ll1101083llgCTfDWqOHqOrCAD/night-sky-20,-.jpg',
    EventId: 16
  },
  {
    title: 'Untitled',
    url: 'http://www.artnet.com/WebServices/images/ll1101116llgCTfDWqOHqOrCAD/untitled,-.jpg',
    EventId: 17
  },
  {
    title: 'NO EXIT',
    url: 'http://www.artnet.com/WebServices/images/ll1096572llgeEfDWqOHqOrCAD/no-exit.jpg',
    EventId: 18
  },
  {
    title: 'Kiss the Sky I',
    url: 'http://www.artnet.com/WebServices/images/ll1095721llg8fDrCWSXHXJAD/tam-van-tran-kiss-the-sky-i.jpg',
    EventId: 19
  },
  {
    title: 'Nuggets',
    url: 'http://www.artnet.com/WebServices/images/ll1095607llg8fDrCWSXHXJAD/tracy-miller-nuggets.jpg',
    EventId: 20
  },
  {
    title: 'Atlas',
    url: 'http://www.artnet.com/WebServices/images/ll1099093llgeVfDWqOHqOrCAD/annabeth-rosen-atlas,-.jpg',
    EventId: 21
  }, 
  {
    title: 'Cotton Candy',
    url: 'http://www.artnet.com/WebServices/images/ll1100575llgU4jR3CfDrCWSXHXJAD/noa-charuvi-cotton-candy.jpg',
    EventId: 22
  }, 
  {
    title: 'untitled "Oh Time, arrest your flight"',
    url: 'https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/575562f5cfaf34762c8b4568/274c1dcbc0a9b624a008aa8f57241903.jpeg',
    EventId: 23
  },
  {
    title: 'Jones Street',
    url: 'http://www.artnet.com/WebServices/images/ll1100524llguTfDWqOHqOrCAD/bertrand-meniel-jones-street,-.jpg',
    EventId: 24
  },
  {
    title: 'Fire Wall',
    url: 'http://www.artnet.com/WebServices/images/ll1099653llgzzzCfDrCWSXHXJAD/barbara-earl-thomas-fire-wall.jpg',
    EventId: 25
  },
  {
    title: 'Peach Tree',
    url: 'http://www.artnet.com/WebServices/images/ll1056765llg1qmtfDWqOHqOrCAD/shen-wei-peach-tree,-.jpg',
    EventId: 26
  },
  {
    title: 'Woman Pursued by Her Possessions',
    url: 'http://www.artnet.com/WebServices/images/ll1100989llg6afDWqOHqOrCAD/alex-kanevsky-woman-pursued-by-her-possessions,-.jpg',
    EventId: 27
  },
  {
    title: 'Fereshtini #9',
    url: 'http://www.artnet.com/WebServices/images/ll1092296llgSfDWqOHqOrCAD/siona-benjamin-fereshtini-9,-.jpg',
    EventId: 28
  },
  {
    title: 'Chick',
    url: 'http://www.artnet.com/WebServices/images/ll1099380llg4RfDrCWSXHXJAD/jane-hammond-chick.jpg',
    EventId: 29
  },
  {
    title: 'You Here',
    url: 'http://www.lesleyheller.com/system/exhibition_images/images/325/col9/JHeeMun_YouHere_2014-16.jpg?1481833218',
    EventId: 30
  },
  {
    title: 'Taxi Driver',
    url: 'http://www.movingimage.us/images/exhibitions/media/screen_grab_scorsese_deniro_taxidriver-detail-main.jpg',
    EventId: 31
  },
  {
    title: 'Selfie',
    url: 'http://joancornella.net/f/MjAxNS8xMi9zZWxmaWUuanBnfHw1MDB8fDgwMHx8dGh1bWJ8fDA/selfie.jpg?v2',
    EventId: 32
  }
];

module.exports = images;
