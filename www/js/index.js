document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.ACCESS_FINE_LOCATION, function (status) {
        if (status.hasPermission) {
            console.log('Permiso de geolocalización concedido');            
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
            console.warn('Permiso de geolocalización no concedido');
            alert('Para funcionar correctamente, esta aplicación necesita acceso a la geolocalización.');
        }
    }, function (error) {
        console.error('Error al solicitar permiso de geolocalización:', error);
    });
}

function onSuccess(position) {
    if (position && position.coords) {
        var latitude = position.coords.latitude.toFixed(6);
        var longitude = position.coords.longitude.toFixed(6); 
        
       
        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;
    } else {
        console.error('No se pudo obtener la ubicación correctamente.');
        alert('No se pudo obtener la ubicación correctamente. Verifica la configuración del navegador o permisos de geolocalización.');
    }
}

function onError(error) {
    console.error('Error getting location', error);
    alert('Error getting location: ' + error.message);
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);


