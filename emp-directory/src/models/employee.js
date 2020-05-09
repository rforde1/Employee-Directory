const employeeDB = [{
    empId: 1,
    firstName: "Paul ",
    lastName: "George",
    email: "paul_george@yahoo.com",
    department: "Ball Player",
    startDate: "10/11/2012",
    picture: "https://randomuser.me/api/portraits/med/men/4.jpg"
  },{
    empId: 2,
    firstName: "Drew",
    lastName: "Ould",
    email: "dould1@apple.com",
    department: "Legal",
    startDate: "08/05/2014",
    picture: "https://randomuser.me/api/portraits/med/men/2.jpg"
  },
  {
    empId: 3,
    firstName: "Ann-marie",
    lastName: "Pablos",
    email: "apablos2@sitemeter.com",
    department: "Research and Development",
    startDate: "03/03/2016",
    picture: "https://randomuser.me/api/portraits/med/women/3.jpg"
  },
  {
    empId: 4,
    firstName: "Johnathan",
    lastName: "La Wille",
    email: "jlawille3@soup.io",
    department: "Legal",
    startDate: "12/06/2017",
    picture: "https://randomuser.me/api/portraits/med/men/4.jpg"
  },
  {
    empId: 5,
    firstName: "Rosita",
    lastName: "Newcomb",
    email: "rnewcomb4@soundcloud.com",
    department: "Business Development",
    startDate: "04/02/2014",
    picture: "https://randomuser.me/api/portraits/med/women/8.jpg"
  },
  {
    empId: 6,
    firstName: "Tonie",
    lastName: "Filpo",
    email: "tfilpo5@kickstarter.com",
    department: "Training",
    startDate: "05/10/2019",
    picture: "https://randomuser.me/api/portraits/med/men/6.jpg"
  },
  {
    empId: 7,
    firstName: "Trixie",
    lastName: "Yushkin",
    email: "tyushkin6@newyorker.com",
    department: "Legal",
    startDate: "02/26/2020",
    picture: "https://randomuser.me/api/portraits/med/women/11.jpg"
  },
  {
    empId: 8,
    firstName: "Clarance",
    lastName: "Lancashire",
    email: "clancashire7@discovery.com",
    department: "Human Resources",
    startDate: "10/10/2013",
    picture: "https://randomuser.me/api/portraits/med/men/8.jpg"
  },
  {
    empId: 9,
    firstName: "Addy",
    lastName: "Reinhard",
    email: "areinhard8@bloglovin.com",
    department: "Product Management",
    startDate: "07/08/2011",
    picture: "https://randomuser.me/api/portraits/med/men/23.jpg"
  },
  {
    empId: 10,
    firstName: "Kim",
    lastName: "Bolliver",
    email: "kbolliver9@cam.ac.uk",
    department: "Marketing",
    startDate: "06/06/2017",
    picture: "https://randomuser.me/api/portraits/med/women/28.jpg"
  },
  {
    empId: 11,
    firstName: "Munroe",
    lastName: "Davie",
    email: "mdaviea@livejournal.com",
    department: "Training",
    startDate: "09/14/2018",
    picture: "https://randomuser.me/api/portraits/med/men/34.jpg"
  },
  {
    empId: 12,
    firstName: "Sacha",
    lastName: "Dooland",
    email: "sdoolandb@adobe.com",
    department: "Research and Development",
    startDate: "06/29/2014",
    picture: "https://randomuser.me/api/portraits/med/women/34.jpg"
  },
  {
    empId: 13,
    firstName: "Rania",
    lastName: "Bettison",
    email: "rbettisonc@zdnet.com",
    department: "Training",
    startDate: "06/07/2015",
    picture: "https://randomuser.me/api/portraits/med/women/35.jpg"
  },
  {
    empId: 14,
    firstName: "Zenia",
    lastName: "Crellin",
    email: "zcrellind@yahoo.com",
    department: "Support",
    startDate: "09/17/2014",
    picture: "https://randomuser.me/api/portraits/med/women/87.jpg"
  },
  {
    empId: 15,
    firstName: "Romola",
    lastName: "Sheehan",
    email: "rsheehane@simplemachines.org",
    department: "Business Development",
    startDate: "07/02/2015",
    picture: "https://randomuser.me/api/portraits/med/men/15.jpg"
  },
  {
    empId: 16,
    firstName: "Elane",
    lastName: "Bottom",
    email: "ebottomf@4shared.com",
    department: "Marketing",
    startDate: "07/26/2018",
    picture: "https://randomuser.me/api/portraits/med/women/16.jpg"
  },
  {
    empId: 17,
    firstName: "Ned",
    lastName: "Gurley",
    email: "ngurleyg@tumblr.com",
    department: "Services",
    startDate: "03/28/2018",
    picture: "https://randomuser.me/api/portraits/med/men/17.jpg"
  },
  {
    empId: 18,
    firstName: "Harrie",
    lastName: "Stoute",
    email: "hstouteh@meetup.com",
    department: "Engineering",
    startDate: "02/17/2014",
    picture: "https://randomuser.me/api/portraits/med/men/18.jpg"
  },
  {
    empId: 19,
    firstName: "Jandy",
    lastName: "Theaker",
    email: "jtheakeri@boston.com",
    department: "Product Management",
    startDate: "11/25/2014",
    picture: "https://randomuser.me/api/portraits/med/women/19.jpg"
  },
  {
    empId: 20,
    firstName: "Luce",
    lastName: "Delleschi",
    email: "ldelleschij@behance.net",
    department: "Business Development",
    startDate: "03/08/2013",
    picture: "https://randomuser.me/api/portraits/med/women/20.jpg"
  },
  {
    empId: 21,
    firstName: "Mariska",
    lastName: "Pumphrey",
    email: "mpumphreyk@amazon.com",
    department: "Support",
    startDate: "05/12/2011",
    picture: "https://randomuser.me/api/portraits/med/women/21.jpg"
  },
  {
    empId: 22,
    firstName: "Willa",
    lastName: "Van der Krui",
    email: "wvanderkruil@census.gov",
    department: "Marketing",
    startDate: "07/30/2011",
    picture: "https://randomuser.me/api/portraits/med/women/22.jpg"
  },
  {
    empId: 23,
    firstName: "Kristen",
    lastName: "Bag",
    email: "kbag@skyrock.com",
    department: "Resources",
    startDate: "01/14/2018",
    picture: "https://randomuser.me/api/portraits/med/women/23.jpg"
  },
  {
    empId: 24,
    firstName: "Bram",
    lastName: "Fieldhouse",
    email: "bfieldhousen@marriott.com",
    department: "Training",
    startDate: "06/14/2013",
    picture: "https://randomuser.me/api/portraits/med/men/23.jpg"
  },
  {
    empId: 25,
    firstName: "Candy",
    lastName: "Andles",
    email: "cand@raphic.com",
    department: "Marketing",
    startDate: "11/08/2014",
    picture: "https://randomuser.me/api/portraits/med/men/91.jpg"
  },
  {
    empId: 26,
    firstName: "Zero",
    lastName: "Long",
    email: "zlong@yahoo.com",
    department: "Management",
    startDate: "09/17/2014",
    picture: "https://randomuser.me/api/portraits/med/women/97.jpg"
  }];


  module.exports = employeeDB