import { v4 as uuidv4 } from "uuid";
import SilverButton from "./silverbutton";
const services = [
  {
    ServiceName: "PREVENTATIVE MAINTENANCE",
    id: uuidv4(),
  },
  {
    ServiceName: "DIAGNOSTICS",
    id: uuidv4(),
  },
  {
    ServiceName: "TIRES",
    id: uuidv4(),
  },
  {
    ServiceName: "ALIGNMENTS",
    id: uuidv4(),
  },
  {
    ServiceName: "BRAKES",
    id: uuidv4(),
  },
  {
    ServiceName: "STEERING & SUSPENSION",
    id: uuidv4(),
  },
  {
    ServiceName: "REMOVE & REPLACE",
    id: uuidv4(),
  },
  {
    ServiceName: "A/C & HEATING",
    id: uuidv4(),
  },
  {
    ServiceName: "ELECTRICAL",
    id: uuidv4(),
  },
  {
    ServiceName: "ECONOMY & LIGHT DUTY DIESEL",
    id: uuidv4(),
  },
  {
    ServiceName: "USED CAR INSPECTIONS",
    id: uuidv4(),
  },
  {
    ServiceName: "ALL SERVICES",
    id: uuidv4(),
  },
];

export default function Services() {
    return (
      <div>
        <ul className="grid grid-cols-2 gap-10 px-32 font-hemautoFontUrbanist text-xl text-hemautoDarkGray font-extrabold">
          {services.map((ServiceNames) => (
            <li key={ServiceNames.id}>
              <SilverButton text={ServiceNames.ServiceName}/> 
            </li>
          ))}
        </ul>
      </div>
    );
}