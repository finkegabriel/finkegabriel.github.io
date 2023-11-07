import USDA from './USDA/USDA';
import TELESCOPE from './TELESCOPE/TELESCOPE';
import BAG from './BAG/BAG';
import CIRCUIT_PINE from './CIRCUIT_PINE';

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
    }
}