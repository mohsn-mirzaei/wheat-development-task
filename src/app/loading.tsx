import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <Loader2 className="h-8 w-8 md:h-12 md:w-12 animate-spin" />
    </div>
  );
};

export default loading;
