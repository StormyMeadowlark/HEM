 import CarFax from './assets/Images/Partners/CarCareServiceCenterBadge.png'

 function CarFaxImg() {
    console.log(CarFax);
    return (
        <img
          className="max-w-[500px]"
          src={CarFax}
          alt="Car Fax Service Center Badge"
        />
    );
 }

 export default CarFaxImg