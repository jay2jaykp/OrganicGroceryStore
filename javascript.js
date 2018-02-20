

//google map
//Google Maps
function initMap() {
    var center1 = {lat: 43.664764, lng:  -79.367940};
    var center2 = {lat: 43.6558216, lng: -79.4118205};
    var map1 = new google.maps.Map(document.getElementById('CabMap'), {
        zoom: 18,
        center: center1
    }); 
    var map2 = new google.maps.Map(document.getElementById('MagMap'), {
        zoom: 18,
        center: center2
    });
    var marker1 = new google.maps.Marker({
        position: center1,
        map: map1
    });
    var marker2 = new google.maps.Marker({
        position: center2,
        map: map2
    });
}

//instafeed 
var userFeed = new Instafeed({
    get: 'user',
    target: 'offer',
    userId: '6950905746',
    accessToken: '6950905746.b1cd5e0.329737350ef4441fb3ac70df5f1457c3',
    clientId: 'b1cd5e0350c245e18308e12da0b8f9fd',
    template: '<a class="col-sm-6" href="{{link}}" target="_blank"><img class="w3-image w3-round" src="{{image}}" style="padding:20px"/></a>',
    resolution: 'standard_resolution',
    link: true,
    limit: 3,
    filter: function(image){
        return image.tags.indexOf('offer') >= 0;
    }
});

var userFeed2 = new Instafeed({
    get: 'user',
    target: 'offer2',
    userId: '7136543004',
    accessToken: '7136543004.3d103c4.4984b2cea0554d1c85f5c4121bdf9ef2',
    clientId: '3d103c470c3c4dbfa5300f03665e5f20',
    template: '<a class="col-sm-6" href="{{link}}" target="_blank"><img class="w3-image w3-round" src="{{image}}" style="padding:20px"/></a>',
    resolution: 'standard_resolution',
    link: true,
    limit: 3,
    filter: function(image){
        return image.tags.indexOf('offer') >= 0;
    }
});