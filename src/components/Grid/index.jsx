import { Container } from './styles'

import front from '../../assets/front.svg'
import barra from '../../assets/barra.svg'
import dev from '../../assets/dev.svg'
import ux from '../../assets/ux.svg'

export function Grid() {
  return (
    <Container>
      <div className="lux"></div>
      <div className="lux2"></div>
      <div className="box-line">
        <div className="line">
          <img src={front} alt="" className="front" />
        </div>
        <div className="line"></div>
        <div className="line">
          <img src={ux} alt="" className="ux" />
          <img src={barra} alt="" className="barra" />
          <img src={dev} alt="" className="dev" />
        </div>
      </div>
    </Container>
  )
}
