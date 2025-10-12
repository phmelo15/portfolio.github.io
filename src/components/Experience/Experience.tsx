import { Images } from "@/constants/Images";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { styles } from "./styles";

export default function Experience() {
  return (
    <section className={styles.Container} id="experience">
      <text className={styles.Title}>
        <strong className={styles.TitleMark}>EXPERIÊNCIA</strong>
      </text>
      <div className={styles.ContainerExperience}>
        <div className={styles.Logo}>
          <Image
            width={38}
            height={38}
            src={Images.GlobalLogo}
            alt="my photo"
            className={"w-[38px] rounded"}
          />
        </div>
        <div className={styles.ContainerText}>
          <text className={styles.Cargo}>
            Desenvolvedor Full-Stack Pleno na Globalsys Soluções em TI
          </text>
          <text className={styles.Date}>08/2023 - 09/2024</text>
        </div>
      </div>
      <div className={styles.ContainerExperience}>
        <div className={styles.Logo}>
          <Image
            width={38}
            height={38}
            src={Images.GlobalLogo}
            alt="my photo"
            className={"w-[38px] rounded"}
          />
        </div>
        <div className={styles.ContainerText}>
          <text className={styles.Cargo}>
            Desenvolvedor Full-Stack Júnior na Globalsys Soluções em TI
          </text>
          <text className={styles.Date}>11/2022 - 08/2023</text>
        </div>
      </div>
      <div className={styles.ContainerExperience}>
        <div className={styles.Logo}>
          <Image
            width={38}
            height={38}
            src={Images.GlobalLogo}
            alt="my photo"
            className={"w-[38px] rounded"}
          />
        </div>
        <div className={styles.ContainerText}>
          <text className={styles.Cargo}>
            Estagiário na Globalsys Soluções em TI
          </text>
          <text className={styles.Date}>06/2022 - 11/2022</text>
        </div>
      </div>
      <div className={styles.ContainerExperience}>
        <div className={styles.Logo}>
          <FaLaptopCode size={28} />
        </div>
        <div className={styles.ContainerText}>
          <text className={styles.Cargo}>
            Desenvolvedor Full-Stack - Freelancer{" "}
          </text>
          <text className={styles.Date}>07/2021 - Data atual</text>
        </div>
      </div>
    </section>
  );
}
