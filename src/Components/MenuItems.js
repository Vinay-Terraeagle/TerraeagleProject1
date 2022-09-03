export const MenuItems = [
    {
        title: 'Dashboard',
        url:'/Dashboard',
        Cname:'menuDropdown'
        // icnpath:
      },
      {
        title: 'MyPlan',
        url:'/MyPlan',
        Cname:'menuDropdown'
        // icnpath:
      },
      {
        title: 'Resources',
        url:'/Resources',
        Cname:'menuDropdown',
        // icnpath:
        submenu: [
          {
            title: 'Recipe',
            url: '/RecipeView',
          },
          {
            title: 'Leaderboard',
            url: '/Leaderboard',
          },
          {
            title: 'Message',
            url: '/Message',
          },
          {
            title: 'Raise Ticket',
            url: '/RaiseTicket',
          },
        ],
      },
      {
        title: 'Discover',
        url:'/Discover',
        Cname:'menuDropdown'
        // icnpath:
      },
      {
        title: 'Spaces',
        url:'/Spaces',
        Cname:'menuDropdown',
        submenu: [
          {
            title: 'Events',
            url: '/EventsView',
          },
          {
            title: 'Challenges',
            url: '/ChallengesView',
          }
        ]
      },
      
];

