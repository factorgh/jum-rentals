import { Button, Form, Input } from "antd";

const App = () => {
  return (
    <div className="bg-gray-100 p-5 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
        <div className="text-xl font-bold">The Jump Party Rentals</div>
        <ul className="flex space-x-5">
          <li>
            <a href="/" className="text-white hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-blue-500">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Section */}

      <div className="p-5 bg-gray-200 rounded-md shadow-md grid grid-cols-2">
        <div className="p-10">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to The Jump Party Rentals!
          </h1>
          <p className="mb-4 text-sm">
            At The Jump Company, we believe that every celebration deserves a
            splash of fun! Serving Atlanta and the surrounding areas, we
            specialize in high-quality inflatable rentals and party supplies.
            With the best prices in the industry, you can enjoy a full day of
            jumping—perfect for kids and adults alike, thanks to our
            industrial-sized inflatables.
          </p>
          <p>
            Whether you’re hosting a birthday party, family reunion, or
            corporate event, we’ve got everything you need to make your
            gathering unforgettable. Remember, life is always better when you
            JUMP! Explore our offerings and let the fun begin!
          </p>
        </div>
        <div className="p-5">
          <div className="flex justify-center items-center rounded-md">
            <div className="bg-white rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600244887665-65c86a4e25ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yJTIwcmVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Jump Company"
                className="rounded-[20px] w-80 h-80 m-3 p-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 p-5 flex flex-col rounded-md shadow-md w-2/3">
          <h2 className="text-xl font-bold mb-5">Click to get a quote!</h2>
          <Form layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                placeholder="Enter your name"
                className="p-2 border rounded"
              />
            </Form.Item>
            <Form.Item
              label="Address for Delivery"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter your delivery address!",
                },
              ]}
            >
              <Input
                placeholder="Enter delivery address"
                className="p-2 border rounded"
              />
            </Form.Item>
            <Form.Item
              label="Date of Event"
              name="eventDate"
              rules={[
                {
                  required: true,
                  message: "Please select the date of the event!",
                },
              ]}
            >
              <Input type="date" className="p-2 border rounded" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                className="p-2 border rounded"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email"
                className="p-2 border rounded"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-5 text-center mt-10">
        <div className="max-w-4xl mx-auto ">
          <p>
            &copy; {new Date().getFullYear()} The Jump Party Rentals. All rights
            reserved.
          </p>
          <ul className="flex justify-center space-x-5 mt-3">
            <li>
              <a href="/privacy" className="text-white hover:text-blue-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-white hover:text-blue-500">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
