import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { useParams } from "react-router-dom";
import { db, storage } from "../../config/firebase";
import { GeoJsonObject } from 'geojson';

import rede from "../../geoJson/NR-10.geojson"


export function MapKML() {
  const [contracts, setContracts] = useState<any>([]);
  const [geojsonData, setGeojsonData] = useState<any>(null);
  const [viewport, setViewport] = useState({});
  const params = useParams();
  const [workData, setWorkData] = useState<any>([]);



  useEffect(() => {
    async function getContracts() {
      const collectionRef = doc(
        db,
        "contracts",
        `${window.localStorage.getItem("contrato")}`
      );
      // const collectionRef = collection(db, "contracts");
      const querySnapshot = await getDoc(collectionRef);
      setContracts(querySnapshot.data());
    }
    getContracts();
  }, []);

  useEffect(() => {
    async function kml() {
      if (contracts) {
        const workQ = query(
          collection(
            db,
            `contracts/${window.localStorage.getItem("contrato")}/kmls`
          )
        );
        const workDetails = await getDocs(workQ);
        setWorkData(
          workDetails.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
    }

    kml();
  }, [contracts]);

  
  useEffect(() =>{
    const geojson = workData.filter((item: any) => item.id === params.id)
    console.log("geosjon",geojson)
    async function getGeoJSON() {
  
      // Referência ao arquivo no armazenamento do Firebase
      const geoJSONRef = ""
      fetch(geojson[0].geojson)
          .then(response => response.json())
          .then(data => setGeojsonData(data))
          .catch(error => console.log(error));
      

    
  }
  getGeoJSON()
  },[workData])

  const rede2 = {
    id: "line-layer",
    type: "line",
    source: "line-source",
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      //  "fill-color": " #F4F3F1"
      "line-color": "#11b4da",
      'line-width': 3
    },
    
  } as any;

  console.log("teste", geojsonData)

  return (
    <section style={{width: "100vw", height: "100vh"}}>
      <ReactMapGL
        initialViewState={{
          latitude: -1.9450735,
          longitude: -54.7422771,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
        {...viewport}
        
        cooperativeGestures={true}
      >
        <Source id="line-layer" type="geojson" lineMetrics data={geojsonData}>
          <Layer {...rede2} />
        </Source>
      </ReactMapGL>
    </section>
  );
}
