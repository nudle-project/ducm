window.DuckcialFirebase = (() => {
  const config = {
    apiKey: 'AIzaSyDb4Ga2NJUj_kgl8mRbBWW85Qtr_8WSTEw',
    authDomain: 'duckcialmediacloud.firebaseapp.com',
    projectId: 'duckcialmediacloud',
    storageBucket: 'duckcialmediacloud.firebasestorage.app',
    messagingSenderId: '34506860554',
    appId: '1:34506860554:web:08a67a3247f1d930de57f3',
    measurementId: 'G-RBF6VMTKMZ'
  };

  const hasPlaceholderConfig = Object.values(config).some((value) => {
    return !value || value.includes('YOUR_');
  });

  if (!window.firebase || hasPlaceholderConfig) {
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
    ready: true,
    config,
    hasPlaceholderConfig,
    auth: typeof firebase.auth === 'function' ? firebase.auth() : null,
    db: typeof firebase.firestore === 'function' ? firebase.firestore() : null,
    storage: typeof firebase.storage === 'function' ? firebase.storage() : null,
    init: () => {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      return true;
    }
  };
})();
