import React from 'react';
import '../../App.css';
import ImageSlider from "../sidebar/ImageSlider";
import { SliderData } from '../sidebar/SliderData';
export default function Photos() {
  return (
    <ImageSlider slides={SliderData}/>
  );
}
