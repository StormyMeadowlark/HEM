import GreenCallToAction from './assets/Images/Icons/GreenCTA.png'

function GreenCTA() {
   console.log(GreenCallToAction);
   return (
       <img
        className="object-cover w-full h-full"
         src={GreenCallToAction}
         alt="Green Call to Action Images"
       />
   );
}

export default GreenCTA