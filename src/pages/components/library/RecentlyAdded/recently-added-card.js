import React, {useState} from "react";
import { Blurhash } from 'react-blurhash';
import { Link } from "react-router-dom";

import "../../../css/lastplayed.css";

 

function RecentlyAddedCard(props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="last-card">
     <Link to={`/item/${props.data.Id}`}>
      <div className="last-card-banner">
        {loaded ? null : <Blurhash hash={props.data.ImageBlurHashes.Primary[props.data.ImageTags.Primary]} width={'100%'}   height={'100%'}/>}
        <img
          src={
            `${
              props.base_url +
                "/Items/" +
                props.data.Id +
                "/Images/Primary?fillHeight=320&fillWidth=213&quality=50"}`
          }
          alt=""
          onLoad={() => setLoaded(true)}
          style={loaded ? { backgroundImage: `url(path/to/image.jpg)` } : { display: 'none' }}
        />
      </div>
    </Link>

      <div className="last-item-details">
        <div className="last-item-name"> {props.data.Name}</div>
      </div>

      
    </div>
  );
}

export default RecentlyAddedCard;
