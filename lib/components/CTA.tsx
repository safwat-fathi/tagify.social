import Button from "./Button";


export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media Management?</h2>
        <p className="text-xl mb-8 text-gray-100">
          Join thousands of businesses using AI to better understand their customers
        </p>
        <Button
          className="bg-white text-primary py-3 px-6 rounded hover:bg-gray-100 text-lg"
        >
          Get Started Free
        </Button>
      </div>
    </section>
  );
};