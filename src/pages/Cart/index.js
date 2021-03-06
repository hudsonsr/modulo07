import React from 'react';
import {
   MdRemoveCircleOutline,
   MdAddCircleOutline,
   MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
   return (
      <Container>
         <ProductTable>
            <thead>
               <tr>
                  <th />
                  <th> PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <img
                        src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-creation-21-masculino/42/D16-5429-042/D16-5429-042_zoom2.jpg?ts=1588782638&ims=326x"
                        alt="teste"
                     />
                  </td>
                  <td>
                     <strong>nome do produto</strong>
                     <span>R$15,90</span>
                  </td>
                  <td>
                     <div>
                        <button type="button">
                           <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" value={2} />
                        <button type="button">
                           <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                     </div>
                  </td>
                  <td>
                     <strong>R$31,80</strong>
                  </td>
                  <td>
                     <button type="button">
                        <MdDelete size={20} color="#7159c1" />
                     </button>
                  </td>
               </tr>
            </tbody>
         </ProductTable>
         <footer>
            <button type="button"> Finalizar Pedido</button>

            <Total>
               <span>TOTAL</span>
               <strong>R$ 210,53</strong>
            </Total>
         </footer>
      </Container>
   );
}
