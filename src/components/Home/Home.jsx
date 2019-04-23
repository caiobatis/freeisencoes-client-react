import React, { Component } from 'react'
import Header from '../Header/Header'
import CardWithIcon from '../Cards/CardWithIcon'
import styles from './Home.scss'

import AsyncScriptLoader from '../../lib/AsyncScriptLoader'



class Routes extends Component {

  render() {
    
    AsyncScriptLoader('https://www.powr.io/powr.js?platform=html')

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
        <section className="aboutUs"></section>
        <section className={styles.socials}>
          <div className="container">
            <div className="text-center">
              <h2 className={styles.h2}>Acompanhe as novidades da Free Isenções nas midias sociais</h2>
            </div>
          </div>
          <div className="container">
            <div class="powr-social-feed" id="230093b0_1555424118"></div>
          </div>
          <div className="container">
            <div className="flex">
              <h4 className="h4">curta no face</h4>
              <div className="icon"></div>
              <div className="icon"></div>
              <h4 className="h4">curta no insta</h4>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Routes