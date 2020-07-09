import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';
import './style.css';



render(<Map center={{ lat: 23.2526, lng: 77.4045 }} zoom={4} />, document.getElementById('root'));
