import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import './shop-detail.css'
import "@reach/combobox/styles.css";
import {ShopFooter} from "./ShopFooter";
const MAP_KEY ='AIzaSyBXIXkgYyr6JzmxB2MlvZc4R4CL6nSqxn4'
const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "540px",
};
const options = {
    zoomControl: true,
};
const center = {
    lat: 37.555340,
    lng: 126.932604,
};
export const ShopLocation = () => {
    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region: 'kr'
    });
    const [ selected, setSelected ] = useState({})
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    const storeList = [
        {
            name: '더 브래드 블루 신촌점',
            location: {lat:37.555340, lng: 126.932604},
            address: '서울특별시 마포구 동교동 번지 1층 186-12 연지빌딩',
            image : 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=307&simg=/content/image/2019/10/28/20191028000134_0.jpg'
        }
    ];
    return (
        <>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom = {15}
                center = {center}
                options={options}
                onLoad = {onMapLoad}
            >
                {
                    storeList.map((store, i) => (
                        <Marker
                            key={i}
                            position={store.location}
                        >
                        </Marker>
                    ))
                }
                {
                    storeList.map((store,i) => (
                        <Marker
                            key={i}
                            position={store.location}
                            onClick={()=>setSelected(store)}
                            icon={
                                {
                                    scaledSize : new window.google.maps.Size(40,40)}
                            }
                        >
                        </Marker>
                    ))
                }
                {
                    selected.location ? (
                            <InfoWindow
                                position={selected.location}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <div ClassName="infowindow">
                                    <p>{selected.name}</p>
                                    <img src={selected.image} className="small-image" alt="rental"/>
                                    <p>주소: {selected.address}</p>
                                </div>
                            </InfoWindow>
                        )
                        :null
                }
            </GoogleMap>


        </>

    )
};