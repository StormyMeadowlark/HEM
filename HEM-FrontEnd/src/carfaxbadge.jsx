 import CarFax from './assets/Images/Partners/CarCareServiceCenterBadge.png'

 function CarFaxImg() {
    console.log(CarFax);
    return (
        <img
          className="w-1/6"
          src={CarFax}
          alt="Car Fax Service Center Badge"
        />
    );
 }

 export default CarFaxImg