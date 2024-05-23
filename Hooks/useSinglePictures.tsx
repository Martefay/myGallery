"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSinglePictures = (id) => {

    const [detailPictures, setDetailPictures] = useState();

    useEffect(() => {
        getSinglePictures();
    },[id])

  const getSinglePictures = () => {
    GlobalApi.getSinglePictures(id).then(resp => {
        setDetailPictures(resp.data.data[0]);
    });
  }

  return detailPictures;
}

export default useSinglePictures
