import axios from 'axios';
import React, { useState, useEffect } from 'react';
// Assume fetchImagesFromPinata is a function you've created to fetch .png images


require('dotenv').config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

//const axios = require('axios');

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};





// Function to fetch all pinned items and filter for PNG images
export const fetchImagesFromPinata = async () => {
  const url = `https://api.pinata.cloud/data/pinList?status=pinned`;
  
  try {
      const response = await axios.get(url, {
          headers: {
              pinata_api_key: key,
              pinata_secret_api_key: secret,
          }
      });
      
      console.log("Raw response from Pinata:", response); // Add this line
      
      const images = response.data.rows.filter(item => 
        item.metadata && item.metadata.name && item.metadata.name.endsWith('.png')
    ).map(item => {
          return {
              url: `https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`,
              name: item.metadata.name // This is optional, depending on your needs
          };
      });

      return images;
  } catch (error) {
      console.error('Error fetching images from Pinata:', error);
      return [];
  }
};