

function Footer(){
    return (
      <div className="py-10 w-[88%] mx-auto">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-bold uppercase">
                Catalog
              </h2>
              <ul>
                <li className="mb-4 hover:underline cursor-pointer">
                    Necklaces
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    Hoodies
                  
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    Jewelry Box
                  
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    T-Shirt
                  
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-bold uppercase ">
                About us
              </h2>
              <ul >
                <li className="mb-4 hover:underline cursor-pointer">
                    Our Producers
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    Sitemap
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    FAQ
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    About us
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold uppercase ">
                customer service
              </h2>
              <ul >
                <li className="mb-4 hover:underline cursor-pointer">
                    Contact us
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    Track your order
                  
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    Product Care & Repair
                  
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                    Book an appointment
                  
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <div className="text-left  sm:text-left md:col-span-4 lg:col-span-2">
                <p className="text-2xl">
                    CORAL
                </p>

              <div className="mx-auto mt-4 max-w-md sm:ml-0">
                <p className="text-left leading-relaxed sm:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer