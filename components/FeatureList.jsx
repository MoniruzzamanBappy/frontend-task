import { Sparkles } from "lucide-react";

export default function FeatureList({ features = [] }) {
  return (
    <ul className="mt-6 space-y-4">
      {features?.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <Sparkles
            className="h-5 w-5 md:h-6 md:w-6 text-orange-400"
            aria-hidden="true"
          />
          <p className="text-gray-300 text-base">{feature}</p>
        </li>
      ))}
    </ul>
  );
}
