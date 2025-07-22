import React from 'react';
import './styles.scss';
import Header from '../../modules/Header/Header';
import Button from '../../components/Button/Button';

const About = () => {
  return (
    <div>
      <Header />

      <section className="about-hero container">
        <div className="about-hero__content">
          <h1 className="about-hero__title">About Secfi</h1>
          <h2 className="about-hero__subtitle">Built by startup employees, for startup employees</h2>
          <p className="about-hero__text">
            We're a financial advisory company that specializes in equity planning, stock option financing, and wealth management for startup employees. Our
            team understands the unique challenges and opportunities that come with equity compensation.
          </p>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission__content">
            <span className="mission__topic">OUR MISSION</span>
            <h2 className="mission__title">We put equity first</h2>
            <div className="mission__grid">
              <div className="mission__item">
                <h3 className="mission__item-title">Deep Expertise</h3>
                <p className="mission__item-text">Our team has deep expertise in equity, tax implications, and how it fits into your financial picture.</p>
              </div>
              <div className="mission__item">
                <h3 className="mission__item-title">Accessible to All</h3>
                <p className="mission__item-text">
                  You don't need millions to get started. We help you make important equity decisions that can set you up for financial success.
                </p>
              </div>
              <div className="mission__item">
                <h3 className="mission__item-title">Holistic Approach</h3>
                <p className="mission__item-text">
                  We take a comprehensive view of all your finances, including stock options, to help you save time and money, and grow your wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats container">
        <div className="stats__content">
          <div className="stats__item">
            <h3 className="stats__number">$48B</h3>
            <p className="stats__description">In equity value on the platform</p>
          </div>
          <div className="stats__text">
            <h2 className="stats__title">Trusted by thousands</h2>
            <p className="stats__subtitle">
              We've helped startup employees across hundreds of companies navigate their equity journey, from early-stage options to IPOs and acquisitions.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="services__title">What We Do</h2>
          <div className="services__grid">
            <div className="services__item">
              <h3 className="services__item-title">Equity Planning</h3>
              <p className="services__item-text">
                Strategic advice on when and how to exercise your stock options, with personalized recommendations based on your financial goals.
              </p>
            </div>
            <div className="services__item">
              <h3 className="services__item-title">Stock Option Financing</h3>
              <p className="services__item-text">
                Access to capital to exercise your options without using your own cash, allowing you to participate in your company's upside.
              </p>
            </div>
            <div className="services__item">
              <h3 className="services__item-title">Wealth Management</h3>
              <p className="services__item-text">
                Comprehensive portfolio management and exclusive access to private investments to help grow your wealth beyond your equity holdings.
              </p>
            </div>
            <div className="services__item">
              <h3 className="services__item-title">Tax Planning</h3>
              <p className="services__item-text">
                Expert guidance on the tax implications of your equity decisions, including AMT calculations and tax-efficient strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <p className="testimonials__tag">WHAT OUR CLIENTS SAY</p>
            <h2 className="testimonials__title">Trusted by industry professionals</h2>
          </div>
          <div className="testimonials__grid">
            <div className="testimonial">
              <p className="testimonial__quote">"I realized I've been sorely needing your advisory services. So excited to work with you."</p>
              <div className="testimonial__author">
                <p className="testimonial__name">Senior Engineer</p>
                <p className="testimonial__company">Gusto</p>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">"Secfi was one of the only places I could find that could give me accurate calculations on AMT."</p>
              <div className="testimonial__author">
                <p className="testimonial__name">Amanda</p>
                <p className="testimonial__company">Early HR employee at pre-IPO startup</p>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                "Secfi felt like the safest option. There is upside and almost no downside, and I might as well play it safe."
              </p>
              <div className="testimonial__author">
                <p className="testimonial__name">Victor</p>
                <p className="testimonial__company">Engineering leader at a pre-IPO startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta container">
        <div className="cta__content">
          <h2 className="cta__title">Ready to maximize your equity potential?</h2>
          <p className="cta__text">Join thousands of startup employees who trust Secfi with their financial future.</p>
          <Button title="Get Started" className="cta__button" />
        </div>
      </section>
    </div>
  );
};

export default About;
