import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: "dzzz9qoia", // Add in your .env file
    api_key: "732814373897312",       // Add in your .env file
    api_secret: "2QYyym546eYi91sRKuEVUwS_VIw"  // Add in your .env file
});

export default cloudinary;
