declare module "*.geojson" {
  const value: any;
  export default value;
} 

interface FeatureCollection<
    G extends Geometry | null = Geometry,
    P = GeoJsonProperties
> extends GeoJsonObject {}