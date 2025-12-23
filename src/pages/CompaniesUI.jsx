import lumos from "../assets/images/lumos.png";
import techm from "../assets/images/techm.png";
import indusind from "../assets/images/indusind2.png";
import onepone from "../assets/images/onepone.png";

const cImages = [
  {
    id: 1,
    img: lumos,
  },
  {
    id: 2,
    img: techm,
  },
  {
    id: 3,
    img: indusind,
  },
  {
    id: 4,
    img: onepone,
  },
];

export default function CompaniesUI() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="  p-4 w-[500px] bg-white rounded-md shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3">Organizations I Worked</h3>

        <div className="grid grid-cols-4 gap-3 items-center">
          {cImages.map((company, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 hover:scale-150 duration-300  text-gray-700 rounded-lg"
            >
               <img
              src={company.img} 
              className="w-full h-18 object-contain rounded-lg"
            />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
