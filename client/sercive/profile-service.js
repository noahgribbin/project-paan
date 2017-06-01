'use strict';

module.exports = ['$q', '$log', '$http', 'authService', profileService];

function profileService($q, $log, $http, authService) {
  $log.debug('profileService');

  let service = {};
  service.profiles = [];

  service.createProfile = function(profile) {
    $log.debug('profileService.createProfile');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/profile`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, profile, config);
    })
    .then( res => {
      $log.log('profile created');
      let profile = res.data;
      service.profiles.unshift(profile);
      return profile;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.fetchProfile = function(profileID) {
    $log.debug('profileService.fetchProfile');

    let url =  
  };















}
