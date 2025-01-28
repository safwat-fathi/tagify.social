import { Mail, Copyright, Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
		<footer className="bg-gray-100 py-8 mt-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center">
						<img
							src="/logo.png"
							alt="Tagify.Social Logo"
							className="h-8 w-auto"
						/>
						<span className="ml-2 font-semibold text-gray-800">
							Tagify.Social
						</span>
					</div>

					<div className="flex items-center gap-2">
						<Mail className="h-4 w-4 text-gray-600" />
						<a
							href="mailto:info@tagify.social?subject=Hi&body=I%20want%20to%20get%20in%20touch%20with%20you!"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							info@tagify.social
						</a>
					</div>

					<div className="flex items-center gap-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							<Facebook className="h-5 w-5" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							<Twitter className="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							<Linkedin className="h-5 w-5" />
						</a>
					</div>

					{/* <div className="flex items-center gap-2 text-gray-600">
            <Copyright className="h-4 w-4" />
            <span>{currentYear} Tagify.Social. All rights reserved.</span>
          </div> */}
				</div>
			</div>
		</footer>
	);
};