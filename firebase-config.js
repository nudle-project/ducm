window.DuckcialFirebase = (() => {
  const config = {
    apiKey: 'AIzaSyDb4Ga2NJUj_kgl8mRbBWW85Qtr_8WSTEw',
    authDomain: 'duckcialmediacloud.firebaseapp.com',
    projectId: 'duckcialmediacloud',
    storageBucket: 'duckcialmediacloud.appspot.com',
    messagingSenderId: '775760693871',
    appId: '1:775760693871:web:8d7f11a6d5ac37d37ebd13'
  };

  const hasPlaceholderConfig = Object.values(config).some((value) => {
    return !value || value.includes('YOUR_');
  });

  if (!window.firebase) {
    return {
      ready: false,
      config,
      hasPlaceholderConfig,
      auth: null,
      db: null,
      storage: null,
      init: () => false
    };
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  return {
    ready: !hasPlaceholderConfig,
    config,
    hasPlaceholderConfig,
    auth: typeof firebase.auth === 'function' ? firebase.auth() : null,
    db: typeof firebase.firestore === 'function' ? firebase.firestore() : null,
    storage: typeof firebase.storage === 'function' ? firebase.storage() : null,
    init: () => {
      if (hasPlaceholderConfig) return false;
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      return true;
    }
  };
})();
