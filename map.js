//Map Limits
var corner1 = L.latLng(48.26580006677746, 15.800827952931327),
corner2 = L.latLng(47.95457653497637, 15.438581533090115),
bounds = L.latLngBounds(corner1, corner2);

//Map Initialization
var map = L.map('map', {
  center: [48.17500005457119, 15.588012624535303],
  zoom: 10,
  minZoom: 13,
  maxBounds: bounds
});

//OSM Layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

osm.addTo(map);

var geo = 
{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "stroke": "#000000",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#e45353",
          "fill-opacity": 0.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                15.635304450988768,
                48.20371138241292
              ],
              [
                15.63478946685791,
                48.19882013883662
              ],
              [
                15.642256736755371,
                48.19847687613621
              ],
              [
                15.648951530456541,
                48.19664610288995
              ],
              [
                15.65298557281494,
                48.195930939321656
              ],
              [
                15.654187202453613,
                48.19913479429154
              ],
              [
                15.655946731567381,
                48.19996433122713
              ],
              [
                15.654230117797853,
                48.20087966673985
              ],
              [
                15.64671993255615,
                48.20242425833088
              ],
              [
                15.641355514526367,
                48.20339675506846
              ],
              [
                15.635304450988768,
                48.20371138241292
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#45e86e",
          "fill-opacity": 0.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                15.615606307983398,
                48.18222647734935
              ],
              [
                15.617837905883789,
                48.189665679715304
              ],
              [
                15.605993270874023,
                48.191038952851066
              ],
              [
                15.603418350219725,
                48.181711415682905
              ],
              [
                15.615606307983398,
                48.18222647734935
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                15.615992546081541,
                48.17286871674965
              ],
              [
                15.615348815917969,
                48.16199210914941
              ],
              [
                15.628652572631834,
                48.16224973968234
              ],
              [
                15.628952980041504,
                48.17321215099812
              ],
              [
                15.622944831848145,
                48.17381315539811
              ],
              [
                15.615992546081541,
                48.17286871674965
              ]
            ]
          ]
        }
      }
    ]
  }

  function polystyle(feature) {
    return {
        fillColor: 'orange',
        weight: 2,
        opacity: 1,
        color: 'cyan',  //Outline color
        fillOpacity: 0.4
    };
}

L.geoJson(geo, {style: polystyle}).addTo(map);


