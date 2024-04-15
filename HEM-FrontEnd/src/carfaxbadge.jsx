 import CarFax from './assets/Images/Partners/CarCareServiceCenterBadge.png'

 function CarFaxImg() {
    console.log(CarFax);
    return (
      <div className="flex justify-center">
        <img
          className="w-1/6 object-center"
          src={CarFax}
          alt="Car Fax Service Center Badge"
        />
      </div>
    );
 }

 export default CarFaxImg