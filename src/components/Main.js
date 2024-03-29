import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="menu"
          className={`${this.props.article === 'aesthetics' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Aesthetics Rituals</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <a
            className="appointment"
            href="https://app.acuityscheduling.com/schedule.php?owner=21354633"
          >
            Book Appointment
          </a>
          <h3>Skin Rituals</h3>
          <hr />
          <strong>Invigorating Facial: $80</strong>
          <p>
            A double cleanse with deep exfoliation, extractions, a mask and
            finishing products. <br />
            <br />
            <em>60 Minutes</em>
          </p>
          <hr />
          <strong>Body and Soul Facial: $115</strong>
          <p>
            Includes a pampering back and foot treatment as well as the benefits
            of the invigorating facial. <br />
            <br />
            <em>90 Minutes</em>
          </p>
          <hr />
          <strong>Deep Dive Pore Cleansing Oxygen Facial: $90</strong>
          <p>
            Deep Pore refining 02 Lift product with ultrasonic extraction and
            finishing. <br />
            <br />
            <em>50 Minutes</em>
          </p>
          <hr />
          <strong>Chemical Peel: $95</strong>
          <p>
            Choose from a variety of chemical peels for different skin concerns
            and healing. Peel strength will be decided during a skin
            consultation. <br />
            <br />
            <em>60 minutes with consultation</em>
          </p>
          <hr />
          <strong>Microneedling: $195</strong>
          <p>
            “Collagen Induction Therapy” creates micro channels in the skin,
            allowing the regenerative healing process which aids in softening
            lines, scarring, and mild forms of acne and pigment. <br />
            <br />
            <em>60 minutes with consultation</em>
          </p>
          <hr />
          <p>
            *Add LED Phototherapy to ANY facial service: 15 minutes for an
            additional $10.
          </p>
          <hr />
          <a
            className="appointment"
            href="https://app.acuityscheduling.com/schedule.php?owner=21354633"
          >
            Book Appointment
          </a>
          <h3>Waxing Rituals</h3>
          <table>
            <strong>Face</strong>
            <tbody>
              <tr>
                <td>Brows: $20</td>
              </tr>
              <tr>
                <td>Lip: $15</td>
              </tr>
              <tr>
                <td>Cheeks: $10</td>
              </tr>
              <tr>
                <td>Nose/Toes/Ears: $10</td>
              </tr>
              <tr>
                <td>Let’s Do it All: $40 ($45 with cheeks)</td>
              </tr>
            </tbody>
          </table>
          <table>
            <strong>Body</strong>
            <tbody>
              <tr>
                <td>Half Leg: $40</td>
              </tr>
              <tr>
                <td>Full Leg: $65</td>
              </tr>
              <tr>
                <td>Underarm: $25</td>
              </tr>
              <tr>
                <td>Bikini: $35</td>
              </tr>
              <tr>
                <td>Brazilian: $55</td>
              </tr>
              <tr>
                <td>360 Brazilian (includes butt cheeks): $80</td>
              </tr>
              <tr>
                <td>Full Leg and Brazilian Combo: $105</td>
              </tr>
              <tr>
                <td>Half Arm: $30</td>
              </tr>
              <tr>
                <td>Full Arm: $45</td>
              </tr>
              <tr>
                <td>Chest: $40</td>
              </tr>
              <tr>
                <td>Half Back: $45</td>
              </tr>
              <tr>
                <td>Full Back: $65</td>
              </tr>
              <tr>
                <td>Full Body: Face to the Floor: $300</td>
              </tr>
            </tbody>
          </table>

          <table>
            <hr />
            <table>
              <a
                className="appointment"
                href="https://app.acuityscheduling.com/schedule.php?owner=21354633"
              >
                Book Appointment
              </a>
              <h3>Lash and Brow Rituals</h3>
              <tbody>
                <tr>
                  <td>Lash Lift: $55</td>
                </tr>
                <tr>
                  <td>Lash Lift and Tint: $65</td>
                </tr>
                <tr>
                  <td>Brow Tint: $10</td>
                </tr>
                <tr>
                  <td>Lash Tint: $20</td>
                </tr>
                <tr>
                  <td>All of it: $70</td>
                </tr>
              </tbody>
            </table>
          </table>
          {close}
        </article>

        <article
          id="body"
          className={`${this.props.article === 'body' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Body Treatment Rituals</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <a
            className="appointment"
            href="https://app.acuityscheduling.com/schedule.php?owner=21354633"
          >
            Book Appointment
          </a>
          <hr />

          <h3>Deep Submerge Body Cocoon</h3>
          <p>
            Deep manual body exfoliation followed by a massage application of
            our Oligomer rich remineralizing formula that will deeply hydrate
            the body, improve microcirculation, release tension, tone and calm
            skin irritations. This is a must have for a complete body revival.{' '}
          </p>

          <em>50 Minutes: $85</em>

          <hr />
          <h3>M’lis Detoxifying Slimming Wrap</h3>
          <p>
            A stimulating body wrap that reduces the appearance of cellulite and
            aids in weight loss and body detoxification. Whether you want to
            lose a few inches right away or accelerate the results of a
            lifestyle change: this wrap is a must try.
          </p>

          <em>Single Session: $100</em>
          <br />
          <em>Series* of 5: $400 </em>
          <br />
          <em>
            *Series treatments yield better long-term results. Consultation
            recommended.{' '}
          </em>
          <hr />
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>

          <h3>About</h3>
          <p>
            I am a driven and passionate master of my craft. The adoration of
            my work is only matched by my love for helping others. I thrive
            on positive change in this modern day movement to make Beauty and
            Wellness into one shared meaning. Much like the Athame; I am
            dedicated to being your guide to natural wellness, empowerment, and
            enlightened energy through the rituals of skin care, relaxation and
            positive reflection. May you find self love in mind, body and soul.
            <br /> <br />
            <em>-Kori</em>
          </p>

          {close}
        </article>

        {/* <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article> */}

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <p>
            825 East 4800 South <br />
            Suite 230 <br />
            Murray, UT 87107 <br />
          </p>

          <form
            method="post"
            action="https://getform.io/f/a1ca4435-1925-41c2-bfa5-a0e0c8c86b6e"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <div
                class="g-recaptcha"
                data-sitekey="6LdN4KkaAAAAABbkYRtn7WZ5JmQ17DlYS_62CILC"
              ></div>
              <br />
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li> */}
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://www.instagram.com/athameaesthetics/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            {/* <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li> */}
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
