import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import img from "../images/undraw-contact.svg"
function Contact() {
  return (
    <>
      <Header></Header>
        <div className="container-contact">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas debitis, fugit natus?
                  </p>
                  <p>
                    <img
                      src={img}
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols={30}
                          rows={7}
                          placeholder="Write your message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          className="btn btn-primary rounded-0 py-2 px-4"
                        />
                        <span className="submitting" />
                      </div>
                    </div>
                  </form>
                  <div id="form-message-warning mt-4" />
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      <Footer></Footer>
    </>
  );
}

export default Contact;
