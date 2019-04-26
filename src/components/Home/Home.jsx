import React, { Component } from 'react'
import Header from '../Header/Header'
import CardWithIcon from '../Cards/CardWithIcon'
import AsyncScriptLoader from '../../lib/AsyncScriptLoader'
import styles from './Home.scss'
import Slider from 'react-slick'
import Logo from '../Logo/Logo';

class Routes extends Component {

  render() {
    
    AsyncScriptLoader('https://www.powr.io/powr.js?platform=html')
    
    var settings = {
      dots: false,
      className: 'center-challenger',
      centerMode: true,
      infinite: true,
      centerPadding: 0,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    return (
      <div className={styles.home}>
        <Header/>
        <section className={styles.why}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.h2}>Porque escolher a Free Isenções?</h2>
            </div>
          </div>
          <div className={styles.icons}>
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <CardWithIcon >
                    <div className={styles.icon}>like</div>
                    <div className={styles.title}>
                      <h4 className={styles.h4}>Alto indice de aprovação</h4>
                    </div>
                    <div className={styles.description}>
                      <span className={styles.span}>Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2">
                  <CardWithIcon >
                    <div className={styles.icon}>like</div>
                    <div className={styles.title}>
                      <h4 className={styles.h4}>Alto indice de aprovação</h4>
                    </div>
                    <div className={styles.description}>
                      <span className={styles.span}>Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2">
                  <CardWithIcon >
                    <div className={styles.icon}>like</div>
                    <div className={styles.title}>
                      <h4 className={styles.h4}>Alto indice de aprovação</h4>
                    </div>
                    <div className={styles.description}>
                      <span className={styles.span}>Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2">
                  <CardWithIcon >
                    <div className={styles.icon}>like</div>
                    <div className={styles.title}>
                      <h4 className={styles.h4}>Alto indice de aprovação</h4>
                    </div>
                    <div className={styles.description}>
                      <span className={styles.span}>Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.services}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <h2 className={styles.h2}>Nossos Serviços</h2>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <CardWithIcon>
                  <div className={styles.icon}>check</div>
                  <div className={styles.title}>
                    <h4 className={styles.h4}>Tributos e Isenções</h4>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.span}>O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-4">
                <CardWithIcon>
                  <div className={styles.icon}>check</div>
                  <div className={styles.title}>
                    <h4 className={styles.h4}>Tributos e Isenções</h4>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.span}>O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-2"></div>
              <div className={styles.line}></div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <CardWithIcon>
                  <div className={styles.icon}>check</div>
                  <div className={styles.title}>
                    <h4 className={styles.h4}>Tributos e Isenções</h4>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.span}>O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-4">
                <CardWithIcon>
                  <div className={styles.icon}>check</div>
                  <div className={styles.title}>
                    <h4 className={styles.h4}>Tributos e Isenções</h4>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.span}>O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
        <section className={styles.whoTitle}>
          <div className="container">
            <h2 className={styles.h2}>Quem tem Direito?</h2>
          </div>
        </section>
        <section className={styles.whoItems}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className={styles.list}>
                  <li>
                    <p className={styles.p}>Deficiência Fisica</p>      
                    <div className={styles.icon}></div>
                  </li>
                  <li>
                    <p className={styles.p}>Deficiência visual</p>      
                    <div className={styles.icon}></div>
                  </li>
                  <li>
                    <p className={styles.p}>Deficiência intelectual</p>      
                    <div className={styles.icon}></div>
                  </li>
                  <li>
                    <p className={styles.p}>autismo</p>      
                    <div className={styles.icon}></div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </section>
        <section className={styles.challenger}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className={styles.h2}>Isenções Conquistadas</h2>
              </div>
              <div className="col-md-12">
                <div className={styles.challengerList}>
                  <Slider {...settings}>
                    <div className={styles.item}>
                      <div className={styles.image}></div>
                      <div className={styles.text}>
                        <h4 className={styles.h4}>Juliana dos Santos</h4>
                        <p className={styles.p}>Essa semana foi a vez da Juliana comprar seu carro com isenção no valor final. Nosso cliente é deficiente visual e quem vai dirigir é seu marido, mais um caso de beneficiário não condutor.</p>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.image}></div>
                      <div className={styles.text}>
                        <h4 className={styles.h4}>Juliana dos Santos</h4>
                        <p className={styles.p}>Essa semana foi a vez da Juliana comprar seu carro com isenção no valor final. Nosso cliente é deficiente visual e quem vai dirigir é seu marido, mais um caso de beneficiário não condutor.</p>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.image}></div>
                      <div className={styles.text}>
                        <h4 className={styles.h4}>Juliana dos Santos</h4>
                        <p className={styles.p}>Essa semana foi a vez da Juliana comprar seu carro com isenção no valor final. Nosso cliente é deficiente visual e quem vai dirigir é seu marido, mais um caso de beneficiário não condutor.</p>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.image}></div>
                      <div className={styles.text}>
                        <h4 className={styles.h4}>Juliana dos Santos</h4>
                        <p className={styles.p}>Essa semana foi a vez da Juliana comprar seu carro com isenção no valor final. Nosso cliente é deficiente visual e quem vai dirigir é seu marido, mais um caso de beneficiário não condutor.</p>
                      </div>
                    </div>
                  </Slider>                
                </div>
              </div>
            </div>
            

          </div>
        </section>


        <section className={styles.aboutUs}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className={styles.h2}>Quem somos</h2>
              </div>
              <div className="col-md-6">
                <div className={styles.logoCenter}>
                  <Logo
                    type={'secundary'}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.text}>
                  <i>A Free Isenções é uma empresa de Santos, especializada no processo de isenções que conta com uma equipe de atendimento qualificada e empenhada em garantir que os direitos de seus clientes sejam exercidos de acordo com a legislação brasileira.</i> <br/> <br/>
                  <p className={styles.p}>
                    <b>Nossa missão</b> é proporcionar um atendimento eficiente e eficaz a nossos clientes, garantindo sua satisfação acerca de nossos serviços. <br/> <br/>
                    <b>Nossa visão</b> é ser referência no mercado de assessoria ao público PCD acerca de isenção. <br/> <br/>
                    Buscamos proporcionar a <b>facilidade e agilidade</b> a nossos clientes acerca da burocracia que envolve esse tipo de processo. <br/> <br/>
                    O respeito e exercício de nossos direitos como cidadãos é a nossa preocupação! <br/><br/>
                    <strong>Você tem o direito e a Free, isenções.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.socials}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.h2}>Acompanhe as novidades da Free Isenções nas midias sociais</h2>
            </div>
          </div>
          <div className="container">
            <div className="powr-social-feed" id="230093b0_1555424118"></div>
          </div>
          <div className="container">
            <div className={styles.flex}>
              <h4 className={styles.h4}>curta no face</h4>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <h4 className={styles.h4}>curta no insta</h4>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Routes