import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
          className={`${this.props.article === 'menu' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Menu</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>Skin Rituals</h3>
          <strong>Invigorating Facial: $80</strong>
          <p>
            A double cleanse with deep exfoliation, extractions, a mask and
            finishing products. <br />
            <em>60 Minutes</em>
          </p>
          <strong>Body and Soul Facial: $105</strong>
          <p>
            Includes a pampering back and foot treatment as well as the benefits
            of the invigorating facial. <br />
            <em>90 Minutes</em>
          </p>
          <strong>Deep Dive Pore Cleansing Oxygen Facial: $90</strong>
          <p>
            Deep Pore refining 02 Lift product with ultrasonic extraction and
            finishing. <br />
            <em>50 Minutes</em>
          </p>

          <strong>Microneedling: $180</strong>
          <p>
            “Collagen Induction Therapy” creates micro channels in the skin,
            allowing the regenerative healing process which aids in softening
            lines, scarring, and mild forms of acne and pigment. <br />
            <em>60 minutes with consultation</em>
          </p>
          {close}
        </article>

        <article
          id="axiom"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Axiom</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          {/* <p>
            THis is kori's stuff hahahahahahhahahahahahahahahahahahahahahahah
            By the way, check out my <a href="#work">awesome work</a>.
          </p> */}
          <p>
            My name is Kori Witmer. I am a driven and passionate Master
            Esthetician. My love of my work is only matched by my love for
            helping others. I thrive on positive change in our modern day
            movement to make Beauty and Wellness into one shared meaning. Much
            like the Athame; I am dedicated to being your guide to natural
            wellness, empowerment, and enlightened energy through the rituals of
            skin care, relaxation and positive reflection. May you find self
            love in mind, body and soul.
          </p>
          {close}
        </article>

        <article
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
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
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
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
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
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
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
