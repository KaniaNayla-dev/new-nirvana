import banner from "../assets/flattened/products.png";

const ContactUsPage = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner Contact"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Location Section */}
        <div className="mb-12 text-center">
          <h2 className="text-blue-600 font-medium mb-2">Our Location</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Where We&apos;re Located
          </h1>

          {/* Google Maps Embed */}
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=nirvana Niaga sejahtera makassar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PT. Nirvana Niaga Sejahtera location"
            ></iframe>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mb-12 text-center">
          <h2 className="text-blue-600 font-medium mb-2">Our Infos</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Who We Are</h1>
        </div>

        {/* Contact Information */}
      </div>
      <div className="bg-gray-50 p-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* "We are always happy to assist you" section */}
          <div className="md:col-span-1">
            <h3 className="text-4xl font-bold text-blue-600 mb-4">
              We are always happy to assist you
            </h3>
          </div>

          {/* Phone Number */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Phone Number
            </h4>
            <div className="mb-1">—</div>
            <div className="text-gray-700 mb-2">+62411 4742 239</div>
            <div className="text-sm text-gray-600">
              Assistance hours:
              <br />
              Monday - Friday 6 am to 8 pm EST
            </div>
          </div>

          {/* Email Address */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Email Address
            </h4>
            <div className="mb-1">—</div>
            <div className="text-gray-700 mb-2">
              official@nirvanniagsejahtera.co.id
            </div>
            <div className="text-sm text-gray-600">
              Assistance hours:
              <br />
              Monday - Friday 6 am to 8 pm EST
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Location
            </h4>
            <div className="mb-1">—</div>
            <div className="text-gray-700">
              Jl.Kima 6 Kav.FIII/B1-B2,
              <br />
              Kel. Daya, Kec.
              <br />
              Biringkanaya, Kota
              <br />
              Makassar, Prov. Sulawesi
              <br />
              Selatan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
