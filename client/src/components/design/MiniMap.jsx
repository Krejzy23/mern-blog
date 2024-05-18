import { lines } from "../../assets";

export const LeftLine = () => {
  return (
    <div className="hidden stroke-gray-400 stroke-2 lg:block absolute top-44 right-[90%] w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none" >
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden stroke-gray-400 stroke-2 lg:block absolute top-44 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};