import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { useParams } from "react-router-dom";
import { db, storage } from "../../config/firebase";

export function MapKML() {
  const [contracts, setContracts] = useState<any>([]);
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

  const kml = workData.filter((item: any) => {
    return item.id === params.id;
  });
  let urlTeste = "";
  if (kml) {
    const geoJsonRef = storage.ref(
      "KML/PA/ALENQUER/16-2022/rede_antiga.geojson"
    );

    geoJsonRef
      .getDownloadURL()
      .then((url) => (urlTeste = url))
      .catch((error) => console.error(error));
  }

  // useEffect(() => {
  //   fetch(urlTeste)
  //     .then((response) => response.json())
  //     .then((data) => console.log("teste", data))
  //     .catch((error) => console.error(error));
  // }, [kml]);

  const layerStylePara = {
    id: "maine0",
    type: "fill",
    source: "maine",
    layout: {},
    paint: {
      "fill-opacity": 0.1,
    },
  };

  return (
    <>
      <ReactMapGL
        mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzRuOHpsMTRqNDNvb3pjMG52M2cxNyJ9.UGOW9fwC70K9dNuX23SBdQ"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        cooperativeGestures={true}
      ></ReactMapGL>
    </>
  );
}
