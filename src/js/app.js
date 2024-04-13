
var deferredPrompt;
var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

function displayConfirmNotification() {
  if ('serviceWorker' in navigator) {
    var options = {
      body: "You successfully subscribed to our Notification service!",
      icon: '/src/images/icons/app-icon-96x96.png',
      //image: '/src/images/sf-boat.jpg',
      //dir: 'ltr',
      //lang: 'en-US',
      //vibrate: [100, 50, 200],
      //badge: '/src/images/icons/app-icon-96x96.png',
      //tag: 'confirm-notification',
      //renotify: true,
      actions: [
        {
          action: 'confirm',
          title: 'Okay',
          icon: '/src/images/icons/app-icon-96x96.png'
        },
        {
          action: 'cancel',
          title: 'Cancel',
          icon: '/src/images/icons/app-icon-96x96.png'
        }
      ]
    }
    navigator.serviceWorker.ready
      .then(function(swreg) {
        swreg.showNotification('Successfully subscribed (from SW)', options)
      })
  }
}

function configurePushSub() {
  if (!('serviceWorker' in navigator)) {
    return
  }
  var reg;
  navigator.serviceWorker.ready
    .then(function (swreg) {
      reg = swreg
      return swreg.pushManager.getSubscription()
    })
    .then(function(sub) {
      console.log("sub", sub)
      if (sub === null) {
        // Create a new subscription
        var vapidPublicKey = "BIdIoK5fs_Sf1Js-sH_UBtBc2h_T0vIFVimJK5pNHQ5m_V56x_jgO3fdyVvoSptdiM9_17F2r1t65iPzWbTPflM"
        var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey)
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidPublicKey
        })
      } else {
        document.getElementById("some_info").innerText = JSON.stringify(sub)
        // We have a subscription
      }
    })
    .then(function(newSub) {
      console.log("newSub", JSON.stringify(newSub))
      if (newSub) {
        document.getElementById("some_info").innerText = JSON.stringify(newSub)
      }
    })
    .catch(function(err) {
      console.log(err)
    })
}

function askForNotificationPermission() {
  Notification.requestPermission(function(result) {
    console.log('User Choice', result);
    if (result !== 'granted') {
      console.log('No notification permission granted!');
    } else {
      configurePushSub()
      //displayConfirmNotification()
    }
  });
}

if ('Notification' in window && 'serviceWorker' in navigator) {
  for (var i = 0; i < enableNotificationsButtons.length; i++) {
    enableNotificationsButtons[i].style.display = 'inline-block';
    enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission);
  }
}