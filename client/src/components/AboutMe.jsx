import { Card, Container } from "reactstrap";

const imgStyle = {
  width: "100%",
  maxWidth: 300,
  display: "block",
  margin: "0 auto",
  height: "auto",
};

const AboutMe = () => {
  return (
    <div className="card-container pt-3">
      <Card id="AboutMe" className="flex-wrap card card-primary p-3">
        <h1 className="text-center">
          "We Stand on the Shoulders of Giants."
        </h1>
        <hr />

        <div className="row align-items-center">
          <div className="col-lg-6 p-2">
            <img
              src="/Profile_Pic.jpg"
              style={imgStyle}
              alt="Portrait of Matthew"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6 p-2">
            <Container>
              <div className="row">
                <h4 className="text-center">Summary</h4>
                <p>
                  I am a computer scientist focused on building reliable,
                  modular systems at the intersection of AI, data, and IoT. I
                  value clear interfaces, testable components, and reproducible
                  delivery. My research interests center on knowledge
                  representation, cognitive systems, and machine learning.
                </p>

                <h5 className="mt-3">Development</h5>
                <p>
                  Modularity emerges from clear abstractions and well-defined
                  classes. I blueprint intelligent systems, then
                  containerize and automate them with Docker and CI/CD for
                  reproducible builds and deployments across local and cloud
                  environments.
                </p>

                <h5 className="mt-3">Professionalism</h5>
                <p>
                  Ethics, documentation, reproducibility, performance, and security,
                  guides my decisions. I treat these as product requirements, not add-ons.
                </p>

                <h5 className="mt-3">Leadership</h5>
                <p>
                  As a former supervisor, instructor, colleague, and student, I
                  know mentorship compounds learning. Thats why I lead with empathy,
                  becuase we are all life long learners.
                </p>

                {/* <h5 className="mt-3">Lifelong Learning</h5>
                <p>
                  With a 3.8 GPA, I maintain a red-yellow-green loop: ideas
                  to notes, notes to experiments, experiments to artifacts. This
                  discipline keeps practice aligned with research.
                </p> */}
              </div>
            </Container>
          </div>
        </div>

        <hr />
      </Card>
    </div>
  );
};

export default AboutMe;
