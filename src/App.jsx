import React, { Component } from 'react'
import Header from './components/Header/Header'

import styles from './app.scss'
import CardWithIcon from './components/Cards/CardWithIcon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <section className={styles.why}>
          <div className="container">
            <div className="text-center">
              <h2 className="h2">Porque escolher a Free Isenções?</h2>
            </div>
          </div>
          <div className="icons">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                  <CardWithIcon 
                    padding={'30px'}
                  >
                    <div className="icon">like</div>
                    <div className="title">
                      <h4 className="h4">Alto indice de aprovação</h4>
                    </div>
                    <div className="description">
                      <span className="span">Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2">
                  <CardWithIcon 
                    padding={'30px'}
                  >
                    <div className="icon">like</div>
                    <div className="title">
                      <h4 className="h4">Alto indice de aprovação</h4>
                    </div>
                    <div className="description">
                      <span className="span">Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2">
                  <CardWithIcon 
                    padding={'30px'}
                  >
                    <div className="icon">like</div>
                    <div className="title">
                      <h4 className="h4">Alto indice de aprovação</h4>
                    </div>
                    <div className="description">
                      <span className="span">Grande experiência e agilidade no processo de isenções.</span>
                    </div>
                  </CardWithIcon>
                </div>
                <div className="col-md-2">
                  <CardWithIcon 
                    padding={'30px'}
                  >
                    <div className="icon">like</div>
                    <div className="title">
                      <h4 className="h4">Alto indice de aprovação</h4>
                    </div>
                    <div className="description">
                      <span className="span">Grande experiência e agilidade no processo de isenções.</span>
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
                  <h2 className="h2">Nossos Serviços</h2>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <CardWithIcon 
                  padding={'40px'}
                >
                  <div className="icon">check</div>
                  <div className="title">
                    <h4 className="h4">Tributos e Isenções</h4>
                  </div>
                  <div className="description">
                    <span className="span">O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-4">
                <CardWithIcon 
                  padding={'40px'}
                >
                  <div className="icon">check</div>
                  <div className="title">
                    <h4 className="h4">Tributos e Isenções</h4>
                  </div>
                  <div className="description">
                    <span className="span">O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <CardWithIcon 
                  padding={'40px'}
                >
                  <div className="icon">check</div>
                  <div className="title">
                    <h4 className="h4">Tributos e Isenções</h4>
                  </div>
                  <div className="description">
                    <span className="span">O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-4">
                <CardWithIcon 
                  padding={'40px'}
                >
                  <div className="icon">check</div>
                  <div className="title">
                    <h4 className="h4">Tributos e Isenções</h4>
                  </div>
                  <div className="description">
                    <span className="span">O requerente fica isento de pagar esse imposto anualmente. Este beneficio é válido para veículos 0KM ou semi-novo até R$ 70.000,00.</span>
                  </div>
                </CardWithIcon>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
        <div className={styles.who}></div>
        <div className={styles.win}></div>
        <div className={styles.about}></div>
        <div className={styles.socials}></div>
        <div className={styles.vehicle}></div>
        <div className={styles.contact}></div>
        <div className={styles.footer}></div>
      </div>
    )
  }
}

export default App