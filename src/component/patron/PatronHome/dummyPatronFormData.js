import garbagePhoto1 from '../../../images/garbage_photo_1.jpg';
import garbagePhoto2 from '../../../images/garbage_photo_2.jpg';
import garbagePhoto3 from '../../../images/garbage_photo_3.jpg';

const dummyPatronFormData = [
    {
        _id: 1,
        streetAddress: "1419th Avenue",
        city: "Edmonton",
        province: "Alberta",
        zipCode: "T5J3P4",
        selectedFile: garbagePhoto1,
        createdAt: "2021-06-15T21:45:05.476Z",
        myPost: false,
        display: true,
    },
    {
        _id: 2,
        streetAddress: "2343th Avenue",
        city: "Halifax",
        province: "Nova Scotia",
        zipCode: "T0C2H0",
        selectedFile: garbagePhoto2,
        createdAt: "2021-06-15T21:49:05.476Z",
        myPost: false,
        display: true,
    },
    {
        _id: 3,
        streetAddress: "1419th Avenue",
        city: "Toronto",
        province: "Ontario",
        zipCode: "N7T4C8",
        selectedFile: garbagePhoto3,
        createdAt: "2021-06-15T21:58:05.476Z",
        myPost: false,
        display: true,
    },
];

export default dummyPatronFormData;