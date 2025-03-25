"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";

function ResumeButton() {
  return (
    <Button
      onClick={() =>
        window.open(
          "https://drive.google.com/drive/u/0/folders/1fPOYCJ1ZkfHCWeW1OdxzXnuhkbguE8sC"
        )
      }
      size="sm"
      className="flex gap-3"
    >
      Resume <Download width={20} />{" "}
    </Button>
  );
}

export default ResumeButton;
