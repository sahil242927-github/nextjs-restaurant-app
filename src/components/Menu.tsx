import { useState } from "react";
import Image from "next/image";

export default function Menu() {
  const [open, setOpen] = useState();
  return (
    <div>
      <Image src="/open.png" alt="open" width={20} height={20} />
    </div>
  );
}
