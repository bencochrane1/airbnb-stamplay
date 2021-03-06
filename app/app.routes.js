angular.module('app.routes', [])
.config(AppRoutes);

function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'app/components/home/home.html'
  })

  $stateProvider
  .state('homeSearchResults', {
    url: '/search-results',
    controller: 'HomeCtrl as home',
    templateUrl: 'app/components/home/home-search-results.html'
  })  

  .state('home-show', {
    url: '/home-show',
    controller: 'HomeShowCtrl as homeshow',
    templateUrl: 'app/components/home-show/home-show.html'
  })  

  .state('room', {
    url: '/room',
    views: {
      nav: { templateUrl: 'app/components/nav/nav.html' },
      content: { templateUrl: 'app/components/room/room.html' }
    },
    controller: 'RoomCtrl as room'
  })

  .state('booking', {
    url: '/booking',
    views: {
      nav: { templateUrl: 'app/components/nav/nav.html' },
      content: { templateUrl: 'app/components/booking/booking.html' }
    },
    controller: 'BookingCtrl as booking'
  })

  .state('authenticate', {
    url: '/authenticate',
    views: {
      nav: { templateUrl: 'app/components/nav/nav.html' },
      content: { templateUrl: 'app/components/authenticate/authenticate.html' }
    },
    controller: 'AuthenticateCtrl as authenticate'
  })

  .state('profile', {
    url: '/profile',
    views: {
      nav: { templateUrl: 'app/components/nav/nav.html' },
      content: { templateUrl: 'app/components/profile/profile.html' }
    },
    controller: 'ProfileCtrl as profile'
  })

  .state('admin', {
    url: '/admin',
    views: {
      nav: { templateUrl: 'app/components/nav/nav.html' },
      content: { templateUrl: 'app/components/admin/admin.html' }
    },
    controller: 'AdminCtrl as admin'
  });
}
