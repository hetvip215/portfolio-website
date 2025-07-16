import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Send,
  } from "lucide-react";
  
  export const ContactSection = () => {
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
  
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:hetvipatel2934@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hetvipatel2934@gmail.com
                    </a>
                  </div>
                </div>
  
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+918160188575"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8160188575
                    </a>
                  </div>
                </div>
  
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>
  
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/hetvi-h-patel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://x.com/hetvip215"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                Want to connect?
            </h3>
            <p className="text-muted-foreground mb-4 text-center">
                Click the button below to send me an email directly.
            </p>
            <a
                href="mailto:hetvipatel2934@gmail.com"
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
                Send Email <Send size={16} />
            </a>
            </div>

          </div>
        </div>
      </section>
    );
  };
  