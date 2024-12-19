import React, { Suspense, useEffect, useRef }   from 'react';
import { useNavermaps }                         from 'react-naver-maps';
import PinDropIcon                              from '@mui/icons-material/PinDrop';
import './Location.css';

function LocationContent() 
{
    const mapInstance   = useRef(null);
    const navermaps     = useNavermaps();
    const mapRef        = useRef(null);
    
    useEffect(() => {
        if (navermaps && mapRef.current) 
        {
            if (!mapInstance.current) 
            {
                mapInstance.current = new navermaps.Map(mapRef.current, {
                    center: new navermaps.LatLng(36.359427, 127.380055),
                    zoom: 15,
                });

                const marker = new navermaps.Marker({
                    position: new navermaps.LatLng(36.359427, 127.380055),
                    map: mapInstance.current,
                });

                const infowindow = new navermaps.InfoWindow({
                    content: `
                        <div style="padding:5px 10px; 
                        font-size:12px; 
                        color:#333; 
                        background-color:white; 
                        border-radius:8px;">
                        대전 서구 청사로 148
                        </div>
                    `,
                });

                navermaps.Event.addListener(marker, 'click', () => {
                    if (infowindow.getMap()) 
                    {
                        infowindow.close();
                    } 
                    else 
                    {
                        infowindow.open(mapInstance.current, marker);
                    }
                });
            }
        }
    }, [navermaps]);

    return <div ref={mapRef} className="map-container" />;
}

function Location() 
{
    return (
        <div className="Location">
            <div>
                <PinDropIcon className="header-icon" sx={{fontSize: 50}}/>
                <h2 className="header-title">찾아오시는 길</h2>
                <hr className="section-divider" />
                <Suspense fallback={<p>Loading Map...</p>}>
                    <LocationContent />
                </Suspense>
                <h4 className="company-title">티엠지코리아</h4>
                <p className="company-address">대전 서구 청사로 148 309호</p>
                <hr className="section-divider" />
                <h4 className="company-title">대표: 김태규</h4>
                <p className="company-contact">010-1234-5678</p>
            </div>
        </div>
    );
}

export default Location;
