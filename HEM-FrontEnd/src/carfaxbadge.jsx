 import CarFax from './assets/Images/Partners/CarCareServiceCenterBadge.png'

 function CarFaxImg() {
    console.log(CarFax);
    return (
        <img
          className="max-w-[750px]"
          src={CarFax}
          alt="Car Fax Service Center Badge"
        />
    );
 }

 export default CarFaxImg