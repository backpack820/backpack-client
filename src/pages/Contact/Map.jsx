import React from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { statesData } from "../../data.js";

const center = [23.741491858820428, 90.41142923969662];
const Map = () => {
  return (
    <div className="pb-5">
      <p className="text-center py-5 text-2xl font-semibold">FIND US ON MAPS</p>
      <div className="flex items-center justify-center">
        <MapContainer center={center} zoom={10} style={{ width: "70vw", height: "50vh" }}>
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mnWTCe07t4lcRMMK6gtE"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {statesData.features.map((state) => {
            const cordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
            return (
              <Polygon
                pathOptions={{
                  fillColor: "#FD8D3C",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  color: "white",
                }}
                positions={cordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 5,
                      dashArray: "",
                      color: "#666",
                      fillColor: "#FACDCC",
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "3",
                      color: "white",
                      fillColor: "#FD8D3C",
                    });
                  },
                  click: (e) => {},
                }}
              ></Polygon>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
