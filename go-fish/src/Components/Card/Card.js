import React from 'react';

const Card = (props) => {

    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }

    const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

    const imgSrc = (images[props.name + '.png'])
    return (
        <div>
            <img src={imgSrc} />
        </div>
    )
}

export default Card