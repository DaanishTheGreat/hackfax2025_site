import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* NAVBAR (TOP) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            HackFax
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Schedule">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Prizes">Prizes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Sponsors">Sponsors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#SocialMedia">Social Media</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header id="home" className="text-center position-relative banner-wrapper">
        {/* Single Banner Image with Halo Animation */}
        <img
          src="images_asset/hackfax2025_title.png"
          alt="Hackfax 2025"
          className="banner-image img-fluid"
        />
      </header>

      {/* LINKS BELOW THE BANNER */}
      <div className="text-center my-4 link-row">
        <a className="banner-btn" href="#About">About</a>
        <a className="banner-btn" href="#Schedule">Schedule</a>
        <a className="banner-btn" href="#Prizes">Prizes</a>
        <a className="banner-btn" href="#Sponsors">Sponsors</a>
        <a className="banner-btn" href="#Faq">FAQ</a>
        <a className="banner-btn" href="#SocialMedia">Social Media</a>
      </div>

      {/* PRESENTED BY THE GMU COMPUTER SCIENCE CLUB */}
      <h2 className="text-center presented-heading mb-5">
        PRESENTED BY THE GMU <span className="csclub-highlight">COMPUTER SCIENCE CLUB</span>
      </h2>

      {/* MAIN CONTENT */}
      <main className="container mb-5">
        {/* About Section */}
        <section id="About" className="mb-5 neon-section">
          <div className="text-center">
            {/* Make the hackathon logo bigger */}
            <img
              src="images_asset/logo.png"
              alt="Hackathon Logo"
              className="img-fluid"
              style={{ maxWidth: '350px' }}
            />
            <div className="mt-4">
              {/* Enlarge the sign up button */}
              <a
                href="https://linktr.ee/Hackfax"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-flair btn-lg"
              >
                Sign up!
              </a>
            </div>
          </div>
          <h1 className="mt-5 text-center">About</h1>
          <p className="lead text-center">
            Welcome to the <strong>GMU CS Club’s Premier Hackathon!</strong> Hackfax welcomes students all over the GMU Fairfax Area and beyond!
            Enjoy 36 hours of non-stop programming with teams of up to 4 students working on projects from scratch.
            At the end of the hackathon, teams present their projects to judges and compete for prizes.
          </p>
        </section>

        {/* Schedule Section */}
        <section id="Schedule" className="mb-5 neon-section">
          <h1 className="text-center">Schedule</h1>
          {/* Bootstrap Tabs for Schedule */}
          <ul className="nav nav-tabs justify-content-center" id="scheduleTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="day1-tab"
                data-bs-toggle="tab"
                data-bs-target="#day1"
                type="button"
                role="tab"
                aria-controls="day1"
                aria-selected="true"
              >
                Day 1 (April 4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="day2-tab"
                data-bs-toggle="tab"
                data-bs-target="#day2"
                type="button"
                role="tab"
                aria-controls="day2"
                aria-selected="false"
              >
                Day 2 (April 5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="day3-tab"
                data-bs-toggle="tab"
                data-bs-target="#day3"
                type="button"
                role="tab"
                aria-controls="day3"
                aria-selected="false"
              >
                Day 3 (April 6)
              </button>
            </li>
          </ul>

          <div className="tab-content mt-3" id="scheduleTabContent">
            {/* Day 1 Content */}
            <div className="tab-pane fade show active" id="day1" role="tabpanel" aria-labelledby="day1-tab">
              <table className="table table-striped table-dark-custom">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event/Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Check-In</td>
                  </tr>
                  <tr>
                    <td>3:00 PM</td>
                    <td>Opening Ceremony</td>
                  </tr>
                  <tr>
                    <td>3:30 PM</td>
                    <td>Hacking Begins</td>
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Lunch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 2 Content */}
            <div className="tab-pane fade" id="day2" role="tabpanel" aria-labelledby="day2-tab">
              <table className="table table-striped table-dark-custom">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event/Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Soft Deadline</td>
                  </tr>
                  <tr>
                    <td>3:30 PM</td>
                    <td>Hard Deadline</td>
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Judging</td>
                  </tr>
                  <tr>
                    <td>5:00 PM</td>
                    <td>Closing Ceremony</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Event Ends</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 3 Content */}
            <div className="tab-pane fade" id="day3" role="tabpanel" aria-labelledby="day3-tab">
              <table className="table table-striped table-dark-custom">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event/Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:00 AM</td>
                    <td>CTF Begins</td>
                  </tr>
                  <tr>
                    <td>1:30 PM</td>
                    <td>Judging Starts</td>
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Judging Ends</td>
                  </tr>
                  <tr>
                    <td>5:00 PM</td>
                    <td>CTF Ends</td>
                  </tr>
                  <tr>
                    <td>5:15 - 6:30 PM</td>
                    <td>Challenge Walkthroughs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Prizes Section (Optional) */}
        <section id="Prizes" className="mb-5 neon-section text-center">
          <h1>Prizes</h1>
          <p>Details about prizes coming soon...</p>
        </section>

        {/* Tracks Section (VS Code–style snippet) */}
        <section id="Tracks" className="mb-5 neon-section">
          <h1 className="text-center">Tracks</h1>
          <div className="vscode-snippet">
            <pre>
              <code>
{`public class HackFax {
    public static void main(String[] args) {
        String[] tracks = {
            "Best Use of Artificial Intelligence",
            "Best Use of Computer Vision",
            "Best Front End Experience",
            "Best GMU Related Project",
            "Best Cyber Security project",
            "Best Beginner Project",
            "Most Likely to be a Startup",
            "Best Full stack app"
        };
        int numAwardsForEachTrack = 3;
    }
}`}
              </code>
            </pre>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="Sponsors" className="mb-5 text-center neon-section">
          <h1>Sponsors</h1>
          <a
            href="HackFax Sponsor Prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Sponsor Prospectus Packet!</p>
          </a>
          <img
            src="images_asset/Coming_soon.png"
            alt="Sponsors"
            className="img-fluid"
          />
        </section>

        {/* FAQ Section */}
        <section id="Faq" className="mb-5 neon-section">
          <h1 className="text-center">FAQ</h1>
          <div className="accordion" id="faqAccordion">
            {/* FAQ Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse1"
                  aria-expanded="false"
                  aria-controls="faqCollapse1"
                >
                  How many people can be on a team? Do I need one? How do I find a team?
                </button>
              </h2>
              <div
                id="faqCollapse1"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  If you are planning to compete for a prize, you may be in a team of 1-4 people.
                  If you don't have one yet, no worries! We will have team-building sessions available
                  prior to the event and a channel for this in the Discord Server!
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse2"
                  aria-expanded="false"
                  aria-controls="faqCollapse2"
                >
                  Do I need to pay for anything?
                </button>
              </h2>
              <div
                id="faqCollapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  HackFax is free for all participants! This includes food throughout the weekend, T-shirts, stickers, and more!
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse3"
                  aria-expanded="false"
                  aria-controls="faqCollapse3"
                >
                  Where/when is it going to be?
                </button>
              </h2>
              <div
                id="faqCollapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Our hackathon will take place at George Mason Fairfax campus from April 4th to 6th.
                  More specifically, we’ll be in Dewberry Hall in the Johnson Center, and Horizon Hall.
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse4"
                  aria-expanded="false"
                  aria-controls="faqCollapse4"
                >
                  What is HackFax?
                </button>
              </h2>
              <div
                id="faqCollapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  HackFax is a product of the GMU Computer Science club—an established student organization with over 400 members.
                  It’s the premier annual event hosted by the CS Club, aiming to connect students and create an unforgettable experience!
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse5"
                  aria-expanded="false"
                  aria-controls="faqCollapse5"
                >
                  How long is the event? Are there sleeping accommodations?
                </button>
              </h2>
              <div
                id="faqCollapse5"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading5"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  HackFax spans from Friday, April 4th to Sunday, April 6th.
                  Sleeping accommodations will not be provided as this is largely a virtual event except for the first day.
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading6">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse6"
                  aria-expanded="false"
                  aria-controls="faqCollapse6"
                >
                  Is there a code of conduct?
                </button>
              </h2>
              <div
                id="faqCollapse6"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading6"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, all attendees must abide by the MLH Code of Conduct.
                </div>
              </div>
            </div>

            {/* FAQ Item 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading7">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse7"
                  aria-expanded="false"
                  aria-controls="faqCollapse7"
                >
                  Any other questions?
                </button>
              </h2>
              <div
                id="faqCollapse7"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading7"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Contact us at <a href="mailto:hackfaxgmu@gmail.com">hackfaxgmu@gmail.com</a> for any questions, concerns, or feedback!
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>

      {/* FOOTER */}
      <footer className="bg-light text-center py-3">
        <ul className="list-inline mb-2">
          <li className="list-inline-item">Contact Us: HackFaxGMU@gmail.com</li>
          <li className="list-inline-item footer-icon-link">
            <a
              href="https://www.instagram.com/gmu_cs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images_asset/Instagram_icon.png"
                alt="Instagram Icon"
                className="footer-icon"
              />
              CS Club Instagram
            </a>
          </li>
          <li className="list-inline-item footer-icon-link">
            <a
              href="https://www.instagram.com/hackfax/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images_asset/Instagram_icon.png"
                alt="Instagram Icon"
                className="footer-icon"
              />
              HackFax Instagram
            </a>
          </li>
          <li className="list-inline-item footer-icon-link">
            <a
              href="https://www.linkedin.com/company/101005990/admin/feed/posts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images_asset/linkedin_icon.png"
                alt="LinkedIn Icon"
                className="footer-icon"
              />
              CS Club Linkedin
            </a>
          </li>
          <li className="list-inline-item footer-icon-link">
            <a
              href="https://www.linkedin.com/company/100315945/admin/feed/posts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images_asset/linkedin_icon.png"
                alt="LinkedIn Icon"
                className="footer-icon"
              />
              HackFax Linkedin
            </a>
          </li>
        </ul>
        <p>&copy; 2023-2024 HackFax. GMU Computer Science Club. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
