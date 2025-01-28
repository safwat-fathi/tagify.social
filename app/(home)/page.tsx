import { CTA } from "@/lib/components/CTA";
import { Features } from "@/lib/components/Features";

import { Hero } from "@/lib/components/Hero";
import { HowItWorks } from "@/lib/components/HowItWorks";


const Home = () => {
	return (
		<div className="min-h-screen">
			<Hero />
			<Features />
			<HowItWorks />
			<CTA />
		</div>
	);
};

export default Home;
