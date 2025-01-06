import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header"
import Dashboard from "@/components/Dashboard";
import Dashboard2 from "@/components/Dashboard2";
import CountryDashboard from "@/components/CountryDashboard"
import RecentOrders from "@/components/RecentOrders";


interface GradientDivProps {
  position: string;
  cornerClass: string;
  blurClass: string;
  additionalStyles?: string; // Optional prop
}

const GradientDiv: React.FC<GradientDivProps> = ({
  position,
  cornerClass,
  blurClass,
  additionalStyles = "",
}) => {
  return (
    <div
      className={`absolute w-[300px] h-[300px] bg-[#CB3CFF]/25 ${cornerClass} z-[-1] ${blurClass} ${position} ${additionalStyles}`}
    ></div>
  );
};



export default function Home() {
  return (
    <div className="flex">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="relative w-full bg-[#1F1F1F] z-[-2]">
        <GradientDiv
          position="top-[0px] right-[0px]"
          cornerClass="rounded-bl-full"
          blurClass="blur-lg"
        />
        <GradientDiv
          position="bottom-[0px] left-[0px]"
          cornerClass="rounded-tr-full"
          blurClass="blur-xl"
        />

        {/* Main Content */}
        <Header />
        <div className="flex justify-center gap-4 items-start">
          <Dashboard />
          <Dashboard2 />
        </div>
        <div className="flex justify-center gap-4 items-start">
          <CountryDashboard />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
