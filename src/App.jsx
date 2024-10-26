import { Button, Form, Input } from "antd";
import "./App.css";

const App = () => {
  return (
    <div className="jump-company-container">
      <nav className="navbar">
        <div className="logo">The Jump Party Rentals</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="text-section">
          <h1>Welcome to The Jump Party Rentals!</h1>
          <p>
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
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1600244887665-65c86a4e25ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yJTIwcmVudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Jump Company"
          />
        </div>
      </div>
      <div className="form-section">
        <h2>Click to get quote!</h2>
        <Form layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" />
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
            <Input placeholder="Enter delivery address" />
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
            <Input type="date" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input placeholder="Enter your phone number" />
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
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} The Jump Party Rentals. All rights
            reserved.
          </p>
          <ul className="footer-links">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
