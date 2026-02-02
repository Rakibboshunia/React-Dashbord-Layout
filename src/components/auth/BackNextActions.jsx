import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function BackNextActions({
  backTo,
  nextTo,
  backLabel = "Back",
  nextLabel = "Next",
  showBack = true,
  showNext = true,
}) {
  return (
    <div className="mt-6 flex items-center justify-between">
      {/* Back */}
      {showBack ? (
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition"
        >
          <Icon icon="heroicons-outline:arrow-left" width={18} />
          {backLabel}
        </Link>
      ) : (
        <div />
      )}

      {/* Next */}
      {showNext && (
        <Link
          to={nextTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition"
        >
          {nextLabel}
          <Icon icon="heroicons-outline:arrow-right" width={18} />
        </Link>
      )}
    </div>
  );
}
