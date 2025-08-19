import './styles.scss';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className='enquity container'>
        <div className='enquity__left'>
          <div className='enquity__top'>
            <h2 className='enquity__title'>Enquity Financing</h2>
            <h3 className='enquity__subtitle'>for startup employees</h3>
          </div>
          <p className='enquity__text'>
            Get equity planning, stock option financing, and wealth management from advisors that know how stock options and equity can help grow your wealth.
          </p>
          <Button title='Get started' className='enquity__button' />
        </div>
        <div className='enquity__right'>
          <img src='images/person.png' alt='' className='enquity__img' />
        </div>
      </section>
      <section className='what'>
        <div className='container'>
          <div className='what__top-text'>
            <p className='what__text_title'>TESTIMONIAL</p>
            <h2 className='what__text_subTitle'>What our clients say</h2>
          </div>
          <div className='what__boxed'>
            <div className='box'>
              <p className='box__info'>"I realized I’ve been sorely needing your advisory services. So excited to work with you."</p>
              <div className='box__bot'>
                <p>Senior Engineer</p>
                <p>Gusto</p>
              </div>
            </div>
            <div className='box'>
              <p className='box__info'>Secfi was one of the only places I could find that could give me accurate calculations on AMT.</p>
              <div className='box__bot'>
                <p>Amanda</p>
                <p>Early HR employee at pre-IPO startup</p>
              </div>
            </div>
            <div className='box'>
              <p className='box__info'>"Secfi felt like the safest option. There is upside and almost no downside, and I might as well play it safe."</p>
              <div className='box__bot'>
                <p>Victor</p>
                <p>Engineering leader at a pre-IPO startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='options'>
        <p className='options__title'>Know your options</p>
        <div className='options__content container'>
          <div className='options__box options__company'>
            <p className='options__text'>My company is going public or getting acquired</p>
            <img className='options__img' src='/images/options-img-1.svg' alt='' />
          </div>
          <div className='options__box options__manage'>
            <p className='options__text'>Managing wealth with stock options</p>
            <img className='options__img' src='/images/options-img-2.svg' alt='' />
          </div>
          <div className='options__box options__exercise'>
            <p className='options__text'>Exercising stock options</p>
            <img className='options__img' src='/images/options-img-3.svg' alt='' />
          </div>
          <div className='options__box options__start'>
            <p className='options__text'>Starting a new job with stock options</p>
            <img className='options__img' src='/images/options-img-4.svg' alt='' />
          </div>
        </div>
      </section>
      <sectioin className='wealth container'>
        <div className='wealth__left'>
          <p className='wealth__text'>Wealth Management</p>
          <p className='wealth__text2'>Grow your money through managed portfolios and exclusive access to private investments.</p>
          <nav className='nav'>
            <Button title='Get Started' className='wealth__button' />
            <Link to='/wealth'>
              <Button title='Learn more' isSecondary className='wealth__learn' />
            </Link>
          </nav>
        </div>
        <div className='wealth__right'>
          <img className='wealth__img' src='images/man.jpg' alt='' />
        </div>
      </sectioin>
      <section className='built'>
        <div className='built__left'>
          <span className='built__topic'>WHY SECFI</span>
          <h1 className='built__subtitle'>Built by startup employees</h1>
          <div className='built__bottom'>
            <span className='built__subscribe'>As seen in</span>
            <span>
              {' '}
              <img className='built__image' src='images/image1.png' alt='image1' />
            </span>
          </div>
        </div>
        <div className='built__right'>
          <h2 className='built__title'>We put equity first</h2>
          <p className='built__paragraph'>Our team has deep expertise in equity, tax implications, and how it fits into your financial picture.</p>
          <h2 className='built__title'>You don’t need millions</h2>
          <p className='built__paragraph'>We help you make important equity decisions that can set you up for financial success</p>
          <h2 className='built__title'>Holistic wealth management</h2>
          <p className='built__paragraph'>
            We take a comprehensive view of all your finances, including stock options, to help you save time and money, and grow your wealth.
          </p>
        </div>
      </section>

      <section className='mishael container'>
        <div className='mishael__left'>
          <img src='images/dollar.jpg' alt='image' className='mishael__img' />
        </div>
        <div className='mishael__right'>
          <div className='mishael__top'>
            <h2 className='mishael__title txt__color'>WE KNOW EQUITY</h2>
            <h3 className='mishael__subtitle txt__color'>$48B</h3>
          </div>
          <p className='mishael__text txt__color'>In equity value on the platform</p>
          <button className='flat__btn'></button>
          <button className='flat__btn'></button>
          <button className='flat__btn'></button>
        </div>
      </section>
      <section className='work container'>
        <div className='work__left'>
          <div className='work__top'>
            <h1 className='work__title'>EQUITY, TAX & IPO PLANNING</h1>
          </div>
          <div className='work__text'>Work with a financial advisor to align your stock options with your financial goals.</div>
          <div className='work__div'>
            <Button title='Get started' className='work__botton' />
            <p className='work__p'>Learn more</p>
          </div>
        </div>
        <div className='work__right'>
          <img src='images/work.jpg' alt='' className='work__img' />
        </div>
      </section>
    </div>
  );
};

export default Home;
