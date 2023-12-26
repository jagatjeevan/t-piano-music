import { PT_Sans_Narrow } from "next/font/google";

export const pt_sans_narrow = PT_Sans_Narrow({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Logo = () => {
  return (
    <div className={pt_sans_narrow.className} style={{ fontSize: "24px" }}>
      T&apos;s Music School
    </div>
  );
};

export default Logo;
