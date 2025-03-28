import USDA from './USDA/USDA';
import TELESCOPE from './TELESCOPE/TELESCOPE';
import BAG from './BAG/BAG';
import CIRCUIT_PINE from './CIRCUIT_PINE';
import Christmas2024 from './Christmas2024';
import PrivacyPolicy from '../pages/blog/privacy_policy';
import Cyberdeck from './Cyberdeck';
import Yaris from './Yaris';

export default {
    USDA: {
        title: "USDA Internship",
        post: USDA,
        cover_photo: USDA.COVER_PHOTO,
    },
    CIRCUIT_PINE:{
        title:"Circuit Pine",
        post:CIRCUIT_PINE,
        cover_photo:CIRCUIT_PINE.COVER_PHOTO
    },
    TELESCOPE: {
        title: "Telescope Project",
        post: TELESCOPE,
        cover_photo: TELESCOPE.COVER_PHOTO,
    },
    RADIO: {
        title: "Offline Radio Mesh Network",
        post: TELESCOPE,
        cover_photo: TELESCOPE.COVER_PHOTO,
    },
    BAG: {
        title: "EDC Bag",
        post: BAG,
        cover_photo: BAG.COVER_PHOTO,
    },
    Christmas2024:{
        title:"Christmas Gift Ideas 2024",
        post:Christmas2024,
        cover_photo:Christmas2024.COVER_PHOTO,
    },
    PrivacyPolicy:{
        title:"Privacy Policy",
        // post:Christmas2024,
        // cover_photo:Christmas2024.COVER_PHOTO,
    },
    Cyberdeck:{
        title:"Cyberdeck",
        post: Cyberdeck,
        cover_photo: Cyberdeck.COVER_PHOTO,
    },
    Yaris:{
        title:"Yaris Shelf",
        post: Yaris,
        cover_photo: Yaris.COVER_PHOTO,
    }
}