"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSortPictures = () => {

    const [picturesList, setPicturesList] = useState([]);

    useEffect(() => {
        getPictures();
    }, [])

 const getPictures = () => {
    GlobalApi.getSortPictures().then(resp => {
        setPicturesList(resp.data.data);
    });
 }

 return picturesList;

}

export default useSortPictures