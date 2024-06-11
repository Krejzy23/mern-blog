import AnimatedPhoenix from "../svg/AnimatedPhoenix";
import { styles } from "../constants";
import { grid } from "../assets";

export default function Hero() {

  return (
    <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
      <AnimatedPhoenix />
      <div className="flex flex-col gap-6 p-20 px-3 max-w-7xl mx-auto xl:mt-28">
      <img
        src={grid}
        alt="gridBackground"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
        <div className="relative flex items-center flex-col justify-center font-poppins z-10">
          <div className="flex flex-row items-center justify-center">
            <h1 className={styles.heroHeading}>WELC</h1>
            <div className={`dark:border-gray-200 ${styles.heroOText}`} />
            <h1 className={styles.heroHeading}>ME</h1>
          </div>

          <div className="flex flex-row items-center justify-center">
            <h1 className={styles.heroHeading}>T</h1>
            <div className={`dark:border-gray-200 ${styles.heroOText}`}/>
            <h1 className={`ml-12 ${styles.heroHeading}`}>MY</h1>
          </div>
          
          <div className="flex flex-row items-center justify-center">
            <h1 className={styles.heroHeading}>BL</h1>
            <div className={`dark:border-gray-200 ${styles.heroOText}`} />
            <h1 className={styles.heroHeading}>G</h1>
          </div>
        </div>
      </div>
    </div>
  );
}