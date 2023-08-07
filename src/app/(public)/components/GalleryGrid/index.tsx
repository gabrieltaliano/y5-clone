"use client";
import Enterprise from "./Enterprise";
import ProfessionalUI from "./ProfessionalUI";
import MathModelling from "./MathModelling";
import ComplexData from "./ComplexData";
import WarehouseManagement from "./WarehouseManagement";
import IoT from "./IoT";

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 w-full gap-4 p-8 pb-28 bg-black/70 z-20 backdrop-blur-lg select-none">
      <ProfessionalUI />
      <MathModelling />
      <Enterprise />
      <ComplexData />
      <WarehouseManagement />
      <IoT />
    </div>
  );
}
