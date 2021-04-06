import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";

const ImageList =(props) => {
    const img = props.images.map((img) => {
        return <ImageCard image={img} key={img.id}/>
    })
    return <div className={'image-list'}>{img}</div>
}

export default ImageList;